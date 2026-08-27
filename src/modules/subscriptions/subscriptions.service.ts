import { Injectable, NotFoundException } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import { PrismaService } from '../prisma/prisma.service';
import { EmailService } from '../email/email.service';
import { CreatePlanDto } from './dto/create-plan.dto';

@Injectable()
export class SubscriptionsService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly emailService: EmailService,
) {}

  // ================= ADMIN RULES =================

  // Admin creates a plan
  async createPlan(dto: CreatePlanDto) {
    return this.prisma.subscriptionPlan.create({ data: dto });
  }

  // Admin edits a plan
  async updatePlan(planId: string, dto: Partial<CreatePlanDto>) {
    const plan = await this.prisma.subscriptionPlan.findUnique({ where: { id: planId } });
    if (!plan) throw new NotFoundException('Plan not found');

    return this.prisma.subscriptionPlan.update({
      where: { id: planId },
      data: dto,
    });
  }

  // Admin activates/deactivates a plan
  async togglePlanStatus(planId: string, isActive: boolean) {
    return this.prisma.subscriptionPlan.update({
      where: { id: planId },
      data: { isActive },
    });
  }

  // Admin views all employer subscriptions globally
  async getAllEmployerSubscriptions() {
    return this.prisma.employerSubscription.findMany({
      include: {
        employer: true,
        plan: true,
      },
      orderBy: { createdAt: 'desc' },
    });
  }

  // ================= EMPLOYER RULES =================

  // Employers can view all active plans
  async getActivePlans() {
    return this.prisma.subscriptionPlan.findMany({
      where: { isActive: true },
      orderBy: { price: 'asc' },
    });
  }

  // Purchase, Renew, and Upgrade
  async purchaseSubscription(userId: string, planId: string) {
    // 1. Get employer profile using the authenticated userId
    const employer = await this.prisma.employerProfile.findUnique({ where: { userId } });
    if (!employer) throw new NotFoundException('Employer profile not found');

    // 2. Validate the chosen plan
    const plan = await this.prisma.subscriptionPlan.findUnique({ where: { id: planId } });
    if (!plan || !plan.isActive) throw new NotFoundException('Selected plan is invalid or inactive');

    // 3. Check for existing subscription
    const existingSub = await this.prisma.employerSubscription.findFirst({
      where: { employerId: employer.id },
    });

    const now = new Date();
    let startDate = now;
    let endDate = new Date(now);

    if (existingSub && existingSub.status === 'ACTIVE' && existingSub.endDate > now) {
      if (existingSub.planId === planId) {
        // (RENEW): Add the new months to the EXISTING end date
        startDate = existingSub.startDate;
        endDate = new Date(existingSub.endDate);
        endDate.setMonth(endDate.getMonth() + plan.durationMonths);
      } else {
        // (UPGRADE): Start fresh today, override old plan
        endDate.setMonth(endDate.getMonth() + plan.durationMonths);
      }

      return this.prisma.employerSubscription.update({
        where: { id: existingSub.id },
        data: { planId: plan.id, status: 'ACTIVE', startDate, endDate },
        include: { plan: true },
      });
    }

    // (NEW PURCHASE): Create fresh record with calculated expiry
    endDate.setMonth(endDate.getMonth() + plan.durationMonths);
    
    return this.prisma.employerSubscription.create({
      data: {
        employerId: employer.id,
        planId: plan.id,
        status: 'ACTIVE',
        startDate,
        endDate,
      },
      include: { plan: true },
    });
  }

  // Automated Background Check (Runs every day at midnight)
  @Cron(CronExpression.EVERY_DAY_AT_MIDNIGHT)
  async handleSubscriptionLifecycles() {
    const now = new Date();
    
    // Set warning threshold to exactly 3 days from now
    const warningDate = new Date();
    warningDate.setDate(now.getDate() + 3);

    // 1. Find all active subscriptions expiring in <= 3 days that haven't expired yet
    const expiringSubs = await this.prisma.employerSubscription.findMany({
      where: {
        status: 'ACTIVE',
        endDate: { lte: warningDate, gt: now },
      },
      include: {
        employer: { include: { user: true } },
        plan: true,
      },
    });

    // Send warning emails
    for (const sub of expiringSubs) {
      if (sub.employer?.user?.email) {
        await this.emailService.sendSubscriptionExpiryEmail(
          sub.employer.user.email,
          sub.employer.companyName,
          sub.plan.name,
          sub.endDate
        ).catch(console.error);
      }
    }

    //Mark subscriptions as EXPIRED if the date has passed
    await this.prisma.employerSubscription.updateMany({
      where: {
        status: 'ACTIVE',
        endDate: { lte: now },
      },
      data: { status: 'EXPIRED' },
    });

    console.log(`[Cron] Processed ${expiringSubs.length} expiring warnings and updated expired plans.`);
  }

  // ================= USAGE TRACKING =================

  async getEmployerUsage(userId: string) {
    // 1. Get the employer profile
    const employer = await this.prisma.employerProfile.findUnique({ 
      where: { userId } 
    });
    
    if (!employer) throw new NotFoundException('Employer profile not found');

    // 2. Get the currently active subscription and its plan details
    const activeSub = await this.prisma.employerSubscription.findFirst({
      where: {
        employerId: employer.id,
        status: 'ACTIVE',
        endDate: { gt: new Date() },
      },
      include: { plan: true },
    });

    // If they don't have an active plan, return a default state
    if (!activeSub) {
      return {
        hasActivePlan: false,
        message: 'No active subscription found.',
      };
    }

    // 3. Count how many jobs the employer posted during this billing cycle
    const jobsUsed = await this.prisma.job.count({
      where: {
        employerId: employer.id,
        createdAt: {
          gte: activeSub.startDate, // Only count jobs created AFTER the plan started
          lte: activeSub.endDate,
        },
      },
    });

    // 4. Return the formatted data for your frontend progress bars
    return {
      hasActivePlan: true,
      planName: activeSub.plan.name,
      billingCycle: {
        start: activeSub.startDate,
        end: activeSub.endDate,
      },
      limits: {
        jobs: {
          used: jobsUsed,
          total: activeSub.plan.jobLimit,
          isUnlimited: activeSub.plan.jobLimit === -1,
        },
        applications: {
          total: activeSub.plan.applicationLimit,
          isUnlimited: activeSub.plan.applicationLimit === -1,
        }
      }
    };
  }
}