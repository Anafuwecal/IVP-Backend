import { IsString, IsOptional, IsUrl, IsNotEmpty } from 'class-validator';
import { ApiPropertyOptional } from '@nestjs/swagger';

export class UpdateEmployerProfileDto {
  @ApiPropertyOptional({ example: 'Tech Corp Innovations', description: 'Updated company name' })
  @IsOptional()
  @IsString()
  @IsNotEmpty()
  companyName?: string;

  @ApiPropertyOptional({ example: 'John Doe', description: 'Updated primary contact person' })
  @IsOptional()
  @IsString()
  @IsNotEmpty()
  contactPerson?: string;

  @ApiPropertyOptional({ example: 'Lagos, Nigeria', description: 'General city/state/country location' })
  @IsOptional()
  @IsString()
  @IsNotEmpty()
  location?: string;

  @ApiPropertyOptional({ example: '123 Tech Avenue, Victoria Island', description: 'Full physical office address' })
  @IsOptional()
  @IsString()
  @IsNotEmpty()
  officeAddress?: string;

  @ApiPropertyOptional({ example: 'Fintech', description: 'Updated industry sector' })
  @IsOptional()
  @IsString()
  @IsNotEmpty()
  industry?: string;

  @ApiPropertyOptional({ example: '50-200', description: 'Updated company size' })
  @IsOptional()
  @IsString()
  @IsNotEmpty()
  companySize?: string;

  @ApiPropertyOptional({ example: 'RC987654', description: 'Updated Corporate Registration Number' })
  @IsOptional()
  @IsString()
  @IsNotEmpty()
  rcNumber?: string;

  @ApiPropertyOptional({ example: 'We are a leading fintech company...', description: 'About the company' })
  @IsOptional()
  @IsString()
  description?: string;

  @ApiPropertyOptional({ example: 'https://techcorp.com', description: 'Company website URL' })
  @IsOptional()
  @IsUrl({}, { message: 'Website must be a valid URL (e.g. https://company.com)' })
  website?: string;

  // --- THE FIX IS HERE ---
  @ApiPropertyOptional({ 
    type: 'string', 
    format: 'binary', 
    description: 'Company logo image file (jpg, jpeg, png, webp). Max size 5MB.' 
  })
  @IsOptional() // <-- This tells NestJS not to reject the payload
  logo?: any;   // <-- Changed to 'any' to avoid TS Node/Browser DOM conflicts

}