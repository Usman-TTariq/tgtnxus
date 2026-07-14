import TeamBusinessGrowth from "./TeamBusinessGrowth";
import TeamExpertise from "./TeamExpertise";
import TeamTalentCta from "./TeamTalentCta";

const SHAPE_TR = "/agenio/assets/images/team/shape-top-right.svg";
const TEAM_IMAGE = (file: string) => `/assets/images/${file}`;

const LINKEDIN_ICON = "/agenio/assets/images/team/linkedin.svg";

const leaders = [
  {
    name: "Usman Rogatia",
    role: "CEO",
    variant: "photo" as const,
    image: TEAM_IMAGE("usman-ragatia-img.png"),
    photoClass: "tgt-team-card-photo--usman",
    linkedin: "https://www.linkedin.com/in/usman-rogatia-49727a70/",
  },
  {
    name: "Ibad Alvi",
    role: "Managing Director",
    variant: "placeholder" as const,
    linkedin: "https://www.linkedin.com/in/ibad-alvi-92711b96/",
  },
  {
    name: "Tariq Fattani",
    role: "Managing Director",
    variant: "photo" as const,
    image: TEAM_IMAGE("tariq-fattani.png"),
    linkedin: "#", // TODO: add LinkedIn URL
  },
  {
    name: "Junaid Hanif",
    role: "Managing Director",
    variant: "photo" as const,
    image: TEAM_IMAGE("junaid-hanif.png"),
    photoClass: "tgt-team-card-photo--junaid",
    linkedin: "#", // TODO: add LinkedIn URL
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

type Leader = (typeof leaders)[number];

function LeaderCard({ name, role, variant, ...rest }: Leader) {
  const image = variant === "photo" ? rest.image : undefined;
  const photoClass =
    variant === "photo" && "photoClass" in rest && rest.photoClass
      ? rest.photoClass
      : "";
  const linkedin =
    "linkedin" in rest && rest.linkedin ? rest.linkedin : "#";
  const hasLinkedin = Boolean(linkedin && linkedin !== "#");

  return (
    <article className={`tgt-team-card tgt-team-card--${variant} tgt-reveal-right`}>
      <div className="tgt-team-card-media">
        {variant === "photo" && image ? (
          <img
            src={image}
            alt={name}
            className={`tgt-team-card-photo${photoClass ? ` ${photoClass}` : ""}`}
          />
        ) : (
          <PersonSilhouette />
        )}
        <img src={SHAPE_TR} alt="" className="tgt-team-card-decor" aria-hidden />
      </div>

      <div className="tgt-team-card-info">
        <h3 className="tgt-team-name">{name}</h3>
        <p className="tgt-team-role">{role}</p>
        <div className="tgt-team-card-social">
          <ul>
            <li>
              <a
                href={linkedin}
                {...(hasLinkedin
                  ? { target: "_blank" as const, rel: "noopener noreferrer" }
                  : {})}
                aria-label={`${name} on LinkedIn`}
              >
                <img src={LINKEDIN_ICON} alt="" width={20} height={20} aria-hidden />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </article>
  );
}

export default function TeamSection() {
  return (
    <section id="team" className="tgt-team-section">
      <div className="tgt-team-leaders">
        <header className="tgt-team-section-header tgt-reveal">
          <div className="tgt-team-section-eyebrow">
            <span className="tgt-team-section-eyebrow-mark" aria-hidden />
            <span>OUR LEADERS</span>
          </div>
          <h2 className="tgt-team-section-title">The People Behind TGT Nexus</h2>
        </header>

        <div className="tgt-team-grid tgt-reveal-stagger">
          {leaders.map((leader) => (
            <LeaderCard key={leader.name} {...leader} />
          ))}
        </div>
      </div>

      <TeamTalentCta />
      <TeamBusinessGrowth />
      <TeamExpertise />
    </section>
  );
}
