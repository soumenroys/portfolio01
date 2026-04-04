// app/api/contact/send-otp/route.ts
import { NextResponse } from "next/server";
import crypto from "crypto";
import nodemailer from "nodemailer";
import { signOtpToken } from "@/lib/otp";

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
      <p>Hi ${name},</p>
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
    subject: `Your verification code: ${otp}`,
    html,
  });
}

export async function POST(req: Request) {
  try {
    const { name, email } = (await req.json()) as { name?: string; email?: string };

    if (!name?.trim() || !email?.trim()) {
      return NextResponse.json(
        { ok: false, error: "name and email are required" },
        { status: 400 }
      );
    }

    // Generate 6-digit OTP
    const otp = String(crypto.randomInt(100000, 999999));

    // Sign into stateless token
    const token = signOtpToken(email.trim().toLowerCase(), otp);

    // Send OTP email
    await sendOtpEmail(email.trim(), name.trim(), otp);

    return NextResponse.json({ ok: true, token });
  } catch (err: any) {
    console.error("send-otp error:", err);
    return NextResponse.json(
      { ok: false, error: err?.message || "Failed to send code" },
      { status: 500 }
    );
  }
}
