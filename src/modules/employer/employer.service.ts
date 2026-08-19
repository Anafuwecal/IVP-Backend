import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { UpdateEmployerProfileDto } from './dto/update-employer-profile.dto';

@Injectable()
export class EmployerService {
  constructor(private readonly prisma: PrismaService) {}

  async getProfile(userId: string) {
    const profile = await this.prisma.employerProfile.findUnique({
      where: { userId },
      include: { user: { select: { email: true, isVerified: true } } },
    });

    if (!profile) {
      throw new NotFoundException('Employer profile not found.');
    }

    return profile;
  }

  async updateProfile(
    userId: string,
    dto: UpdateEmployerProfileDto,
    logoFile?: Express.Multer.File,
  ) {
    const existingProfile = await this.prisma.employerProfile.findUnique({
      where: { userId },
    });

    if (!existingProfile) {
      throw new NotFoundException('Employer profile not found.');
    }

    let logoUrl = existingProfile.logoUrl;

    // Handle file upload if provided (e.g. upload to Supabase Storage, S3, or Cloudinary)
    if (logoFile) {
      logoUrl = await this.uploadCompanyLogo(userId, logoFile);
    }

    // Merge updated fields with existing fields to evaluate completeness
    const updatedData = {
      ...dto,
      ...(logoUrl && { logoUrl }),
    };

    const companyName = updatedData.companyName ?? existingProfile.companyName;
    const contactPerson = updatedData.contactPerson ?? existingProfile.contactPerson;
    const industry = updatedData.industry ?? existingProfile.industry;
    const companySize = updatedData.companySize ?? existingProfile.companySize;
    const rcNumber = updatedData.rcNumber ?? existingProfile.rcNumber;

    // Check requirement #4 & #5: Profile is complete when all required info is provided
    const isProfileComplete = Boolean(
      companyName && contactPerson && industry && companySize && rcNumber,
    );

    const profile = await this.prisma.employerProfile.update({
      where: { userId },
      data: {
        ...updatedData,
        isProfileComplete,
      },
    });

    return {
      message: 'Company profile updated successfully.',
      profile,
    };
  }

  private async uploadCompanyLogo(userId: string, file: Express.Multer.File): Promise<string> {
    // Replace with your actual cloud storage method (e.g. Supabase Storage client or S3)
    // For now, return a placeholder/hosted file path
    const fileExtension = file.originalname.split('.').pop();
    const fileName = `logos/employer-${userId}-${Date.now()}.${fileExtension}`;
    
    // Example: return public URL from cloud storage bucket
    return `https://your-bucket-url.supabase.co/storage/v1/object/public/company-logos/${fileName}`;
  }
}