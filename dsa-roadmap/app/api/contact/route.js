import nodemailer from 'nodemailer';

export async function POST(request) {
  try {
    const { fname, lname, email, topic, message } = await request.json();

    // Basic validation
    if (!fname || !email || !message) {
      return Response.json(
        { error: 'Please fill in your name, email, and message.' },
        { status: 400 }
      );
    }
    if (!email.includes('@')) {
      return Response.json(
        { error: 'Please enter a valid email address.' },
        { status: 400 }
      );
    }

    // Create Gmail transporter using App Password
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    const fullName = `${fname} ${lname}`.trim();

    await transporter.sendMail({
      from: `"DSA Mastery Website" <${process.env.GMAIL_USER}>`,
      to: 'your-new-email@gmail.com',
      replyTo: email,
      subject: `[DSA Mastery] ${topic} — from ${fullName}`,
      html: `
        <div style="font-family:'Segoe UI',Arial,sans-serif;max-width:600px;margin:0 auto;background:#0d1117;color:#e8edf3;border-radius:12px;overflow:hidden;">
          <div style="background:#f0a500;padding:24px 32px;">
            <h1 style="margin:0;font-size:22px;font-weight:800;color:#000;letter-spacing:-0.02em;">DSA Mastery — New Message</h1>
          </div>
          <div style="padding:32px;">
            <table style="width:100%;border-collapse:collapse;margin-bottom:24px;">
              <tr>
                <td style="padding:10px 0;color:#8892a4;font-size:13px;width:120px;">From</td>
                <td style="padding:10px 0;color:#e8edf3;font-weight:600;">${fullName}</td>
              </tr>
              <tr>
                <td style="padding:10px 0;color:#8892a4;font-size:13px;">Email</td>
                <td style="padding:10px 0;"><a href="mailto:${email}" style="color:#f0a500;text-decoration:none;">${email}</a></td>
              </tr>
              <tr>
                <td style="padding:10px 0;color:#8892a4;font-size:13px;">Topic</td>
                <td style="padding:10px 0;"><span style="background:rgba(240,165,0,0.15);color:#f0a500;padding:3px 12px;border-radius:20px;font-size:13px;">${topic}</span></td>
              </tr>
            </table>
            <div style="background:#141b24;border-radius:10px;padding:20px 24px;border-left:3px solid #f0a500;">
              <p style="margin:0 0 8px;color:#8892a4;font-size:12px;text-transform:uppercase;letter-spacing:0.1em;">Message</p>
              <p style="margin:0;color:#e8edf3;line-height:1.8;white-space:pre-wrap;">${message}</p>
            </div>
            <p style="margin:24px 0 0;color:#4a5568;font-size:12px;border-top:1px solid rgba(255,255,255,0.07);padding-top:16px;">
              Sent via DSA Mastery Website contact form. Reply directly to this email to respond to ${fname}.
            </p>
          </div>
        </div>
      `,
      text: `
New message from DSA Mastery Website
─────────────────────────────────────
From:    ${fullName}
Email:   ${email}
Topic:   ${topic}
─────────────────────────────────────

${message}

─────────────────────────────────────
Reply to this email to respond to ${fname}.
      `.trim(),
    });

    return Response.json({ success: true });
  } catch (error) {
    console.error('Email send error:', error);
    return Response.json(
      { error: 'Failed to send message. Please try again later.' },
      { status: 500 }
    );
  }
}
