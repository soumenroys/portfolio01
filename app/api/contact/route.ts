// /app/api/contact/route.ts
import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import os from "os";
import nodemailer from "nodemailer";

type Body = {
  name: string;
  email?: string;
  contact?: string;
  subject?: string;
  message?: string;
  downloadUrl?: string | null;
};

// prefer project data path when writable (local dev); in prod fallback to tmp
const PROJECT_CONTACTS = path.join(process.cwd(), "data", "contacts.json");
const TMP_CONTACTS = path.join(os.tmpdir(), "contacts.json");

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

  const html = `
    <p><strong>Name:</strong> ${record.name}</p>
    <p><strong>Email:</strong> ${record.email || "—"}</p>
    <p><strong>Contact:</strong> ${record.contact || "—"}</p>
    <p><strong>Subject:</strong> ${record.subject || "—"}</p>
    <p><strong>Message:</strong><br/>${(record.message || "—").replace(/\n/g, "<br/>")}</p>
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

    // First attempt: try appending to project data path (works locally)
    let saved = tryAppendToFile(PROJECT_CONTACTS, record);

    // If failed (likely read-only in production), try temp dir (ephemeral)
    if (!saved) {
      saved = tryAppendToFile(TMP_CONTACTS, record);
      if (saved) {
        console.warn(`Data saved to tmp path (${TMP_CONTACTS}) — note: this is ephemeral on serverless hosts.`);
      }
    }

    if (!saved) {
      console.warn("Could not persist contact to disk; continuing without file save.");
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
      { ok: false, error: err?.message || "unknown" },
      { status: 500 }
    );
  }
}
