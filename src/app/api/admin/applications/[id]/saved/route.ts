import { NextResponse } from "next/server";
import { isAdminAuthenticated } from "@/lib/admin/auth";
import { createAdminClient } from "@/lib/supabase/admin";

type RouteContext = {
  params: Promise<{ id: string }>;
};

export async function PATCH(request: Request, context: RouteContext) {
  if (!(await isAdminAuthenticated())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { id } = await context.params;

  try {
    const body = (await request.json()) as { saved?: boolean };
    if (typeof body.saved !== "boolean") {
      return NextResponse.json(
        { error: "saved must be a boolean." },
        { status: 400 }
      );
    }

    const supabase = createAdminClient();
    const { data, error } = await supabase
      .from("applications")
      .update({ is_saved: body.saved })
      .eq("id", id)
      .select("id, is_saved")
      .maybeSingle();

    if (error) {
      console.error("[admin/applications/saved]", error);
      return NextResponse.json(
        { error: "Failed to update saved status." },
        { status: 500 }
      );
    }

    if (!data) {
      return NextResponse.json(
        { error: "Application not found." },
        { status: 404 }
      );
    }

    return NextResponse.json({ ok: true, id: data.id, saved: data.is_saved });
  } catch (error) {
    console.error("[admin/applications/saved]", error);
    return NextResponse.json(
      { error: "Server configuration error." },
      { status: 500 }
    );
  }
}
