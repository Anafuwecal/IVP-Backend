import { Injectable, NotFoundException, BadRequestException, ForbiddenException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateJobDto } from './dto/create-job.dto';
import { UpdateJobDto } from './dto/update-job.dto';
import { JobStatus } from '@prisma/client';

@Injectable()
export class JobsService {
  constructor(private readonly prisma: PrismaService) {}

  async createJob(employerId: string, dto: CreateJobDto) {
    return this.prisma.job.create({
      data: {
        ...dto,
        employerId,
        status: dto.status || JobStatus.DRAFT, // Defaults to DRAFT if not specified
      },
    });
  }

  // Requirement #5: Edit unpublished and active jobs
  async updateJob(jobId: string, employerId: string, dto: UpdateJobDto) {
    const job = await this.prisma.job.findUnique({ where: { id: jobId } });

    if (!job) throw new NotFoundException('Job not found');
    if (job.employerId !== employerId) throw new ForbiddenException('You can only edit your own jobs');
    if (job.status === JobStatus.CLOSED) throw new BadRequestException('Cannot edit a closed job');

    return this.prisma.job.update({
      where: { id: jobId },
      data: dto,
    });
  }

  // Requirement #6: Close a job so it no longer accepts applications
  async closeJob(jobId: string, employerId: string) {
    const job = await this.prisma.job.findUnique({ where: { id: jobId } });

    if (!job) throw new NotFoundException('Job not found');
    if (job.employerId !== employerId) throw new ForbiddenException('You can only close your own jobs');

    return this.prisma.job.update({
      where: { id: jobId },
      data: { status: JobStatus.CLOSED },
    });
  }

  // Helper to list jobs for the employer dashboard
  async getEmployerJobs(employerId: string) {
    return this.prisma.job.findMany({
      where: { employerId },
      orderBy: { createdAt: 'desc' },
    });
  }
}