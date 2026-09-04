import { Injectable, BadRequestException, Logger, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { EmailService } from '../email/email.service';
import { NotificationsService } from '../notifications/notifications.service';
import * as crypto from 'crypto';

@Injectable()
export class PaymentsService {
  private readonly logger = new Logger(PaymentsService.name);
  // Ensure it always falls back to an empty string so crypto doesn't crash
  private readonly PAYSTACK_SECRET = process.env.PAYSTACK_SECRET_KEY || '';

  constructor(
    private prisma: PrismaService,
    private emailService: EmailService,
    private notificationsService: NotificationsService,
  ) {}

  // 1. INITIALIZE PAYMENT (Rules 1, 3)
  async initializeSubscriptionPayment(userId: string, planId: string) {
    const employer = await this.prisma.employerProfile.findUnique({
      where: { userId },
      include: { user: true }
    });

    // Strict null check for employer
    if (!employer || !employer.user) {
      throw new NotFoundException('Employer profile not found');
    }

    const plan = await this.prisma.subscriptionPlan.findUnique({ where: { id: planId } });

    // Fix: Strict null check for plan
    if (!plan) {
      throw new NotFoundException('Subscription plan not found');
    }

    // ========================================================================
    // NEW: INTERCEPT $0 (FREE) PLANS TO BYPASS PAYSTACK
    // ========================================================================
    if (Number(plan.price) === 0) {
      const startDate = new Date();
      const endDate = new Date();
      endDate.setMonth(endDate.getMonth() + plan.durationMonths);

      // 1. Activate subscription immediately (CHANGED to employerSubscription)
      const existingSub = await this.prisma.employerSubscription.findFirst({
        where: { employerId: employer.id }
      });

      if (existingSub) {
        // CHANGED to employerSubscription
        await this.prisma.employerSubscription.update({
          where: { id: existingSub.id },
          data: {
            planId: plan.id,
            status: 'ACTIVE',
            startDate,
            endDate,
          }
        });
      } else {
        // CHANGED to employerSubscription
        await this.prisma.employerSubscription.create({
          data: {
            employerId: employer.id,
            planId: plan.id,
            status: 'ACTIVE',
            startDate,
            endDate,
          }
        });
      }

      // 2. Create a SUCCESS payment record for $0
      await this.prisma.payment.create({
        data: {
          employerId: employer.id,
          planId: plan.id,
          amount: 0,
          reference: `FREE_SUB_${Date.now()}_${Math.floor(Math.random() * 1000)}`,
          status: 'SUCCESS',
          channel: 'FREE_TIER'
        },
      });

      // 3. Return a local URL so the frontend refreshes seamlessly
      // Fallback to localhost if FRONTEND_URL isn't set in your .env
      const frontendUrl = process.env.FRONTEND_URL || 'http://ivp-africa.vercel.app';
      return {
        message: 'Free plan activated successfully',
        paymentUrl: `${frontendUrl}/employer/subscription?success=true`,
        summary: {
          planName: plan.name,
          amount: 0,
          duration: `${plan.durationMonths} Months`
        }
      };
    }
    // ========================================================================
    // END NEW $0 INTERCEPTION
    // ========================================================================
    
    const amountInKobo = Number(plan.price) * 100; 
    const paymentReference = `IVP_SUB_${Date.now()}_${Math.floor(Math.random() * 1000)}`;

    // Create a pending payment record
    const payment = await this.prisma.payment.create({
      data: {
        employerId: employer.id,
        planId: plan.id,
        amount: plan.price,
        reference: paymentReference,
        status: 'PENDING',
      },
    });

    // Call Paystack API using native fetch
    const response = await fetch('https://api.paystack.co/transaction/initialize', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${this.PAYSTACK_SECRET}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: employer.user.email,
        amount: amountInKobo,
        reference: payment.reference,
        metadata: { employerId: employer.id, planId: plan.id } 
      }),
    });

    const paystackData = await response.json();
    if (!paystackData.status) {
      throw new BadRequestException(`Payment initialization failed: ${paystackData.message}`);
    }

    this.notificationsService.createNotification({
      userId: employer.userId,
      type: 'PAYMENT',
      title: 'Payment Initiated',
      description: `You have initiated a payment for the ${plan.name} plan. Please complete the payment to activate your subscription.`,
    }).catch(err => console.error('Notification failed:', err));

    return {
      message: 'Payment initialized successfully',
      paymentUrl: paystackData.data.authorization_url,
      summary: { 
        planName: plan.name, 
        amount: Number(plan.price), 
        // Fix: Use durationMonths based on your schema
        duration: `${plan.durationMonths} Months` 
      }
    };
  }

  // 2. HANDLE WEBHOOK (Rules 13, 14, 15, 16, 17)
  async handlePaystackWebhook(signature: string, body: any) {
    if (!this.PAYSTACK_SECRET) {
      this.logger.error('PAYSTACK_SECRET_KEY is missing from environment variables');
      return;
    }

    const hash = crypto.createHmac('sha512', this.PAYSTACK_SECRET).update(JSON.stringify(body)).digest('hex');
    if (hash !== signature) {
      this.logger.error('Invalid Paystack Signature');
      return; 
    }

    const event = body.event;
    const data = body.data;

    if (event === 'charge.success') {
      const { reference, channel, metadata } = data;
      const { employerId, planId } = metadata;

      await this.prisma.payment.update({
        where: { reference },
        // Fix: Ensure SUCCESS matches your PaymentStatus Enum
        data: { status: 'SUCCESS', channel }
      });

      const plan = await this.prisma.subscriptionPlan.findUnique({ where: { id: planId } });
      if (!plan) return;

      const startDate = new Date();
      const endDate = new Date();
      endDate.setMonth(startDate.getMonth() + plan.durationMonths);

      // 1. Expire any existing active subscriptions for this employer first
      await this.prisma.employerSubscription.updateMany({
        where: { employerId, status: 'ACTIVE' },
        data: { status: 'EXPIRED' },
      });

      await this.prisma.employerSubscription.create({
        data: {
          employerId,
          planId,
          status: 'ACTIVE',
          startDate,
          endDate,
        }
      });

      this.logger.log(`Subscription activated for employer ${employerId}`);
      // NEW: Notify employer of successful payment via webhook
      const employerProfile = await this.prisma.employerProfile.findUnique({ where: { id: employerId } });
      if (employerProfile) {
        this.notificationsService.createNotification({
          userId: employerProfile.userId,
          type: 'PAYMENT',
          title: 'Payment Successful',
          description: `Your payment of ${data.amount / 100} was successful. Your ${plan.name} subscription is now active.`,
        }).catch(err => console.error('Notification failed:', err));
      }
    }
  }

  async getPaymentHistory(userId: string) {
    const employer = await this.prisma.employerProfile.findUnique({ where: { userId } });
    
    if (!employer) {
      throw new NotFoundException('Employer profile not found');
    }

    return this.prisma.payment.findMany({
      where: { employerId: employer.id },
      orderBy: { createdAt: 'desc' },
      include: { plan: true }
    });
  }
}