import ContactSection from "@/components/home/ContactSection";

type SiteContactSectionProps = {
  className?: string;
  /** inquiry = /contact page (message → info@). Default application keeps resume form. */
  formMode?: "application" | "inquiry";
};

/** Shared contact block — home form by default; /contact can pass inquiry mode. */
export default function SiteContactSection({
  className,
  formMode = "application",
}: SiteContactSectionProps) {
  const classes = className
    ? `site-chrome site-chrome-contact tgt-reveal ${className}`
    : "site-chrome site-chrome-contact tgt-reveal";

  return (
    <div className={classes}>
      <ContactSection formMode={formMode} />
    </div>
  );
}
