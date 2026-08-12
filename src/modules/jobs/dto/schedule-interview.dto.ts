import { IsDateString, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class ScheduleInterviewDto {
  @ApiProperty({ example: '2026-08-25T14:30:00Z', description: 'Must be ISO 8601 format (e.g., 2026-08-25T14:30:00Z)' })
  @IsDateString()
  @IsNotEmpty()
  scheduledAt: string; 

  @ApiProperty({ example: 'Google Meet Link: https://meet.google.com/abc-defg-hij', description: 'Location or virtual meeting link' })
  @IsString()
  @IsNotEmpty()
  location: string;

  @ApiPropertyOptional({ example: 'Please prepare a 5-minute presentation on your past projects.', description: 'Additional instructions for the candidate' })
  @IsString()
  @IsOptional()
  instructions?: string;
}