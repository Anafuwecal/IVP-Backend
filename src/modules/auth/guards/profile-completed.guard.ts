import {
  Injectable,
  CanActivate,
  ExecutionContext,
  ForbiddenException,
  UnauthorizedException,
} from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class ProfileCompletedGuard implements CanActivate {
  constructor(private readonly prisma: PrismaService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const userId = request.user?.id || request.user?.userId;
    
    if (!userId) {
      throw new UnauthorizedException('User authentication context is missing.');
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