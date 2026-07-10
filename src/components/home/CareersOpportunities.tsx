const jobs = [
  {
    title: "Sales Team Lead",
    description:
      "You will do this this this and then this lorem ipsum dolor sit good work.",
    icon: "sales" as const,
  },
  {
    title: "UI/UX Designer",
    description:
      "You will do this this this and then this lorem ipsum dolor sit good work.",
    icon: "design" as const,
  },
  {
    title: "Web Developer",
    description:
      "You will do this this this and then this lorem ipsum dolor sit good work.",
    icon: "developer" as const,
  },
  {
    title: "SEO Executive",
    description:
      "You will do this this this and then this lorem ipsum dolor sit good work.",
    icon: "seo" as const,
  },
];

function JobIcon({ type }: { type: (typeof jobs)[number]["icon"] }) {
  return (
    <div className={`tgt-job-card-icon-art tgt-job-card-icon-art--${type}`} aria-hidden>
      {type === "sales" && <span className="tgt-job-card-icon-glyph">$</span>}
      {type === "design" && (
        <svg viewBox="0 0 64 64" fill="none">
          <rect x="8" y="12" width="48" height="36" rx="4" stroke="currentColor" strokeWidth="2.5" />
          <line x1="8" y1="22" x2="56" y2="22" stroke="currentColor" strokeWidth="2.5" />
          <rect x="14" y="28" width="14" height="3" rx="1.5" fill="currentColor" />
          <rect x="14" y="35" width="24" height="3" rx="1.5" fill="currentColor" opacity="0.55" />
        </svg>
      )}
      {type === "developer" && (
        <svg viewBox="0 0 64 64" fill="none">
          <rect x="6" y="14" width="52" height="34" rx="4" stroke="currentColor" strokeWidth="2.5" />
          <path d="M22 36L16 30L22 24" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M42 36L48 30L42 24" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M34 38L28 22" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
          <rect x="6" y="50" width="52" height="4" rx="1" fill="currentColor" opacity="0.35" />
        </svg>
      )}
      {type === "seo" && (
        <svg viewBox="0 0 64 64" fill="none">
          <rect x="8" y="12" width="48" height="36" rx="4" stroke="currentColor" strokeWidth="2.5" />
          <circle cx="38" cy="30" r="8" stroke="currentColor" strokeWidth="2.5" />
          <line x1="44" y1="36" x2="50" y2="42" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
          <text x="14" y="34" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="var(--font-primary)">
            SEO
          </text>
        </svg>
      )}
    </div>
  );
}

export default function CareersOpportunities() {
  return (
    <section className="tgt-careers-opportunities tgt-reveal">
      <div className="tgt-careers-opportunities-eyebrow">
        <span className="tgt-careers-opportunities-eyebrow-mark" aria-hidden />
        <span>OPPORTUNITIES</span>
      </div>

      <h2 className="tgt-careers-opportunities-title">
        <span className="tgt-careers-opportunities-highlight">We&apos;re hiring</span> across multiple roles for
        passionate professionals ready to make an impact. Explore our current openings and find the{" "}
        <span className="tgt-careers-opportunities-highlight">opportunity</span> that matches your skills and career
        goals.
      </h2>

      <div className="tgt-careers-opportunities-grid tgt-reveal-stagger">
        {jobs.map((job) => (
          <article key={job.title} className="tgt-job-card tgt-reveal-right">
            <div className="tgt-job-card-body">
              <h3 className="tgt-job-card-title">{job.title}</h3>
              <p className="tgt-job-card-desc">{job.description}</p>
            </div>
            <div className="tgt-job-card-footer">
              <a href="#contact" className="tgt-job-card-btn" aria-label={`Apply for ${job.title}`}>
                <svg viewBox="0 0 24 24" fill="none" aria-hidden>
                  <path
                    d="M10 8L14 12L10 16"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
              <JobIcon type={job.icon} />
            </div>
          </article>
        ))}
      </div>

      <p className="tgt-careers-opportunities-more">&amp; More opportunities are waiting for you!</p>
      <a href="#contact" className="tgt-careers-opportunities-apply">
        Apply Now
      </a>
    </section>
  );
}
