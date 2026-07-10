import BannerCtaButton from "./BannerCtaButton";

const GRID_BG = "/agenio/assets/images/cta/grid.svg";

export default function TeamTalentCta() {
  return (
    <section className="tgt-team-talent-cta tgt-reveal" aria-labelledby="team-talent-cta-title">
      <img alt="" className="tgt-team-talent-cta-grid" src={GRID_BG} aria-hidden />

      <div className="tgt-team-talent-cta-content">
        <h2 id="team-talent-cta-title" className="tgt-team-talent-cta-title">
          We&apos;re Searching For Talents
        </h2>
        <p className="tgt-team-talent-cta-desc">
          Join our team of creatives pushing boundaries, experimenting with ideas
        </p>
        <BannerCtaButton
          href="/careers"
          label="Apply Now"
          className="tgt-banner-cta--apply"
        />
      </div>
    </section>
  );
}
