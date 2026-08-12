import { IsString, IsNumber, IsArray, IsBoolean, IsOptional, Min } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreatePlanDto {
  @ApiProperty({ example: 'Premium Plan', description: 'The name of the subscription plan' })
  @IsString()
  name: string;

  @ApiProperty({ example: 49.99, description: 'The price of the plan in the default currency' })
  @IsNumber()
  @Min(0)
  price: number;

  @ApiProperty({ example: 6, description: 'The duration of the plan in months' })
  @IsNumber()
  @Min(1)
  durationMonths: number;

  @ApiProperty({ 
    example: ['Unlimited job postings', 'Access to premium talent pool', 'Dedicated account manager'], 
    description: 'Array of features and benefits included in this plan',
    type: [String]
  })
  @IsArray()
  @IsString({ each: true })
  benefits: string[];

  @ApiPropertyOptional({ example: true, description: 'Whether the plan is active and available for purchase' })
  @IsOptional()
  @IsBoolean()
  isActive?: boolean;
}