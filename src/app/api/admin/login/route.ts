import { NextResponse } from "next/server";
import { createAuthClient } from "@/lib/supabase/auth-client";
import {
  ADMIN_ACCESS_COOKIE,
  ADMIN_REFRESH_COOKIE,
  getAdminCookieOptions,
} from "@/lib/admin/auth";

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as {
      email?: string;
      password?: string;
    };

    const email = body.email?.trim().toLowerCase() ?? "";
    const password = body.password ?? "";

    if (!email || !password) {
      return NextResponse.json(
        { error: "Email and password are required." },
        { status: 400 }
      );
    }

    const supabase = createAuthClient();
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error || !data.session) {
      const message =
        error?.message === "Email not confirmed"
          ? "Email not confirmed. Confirm the user in Supabase Auth or disable email confirmation."
          : error?.message || "Invalid email or password.";

      return NextResponse.json({ error: message }, { status: 401 });
    }

    const response = NextResponse.json({ ok: true, email: data.user.email });
    const week = 60 * 60 * 24 * 7;

    response.cookies.set(
      ADMIN_ACCESS_COOKIE,
      data.session.access_token,
      getAdminCookieOptions(week)
    );
    response.cookies.set(
      ADMIN_REFRESH_COOKIE,
      data.session.refresh_token,
      getAdminCookieOptions(week)
    );

    return response;
  } catch (error) {
    console.error("[admin/login]", error);
    return NextResponse.json(
      { error: "Login is not configured. Check Supabase env keys." },
      { status: 503 }
    );
  }
}

export async function DELETE() {
  const response = NextResponse.json({ ok: true });

  response.cookies.set(ADMIN_ACCESS_COOKIE, "", getAdminCookieOptions(0));
  response.cookies.set(ADMIN_REFRESH_COOKIE, "", getAdminCookieOptions(0));

  return response;
}
