import { IsOptional, IsString } from 'class-validator';

export class FillJobDto {
  @IsOptional()
  @IsString()
  applicationId?: string; // Optional: Provide this if a candidate from the platform was hired
}