import { NextResponse } from "next/server";

const MAX_FILE_SIZE = 5 * 1024 * 1024;
const ALLOWED_TYPES = new Set([
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
]);

function validateEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export async function POST(request: Request) {
  try {
    const formData = await request.formData();

    const fullName = String(formData.get("fullName") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();
    const phone = String(formData.get("phone") ?? "").trim();
    const position = String(formData.get("position") ?? "").trim();
    const resume = formData.get("resume");

    if (!fullName) {
      return NextResponse.json({ error: "Full name is required." }, { status: 400 });
    }
    if (!email || !validateEmail(email)) {
      return NextResponse.json({ error: "A valid email is required." }, { status: 400 });
    }
    if (!phone) {
      return NextResponse.json({ error: "Phone number is required." }, { status: 400 });
    }
    if (!position) {
      return NextResponse.json({ error: "Position is required." }, { status: 400 });
    }
    if (!(resume instanceof File) || resume.size === 0) {
      return NextResponse.json({ error: "Resume file is required." }, { status: 400 });
    }
    if (resume.size > MAX_FILE_SIZE) {
      return NextResponse.json(
        { error: "Resume must be 5MB or smaller." },
        { status: 400 }
      );
    }
    if (!ALLOWED_TYPES.has(resume.type)) {
      return NextResponse.json(
        { error: "Resume must be a PDF or Word document." },
        { status: 400 }
      );
    }

    const webhook = process.env.CONTACT_WEBHOOK_URL;
    if (webhook) {
      const outbound = new FormData();
      outbound.append("fullName", fullName);
      outbound.append("email", email);
      outbound.append("phone", phone);
      outbound.append("position", position);
      outbound.append("resume", resume, resume.name);

      const webhookRes = await fetch(webhook, {
        method: "POST",
        body: outbound,
      });

      if (!webhookRes.ok) {
        return NextResponse.json(
          { error: "Unable to deliver your application right now." },
          { status: 502 }
        );
      }
    } else {
      console.info("[contact] application received", {
        fullName,
        email,
        phone,
        position,
        resumeName: resume.name,
        resumeSize: resume.size,
      });
    }

    return NextResponse.json({
      message: "Thanks — your application was submitted successfully.",
    });
  } catch {
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
