import CtaSection from "@/components/home/CtaSection";

type SiteCtaSectionProps = {
  className?: string;
};

/** Shared careers CTA — home-identical on every page. */
export default function SiteCtaSection({ className }: SiteCtaSectionProps) {
  const classes = className
    ? `site-chrome site-chrome-cta tgt-reveal ${className}`
    : "site-chrome site-chrome-cta tgt-reveal";

  return (
    <div className={classes}>
      <CtaSection />
    </div>
  );
}
