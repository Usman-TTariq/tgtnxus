import { RESUME_BUCKET } from "@/lib/supabase/storage";

export function getResumeStoragePath(resumeUrl: string) {
  const marker = `/object/public/${RESUME_BUCKET}/`;
  const idx = resumeUrl.indexOf(marker);
  if (idx === -1) return null;
  return decodeURIComponent(resumeUrl.slice(idx + marker.length));
}
