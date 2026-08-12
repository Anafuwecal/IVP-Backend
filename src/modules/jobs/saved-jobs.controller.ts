import {
  Controller,
  Post,
  Get,
  Delete,
  Param,
  UseGuards,
  Request,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { SavedJobsService } from './saved-jobs.service';

@UseGuards(AuthGuard('jwt'))
@Controller('jobs/saved')
export class SavedJobsController {
  constructor(private readonly savedJobsService: SavedJobsService) {}

  // POST: /jobs/saved/:jobId (Rule 1 & 4)
  @Post(':jobId')
  @HttpCode(HttpStatus.CREATED)
  async saveJob(@Request() req: any, @Param('jobId') jobId: string) {
    return this.savedJobsService.saveJob(req.user.userId, jobId);
  }

  // GET: /jobs/saved (Rule 2)
  @Get()
  async getSavedJobs(@Request() req: any) {
    return this.savedJobsService.getSavedJobs(req.user.userId);
  }

  // DELETE: /jobs/saved/:jobId (Rule 3)
  @Delete(':jobId')
  @HttpCode(HttpStatus.OK)
  async removeSavedJob(@Request() req: any, @Param('jobId') jobId: string) {
    return this.savedJobsService.removeSavedJob(req.user.userId, jobId);
  }
}