import {
  Injectable,
  ConflictException,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service'; // Adjust path as needed
import { RegisterTalentDto, UpdateTalentProfileDto } from './dto/talent.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class TalentService {
  constructor(private prisma: PrismaService) {}

  // 1. Talent Registration
  async register(data: RegisterTalentDto) {
    const existingUser = await this.prisma.user.findUnique({
      where: { email: data.email },
    });

    if (existingUser) {
      throw new ConflictException(
        'An account already exists with this email address.',
      );
    }

    const hashedPassword = await bcrypt.hash(data.password, 10);

    // Create Base User and associated Talent Profile
    const user = await this.prisma.user.create({
      data: {
        email: data.email,
        passwordHash: hashedPassword,
        role: 'TALENT',
        talentProfile: {
          create: {
            firstName: data.firstName,
            lastName: data.lastName,
            profilePercent: 20, // FIXED: Changed to profilePercent to match your Prisma schema
          },
        },
      },
      include: { talentProfile: true },
    });

    return { message: 'Registration successful', userId: user.id };
  }

  // 2. Talent Profile Management
  async updateProfile(userId: string, data: UpdateTalentProfileDto) {
    const profile = await this.prisma.talentProfile.findUnique({
      where: { userId },
    });

    // FIXED: Strict null check
    if (!profile) {
      throw new NotFoundException('Talent profile not found');
    }

    // Calculate dynamic completion percentage[cite: 1, 6]
    let completion = 20;

    // FIXED: Safely check for undefined lengths to satisfy TS18048
    if (
      (data.skills && data.skills.length > 0) ||
      (profile.skills && profile.skills.length > 0)
    ) {
      completion += 20;
    }

    // Note: Checking DTO only, as these fields don't exist in your Prisma schema yet.
    if (data.workExperience && data.workExperience.length > 0) {
      completion += 30;
    }
    if (
      data.educationalQualifications &&
      data.educationalQualifications.length > 0
    ) {
      completion += 30;
    }

    // FIXED: Construct the update object dynamically so we only pass known properties to Prisma
    const updateData: any = {
      profilePercent: completion,
    };

    if (data.firstName) updateData.firstName = data.firstName;
    if (data.lastName) updateData.lastName = data.lastName;
    if (data.skills) updateData.skills = data.skills;

    // Once you add workExperience and educationalQualifications to schema.prisma, you can map them here.

    const updatedProfile = await this.prisma.talentProfile.update({
      where: { userId },
      data: updateData,
    });

    return updatedProfile;
  }

  // 3. Talent Dashboard API
  async getDashboardData(userId: string) {
    const profile = await this.prisma.talentProfile.findUnique({
      where: { userId },
      include: {
        applications: {
          select: { id: true, status: true, job: { select: { title: true } } },
        },
      },
    });

    // FIXED: Strict null check
    if (!profile) {
      throw new NotFoundException('Talent profile not found');
    }

    // Standardized JSON payload view[cite: 3]
    return {
      profileCompletion: profile.profilePercent, // FIXED: Mapped Prisma's profilePercent to the expected JSON output[cite: 1, 6]
      activeApplications: profile.applications
        ? profile.applications.length
        : 0, // FIXED: Safe navigation
      recentApplications: profile.applications || [], // FIXED: Safe navigation
    };
  }
}
