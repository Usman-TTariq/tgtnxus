import { NextResponse } from "next/server";
import { isAdminAuthenticated } from "@/lib/admin/auth";
import { getApplications } from "@/lib/applications";

export async function GET() {
  if (!(await isAdminAuthenticated())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const applications = await getApplications();
    return NextResponse.json({ applications });
  } catch (error) {
    console.error("[admin/applications]", error);
    return NextResponse.json(
      { error: "Server configuration error." },
      { status: 500 }
    );
  }
}
