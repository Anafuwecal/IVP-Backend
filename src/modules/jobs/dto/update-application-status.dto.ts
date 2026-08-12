import { IsEnum, IsNotEmpty } from 'class-validator';
import { ApplicationStatus } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateApplicationStatusDto {
  @ApiProperty({ enum: ApplicationStatus, example: 'SHORTLISTED', description: 'The new status for the application' })
  @IsNotEmpty()
  @IsEnum(ApplicationStatus)
  status: ApplicationStatus;
}