export const emailStyles = `
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

.section {
    background-color: #F7FAFC;
    border-left: 4px solid #8B5CF6;
    padding: 20px;
    margin: 30px 0;
    border-radius: 4px;
}

.section-title {
    font-size: 16px;
    font-weight: 600;
    color: #2D3748;
    margin-bottom: 10px;
}

.section-text {
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

.alert {
    background-color: #FFF5F5;
    border: 1px solid #FED7D7;
    border-radius: 4px;
    padding: 15px;
    margin: 25px 0;
}

.alert-text {
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
`; 