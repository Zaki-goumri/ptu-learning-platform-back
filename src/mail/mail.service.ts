import { Injectable, Logger } from '@nestjs/common';
import nodemailer from 'nodemailer';
import SMTPTransport from 'nodemailer/lib/smtp-transport';
import { User } from 'src/user/entities/user.entity';
import { getWelcomeEmailTemplate } from './templates/welcome.template';

@Injectable()
export class MailService {
  private transporter: nodemailer.Transporter<
    SMTPTransport.SentMessageInfo,
    SMTPTransport.Options
  >;
  private readonly logger = new Logger('mailing');

  constructor() {
    this.transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'platformptu@gmail.com',
        pass: 'knwu agly dhkt qeeo ',
      },
    });
  }

  async sendBulkWelcomeEmail(
    users: (Omit<User, 'department' | 'year' | 'role' | 'yearGroup'> & {
      tempPass: string;
    })[],
  ) {
    try {
      const emailPromises = users.map((user) => {
        const { subject, html, text } = getWelcomeEmailTemplate({
          user,
        });
        return this.transporter.sendMail({
          from: 'ptuplatform@gmail.com',
          to: user.email,
          subject,
          html,
          text,
        });
      });

      const results = await Promise.all(emailPromises);
      this.logger.log(`Sent ${results.length} emails successfully`);
      return results;
    } catch (error) {
      this.logger.log('Error sending emails:', error);
      throw error;
    }
  }
}
