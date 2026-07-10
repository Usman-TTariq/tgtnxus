import { cookies } from "next/headers";
import { createAuthClient } from "@/lib/supabase/auth-client";

export const ADMIN_ACCESS_COOKIE = "tgt_admin_access_token";
export const ADMIN_REFRESH_COOKIE = "tgt_admin_refresh_token";

export async function isAdminAuthenticated() {
  const store = await cookies();
  const accessToken = store.get(ADMIN_ACCESS_COOKIE)?.value;

  if (!accessToken) {
    return false;
  }

  try {
    const supabase = createAuthClient();
    const {
      data: { user },
      error,
    } = await supabase.auth.getUser(accessToken);

    return !error && !!user;
  } catch {
    return false;
  }
}

export function getAdminCookieOptions(maxAge: number) {
  return {
    httpOnly: true,
    sameSite: "lax" as const,
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge,
  };
}
