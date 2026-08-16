import { Injectable, UnauthorizedException, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service'; 
import { EmailService } from '../email/email.service'; 
import { JwtService } from '@nestjs/jwt'; 
import { AccountStatus, Role, Prisma } from '@prisma/client';
import * as crypto from 'crypto';

@Injectable()
export class AdminAuthService {
  constructor(
    private prisma: PrismaService,
    private emailService: EmailService,
    private jwtService: JwtService,
  ) {}

  async requestAdminLogin(email: string) {
    // 1. Check Allowlist
    const allowedEmails = process.env.ADMIN_EMAILS?.split(',') || [];
    if (!allowedEmails.includes(email)) {
      throw new UnauthorizedException('You do not have permission to access the admin portal.');
    }

    // 2. Generate secure random token (expires in 15 mins)
    const token = crypto.randomBytes(32).toString('hex');
    const expiry = new Date(Date.now() + 15 * 60 * 1000);

    // 3. Upsert the Admin User (Creates them if they don't exist yet)
    await this.prisma.user.upsert({
      where: { email },
      update: {
        adminLoginToken: token,
        adminLoginTokenExpiry: expiry,
        role: 'ADMIN',
      },
      create: {
        email,
        role: 'ADMIN',
        status: 'ACTIVE',
        adminLoginToken: token,
        adminLoginTokenExpiry: expiry,
        // Add a random dummy password that can never be guessed
        passwordHash: crypto.randomBytes(32).toString('hex'), 
      },
    });

    // 4. Send the Magic Link Email
    await this.emailService.sendAdminLoginEmail(email, token);
    
    return { message: 'Welcome back, A login link has been sent to your email.' };
  }

  async verifyAdminLogin(token: string) {
    // 1. Find user with this token where it hasn't expired
    const user = await this.prisma.user.findFirst({
      where: {
        adminLoginToken: token,
        adminLoginTokenExpiry: { gt: new Date() },
      },
    });

    if (!user) {
      throw new UnauthorizedException('Invalid or expired login link. Please request a new one.');
    }

    // 2. Clear the token so it can't be reused
    await this.prisma.user.update({
      where: { id: user.id },
      data: {
        adminLoginToken: null,
        adminLoginTokenExpiry: null,
      },
    });

    // 1. Create the payload. Make sure this matches what your JwtStrategy expects!
    const payload = { 
      sub: user.id, 
      email: user.email, 
      role: user.role 
    };
    const accessToken = this.jwtService.sign(payload);

    // 3. Return the token alongside the user data
    return { 
      message: 'Login successful',
      access_token: accessToken, // <-- Now Postman will receive this!
      user: { 
        id: user.id, 
        email: user.email, 
        role: user.role 
      } 
    };
  }
}

@Injectable()
export class AdminDashboardService {
  constructor(
    private prisma: PrismaService,
    private emailService: EmailService,
  ) {}

  // Rule 11: Helper method for Audit Logging
  private async logAdminAction(adminId: string, action: string, targetUserId: string, details?: string) {
    try {
      // NOTE: Ensure you have an AuditLog model in your Prisma schema. 
      // If not, you can replace this with a standard console.log or your preferred logging service for now.
      await this.prisma.auditLog.create({
        data: {
          adminId,
          action,
          targetUserId,
          details,
        },
      });
    } catch (error) {
      console.error('Failed to write to audit log:', error);
    }
  }

  // Rule 2 & 5: View all users and search by name, email, or role
  // Rules 1, 2, & 3: View, Search, and Filter all users
  async getAllUsers(filters: {
    search?: string;
    role?: Role;
    status?: AccountStatus;
    verificationStatus?: string;
    startDate?: string;
    endDate?: string;
  }) {
    const { search, role, status, verificationStatus, startDate, endDate } = filters;
    const where: Prisma.UserWhereInput = {};

    // Filter by Role & Status
    if (role) where.role = role;
    if (status) where.status = status;

    // Filter by Registration Date
    if (startDate || endDate) {
      where.createdAt = {};
      if (startDate) where.createdAt.gte = new Date(startDate);
      if (endDate) where.createdAt.lte = new Date(endDate);
    }

    // Search by Name, Email, Phone, Company, or ID
    if (search) {
      where.OR = [
        { id: { equals: search } },
        { email: { contains: search, mode: 'insensitive' } },
        {
          talentProfile: {
            OR: [
              { firstName: { contains: search, mode: 'insensitive' } },
              { lastName: { contains: search, mode: 'insensitive' } },
              { phoneNumber: { contains: search, mode: 'insensitive' } },
            ],
          },
        },
        {
          employerProfile: {
            OR: [
              { companyName: { contains: search, mode: 'insensitive' } },
              { phoneNumber: { contains: search, mode: 'insensitive' } },
            ],
          },
        },
      ];
    }

    // Filter by Verification Status (Checks both Employer and Talent profiles)
    if (verificationStatus) {
      where.OR = [
        ...(where.OR || []),
        { employerProfile: { verificationStatus: verificationStatus as any } },
        // Add talent verification check here if applicable to your schema
      ];
    }

    return this.prisma.user.findMany({
      where,
      select: {
        id: true,
        email: true,
        role: true,
        status: true,
        createdAt: true,
        talentProfile: { select: { firstName: true, lastName: true } },
        employerProfile: { select: { companyName: true, verificationStatus: true } },
      },
      orderBy: { createdAt: 'desc' },
    });
  }

  // Rule 4: View user profile details
  async getUserDetails(userId: string) {
    const user = await this.prisma.user.findUnique({
      where: { id: userId },
      include: {
        talentProfile: true,
        employerProfile: true,
      },
    });

    if (!user) throw new NotFoundException('User not found');
    return user;
  }

  // Rules 5, 6, 7, 8: Update user status (Activate, Deactivate, Suspend) + Rule 11
  async updateUserStatus(adminId: string, userId: string, newStatus: AccountStatus) {
    const user = await this.prisma.user.findUnique({ where: { id: userId } });
    if (!user) throw new NotFoundException('User not found');

    const updatedUser = await this.prisma.user.update({
      where: { id: userId },
      data: { status: newStatus },
      select: { id: true, email: true, status: true },
    });

    await this.logAdminAction(adminId, `USER_STATUS_UPDATED`, userId, `Status changed to ${newStatus}`);
    return updatedUser;
  }

  // Rule 9: Resend verification email
  async resendVerificationEmail(adminId: string, userId: string) {
    const user = await this.prisma.user.findUnique({ where: { id: userId } });
    if (!user) throw new NotFoundException('User not found');

    // Generate a new verification token
    const verificationToken = crypto.randomBytes(32).toString('hex');
    
    await this.prisma.user.update({
      where: { id: userId },
      data: { verificationToken }, // Adjust field name to match your Prisma schema
    });

    await this.emailService.sendVerificationEmail(user.email, verificationToken);
    await this.logAdminAction(adminId, 'RESEND_VERIFICATION_EMAIL', userId);
    
    return { message: 'Verification email resent successfully' };
  }

  // Rule 10: Reset user password
  async resetUserPassword(adminId: string, userId: string) {
    const user = await this.prisma.user.findUnique({ where: { id: userId } });
    if (!user) throw new NotFoundException('User not found');

    // Generate a reset token
    const resetToken = crypto.randomBytes(32).toString('hex');
    const resetTokenExpires = new Date(Date.now() + 3600000); // 1 hour expiry
    
    await this.prisma.user.update({
      where: { id: userId },
      data: {
        resetPasswordToken: resetToken, // Adjust field names to match your Prisma schema
        resetPasswordExpires: resetTokenExpires,
      },
    });

    await this.emailService.sendPasswordResetEmail(user.email, resetToken);
    await this.logAdminAction(adminId, 'INITIATED_PASSWORD_RESET', userId);

    return { message: 'Password reset email sent to user' };
  }
}

@Injectable()
export class AdminEmployerService {
  constructor(
    private prisma: PrismaService,
    private emailService: EmailService,
  ) {}

  async getPendingRequests() {
    return this.prisma.employerProfile.findMany({
      where: { verificationStatus: 'PENDING' },
      include: { user: { select: { email: true} } },
    });
  }

  async updateVerificationStatus(employerId: string, status: 'APPROVED' | 'REJECTED') {
    const employer = await this.prisma.employerProfile.findUnique({
      where: { id: employerId },
      include: { user: true },
    });

    if (!employer) throw new NotFoundException('Employer not found');

    const updatedEmployer = await this.prisma.employerProfile.update({
      where: { id: employerId },
      data: { verificationStatus: status },
    });

    // Rule 3: Send notification via Resend
    await this.emailService.sendEmployerVerificationStatusEmail(
      employer.user.email,
      employer.companyName, 
      status
    );

    return updatedEmployer;
  }
}

@Injectable()
export class DashboardService {
  constructor(private prisma: PrismaService) {}

  async getDashboardStats() {
    // Run all queries in parallel for maximum performance
    const [
      totalCandidates,
      totalEmployers,
      activeJobs,
      totalApplications,
      pendingVerifications,
      recentUsers,
    ] = await Promise.all([
      // 1. Total registered candidates (Assuming role is 'TALENT' or 'CANDIDATE')
      this.prisma.user.count({ where: { role: 'TALENT' } }),

      // 2. Total registered employers
      this.prisma.user.count({ where: { role: 'EMPLOYER' } }),

      // 3. Total active job postings
      this.prisma.job.count({ where: { status: 'PUBLISHED' } }), // Adjust status enum as needed

      // 4. Total job applications
      this.prisma.application.count(),

      // 5. Pending employer verification requests
      this.prisma.employerProfile.findMany({
        where: { verificationStatus: 'PENDING' },
        select: {
          id: true,
          companyName: true,
          createdAt: true,
          user: { select: { email: true } },
        },
        take: 5, // Just get the latest 5 for the dashboard view
        orderBy: { createdAt: 'desc' },
      }),

      // 6. Recently registered users
      this.prisma.user.findMany({
        take: 5,
        orderBy: { createdAt: 'desc' },
        select: {
          id: true,
          email: true,
          role: true,
          status: true,
          createdAt: true,
        },
      }),
    ]);

    return {
      overview: {
        totalCandidates,
        totalEmployers,
        activeJobs,
        totalApplications,
        pendingVerificationCount: pendingVerifications.length,
      },
      lists: {
        pendingVerifications,
        recentUsers,
      },
    };
  }
}