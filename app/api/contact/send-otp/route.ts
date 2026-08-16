// app/api/contact/send-otp/route.ts
import { NextResponse } from "next/server";
import crypto from "crypto";
import nodemailer from "nodemailer";
import { signOtpToken } from "@/lib/otp";
import { checkRateLimit, clientIp, escapeHtml } from "@/lib/rateLimit";
import { field, emailField, readJsonBody } from "@/lib/validate";

// This endpoint sends mail to an address supplied by an unauthenticated caller,
// so without limits it is a mail-bomb amplifier pointed at our own SMTP
// reputation. Two independent budgets: one stops a single host hammering it,
// the other stops a distributed set of hosts targeting one victim address.
const IP_LIMIT = 5;
const EMAIL_LIMIT = 3;
const WINDOW_MS = 15 * 60 * 1000; // 15 minutes

async function sendOtpEmail(to: string, name: string, otp: string) {
  const host = process.env.SMTP_HOST;
  if (!host) throw new Error("SMTP not configured");

  const transporter = nodemailer.createTransport({
    host,
    port: Number(process.env.SMTP_PORT || 587),
    secure: process.env.SMTP_SECURE === "true",
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  const html = `
    <div style="font-family:sans-serif;max-width:480px;margin:0 auto">
      <p>Hi ${escapeHtml(name)},</p>
      <p>Here is your verification code to download Soumen Roy's CV:</p>
      <div style="font-size:36px;font-weight:bold;letter-spacing:8px;text-align:center;
                  padding:20px;margin:20px 0;background:#f4f4f4;border-radius:8px">
        ${otp}
      </div>
      <p style="color:#666;font-size:13px">This code expires in <strong>10 minutes</strong>.</p>
      <p style="color:#666;font-size:13px">If you did not request this, you can safely ignore this email.</p>
      <hr style="border:none;border-top:1px solid #eee;margin:24px 0"/>
      <p style="color:#999;font-size:12px">Soumen Roy &middot; soumenroy.com</p>
    </div>
  `;

  await transporter.sendMail({
    from: process.env.SMTP_FROM || `Soumen Roy <${process.env.SMTP_USER}>`,
    to,
    // The code stays in the body only. In the subject it was readable from a
    // notification list, a locked phone screen, and any mail-server log on the way.
    subject: "Your verification code for soumenroy.com",
    html,
  });
}

export async function POST(req: Request) {
  try {
    const body = await readJsonBody(req);
    if (!body.ok) {
      return NextResponse.json({ ok: false, error: body.error }, { status: 400 });
    }

    const nameField = field(body.value.name, "name", { required: true });
    if (!nameField.ok) {
      return NextResponse.json({ ok: false, error: nameField.error }, { status: 400 });
    }

    const emailResult = emailField(body.value.email, { required: true });
    if (!emailResult.ok) {
      return NextResponse.json({ ok: false, error: emailResult.error }, { status: 400 });
    }

    const name = nameField.value;
    const normalisedEmail = emailResult.value;

    const byIp = checkRateLimit(`send-otp:ip:${clientIp(req)}`, IP_LIMIT, WINDOW_MS);
    const byEmail = checkRateLimit(`send-otp:email:${normalisedEmail}`, EMAIL_LIMIT, WINDOW_MS);
    const limited = !byIp.ok ? byIp : !byEmail.ok ? byEmail : null;

    if (limited) {
      const minutes = Math.ceil(limited.retryAfter / 60);
      return NextResponse.json(
        { ok: false, error: `Too many verification codes requested. Try again in ${minutes} minute${minutes === 1 ? "" : "s"}.` },
        { status: 429, headers: { "Retry-After": String(limited.retryAfter) } }
      );
    }

    // Generate 6-digit OTP
    const otp = String(crypto.randomInt(100000, 999999));

    // Sign into stateless token
    const token = signOtpToken(normalisedEmail, otp);

    // Send OTP email
    await sendOtpEmail(normalisedEmail, name, otp);

    return NextResponse.json({ ok: true, token });
  } catch (err) {
    console.error("send-otp error:", err);
    // Don't echo internal errors (SMTP hostnames, auth failures) to the client.
    return NextResponse.json(
      { ok: false, error: "Could not send the verification code. Please try again." },
      { status: 500 }
    );
  }
}
