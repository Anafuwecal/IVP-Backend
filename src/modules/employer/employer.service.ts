import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { UpdateEmployerProfileDto } from './dto/update-employer-profile.dto';
import { FileUploadService } from '../upload/file-upload.service';

@Injectable()
export class EmployerService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly fileUploadService: FileUploadService,
  ) {}

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

    if (logoFile) {
      logoUrl = await this.fileUploadService.uploadFile(logoFile);
    }

    const updatedData = {
      ...dto,
      ...(logoUrl && { logoUrl }),
    };

    const companyName = updatedData.companyName ?? existingProfile.companyName;
    const contactPerson = updatedData.contactPerson ?? existingProfile.contactPerson;
    const industry = updatedData.industry ?? existingProfile.industry;
    const companySize = updatedData.companySize ?? existingProfile.companySize;
    const rcNumber = updatedData.rcNumber ?? existingProfile.rcNumber;
    const location = updatedData.location ?? existingProfile.location;
    const officeAddress = updatedData.officeAddress ?? existingProfile.officeAddress;


    // Check requirement #4 & #5: Profile is complete when all required info is provided
    const isProfileComplete = Boolean(
      companyName && 
      contactPerson && 
      industry && 
      companySize && 
      rcNumber && 
      location &&       
      officeAddress     
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
}