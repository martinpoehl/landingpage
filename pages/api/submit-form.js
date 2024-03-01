import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { firstName, lastName, email, phone, message } = req.body;

    // Create a transporter object using SMTP transport
    const transporter = nodemailer.createTransport({
      host: 'asmtp.mail.hostpoint.ch',
      port: 25,
      secure: false, // Changed to false
      auth: {
        user: process.env.EMAIL_USERNAME,
        pass: process.env.EMAIL_PASSWORD
      }
    });

    // Setup email data
    const mailOptions = {
      from: 'info@martinpoehl.me',
      to: 'martinpoehl@me.com',
      subject: 'New Form Submission',
      text: `
        First Name: ${firstName}
        Last Name: ${lastName}
        Email: ${email}
        Phone: ${phone}
        Message: ${message}
      `
    };

    // Send email
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error('Email sending error:', error);
        res.status(500).json({ error: 'Failed to submit form' });
      } else {
        console.log('Email sent:', info.response);
        res.status(200).json({ message: 'Form submitted successfully' });
      }
    });
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}
