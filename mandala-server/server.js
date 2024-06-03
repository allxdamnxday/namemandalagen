import express from 'express';
import bodyParser from 'body-parser';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();

const app = express();
const port = 3000;

// Log environment variables to verify they are loaded correctly
console.log('EMAIL_USER:', process.env.EMAIL_USER);
console.log('EMAIL_PASS:', process.env.EMAIL_PASS);

// Enable CORS for all routes
app.use(cors());

app.use(bodyParser.json());

// Set up Nodemailer transporter
const transporter = nodemailer.createTransport({
  service: 'gmail', // You can use other services like SendGrid, Mailgun, etc.
  auth: {
    user: process.env.EMAIL_USER, // Your email address
    pass: process.env.EMAIL_PASS  // Your email password or app-specific password
  }
});

app.post('/api/mandala', (req, res) => {
  const { text, textColor, backgroundColor, fontSize, fontFamily } = req.body;

  console.log('Received data:', req.body);

  // Email content
  const mailOptions = {
    from: process.env.EMAIL_USER, // Sender address
    to: 'freeman@namemandala.com', // Recipient address
    subject: 'New Mandala Design Request',
    html: `
      <h2>New Mandala Design Request</h2>
      <p><strong>Text:</strong> ${text}</p>
      <p><strong>Text Color:</strong> ${textColor}</p>
      <p><strong>Background Color:</strong> ${backgroundColor}</p>
      <p><strong>Font Size:</strong> ${fontSize}</p>
      <p><strong>Font Family:</strong> ${fontFamily}</p>
    `
  };

  // Send email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending email:', error);
      res.status(500).send('Error sending email');
    } else {
      console.log('Email sent:', info.response);
      res.send('Data received and email sent successfully!');
    }
  });
});

app.use((err, req, res, next) => {
  console.error('Server error:', err);
  res.status(500).send('Internal Server Error');
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
