export const welcomeTemplate = (user) => {
    return `<!DOCTYPE html>
<html>
<head>
  <title>Welcome Email</title>
  <meta charset="UTF-8">
</head>
<body style="margin:0; padding:0; background-color:#f4f4f4; font-family:Arial, sans-serif;">

  <table width="100%" bgcolor="#f4f4f4" cellpadding="0" cellspacing="0" style="padding: 20px 0;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" bgcolor="#ffffff" style="border-radius: 8px; overflow: hidden;">
          
          <!-- Header -->
          <tr>
            <td bgcolor="#4CAF50" style="padding: 30px 20px; color: #ffffff; text-align: center; font-size: 28px;">
              Welcome to Saylani PAPA!
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="padding: 30px 20px; color: #333333; font-size: 16px; line-height: 1.6;">
              <p>Hi <strong>${user.fullName}</strong>,</p>
              <p>We're excited to have you on board! Thank you for joining <strong>[Your Company Name]</strong>.</p>
              <p>To get started, visit your dashboard and explore what we have to offer.</p>

              <p style="margin-top: 30px; text-align: center;">
                <a href="[Dashboard URL]" style="background-color: #4CAF50; color: white; padding: 12px 20px; text-decoration: none; border-radius: 5px;">Go to Dashboard</a>
              </p>

              <p>If you have any questions, feel free to reply to this email. We're here to help!</p>
              <p>Cheers,<br>The Saylani Papa Team</p>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td bgcolor="#eeeeee" style="padding: 20px; text-align: center; font-size: 12px; color: #888888;">
              © 2025 Saylani Papa, All rights reserved.<br>
              [Your Address or Contact Info]
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>

</body>
</html>
`
}