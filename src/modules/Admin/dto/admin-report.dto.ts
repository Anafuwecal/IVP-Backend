import { IsDateString, IsEnum, IsOptional } from 'class-validator';

export enum ReportType {
  CANDIDATES = 'CANDIDATES',
  EMPLOYERS = 'EMPLOYERS',
  JOBS = 'JOBS',
  APPLICATIONS = 'APPLICATIONS',
}

export class GetReportFilterDto {
  @IsOptional()
  @IsDateString({}, { message: 'startDate must be a valid ISO date string (e.g., 2026-08-01)' })
  startDate?: string;

  @IsOptional()
  @IsDateString({}, { message: 'endDate must be a valid ISO date string' })
  endDate?: string;
}

export class ExportReportDto extends GetReportFilterDto {
  @IsEnum(ReportType, {
    message: 'type must be one of: CANDIDATES, EMPLOYERS, JOBS, APPLICATIONS',
  })
  type: ReportType;
}