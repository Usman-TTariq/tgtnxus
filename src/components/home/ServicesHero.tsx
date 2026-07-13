const SERVICES_HERO_BG = "/assets/images/Border.png";

const SERVICES_HERO_DESC =
  "Transform, adapt, and build cutting-edge digital products and solutions tailored to your business needs.";

export default function ServicesHero() {
  return (
    <section className="tgt-team-hero" aria-labelledby="services-hero-title">
      <img alt="" className="tgt-team-hero-bg" src={SERVICES_HERO_BG} aria-hidden />

      <div className="tgt-team-hero-content">
        <h1 id="services-hero-title" className="tgt-team-hero-title">
          Empowering Businesses through Innovation
        </h1>
        <p className="tgt-team-hero-desc">{SERVICES_HERO_DESC}</p>
      </div>
    </section>
  );
}
