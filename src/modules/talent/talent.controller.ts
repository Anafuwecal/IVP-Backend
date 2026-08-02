import {
  Controller,
  Post,
  Body,
  Patch,
  Get,
  Request,
  UseGuards,
} from '@nestjs/common';
import { TalentService } from './talent.service';
import { RegisterTalentDto, UpdateTalentProfileDto } from './dto/talent.dto';
// Import your JwtAuthGuard here to protect routes

@Controller('api/v1')
export class TalentController {
  constructor(private readonly talentService: TalentService) {}

  @Post('auth/register') //[cite: 4]
  async register(@Body() registerDto: RegisterTalentDto) {
    // Note: 'Confirm Password' matching is typically handled on the frontend before submission,
    // but the strict password policy and uniqueness are validated via DTO and Service[cite: 1, 6].
    return this.talentService.register(registerDto);
  }

  // @UseGuards(JwtAuthGuard) - Uncomment when Auth module is ready
  @Patch('talent/profile') //[cite: 4]
  async updateProfile(
    @Request() req,
    @Body() updateDto: UpdateTalentProfileDto,
  ) {
    // Assuming req.user.id is populated by your AuthGuard
    const userId = req.user?.id || 'TEST-UUID-HERE';
    return this.talentService.updateProfile(userId, updateDto);
  }

  // @UseGuards(JwtAuthGuard)
  @Get('talent/dashboard')
  async getDashboard(@Request() req) {
    const userId = req.user?.id || 'TEST-UUID-HERE';
    return this.talentService.getDashboardData(userId);
  }
}
