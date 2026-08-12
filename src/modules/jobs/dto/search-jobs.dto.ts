import { IsString, IsOptional, IsEnum, IsIn } from 'class-validator';

export enum JobType {
  FULL_TIME = 'FULL_TIME',
  REMOTE = 'REMOTE',
  GIG = 'GIG',
  CONTRACT = 'CONTRACT',
}

export class SearchJobsDto {
  @IsOptional()
  @IsString()
  keyword?: string; // Searches title or description

  //Filter by job type
  @IsOptional()
  @IsEnum(JobType)
  jobType?: JobType;

  //Filter by location
  @IsOptional()
  @IsString()
  location?: string;

  //Filter by industry
  @IsOptional()
  @IsString()
  industry?: string;

  //Filter by experience level
  @IsOptional()
  @IsString()
  experienceLevel?: string;

  //Sorting
  @IsOptional()
  @IsIn(['createdAt', 'salary', 'deadline'])
  sortBy?: 'createdAt' | 'salary' | 'deadline';

  @IsOptional()
  @IsIn(['asc', 'desc'])
  sortOrder?: 'asc' | 'desc';
}
