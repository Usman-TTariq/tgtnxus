"use client";

import BannerWordRotator from "./BannerWordRotator";
import BannerCtaButton from "./BannerCtaButton";

const HERO_IMAGE =
  "https://www.figma.com/api/mcp/asset/d533699e-53a0-4ee3-bbb0-08da1e5bd547";

const HERO_DESC =
  "At TGT Nexus, we help businesses thrive in the digital age with tailored web, design, and marketing solutions built for real growth.";

export default function BannerMobile() {
  return (
    <section className="tgt-banner-mobile md:hidden" aria-label="Hero">
      <div className="tgt-banner-mobile-inner">
        <div className="tgt-banner-mobile-visual">
          <img src={HERO_IMAGE} alt="" className="tgt-banner-mobile-image" />
        </div>

        <div className="tgt-banner-mobile-headline">
          <h1 className="tgt-banner-mobile-title">
            <span className="tgt-banner-mobile-we">We</span>
            <span className="tgt-banner-mobile-build">BUILD</span>
          </h1>
          <BannerWordRotator className="tgt-banner-mobile-rotator" />
        </div>

        <p className="tgt-banner-mobile-desc">{HERO_DESC}</p>

        <BannerCtaButton className="tgt-banner-mobile-cta" />
      </div>
    </section>
  );
}
