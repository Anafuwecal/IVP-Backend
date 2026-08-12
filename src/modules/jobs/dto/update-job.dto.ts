import { PartialType } from '@nestjs/swagger';
import { CreateJobDto } from './create-job.dto';

// Using PartialType from @nestjs/swagger ensures all properties 
// are documented as optional in the Swagger UI automatically.
export class UpdateJobDto extends PartialType(CreateJobDto) {}