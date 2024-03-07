import sgMail from '@sendgrid/mail';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { firstName, lastName, email, phone, message } = req.body;

    // Set your SendGrid API key
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);

    // Setup email data
    const msg = {
      to: 'martinpoehl@me.com', // recipient email
      from: 'info@martinpoehl.me',
      subject: 'Formular: Landingpage',
      text: `
        Vorname: ${firstName}
        Nachname: ${lastName}
        Email: ${email}
        Telefonnummer: ${phone}
        Nachricht: 
        ${message}
      `
    };

    // Define an asynchronous function to await the email sending operation
    (async () => {
      try {
        await sgMail.send(msg);
        console.log('Email sent successfully');
        res.status(200).json({ message: 'Form submitted successfully' });
      } catch (error) {
        console.error('Email sending error:', error.response.body.errors);
        res.status(500).json({ error: 'Failed to submit form' });
      }
    })();
    } else {
      res.status(405).json({ error: 'Method Not Allowed' });
    }
}

