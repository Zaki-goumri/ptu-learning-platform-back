import { User } from 'src/user/entities/user.entity';
import { emailStyles } from './styles/email.styles';

interface PasswordResetEmailProps {
  user: User;
  resetLink: string;
  expiryHours?: number;
}

export const getPasswordResetEmailTemplate = ({ 
  user, 
  resetLink, 
  expiryHours = 24 
}: PasswordResetEmailProps) => ({
  subject: 'Reset Your PTU Account Password',
  html: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Reset Your Password - PTU E-Learning Platform</title>
    <style>
        ${emailStyles}
    </style>
</head>
<body>
    <div class="email-container">
        <div class="header">
            <div class="logo">PTU</div>
            <div class="header-subtitle">Password Reset Request</div>
        </div>
        
        <div class="content">
            <div class="greeting">
                Dear ${user.firstName},
            </div>
            
            <div class="message">
                We received a request to reset the password for your PTU E-Learning Platform account.
            </div>
            
            <div class="section">
                <div class="section-title">Reset Your Password</div>
                <div class="section-text">
                    To proceed with the password reset, please click the button below. This will take you to a secure page where you can create a new password.
                </div>
                <a href="${resetLink}" class="cta-button">Reset Password</a>
            </div>
            
            <div class="alert">
                <div class="alert-text">
                    This password reset link will expire in ${expiryHours} hours for your account protection.
                </div>
            </div>
            
            <div class="message">
                If you did not request this password reset, please ignore this email or contact our support team if you have concerns about your account security.
            </div>
            
            <div class="message">
                For security reasons, we recommend:
                <ul style="margin-top: 10px; margin-left: 20px;">
                    <li>Using a strong, unique password</li>
                    <li>Not sharing your password with anyone</li>
                    <li>Enabling two-factor authentication if available</li>
                </ul>
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

We received a request to reset the password for your PTU E-Learning Platform account.

To proceed with the password reset, please visit the following link:
${resetLink}

This password reset link will expire in ${expiryHours} hours for your account protection.

If you did not request this password reset, please ignore this email or contact our support team if you have concerns about your account security.

For security reasons, we recommend:
- Using a strong, unique password
- Not sharing your password with anyone
- Enabling two-factor authentication if available

Sincerely,
PTU E-Learning Team

---
PTU E-Learning Platform
This is an automated message. Please do not reply to this email.`
}); 