import Link from "next/link";
import { CTA_DESC, CTA_TITLE, OPEN_ROLES } from "./careers-contact-data";

export default function CtaSectionMobile() {
  return (
    <section className="tgt-cta-mobile md:hidden" aria-label="Start your career">
      <div className="tgt-cta-mobile-card">
        <div className="tgt-cta-mobile-intro">
          <div className="tgt-cta-mobile-label">
            <span className="tgt-cta-mobile-label-mark" aria-hidden />
            <span className="tgt-cta-mobile-label-text">Careers</span>
          </div>

          <h2 className="tgt-cta-mobile-title">
            {CTA_TITLE.line1}
            <span className="tgt-cta-mobile-title-accent">{CTA_TITLE.line2}</span>
          </h2>

          <p className="tgt-cta-mobile-desc">{CTA_DESC}</p>
        </div>

        <div className="tgt-cta-mobile-roles-wrap">
          <p className="tgt-cta-mobile-roles-label">Open roles</p>
          <ul className="tgt-cta-mobile-roles" aria-label="Current openings">
            {OPEN_ROLES.map((role) => (
              <li key={role}>
                <span className="tgt-cta-mobile-role">{role}</span>
              </li>
            ))}
          </ul>
        </div>

        <Link href="#contact" className="tgt-cta-mobile-btn">
          Apply now
          <svg viewBox="0 0 24 24" fill="none" aria-hidden>
            <path
              d="M10 8L14 12L10 16"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Link>
      </div>
    </section>
  );
}
