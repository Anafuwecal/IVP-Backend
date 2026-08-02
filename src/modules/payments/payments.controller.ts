import {
  Controller,
  Post,
  Body,
  Headers,
  HttpCode,
  HttpStatus,
  UnauthorizedException,
} from '@nestjs/common';
import { PaymentsService } from './payments.service';

@Controller('payments')
export class PaymentsController {
  constructor(private readonly paymentsService: PaymentsService) {}

  @Post('initialize')
  @HttpCode(HttpStatus.OK)
  async initialize(@Body() body: { email: string; amount: number }) {
    return this.paymentsService.initializePayment(body.email, body.amount);
  }

  @Post('webhook')
  @HttpCode(HttpStatus.OK)
  async webhook(
    @Headers('x-paystack-signature') signature: string,
    @Body() body: any,
  ) {
    if (!signature) {
      throw new UnauthorizedException('Missing signature header.');
    }
    return this.paymentsService.verifyWebhook(signature, body);
  }

  @Post('verify-config')
  @HttpCode(HttpStatus.OK)
  verifyConfig() {
    return this.paymentsService.verifyConfig();
  }
}
