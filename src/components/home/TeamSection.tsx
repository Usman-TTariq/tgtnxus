import TeamTalentCta from "./TeamTalentCta";

const SHAPE_TR = "/agenio/assets/images/team/shape-top-right.svg";

const leaders = [
  {
    name: "Usman Rogatia",
    role: "CEO",
    variant: "photo" as const,
    tone: "warm",
  },
  {
    name: "Ibad Alvi",
    role: "Managing Director",
    variant: "placeholder" as const,
  },
  {
    name: "Tariq Fattani",
    role: "Managing Director",
    variant: "photo" as const,
    tone: "light",
  },
  {
    name: "Junaid Hanif",
    role: "Managing Director",
    variant: "placeholder" as const,
  },
];

function PersonSilhouette() {
  return (
    <svg viewBox="0 0 120 160" fill="none" aria-hidden className="tgt-team-card-silhouette">
      <circle cx="60" cy="46" r="26" fill="#fff" fillOpacity="0.92" />
      <path
        d="M18 160C18 112 36 96 60 96C84 96 102 112 102 160H18Z"
        fill="#fff"
        fillOpacity="0.92"
      />
    </svg>
  );
}

function LeaderCard({
  name,
  role,
  variant,
  tone,
}: (typeof leaders)[number]) {
  return (
    <article className={`tgt-team-card tgt-team-card--${variant} tgt-reveal-right`}>
      <div className={`tgt-team-card-media${tone ? ` tgt-team-card-media--${tone}` : ""}`}>
        {variant === "placeholder" ? (
          <>
            <img src={SHAPE_TR} alt="" className="tgt-team-card-decor" aria-hidden />
            <PersonSilhouette />
          </>
        ) : null}
      </div>

      <div className="tgt-team-card-info">
        <h3 className="tgt-team-name">{name}</h3>
        <p className="tgt-team-role">{role}</p>
      </div>
    </article>
  );
}

export default function TeamSection() {
  return (
    <section id="team" className="tgt-team-section">
      <div className="tgt-team-grid tgt-reveal-stagger">
        {leaders.map((leader) => (
          <LeaderCard key={leader.name} {...leader} />
        ))}
      </div>

      <TeamTalentCta />
    </section>
  );
}
