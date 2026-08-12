import { IsOptional, IsString } from 'class-validator';
import { ApiPropertyOptional } from '@nestjs/swagger';

export class FillJobDto {
  @ApiPropertyOptional({ 
    example: '123e4567-e89b-12d3-a456-426614174000', 
    description: 'Provide this if a candidate from the platform was hired. The UUID of their application.' 
  })
  @IsOptional()
  @IsString()
  applicationId?: string; 
}