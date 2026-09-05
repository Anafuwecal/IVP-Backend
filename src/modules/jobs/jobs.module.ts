import { Module } from '@nestjs/common';
import { JobsController, SavedJobsController } from './jobs.controller';
import { JobsService, SavedJobsService } from './jobs.service';
import { PrismaModule } from '../prisma/prisma.module';
import { AuthModule } from '../auth/auth.module';
import { NotificationsModule } from '../notifications/notifications.module';
import { EmailModule } from '../email/email.module';


@Module({
  imports: [PrismaModule, AuthModule, NotificationsModule, EmailModule],
  controllers: [JobsController, SavedJobsController],
  providers: [JobsService, SavedJobsService],
  exports: [JobsService, SavedJobsService],
})
export class JobsModule {}