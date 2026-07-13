const TEAM_HERO_BG = "/assets/images/Border.png";

const TEAM_HERO_DESC =
  "Behind every successful project is a team of visionary leaders committed to innovation, excellence, and client success. Meet the CEO and Directors who guide TGT Nexus with expertise, integrity, and a passion for delivering outstanding digital solutions.";

export default function TeamHero() {
  return (
    <section className="tgt-team-hero" aria-labelledby="team-hero-title">
      <img alt="" className="tgt-team-hero-bg" src={TEAM_HERO_BG} aria-hidden />

      <div className="tgt-team-hero-content">
        <h1 id="team-hero-title" className="tgt-team-hero-title">
          Meet Our Leadership
        </h1>
        <p className="tgt-team-hero-desc">{TEAM_HERO_DESC}</p>
      </div>
    </section>
  );
}
