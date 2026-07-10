import { NextResponse } from "next/server";
import { isAdminAuthenticated } from "@/lib/admin/auth";
import { createAdminClient } from "@/lib/supabase/admin";

export async function GET() {
  if (!(await isAdminAuthenticated())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const supabase = createAdminClient();
    const { data, error } = await supabase
      .from("applications")
      .select("*")
      .order("serial_no", { ascending: true });

    if (error) {
      console.error("[admin/applications]", error);
      return NextResponse.json(
        { error: "Failed to load applications." },
        { status: 500 }
      );
    }

    return NextResponse.json({ applications: data ?? [] });
  } catch (error) {
    console.error("[admin/applications]", error);
    return NextResponse.json(
      { error: "Server configuration error." },
      { status: 500 }
    );
  }
}
