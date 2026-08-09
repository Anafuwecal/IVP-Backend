import { Module } from '@nestjs/common';
import { JobsController } from './jobs.controller';
import { JobsService } from './jobs.service';
import { PrismaModule } from '../prisma/prisma.module';
import { AuthModule } from '../auth/auth.module';
import { EmailService } from '../email/email.service';

@Module({
  imports: [PrismaModule, AuthModule],
  controllers: [JobsController],
  providers: [JobsService, EmailService],
  exports: [JobsService],
})
export class JobsModule {}