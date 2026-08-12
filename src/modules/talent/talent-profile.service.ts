import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import {
  UpdatePersonalInfoDto,
  AddExperienceDto,
  AddEducationDto,
  UpdateSkillsDto,
} from './dto/talent-profile.dto';

@Injectable()
export class TalentProfileService {
  constructor(private prisma: PrismaService) {}

  // Rule 1: Update personal information
  async updatePersonalInfo(userId: string, dto: UpdatePersonalInfoDto) {
    const profile = await this.getProfileByUserId(userId);

    await this.prisma.talentProfile.update({
      where: { id: profile.id },
      data: dto,
    });

    return this.calculateProfileCompletion(userId);
  }

  // Rule 2: Add work experience
  async addExperience(userId: string, dto: AddExperienceDto) {
    const profile = await this.getProfileByUserId(userId);

    await this.prisma.workExperience.create({
      data: {
        ...dto,
        talentProfileId: profile.id,
      },
    });

    return this.calculateProfileCompletion(userId);
  }

  // Rule 3: Add educational qualifications
  async addEducation(userId: string, dto: AddEducationDto) {
    const profile = await this.getProfileByUserId(userId);

    await this.prisma.education.create({
      data: {
        ...dto,
        talentProfileId: profile.id,
      },
    });

    return this.calculateProfileCompletion(userId);
  }

  // Rule 4: Add skills and certifications
  async updateSkills(userId: string, dto: UpdateSkillsDto) {
    const profile = await this.getProfileByUserId(userId);

    await this.prisma.talentProfile.update({
      where: { id: profile.id },
      data: {
        skills: dto.skills,
        certifications: dto.certifications || [],
      },
    });

    return this.calculateProfileCompletion(userId);
  }

  // --- Helper Methods ---

  private async getProfileByUserId(userId: string) {
    const profile = await this.prisma.talentProfile.findUnique({
      where: { userId },
    });
    if (!profile) throw new NotFoundException('Talent profile not found');
    return profile;
  }

  // Rule 6: Profile completion percentage must update after each successful section completion
  private async calculateProfileCompletion(userId: string) {
    const profile = await this.prisma.talentProfile.findUnique({
      where: { userId },
      include: { workExperience: true, education: true }
    });

    if (!profile) {
      throw new NotFoundException('Talent profile not found');
    }

    let score = 20; // Base score for having a profile (firstName, lastName)

    // Personal Info (30 points)
    if (profile.professionalTitle && profile.bio && profile.location) score += 15;
    if (profile.resumeUrl) score += 15;

    // Experience (20 points)
    if (profile.workExperience && profile.workExperience.length > 0) score += 20;

    // Education (20 points)
    if (profile.education && profile.education.length > 0) score += 20;

    // Skills (10 points)
    if (profile.skills && profile.skills.length > 0) score += 10;

    // Ensure it caps at 100
    const finalPercent = Math.min(score, 100);

    // Rule 5: System must save all profile updates successfully
    const updatedProfile = await this.prisma.talentProfile.update({
      where: { id: profile.id },
      data: { profilePercent: finalPercent },
      include: {
        workExperience: true,
        education: true,
      },
    });

    return {
      message: 'Profile updated successfully',
      profilePercent: updatedProfile.profilePercent,
      isComplete: updatedProfile.profilePercent === 100,
      profile: updatedProfile,
    };
  }
}