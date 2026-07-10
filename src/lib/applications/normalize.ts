export function normalizeApplicationEmail(email: string) {
  return email.trim().toLowerCase();
}

export function normalizeApplicationPhone(phone: string) {
  return phone.replace(/\D/g, "");
}
