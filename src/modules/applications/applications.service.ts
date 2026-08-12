import {
  Injectable,
  NotFoundException,
  BadRequestException,
  ConflictException,
} from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { EmailService } from '../email/email.service'; 

@Injectable()
export class ApplicationsService {
  constructor(
    private prisma: PrismaService,
    private emailService: EmailService,
  ) {}

  async applyForJob(userId: string, jobId: string) {
    // 1. Find the Talent Profile using the authenticated user's ID
    const talent = await this.prisma.talentProfile.findUnique({
      where: { userId },
      include: { user: true },
    });

    if (!talent) {
      throw new NotFoundException('Talent profile not found.');
    }

    // Rule 2: User profile must be completed (assuming 100% means complete)
    if (talent.profilePercent < 100) {
      throw new BadRequestException('Your profile must be 100% complete before you can apply for jobs.');
    }

    // Rule 3: User must have an uploaded CV before applying
    if (!talent.resumeUrl) {
      throw new BadRequestException('You must upload a CV/Resume to your profile before applying.');
    }

    // 2. Fetch the Job
    const job = await this.prisma.job.findUnique({
      where: { id: jobId },
      include: { employer: { include: { user: true } } },
    });

    if (!job) {
      throw new NotFoundException('Job not found.');
    }

    // Optional but recommended check: Ensure job is actually published
    if (job.status !== 'PUBLISHED') {
      throw new BadRequestException('This job is not currently open for applications.');
    }

    // Rule 6: If the application deadline has passed
    if (new Date() > job.deadline) {
      throw new BadRequestException('This job is no longer accepting applications.');
    }

    // Rule 4 & 7: User can apply only once (Check for existing application)
    const existingApplication = await this.prisma.application.findUnique({
      where: {
        jobId_talentId: {
          jobId: job.id,
          talentId: talent.id,
        },
      },
    });

    if (existingApplication) {
      throw new ConflictException('You have already applied for this job.');
    }

    // Rule 5: Successful applications must be recorded with status "Applied" (Mapped to PENDING)
    const application = await this.prisma.application.create({
      data: {
        jobId: job.id,
        talentId: talent.id,
        status: 'PENDING', // PENDING in schema represents "Applied / Awaiting Review"
      },
    });

    // Rule 5 (Secondary): Employer must receive the submitted application. 

    //  3. Call the email service to notify the employer
    const applicantFullName = `${talent.firstName} ${talent.lastName}`;
    
    await this.emailService.sendApplicationReceivedEmail(
      job.employer.user.email, 
      job.title, 
      applicantFullName
    );
    

    return {
      message: 'Application submitted successfully.',
      applicationId: application.id,
      status: application.status,
      appliedAt: application.appliedAt,
    };
  }

  async getMyApplications(userId: string) {
    // Find the talent profile using the authenticated user's ID
    const talent = await this.prisma.talentProfile.findUnique({
      where: { userId },
    });

    if (!talent) {
      throw new NotFoundException('Talent profile not found.');
    }

    // Rule 1: View all submitted applications
    const applications = await this.prisma.application.findMany({
      where: { talentId: talent.id },
      orderBy: { appliedAt: 'desc' }, // Show most recent applications first
      include: {
        // Include basic job and employer info for the UI
        job: {
          select: {
            id: true,
            title: true,
            location: true,
            jobType: true,
            employer: {
              select: {
                companyName: true,
                logoUrl: true,
              },
            },
          },
        },
        // Rule 4: Include any interview invitations attached to this application
        interviews: {
          orderBy: { scheduledAt: 'asc' },
          select: {
            id: true,
            scheduledAt: true,
            location: true,
            instructions: true,
            status: true,
          }
        },
      },
    });

    // Rule 2 & 3: The status is dynamically pulled directly from the Application record,
    // so any action the employer took is instantly reflected in this payload.
    return {
      message: 'Applications retrieved successfully.',
      count: applications.length,
      data: applications,
    };
  }
}