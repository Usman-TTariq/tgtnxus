const jobs = [
  {
    title: "Sales Executive (International)",
    description:
      "Talk to global clients, close deals, and hit your sales targets every single month consistently.",
    icon: "/assets/images/sales-team-lead-icon.png",
  },
  {
    title: "eBook Front Sales",
    description:
      "Show customers our eBooks, answer their questions, and close new sales every day effectively here.",
    icon: "/assets/images/ebook-icon.png",
  },
  {
    title: "POS Sales Closer",
    description:
      "Assist customers at the counter, process payments quickly, and consistently meet your daily sales targets.",
    icon: "/assets/images/sales-team-lead-icon.png",
  },
  {
    title: "QA Executive",
    description:
      "Inspect products for quality, catch defects early, and verify everything meets our required standards fully.",
    icon: "/assets/images/qa-icon.png",
  },
] as const;

type CareersOpportunitiesProps = {
  className?: string;
};

export default function CareersOpportunities({ className }: CareersOpportunitiesProps) {
  const classes = className
    ? `tgt-careers-opportunities tgt-reveal ${className}`
    : "tgt-careers-opportunities tgt-reveal";

  return (
    <section className={classes} aria-labelledby="careers-opportunities-title">
      <div className="tgt-careers-opportunities-eyebrow">
        <span className="tgt-careers-opportunities-eyebrow-mark" aria-hidden />
        <span>OPPORTUNITIES</span>
      </div>

      <h2 id="careers-opportunities-title" className="tgt-careers-opportunities-title">
        <span className="tgt-careers-opportunities-highlight">We&apos;re hiring</span> across multiple
        roles for passionate professionals ready to make an impact. Explore our current openings and
        find the <span className="tgt-careers-opportunities-highlight">opportunity</span> that matches
        your skills and career goals.
      </h2>

      <div className="tgt-careers-opportunities-grid tgt-reveal-stagger">
        {jobs.map((job) => (
          <article key={job.title} className="tgt-job-card tgt-reveal-right">
            <span className="tgt-job-card-dot tgt-job-card-dot--tl" aria-hidden />
            <span className="tgt-job-card-dot tgt-job-card-dot--tr" aria-hidden />
            <span className="tgt-job-card-dot tgt-job-card-dot--bl" aria-hidden />
            <span className="tgt-job-card-dot tgt-job-card-dot--br" aria-hidden />

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

              <div className="tgt-job-card-visual" aria-hidden>
                <span className="tgt-job-card-icon-grid" />
                <img
                  className="tgt-job-card-icon"
                  src={job.icon}
                  alt=""
                  width={160}
                  height={160}
                />
              </div>
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
