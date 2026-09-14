import nodemailer from 'nodemailer';

function buildAdminNotificationHtml({ name, email, subject, message, channel, phone, timestamp }) {
  let channelBadgeColor = '#C27803';
  let channelLabel = 'Direct Contact Form';
  if (channel === 'whatsapp') {
    channelBadgeColor = '#059669';
    channelLabel = 'WhatsApp Inquiry';
  } else if (channel === 'google-one-tap') {
    channelBadgeColor = '#4285F4';
    channelLabel = 'Google One Tap (1-Click Verified)';
  }

  const phoneRow = phone
    ? `<tr><td style="padding: 6px 12px; font-size: 12px; color: #656A76; font-weight: 600;">Phone:</td><td style="padding: 6px 12px; font-size: 13px; color: #121316;"><a href="tel:${phone}" style="color: #121316; text-decoration: none;">${phone}</a></td></tr>`
    : '';
  const waButton =
    channel === 'whatsapp' || phone
      ? `<td style="padding-left: 12px;"><a href="https://wa.me/${(phone || '').replace(/[^0-9]/g, '') || '917990361109'}" target="_blank" style="display: inline-block; padding: 12px 20px; font-size: 12px; font-weight: 700; color: #FFFFFF; background-color: #059669; text-decoration: none; border-radius: 8px;">Open WhatsApp &rarr;</a></td>`
      : '';

  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Lead Notification</title>
</head>
<body style="margin: 0; padding: 24px; background-color: #F7F5F0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #121316;">
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0">
    <tr>
      <td align="center">
        <table role="presentation" width="600" cellspacing="0" cellpadding="0" border="0" style="max-width: 600px; width: 100%; background-color: #FFFFFF; border-radius: 16px; border: 1px solid #E8E5DF; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.05);">
          
          <tr>
            <td style="background-color: #121316; padding: 24px 32px;">
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0">
                <tr>
                  <td>
                    <span style="display: inline-block; padding: 4px 10px; background-color: ${channelBadgeColor}; color: #FFFFFF; font-size: 11px; font-weight: 700; border-radius: 6px; text-transform: uppercase; letter-spacing: 0.5px;">
                      ${channelLabel}
                    </span>
                    <h1 style="margin: 12px 0 0 0; color: #FBF9F5; font-size: 20px; font-weight: 800; letter-spacing: -0.3px;">
                      New Inbound Lead Received
                    </h1>
                  </td>
                  <td align="right" style="vertical-align: top;">
                    <span style="display: inline-block; width: 36px; height: 36px; line-height: 36px; text-align: center; background-color: #C27803; color: #FFFFFF; font-weight: 800; font-size: 13px; border-radius: 10px; font-family: monospace;">
                      SJ
                    </span>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <tr>
            <td style="padding: 28px 32px 12px 32px;">
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="background-color: #FBF9F5; border: 1px solid #E8E5DF; border-radius: 12px; padding: 16px;">
                <tr>
                  <td style="padding: 6px 12px; font-size: 12px; color: #656A76; font-weight: 600; width: 100px;">Name:</td>
                  <td style="padding: 6px 12px; font-size: 13px; color: #121316; font-weight: 700;">${name}</td>
                </tr>
                <tr>
                  <td style="padding: 6px 12px; font-size: 12px; color: #656A76; font-weight: 600;">Email:</td>
                  <td style="padding: 6px 12px; font-size: 13px; color: #121316; font-weight: 600;">
                    <a href="mailto:${email}" style="color: #C27803; text-decoration: none;">${email}</a>
                  </td>
                </tr>
                ${phoneRow}
                <tr>
                  <td style="padding: 6px 12px; font-size: 12px; color: #656A76; font-weight: 600;">Subject:</td>
                  <td style="padding: 6px 12px; font-size: 13px; color: #121316; font-weight: 700;">${subject || 'General Inquiry'}</td>
                </tr>
                <tr>
                  <td style="padding: 6px 12px; font-size: 12px; color: #656A76; font-weight: 600;">Timestamp:</td>
                  <td style="padding: 6px 12px; font-size: 12px; color: #7A7E89; font-family: monospace;">${timestamp}</td>
                </tr>
              </table>
            </td>
          </tr>

          <tr>
            <td style="padding: 16px 32px 28px 32px;">
              <h3 style="margin: 0 0 10px 0; font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px; color: #7A7E89; font-weight: 700;">
                Message Content:
              </h3>
              <div style="background-color: #FFFFFF; border-left: 4px solid #C27803; border-top: 1px solid #E8E5DF; border-right: 1px solid #E8E5DF; border-bottom: 1px solid #E8E5DF; border-radius: 4px 8px 8px 4px; padding: 18px; font-size: 14px; line-height: 1.6; color: #333740; white-space: pre-wrap;">${message}</div>
              
              <table role="presentation" cellspacing="0" cellpadding="0" border="0" style="margin-top: 24px;">
                <tr>
                  <td style="border-radius: 8px; background-color: #121316;">
                    <a href="mailto:${email}?subject=Re: ${encodeURIComponent(subject || 'Your Inquiry')}" style="display: inline-block; padding: 12px 20px; font-size: 12px; font-weight: 700; color: #FFFFFF; text-decoration: none; border-radius: 8px;">
                      Reply via Email &rarr;
                    </a>
                  </td>
                  ${waButton}
                </tr>
              </table>
            </td>
          </tr>

          <tr>
            <td style="background-color: #FBF9F5; padding: 16px 32px; border-top: 1px solid #E8E5DF; text-align: center; font-size: 11px; color: #7A7E89;">
              Automated Dispatch Engine • Soni Jaykumar Portfolio Telemetry • jay0812soni@gmail.com
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
`;
}

function buildVisitorAutoReplyHtml({ name, subject, message, channel, timestamp }) {
  const isGoogle = channel === 'google-one-tap';
  const introGreeting = isGoogle
    ? `Thank you for connecting with Google, ${name}!`
    : `Thank you for reaching out, ${name}!`;
  const introParagraph = isGoogle
    ? `I noticed you connected via Google on my portfolio website. Thank you for your interest! I have received your connection and will review and follow up shortly.`
    : `I have received your message regarding <strong style="color: #121316;">"${subject || 'your project inquiry'}"</strong>. Thank you for your interest in collaborating.`;

  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Thank You for Reaching Out | Soni Jaykumar</title>
</head>
<body style="margin: 0; padding: 24px; background-color: #F7F5F0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #121316; -webkit-font-smoothing: antialiased;">
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0">
    <tr>
      <td align="center">
        <table role="presentation" width="600" cellspacing="0" cellpadding="0" border="0" style="max-width: 600px; width: 100%; background-color: #FFFFFF; border-radius: 20px; border: 1px solid #E8E5DF; overflow: hidden; box-shadow: 0 6px 20px rgba(0,0,0,0.04);">
          
          <!-- Brand Header -->
          <tr>
            <td style="background-color: #121316; padding: 36px 36px 32px 36px;">
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0">
                <tr>
                  <td>
                    <table role="presentation" cellspacing="0" cellpadding="0" border="0">
                      <tr>
                        <td style="width: 44px; height: 44px; background-color: #C27803; border-radius: 12px; text-align: center; vertical-align: middle; color: #FFFFFF; font-weight: 800; font-size: 16px; font-family: monospace;">
                          SJ
                        </td>
                        <td style="padding-left: 14px;">
                          <h2 style="margin: 0; color: #FFFFFF; font-size: 18px; font-weight: 800; letter-spacing: -0.2px;">
                            Soni Jaykumar Hasmukh
                          </h2>
                          <p style="margin: 3px 0 0 0; color: #D1D5DB; font-size: 12px; font-weight: 500;">
                            Lead Mobile &amp; Full-Stack Architect • NB Developers
                          </p>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Greeting & Confirmation -->
          <tr>
            <td style="padding: 36px 36px 20px 36px;">
              <h1 style="margin: 0 0 16px 0; font-size: 22px; font-weight: 800; color: #121316; letter-spacing: -0.4px;">
                ${introGreeting}
              </h1>
              
              <p style="margin: 0 0 16px 0; font-size: 14px; line-height: 1.65; color: #4A4E57;">
                ${introParagraph}
              </p>

              <div style="background-color: #FBF9F5; border-left: 4px solid #C27803; border-radius: 0 12px 12px 0; padding: 16px 20px; margin: 24px 0;">
                <p style="margin: 0 0 6px 0; font-size: 13px; font-weight: 700; color: #121316;">
                  ⚡ Estimated Response Time:
                </p>
                <p style="margin: 0; font-size: 13px; line-height: 1.5; color: #656A76;">
                  I review all inbound technical inquiries personally and will reply as soon as possible (usually within a few hours). If your requirement is urgent, feel free to reach me directly on WhatsApp at <a href="https://wa.me/917990361109" style="color: #059669; font-weight: 600; text-decoration: none;">+91 79903 61109</a>.
                </p>
              </div>

              <!-- Message Copy Summary -->
              <div style="background-color: #FFFFFF; border: 1px solid #E8E5DF; border-radius: 12px; padding: 18px; margin-bottom: 28px;">
                <p style="margin: 0 0 8px 0; font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.5px; color: #7A7E89;">
                  Summary of your inquiry:
                </p>
                <p style="margin: 0; font-size: 13px; line-height: 1.6; color: #4A4E57; font-style: italic; white-space: pre-wrap;">"${message}"</p>
                <p style="margin: 12px 0 0 0; font-size: 11px; color: #9CA3AF; font-family: monospace;">
                  Received on: ${timestamp}
                </p>
              </div>

              <!-- Featured Production Work Showcase -->
              <h3 style="margin: 28px 0 14px 0; font-size: 13px; font-weight: 800; text-transform: uppercase; letter-spacing: 0.8px; color: #C27803;">
                While You Wait — Explore My Featured Production Software:
              </h3>

              <!-- Project 1: PropKart -->
              <div style="background-color: #FBF9F5; border: 1px solid #E8E5DF; border-radius: 12px; padding: 16px; margin-bottom: 12px;">
                <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0">
                  <tr>
                    <td>
                      <span style="display: inline-block; padding: 2px 8px; background-color: #121316; color: #FBF9F5; font-size: 10px; font-weight: 700; border-radius: 4px; font-family: monospace;">
                        PRODUCTION LIVE • 2MS READS
                      </span>
                      <h4 style="margin: 6px 0 4px 0; font-size: 14px; font-weight: 800; color: #121316;">
                        PropKart Real-Estate CRM &amp; OS
                      </h4>
                      <p style="margin: 0; font-size: 12px; color: #656A76; line-height: 1.4;">
                        Apple-inspired Offline-First real estate operating system with embedded Isar NoSQL &amp; sub-second Meta Lead Ad ingestion.
                      </p>
                    </td>
                    <td align="right" style="vertical-align: middle; padding-left: 12px;">
                      <a href="https://propkart.nbpropertytech.com" target="_blank" style="display: inline-block; padding: 8px 14px; font-size: 11px; font-weight: 700; color: #FFFFFF; background-color: #C27803; text-decoration: none; border-radius: 8px;">
                        View &rarr;
                      </a>
                    </td>
                  </tr>
                </table>
              </div>

              <!-- Project 2: NB Legacy Tower -->
              <div style="background-color: #FBF9F5; border: 1px solid #E8E5DF; border-radius: 12px; padding: 16px; margin-bottom: 12px;">
                <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0">
                  <tr>
                    <td>
                      <span style="display: inline-block; padding: 2px 8px; background-color: #D97706; color: #FFFFFF; font-size: 10px; font-weight: 700; border-radius: 4px; font-family: monospace;">
                        CAMPAIGN PORTAL
                      </span>
                      <h4 style="margin: 6px 0 4px 0; font-size: 14px; font-weight: 800; color: #121316;">
                        NB Legacy Tower Discovery Portal
                      </h4>
                      <p style="margin: 0; font-size: 12px; color: #656A76; line-height: 1.4;">
                        High-ticket investor platform with interactive unit configuration and sub-2s Google Sheets webhook routing.
                      </p>
                    </td>
                    <td align="right" style="vertical-align: middle; padding-left: 12px;">
                      <a href="https://nblegacy.nbdeveloper.co.in/" target="_blank" style="display: inline-block; padding: 8px 14px; font-size: 11px; font-weight: 700; color: #FFFFFF; background-color: #121316; text-decoration: none; border-radius: 8px;">
                        View &rarr;
                      </a>
                    </td>
                  </tr>
                </table>
              </div>

              <!-- Project 3: TechDrive & Chandrakala Jewellers -->
              <div style="background-color: #FBF9F5; border: 1px solid #E8E5DF; border-radius: 12px; padding: 16px; margin-bottom: 24px;">
                <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0">
                  <tr>
                    <td>
                      <span style="display: inline-block; padding: 2px 8px; background-color: #2563EB; color: #FFFFFF; font-size: 10px; font-weight: 700; border-radius: 4px; font-family: monospace;">
                        COMMERCIAL SUITE
                      </span>
                      <h4 style="margin: 6px 0 4px 0; font-size: 14px; font-weight: 800; color: #121316;">
                        Chandrakala Jewellers &amp; TechDrive
                      </h4>
                      <p style="margin: 0; font-size: 12px; color: #656A76; line-height: 1.4;">
                        Custom retail GST billing engine, 22-slot barcode printing software, and enterprise cloud document vault.
                      </p>
                    </td>
                    <td align="right" style="vertical-align: middle; padding-left: 12px;">
                      <a href="https://chandrakalajewellers.in" target="_blank" style="display: inline-block; padding: 8px 14px; font-size: 11px; font-weight: 700; color: #FFFFFF; background-color: #121316; text-decoration: none; border-radius: 8px;">
                        View &rarr;
                      </a>
                    </td>
                  </tr>
                </table>
              </div>

              <!-- Action Bar -->
              <div style="text-align: center; padding-top: 10px;">
                <a href="https://portfolio-iota-nine-7b2v5ah7u8.vercel.app/" target="_blank" style="display: inline-block; padding: 12px 24px; font-size: 13px; font-weight: 700; color: #FFFFFF; background-color: #121316; text-decoration: none; border-radius: 10px; margin: 4px;">
                  Visit Full Portfolio Website &rarr;
                </a>
                <a href="https://wa.me/917990361109" target="_blank" style="display: inline-block; padding: 12px 24px; font-size: 13px; font-weight: 700; color: #FFFFFF; background-color: #059669; text-decoration: none; border-radius: 10px; margin: 4px;">
                  Chat on WhatsApp &rarr;
                </a>
              </div>

            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background-color: #FBF9F5; padding: 24px 36px; border-top: 1px solid #E8E5DF; text-align: center;">
              <p style="margin: 0 0 6px 0; font-size: 12px; font-weight: 600; color: #121316;">
                Soni Jaykumar Hasmukh
              </p>
              <p style="margin: 0 0 12px 0; font-size: 11px; color: #7A7E89;">
                Lead Mobile &amp; Full-Stack Architect • Ahmedabad, Gujarat, India
              </p>
              <p style="margin: 0; font-size: 11px;">
                <a href="https://portfolio-iota-nine-7b2v5ah7u8.vercel.app/" style="color: #C27803; text-decoration: none; font-weight: 600;">Portfolio</a> • 
                <a href="https://github.com/JAYU0812" style="color: #121316; text-decoration: none; font-weight: 600;">GitHub</a> • 
                <a href="https://linkedin.com/in/sonijay1908" style="color: #0A66C2; text-decoration: none; font-weight: 600;">LinkedIn</a> • 
                <a href="mailto:jay0812soni@gmail.com" style="color: #121316; text-decoration: none; font-weight: 600;">jay0812soni@gmail.com</a>
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
`;
}

export async function sendContactEmails({ name, email, subject, message, channel = 'email', phone = '' }) {
  const adminEmail = process.env.GMAIL_USER || 'jay0812soni@gmail.com';
  const appPassword = (process.env.GMAIL_APP_PASSWORD || '').replace(/\s+/g, '');
  if (!appPassword) {
    throw new Error('GMAIL_APP_PASSWORD environment variable is not configured.');
  }

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: adminEmail,
      pass: appPassword
    }
  });

  const timestamp = new Date().toLocaleString('en-IN', {
    timeZone: 'Asia/Kolkata',
    dateStyle: 'full',
    timeStyle: 'medium'
  });

  const isGoogle = channel === 'google-one-tap';
  const adminSubject = isGoogle
    ? `🔥 New Lead Alert [GOOGLE 1-TAP]: ${name} (${email})`
    : `🔥 New Lead Alert [${(channel || 'EMAIL').toUpperCase()}]: ${name} - ${subject || 'Project Inquiry'}`;

  const visitorSubject = isGoogle
    ? `Welcome & Thank you for connecting with Google, ${name}! | Soni Jaykumar`
    : `Thank you for reaching out, ${name}! | Soni Jaykumar`;

  const adminMailOptions = {
    from: `"Jay Soni Portfolio Alerts" <${adminEmail}>`,
    to: adminEmail,
    replyTo: `"${name}" <${email}>`,
    subject: adminSubject,
    html: buildAdminNotificationHtml({ name, email, subject, message, channel, phone, timestamp })
  };

  const visitorMailOptions = {
    from: `"Soni Jaykumar" <${adminEmail}>`,
    to: email,
    replyTo: adminEmail,
    subject: visitorSubject,
    html: buildVisitorAutoReplyHtml({ name, subject, message, channel, timestamp })
  };

  const [adminResult, visitorResult] = await Promise.allSettled([
    transporter.sendMail(adminMailOptions),
    transporter.sendMail(visitorMailOptions)
  ]);

  if (adminResult.status === 'rejected' && visitorResult.status === 'rejected') {
    throw new Error(adminResult.reason?.message || visitorResult.reason?.message || 'Failed to dispatch emails.');
  }

  return {
    adminDelivered: adminResult.status === 'fulfilled',
    visitorDelivered: visitorResult.status === 'fulfilled',
    timestamp
  };
}

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    res.status(405).json({ success: false, error: 'Method Not Allowed' });
    return;
  }

  try {
    const { name, email, subject, message, channel, phone } = req.body || {};

    if (!name || !email || !message) {
      res.status(400).json({
        success: false,
        error: 'Missing required fields: name, email, and message are required.'
      });
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      res.status(400).json({
        success: false,
        error: 'Invalid email address provided.'
      });
      return;
    }

    const result = await sendContactEmails({ name, email, subject, message, channel, phone });

    res.status(200).json({
      success: true,
      message: 'Inquiry delivered to Jay Soni and confirmation auto-reply sent to your inbox.',
      details: result
    });
  } catch (err) {
    console.error('Contact API Error:', err);
    res.status(500).json({
      success: false,
      error: err.message || 'Internal Server Error while dispatching email.'
    });
  }
}
