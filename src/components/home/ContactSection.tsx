"use client";

import { FormEvent, useRef, useState } from "react";

const imgIcon =
  "https://www.figma.com/api/mcp/asset/8ee10799-1f4a-42ca-ab80-b5d792b8ede9";

const POSITIONS = [
  "Sales Development Representative",
  "International Sales Executive",
  "Ebook Front Sales",
  "POS Sales Closer",
  "Quality Assurance Executive",
  "AI Video Editor",
  "Sales Team Lead",
  "Other",
] as const;

type FieldErrors = Partial<
  Record<"fullName" | "email" | "phone" | "position" | "resume", string>
>;

function validateEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function formatFileSize(bytes: number) {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

const fieldInputClass =
  "w-full h-[40px] border-0 border-b border-solid border-[rgba(255,255,255,0.3)] bg-transparent font-secondary text-[16px] font-semibold text-[#f9fafb] outline-none placeholder:text-[rgba(249,250,251,0.6)]";

const fieldLabelClass =
  "mb-[8px] font-secondary text-[16px] font-normal leading-[21px] text-[#f9fafb]";

const fieldSelectClass =
  "w-full h-[40px] cursor-pointer appearance-none border-0 border-b border-solid border-[rgba(255,255,255,0.3)] bg-transparent font-secondary text-[16px] font-semibold text-[#f9fafb] outline-none pr-[28px]";

const submitButtonClass =
  "absolute left-[41px] right-[41px] top-[613px] z-[1] flex h-[48px] items-center justify-center rounded-[12px] border-0 font-secondary text-[20px] font-semibold uppercase leading-none text-white transition hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-60";

export default function ContactSection() {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [position, setPosition] = useState<string>(POSITIONS[0]);
  const [resume, setResume] = useState<File | null>(null);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [status, setStatus] = useState<{
    type: "success" | "error";
    message: string;
  } | null>(null);
  const [submitting, setSubmitting] = useState(false);

  const clearResume = () => {
    setResume(null);
    if (fileInputRef.current) fileInputRef.current.value = "";
    setErrors((prev) => ({ ...prev, resume: undefined }));
  };

  const validate = () => {
    const next: FieldErrors = {};
    if (!fullName.trim()) next.fullName = "Required";
    if (!email.trim()) next.email = "Required";
    else if (!validateEmail(email)) next.email = "Invalid email";
    if (!phone.trim()) next.phone = "Required";
    if (!position) next.position = "Required";
    if (!resume) next.resume = "Required";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus(null);
    if (!validate()) return;

    setSubmitting(true);
    try {
      const body = new FormData();
      body.append("fullName", fullName.trim());
      body.append("email", email.trim());
      body.append("phone", phone.trim());
      body.append("position", position);
      if (resume) body.append("resume", resume);

      const res = await fetch("/api/contact", {
        method: "POST",
        body,
      });
      const data = (await res.json()) as { message?: string; error?: string };
      if (!res.ok) throw new Error(data.error || "Submit failed");

      setStatus({ type: "success", message: data.message || "Submitted!" });
      setFullName("");
      setEmail("");
      setPhone("");
      setPosition(POSITIONS[0]);
      setResume(null);
      setErrors({});
      if (fileInputRef.current) fileInputRef.current.value = "";
    } catch (err) {
      setStatus({
        type: "error",
        message: err instanceof Error ? err.message : "Submit failed",
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div
      id="contact"
      className="border-[rgba(0,0,0,0)] border-b border-solid border-t relative size-full"
      data-node-id="58:1852"
      data-name="Section - wpr contact area start"
    >
      <div
        className="tgt-contact-panel absolute overflow-visible bg-[#111] h-[702px] left-0 right-[160px] top-0"
        data-node-id="58:1853"
        data-name="Background"
      >
        <div className="tgt-contact-info -translate-y-1/2 absolute contents left-[152px] right-[738.89px] top-[calc(50%+0.25px)]" data-node-id="61:1912">
          <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-secondary font-semibold justify-center leading-[0] left-[328.11px] right-[824.89px] text-[#f9fafb] text-[51.989px] top-[193px] whitespace-nowrap" data-node-id="58:1855">
            <a href="mailto:info@tgtnexus.com" className="leading-[51.989px] text-inherit no-underline">
              info@tgtnexus.com
            </a>
          </div>
          <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-secondary font-semibold justify-center leading-[0] left-[328.11px] right-[738.89px] text-[#f9fafb] text-[51.989px] top-[272.28px] whitespace-nowrap" data-node-id="58:1856">
            <a href="mailto:careers@tgtnexus.com" className="leading-[51.989px] text-inherit no-underline">
              careers@tgtnexus.com
            </a>
          </div>
          <div className="-translate-y-1/2 absolute bg-[rgba(243,244,246,0.15)] h-[27.294px] left-[152px] right-[1331.67px] top-[calc(50%-159.96px)]" data-node-id="58:1857" data-name="Overlay">
            <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-primary font-normal h-[23.395px] justify-center leading-[0] left-[31.19px] text-[#f9fafb] text-[18.196px] top-[14.3px] w-[79.135px]" data-node-id="58:1858">
              <p className="leading-[18.196px]">CONTACT</p>
            </div>
            <div className="-translate-y-1/2 absolute bg-[#ff272f] left-[5.2px] size-[15.597px] top-1/2" data-node-id="58:1859" data-name="Background" />
          </div>
          <div className="[word-break:break-word] absolute contents leading-[0] left-[328.66px] right-[842.6px] top-[352.56px]" data-node-id="60:1908">
            <div className="-translate-y-1/2 absolute flex flex-col font-secondary font-semibold h-[62.387px] justify-center left-[328.66px] right-[1076.13px] text-[#f9fafb] text-[51.989px] top-[383.75px] tracking-[-2.0796px]" data-node-id="58:1862">
              <p className="leading-[62.387px]">Karachi</p>
            </div>
            <div className="-translate-y-1/2 absolute flex flex-col font-secondary font-medium justify-center left-[328.76px] right-[842.6px] text-[22.817px] text-[rgba(255,255,255,0.6)] top-[483.99px]" data-node-id="58:1863">
              <p className="leading-[34.226px]">
                Plot # 176-A, Sindhi Muslim Cooperative Housing Society Block A Sindhi Muslim CHS (SMCHS), Karachi, 74400
              </p>
            </div>
          </div>
          <div className="-translate-y-1/2 absolute bg-[rgba(243,244,246,0.15)] h-[25.995px] left-[152px] right-[1337.52px] top-[calc(50%+28.2px)]" data-node-id="58:1867" data-name="Overlay">
            <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-primary font-normal justify-center leading-[0] left-[31.19px] text-[#f9fafb] text-[18.196px] top-[14.05px] whitespace-nowrap" data-node-id="58:1868">
              <p className="leading-[18.196px]">OFFFICE</p>
            </div>
            <div className="-translate-y-1/2 absolute bg-[#ff272f] left-[5.2px] size-[15.597px] top-1/2" data-node-id="58:1869" data-name="Background" />
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          noValidate
          className="tgt-contact-form -translate-y-1/2 absolute border-[rgba(255,255,255,0.15)] border-l border-solid h-[702px] left-[1004px] right-0 top-1/2"
          data-node-id="58:1870"
          data-name="VerticalBorder"
        >
          <div
            className="absolute left-[41px] right-[41px] top-[112px] flex h-[489px] flex-col gap-[24px] overflow-y-auto pr-1"
            data-node-id="61:1910"
          >
            <div>
              <label htmlFor="contact-full-name" className={fieldLabelClass}>
                Full Name
              </label>
              <input
                id="contact-full-name"
                name="fullName"
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder="Enter your full name"
                autoComplete="name"
                className={`${fieldInputClass}${errors.fullName ? " border-[#ff272f]" : ""}`}
              />
            </div>

            <div>
              <label htmlFor="contact-email" className={fieldLabelClass}>
                Email Address
              </label>
              <input
                id="contact-email"
                name="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your e-mail"
                autoComplete="email"
                className={`${fieldInputClass}${errors.email ? " border-[#ff272f]" : ""}`}
              />
            </div>

            <div>
              <label htmlFor="contact-phone" className={fieldLabelClass}>
                Phone Number
              </label>
              <input
                id="contact-phone"
                name="phone"
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Enter your phone number"
                autoComplete="tel"
                className={`${fieldInputClass}${errors.phone ? " border-[#ff272f]" : ""}`}
              />
            </div>

            <div>
              <label htmlFor="contact-position" className={fieldLabelClass}>
                Position Applying For:
              </label>
              <div className="relative">
                <select
                  id="contact-position"
                  name="position"
                  value={position}
                  onChange={(e) => setPosition(e.target.value)}
                  className={`${fieldSelectClass}${errors.position ? " border-[#ff272f]" : ""}`}
                >
                  {POSITIONS.map((item) => (
                    <option key={item} value={item} className="bg-[#111] text-[#f9fafb]">
                      {item}
                    </option>
                  ))}
                </select>
                <span
                  className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2"
                  aria-hidden
                >
                  <svg
                    width="12"
                    height="8"
                    viewBox="0 0 12 8"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
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

            <div>
              <input
                ref={fileInputRef}
                id="contact-resume"
                name="resume"
                type="file"
                accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                className="sr-only"
                onChange={(e) => {
                  setResume(e.target.files?.[0] ?? null);
                  setErrors((prev) => ({ ...prev, resume: undefined }));
                }}
              />

              {resume ? (
                <div
                  className="flex items-center gap-4 rounded-[10px] border border-solid border-[rgba(255,255,255,0.2)] bg-[rgba(255,255,255,0.06)] px-4 py-3"
                  data-node-id="60:1897"
                >
                  <span className="flex h-[24px] w-[21px] shrink-0 items-center justify-center">
                    <span className="-scale-y-100 flex-none">
                      <img
                        alt=""
                        className="block h-[23.411px] w-[20.485px]"
                        src={imgIcon}
                      />
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
                    x
                  </button>
                </div>
              ) : (
                <label
                  htmlFor="contact-resume"
                  className="flex cursor-pointer items-center gap-4 rounded-[10px] border border-dashed border-[rgba(255,255,255,0.28)] px-4 py-3 transition hover:border-[rgba(255,255,255,0.45)] hover:bg-[rgba(255,255,255,0.04)]"
                  data-node-id="60:1897"
                >
                  <span className="flex h-[24px] w-[21px] shrink-0 items-center justify-center">
                    <span className="-scale-y-100 flex-none">
                      <img
                        alt=""
                        className="block h-[23.411px] w-[20.485px]"
                        src={imgIcon}
                      />
                    </span>
                  </span>
                  <span className="font-secondary text-[18px] font-normal leading-[1.4] text-[#f9fafb]">
                    Attach your resume
                  </span>
                  <span className="ml-auto font-secondary text-[13px] text-[rgba(255,255,255,0.45)]">
                    PDF, DOC · max 5MB
                  </span>
                </label>
              )}

              {errors.resume ? (
                <p className="mt-2 font-secondary text-[13px] text-[#ff272f]">
                  {errors.resume}
                </p>
              ) : null}
            </div>
          </div>

          {status ? (
            <p
              className={`absolute left-[41px] right-[41px] top-[588px] font-secondary text-[14px] ${status.type === "success" ? "text-[#86efac]" : "text-[#ff272f]"}`}
              role="status"
            >
              {status.message}
            </p>
          ) : null}

          <button
            type="submit"
            disabled={submitting}
            className={`tgt-contact-submit ${submitButtonClass}`}
            data-node-id="58:1891"
            data-name="Button"
            style={{
              backgroundImage:
                "url(\"data:image/svg+xml;utf8,<svg viewBox='0 0 514 48' xmlns='http://www.w3.org/2000/svg' preserveAspectRatio='none'><rect x='0' y='0' height='100%' width='100%' fill='url(%23grad)' opacity='1'/><defs><radialGradient id='grad' gradientUnits='userSpaceOnUse' cx='0' cy='0' r='10' gradientTransform='matrix(32.156 0 0 3.0029 144.64 -5.0016)'><stop stop-color='rgba(255,255,255,0.2)' offset='0'/><stop stop-color='rgba(255,255,255,0)' offset='1'/></radialGradient></defs></svg>\"), linear-gradient(143.4deg, rgb(64, 69, 74) 21.13%, rgb(41, 44, 46) 80.53%)",
              boxShadow:
                "0 3px 3px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.6), inset 0 -3px 0 #1a1a1a, inset 0 -4px 0 1px rgba(255, 255, 255, 0.1)",
            }}
          >
            {submitting ? "Submitting..." : "Submit Message"}
          </button>
        </form>

        <div className="tgt-contact-form-heading -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-secondary font-semibold justify-center leading-[0] left-[1045px] right-[76px] text-[#f9fafb] text-[39.591px] top-[60.22px] whitespace-nowrap" data-node-id="61:1911">
          <p className="leading-[39.591px]">{`Fill The Form & Get Noticed`}</p>
        </div>
      </div>
    </div>
  );
}
