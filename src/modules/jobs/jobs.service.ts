import { Injectable, NotFoundException, BadRequestException, ForbiddenException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateJobDto } from './dto/create-job.dto';
import { UpdateJobDto } from './dto/update-job.dto';
import { JobStatus } from '@prisma/client';
import { FilterApplicantsDto } from './dto/filter-applicants.dto'
import { ApplicationStatus } from '@prisma/client';
import { EmailService } from '../email/email.service';
import { ScheduleInterviewDto } from './dto/schedule-interview.dto';
import { FillJobDto } from './dto/fill-job.dto';
import { SearchJobsDto } from './dto/search-jobs.dto';
import { Prisma } from '@prisma/client';


@Injectable()
export class JobsService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly emailService: EmailService,
  ) {}

  async publishJob(employerId: string, jobData: CreateJobDto) {
    const employer = await this.prisma.employerProfile.findUnique({
      where: { id: employerId },
    });

    // Rule 4: Enforce verification before publishing
    if (employer?.verificationStatus !== 'APPROVED') {
      throw new ForbiddenException(
        'Your account must be verified by an administrator before you can publish job vacancies.'
      );
    }

    return this.prisma.job.create({
      data: {
        ...jobData,
        employerId,
      },
    });
  }

  async createJob(userId: string, dto: CreateJobDto) {
    return this.prisma.job.create({
      data: {
        ...dto,
        // We tell Prisma to connect via the unique userId
        employer: {
          connect: { userId: userId }, 
        },
        status: dto.status || JobStatus.DRAFT,
      },
    });
  }

  // Requirement #5: Edit unpublished and active jobs
  async updateJob(jobId: string, userId: string, dto: UpdateJobDto) {
    const job = await this.prisma.job.findUnique({ 
      where: { id: jobId },
      include: { employer: true } // We must include the employer relation to check ownership
    });

    if (!job) throw new NotFoundException('Job not found');
    if (job.employer.userId !== userId) throw new ForbiddenException('You can only edit your own jobs');
    if (job.status === JobStatus.CLOSED) throw new BadRequestException('Cannot edit a closed job');

    return this.prisma.job.update({
      where: { id: jobId },
      data: dto,
    });
  }

  // Requirement #6: Close a job so it no longer accepts applications
  async closeJob(jobId: string, userId: string) {
    const job = await this.prisma.job.findUnique({ 
      where: { id: jobId },
      include: { employer: true }
    });

    if (!job) throw new NotFoundException('Job not found');
    if (job.employer.userId !== userId) throw new ForbiddenException('You can only close your own jobs');

    return this.prisma.job.update({
      where: { id: jobId },
      data: { status: JobStatus.CLOSED },
    });
  }

  // Helper to list jobs for the employer dashboard
  async getEmployerJobs(userId: string) {
    return this.prisma.job.findMany({
      where: { 
        employer: { userId: userId } // Find jobs where the employer's userId matches our token
      },
      orderBy: { createdAt: 'desc' },
    });
  }

  // View, filter, and fetch profiles/status
  async getJobApplicants(jobId: string, userId: string, filters: FilterApplicantsDto) {
    // 1. Verify the job belongs to this employer
    const job = await this.prisma.job.findUnique({
      where: { id: jobId },
      include: { employer: true },
    });

    if (!job) throw new NotFoundException('Job not found');
    if (job.employer.userId !== userId) {
      throw new ForbiddenException('You can only view applicants for your own jobs');
    }

    // 2. Build the dynamic filter query
    const whereClause: any = { jobId };
    
    if (filters.status) {
      whereClause.status = filters.status;
    }

    if (filters.skill) {
      whereClause.talent = {
        skills: { has: filters.skill }, // Searches the PostgreSQL String array
      };
    }

    // 3. Return applications with the full Talent profile attached
    return this.prisma.application.findMany({
      where: whereClause,
      include: {
        talentProfile: {
          include: {
            user: { select: { email: true } }, // Attach the user's email for contact
          },
        },
      },
      orderBy: { appliedAt: 'desc' },
    });
  }

  // Bonus: Allow employers to update the candidate's status
  async updateApplicationStatus(jobId: string, applicationId: string, userId: string, status: ApplicationStatus) {
    // Verify ownership
    const job = await this.prisma.job.findUnique({
      where: { id: jobId },
      include: { employer: true },
    });

    if (!job || job.employer.userId !== userId) {
      throw new ForbiddenException('Access denied');
    }

    return this.prisma.application.update({
      where: { id: applicationId },
      data: { status },
    });

    const application = await this.prisma.application.findUnique({
      where: { id: applicationId },
      include: {
        job: {
          include: {
            employer: true,
          },
        },
        talentProfile: {
          include: {
            user: { select: { email: true } },
          },
        },
      },
    });

    if (!application) {
      throw new NotFoundException('Application not found');
    }

    // Security Check: Verify job ownership
    if (application?.job?.employer?.userId !== userId) {
      throw new ForbiddenException('You can only update applications for your own job postings');
    }

    // 2. Immediate Database Update (Rule #3)
    const updatedApplication = await this.prisma.application.update({
      where: { id: applicationId },
      data: { status },
      include: {
        talentProfile: {
          select: {
            firstName: true,
            lastName: true,
            user: { select: { email: true } },
          },
        },
      },
    });

    // 3. Trigger Email Notification (Rule #4)
    const talentEmail = application?.talentProfile?.user?.email ?? '';
    const talentName = `${application?.talentProfile?.firstName ?? ''} ${application?.talentProfile?.lastName ?? ''}`.trim();
    const jobTitle = application?.job?.title ?? 'the position';
    const companyName = application?.job?.employer?.companyName ?? 'our company';

    this.emailService
      .sendApplicationStatusEmail(talentEmail, talentName, jobTitle, companyName, status)
      .catch((err) => console.error('Failed to send status notification email:', err));

    return {
      message: `Candidate status updated to ${status} successfully`,
      application: updatedApplication,
    };
  }

  // 1. Schedule Interview (Rule 1 & 2)
  async scheduleInterview(
    jobId: string,
    applicationId: string,
    userId: string,
    dto: ScheduleInterviewDto,
  ) {
    const application = await this.prisma.application.findUnique({
      where: { id: applicationId },
      include: {
        job: { include: { employer: true } },
        talentProfile: { include: { user: true } },
      },
    });

    if (!application) throw new NotFoundException('Application not found');
    if (application?.job?.employer?.userId !== userId) {
      throw new ForbiddenException('Access denied');
    }

    // Rule 1: Must be SHORTLISTED
    if (application.status !== 'SHORTLISTED') {
      throw new BadRequestException('You can only schedule interviews for shortlisted candidates.');
    }

    const interview = await this.prisma.interview.create({
      data: {
        applicationId,
        scheduledAt: new Date(dto.scheduledAt),
        location: dto.location,
        instructions: dto.instructions,
      },
    });

    // Rule 3: Notify Talent
    this.emailService.sendInterviewEmail(
      application.talentProfile.user.email,
      application.talentProfile.firstName,
      application.job.employer.companyName,
      application.job.title,
      'SCHEDULED',
      dto
    ).catch(console.error);

    return { message: 'Interview scheduled successfully', interview };
  }

  // 2. Reschedule or Cancel (Rule 4)
  async updateInterview(
    interviewId: string,
    userId: string,
    action: 'RESCHEDULE' | 'CANCEL',
    dto?: ScheduleInterviewDto, // Optional, only needed if rescheduling
  ) {
    const interview = await this.prisma.interview.findUnique({
      where: { id: interviewId },
      include: {
        application: {
          include: {
            job: { include: { employer: true } },
            talentProfile: { include: { user: true } },
          },
        },
      },
    });

    if (!interview) throw new NotFoundException('Interview not found');
    if (interview.application.job.employer.userId !== userId) {
      throw new ForbiddenException('Access denied');
    }

    const updatedData: any = {};
    if (action === 'CANCEL') {
      updatedData.status = 'CANCELED';
    } else if (action === 'RESCHEDULE' && dto) {
      updatedData.status = 'RESCHEDULED';
      updatedData.scheduledAt = new Date(dto.scheduledAt);
      updatedData.location = dto.location;
      updatedData.instructions = dto.instructions;
    }

    const updatedInterview = await this.prisma.interview.update({
      where: { id: interviewId },
      data: updatedData,
    });

    // Notify Talent of change
    this.emailService.sendInterviewEmail(
      interview.application.talentProfile.user.email,
      interview.application.talentProfile.firstName,
      interview.application.job.employer.companyName,
      interview.application.job.title,
      action === 'CANCEL' ? 'CANCELED' : 'RESCHEDULED',
      dto
    ).catch(console.error);

    return { message: `Interview ${action.toLowerCase()}d successfully`, interview: updatedInterview };
  }

  //Mark as filled, process hired/rejected candidates, and retain records
  async markJobAsFilled(jobId: string, userId: string, dto: FillJobDto) {
    const job = await this.prisma.job.findUnique({
      where: { id: jobId },
      include: {
        employer: true,
        applications: {
          include: { talentProfile: { include: { user: true } } }, // Fetch all applicants for mass email
        },
      },
    });

    if (!job) throw new NotFoundException('Job not found');
    if (job.employer.userId !== userId) throw new ForbiddenException('Access denied');
    if (job.status === 'FILLED') throw new BadRequestException('Job is already marked as filled');

    //If an applicationId was provided, mark that specific candidate as ACCEPTED
    if (dto.applicationId) {
      const hiredApp = job.applications.find(app => app.id === dto.applicationId);
      if (!hiredApp) throw new NotFoundException('Provided application ID does not belong to this job');

      await this.prisma.application.update({
        where: { id: dto.applicationId },
        data: { status: 'ACCEPTED' },
      });

      // Send Congratulations Email to the hired candidate
      this.emailService.sendApplicationStatusEmail(
        hiredApp.talentProfile.user.email,
        hiredApp.talentProfile.firstName,
        job.title,
        job.employer.companyName,
        'ACCEPTED'
      ).catch(console.error);
    }

    //Process all OTHER candidates (Reject them and notify them)
    const unsuccessfulApps = job.applications.filter(app => app.id !== dto.applicationId);
    
    if (unsuccessfulApps.length > 0) {
      // Mass update database status
      await this.prisma.application.updateMany({
        where: { 
          jobId, 
          id: { not: dto.applicationId || '' } 
        },
        data: { status: 'REJECTED' },
      });

      // Mass trigger emails
      unsuccessfulApps.forEach(app => {
        this.emailService.sendJobClosedEmail(
          app.talentProfile.user.email,
          app.talentProfile.firstName,
          job.employer.companyName,
          job.title
        ).catch(console.error);
      });
    }

    //Update Job Status to FILLED (Record is retained in DB)
    return this.prisma.job.update({
      where: { id: jobId },
      data: { status: 'FILLED' },
    });
  }

  //Admin view of all filled jobs
  async getAdminFilledJobs() {
    return this.prisma.job.findMany({
      where: { status: 'FILLED' },
      include: { employer: true },
      orderBy: { updatedAt: 'desc' },
    });
  }

  async searchJobs(query: SearchJobsDto) {
    // Only active job postings must appear in search results.
    // We enforce 'PUBLISHED' status and ensure the deadline hasn't passed.
    const where: Prisma.JobWhereInput = {
      status: 'PUBLISHED', 
      deadline: { gt: new Date() }, 
    };

    // Keyword search (searches job title and description)
    if (query.keyword) {
      where.OR = [
        { title: { contains: query.keyword, mode: 'insensitive' } },
        { description: { contains: query.keyword, mode: 'insensitive' } },
      ];
    }

    // Rule 1 & 2: Filters
    if (query.jobType) {
      where.jobType = query.jobType;
    }
    
    if (query.location) {
      where.location = { contains: query.location, mode: 'insensitive' };
    }
    
    if (query.industry) {
      where.industry = query.industry;
    }
    
    if (query.experienceLevel) {
      where.experienceLevel = query.experienceLevel;
    }

    // Rule 4: User must be able to sort search results.
    // Default to sorting by newest ('createdAt' descending) if no sort is provided.
    const orderBy: Prisma.JobOrderByWithRelationInput = {
      [query.sortBy || 'createdAt']: query.sortOrder || 'desc',
    };

    // Execute the database query
    const jobs = await this.prisma.job.findMany({
      where,
      orderBy,
      include: {
        employer: {
          select: { companyName: true, logoUrl: true }, // Include basic company info for the UI
        },
      },
    });

    // Rule 5: If no matching jobs exist, return the exact requested string.
    if (jobs.length === 0) {
      return {
        message: 'No jobs found matching your search criteria.',
        data: [],
      };
    }

    return {
      message: 'Jobs retrieved successfully.',
      count: jobs.length,
      data: jobs,
    };
  }
}