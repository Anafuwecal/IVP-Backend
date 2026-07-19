import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { UsersModule } from './modules/users/users.module';
import { JobsModule } from './modules/jobs/jobs.module';
import { HealthModule } from './modules/health/health.module';
import { AuthModule } from './modules/auth/auth.module';
import { ApplicationsModule } from './modules/applications/applications.module';
import { PaymentsModule } from './modules/payments/payments.module';
import { SystemModule } from './modules/system/system.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }), // Load environmental parameters engine wide
    AuthModule,
    UsersModule,
    JobsModule,
    ApplicationsModule,
    PaymentsModule,
    HealthModule,
    SystemModule,
  ],
})
export class AppModule {}