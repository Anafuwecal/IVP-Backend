import { Controller, Get, Post, Patch, Body, Param, UseGuards } from '@nestjs/common';
import { SubscriptionsService } from './subscriptions.service';
import { CreatePlanDto } from './dto/create-plan.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../auth/guards/roles.guard';
import { Roles } from '../auth/decorators/roles.decorator';
import { GetUser } from '../auth/decorators/get-user.decorator';
import { Role } from '@prisma/client';

@Controller('subscriptions')
@UseGuards(JwtAuthGuard, RolesGuard)
export class SubscriptionsController {
  constructor(private readonly subscriptionsService: SubscriptionsService) {}

  // ----------------------------------------------------
  // ADMIN ROUTES (Rules 11 & 12)
  // ----------------------------------------------------

  @Post('admin/plans')
  @Roles(Role.ADMIN)
  createPlan(@Body() dto: CreatePlanDto) {
    return this.subscriptionsService.createPlan(dto);
  }

  @Patch('admin/plans/:id')
  @Roles(Role.ADMIN)
  updatePlan(@Param('id') id: string, @Body() dto: Partial<CreatePlanDto>) {
    return this.subscriptionsService.updatePlan(id, dto);
  }

  @Patch('admin/plans/:id/status')
  @Roles(Role.ADMIN)
  togglePlanStatus(@Param('id') id: string, @Body('isActive') isActive: boolean) {
    return this.subscriptionsService.togglePlanStatus(id, isActive);
  }

  @Get('admin/employers')
  @Roles(Role.ADMIN)
  getAllEmployerSubscriptions() {
    return this.subscriptionsService.getAllEmployerSubscriptions();
  }

  // ----------------------------------------------------
  // EMPLOYER ROUTES (Rules 1, 2, 3)
  // ----------------------------------------------------

  @Get('plans')
  @Roles(Role.EMPLOYER) // Admins could technically view this too if you adjust the roles
  getActivePlans() {
    return this.subscriptionsService.getActivePlans();
  }

  @Post('purchase/:planId')
  @Roles(Role.EMPLOYER)
  purchaseSubscription(
    @GetUser('id') userId: string,
    @Param('planId') planId: string,
  ) {
    return this.subscriptionsService.purchaseSubscription(userId, planId);
  }

}