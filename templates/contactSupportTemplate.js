// templates/contactSupportTemplate.js
// Generates an attractive HTML email for PrivatecharterX contact/support

module.exports = function contactSupportTemplate({ name, email, message, logoUrl }) {
  return `<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>PrivatecharterX – Contact/Support</title>
      <style>
        /* Use a custom Google Font */
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=swap');
        body {
          margin: 0;
          padding: 0;
          background-color: #f4f7fa;
          font-family: 'Inter', Arial, sans-serif;
          color: #1a1a1a;
        }
        .container {
          max-width: 600px;
          margin: 40px auto;
          background-color: #ffffff;
          border-radius: 8px;
          overflow: hidden;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
        }
        .header {
          background: linear-gradient(90deg, #003366, #0055a5);
          padding: 24px;
          color: #ffffff;
          text-align: center;
        }
        .header h1 {
          margin: 0;
          font-size: 24px;
          font-weight: 600;
        }
        .content {
          padding: 32px 24px;
        }
        .content h2 {
          margin-top: 0;
          color: #0055a5;
          font-size: 20px;
        }
        .details-table {
          width: 100%;
          border-collapse: collapse;
          margin-bottom: 24px;
        }
        .details-table td {
          padding: 8px 0;
        }
        .label {
          font-weight: 600;
          width: 120px;
          color: #003366;
        }
        .message {
          background-color: #f1f5f9;
          padding: 16px;
          border-radius: 4px;
          white-space: pre-wrap;
        }
        .footer {
          text-align: center;
          font-size: 12px;
          color: #888888;
          padding: 16px;
        }
        a.button {
          display: inline-block;
          margin-top: 24px;
          padding: 12px 24px;
          background-color: #0055a5;
          color: #ffffff !important;
          border-radius: 4px;
          text-decoration: none;
          font-weight: 600;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>PrivatecharterX</h1>
        </div>
        <div class="content">
          <h2>New Contact / Support Request</h2>
          <table class="details-table">
            <tr>
              <td class="label">Name:</td>
              <td>${name}</td>
            </tr>
            <tr>
              <td class="label">Email:</td>
              <td>${email}</td>
            </tr>
          </table>
          <div class="message">
            ${message.replace(/\n/g, '<br>')}
          </div>
          <a class="button" href="mailto:${email}?subject=Re:%20PrivatecharterX%20Support">Reply to ${name}</a>
        </div>
        <div class="footer">
          © ${new Date().getFullYear()} PrivatecharterX. All rights reserved.
        </div>
      </div>
    </body>
  </html>`;
}
