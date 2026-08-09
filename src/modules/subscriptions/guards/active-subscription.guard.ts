import { CanActivate, ExecutionContext, Injectable, ForbiddenException } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service'; 

@Injectable()
export class ActiveSubscriptionGuard implements CanActivate {
  constructor(private readonly prisma: PrismaService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const user = request.user; // Provided by JwtAuthGuard

    if (!user || user.role !== 'EMPLOYER') return true; // Only validate employers

    // 1. Safely extract the user ID regardless of how the JWT payload is structured
    const userId = user.sub || user.id || user.userId;

    if (!userId) {
      throw new ForbiddenException('Invalid user payload: User ID missing.');
    }

    // 2. Use the safely extracted userId
    const employer = await this.prisma.employerProfile.findUnique({
      where: { userId: userId },
    });

    if (!employer) {
      throw new ForbiddenException('Employer profile not found');
    }

    // Check if they have an active plan that hasn't expired yet
    const activeSub = await this.prisma.employerSubscription.findFirst({
      where: {
        employerId: employer.id,
        status: 'ACTIVE',
        endDate: { gt: new Date() },
      },
    });

    if (!activeSub) {
      throw new ForbiddenException('You must have an active subscription plan to post a job.');
    }

    return true; // They pass, let them post the job!
  }
}