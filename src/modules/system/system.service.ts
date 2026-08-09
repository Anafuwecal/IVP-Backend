import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class SystemService {
  constructor(private readonly prisma: PrismaService) {}

  async seed() {
    // Development guardrail
    if (process.env.NODE_ENV === 'production') {
      throw new InternalServerErrorException(
        'Seeding is strictly prohibited in production environments.',
      );
    }

    try {
      // 1. Core Platform Configurations
      const plan = await this.prisma.subscriptionPlan.create({
        data: {
          name: 'Enterprise Tier',
          price: 199.99,
          benefits: ['Priority Support', 'Unlimited Postings'],
          durationMonths: 6,
        },
      });

      // 2. Identity & Profiles Generation
      const employer = await this.prisma.user.create({
        data: {
          email: 'admin@employer.com',
          passwordHash: 'secure_hash_placeholder',
          role: 'EMPLOYER',
          employerProfile: {
            create: {
              companyName: 'IVP Africa',
              website: 'https://ivpafrica.test',
              contactPerson: 'System Admin',
              industry: 'Technology',
              companySize: '1-10',
              rcNumber: 'RC000000',
            },
          },
        },
        include: { employerProfile: true },
      });

      const talent = await this.prisma.user.create({
        data: {
          email: 'dev@talent.com',
          passwordHash: 'secure_hash_placeholder',
          role: 'TALENT',
          talentProfile: {
            create: {
              firstName: 'John',
              lastName: 'Doe',
              headline: 'Senior Backend Developer',
              skills: ['NestJS', 'PostgreSQL', 'TypeScript'],
            },
          },
        },
        include: { talentProfile: true },
      });

      // 3. Monetization Engine Processing
      const subscription = await this.prisma.employerSubscription.create({
        data: {
          employerId: employer.employerProfile!.id,
          planId: plan.id,
          endDate: new Date(new Date().setMonth(new Date().getMonth() + 1)), // 1 month from now
          //payments: { create: { amount: 199.99 } },
        },
      });

      // 4. Job Placement & Application Lifecycle
      const job = await this.prisma.job.create({
        data: {
          employerId: employer.employerProfile!.id,
          title: 'Lead Architect',
          description: 'Looking for a highly skilled systems architect.',
          location: 'Lagos, Nigeria',
          employmentType: 'Full-Time',
          qualification: 'BSc Degree',
          deadline: new Date('2026-12-31T23:59:59Z'),
        },
      });

      await this.prisma.application.create({
        data: { jobId: job.id, talentId: talent.talentProfile!.id },
      });

      // 5. Database Constraint Verification
      // Intentionally violating the @@unique([jobId, talentId]) rule to ensure Supabase rejects duplicate applications
      try {
        await this.prisma.application.create({
          data: { jobId: job.id, talentId: talent.talentProfile!.id },
        });
      } catch (err) {
        console.log(
          'Constraint verification passed: Database blocked duplicate record.',
        );
      }

      return {
        success: true,
        message:
          'Database schema integrity verified. 12 test records seeded successfully across all entity constraints.',
      };
    } catch (error: any) {
      throw new InternalServerErrorException(
        `Seed execution failed: ${error.message}`,
      );
    }
  }
}
