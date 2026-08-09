import { IsOptional, IsEnum, IsString } from 'class-validator';
import { ApplicationStatus } from '@prisma/client';

export class FilterApplicantsDto {
  @IsOptional()
  @IsEnum(ApplicationStatus)
  status?: ApplicationStatus;

  @IsOptional()
  @IsString()
  skill?: string; // Allows employers to filter by a specific skill
}