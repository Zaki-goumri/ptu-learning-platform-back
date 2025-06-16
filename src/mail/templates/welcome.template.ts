import { User } from 'src/user/entities/user.entity';
import { emailStyles } from './styles/email.styles';

interface WelcomeEmailProps {
  user: Omit<User, 'department' | 'year' | 'role' | 'yearGroup'>& {tempPass:string};
}

export const getWelcomeEmailTemplate = ({ user }: WelcomeEmailProps) => ({
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
                Dear ${user.firstName} ${user.lastName},
            </div>
            
            <div class="message">
                Welcome to PTU E-Learning Platform. We are pleased to confirm that your account has been successfully created and is now active.
            </div>
            
            <div class="message">
                Your learning journey begins here. Our platform provides comprehensive educational resources and tools designed to enhance your academic experience.
            </div>
            
            <div class="section">
                <div class="section-title">Your Account Credentials</div>
                <div class="section-text">
                    Please use the following credentials to log in to your account:
                </div>
                <div class="credentials">
                    <p><strong>Email:</strong> ${user.email}</p>
                    <p><strong>Temporary Password:</strong> ${user.password}</p>
                </div>
            </div>
            
            <div class="message">
                <strong>Important:</strong> For security reasons, you will be prompted to change your password on your first login.
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
  text: `Dear ${user.firstName} ${user.lastName},

Welcome to PTU E-Learning Platform. We are pleased to confirm that your account has been successfully created and is now active.

Your learning journey begins here. Our platform provides comprehensive educational resources and tools designed to enhance your academic experience.

YOUR ACCOUNT CREDENTIALS
Please use the following credentials to log in to your account:
Email: ${user.email}
Temporary Password: ${user.tempPass}

IMPORTANT: For security reasons, you will be prompted to change your password on your first login.

If you have any questions or require assistance, please do not hesitate to contact our support team.

Thank you for choosing PTU E-Learning Platform.

Sincerely,
PTU E-Learning Team

---
PTU E-Learning Platform
This is an automated message. Please do not reply to this email.`
});

