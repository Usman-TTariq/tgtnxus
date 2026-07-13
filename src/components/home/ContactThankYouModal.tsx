"use client";

import { useEffect } from "react";
import { createPortal } from "react-dom";
import { LOGO_MARK, LOGO_TYPE } from "@/lib/brand";

type ContactThankYouModalProps = {
  open: boolean;
  title: string;
  description: string;
  onClose: () => void;
};

export default function ContactThankYouModal({
  open,
  title,
  description,
  onClose,
}: ContactThankYouModalProps) {
  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open, onClose]);

  if (!open || typeof document === "undefined") return null;

  return createPortal(
    <div
      className="tgt-contact-thanks"
      role="dialog"
      aria-modal="true"
      aria-labelledby="tgt-contact-thanks-title"
    >
      <button
        type="button"
        className="tgt-contact-thanks-backdrop"
        aria-label="Close thank you dialog"
        onClick={onClose}
      />

      <div className="tgt-contact-thanks-card">
        <div className="tgt-contact-thanks-glow" aria-hidden />

        <div className="tgt-contact-thanks-logo">
          <img src={LOGO_MARK} alt="" width={40} height={40} />
          <img src={LOGO_TYPE} alt="TGT Nexus" width={140} height={24} />
        </div>

        <h2 id="tgt-contact-thanks-title" className="tgt-contact-thanks-title">
          {title}
        </h2>
        <p className="tgt-contact-thanks-copy">{description}</p>

        <button type="button" className="tgt-contact-thanks-btn" onClick={onClose}>
          Continue
        </button>
      </div>
    </div>,
    document.body
  );
}
