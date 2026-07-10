import BannerCtaButton from "@/components/home/BannerCtaButton";

const GRID_BG = "/agenio/assets/images/cta/grid.svg";
const SHAPE_TL = "/agenio/assets/images/careers/shape-top-left.svg";
const SHAPE_BR = "/agenio/assets/images/careers/shape-bottom-right.svg";

type GridPageHeroProps = {
  title: string;
  description: string;
  ctaHref?: string;
  titleStyle?: "banner" | "section";
};

export default function GridPageHero({
  title,
  description,
  ctaHref,
  titleStyle = "banner",
}: GridPageHeroProps) {
  return (
    <section
      className={`tgt-grid-page-hero tgt-grid-page-hero--${titleStyle} tgt-reveal`}
    >
      <img alt="" className="tgt-grid-page-hero-bg" src={GRID_BG} aria-hidden />
      <img alt="" className="tgt-grid-page-hero-shape tgt-grid-page-hero-shape--tl" src={SHAPE_TL} aria-hidden />
      <img alt="" className="tgt-grid-page-hero-shape tgt-grid-page-hero-shape--br" src={SHAPE_BR} aria-hidden />

      <div className="tgt-grid-page-hero-content">
        <h1 className="tgt-grid-page-hero-title">{title}</h1>
        <p className="tgt-grid-page-hero-desc">{description}</p>
        {ctaHref ? <BannerCtaButton href={ctaHref} /> : null}
      </div>
    </section>
  );
}
