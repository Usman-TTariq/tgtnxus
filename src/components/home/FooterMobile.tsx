import Link from "next/link";
import { FOOTER_LOGO, FOOTER_NAV, FOOTER_SOCIAL } from "./footer-data";

export default function FooterMobile() {
  return (
    <footer className="tgt-footer-mobile md:hidden" aria-label="Site footer">
      <div className="tgt-footer-mobile-card">
        <nav className="tgt-footer-mobile-nav" aria-label="Footer navigation">
          {FOOTER_NAV.map((item) => (
            <Link key={item.href} href={item.href} className="tgt-footer-mobile-nav-link">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="tgt-footer-mobile-logo-wrap">
          <Link href="/" className="tgt-footer-mobile-logo-link">
            <img src={FOOTER_LOGO} alt="TGT Nexus" className="tgt-footer-mobile-logo" />
          </Link>
        </div>

        <div className="tgt-footer-mobile-bottom">
          <ul className="tgt-footer-mobile-social">
            {FOOTER_SOCIAL.map((label) => (
              <li key={label}>
                <span className="tgt-footer-mobile-social-item">{label}</span>
              </li>
            ))}
          </ul>

          <p className="tgt-footer-mobile-copy">&copy; 2026 TGTNexus - All Rights Reserved</p>

          <p className="tgt-footer-mobile-legal">Terms &amp; Conditions | Privacy Policy</p>
        </div>
      </div>
    </footer>
  );
}
