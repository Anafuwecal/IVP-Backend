import { Injectable, NotFoundException, InternalServerErrorException } from '@nestjs/common';
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
    const dtoData = dto || {}; // Prevents destructuring crash
    const updateData: any = {};

    // Safely map fields
    if (dtoData.professionalTitle !== undefined) updateData.professionalTitle = dtoData.professionalTitle;
    if (dtoData.bio !== undefined) updateData.bio = dtoData.bio;
    if (dtoData.location !== undefined) updateData.location = dtoData.location;
    if (dtoData.phoneNumber !== undefined) updateData.phoneNumber = dtoData.phoneNumber;
    
    // Explicitly parse age to prevent Prisma String/Int crashes from FormData
    if (dtoData.age !== undefined && dtoData.age !== null) {
      const parsedAge = Number(dtoData.age);
      if (!isNaN(parsedAge)) updateData.age = parsedAge;
    }

    if (file) {
      try {
        const uploadedUrl = await this.fileUploadService.uploadFile(file); 
        updateData.profileImageUrl = uploadedUrl;
      } catch (error) {
        console.error("Profile Image Upload Failed:", error);
        throw new InternalServerErrorException("Failed to upload profile image.");
      }
    }

    if (Object.keys(updateData).length > 0) {
      try {
        await this.prisma.talentProfile.update({
          where: { id: profile.id },
          data: updateData,
        });
      } catch (error) {
        console.error("Prisma updatePersonalInfo Error:", error);
        throw new InternalServerErrorException("Database update failed for personal info.");
      }
    }

    return this.calculateProfileCompletion(userId);
  }

  // Rule 2: Add work experience
  async addExperience(userId: string, dto: AddExperienceDto) {
    const profile = await this.getProfileByUserId(userId);
    const dtoData = dto || {};

    try {
      await this.prisma.workExperience.create({
        data: {
          company: dtoData.company,
          role: dtoData.role,
          description: dtoData.description,
          // Explicitly convert string dates to Date objects to satisfy Prisma
          startDate: new Date(dtoData.startDate),
          endDate: dtoData.endDate ? new Date(dtoData.endDate) : undefined,
          talentProfileId: profile.id,
        },
      });
    } catch (error) {
      console.error("Prisma addExperience Error:", error);
      throw new InternalServerErrorException("Failed to save work experience. Check date formats.");
    }

    return this.calculateProfileCompletion(userId);
  }

  // Rule 3: Add educational qualifications
  async addEducation(userId: string, dto: AddEducationDto) {
    const profile = await this.getProfileByUserId(userId);
    const dtoData = dto || {};

    try {
      await this.prisma.education.create({
        data: {
          institution: dtoData.institution,
          degree: dtoData.degree,
          fieldOfStudy: dtoData.fieldOfStudy,
          startDate: new Date(dtoData.startDate),
          endDate: dtoData.endDate ? new Date(dtoData.endDate) : undefined,
          talentProfileId: profile.id,
        },
      });
    } catch (error) {
      console.error("Prisma addEducation Error:", error);
      throw new InternalServerErrorException("Failed to save education data. Check date formats.");
    }

    return this.calculateProfileCompletion(userId);
  }

  // Rule 4: Update skills, certifications, portfolio, and resume
  async updateSkills(userId: string, dto: UpdateSkillsDto, file?: Express.Multer.File) {
    const profile = await this.getProfileByUserId(userId);
    const dtoData = dto || {};
    const updateData: any = {};

    if (dtoData.skills !== undefined) updateData.skills = dtoData.skills; 
    if (dtoData.certifications !== undefined) updateData.certifications = dtoData.certifications;
    if (dtoData.portfolioUrl !== undefined) updateData.portfolioUrl = dtoData.portfolioUrl;

    if (file) {
      try {
        const uploadedUrl = await this.fileUploadService.uploadFile(file); 
        updateData.resumeUrl = uploadedUrl;
      } catch (error) {
        console.error("Resume Upload Failed:", error);
        throw new InternalServerErrorException("Failed to upload resume.");
      }
    }

    if (Object.keys(updateData).length > 0) {
      try {
        await this.prisma.talentProfile.update({
          where: { id: profile.id },
          data: updateData,
        });
      } catch (error) {
        console.error("Prisma updateSkills Error:", error);
        throw new InternalServerErrorException("Database update failed for skills.");
      }
    }

    return this.calculateProfileCompletion(userId);
  }

  // Rule 5: Update employment preferences
  async updateEmploymentPreferences(userId: string, dto: UpdateEmploymentPreferenceDto) {
    const profile = await this.getProfileByUserId(userId);
    const dtoData = dto || {};

    try {
      await this.prisma.talentProfile.update({
        where: { id: profile.id },
        data: {
          preferredJobType: dtoData.preferredJobType,
          preferredLocation: dtoData.preferredLocation,
          expectedSalary: dtoData.expectedSalary,
          availability: dtoData.availability
        },
      });
    } catch (error) {
      console.error("Prisma updateEmploymentPreferences Error:", error);
      throw new InternalServerErrorException("Failed to update employment preferences.");
    }

    return this.calculateProfileCompletion(userId);
  }

  // --- Helper Methods ---

  private async getProfileByUserId(userId: string) {
    // If JWT guard doesn't map req.user.userId correctly, this catches it immediately
    if (!userId) {
      throw new InternalServerErrorException('User ID is missing. Check your JWT payload mapping in AuthGuard.');
    }

    const profile = await this.prisma.talentProfile.findUnique({
      where: { userId },
    });
    
    if (!profile) throw new NotFoundException('Talent profile not found');
    return profile;
  }

  // Rule 6: Profile completion percentage
  private async calculateProfileCompletion(userId: string) {
    try {
      const profile = await this.prisma.talentProfile.findUnique({
        where: { userId },
        include: { workExperience: true, education: true }
      });

      if (!profile) throw new NotFoundException('Talent profile not found');

      let score = 20; 

      if (profile.professionalTitle && profile.bio && profile.location) score += 15;
      if (profile.profileImageUrl) score += 5; 
      if (profile.workExperience && profile.workExperience.length > 0) score += 20;
      if (profile.education && profile.education.length > 0) score += 20;
      if (profile.skills && profile.skills.length > 0) score += 5;
      if (profile.portfolioUrl) score += 5; 
      if (profile.resumeUrl) score += 5; 
      if (profile.preferredJobType || profile.availability || profile.expectedSalary) score += 5;

      const finalPercent = Math.min(score, 100);

      const updatedProfile = await this.prisma.talentProfile.update({
        where: { id: profile.id },
        data: { profilePercent: finalPercent },
        include: { workExperience: true, education: true },
      });

      return {
        message: 'Profile updated successfully',
        profilePercent: updatedProfile.profilePercent,
        isComplete: updatedProfile.profilePercent === 100,
        profile: updatedProfile,
      };
    } catch (error) {
      console.error("Calculate Profile Completion Error:", error);
      if (error instanceof NotFoundException) throw error;
      throw new InternalServerErrorException("Error calculating profile completion.");
    }
  }
}