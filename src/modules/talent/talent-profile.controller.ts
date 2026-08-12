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
} from './dto/talent-profile.dto';

@ApiTags('Talent Profile') // Groups these endpoints in Swagger
@ApiBearerAuth()           // Tells Swagger these endpoints require a JWT token
@UseGuards(AuthGuard('jwt'))
@Controller('talent/profile')
export class TalentProfileController {
  constructor(private readonly talentProfileService: TalentProfileService) {}

  @Put('personal')
  @ApiOperation({ summary: 'Update personal information (Title, Bio, Location, Resume)' })
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
  @ApiOperation({ summary: 'Update the list of skills and certifications' })
  @ApiOkResponse({ description: 'Skills and certifications successfully updated.' })
  @ApiUnauthorizedResponse({ description: 'Missing or invalid JWT token.' })
  async updateSkills(@Request() req, @Body() dto: UpdateSkillsDto) {
    return this.talentProfileService.updateSkills(req.user.userId, dto);
  }
}