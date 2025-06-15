import { Injectable, Logger } from '@nestjs/common';
import nodemailer from 'nodemailer';
import SMTPTransport from 'nodemailer/lib/smtp-transport';
import { User } from 'src/user/entities/user.entity';
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

  async sendBulkWelcomeEmail(users: User[]) {
    try {
      const emailPromises = users.map((user) =>
        this.transporter.sendMail({
          from: 'ptuplatform@gmail.com',
          to: user.email,
          subject: 'Welcome to PTU',
          html: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Welcome to PTU E-Learning Platform</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            line-height: 1.6;
            color: #333;
            background-color: #f4f4f4;
        }
        
        .email-container {
            max-width: 600px;
            margin: 0 auto;
            background-color: #ffffff;
            border-radius: 8px;
            overflow: hidden;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }
        
        .header {
            background: linear-gradient(135deg, #8B5CF6, #6D28D9);
            color: white;
            padding: 40px 30px;
            text-align: center;
        }
        
        .logo {
            font-size: 32px;
            font-weight: bold;
            margin-bottom: 10px;
            letter-spacing: 2px;
        }
        
        .header-subtitle {
            font-size: 16px;
            opacity: 0.9;
        }
        
        .content {
            padding: 40px 30px;
        }
        
        .greeting {
            font-size: 18px;
            margin-bottom: 20px;
            color: #2D3748;
        }
        
        .message {
            font-size: 16px;
            margin-bottom: 25px;
            color: #4A5568;
            line-height: 1.7;
        }
        
        .update-section {
            background-color: #F7FAFC;
            border-left: 4px solid #8B5CF6;
            padding: 20px;
            margin: 30px 0;
            border-radius: 4px;
        }
        
        .update-title {
            font-size: 16px;
            font-weight: 600;
            color: #2D3748;
            margin-bottom: 10px;
        }
        
        .update-text {
            font-size: 14px;
            color: #4A5568;
            margin-bottom: 20px;
        }
        
        .cta-button {
            display: inline-block;
            background: linear-gradient(135deg, #8B5CF6, #6D28D9);
            color: white;
            text-decoration: none;
            padding: 14px 28px;
            border-radius: 6px;
            font-weight: 600;
            font-size: 16px;
            transition: all 0.3s ease;
            box-shadow: 0 2px 4px rgba(139, 92, 246, 0.3);
        }
        
        .cta-button:hover {
            transform: translateY(-2px);
            box-shadow: 0 4px 8px rgba(139, 92, 246, 0.4);
        }
        
        .security-note {
            background-color: #FFF5F5;
            border: 1px solid #FED7D7;
            border-radius: 4px;
            padding: 15px;
            margin: 25px 0;
        }
        
        .security-text {
            font-size: 14px;
            color: #C53030;
            font-weight: 500;
        }
        
        .footer {
            background-color: #2D3748;
            color: #E2E8F0;
            padding: 30px;
            text-align: center;
        }
        
        .footer-text {
            font-size: 14px;
            margin-bottom: 10px;
        }
        
        .company-info {
            font-size: 12px;
            opacity: 0.8;
        }
        
        /* Responsive Design */
        @media only screen and (max-width: 600px) {
            .email-container {
                margin: 0;
                border-radius: 0;
            }
            
            .header, .content, .footer {
                padding: 20px;
            }
            
            .logo {
                font-size: 24px;
            }
            
            .cta-button {
                display: block;
                text-align: center;
                margin: 20px 0;
            }
        }
    </style>
</head>
<body>
    <div class="email-container">
        <!-- Header Section -->
        <div class="header">
            <div class="logo">PTU</div>
            <div class="header-subtitle">E-Learning Platform</div>
        </div>
        
        <!-- Main Content -->
        <div class="content">
            <div class="greeting">
                Dear ${user.firstName},
            </div>
            
            <div class="message">
                Welcome to PTU E-Learning Platform. We are pleased to confirm that your account has been successfully created and is now active.
            </div>
            
            <div class="message">
                Your learning journey begins here. Our platform provides comprehensive educational resources and tools designed to enhance your academic experience.
            </div>
            
            <!-- Email Update Section -->
            <div class="update-section">
                <div class="update-title">Email Address Verification</div>
                <div class="update-text">
                    To ensure secure communication and account management, please verify or update your email address by clicking the link below.
                </div>
                <a href="{{updateEmailLink}}" class="cta-button">Update Email Address</a>
            </div>
            
            <!-- Security Notice -->
            <div class="security-note">
                <div class="security-text">
                    Security Notice: This link will expire in 24 hours for your account protection.
                </div>
            </div>
            
            <div class="message">
                If you have any questions or require assistance, please do not hesitate to contact our support team.
            </div>
            
            <div class="message">
                Thank you for choosing PTU E-Learning Platform.
            </div>
            
            <div class="message" style="margin-top: 30px;">
                Sincerely,<br>
                <strong>PTU E-Learning Team</strong>
            </div>
        </div>
        
        <!-- Footer -->
        <div class="footer">
            <div class="footer-text">
                PTU E-Learning Platform
            </div>
            <div class="company-info">
                This is an automated message. Please do not reply to this email.
            </div>
        </div>
    </div>
</body>
</html>

<!-- Plain Text Version -->
<!--
Dear ${user.firstName},

Welcome to PTU E-Learning Platform. We are pleased to confirm that your account has been successfully created and is now active.

Your learning journey begins here. Our platform provides comprehensive educational resources and tools designed to enhance your academic experience.

EMAIL ADDRESS VERIFICATION
To ensure secure communication and account management, please verify or update your password by visiting:
{{updateEmailLink}}

SECURITY NOTICE: This link will expire in 24 hours for your account protection.

If you have any questions or require assistance, please do not hesitate to contact our support team.

Thank you for choosing PTU E-Learning Platform.

Sincerely,
PTU E-Learning Team

---
PTU E-Learning Platform
This is an automated message. Please do not reply to this email.
-->`,
        }),
      );

      const results = await Promise.all(emailPromises);
      this.logger.log(`Sent ${results.length} emails successfully`);
      return results;
    } catch (error) {
      this.logger.log('Error sending emails:', error);
      throw error;
    }
  }
}
