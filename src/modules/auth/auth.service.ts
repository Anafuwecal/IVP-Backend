import {
  Injectable,
  UnauthorizedException,
  ConflictException,
  BadRequestException,
  NotFoundException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from '../prisma/prisma.service';
import * as bcrypt from 'bcrypt';
import { randomBytes } from 'crypto';
import { EmailService } from '../email/email.service';
import {
  RegisterEmployerDto,
  RegisterTalentDto,
  LoginDto,
  ForgotPasswordDto,
  ResetPasswordDto,
} from './dto/auth.dto';

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwtService: JwtService,
    private emailService: EmailService, // Inject EmailService
  ) {}

  // --- REGISTRATION ---
  async registerTalent(dto: RegisterTalentDto) {
    if (dto.password !== dto.confirmPassword) {
      throw new BadRequestException('Passwords do not match');
    }

    const existingUser = await this.prisma.user.findUnique({
      where: { email: dto.email },
    });

    if (existingUser) {
      throw new ConflictException(
        'An account already exists with this email address.',
      );
    }

    const passwordHash = await bcrypt.hash(dto.password, 10);

    // Generate OTP or Verification Token
    const verificationToken = randomBytes(32).toString('hex');

    // Transaction to ensure both User and Profile are created together
    const user = await this.prisma.$transaction(async (prisma) => {
      const newUser = await prisma.user.create({
        data: {
          email: dto.email,
          passwordHash,
          role: 'TALENT',
          isVerified: false, // Requirement: Remains inactive
          verificationToken,
          talentProfile: {
            create: {
              firstName: dto.firstName,
              lastName: dto.lastName,
              profilePercent: 20,
            },
          },
        },
      });
      return newUser;
    });

    // TODO: Integrate Email Service here (e.g., SendGrid/AWS SES)
    // await this.emailService.sendVerificationEmail(user.email, verificationToken);
    await this.emailService.sendVerificationEmail(
      user.email,
      verificationToken,
    );

    return {
      message:
        'Registration successful. Please check your email to verify your account.',
      userId: user.id,
    };
  }

  // Verify the account
  async verifyEmail(token: string) {
    const user = await this.prisma.user.findFirst({
      where: { verificationToken: token },
    });

    if (!user) {
      throw new BadRequestException('Invalid or expired verification token.');
    }

    if (user.isVerified) {
      return { message: 'Account is already verified. You can log in.' };
    }

    // Activate the account and clear the token
    await this.prisma.user.update({
      where: { id: user.id },
      data: {
        isVerified: true,
        verificationToken: null,
      },
    });

    return {
      message: 'Email verified successfully! Your account is now active.',
    };
  }

  // --- LOGIN ---
  async login(dto: LoginDto) {
    const user = await this.prisma.user.findUnique({
      where: { email: dto.email },
    });

    if (!user) {
      throw new UnauthorizedException('Invalid email address or password.');
    }

    const isPasswordValid = await bcrypt.compare(
      dto.password,
      user.passwordHash,
    );

    if (!isPasswordValid) {
      throw new UnauthorizedException('Invalid email address or password.');
    }

    // Requirement: Only verified accounts can log in
    if (!user.isVerified) {
      throw new UnauthorizedException(
        'Please verify your email address before logging in.',
      );
    }

    // Success: Return JWT (Frontend will handle the redirect to Talent Dashboard)
    return this.generateToken(user.id, user.email, user.role);
  }

  // --- PASSWORD RESET REQUEST ---
  async requestPasswordReset(dto: ForgotPasswordDto) {
    const user = await this.prisma.user.findUnique({
      where: { email: dto.email },
    });

    if (!user) {
      // Rule 5: If email is not registered, return this exact message.
      throw new NotFoundException('No account found with this email address.');
    }

    // Generate token using the crypto approach we fixed earlier
    const resetToken = randomBytes(32).toString('hex');

    // Rule 3: Token expires after validity period (1 hour)
    const resetTokenExpiry = new Date();
    resetTokenExpiry.setHours(resetTokenExpiry.getHours() + 1);

    await this.prisma.user.update({
      where: { id: user.id },
      data: { resetToken, resetTokenExpiry },
    });

    // Rule 2: System sends link to registered email
    await this.emailService.sendPasswordResetEmail(user.email, resetToken);

    return { message: 'A password reset link has been sent.' };
  }

  // --- PASSWORD RESET CONFIRMATION ---
  async confirmPasswordReset(dto: ResetPasswordDto) {
    // Rule 3 & 4 check: Find user with matching token WHERE expiry is still in the future
    const user = await this.prisma.user.findFirst({
      where: {
        resetToken: dto.token,
        resetTokenExpiry: { gt: new Date() }, // 'gt' means Greater Than current time
      },
    });

    if (!user) {
      throw new BadRequestException('Invalid or expired password reset token.');
    }

    // Hash the new password
    const passwordHash = await bcrypt.hash(dto.newPassword, 10);

    // Update user and clear the token/expiry fields so it can't be reused
    await this.prisma.user.update({
      where: { id: user.id },
      data: {
        passwordHash,
        resetToken: null,
        resetTokenExpiry: null,
      },
    });

    return {
      message:
        'Password has been successfully reset. You can now log in with your new password.',
    };
  }

  private generateToken(userId: string, email: string, role: string) {
    const payload = { sub: userId, email, role };
    return {
      access_token: this.jwtService.sign(payload),
      user: { id: userId, email, role },
    };
  }

  // --- EMPLOYER REGISTRATION ---
  async registerEmployer(dto: RegisterEmployerDto) {
    // 1. Password confirmation check
    if (dto.password !== dto.confirmPassword) {
      throw new BadRequestException('Passwords do not match');
    }

    // 2. Rule 2 & 5 check: Unique email check
    const existingUser = await this.prisma.user.findUnique({
      where: { email: dto.email },
    });

    if (existingUser) {
      throw new ConflictException(
        'An account already exists with this email address.',
      );
    }

    // 3. Hash password & generate verification token
    const passwordHash = await bcrypt.hash(dto.password, 10);
    const verificationToken = randomBytes(32).toString('hex');

    // 4. Create User with EMPLOYER role and initial EmployerProfile
    const user = await this.prisma.$transaction(async (prisma) => {
      return prisma.user.create({
        data: {
          email: dto.email,
          passwordHash,
          role: 'EMPLOYER',
          isVerified: false, // Must verify email before active
          verificationToken,
          employerProfile: {
            create: {
              companyName: dto.companyName,
              contactPerson: dto.contactPerson,
              industry: dto.industry,
              companySize: dto.companySize,
              rcNumber: dto.rcNumber,
              isProfileComplete: false, // Must complete profile before posting jobs
            },
          },
        },
      });
    });

    // 5. Send real verification email
    await this.emailService.sendVerificationEmail(
      user.email,
      verificationToken,
    );

    return {
      message:
        'Employer registration successful. Check your email to verify your account.',
      userId: user.id,
    };
  }
}
