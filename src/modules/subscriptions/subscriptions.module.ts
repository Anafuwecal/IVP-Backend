import { Module } from '@nestjs/common';
import { SubscriptionsController } from './subscriptions.controller';
import { SubscriptionsService } from './subscriptions.service';
import { EmailService } from '../email/email.service';

@Module({
  controllers: [SubscriptionsController],
  providers: [
    SubscriptionsService, 
    EmailService 
  ],
})
export class SubscriptionsModule {}
