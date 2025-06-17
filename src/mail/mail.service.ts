import { Injectable, Logger } from '@nestjs/common';
import nodemailer from 'nodemailer';
import SMTPTransport from 'nodemailer/lib/smtp-transport';
import { getWelcomeEmailTemplate } from './templates/welcome.template';
import { LOGGER } from 'src/common/constants/logger.name';
import { OtpMailProps, WelcomeEmailProps } from './types/mail-props.types';
import { getPasswordResetEmailTemplate } from './templates/otp.template';

@Injectable()
export class MailService {
  private transporter: nodemailer.Transporter<
    SMTPTransport.SentMessageInfo,
    SMTPTransport.Options
  >;
  private readonly logger = new Logger(LOGGER.MAIL);

  constructor() {
    this.transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'platformptu@gmail.com',
        pass: 'knwu agly dhkt qeeo ',
      },
    });
  }

  async sendOtpEmail({ email, otp }: OtpMailProps) {
    try {
      const { subject, html, text } = getPasswordResetEmailTemplate(otp);
      await this.transporter.sendMail({
        from: 'ptuplatform@gmail.com',
        to: email,
        subject,
        html,
        text,
      });
      this.logger.log(`Sent OTP email to ${email} successfully`);
    } catch (error) {
      this.logger.error(`Failed to send OTP email to ${email}:`, error);
      throw error;
    }
  }

  async sendBulkWelcomeEmail(users: WelcomeEmailProps[]) {
    try {
      const results = await Promise.all(
        users.map((user) => {
          const { subject, html, text } = getWelcomeEmailTemplate(user);
          return this.transporter.sendMail({
            from: 'ptuplatform@gmail.com',
            to: user.email,
            subject,
            html,
            text,
          });
        }),
      );
      this.logger.log(`Sent ${results.length} emails successfully`);
    } catch (error) {
      this.logger.log('Error sending emails:', error);
      throw error;
    }
  }
}
