import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
// import { AuthService } from './auth.service'; // Keep this if you have it

@Module({
  imports: [],
  controllers: [AuthController], 
  providers: [], 
})
export class AuthModule {}
