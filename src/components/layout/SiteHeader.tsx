import Header from "@/components/home/Header";

type SiteHeaderProps = {
  className?: string;
};

/** Shared site header — hiring bar + navbar (home-identical on every page). */
export default function SiteHeader({ className }: SiteHeaderProps) {
  const classes = className ? `site-chrome site-chrome-header ${className}` : "site-chrome site-chrome-header";

  return (
    <div className={classes}>
      <Header />
    </div>
  );
}
