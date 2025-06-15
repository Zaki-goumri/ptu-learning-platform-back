import { User } from 'src/user/entities/user.entity';
import { emailStyles } from './styles/email.styles';

interface WelcomeEmailProps {
  user: User;
  updateEmailLink?: string;
}

export const getWelcomeEmailTemplate = ({ user, updateEmailLink }: WelcomeEmailProps) => ({
  subject: 'Welcome to PTU',
  html: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Welcome to PTU E-Learning Platform</title>
    <style>
        ${emailStyles}
    </style>
</head>
<body>
    <div class="email-container">
        <div class="header">
            <div class="logo">PTU</div>
            <div class="header-subtitle">E-Learning Platform</div>
        </div>
        
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
            
            ${updateEmailLink ? `
            <div class="section">
                <div class="section-title">Email Address Verification</div>
                <div class="section-text">
                    To ensure secure communication and account management, please verify or update your email address by clicking the link below.
                </div>
                <a href="${updateEmailLink}" class="cta-button">Update Email Address</a>
            </div>
            
            <div class="alert">
                <div class="alert-text">
                    Security Notice: This link will expire in 24 hours for your account protection.
                </div>
            </div>
            ` : ''}
            
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
</html>`,
  text: `Dear ${user.firstName},

Welcome to PTU E-Learning Platform. We are pleased to confirm that your account has been successfully created and is now active.

Your learning journey begins here. Our platform provides comprehensive educational resources and tools designed to enhance your academic experience.

${updateEmailLink ? `
EMAIL ADDRESS VERIFICATION
To ensure secure communication and account management, please verify or update your password by visiting:
${updateEmailLink}

SECURITY NOTICE: This link will expire in 24 hours for your account protection.
` : ''}

If you have any questions or require assistance, please do not hesitate to contact our support team.

Thank you for choosing PTU E-Learning Platform.

Sincerely,
PTU E-Learning Team

---
PTU E-Learning Platform
This is an automated message. Please do not reply to this email.`
}); 