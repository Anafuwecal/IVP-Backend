import {
  Controller,
  Put,
  Post,
  Body,
  UseGuards,
  Request,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { TalentProfileService } from './talent-profile.service';
import {
  UpdatePersonalInfoDto,
  AddExperienceDto,
  AddEducationDto,
  UpdateSkillsDto,
} from './dto/talent-profile.dto';

@UseGuards(AuthGuard('jwt'))
@Controller('talent/profile')
export class TalentProfileController {
  constructor(private readonly talentProfileService: TalentProfileService) {}

  @Put('personal')
  async updatePersonalInfo(@Request() req, @Body() dto: UpdatePersonalInfoDto) {
    return this.talentProfileService.updatePersonalInfo(req.user.userId, dto);
  }

  @Post('experience')
  async addExperience(@Request() req, @Body() dto: AddExperienceDto) {
    return this.talentProfileService.addExperience(req.user.userId, dto);
  }

  @Post('education')
  async addEducation(@Request() req, @Body() dto: AddEducationDto) {
    return this.talentProfileService.addEducation(req.user.userId, dto);
  }

  @Put('skills')
  async updateSkills(@Request() req, @Body() dto: UpdateSkillsDto) {
    return this.talentProfileService.updateSkills(req.user.userId, dto);
  }
}