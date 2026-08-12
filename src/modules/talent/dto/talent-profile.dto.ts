import { IsString, IsOptional, IsArray, IsUrl, IsDateString } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class UpdatePersonalInfoDto {
  @ApiPropertyOptional({ example: 'Senior Full-Stack Engineer', description: 'Professional title or headline' })
  @IsOptional()
  @IsString()
  professionalTitle?: string;

  @ApiPropertyOptional({ example: 'Experienced software developer specializing in TypeScript and Node.js...', description: 'Short biography' })
  @IsOptional()
  @IsString()
  bio?: string;

  @ApiPropertyOptional({ example: 'Lagos, Nigeria', description: 'City and country of residence' })
  @IsOptional()
  @IsString()
  location?: string;

  @ApiPropertyOptional({ example: 'https://example.com/resume.pdf', description: 'Link to a hosted resume PDF' })
  @IsOptional()
  @IsUrl({}, { message: 'Resume must be a valid URL' })
  resumeUrl?: string;
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

  @ApiPropertyOptional({ example: 'Developed scalable web applications using React and Vue.', description: 'Description of responsibilities and achievements' })
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

export class UpdateSkillsDto {
  @ApiProperty({ 
    example: ['JavaScript', 'TypeScript', 'Node.js', 'React', 'Vue'], 
    description: 'Array of technical or soft skills',
    type: [String]
  })
  @IsArray()
  @IsString({ each: true })
  skills: string[];

  @ApiPropertyOptional({ 
    example: ['AWS Certified Developer', 'FreeCodeCamp Backend Certification'], 
    description: 'Array of certifications obtained',
    type: [String]
  })
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  certifications?: string[];
}