import {
  Injectable,
  NotFoundException,
  BadRequestException,
  ConflictException,
} from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class SavedJobsService {
  constructor(private prisma: PrismaService) {}

  // Rule 1 & 4: Save an active job (No duplicates)
  async saveJob(userId: string, jobId: string) {
    const profile = await this.getTalentProfile(userId);

    // Fetch the job to ensure it exists and is active
    const job = await this.prisma.job.findUnique({
      where: { id: jobId },
    });

    if (!job) {
      throw new NotFoundException('Job not found.');
    }

    // Rule 1: User must be able to save any ACTIVE job
    if (job.status !== 'PUBLISHED' || new Date() > job.deadline) {
      throw new BadRequestException('You can only save active jobs.');
    }

    // Rule 4: Duplicate saved jobs must not be created
    const alreadySaved = await this.prisma.savedJob.findUnique({
      where: {
        talentProfileId_jobId: {
          talentProfileId: profile.id,
          jobId: job.id,
        },
      },
    });

    if (alreadySaved) {
      throw new ConflictException('You have already saved this job.');
    }

    await this.prisma.savedJob.create({
      data: {
        talentProfileId: profile.id,
        jobId: job.id,
      },
    });

    return { message: 'Job saved successfully.' };
  }

  // Rule 2: Saved jobs must appear in the Saved Jobs section
  async getSavedJobs(userId: string) {
    const profile = await this.getTalentProfile(userId);

    const savedJobs = await this.prisma.savedJob.findMany({
      where: { talentProfileId: profile.id },
      orderBy: { savedAt: 'desc' },
      include: {
        job: {
          include: {
            employer: {
              select: { companyName: true, logoUrl: true },
            },
          },
        },
      },
    });

    return {
      message: 'Saved jobs retrieved successfully.',
      count: savedJobs.length,
      data: savedJobs,
    };
  }

  // Rule 3: User must be able to remove saved jobs
  async removeSavedJob(userId: string, jobId: string) {
    const profile = await this.getTalentProfile(userId);

    // Check if it exists before trying to delete
    const savedJob = await this.prisma.savedJob.findUnique({
      where: {
        talentProfileId_jobId: {
          talentProfileId: profile.id,
          jobId: jobId,
        },
      },
    });

    if (!savedJob) {
      throw new NotFoundException('This job is not in your saved list.');
    }

    await this.prisma.savedJob.delete({
      where: { id: savedJob.id },
    });

    return { message: 'Job removed from saved list successfully.' };
  }

  // --- Helper Method ---
  private async getTalentProfile(userId: string) {
    const profile = await this.prisma.talentProfile.findUnique({
      where: { userId },
    });
    if (!profile) {
      throw new NotFoundException('Talent profile not found.');
    }
    return profile;
  }
}