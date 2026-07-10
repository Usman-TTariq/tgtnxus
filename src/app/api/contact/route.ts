import { NextResponse } from "next/server";
import {
  createAdminClient,
  generateApplicationId,
} from "@/lib/supabase/admin";
import {
  normalizeApplicationEmail,
  normalizeApplicationPhone,
} from "@/lib/applications/normalize";
import { findDuplicateApplication } from "@/lib/applications/duplicate";
import { ensureResumeBucket, RESUME_BUCKET } from "@/lib/supabase/storage";

const MAX_FILE_SIZE = 5 * 1024 * 1024;
const ALLOWED_TYPES = new Set([
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
]);

const ALLOWED_EXTENSIONS = new Set([".pdf", ".doc", ".docx"]);

function validateEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function resolveResumeContentType(file: File) {
  if (file.type && ALLOWED_TYPES.has(file.type)) {
    return file.type;
  }

  const lower = file.name.toLowerCase();
  if (lower.endsWith(".pdf")) return "application/pdf";
  if (lower.endsWith(".doc")) return "application/msword";
  if (lower.endsWith(".docx")) {
    return "application/vnd.openxmlformats-officedocument.wordprocessingml.document";
  }

  return file.type || "application/octet-stream";
}

function isAllowedResume(file: File) {
  if (file.type && ALLOWED_TYPES.has(file.type)) return true;
  const lower = file.name.toLowerCase();
  return [...ALLOWED_EXTENSIONS].some((ext) => lower.endsWith(ext));
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
    if (!isAllowedResume(resume)) {
      return NextResponse.json(
        { error: "Resume must be a PDF or Word document." },
        { status: 400 }
      );
    }

    const normalizedEmail = normalizeApplicationEmail(email);
    const normalizedPhone = normalizeApplicationPhone(phone);

    if (!normalizedPhone) {
      return NextResponse.json(
        { error: "A valid phone number is required." },
        { status: 400 }
      );
    }

    const supabase = createAdminClient();

    let duplicateReason: "email" | "phone" | null = null;
    try {
      duplicateReason = await findDuplicateApplication(email, phone);
    } catch (duplicateError) {
      console.error("[contact] duplicate check failed", duplicateError);
      return NextResponse.json(
        { error: "Unable to verify your application. Please try again." },
        { status: 500 }
      );
    }

    if (duplicateReason === "email") {
      return NextResponse.json(
        {
          error:
            "You have already submitted an application with this email address.",
        },
        { status: 409 }
      );
    }

    if (duplicateReason === "phone") {
      return NextResponse.json(
        {
          error:
            "You have already submitted an application with this phone number.",
        },
        { status: 409 }
      );
    }

    const contentType = resolveResumeContentType(resume);

    await ensureResumeBucket(supabase);

    const applicationId = generateApplicationId();
    let resumeUrl: string | null = null;
    const resumeFilename = resume.name;

    const storagePath = `${applicationId}/${Date.now()}-${resume.name.replace(/[^\w.\-()+\s]/g, "_")}`;
    const fileBuffer = Buffer.from(await resume.arrayBuffer());

    const { error: uploadError } = await supabase.storage
      .from(RESUME_BUCKET)
      .upload(storagePath, fileBuffer, {
        contentType,
        upsert: false,
      });

    if (uploadError) {
      console.error("[contact] resume upload failed", uploadError);
      return NextResponse.json(
        { error: "Unable to upload resume. Please try again." },
        { status: 500 }
      );
    }

    const { data: publicUrlData } = supabase.storage
      .from(RESUME_BUCKET)
      .getPublicUrl(storagePath);

    resumeUrl = publicUrlData.publicUrl;

    const { error: insertError } = await supabase.from("applications").insert({
      application_id: applicationId,
      full_name: fullName,
      email: normalizedEmail,
      phone: phone.trim(),
      position,
      resume_url: resumeUrl,
      resume_filename: resumeFilename,
    });

    if (insertError) {
      console.error("[contact] insert failed", insertError);
      await supabase.storage.from(RESUME_BUCKET).remove([storagePath]);

      if (insertError.code === "23505") {
        return NextResponse.json(
          {
            error:
              "You have already submitted an application. Each email and phone number can only be used once.",
          },
          { status: 409 }
        );
      }

      return NextResponse.json(
        { error: "Unable to save your application. Please try again." },
        { status: 500 }
      );
    }

    const webhook = process.env.CONTACT_WEBHOOK_URL;
    if (webhook) {
      const outbound = new FormData();
      outbound.append("fullName", fullName);
      outbound.append("email", email);
      outbound.append("phone", phone);
      outbound.append("position", position);
      outbound.append("applicationId", applicationId);
      outbound.append("resume", resume, resume.name);

      const webhookRes = await fetch(webhook, {
        method: "POST",
        body: outbound,
      });

      if (!webhookRes.ok) {
        console.warn("[contact] webhook delivery failed");
      }
    }

    return NextResponse.json({
      message: "Thanks — your application was submitted successfully.",
      applicationId,
    });
  } catch (error) {
    console.error("[contact] unexpected error", error);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
