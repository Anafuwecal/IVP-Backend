import { Controller, Get, Post, Patch, Body, Param, UseGuards } from '@nestjs/common';
import { 
  ApiTags, 
  ApiOperation, 
  ApiBearerAuth, 
  ApiOkResponse, 
  ApiCreatedResponse, 
  ApiParam, 
  ApiBody, 
  ApiUnauthorizedResponse, 
  ApiForbiddenResponse 
} from '@nestjs/swagger';
import { SubscriptionsService } from './subscriptions.service';
import { CreatePlanDto } from './dto/create-plan.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../auth/guards/roles.guard';
import { Roles } from '../auth/decorators/roles.decorator';
import { GetUser } from '../auth/decorators/get-user.decorator';
import { Role } from '@prisma/client';

@ApiTags('Subscriptions')
@ApiBearerAuth() // Tells Swagger all endpoints here require a JWT token
@Controller('subscriptions')
@UseGuards(JwtAuthGuard, RolesGuard)
export class SubscriptionsController {
  constructor(private readonly subscriptionsService: SubscriptionsService) {}

  // ----------------------------------------------------
  // ADMIN ROUTES (Rules 11 & 12)
  // ----------------------------------------------------

  @Post('admin/plans')
  @Roles(Role.ADMIN)
  @ApiOperation({ summary: 'Create a new subscription plan (Admin Only)' })
  @ApiCreatedResponse({ description: 'Subscription plan created successfully.' })
  @ApiUnauthorizedResponse({ description: 'Missing or invalid JWT token.' })
  @ApiForbiddenResponse({ description: 'User is not an Admin.' })
  createPlan(@Body() dto: CreatePlanDto) {
    return this.subscriptionsService.createPlan(dto);
  }

  @Patch('admin/plans/:id')
  @Roles(Role.ADMIN)
  @ApiOperation({ summary: 'Update an existing subscription plan (Admin Only)' })
  @ApiParam({ name: 'id', description: 'The UUID of the plan to update' })
  @ApiOkResponse({ description: 'Subscription plan updated successfully.' })
  @ApiForbiddenResponse({ description: 'User is not an Admin.' })
  updatePlan(@Param('id') id: string, @Body() dto: Partial<CreatePlanDto>) {
    return this.subscriptionsService.updatePlan(id, dto);
  }

  @Patch('admin/plans/:id/status')
  @Roles(Role.ADMIN)
  @ApiOperation({ summary: 'Toggle the active/inactive status of a plan (Admin Only)' })
  @ApiParam({ name: 'id', description: 'The UUID of the plan' })
  @ApiBody({ schema: { type: 'object', properties: { isActive: { type: 'boolean', example: false } } } })
  @ApiOkResponse({ description: 'Plan status updated successfully.' })
  @ApiForbiddenResponse({ description: 'User is not an Admin.' })
  togglePlanStatus(@Param('id') id: string, @Body('isActive') isActive: boolean) {
    return this.subscriptionsService.togglePlanStatus(id, isActive);
  }

  @Get('admin/employers')
  @Roles(Role.ADMIN)
  @ApiOperation({ summary: 'View all employer subscriptions (Admin Only)' })
  @ApiOkResponse({ description: 'List of all employer subscriptions retrieved successfully.' })
  @ApiForbiddenResponse({ description: 'User is not an Admin.' })
  getAllEmployerSubscriptions() {
    return this.subscriptionsService.getAllEmployerSubscriptions();
  }

  // ----------------------------------------------------
  // EMPLOYER ROUTES (Rules 1, 2, 3)
  // ----------------------------------------------------

  @Get('plans')
  @Roles(Role.EMPLOYER) // Admins could technically view this too if you adjust the roles
  @ApiOperation({ summary: 'Get all active subscription plans available for purchase (Employers)' })
  @ApiOkResponse({ description: 'List of active plans retrieved successfully.' })
  getActivePlans() {
    return this.subscriptionsService.getActivePlans();
  }

  @Post('purchase/:planId')
  @Roles(Role.EMPLOYER)
  @ApiOperation({ summary: 'Purchase a subscription plan (Employers)' })
  @ApiParam({ name: 'planId', description: 'The UUID of the plan to purchase' })
  @ApiCreatedResponse({ description: 'Subscription purchased successfully.' })
  @ApiForbiddenResponse({ description: 'User is not an Employer.' })
  purchaseSubscription(
    @GetUser('id') userId: string,
    @Param('planId') planId: string,
  ) {
    return this.subscriptionsService.purchaseSubscription(userId, planId);
  }

  @Get('my-usage')
  @Roles(Role.EMPLOYER)
  @ApiOperation({ summary: 'Get current subscription usage (Jobs posted vs limits)' })
  @ApiOkResponse({ description: 'Usage statistics retrieved successfully.' })
  @ApiForbiddenResponse({ description: 'User is not an Employer.' })
  getMyUsage(@GetUser('id') userId: string) {
    return this.subscriptionsService.getEmployerUsage(userId);
  }
}