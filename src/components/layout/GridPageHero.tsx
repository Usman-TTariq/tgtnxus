import BannerCtaButton from "@/components/home/BannerCtaButton";

const DEFAULT_GRID_BG = "/agenio/assets/images/cta/grid.svg";
const DEFAULT_SHAPE_TL = "/agenio/assets/images/careers/shape-top-left.svg";
const DEFAULT_SHAPE_BR = "/agenio/assets/images/careers/shape-bottom-right.svg";

type GridPageHeroProps = {
  title: string;
  description: string;
  ctaHref?: string;
  titleStyle?: "banner" | "section";
  variant?: "default" | "team";
  gridSrc?: string;
  shapeTopLeftSrc?: string;
  shapeBottomRightSrc?: string;
};

export default function GridPageHero({
  title,
  description,
  ctaHref,
  titleStyle = "banner",
  variant = "default",
  gridSrc = DEFAULT_GRID_BG,
  shapeTopLeftSrc = DEFAULT_SHAPE_TL,
  shapeBottomRightSrc = DEFAULT_SHAPE_BR,
}: GridPageHeroProps) {
  return (
    <section
      className={`tgt-grid-page-hero tgt-grid-page-hero--${titleStyle}${variant !== "default" ? ` tgt-grid-page-hero--${variant}` : ""} tgt-reveal`}
    >
      <img alt="" className="tgt-grid-page-hero-bg" src={gridSrc} aria-hidden />

      <div className="tgt-grid-page-hero-content">
        <h1 className="tgt-grid-page-hero-title">{title}</h1>
        <p className="tgt-grid-page-hero-desc">{description}</p>
        {ctaHref ? <BannerCtaButton href={ctaHref} /> : null}
      </div>
    </section>
  );
}
