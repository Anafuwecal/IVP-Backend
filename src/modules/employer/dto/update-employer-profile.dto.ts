import { IsString, IsOptional, IsUrl, IsNotEmpty } from 'class-validator';

export class UpdateEmployerProfileDto {
  @IsOptional()
  @IsString()
  @IsNotEmpty()
  companyName?: string;

  @IsOptional()
  @IsString()
  @IsNotEmpty()
  contactPerson?: string;

  @IsOptional()
  @IsString()
  @IsNotEmpty()
  industry?: string;

  @IsOptional()
  @IsString()
  @IsNotEmpty()
  companySize?: string;

  @IsOptional()
  @IsString()
  @IsNotEmpty()
  rcNumber?: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsOptional()
  @IsUrl({}, { message: 'Website must be a valid URL (e.g. https://company.com)' })
  website?: string;
}