import { IsOptional, IsString, IsDateString, IsNumber, Min } from 'class-validator';
import { Type } from 'class-transformer';

export class GetAuditLogsDto {
  @IsOptional()
  @IsString()
  search?: string; // Searches across action, entity, or admin email

  @IsOptional()
  @IsString()
  action?: string; // Filter by specific action (e.g., 'DELETE')

  @IsOptional()
  @IsString()
  entity?: string; // Filter by specific entity (e.g., 'FAQ')

  @IsOptional()
  @IsDateString()
  startDate?: string;

  @IsOptional()
  @IsDateString()
  endDate?: string;

  @IsOptional()
  @Type(() => Number)
  @IsNumber()
  @Min(1)
  page?: number = 1;

  @IsOptional()
  @Type(() => Number)
  @IsNumber()
  @Min(1)
  limit?: number = 20;
}