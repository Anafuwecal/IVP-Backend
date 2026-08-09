import { Controller, Post, Get, Body, Req, Headers, UseGuards, Res, HttpStatus } from '@nestjs/common';
import { PaymentsService } from './payments.service';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import type { Response } from 'express';

@Controller('api/v1/payments')
export class PaymentsController {
  constructor(private readonly paymentsService: PaymentsService) {}

  @UseGuards(JwtAuthGuard)
  @Post('initialize')
  async initializePayment(@Req() req, @Body('planId') planId: string) {
    // Extract userId dynamically using our safe mapping trick
    const userId = req.user?.id || req.user?.sub || req.user?.userId;
    return this.paymentsService.initializeSubscriptionPayment(userId, planId);
  }

  // Paystack hits this endpoint silently in the background
  @Post('webhook')
  async paystackWebhook(
    @Headers('x-paystack-signature') signature: string,
    @Body() body: any,
    @Res() res: Response
  ) {
    // Paystack requires a 200 OK immediately, so we don't await the webhook logic
    res.status(HttpStatus.OK).send(); 
    this.paymentsService.handlePaystackWebhook(signature, body).catch(err => {
        console.error('Webhook processing error:', err);
    });
  }

  @UseGuards(JwtAuthGuard)
  @Get('history')
  async getHistory(@Req() req) {
    const userId = req.user?.id || req.user?.sub || req.user?.userId;
    return this.paymentsService.getPaymentHistory(userId);
  }
}