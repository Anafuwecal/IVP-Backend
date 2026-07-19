import { Module } from '@nestjs/common';
import { HealthController } from './health.controller';
import { HealthService } from './health.service';
import { PrismaService } from './prisma.service';

@Module({
  controllers: [HealthController],
  providers: [HealthService, PrismaService],
  exports: [PrismaService], // Allows other business modules to share this instance later
})
export class HealthModule {}