import { Injectable, InternalServerErrorException } from '@nestjs/common';
import * as nodemailer from 'nodemailer';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class EmailService {
  private transporter: nodemailer.Transporter;

  constructor(private configService: ConfigService) {
    this.transporter = nodemailer.createTransport({
      host: this.configService.get<string>('SMTP_HOST', 'smtp.gmail.com'),
      port: Number(this.configService.get('SMTP_PORT', 465)),
      secure: this.configService.get<string>('SMTP_SECURE') === 'true' || Number(this.configService.get('SMTP_PORT', 465)) === 465,
      family: Number(this.configService.get('SMTP_FAMILY', 4)), // Forces IPv4
      auth: {
        user: this.configService.get<string>('SMTP_USER'),
        pass: this.configService.get<string>('SMTP_PASS'),
      },
    } as nodemailer.TransportOptions);
  }

  private get defaultFrom(): string {
    const user = this.configService.get<string>('SMTP_USER');
    return `"IVP Africa" <${user}>`;
  }

  async sendVerificationEmail(email: string, token: string) {
    const verifyUrl = `${process.env.API_URL}/api/v1/auth/verify-email?token=${token}`;

    const mailOptions = {
      from: this.defaultFrom,
      to: email,
      subject: 'Verify Your IVP Africa Account',
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px;">
          <h2>Welcome to IVP Africa!</h2>
          <p>You are one step away from completing your profile.</p>
          <p>Please verify your email address by clicking the button below:</p>
          <a href="${verifyUrl}" style="background-color: #007bff; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px; display: inline-block;">Verify Email</a>
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
    const resetUrl = `${process.env.API_URL}/api/v1/auth/reset-password?token=${token}`;

    const mailOptions = {
      from: this.defaultFrom,
      to: email,
      subject: 'Password Reset Request',
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px;">
          <h2>Password Reset Request</h2>
          <p>We received a request to reset your password for your IVP Africa account.</p>
          <p>Click the button below to create a new password. This link is valid for 1 hour.</p>
          <a href="${resetUrl}" style="background-color: #28a745; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px; display: inline-block;">Reset Password</a>
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

    try {
      await this.transporter.sendMail({
        from: this.defaultFrom,
        to: toEmail,
        subject,
        text: messageBody,
      });
      console.log(`[Email Sent] To: ${toEmail} | Subject: ${subject}`);
    } catch (error) {
      console.error('Error sending application status email:', error);
    }
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

    try {
      await this.transporter.sendMail({
        from: this.defaultFrom,
        to: toEmail,
        subject,
        text: messageBody,
      });
      console.log(`[Email Sent] To: ${toEmail} | Subject: ${subject}`);
    } catch (error) {
      console.error('Error sending interview email:', error);
    }
  }
  
  async sendJobClosedEmail(toEmail: string, talentName: string, companyName: string, jobTitle: string) {
    const subject = `Update on your application: ${jobTitle} at ${companyName} has been filled`;
    const messageBody = `Hi ${talentName},\n\nThank you for taking the time to apply and interview for the ${jobTitle} position at ${companyName}.\n\nThis email is to inform you that the recruitment process has concluded and the position has been officially filled. While you were not selected for this specific role, we highly encourage you to keep exploring and applying to other opportunities on IVP Africa.\n\nBest regards,\nIVP Africa Team`;

    try {
      await this.transporter.sendMail({
        from: this.defaultFrom,
        to: toEmail,
        subject,
        text: messageBody,
      });
      console.log(`[Email Sent] To: ${toEmail} | Subject: ${subject}`);
    } catch (error) {
      console.error('Error sending job closed email:', error);
    }
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

    try {
      await this.transporter.sendMail({
        from: this.defaultFrom,
        to: toEmail,
        subject,
        text: messageBody,
      });
      console.log(`[Email Sent] To: ${toEmail} | Subject: ${subject}`);
    } catch (error) {
      console.error('Error sending subscription expiry email:', error);
    }
  }

  async sendApplicationReceivedEmail(
    employerEmail: string,
    jobTitle: string,
    applicantName: string,
  ) {
    const dashboardUrl = `${process.env.FRONTEND_URL || 'http://localhost:3000'}/employer/dashboard`;

    const mailOptions = {
      from: this.defaultFrom,
      to: employerEmail,
      subject: `New Application Received: ${jobTitle}`,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px;">
          <h2>New Job Application</h2>
          <p>Hello,</p>
          <p>Great news! <strong>${applicantName}</strong> has just applied for your job posting: <strong>${jobTitle}</strong>.</p>
          <p>Log in to your employer dashboard to review their profile, resume, and move them to the next stage of your recruitment pipeline.</p>
          <br />
          <a href="${dashboardUrl}" style="background-color: #007bff; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px; display: inline-block;">View Application</a>
          <br /><br />
          <p><small>Best regards,<br/>IVP Africa Team</small></p>
        </div>
      `,
    };

    try {
      await this.transporter.sendMail(mailOptions);
      console.log(`[Email Sent] To: ${employerEmail} | Subject: New Application Received for ${jobTitle}`);
    } catch (error) {
      console.error('Error sending application received email to employer:', error);
    }
  }
}