import { IsOptional, IsEnum, IsString } from 'class-validator';
import { ApplicationStatus } from '@prisma/client';
import { ApiPropertyOptional } from '@nestjs/swagger';

export class FilterApplicantsDto {
  @ApiPropertyOptional({ enum: ApplicationStatus, description: 'Filter applicants by their current application status' })
  @IsOptional()
  @IsEnum(ApplicationStatus)
  status?: ApplicationStatus;

  @ApiPropertyOptional({ example: 'TypeScript', description: 'Filter applicants by a specific skill' })
  @IsOptional()
  @IsString()
  skill?: string; 
}