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
import { EmployerService } from './employer.service';
import { UpdateEmployerProfileDto } from './dto/update-employer-profile.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../auth/guards/roles.guard';
import { Roles } from '../auth/decorators/roles.decorator';
import { GetUser } from '../auth/decorators/get-user.decorator';
import { Role } from '@prisma/client';

@Controller('employer')
@UseGuards(JwtAuthGuard, RolesGuard)
@Roles(Role.EMPLOYER)
export class EmployerController {
  constructor(private readonly employerService: EmployerService) {}

  @Get('profile')
  getProfile(@GetUser('id') userId: string) {
    return this.employerService.getProfile(userId);
  }

  @Patch('profile')
  @UseInterceptors(FileInterceptor('logo'))
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