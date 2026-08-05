import { Controller, Post, Body, Patch, Param, Get, UseGuards } from '@nestjs/common';
import { JobsService } from './jobs.service';
import { CreateJobDto } from './dto/create-job.dto';
import { UpdateJobDto } from './dto/update-job.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../auth/guards/roles.guard';
import { Roles } from '../auth/decorators/roles.decorator';
import { GetUser } from '../auth/decorators/get-user.decorator';
import { Role } from '@prisma/client';
import { ProfileCompletedGuard } from '../auth/guards/profile-completed.guard'; 

@Controller('jobs')
export class JobsController {
  constructor(private readonly jobsService: JobsService) {}

  @Post()
  @UseGuards(JwtAuthGuard, RolesGuard, ProfileCompletedGuard) // Protects endpoint!
  @Roles(Role.EMPLOYER)
  createJob(@GetUser('id') employerId: string, @Body() dto: CreateJobDto) {
    return this.jobsService.createJob(employerId, dto);
  }

  @Patch(':id')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.EMPLOYER)
  updateJob(
    @Param('id') jobId: string,
    @GetUser('id') employerId: string,
    @Body() dto: UpdateJobDto,
  ) {
    return this.jobsService.updateJob(jobId, employerId, dto);
  }

  @Patch(':id/close')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.EMPLOYER)
  closeJob(@Param('id') jobId: string, @GetUser('id') employerId: string) {
    return this.jobsService.closeJob(jobId, employerId);
  }

  @Get('my-postings')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.EMPLOYER)
  getEmployerJobs(@GetUser('id') employerId: string) {
    return this.jobsService.getEmployerJobs(employerId);
  }
}