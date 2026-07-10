import {
  normalizeApplicationEmail,
  normalizeApplicationPhone,
} from "@/lib/applications/normalize";
import { createAdminClient } from "@/lib/supabase/admin";

export type DuplicateApplicationReason = "email" | "phone";

export async function findDuplicateApplication(
  email: string,
  phone: string
): Promise<DuplicateApplicationReason | null> {
  const normalizedEmail = normalizeApplicationEmail(email);
  const normalizedPhone = normalizeApplicationPhone(phone);
  const supabase = createAdminClient();

  const { data: existing, error } = await supabase
    .from("applications")
    .select("email, phone");

  if (error) {
    throw error;
  }

  for (const row of existing ?? []) {
    if (normalizeApplicationEmail(row.email) === normalizedEmail) {
      return "email";
    }
    if (normalizeApplicationPhone(row.phone) === normalizedPhone) {
      return "phone";
    }
  }

  return null;
}
