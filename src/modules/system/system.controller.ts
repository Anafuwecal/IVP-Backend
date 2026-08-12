import { Controller, Post, HttpCode, HttpStatus } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiCreatedResponse } from '@nestjs/swagger';
import { SystemService } from './system.service';

@ApiTags('System')
@Controller('system')
export class SystemController {
  constructor(private readonly systemService: SystemService) {}

  @Post('seed')
  @HttpCode(HttpStatus.CREATED)
  @ApiOperation({ summary: 'Seed the database with initial required data (e.g., Admin user, default plans)' })
  @ApiCreatedResponse({ description: 'Database successfully seeded.' })
  async seedDatabase() {
    return this.systemService.seed();
  }
}