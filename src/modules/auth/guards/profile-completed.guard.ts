import {
  Injectable,
  CanActivate,
  ExecutionContext,
  ForbiddenException,
} from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class ProfileCompletedGuard implements CanActivate {
  constructor(private readonly prisma: PrismaService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const userId = request.user?.id;

    if (!userId) {
      return false;
    }

    const profile = await this.prisma.employerProfile.findUnique({
      where: { userId },
      select: { isProfileComplete: true },
    });

    if (!profile || !profile.isProfileComplete) {
      throw new ForbiddenException(
        'You must complete your company profile before you can post jobs or perform this action.',
      );
    }

    return true;
  }
}