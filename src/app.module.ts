import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ScheduleModule } from '@nestjs/schedule';
import { UsersModule } from './modules/users/users.module';
import { HealthModule } from './modules/health/health.module';
import { AuthModule } from './modules/auth/auth.module';
import { ApplicationsModule } from './modules/applications/applications.module';
import { PaymentsModule } from './modules/payments/payments.module';
import { SystemModule } from './modules/system/system.module';
import { PrismaModule } from './modules/prisma/prisma.module';
import { EmployerModule } from './modules/employer/employer.module';
import { JobsModule } from './modules/jobs/jobs.module';
import { SubscriptionsModule } from './modules/subscriptions/subscriptions.module';
import { MessagingModule } from './modules/messaging/messaging.module';
import { TalentProfileModule } from './modules/talent/talent-profile.module';
import { AdminModule } from './modules/Admin/admin.module';
import { NotificationsModule } from './modules/notifications/notifications.module';
import * as Joi from 'joi';

@Module({
  imports: [
    ScheduleModule.forRoot(),
    ConfigModule.forRoot({
      isGlobal: true,
      // Implement the strict environmental validation schema here
      validationSchema: Joi.object({
        DATABASE_URL: Joi.string().required(),
        PAYSTACK_SECRET_KEY: Joi.string().required(),
        PAYSTACK_PUBLIC_KEY: Joi.string().required(),
      }),
    }), // Load environmental parameters engine wide
    AuthModule,
    UsersModule,
    JobsModule,
    ApplicationsModule,
    PaymentsModule,
    EmployerModule,
    AdminModule,
    HealthModule,
    SystemModule,
    PrismaModule,
    NotificationsModule,
    SubscriptionsModule,
    MessagingModule,
    TalentProfileModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
