import { Controller, Get } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiOkResponse } from '@nestjs/swagger';
import { HealthService } from './health.service';

@ApiTags('Health') // Groups this endpoint under "Health" in Swagger UI
@Controller('health')
export class HealthController {
  constructor(private readonly healthService: HealthService) {}

  @Get()
  @ApiOperation({ summary: 'Check system health and external dependencies' })
  @ApiOkResponse({ description: 'System is up and running correctly.' })
  async getHealth() {
    return await this.healthService.verifySystemState();
  }
}