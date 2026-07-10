"use client";

const ARROW_ICON = "/agenio/assets/images/icon/button-arrow.svg";
const ARROW_FIXED = "/agenio/assets/images/icon/button-arrow-fixed.svg";

type BannerCtaButtonProps = {
  className?: string;
  href?: string;
  label?: string;
};

export default function BannerCtaButton({
  className = "",
  href = "/contact",
  label = "Start your journey today",
}: BannerCtaButtonProps) {
  return (
    <a href={href} className={`tgt-banner-cta ${className}`.trim()}>
      <span className="tgt-btn-icon-inner" aria-hidden>
        <span className="tgt-btn-icon-track">
          <span className="tgt-btn-arrow tgt-btn-arrow-fixed">
            <img src={ARROW_FIXED} alt="" width={19} height={24} />
          </span>
          {Array.from({ length: 6 }).map((_, i) => (
            <span key={i} className="tgt-btn-arrow">
              <img src={ARROW_ICON} alt="" width={19} height={24} />
            </span>
          ))}
        </span>
      </span>
      <span className="tgt-banner-cta-label">{label}</span>
    </a>
  );
}
