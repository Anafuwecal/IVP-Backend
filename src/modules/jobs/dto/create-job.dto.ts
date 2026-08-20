import { 
  IsString, 
  IsNotEmpty, 
  IsDateString, 
  IsEnum, 
  IsOptional, 
  IsNumber, 
  IsArray, 
  ArrayMinSize 
} from 'class-validator';
import { JobStatus } from '@prisma/client';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateJobDto {
  @ApiProperty({ example: 'Senior Backend Engineer', description: 'The title of the job position' })
  @IsString()
  @IsNotEmpty()
  title: string;

  @ApiProperty({ example: 'We are looking for a skilled backend engineer with Node.js experience...', description: 'Detailed job description' })
  @IsString()
  @IsNotEmpty()
  description: string;

  @ApiProperty({ example: 'Lagos, Nigeria (Hybrid)', description: 'Physical location or remote status' })
  @IsString()
  @IsNotEmpty()
  location: string;

  @ApiProperty({ example: 'Full-Time', description: 'Type of employment (e.g., Full-Time, Contract, Freelance)' })
  @IsString()
  @IsNotEmpty()
  employmentType: string;

  @ApiProperty({ example: 'Bachelor’s degree in Computer Science or 4 years equivalent experience', description: 'Minimum qualifications required' })
  @IsString()
  @IsNotEmpty()
  qualification: string;

  @ApiProperty({ example: '2026-09-30T23:59:59Z', description: 'Application deadline in ISO 8601 format' })
  @IsDateString()
  @IsNotEmpty()
  deadline: string;

  @ApiPropertyOptional({ enum: JobStatus, example: 'OPEN', description: 'The initial status of the job' })
  @IsOptional()
  @IsEnum(JobStatus)
  status?: JobStatus;

  @ApiProperty({ example: 'Engineering', description: 'The department or category of the job' })
  @IsString()
  @IsNotEmpty()
  department: string;

  @ApiPropertyOptional({ example: 500000, description: 'Minimum salary (e.g., monthly or annually depending on your platform standard)' })
  @IsOptional()
  @IsNumber()
  minSalary?: number;

  @ApiPropertyOptional({ example: 800000, description: 'Maximum salary' })
  @IsOptional()
  @IsNumber()
  maxSalary?: number;

  @ApiProperty({ 
    example: ['Node.js', 'TypeScript', 'PostgreSQL', 'NestJS'], 
    description: 'List of required skills for the role' 
  })
  @IsArray()
  @IsString({ each: true })
  @ArrayMinSize(1) // Ensures they add at least 1 skill
  requiredSkills: string[];
}