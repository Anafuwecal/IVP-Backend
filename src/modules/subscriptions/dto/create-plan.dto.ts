import { IsString, IsNumber, IsArray, IsBoolean, IsOptional, Min } from 'class-validator';

export class CreatePlanDto {
  @IsString()
  name: string;

  @IsNumber()
  @Min(0)
  price: number;

  @IsNumber()
  @Min(1)
  durationMonths: number;

  @IsArray()
  @IsString({ each: true })
  benefits: string[];

  @IsOptional()
  @IsBoolean()
  isActive?: boolean;
}