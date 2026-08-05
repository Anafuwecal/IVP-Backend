import { Injectable, NotFoundException, BadRequestException, ForbiddenException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateJobDto } from './dto/create-job.dto';
import { UpdateJobDto } from './dto/update-job.dto';
import { JobStatus } from '@prisma/client';

@Injectable()
export class JobsService {
  constructor(private readonly prisma: PrismaService) {}

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
}