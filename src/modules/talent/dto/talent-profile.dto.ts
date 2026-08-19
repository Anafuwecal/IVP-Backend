import { IsString, IsOptional, IsArray, IsUrl, IsDateString, IsInt, IsPhoneNumber } from 'class-validator';
import { Type, Transform } from 'class-transformer';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class UpdatePersonalInfoDto {
  @ApiPropertyOptional({ example: 'Senior Full-Stack Engineer', description: 'Professional title or headline' })
  @IsOptional()
  @IsString()
  professionalTitle?: string;

  @ApiPropertyOptional({ example: 'Experienced software developer specializing in TypeScript...', description: 'Short biography' })
  @IsOptional()
  @IsString()
  bio?: string;

  @ApiPropertyOptional({ example: 'Lagos, Nigeria', description: 'City and country of residence' })
  @IsOptional()
  @IsString()
  location?: string;

  @ApiPropertyOptional({ example: '+2348000000000', description: 'Phone number' })
  @IsOptional()
  @IsString()
  phoneNumber?: string;

  @ApiPropertyOptional({ example: 25, description: 'Age of the talent' })
  @IsOptional()
  @Type(() => Number) // Parses form-data string to number
  @IsInt()
  age?: number;

  @ApiPropertyOptional({ type: 'string', format: 'binary', description: 'Profile image file upload' })
  @IsOptional()
  profileImage?: any; // Handled by interceptor, documented for Swagger
}

export class UpdateSkillsDto {
  @ApiProperty({ 
    example: 'TypeScript,NestJS,React', 
    description: 'Comma-separated skills or JSON array string',
  })
  @IsOptional()
  @Transform(({ value }) => {
    if (!value) return [];
    if (Array.isArray(value)) return value;
    if (typeof value === 'string') {
      try {
        // In case the frontend sends a JSON stringified array: '["React", "Node"]'
        const parsed = JSON.parse(value);
        if (Array.isArray(parsed)) return parsed;
      } catch (e) {
        // If it's a regular comma-separated string: 'React, Node'
        return value.split(',').map((s) => s.trim());
      }
    }
    return value;
  })
  @IsArray()
  @IsString({ each: true })
  skills?: string[];

  @ApiPropertyOptional({ 
    example: 'AWS Certified,FreeCodeCamp', 
    description: 'Comma-separated certifications or JSON array string',
  })
  @IsOptional()
  @Transform(({ value }) => { // <-- Add the exact same transform here
    if (!value) return [];
    if (Array.isArray(value)) return value;
    if (typeof value === 'string') {
      try {
        const parsed = JSON.parse(value);
        if (Array.isArray(parsed)) return parsed;
      } catch (e) {
        return value.split(',').map((s) => s.trim());
      }
    }
    return value;
  })
  @IsArray()
  @IsString({ each: true })
  certifications?: string[];

  @ApiPropertyOptional({ example: 'https://github.com/yourusername', description: 'Link to portfolio or GitHub' })
  @IsOptional()
  @IsUrl({}, { message: 'Portfolio must be a valid URL' })
  portfolioUrl?: string;

  @ApiPropertyOptional({ type: 'string', format: 'binary', description: 'Resume PDF file upload' })
  @IsOptional()
  resume?: any; // Handled by interceptor, documented for Swagger
}

export class AddExperienceDto {
  @ApiProperty({ example: 'Tech Solutions Inc.', description: 'Name of the company' })
  @IsString()
  company: string;

  @ApiProperty({ example: 'Frontend Web Developer', description: 'Job title or role' })
  @IsString()
  role: string;

  @ApiProperty({ example: '2022-01-15T00:00:00Z', description: 'Start date in ISO-8601 format' })
  @IsDateString()
  startDate: string;

  @ApiPropertyOptional({ example: '2024-05-20T00:00:00Z', description: 'End date in ISO-8601 format. Leave empty if current role.' })
  @IsOptional()
  @IsDateString()
  endDate?: string;

  @ApiPropertyOptional({ example: 'Developed scalable web applications...', description: 'Description of responsibilities and achievements' })
  @IsOptional()
  @IsString()
  description?: string;
}

export class AddEducationDto {
  @ApiProperty({ example: 'University of Lagos', description: 'Name of the institution or university' })
  @IsString()
  institution: string;

  @ApiProperty({ example: 'Bachelor of Science', description: 'Degree obtained' })
  @IsString()
  degree: string;

  @ApiProperty({ example: 'Computer Science', description: 'Field of study or major' })
  @IsString()
  fieldOfStudy: string;

  @ApiProperty({ example: '2016-09-01T00:00:00Z', description: 'Start date in ISO-8601 format' })
  @IsDateString()
  startDate: string;

  @ApiPropertyOptional({ example: '2020-11-15T00:00:00Z', description: 'End date or expected graduation date in ISO-8601 format' })
  @IsOptional()
  @IsDateString()
  endDate?: string;
}

export class UpdateEmploymentPreferenceDto {
  @ApiPropertyOptional({ example: 'Full-time', description: 'Preferred job type' })
  @IsOptional()
  @IsString()
  preferredJobType?: string;

  @ApiPropertyOptional({ example: 'Remote', description: 'Preferred work location' })
  @IsOptional()
  @IsString()
  preferredLocation?: string;

  @ApiPropertyOptional({ example: 'NGN 500,000 / month', description: 'Expected salary' })
  @IsOptional()
  @IsString()
  expectedSalary?: string;

  @ApiPropertyOptional({ example: 'Immediate', description: 'Availability to start' })
  @IsOptional()
  @IsString()
  availability?: string;
}