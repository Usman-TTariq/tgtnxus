import BannerCtaButton from "./BannerCtaButton";

const BUSINESS_GROWTH_BG = "/assets/images/business-growth.png";

export default function TeamBusinessGrowth() {
  return (
    <section
      className="tgt-team-business-growth"
      aria-labelledby="team-business-growth-title"
    >
      <div className="tgt-team-business-growth-frame">
        <div className="tgt-team-business-growth-media" aria-hidden>
          <img
            alt=""
            className="tgt-team-business-growth-bg"
            src={BUSINESS_GROWTH_BG}
          />
        </div>

        <div className="tgt-team-business-growth-overlay">
          <div className="tgt-team-business-growth-panel">
            <div className="tgt-team-business-growth-eyebrow">
              <span className="tgt-team-business-growth-eyebrow-mark" aria-hidden />
              <span className="tgt-team-business-growth-eyebrow-text">BUSINESS GROWTH</span>
            </div>

            <h2 id="team-business-growth-title" className="tgt-team-business-growth-title">
              We Provide Outsourced IT Services For Small &amp; Mid-Sized Business
            </h2>

            <p className="tgt-team-business-growth-desc">
              Empowering small and mid-sized businesses with outsourced IT services to enhance
              efficiency, productivity, and scalability in a rapidly evolving digital world.
            </p>

            <BannerCtaButton
              href="/contact"
              label="Get Started"
              className="tgt-banner-cta--team-growth"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
