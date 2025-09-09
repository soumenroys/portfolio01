// /app/api/contact/route.ts
import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import nodemailer from "nodemailer";

type Body = {
  name: string;
  email?: string;
  contact?: string;
  subject?: string;
  message?: string;
  downloadUrl?: string | null;
};

const CONTACTS_FILE = path.join(process.cwd(), "data", "contacts.json");

// Ensure data folder and file exist
function ensureDataFolder() {
  const dir = path.dirname(CONTACTS_FILE);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  if (!fs.existsSync(CONTACTS_FILE)) fs.writeFileSync(CONTACTS_FILE, "[]");
}

// Append one record to contacts.json
function appendContact(record: any) {
  ensureDataFolder();
  const raw = fs.readFileSync(CONTACTS_FILE, "utf8");
  let arr = [];
  try {
    arr = JSON.parse(raw || "[]");
  } catch {
    arr = [];
  }
  arr.push(record);
  fs.writeFileSync(CONTACTS_FILE, JSON.stringify(arr, null, 2));
}

// Send email using nodemailer (best-effort)
async function sendEmailNotification(record: any) {
  const host = process.env.SMTP_HOST;
  if (!host) return; // SMTP not configured — skip

  // Prefer explicit NOTIFY_EMAIL, otherwise use SMTP_USER or EMAIL
  const to =
    process.env.NOTIFY_EMAIL || process.env.SMTP_USER || process.env.EMAIL || "";

  if (!to) {
    console.warn(
      "⚠️ Skipping email notification: no recipient (NOTIFY_EMAIL/SMTP_USER/EMAIL) configured."
    );
    return;
  }

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT || 587),
    secure: process.env.SMTP_SECURE === "true" || false,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  const subject = record.downloadUrl
    ? `CV Download — ${record.name}`
    : `Website contact — ${record.name}`;

  const html = `
    <p><strong>Name:</strong> ${record.name}</p>
    <p><strong>Email:</strong> ${record.email || "—"}</p>
    <p><strong>Contact:</strong> ${record.contact || "—"}</p>
    <p><strong>Subject:</strong> ${record.subject || "—"}</p>
    <p><strong>Message:</strong><br/>${(record.message || "—").replace(
      /\n/g,
      "<br/>"
    )}</p>
    <p><strong>Download URL:</strong> ${record.downloadUrl || "—"}</p>
    <p><strong>Time:</strong> ${new Date(record.timestamp).toLocaleString()}</p>
  `;

  await transporter.sendMail({
    from: process.env.SMTP_FROM || `Website <${process.env.SMTP_USER}>`,
    to,
    subject,
    html,
  });
}

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as Body;

    if (!body.name || !body.email) {
      return NextResponse.json(
        { ok: false, error: "name and email are required" },
        { status: 400 }
      );
    }

    const record = {
      name: body.name,
      email: body.email,
      contact: body.contact || null,
      subject: body.subject || null,
      message: body.message || null,
      downloadUrl: body.downloadUrl || null,
      userAgent: req.headers.get("user-agent") || null,
      ip:
        req.headers.get("x-forwarded-for") ||
        req.headers.get("x-real-ip") ||
        null,
      timestamp: Date.now(),
    };

    // Save locally
    appendContact(record);

    // Try to send notification email (don’t block if fails)
    try {
      await sendEmailNotification(record);
    } catch (e) {
      console.error("❌ Failed to send mail:", e);
    }

    return NextResponse.json({ ok: true });
  } catch (err: any) {
    console.error("❌ contact route error:", err);
    return NextResponse.json(
      { ok: false, error: err?.message || "unknown" },
      { status: 500 }
    );
  }
}
