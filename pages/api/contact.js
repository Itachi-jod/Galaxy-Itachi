export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, message } = req.body;

  // TODO: Implement email sending (nodemailer, SendGrid, etc.)
  console.log('Contact form submission:', { name, email, message });

  res.status(200).json({ success: true, message: 'Message received!' });
}