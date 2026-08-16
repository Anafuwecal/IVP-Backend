import { Module } from '@nestjs/common';
import { TalentProfileController } from './talent-profile.controller';
import { TalentProfileService } from './talent-profile.service';
import { PrismaService } from '../prisma/prisma.service'; // Adjust path

@Module({
  controllers: [TalentProfileController], // MUST be listed here
  providers: [TalentProfileService, PrismaService],
})
export class TalentProfileModule {}