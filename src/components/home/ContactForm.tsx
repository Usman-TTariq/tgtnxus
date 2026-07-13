"use client";

import { FormEvent, useCallback, useRef, useState } from "react";
import ContactThankYouModal from "./ContactThankYouModal";

const imgIcon =
  "https://www.figma.com/api/mcp/asset/8ee10799-1f4a-42ca-ab80-b5d792b8ede9";

export const POSITIONS = [
  "Sales Development Representative",
  "International Sales Executive",
  "Ebook Front Sales",
  "POS Sales Closer",
  "Quality Assurance Executive",
  "AI Video Editor",
  "Sales Team Lead",
  "Other",
] as const;

type ApplicationFieldErrors = Partial<
  Record<"fullName" | "email" | "phone" | "position" | "resume", string>
>;

type InquiryFieldErrors = Partial<
  Record<"fullName" | "email" | "phone" | "message", string>
>;

function validateEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function formatFileSize(bytes: number) {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

function isPdfResume(file: File) {
  const lower = file.name.toLowerCase();
  if (lower.endsWith(".pdf")) return true;
  return file.type === "application/pdf";
}

const canvasInputClass =
  "w-full h-[40px] border-0 border-b border-solid border-[rgba(255,255,255,0.3)] bg-transparent font-secondary text-[16px] font-semibold text-[#f9fafb] outline-none placeholder:text-[rgba(249,250,251,0.6)]";

const canvasTextareaClass =
  "w-full min-h-[96px] resize-y border-0 border-b border-solid border-[rgba(255,255,255,0.3)] bg-transparent py-2 font-secondary text-[16px] font-semibold text-[#f9fafb] outline-none placeholder:text-[rgba(249,250,251,0.6)]";

const canvasLabelClass =
  "mb-[8px] font-secondary text-[16px] font-normal leading-[21px] text-[#f9fafb]";

const canvasSelectClass =
  "w-full h-[40px] cursor-pointer appearance-none border-0 border-b border-solid border-[rgba(255,255,255,0.3)] bg-transparent font-secondary text-[16px] font-semibold text-[#f9fafb] outline-none pr-[28px]";

type ContactFormProps = {
  layout?: "canvas" | "page";
  /** application = careers/home (resume). inquiry = /contact only (message → info@). */
  mode?: "application" | "inquiry";
};

export default function ContactForm({
  layout = "canvas",
  mode = "application",
}: ContactFormProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [position, setPosition] = useState<string>(POSITIONS[0]);
  const [message, setMessage] = useState("");
  const [resume, setResume] = useState<File | null>(null);
  const [errors, setErrors] = useState<ApplicationFieldErrors & InquiryFieldErrors>({});
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [thankYouOpen, setThankYouOpen] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const isPage = layout === "page";
  const isInquiry = mode === "inquiry";
  /* Mobile + desktop both mount on home — unique ids so file picker targets this form */
  const uid = `${layout}-${mode}`;
  const fieldId = (name: string) => `contact-${uid}-${name}`;

  const closeThankYou = useCallback(() => {
    setThankYouOpen(false);
  }, []);

  const clearResume = () => {
    setResume(null);
    if (fileInputRef.current) fileInputRef.current.value = "";
    setErrors((prev) => ({ ...prev, resume: undefined }));
  };

  const validate = () => {
    const next: ApplicationFieldErrors & InquiryFieldErrors = {};
    if (!fullName.trim()) next.fullName = "Required";
    if (!email.trim()) next.email = "Required";
    else if (!validateEmail(email)) next.email = "Invalid email";
    if (!phone.trim()) next.phone = "Required";

    if (isInquiry) {
      if (!message.trim()) next.message = "Required";
    } else {
      if (!position) next.position = "Required";
      if (!resume) next.resume = "Required";
      else if (!isPdfResume(resume)) next.resume = "Resume must be a PDF file.";
    }

    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);
    if (!validate()) return;

    setSubmitting(true);
    try {
      const body = new FormData();
      body.append("mode", isInquiry ? "inquiry" : "application");
      body.append("fullName", fullName.trim());
      body.append("email", email.trim());
      body.append("phone", phone.trim());

      if (isInquiry) {
        body.append("message", message.trim());
      } else {
        body.append("position", position);
        if (resume) body.append("resume", resume);
      }

      const res = await fetch("/api/contact", {
        method: "POST",
        body,
      });
      const data = (await res.json()) as { message?: string; error?: string };
      if (!res.ok) throw new Error(data.error || "Submit failed");

      setFullName("");
      setEmail("");
      setPhone("");
      setPosition(POSITIONS[0]);
      setMessage("");
      setResume(null);
      setErrors({});
      if (fileInputRef.current) fileInputRef.current.value = "";
      setThankYouOpen(true);
    } catch (err) {
      setErrorMessage(err instanceof Error ? err.message : "Submit failed");
    } finally {
      setSubmitting(false);
    }
  };

  const fields = (
    <>
      <div className={isPage ? "tgt-contact-page-field" : undefined}>
        <label htmlFor={fieldId("full-name")} className={isPage ? undefined : canvasLabelClass}>
          Full Name
        </label>
        <input
          id={fieldId("full-name")}
          name="fullName"
          type="text"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          placeholder="Enter your full name"
          autoComplete="name"
          className={
            isPage
              ? errors.fullName
                ? "tgt-contact-page-input-error"
                : undefined
              : `${canvasInputClass}${errors.fullName ? " border-[#ff272f]" : ""}`
          }
        />
      </div>

      <div className={isPage ? "tgt-contact-page-field" : undefined}>
        <label htmlFor={fieldId("email")} className={isPage ? undefined : canvasLabelClass}>
          Email Address
        </label>
        <input
          id={fieldId("email")}
          name="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your e-mail"
          autoComplete="email"
          className={
            isPage
              ? errors.email
                ? "tgt-contact-page-input-error"
                : undefined
              : `${canvasInputClass}${errors.email ? " border-[#ff272f]" : ""}`
          }
        />
      </div>

      <div className={isPage ? "tgt-contact-page-field" : undefined}>
        <label htmlFor={fieldId("phone")} className={isPage ? undefined : canvasLabelClass}>
          Phone Number
        </label>
        <input
          id={fieldId("phone")}
          name="phone"
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="Enter your phone number"
          autoComplete="tel"
          className={
            isPage
              ? errors.phone
                ? "tgt-contact-page-input-error"
                : undefined
              : `${canvasInputClass}${errors.phone ? " border-[#ff272f]" : ""}`
          }
        />
      </div>

      {isInquiry ? (
        <div className={isPage ? "tgt-contact-page-field" : undefined}>
          <label htmlFor={fieldId("message")} className={isPage ? undefined : canvasLabelClass}>
            Message
          </label>
          <textarea
            id={fieldId("message")}
            name="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Write your message"
            rows={4}
            className={
              isPage
                ? `tgt-contact-page-textarea${errors.message ? " tgt-contact-page-input-error" : ""}`
                : `${canvasTextareaClass}${errors.message ? " border-[#ff272f]" : ""}`
            }
          />
          {errors.message ? (
            <p className={isPage ? "tgt-contact-page-error" : "mt-2 font-secondary text-[13px] text-[#ff272f]"}>
              {errors.message}
            </p>
          ) : null}
        </div>
      ) : (
        <>
          <div className={isPage ? "tgt-contact-page-field" : undefined}>
            <label htmlFor={fieldId("position")} className={isPage ? undefined : canvasLabelClass}>
              Position Applying For:
            </label>
            <div className={isPage ? "tgt-contact-page-select-wrap" : "relative"}>
              <select
                id={fieldId("position")}
                name="position"
                value={position}
                onChange={(e) => setPosition(e.target.value)}
                className={
                  isPage
                    ? errors.position
                      ? "tgt-contact-page-input-error"
                      : undefined
                    : `${canvasSelectClass}${errors.position ? " border-[#ff272f]" : ""}`
                }
              >
                {POSITIONS.map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </select>
              <span className="tgt-contact-page-select-arrow" aria-hidden>
                <svg width="12" height="8" viewBox="0 0 12 8" fill="none">
                  <path
                    d="M1 1.5L6 6.5L11 1.5"
                    stroke="#F9FAFB"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </div>
          </div>

          <div className={isPage ? "tgt-contact-page-field" : undefined}>
            <input
              ref={fileInputRef}
              id={fieldId("resume")}
              name="resume"
              type="file"
              accept=".pdf,application/pdf"
              className="sr-only"
              onChange={(e) => {
                const file = e.target.files?.[0] ?? null;
                if (file && !isPdfResume(file)) {
                  setResume(null);
                  if (fileInputRef.current) fileInputRef.current.value = "";
                  setErrors((prev) => ({
                    ...prev,
                    resume: "Only PDF files are allowed.",
                  }));
                  return;
                }
                setResume(file);
                setErrors((prev) => ({ ...prev, resume: undefined }));
              }}
            />

            {resume ? (
              <div
                className={
                  isPage
                    ? "tgt-contact-page-file tgt-contact-page-file--filled"
                    : "flex items-center gap-4 rounded-[10px] border border-solid border-[rgba(255,255,255,0.2)] bg-[rgba(255,255,255,0.06)] px-4 py-3"
                }
              >
                <span className="flex h-[24px] w-[21px] shrink-0 items-center justify-center">
                  <span className="-scale-y-100 flex-none">
                    <img alt="" className="block h-[23.411px] w-[20.485px]" src={imgIcon} />
                  </span>
                </span>
                <div className="min-w-0 flex-1">
                  <p
                    className="truncate font-secondary text-[16px] font-medium leading-[1.3] text-[#f9fafb]"
                    title={resume.name}
                  >
                    {resume.name}
                  </p>
                  <p className="mt-1 font-secondary text-[13px] font-normal text-[rgba(255,255,255,0.55)]">
                    {formatFileSize(resume.size)}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={clearResume}
                  aria-label="Remove file"
                  className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full font-secondary text-[20px] leading-none text-[rgba(255,255,255,0.65)] transition hover:bg-[rgba(255,255,255,0.1)] hover:text-[#f9fafb]"
                >
                  ×
                </button>
              </div>
            ) : (
              <label
                htmlFor={fieldId("resume")}
                className={
                  isPage
                    ? "tgt-contact-page-file"
                    : "relative z-[2] flex cursor-pointer items-center gap-4 rounded-[10px] border border-dashed border-[rgba(255,255,255,0.28)] px-4 py-3 transition hover:border-[rgba(255,255,255,0.45)] hover:bg-[rgba(255,255,255,0.04)]"
                }
              >
                <span className="flex h-[24px] w-[21px] shrink-0 items-center justify-center">
                  <span className="-scale-y-100 flex-none">
                    <img alt="" className="block h-[23.411px] w-[20.485px]" src={imgIcon} />
                  </span>
                </span>
                <span className="font-secondary text-[18px] font-normal leading-[1.4] text-[#f9fafb]">
                  Attach your resume
                </span>
                <span className="ml-auto font-secondary text-[13px] text-[rgba(255,255,255,0.45)]">
                  PDF only · max 5MB
                </span>
              </label>
            )}

            {errors.resume ? (
              <p
                className={
                  isPage
                    ? "tgt-contact-page-error"
                    : "mt-2 font-secondary text-[13px] text-[#ff272f]"
                }
              >
                {errors.resume}
              </p>
            ) : null}
          </div>
        </>
      )}
    </>
  );

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className={
        isPage
          ? "tgt-contact-page-form-inner"
          : "tgt-contact-form -translate-y-1/2 absolute border-[rgba(255,255,255,0.15)] border-l border-solid h-[702px] left-[1004px] right-0 top-1/2"
      }
    >
      {isPage ? (
        fields
      ) : (
        <div className="absolute left-[41px] right-[41px] top-[112px] flex h-[489px] flex-col gap-[24px] overflow-y-auto pr-1">
          {fields}
        </div>
      )}

      {errorMessage ? (
        <p
          className={
            isPage
              ? "tgt-contact-page-error"
              : "font-secondary text-[14px] text-[#ff272f]"
          }
          role="alert"
        >
          {errorMessage}
        </p>
      ) : null}

      <button
        type="submit"
        disabled={submitting}
        className={
          isPage
            ? "tgt-contact-page-submit"
            : "tgt-contact-submit absolute left-[41px] right-[41px] top-[613px] z-[1] flex h-[48px] items-center justify-center rounded-[12px] border-0 font-secondary text-[20px] font-semibold uppercase leading-none text-white transition hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-60"
        }
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml;utf8,<svg viewBox='0 0 514 48' xmlns='http://www.w3.org/2000/svg' preserveAspectRatio='none'><rect x='0' y='0' height='100%' width='100%' fill='url(%23grad)' opacity='1'/><defs><radialGradient id='grad' gradientUnits='userSpaceOnUse' cx='0' cy='0' r='10' gradientTransform='matrix(32.156 0 0 3.0029 144.64 -5.0016)'><stop stop-color='rgba(255,255,255,0.2)' offset='0'/><stop stop-color='rgba(255,255,255,0)' offset='1'/></radialGradient></defs></svg>\"), linear-gradient(143.4deg, rgb(64, 69, 74) 21.13%, rgb(41, 44, 46) 80.53%)",
          boxShadow:
            "0 3px 3px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.6), inset 0 -3px 0 #1a1a1a, inset 0 -4px 0 1px rgba(255, 255, 255, 0.1)",
        }}
      >
        {submitting ? "Submitting..." : "Submit Message"}
      </button>

      <ContactThankYouModal
        open={thankYouOpen}
        onClose={closeThankYou}
        title={isInquiry ? "Message sent" : "Application received"}
        description={
          isInquiry
            ? "Thanks for reaching out. Our team will review your message and get back to you shortly."
            : "Thanks for applying. We’ve received your details and will review your profile soon."
        }
      />
    </form>
  );
}
