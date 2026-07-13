import nodemailer from "nodemailer";

const CONTACT_TO_EMAIL = process.env.CONTACT_TO_EMAIL ?? "info@tgtnexus.com";
const CONTACT_FROM_EMAIL =
  process.env.CONTACT_FROM_EMAIL ??
  process.env.SMTP_FROM ??
  `"TGT Nexus" <${process.env.SMTP_USER ?? "noreply@tgtnexus.com"}>`;

export type InquiryMailPayload = {
  fullName: string;
  email: string;
  phone: string;
  message: string;
};

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function getSmtpConfig() {
  const host = process.env.SMTP_HOST?.trim();
  const user = process.env.SMTP_USER?.trim();
  const pass = process.env.SMTP_PASS?.trim();
  const port = Number(process.env.SMTP_PORT ?? "587");

  if (!host || !user || !pass) {
    return null;
  }

  const secure =
    process.env.SMTP_SECURE === "true" ||
    process.env.SMTP_SECURE === "1" ||
    port === 465;

  return { host, port, secure, user, pass };
}

export async function sendInquiryEmailWithNodemailer(payload: InquiryMailPayload) {
  const smtp = getSmtpConfig();
  if (!smtp) {
    console.warn(
      "[contact] SMTP not configured — set SMTP_HOST, SMTP_USER, SMTP_PASS in .env.local"
    );
    return { sent: false as const, reason: "missing_smtp" as const };
  }

  const transporter = nodemailer.createTransport({
    host: smtp.host,
    port: smtp.port,
    secure: smtp.secure,
    auth: {
      user: smtp.user,
      pass: smtp.pass,
    },
  });

  const text = [
    `New contact form submission (/contact)`,
    ``,
    `Name: ${payload.fullName}`,
    `Email: ${payload.email}`,
    `Phone: ${payload.phone}`,
    ``,
    `Message:`,
    payload.message,
  ].join("\n");

  const html = `
    <div style="font-family:Arial,sans-serif;line-height:1.5;color:#111">
      <h2 style="margin:0 0 16px">New contact form submission</h2>
      <p><strong>Name:</strong> ${escapeHtml(payload.fullName)}</p>
      <p><strong>Email:</strong> ${escapeHtml(payload.email)}</p>
      <p><strong>Phone:</strong> ${escapeHtml(payload.phone)}</p>
      <p style="margin-top:16px"><strong>Message:</strong></p>
      <p style="white-space:pre-wrap">${escapeHtml(payload.message)}</p>
    </div>
  `;

  try {
    await transporter.sendMail({
      from: CONTACT_FROM_EMAIL,
      to: CONTACT_TO_EMAIL,
      replyTo: payload.email,
      subject: `Contact form — ${payload.fullName}`,
      text,
      html,
    });
    return { sent: true as const };
  } catch (error) {
    console.error("[contact] Nodemailer send failed", error);
    return { sent: false as const, reason: "send_failed" as const };
  }
}

export { CONTACT_TO_EMAIL };
