import {
  Controller,
  Post,
  Get,
  Body,
  Query,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import { 
  ApiTags, 
  ApiOperation, 
  ApiCreatedResponse, 
  ApiOkResponse, 
  ApiBadRequestResponse, 
  ApiQuery 
} from '@nestjs/swagger';
import { AuthService } from './auth.service';
import {
  RegisterTalentDto,
  RegisterEmployerDto,
  LoginDto,
  ForgotPasswordDto,
  ResetPasswordDto,
} from './dto/auth.dto';

@ApiTags('Auth') // Groups these endpoints under "Auth" in Swagger
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register/talent')
  @ApiOperation({ summary: 'Register a new talent user' })
  @ApiCreatedResponse({ description: 'Talent profile created successfully. Verification email sent.' })
  @ApiBadRequestResponse({ description: 'Validation failed (e.g., email already in use, weak password).' })
  async registerTalent(@Body() dto: RegisterTalentDto) {
    return this.authService.registerTalent(dto);
  }

  @Post('register/employer')
  @ApiOperation({ summary: 'Register a new employer profile' })
  @ApiCreatedResponse({ description: 'Employer profile created successfully. Verification email sent.' })
  @ApiBadRequestResponse({ description: 'Validation failed (e.g., company email already registered).' })
  async registerEmployer(@Body() dto: RegisterEmployerDto) {
    return this.authService.registerEmployer(dto);
  }

  @Post('login')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Log in and retrieve JWT access token' })
  @ApiOkResponse({ description: 'Successfully authenticated. Returns user details and token.' })
  @ApiBadRequestResponse({ description: 'Invalid email or password.' })
  async login(@Body() dto: LoginDto) {
    return this.authService.login(dto);
  }

  @Post('password-reset/request')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Request a password reset link to be sent via email' })
  @ApiOkResponse({ description: 'Password reset link sent successfully.' })
  @ApiBadRequestResponse({ description: 'Invalid email format.' })
  async requestPasswordReset(@Body() dto: ForgotPasswordDto) {
    return this.authService.requestPasswordReset(dto);
  }

  @Get('verify-email')
  @ApiOperation({ summary: 'Verify user email using the token sent to their inbox' })
  @ApiQuery({ name: 'token', required: true, description: 'The verification token sent via email' })
  @ApiOkResponse({ description: 'Email successfully verified. Account is now active.' })
  @ApiBadRequestResponse({ description: 'Invalid or expired verification token.' })
  async verifyEmail(@Query('token') token: string) {
    return this.authService.verifyEmail(token);
  }

  @Post('password-reset/confirm')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Set a new password using the reset token' })
  @ApiOkResponse({ description: 'Password has been successfully reset.' })
  @ApiBadRequestResponse({ description: 'Invalid/expired token or password does not meet complexity requirements.' })
  async confirmPasswordReset(@Body() dto: ResetPasswordDto) {
    return this.authService.confirmPasswordReset(dto);
  }
}