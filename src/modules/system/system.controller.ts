import { Controller, Post, HttpCode, HttpStatus } from '@nestjs/common';
import { SystemService } from './system.service';

@Controller('system')
export class SystemController {
  constructor(private readonly systemService: SystemService) {}

  @Post('seed')
  @HttpCode(HttpStatus.CREATED)
  async seedDatabase() {
    return this.systemService.seed();
  }
}