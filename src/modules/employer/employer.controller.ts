import {
  Controller,
  Get,
  Patch,
  Body,
  UseGuards,
  UseInterceptors,
  UploadedFile,
  ParseFilePipeBuilder,
  HttpStatus,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { 
  ApiTags, 
  ApiOperation, 
  ApiOkResponse, 
  ApiBearerAuth,
  ApiConsumes,
  ApiUnauthorizedResponse,
  ApiForbiddenResponse
} from '@nestjs/swagger';
import { EmployerService } from './employer.service';
import { UpdateEmployerProfileDto } from './dto/update-employer-profile.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../auth/guards/roles.guard';
import { Roles } from '../auth/decorators/roles.decorator';
import { GetUser } from '../auth/decorators/get-user.decorator';
import { Role } from '@prisma/client';

@ApiTags('Employer Profile') // Groups endpoints in Swagger
@ApiBearerAuth()             // Tells Swagger these endpoints require a JWT token
@Controller('employer')
@UseGuards(JwtAuthGuard, RolesGuard)
@Roles(Role.EMPLOYER)
export class EmployerController {
  constructor(private readonly employerService: EmployerService) {}

  @Get('profile')
  @ApiOperation({ summary: 'Get current employer profile' })
  @ApiOkResponse({ description: 'Employer profile retrieved successfully.' })
  @ApiUnauthorizedResponse({ description: 'Missing or invalid JWT token.' })
  @ApiForbiddenResponse({ description: 'User does not have Employer privileges.' })
  getProfile(@GetUser('id') userId: string) {
    return this.employerService.getProfile(userId);
  }

  @Patch('profile')
  @UseInterceptors(FileInterceptor('logo'))
  @ApiOperation({ summary: 'Update employer profile and optionally upload a company logo' })
  @ApiConsumes('multipart/form-data') // Crucial: Tells Swagger to expect file upload & form fields
  @ApiOkResponse({ description: 'Employer profile updated successfully.' })
  @ApiUnauthorizedResponse({ description: 'Missing or invalid JWT token.' })
  updateProfile(
    @GetUser('id') userId: string,
    @Body() dto: UpdateEmployerProfileDto,
    @UploadedFile(
      new ParseFilePipeBuilder()
        .addFileTypeValidator({
          fileType: /(jpg|jpeg|png|webp)$/,
        })
        .addMaxSizeValidator({
          maxSize: 5 * 1024 * 1024, // 5MB Max File Size limit
        })
        .build({
          errorHttpStatusCode: HttpStatus.UNPROCESSABLE_ENTITY,
          fileIsRequired: false, // Logo upload is optional during basic edits
        }),
    )
    file?: Express.Multer.File,
  ) {
    return this.employerService.updateProfile(userId, dto, file);
  }
}