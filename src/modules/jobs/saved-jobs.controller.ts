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
import { 
  ApiTags, 
  ApiOperation, 
  ApiBearerAuth, 
  ApiOkResponse, 
  ApiCreatedResponse, 
  ApiParam 
} from '@nestjs/swagger';
import { SavedJobsService } from './saved-jobs.service';

@ApiTags('Saved Jobs')
@ApiBearerAuth()
@UseGuards(AuthGuard('jwt'))
@Controller('jobs/saved')
export class SavedJobsController {
  constructor(private readonly savedJobsService: SavedJobsService) {}

  @Post(':jobId')
  @HttpCode(HttpStatus.CREATED)
  @ApiOperation({ summary: 'Save a job posting to the user profile' })
  @ApiParam({ name: 'jobId', description: 'The UUID of the job to save' })
  @ApiCreatedResponse({ description: 'Job successfully saved.' })
  async saveJob(@Request() req: any, @Param('jobId') jobId: string) {
    return this.savedJobsService.saveJob(req.user.userId, jobId);
  }

  @Get()
  @ApiOperation({ summary: 'Get all jobs saved by the authenticated user' })
  @ApiOkResponse({ description: 'List of saved jobs retrieved successfully.' })
  async getSavedJobs(@Request() req: any) {
    return this.savedJobsService.getSavedJobs(req.user.userId);
  }

  @Delete(':jobId')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Remove a job from the user’s saved jobs list' })
  @ApiParam({ name: 'jobId', description: 'The UUID of the job to unsave' })
  @ApiOkResponse({ description: 'Job successfully removed from saved list.' })
  async removeSavedJob(@Request() req: any, @Param('jobId') jobId: string) {
    return this.savedJobsService.removeSavedJob(req.user.userId, jobId);
  }
}