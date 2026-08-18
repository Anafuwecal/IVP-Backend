import { Module } from '@nestjs/common';
import { TalentProfileController } from './talent-profile.controller';
import { TalentProfileService } from './talent-profile.service';
import { PrismaService } from '../prisma/prisma.service';
import { FileUploadService } from '../upload/file-upload.service';

@Module({
  controllers: [TalentProfileController],
  providers: [TalentProfileService, PrismaService, FileUploadService],
})
export class TalentProfileModule {}