type PageHeroProps = {
  eyebrow: string;
  title: string;
  description?: string;
};

export default function PageHero({ eyebrow, title, description }: PageHeroProps) {
  return (
    <div className="site-page-hero tgt-reveal mb-10 border border-solid border-[rgba(3,7,18,0.1)] bg-white px-8 py-14 md:px-14 md:py-20">
      <div className="site-page-hero-eyebrow mb-6 inline-flex items-center gap-3 bg-[#f3f4f6] px-6 py-1">
        <span className="size-[14px] shrink-0 bg-[#ba161c]" aria-hidden />
        <span className="tgt-sub-title text-[#030712]">{eyebrow}</span>
      </div>
      <h1 className="tgt-section-title mb-4 max-w-4xl text-[#030712]">{title}</h1>
      {description ? (
        <p className="tgt-body-muted max-w-2xl text-[#6b7280]">{description}</p>
      ) : null}
    </div>
  );
}
