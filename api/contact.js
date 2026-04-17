export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();

  const { name, phone, email, message } = req.body;

  if (!name || !email) {
    return res.status(400).json({ error: 'Name and email are required.' });
  }

  const response = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: 'enquiries@awl-construction.com',
      to: 'alex@awl-construction.com',
      subject: `New Enquiry from ${name}`,
      html: `
        <h2>New Website Enquiry</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Project Details:</strong><br>${message || 'Not provided'}</p>
      `,
    }),
  });

  if (!response.ok) {
    return res.status(500).json({ error: 'Failed to send email.' });
  }

  res.status(200).json({ ok: true });
}
