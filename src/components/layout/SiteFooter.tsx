import Footer from "@/components/home/Footer";

type SiteFooterProps = {
  className?: string;
};

/** Shared site footer — home-identical on every page. */
export default function SiteFooter({ className }: SiteFooterProps) {
  const classes = className ? `site-chrome site-chrome-footer ${className}` : "site-chrome site-chrome-footer";

  return (
    <div className={classes}>
      <div className="site-chrome-footer-inner tgt-reveal">
        <Footer />
      </div>
    </div>
  );
}
