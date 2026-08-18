import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { FileUploadService } from '../upload/file-upload.service';
import type { Express } from 'express';
import {
  UpdatePersonalInfoDto,
  AddExperienceDto,
  AddEducationDto,
  UpdateSkillsDto,
  UpdateEmploymentPreferenceDto
} from './dto/talent-profile.dto';

@Injectable()
export class TalentProfileService {
  constructor(
    private prisma: PrismaService,
    private fileUploadService: FileUploadService 
  ) {}

  // Rule 1: Update personal information
  async updatePersonalInfo(userId: string, dto: UpdatePersonalInfoDto, file?: Express.Multer.File) {
    const profile = await this.getProfileByUserId(userId);

    // Extract swagger document field 'profileImage' out of the data payload
    const { profileImage, ...updateData } = dto as any;

    // Handle File Upload
    if (file) {
      // Assuming your FileUploadService has a method returning the uploaded URL
      const uploadedUrl = await this.fileUploadService.uploadFile(file); 
      updateData.profileImageUrl = uploadedUrl;
    }

    await this.prisma.talentProfile.update({
      where: { id: profile.id },
      data: updateData, // Handles title, bio, location, age, phoneNumber, and newly uploaded profileImageUrl
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

  // Rule 4: Update skills, certifications, portfolio, and resume
  async updateSkills(userId: string, dto: UpdateSkillsDto, file?: Express.Multer.File) {
    const profile = await this.getProfileByUserId(userId);

    // Extract swagger document field 'resume' out of the data payload
    const { resume, ...dtoData } = dto as any;
    
    const updateData: any = {
      skills: dtoData.skills,
      certifications: dtoData.certifications || [],
      portfolioUrl: dtoData.portfolioUrl, 
    };

    // Handle Resume Upload
    if (file) {
      // Assuming your FileUploadService has a method returning the uploaded URL
      const uploadedUrl = await this.fileUploadService.uploadFile(file); 
      updateData.resumeUrl = uploadedUrl;
    }

    await this.prisma.talentProfile.update({
      where: { id: profile.id },
      data: updateData,
    });

    return this.calculateProfileCompletion(userId);
  }

  // Rule 5: Update employment preferences
  async updateEmploymentPreferences(userId: string, dto: UpdateEmploymentPreferenceDto) {
    const profile = await this.getProfileByUserId(userId);

    await this.prisma.talentProfile.update({
      where: { id: profile.id },
      data: dto, // Handles jobType, location, salary, and availability
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

    // Personal Info (20 points total)
    if (profile.professionalTitle && profile.bio && profile.location) score += 15;
    if (profile.profileImageUrl) score += 5; // New metric

    // Experience (20 points)
    if (profile.workExperience && profile.workExperience.length > 0) score += 20;

    // Education (20 points)
    if (profile.education && profile.education.length > 0) score += 20;

    // Skills, Portfolio, & Resume (15 points total)
    if (profile.skills && profile.skills.length > 0) score += 5;
    if (profile.portfolioUrl) score += 5; // New metric
    if (profile.resumeUrl) score += 5;    // Moved from personal info

    // Employment Preferences (5 points total)
    if (profile.preferredJobType || profile.availability || profile.expectedSalary) score += 5;

    // Ensure it caps at 100
    const finalPercent = Math.min(score, 100);

    // Rule 7: System must save all profile updates successfully
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