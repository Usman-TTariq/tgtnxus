import type { SupabaseClient } from "@supabase/supabase-js";

const RESUME_BUCKET = "resumes";

export async function ensureResumeBucket(supabase: SupabaseClient) {
  const { data: buckets, error: listError } =
    await supabase.storage.listBuckets();

  if (listError) {
    throw listError;
  }

  const exists = buckets?.some((bucket) => bucket.name === RESUME_BUCKET);
  if (exists) return;

  const { error: createError } = await supabase.storage.createBucket(
    RESUME_BUCKET,
    {
      public: true,
      fileSizeLimit: 5 * 1024 * 1024,
      allowedMimeTypes: ["application/pdf"],
    }
  );

  if (createError && !createError.message.toLowerCase().includes("already exists")) {
    throw createError;
  }
}

export { RESUME_BUCKET };
