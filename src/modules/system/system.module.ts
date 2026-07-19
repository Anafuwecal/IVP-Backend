import { Module } from '@nestjs/common';
import { SystemController } from './system.controller';
import { SystemService } from './system.service';
import { HealthModule } from '../health/health.module'; // Import the module exporting PrismaService

@Module({
  imports: [HealthModule],
  controllers: [SystemController],
  providers: [SystemService],
})
export class SystemModule {}