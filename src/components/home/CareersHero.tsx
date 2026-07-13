import GridPageHero from "@/components/layout/GridPageHero";

const CAREERS_HERO_BG = "/assets/images/Border.png";

export default function CareersHero() {
  return (
    <GridPageHero
      title="Career Opportunities"
      description="Discover exciting career opportunities at TGT Nexus. If you're passionate about technology and innovation, we'd love to hear from you. Apply today and grow with us."
      ctaHref="#contact"
      titleStyle="section"
      gridSrc={CAREERS_HERO_BG}
      showShapes={false}
    />
  );
}
