import { NextResponse } from "next/server";
import { isAdminAuthenticated } from "@/lib/admin/auth";
import { resequenceApplicationSerials } from "@/lib/applications";
import { createAdminClient } from "@/lib/supabase/admin";
import { getResumeStoragePath } from "@/lib/supabase/resume-path";
import { RESUME_BUCKET } from "@/lib/supabase/storage";

export const dynamic = "force-dynamic";

type RouteContext = {
  params: Promise<{ id: string }>;
};

export async function DELETE(_request: Request, context: RouteContext) {
  if (!(await isAdminAuthenticated())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { id } = await context.params;

  if (!id) {
    return NextResponse.json({ error: "Missing application id." }, { status: 400 });
  }

  try {
    const supabase = createAdminClient();

    const { data: existing, error: fetchError } = await supabase
      .from("applications")
      .select("id, resume_url")
      .eq("id", id)
      .maybeSingle();

    if (fetchError) {
      console.error("[admin/applications/delete] fetch", fetchError);
      return NextResponse.json(
        { error: "Unable to load application." },
        { status: 500 }
      );
    }

    if (!existing) {
      return NextResponse.json(
        { error: "Application not found." },
        { status: 404 }
      );
    }

    if (existing.resume_url) {
      const storagePath = getResumeStoragePath(existing.resume_url);
      if (storagePath) {
        const { error: storageError } = await supabase.storage
          .from(RESUME_BUCKET)
          .remove([storagePath]);
        if (storageError) {
          console.warn("[admin/applications/delete] resume cleanup", storageError);
        }
      }
    }

    const { error: deleteError } = await supabase
      .from("applications")
      .delete()
      .eq("id", id);

    if (deleteError) {
      console.error("[admin/applications/delete]", deleteError);
      return NextResponse.json(
        { error: deleteError.message || "Failed to delete application." },
        { status: 500 }
      );
    }

    try {
      await resequenceApplicationSerials();
    } catch (resequenceError) {
      console.warn("[admin/applications/delete] resequence", resequenceError);
    }

    return NextResponse.json({ ok: true, id });
  } catch (error) {
    console.error("[admin/applications/delete]", error);
    return NextResponse.json(
      { error: "Server configuration error." },
      { status: 500 }
    );
  }
}
