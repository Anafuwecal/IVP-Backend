import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { 
  AdminController, 
  AdminEmployerController, 
  AdminReportsController,
  AdminNotificationController,
  AdminContentController,
  AdminAuditController
} from './admins.controller';
import { AdminJobController } from './admins.controller';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { 
  AdminAuthService, 
  AdminDashboardService, 
  DashboardService,
  AdminEmployerService,
  AdminJobService,
  AdminReportsService,
  AdminContentService,
  AdminNotificationService,
  AdminAuditService
  } from './admin.service';
import { PrismaModule } from '../prisma/prisma.module';
import { EmailModule } from '../email/email.module';
@Module({
  imports: [
    EmailModule,
    PrismaModule,
    JwtModule.registerAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        secret: configService.get<string>('JWT_SECRET') || process.env.JWT_SECRET,
        signOptions: { expiresIn: '1d' },
      }),
      inject: [ConfigService],
    }),
  ],
  controllers: [
    AdminController, 
    AdminEmployerController, 
    AdminJobController,
    AdminReportsController,
    AdminNotificationController,
    AdminContentController,
    AdminAuditController
  ],
  providers: [
    AdminAuthService, 
    AdminDashboardService, 
    DashboardService,
    AdminEmployerService,
    AdminNotificationService,
    AdminJobService,
    AdminReportsService,
    AdminContentService,
    AdminAuditService
  ],
  exports: [AdminAuditService]
})
export class AdminModule {}