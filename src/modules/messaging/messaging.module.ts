import { Module } from '@nestjs/common';
import { MessagingController } from './messaging.controller';
import { MessagingService } from './messaging.service';
import { MessagingGateway } from './messaging.gateway';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    JwtModule.register({
      secret: process.env.JWT_SECRET, // Ensure your secret is accessible here
    }),
  ],
  controllers: [MessagingController],
  providers: [MessagingService, MessagingGateway],
})
export class MessagingModule {}