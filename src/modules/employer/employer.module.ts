import { Module } from '@nestjs/common';
import { EmployerController } from './employer.controller';
import { EmployerService } from './employer.service';
import { PrismaModule } from '../prisma/prisma.module';
import { AuthModule } from '../auth/auth.module';
import { FileUploadService } from '../upload/file-upload.service';

@Module({
  imports: [PrismaModule, AuthModule],
  controllers: [EmployerController],
  providers: [EmployerService, FileUploadService],
  exports: [EmployerService], // Export in case other modules need it later
})
export class EmployerModule {}
