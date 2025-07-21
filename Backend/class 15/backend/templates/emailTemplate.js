export const SignupEmailTemplate = (user, otp) => {
    return `<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Verify Your Account</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      background-color: #f4f6f8;
      margin: 0;
      padding: 0;
    }
    .email-container {
      max-width: 600px;
      margin: 40px auto;
      background-color: #ffffff;
      border-radius: 8px;
      box-shadow: 0 2px 8px rgba(0,0,0,0.1);
      padding: 30px;
    }
    .header {
      text-align: center;
      padding-bottom: 20px;
      border-bottom: 1px solid #e0e0e0;
    }
    .header h2 {
      color: #2b6cb0;
    }
    .content {
      padding: 20px 0;
    }
    .content p {
      font-size: 16px;
      line-height: 1.5;
      color: #333333;
    }
    .otp-box {
      font-size: 24px;
      font-weight: bold;
      color: #2b6cb0;
      background-color: #edf2f7;
      padding: 15px;
      text-align: center;
      border-radius: 6px;
      margin: 20px 0;
      letter-spacing: 2px;
    }
    .footer {
      font-size: 13px;
      color: #888888;
      text-align: center;
      border-top: 1px solid #e0e0e0;
      padding-top: 20px;
      margin-top: 20px;
    }
  </style>
</head>
<body>
  <div class="email-container">
    <div class="header">
      <h2>Verify Your Account</h2>
    </div>
    <div class="content">
      <p>Hi <strong>${user.fullName}</strong>,</p>
      <p>Thanks for signing up! Please verify your email address to complete your registration.</p>
      <p><strong>Email:</strong> ${user.email}</p>

      <p>Your One-Time Password (OTP) is:</p>
      <div class="otp-box">${otp}</div>

      <p>This OTP will expire in <strong>10 minutes</strong>.</p>
      <p>If you did not request this, you can safely ignore this message.</p>
    </div>
    <div class="footer">
      &copy; ${new Date().getFullYear()} Your Company Name. All rights reserved.
    </div>
  </div>
</body>
</html>`
}