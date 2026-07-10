import { NextResponse } from "next/server";
import { isAdminAuthenticated } from "@/lib/admin/auth";
import { createAdminClient } from "@/lib/supabase/admin";
import { getResumeStoragePath } from "@/lib/supabase/resume-path";
import { RESUME_BUCKET } from "@/lib/supabase/storage";

type RouteContext = {
  params: Promise<{ id: string }>;
};

export async function GET(_request: Request, context: RouteContext) {
  if (!(await isAdminAuthenticated())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { id } = await context.params;

  try {
    const supabase = createAdminClient();
    const { data: application, error } = await supabase
      .from("applications")
      .select("resume_url, resume_filename")
      .eq("id", id)
      .maybeSingle();

    if (error) {
      console.error("[admin/resume]", error);
      return NextResponse.json(
        { error: "Failed to load application." },
        { status: 500 }
      );
    }

    if (!application?.resume_url) {
      return NextResponse.json({ error: "Resume not found." }, { status: 404 });
    }

    const storagePath = getResumeStoragePath(application.resume_url);
    if (!storagePath) {
      return NextResponse.json(
        { error: "Invalid resume location." },
        { status: 400 }
      );
    }

    const { data: file, error: downloadError } = await supabase.storage
      .from(RESUME_BUCKET)
      .download(storagePath);

    if (downloadError || !file) {
      console.error("[admin/resume] download failed", downloadError);
      return NextResponse.json(
        { error: "Unable to download resume." },
        { status: 500 }
      );
    }

    const filename =
      application.resume_filename?.replace(/[^\w.\-()+\s]/g, "_") ||
      "resume.pdf";
    const buffer = Buffer.from(await file.arrayBuffer());

    return new NextResponse(buffer, {
      headers: {
        "Content-Type": file.type || "application/octet-stream",
        "Content-Disposition": `attachment; filename="${filename}"`,
        "Content-Length": String(buffer.length),
        "Cache-Control": "private, no-store",
      },
    });
  } catch (error) {
    console.error("[admin/resume]", error);
    return NextResponse.json(
      { error: "Server configuration error." },
      { status: 500 }
    );
  }
}
