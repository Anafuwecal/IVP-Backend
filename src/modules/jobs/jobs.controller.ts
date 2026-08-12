import { Controller, Post, Body, Patch, Param, Get, Query, UseGuards, UsePipes, ValidationPipe } from '@nestjs/common';
import { JobsService } from './jobs.service';
import { CreateJobDto } from './dto/create-job.dto';
import { UpdateJobDto } from './dto/update-job.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../auth/guards/roles.guard';
import { Roles } from '../auth/decorators/roles.decorator';
import { GetUser } from '../auth/decorators/get-user.decorator';
import { Role } from '@prisma/client';
import { ApplicationStatus } from '@prisma/client';
import { ProfileCompletedGuard } from '../auth/guards/profile-completed.guard'; 
import { FilterApplicantsDto } from './dto/filter-applicants.dto';
import { UpdateApplicationStatusDto } from './dto/update-application-status.dto';
import { ScheduleInterviewDto } from './dto/schedule-interview.dto';
import { FillJobDto } from './dto/fill-job.dto';
import { ActiveSubscriptionGuard } from '../subscriptions/guards/active-subscription.guard';
import { SearchJobsDto } from './dto/search-jobs.dto';

@Controller('jobs')
export class JobsController {
  constructor(private readonly jobsService: JobsService) {}

  // Place this ABOVE any route with ':id' (Rule 9)
  @Get('admin/filled-jobs')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.ADMIN) // Ensures only platform administrators can hit this
  getFilledJobsForAdmin() {
    return this.jobsService.getAdminFilledJobs();
  }
  @Post()
  @UseGuards(JwtAuthGuard, RolesGuard, ProfileCompletedGuard, ActiveSubscriptionGuard  ) // Protects endpoint!
  @Roles(Role.EMPLOYER)
  createJob(@GetUser('id') employerId: string, @Body() dto: CreateJobDto) {
    return this.jobsService.createJob(employerId, dto);
  }

  @Get(':id/applicants')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.EMPLOYER)
  getApplicants(
    @Param('id') jobId: string,
    @GetUser('id') employerId: string,
    @Query() filters: FilterApplicantsDto,
  ) {
    return this.jobsService.getJobApplicants(jobId, employerId, filters);
  }

  @Patch(':id/applicants/:applicationId/status')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.EMPLOYER)
  updateApplicationStatus(
    @Param('id') jobId: string,
    @Param('applicationId') applicationId: string,
    @GetUser('id') employerId: string,
    @Body() dto: UpdateApplicationStatusDto,
  ) {
    return this.jobsService.updateApplicationStatus(jobId, applicationId, employerId, dto.status);
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

  // Shortcut route: Shortlist Candidate
  @Patch(':id/applicants/:applicationId/shortlist')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.EMPLOYER)
  shortlistCandidate(
    @Param('id') jobId: string,
    @Param('applicationId') applicationId: string,
    @GetUser('id') employerId: string,
  ) {
    return this.jobsService.updateApplicationStatus(
      jobId,
      applicationId,
      employerId,
      ApplicationStatus.SHORTLISTED, 
    );
  }

  
  // Shortcut route: Reject Candidate
  @Patch(':id/applicants/:applicationId/reject')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.EMPLOYER)
  rejectCandidate(
    @Param('id') jobId: string,
    @Param('applicationId') applicationId: string,
    @GetUser('id') employerId: string,
  ) {
    return this.jobsService.updateApplicationStatus(
      jobId,
      applicationId,
      employerId,
      ApplicationStatus.REJECTED,
    );
  }

  @Post(':id/applicants/:applicationId/interview')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.EMPLOYER)
  scheduleInterview(
    @Param('id') jobId: string,
    @Param('applicationId') applicationId: string,
    @GetUser('id') employerId: string,
    @Body() dto: ScheduleInterviewDto,
  ) {
    return this.jobsService.scheduleInterview(jobId, applicationId, employerId, dto);
  }

  // endpoint to fill the job
  @Patch(':id/fill')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.EMPLOYER)
  markJobAsFilled(
    @Param('id') jobId: string,
    @GetUser('id') employerId: string,
    @Body() dto: FillJobDto,
  ) {
    return this.jobsService.markJobAsFilled(jobId, employerId, dto);
  }

  @Patch('interviews/:interviewId/reschedule')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.EMPLOYER)
  rescheduleInterview(
    @Param('interviewId') interviewId: string,
    @GetUser('id') employerId: string,
    @Body() dto: ScheduleInterviewDto,
  ) {
    return this.jobsService.updateInterview(interviewId, employerId, 'RESCHEDULE', dto);
  }

  @Patch('interviews/:interviewId/cancel')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.EMPLOYER)
  cancelInterview(
    @Param('interviewId') interviewId: string,
    @GetUser('id') employerId: string,
  ) {
    return this.jobsService.updateInterview(interviewId, employerId, 'CANCEL');
  }

  @Get('search')
  // Use transform: true so query parameters are correctly typed
  @UsePipes(new ValidationPipe({ transform: true })) 
  async searchJobs(@Query() query: SearchJobsDto) {
    return this.jobsService.searchJobs(query);
  }

}