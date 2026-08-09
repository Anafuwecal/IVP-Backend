import { IsDateString, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class ScheduleInterviewDto {
  @IsDateString()
  @IsNotEmpty()
  scheduledAt: string; // Must be ISO 8601 format (e.g., 2026-08-10T14:30:00Z)

  @IsString()
  @IsNotEmpty()
  location: string;

  @IsString()
  @IsOptional()
  instructions?: string;
}