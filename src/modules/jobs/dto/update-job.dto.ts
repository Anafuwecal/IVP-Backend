import { PartialType } from '@nestjs/mapped-types';
import { CreateJobDto } from './create-job.dto';

// PartialType makes all fields from CreateJobDto optional for updates
export class UpdateJobDto extends PartialType(CreateJobDto) {}