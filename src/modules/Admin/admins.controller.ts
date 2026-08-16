import { Controller, Post, Body, Get, Query, Patch, Param, UseGuards, Req } from '@nestjs/common';
import { AdminAuthService } from './admin.service';
import { AdminDashboardService } from './admin.service';
import { DashboardService } from './admin.service';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../auth/guards/roles.guard';
import { Roles } from '../auth/decorators/roles.decorator';
import { Role, AccountStatus } from '@prisma/client';
import { UpdateUserStatusDto } from './dto/update-user-status.dto';
import { AdminEmployerService } from './admin.service';

@Controller('admin')
export class AdminController {
  constructor(
    private authService: AdminAuthService,
    private adminDashboardService: AdminDashboardService,
    private readonly dashboardService: DashboardService,
  ) {}

  // --- AUTH ENDPOINTS ---
  @Post('auth/request-login')
  async requestLogin(@Body('email') email: string) {
    return this.authService.requestAdminLogin(email);
  }

  @Post('auth/verify-login')
  async verifyLogin(@Body('token') token: string) {
    return this.authService.verifyAdminLogin(token);
  }

  // --- DASHBOARD ENDPOINTS ---
  
  @Get('dashboard/stats')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.ADMIN) // Changed to Role.ADMIN to match your enum usage
  async getDashboardStats() {
    return this.dashboardService.getDashboardStats();
  }
  
  @Get('users')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.ADMIN)
  async getUsers(
    @Query('search') search?: string,
    @Query('role') role?: Role,
    @Query('status') status?: AccountStatus,
    @Query('verificationStatus') verificationStatus?: string,
    @Query('startDate') startDate?: string,
    @Query('endDate') endDate?: string,
  ) {
    return this.adminDashboardService.getAllUsers({
      search, role, status, verificationStatus, startDate, endDate
    });
  }

  @Get('users/:id')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.ADMIN)
  async getUserDetails(@Param('id') id: string) {
    return this.adminDashboardService.getUserDetails(id);
  }

  // Rules 5, 6, 7, 8: Update Status (Activate, Deactivate, Suspend)
  @Patch('users/:id/status')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.ADMIN)
  async updateStatus(
    @Param('id') id: string,
    @Body() updateUserStatusDto: UpdateUserStatusDto,
    @Req() req: any, // Extract admin info from JWT
  ) {
    // Assuming your JwtStrategy assigns the decoded token to req.user.id or req.user.sub
    const adminId = req.user.id || req.user.sub; 
    return this.adminDashboardService.updateUserStatus(adminId, id, updateUserStatusDto.status);
  }

  // Rule 9: Resend verification email
  @Post('users/:id/resend-verification')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.ADMIN)
  async resendVerification(
    @Param('id') id: string,
    @Req() req: any,
  ) {
    const adminId = req.user.id || req.user.sub;
    return this.adminDashboardService.resendVerificationEmail(adminId, id);
  }

  // Rule 10: Trigger Password Reset
  @Post('users/:id/reset-password')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.ADMIN)
  async resetPassword(
    @Param('id') id: string,
    @Req() req: any,
  ) {
    const adminId = req.user.id || req.user.sub;
    return this.adminDashboardService.resetUserPassword(adminId, id);
  }
}

// --- EMPLOYER VERIFICATION ---

@UseGuards(JwtAuthGuard, RolesGuard)
@Roles('ADMIN') 
@Controller('admin/employers')
export class AdminEmployerController {
  constructor(private readonly adminEmployerService: AdminEmployerService) {}

  // Rule 1: Review employer verification requests
  @Get('pending-verifications')
  async getPendingVerifications() {
    return this.adminEmployerService.getPendingRequests();
  }

  // Rule 2: Approve or reject requests
  @Patch(':id/verify')
  async verifyEmployer(
    @Param('id') id: string, 
    @Body('status') status: 'APPROVED' | 'REJECTED'
  ) {
    return this.adminEmployerService.updateVerificationStatus(id, status);
  }
}