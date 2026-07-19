import { Controller, Post, Body, HttpCode, HttpStatus } from '@nestjs/common';
import { CreateJobDto } from './dto/create-job.dto';

@Controller('jobs')
export class JobsController {
  @Post()
  @HttpCode(HttpStatus.CREATED)
  createJob(@Body() createJobDto: CreateJobDto) {
    return {
      message: 'Job created successfully (Mocked)',
      jobId: 'mock-uuid-9876',
      title: createJobDto.title,
    };
  }
}