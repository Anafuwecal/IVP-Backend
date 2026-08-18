import { IsEnum, IsOptional, IsString } from 'class-validator';
import { JobStatus } from '@prisma/client';

// Rules 2 & 3: Filter and Search DTO
export class GetJobsFilterDto {
  @IsOptional()
  @IsString()
  search?: string;

  @IsOptional()
  @IsEnum(JobStatus, {
    message: 'Status must be a valid JobStatus (e.g., PUBLISHED, DRAFT, HIDDEN, CLOSED, UNDER_REVIEW).',
  })
  status?: JobStatus;
}

// Rules 4, 5, 6: Update Status DTO (Approve, Hide, Close)
export class UpdateJobStatusDto {
  @IsEnum(JobStatus, {
    message: 'Status must be a valid JobStatus value.',
  })
  status: JobStatus;

  @IsOptional()
  @IsString()
  reason?: string;
}