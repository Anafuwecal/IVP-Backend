import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class HealthService {
  constructor(private readonly prisma: PrismaService) {}

  async verifySystemState() {
    try {
      // Execute a raw low-overhead database ping to verify our cloud connection
      await this.prisma.$queryRaw`SELECT 1`;

      return {
        status: 'healthy',
        timestamp: new Date().toISOString(),
        database: 'connected',
      };
    } catch (error) {
      throw new InternalServerErrorException(
        'Database connection failed' + error.message,
      );
    }
  }
}
