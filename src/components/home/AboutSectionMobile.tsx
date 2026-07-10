import { ABOUT_FEATURES, ABOUT_IMAGE, ABOUT_INTRO, ABOUT_PATTERN, ABOUT_TAGLINE } from "./about-data";

export default function AboutSectionMobile() {
  return (
    <div className="tgt-about-mobile md:hidden" aria-label="About us">
      <div className="tgt-about-mobile-card">
        <div className="tgt-about-mobile-intro">
          <div className="tgt-about-mobile-label">
            <span className="tgt-about-mobile-label-mark" aria-hidden />
            <span className="tgt-about-mobile-label-text">About us</span>
          </div>

          <p className="tgt-about-mobile-quote">
            <span className="tgt-about-mobile-brand">TGT Nexus</span> {ABOUT_INTRO}
          </p>
        </div>

        <div className="tgt-about-mobile-divider" aria-hidden />

        <p className="tgt-about-mobile-tagline">{ABOUT_TAGLINE}</p>

        <ul className="tgt-about-mobile-features">
          {ABOUT_FEATURES.map((feature) => {
            const Icon = feature.icon;
            return (
              <li key={feature.title} className="tgt-about-mobile-feature">
                <div className="tgt-about-mobile-feature-icon">
                  <Icon />
                </div>
                <div className="tgt-about-mobile-feature-body">
                  <h3 className="tgt-about-mobile-feature-title">{feature.title}</h3>
                  <p className="tgt-about-mobile-feature-desc">{feature.description}</p>
                </div>
              </li>
            );
          })}
        </ul>

        <div className="tgt-about-mobile-image-wrap">
          <img
            src={ABOUT_IMAGE}
            alt="TGT Nexus team and leadership"
            className="tgt-about-mobile-image"
          />
        </div>
      </div>

      <div className="tgt-about-mobile-pattern" aria-hidden>
        <img src={ABOUT_PATTERN} alt="" />
      </div>
    </div>
  );
}
