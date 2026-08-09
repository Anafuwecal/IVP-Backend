import { Injectable, InternalServerErrorException } from '@nestjs/common';
import * as nodemailer from 'nodemailer';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class EmailService {
  private transporter: nodemailer.Transporter;

  constructor(private configService: ConfigService) {
    this.transporter = nodemailer.createTransport({
      host: this.configService.get<string>('SMTP_HOST', 'smtp.gmail.com'),
      port: this.configService.get<number>('SMTP_PORT', 465),
      secure: this.configService.get<string>('SMTP_SECURE') === 'true',
      auth: {
        user: this.configService.get<string>('SMTP_USER'),
        pass: this.configService.get<string>('SMTP_PASS'),
      },
    });
  }

  async sendVerificationEmail(email: string, token: string) {
    // In production, this points to your frontend (e.g., Next.js/React) which then calls the API.
    // For API testing, we can point it directly to the NestJS endpoint.
    const verifyUrl = `${process.env.API_URL}/api/v1/auth/verify-email?token=${token}`;

    const mailOptions = {
      from: `"IVP Africa" <${process.env.SMTP_USER}>`,
      to: email,
      subject: 'Verify Your IVP Africa Account',
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px;">
          <h2>Welcome to IVP Africa!</h2>
          <p>You are one step away from completing your profile.</p>
          <p>Please verify your email address by clicking the button below:</p>
          <a href="${verifyUrl}" style="background-color: #007bff; color: black; padding: 10px 20px; text-decoration: none; border-radius: 5px; display: inline-block;">Verify Email</a>
          <br /><br />
          <p><small>If the button doesn't work, copy and paste this link into your browser:<br/> ${verifyUrl}</small></p>
        </div>
      `,
    };

    try {
      await this.transporter.sendMail(mailOptions);
    } catch (error) {
      console.error('Error sending email:', error);
      throw new InternalServerErrorException(
        'Registration succeeded, but email failed to send.',
      );
    }
  }

  async sendPasswordResetEmail(email: string, token: string) {
    // In production, this points to your frontend's "Create New Password" page,
    // which then submits the token and new password back to the API.
    const resetUrl = `${process.env.API_URL}/api/v1/auth/reset-password?token=${token}`;

    const mailOptions = {
      from: `"IVP Africa" <${process.env.SMTP_USER}>`,
      to: email,
      subject: 'Password Reset Request',
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px;">
          <h2>Password Reset Request</h2>
          <p>We received a request to reset your password for your IVP Africa account.</p>
          <p>Click the button below to create a new password. This link is valid for 1 hour.</p>
          <a href="${resetUrl}" style="background-color: #28a745; color: black; padding: 10px 20px; text-decoration: none; border-radius: 5px; display: inline-block;">Reset Password</a>
          <br /><br />
          <p><small>If you did not request this, please ignore this email.</small></p>
        </div>
      `,
    };

    try {
      await this.transporter.sendMail(mailOptions);
    } catch (error) {
      console.error('Error sending password reset email:', error);
      throw new InternalServerErrorException(
        'Failed to send password reset email.',
      );
    }
  }

  async sendApplicationStatusEmail(
    toEmail: string,
    talentName: string,
    jobTitle: string,
    companyName: string,
    status: 'SHORTLISTED' | 'REJECTED' | 'ACCEPTED' | string,
  ) {
    let subject = `Update on your application for ${jobTitle} at ${companyName}`;
    let messageBody = '';

    if (status === 'SHORTLISTED') {
      subject = `Great news! You have been shortlisted for ${jobTitle}`;
      messageBody = `Hi ${talentName},\n\nGood news! ${companyName} has reviewed your profile and shortlisted you for the ${jobTitle} position. The team will reach out with the next steps soon.\n\nBest regards,\nIVP Africa Team`;
    } else if (status === 'REJECTED') {
      subject = `Update regarding your application for ${jobTitle}`;
      messageBody = `Hi ${talentName},\n\nThank you for applying for the ${jobTitle} position at ${companyName}. After careful consideration, the team has decided not to move forward with your application at this time.\n\nWe encourage you to keep applying for other opportunities on IVP Africa.\n\nBest regards,\nIVP Africa Team`;
    } else {
      messageBody = `Hi ${talentName},\n\nYour application status for ${jobTitle} at ${companyName} has been updated to: ${status}.\n\nBest regards,\nIVP Africa Team`;
    }

    // Use your existing email delivery logic (Nodemailer, Resend, SendGrid, etc.)
    console.log(`[Email Sent] To: ${toEmail} | Subject: ${subject}`);
  
    // Example call to your underlying mail transport:
    // await this.mailer.sendMail({ to: toEmail, subject, text: messageBody });
  }

  async sendInterviewEmail(
    toEmail: string,
    talentName: string,
    companyName: string,
    jobTitle: string,
    action: 'SCHEDULED' | 'RESCHEDULED' | 'CANCELED',
    details?: { scheduledAt: string; location: string; instructions?: string }
  ) {
    let subject = '';
    let messageBody = '';

    if (action === 'CANCELED') {
      subject = `Interview Canceled: ${jobTitle} at ${companyName}`;
      messageBody = `Hi ${talentName},\n\nYour interview for the ${jobTitle} position at ${companyName} has been canceled. The employer will be in touch if there are any further updates.\n\nBest regards,\nIVP Africa Team`;
    } else {
      const time = new Date(details!.scheduledAt).toLocaleString();
      subject = `Interview ${action === 'RESCHEDULED' ? 'Rescheduled' : 'Invitation'}: ${companyName}`;
      messageBody = `Hi ${talentName},\n\n${companyName} has ${action.toLowerCase()} an interview with you for the ${jobTitle} position.\n\nDate & Time: ${time}\nLocation/Link: ${details!.location}\nInstructions: ${details!.instructions || 'None'}\n\nPlease ensure you are prepared.\n\nBest regards,\nIVP Africa Team`;
    }

    console.log(`[Email Sent] To: ${toEmail} | Subject: ${subject}`);
    // await this.mailer.sendMail({ to: toEmail, subject, text: messageBody });
  }
  
  async sendJobClosedEmail(toEmail: string, talentName: string, companyName: string, jobTitle: string) {
    const subject = `Update on your application: ${jobTitle} at ${companyName} has been filled`;
    const messageBody = `Hi ${talentName},\n\nThank you for taking the time to apply and interview for the ${jobTitle} position at ${companyName}.\n\nThis email is to inform you that the recruitment process has concluded and the position has been officially filled. While you were not selected for this specific role, we highly encourage you to keep exploring and applying to other opportunities on IVP Africa.\n\nBest regards,\nIVP Africa Team`;

    console.log(`[Email Sent] To: ${toEmail} | Subject: ${subject}`);
    // await this.mailer.sendMail({ to: toEmail, subject, text: messageBody });
  }

  async sendSubscriptionExpiryEmail(
    toEmail: string, 
    companyName: string, 
    planName: string, 
    expiryDate: Date
  ) {
    const subject = `Action Required: Your ${planName} subscription is expiring soon`;
    const dateString = expiryDate.toLocaleDateString();
    const messageBody = `Hi ${companyName} team,\n\nYour ${planName} subscription is set to expire on ${dateString}.\n\nTo ensure uninterrupted access to job posting and recruitment features, please log in and renew your subscription or upgrade to a new plan before the expiry date.\n\nBest regards,\nIVP Africa Team`;

    console.log(`[Email Sent] To: ${toEmail} | Subject: ${subject}`);
    // await this.mailer.sendMail({ to: toEmail, subject, text: messageBody });
  }
}
