// /app/api/contact/route.ts
import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import os from "os";
import nodemailer from "nodemailer";
import { verifyOtpToken } from "@/lib/otp";
import { checkRateLimit, clientIp, escapeHtml } from "@/lib/rateLimit";
import { field, emailField, readJsonBody, type FieldName } from "@/lib/validate";

// This route also sends mail on an unauthenticated request, so it needs its own
// budget. Looser than send-otp: a genuine visitor may legitimately submit the
// contact form a few times, and download submissions are already OTP-gated.
const IP_LIMIT = 10;
const WINDOW_MS = 15 * 60 * 1000; // 15 minutes

type Body = {
  name: string;
  // Required: validation rejects the request before this object is built.
  email: string;
  contact?: string;
  company?: string;
  subject?: string;
  message?: string;
  comments?: string;
  downloadUrl?: string | null;
  otpToken?: string;
  otp?: string;
};

// Submissions contain PII (name, email, phone, IP), so they must never land inside
// the repo — this project is public and a tracked data/contacts.json leaked 10 real
// enquiries before. Set CONTACTS_LOG_PATH to an absolute path outside the working
// tree for a durable local log; otherwise we use tmp, which is ephemeral on
// serverless. Either way the notification email is the authoritative capture.
const CONTACTS_LOG = process.env.CONTACTS_LOG_PATH
  ? path.resolve(process.env.CONTACTS_LOG_PATH)
  : path.join(os.tmpdir(), "contacts.json");

// helper: read JSON file safely
function readJson(filePath: string) {
  try {
    if (!fs.existsSync(filePath)) return [];
    const raw = fs.readFileSync(filePath, "utf8");
    return JSON.parse(raw || "[]");
  } catch (e) {
    console.warn("readJson error for", filePath, e);
    return [];
  }
}

// helper: write JSON file safely
function writeJson(filePath: string, arr: any[]) {
  const dir = path.dirname(filePath);
  if (!fs.existsSync(dir)) {
    try {
      fs.mkdirSync(dir, { recursive: true });
    } catch (e) {
      // ignore - may be read-only
    }
  }
  fs.writeFileSync(filePath, JSON.stringify(arr, null, 2));
}

// Try append to a candidate path; returns true if succeeded
function tryAppendToFile(candidatePath: string, record: any): boolean {
  try {
    const arr = readJson(candidatePath);
    arr.push(record);
    writeJson(candidatePath, arr);
    console.log(`Appended contact to ${candidatePath}`);
    return true;
  } catch (err: any) {
    console.warn(`Failed to append to ${candidatePath}:`, err && err.code ? err.code : err);
    return false;
  }
}

// Send email using nodemailer (best-effort)
async function sendEmailNotification(record: any) {
  const host = process.env.SMTP_HOST;
  if (!host) {
    console.warn("SMTP not configured; skipping email notification.");
    return;
  }

  const to =
    process.env.NOTIFY_EMAIL || process.env.SMTP_USER || process.env.EMAIL || "";

  if (!to) {
    console.warn("Skipping email notification: no recipient configured.");
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

  // Every field here is attacker-controlled, so escape before interpolating and
  // only convert newlines to <br/> after escaping.
  const multiline = (value: unknown) => escapeHtml(value).replace(/\n/g, "<br/>");

  const html = `
    <p><strong>Name:</strong> ${escapeHtml(record.name)}</p>
    <p><strong>Email:</strong> ${escapeHtml(record.email)}</p>
    <p><strong>Contact:</strong> ${escapeHtml(record.contact)}</p>
    <p><strong>Company:</strong> ${escapeHtml(record.company)}</p>
    <p><strong>Subject:</strong> ${escapeHtml(record.subject)}</p>
    <p><strong>Message:</strong><br/>${multiline(record.message)}</p>
    <p><strong>Comments / Suggestions:</strong><br/>${multiline(record.comments)}</p>
    <p><strong>Download URL:</strong> ${escapeHtml(record.downloadUrl)}</p>
    <p><strong>Time:</strong> ${escapeHtml(new Date(record.timestamp).toLocaleString())}</p>
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
    const parsed = await readJsonBody(req);
    if (!parsed.ok) {
      return NextResponse.json({ ok: false, error: parsed.error }, { status: 400 });
    }

    // Validate every field: type, control characters, and length. Previously this
    // only checked truthiness, so any field could be an object, an array, or
    // megabytes of text on its way into an email body.
    const fields: Array<[keyof Body & FieldName, boolean]> = [
      ["name", true],
      ["contact", false],
      ["company", false],
      ["subject", false],
      ["message", false],
      ["comments", false],
      ["otp", false],
      ["otpToken", false],
      ["downloadUrl", false],
    ];

    const clean: Record<string, string> = {};
    for (const [key, required] of fields) {
      const result = field(parsed.value[key], key, { required });
      if (!result.ok) {
        return NextResponse.json({ ok: false, error: result.error }, { status: 400 });
      }
      clean[key] = result.value;
    }

    const emailResult = emailField(parsed.value.email, { required: true });
    if (!emailResult.ok) {
      return NextResponse.json({ ok: false, error: emailResult.error }, { status: 400 });
    }

    const body: Body = {
      name: clean.name,
      email: emailResult.value,
      contact: clean.contact,
      company: clean.company,
      subject: clean.subject,
      message: clean.message,
      comments: clean.comments,
      otp: clean.otp,
      otpToken: clean.otpToken,
      downloadUrl: clean.downloadUrl || null,
    };

    const limited = checkRateLimit(`contact:ip:${clientIp(req)}`, IP_LIMIT, WINDOW_MS);
    if (!limited.ok) {
      const minutes = Math.ceil(limited.retryAfter / 60);
      return NextResponse.json(
        { ok: false, error: `Too many submissions. Please try again in ${minutes} minute${minutes === 1 ? "" : "s"}.` },
        { status: 429, headers: { "Retry-After": String(limited.retryAfter) } }
      );
    }

    // For download requests, require a verified OTP token
    if (body.downloadUrl) {
      if (!body.otpToken || !body.otp) {
        return NextResponse.json(
          { ok: false, error: "Email verification required" },
          { status: 403 }
        );
      }
      const verification = verifyOtpToken(body.otpToken, body.email, body.otp);
      if (!verification.ok) {
        return NextResponse.json(
          { ok: false, error: verification.reason || "Invalid or expired code" },
          { status: 403 }
        );
      }
    }

    const record = {
      name: body.name,
      email: body.email,
      contact: body.contact || null,
      company: body.company || null,
      subject: body.subject || null,
      message: body.message || null,
      comments: body.comments || null,
      downloadUrl: body.downloadUrl || null,
      userAgent: req.headers.get("user-agent") || null,
      ip:
        req.headers.get("x-forwarded-for") ||
        req.headers.get("x-real-ip") ||
        null,
      timestamp: Date.now(),
    };

    // Best-effort local log. Never inside the repo — see CONTACTS_LOG above.
    if (!tryAppendToFile(CONTACTS_LOG, record)) {
      console.warn("Could not persist contact to disk; relying on email notification.");
    }

    // try to send notification email; don't fail the request if email fails
    try {
      await sendEmailNotification(record);
    } catch (e) {
      console.error("Failed to send mail:", e);
    }

    return NextResponse.json({ ok: true });
  } catch (err: any) {
    console.error("contact route error:", err);
    return NextResponse.json(
      // Log detail server-side; return something generic to the client.
      { ok: false, error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
