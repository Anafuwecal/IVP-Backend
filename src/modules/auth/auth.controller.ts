import { Controller, Post, Body, HttpCode, HttpStatus } from '@nestjs/common';
import { RegisterDto } from './dto/register.dto';

@Controller('auth')
export class AuthController {
  @Post('register')
  @HttpCode(HttpStatus.CREATED)
  register(@Body() registerDto: RegisterDto) {
    // Structural Contract Mock
    return {
      message: 'User registered successfully (Mocked)',
      data: {
        email: registerDto.email,
        role: registerDto.role,
        token: 'mock-jwt-token-12345',
      },
    };
  }
}