import { Controller, Post, Get, Body, Req, Headers, UseGuards, Res, HttpStatus } from '@nestjs/common';
import { 
  ApiTags, 
  ApiOperation, 
  ApiBearerAuth, 
  ApiCreatedResponse, 
  ApiOkResponse, 
  ApiHeader, 
  ApiBody, 
  ApiUnauthorizedResponse 
} from '@nestjs/swagger';
import { PaymentsService } from './payments.service';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import type { Response } from 'express';

@ApiTags('Payments') // Groups these endpoints under "Payments" in Swagger UI
@Controller('payments')
export class PaymentsController {
  constructor(private readonly paymentsService: PaymentsService) {}

  @UseGuards(JwtAuthGuard)
  @Post('initialize')
  @ApiBearerAuth() // Indicates this specific endpoint requires a JWT token
  @ApiOperation({ summary: 'Initialize a new subscription payment via Paystack' })
  @ApiBody({ 
    schema: { type: 'object', properties: { planId: { type: 'string', format: 'uuid', example: '123e4567-e89b-12d3-a456-426614174000' } } },
    description: 'The UUID of the subscription plan to purchase'
  })
  @ApiCreatedResponse({ description: 'Payment initialized successfully. Returns authorization URL and reference.' })
  @ApiUnauthorizedResponse({ description: 'Missing or invalid JWT token.' })
  async initializePayment(@Req() req, @Body('planId') planId: string) {
    // Extract userId dynamically using our safe mapping trick
    const userId = req.user?.id || req.user?.sub || req.user?.userId;
    return this.paymentsService.initializeSubscriptionPayment(userId, planId);
  }

  // Paystack hits this endpoint silently in the background
  @Post('webhook')
  @ApiOperation({ summary: 'Paystack Webhook Listener (Internal System Use)' })
  @ApiHeader({ name: 'x-paystack-signature', description: 'HMAC SHA512 signature from Paystack', required: true })
  @ApiOkResponse({ description: 'Webhook received successfully (Silent 200 OK).' })
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
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Get payment history for the authenticated user' })
  @ApiOkResponse({ description: 'List of past payments and transactions.' })
  @ApiUnauthorizedResponse({ description: 'Missing or invalid JWT token.' })
  async getHistory(@Req() req) {
    const userId = req.user?.id || req.user?.sub || req.user?.userId;
    return this.paymentsService.getPaymentHistory(userId);
  }
}