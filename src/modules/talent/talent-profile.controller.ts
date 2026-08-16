import {
  Controller,
  Put,
  Post,
  Body,
  UseGuards,
  Request,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { 
  ApiTags, 
  ApiOperation, 
  ApiBearerAuth, 
  ApiOkResponse, 
  ApiCreatedResponse,
  ApiUnauthorizedResponse
} from '@nestjs/swagger';
import { TalentProfileService } from './talent-profile.service';
import {
  UpdatePersonalInfoDto,
  AddExperienceDto,
  AddEducationDto,
  UpdateSkillsDto,
  UpdateEmploymentPreferenceDto 
} from './dto/talent-profile.dto';

@ApiTags('Talent Profile')
@ApiBearerAuth()
@UseGuards(AuthGuard('jwt'))
@Controller('talent/profile')
export class TalentProfileController {
  constructor(private readonly talentProfileService: TalentProfileService) {}

  @Put('personal')
  @ApiOperation({ summary: 'Update personal information (Title, Bio, Location, Profile Image)' })
  @ApiOkResponse({ description: 'Personal information successfully updated.' })
  @ApiUnauthorizedResponse({ description: 'Missing or invalid JWT token.' })
  async updatePersonalInfo(@Request() req, @Body() dto: UpdatePersonalInfoDto) {
    return this.talentProfileService.updatePersonalInfo(req.user.userId, dto);
  }

  @Post('experience')
  @ApiOperation({ summary: 'Add a new work experience entry' })
  @ApiCreatedResponse({ description: 'Work experience entry added successfully.' })
  @ApiUnauthorizedResponse({ description: 'Missing or invalid JWT token.' })
  async addExperience(@Request() req, @Body() dto: AddExperienceDto) {
    return this.talentProfileService.addExperience(req.user.userId, dto);
  }

  @Post('education')
  @ApiOperation({ summary: 'Add a new education entry' })
  @ApiCreatedResponse({ description: 'Education entry added successfully.' })
  @ApiUnauthorizedResponse({ description: 'Missing or invalid JWT token.' })
  async addEducation(@Request() req, @Body() dto: AddEducationDto) {
    return this.talentProfileService.addEducation(req.user.userId, dto);
  }

  @Put('skills')
  @ApiOperation({ summary: 'Update skills, certifications, portfolio, and resume' })
  @ApiOkResponse({ description: 'Skills and links successfully updated.' })
  @ApiUnauthorizedResponse({ description: 'Missing or invalid JWT token.' })
  async updateSkills(@Request() req, @Body() dto: UpdateSkillsDto) {
    return this.talentProfileService.updateSkills(req.user.userId, dto);
  }

  // Added Endpoint for Employment Preferences
  @Put('employment-preferences')
  @ApiOperation({ summary: 'Update employment preferences (Job Type, Location, Salary, Availability)' })
  @ApiOkResponse({ description: 'Employment preferences successfully updated.' })
  @ApiUnauthorizedResponse({ description: 'Missing or invalid JWT token.' })
  async updateEmploymentPreferences(@Request() req, @Body() dto: UpdateEmploymentPreferenceDto) {
    return this.talentProfileService.updateEmploymentPreferences(req.user.userId, dto);
  }
}