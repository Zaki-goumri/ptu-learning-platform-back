import { emailStyles } from './styles/email.styles';

export const getPasswordResetEmailTemplate = (otp: string) => ({
  subject: 'Your PTU Account Verification Code',
  html: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Verification Code - PTU E-Learning Platform</title>
    <style>
        ${emailStyles}
    </style>
</head>
<body>
    <div class="email-container">
        <div class="header">
            <div class="logo">PTU</div>
            <div class="header-subtitle">Verification Code</div>
        </div>
        
        <div class="content">
            <div class="greeting">
                Hello,
            </div>
            
            <div class="message">
                We received a request to verify your PTU E-Learning Platform account.
            </div>
            
            <div class="section">
                <div class="section-title">Your Verification Code</div>
                <div class="section-text">
                    Please use the following code to verify your account:
                </div>
                <div class="otp-code" style="
                    font-size: 32px;
                    font-weight: bold;
                    text-align: center;
                    letter-spacing: 8px;
                    color: #6D28D9;
                    background: #F7FAFC;
                    padding: 20px;
                    border-radius: 8px;
                    margin: 20px 0;
                ">
                    ${otp}
                </div>
            </div>
            
            <div class="alert">
                <div class="alert-text">
                    This verification code will expire in 10 minutes for your account protection.
                </div>
            </div>
            
            <div class="message">
                If you did not request this verification code, please ignore this email or contact our support team if you have concerns about your account security.
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
  text: `Hello,

We received a request to verify your PTU E-Learning Platform account.

Your verification code is: ${otp}

This verification code will expire in 1 minutes for your account protection.

If you did not request this verification code, please ignore this email or contact our support team if you have concerns about your account security.

Sincerely,
PTU E-Learning Team

---
PTU E-Learning Platform
This is an automated message. Please do not reply to this email.`,
});
