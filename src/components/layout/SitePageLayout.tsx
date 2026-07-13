"use client";

import { useEffect, useRef } from "react";
import SiteAnimations from "@/components/animations/SiteAnimations";
import SiteFooter from "@/components/layout/SiteFooter";
import SiteHeader from "@/components/layout/SiteHeader";

type SitePageLayoutProps = {
  children: React.ReactNode;
  /** Sit first block flush under header (no extra top padding). */
  heroFlush?: boolean;
};

export default function SitePageLayout({ children, heroFlush = false }: SitePageLayoutProps) {
  const innerRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const inner = innerRef.current;
    const wrapper = wrapperRef.current;
    if (!inner || !wrapper) return;

    const syncHeight = () => {
      const vw = window.innerWidth;
      if (vw >= 769 && vw <= 1919) {
        const scale = vw / 1920;
        wrapper.style.height = `${inner.offsetHeight * scale}px`;
      } else {
        wrapper.style.height = "";
      }
    };

    syncHeight();
    const ro = new ResizeObserver(syncHeight);
    ro.observe(inner);
    window.addEventListener("resize", syncHeight);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", syncHeight);
    };
  }, [children]);

  const mainClass = [
    "site-page-canvas-main",
    "site-page-main",
    "px-4 min-[769px]:px-0",
    "pb-0",
    heroFlush ? "site-page-main--hero-flush pt-0" : "pt-6 min-[769px]:pt-8",
  ].join(" ");

  return (
    <>
      <SiteAnimations />
      <div className="site-page bg-[#f3f4f6]">
        <div ref={wrapperRef} className="site-page-canvas-wrapper">
          <div ref={innerRef} className="site-page-canvas-inner">
            <SiteHeader />
            <main className={mainClass}>{children}</main>
            <div className="site-page-canvas-footer px-4 min-[769px]:px-0 pb-0">
              <SiteFooter />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
