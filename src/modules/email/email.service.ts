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
}
