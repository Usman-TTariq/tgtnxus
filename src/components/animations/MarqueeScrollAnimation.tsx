"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function shiftPx(el: HTMLElement, percent: number) {
  return (el.offsetWidth * percent) / 100;
}

/**
 * Agenio main.js scrollingText / scrollingText2
 * Uses section trigger + pixel shift (works with scaled absolute layout).
 */
export default function MarqueeScrollAnimation() {
  useEffect(() => {
    const mm = gsap.matchMedia();

    mm.add("(min-width: 769px)", () => {
      gsap.registerPlugin(ScrollTrigger);

      const area = document.querySelector<HTMLElement>(".tgt-marquee-area");
      const row1 = document.querySelector<HTMLElement>(".tgt-scrollingtext-1");
      const row2 = document.querySelector<HTMLElement>(".tgt-scrollingtext-2");

      if (!area || !row1 || !row2) return;

      gsap.set(row1, { x: 0, force3D: true });
      gsap.set(row2, { x: 0, force3D: true });

      const scrollConfig = {
        trigger: area,
        start: "top bottom",
        end: "bottom top",
        scrub: 1,
        invalidateOnRefresh: true,
      };

      const tween1 = gsap.to(row1, {
        x: () => shiftPx(row1, 2),
        ease: "none",
        scrollTrigger: scrollConfig,
      });

      const tween2 = gsap.to(row2, {
        x: () => -shiftPx(row2, 10),
        ease: "none",
        scrollTrigger: { ...scrollConfig },
      });

      const refresh = () => ScrollTrigger.refresh();

      window.addEventListener("resize", refresh);
      window.addEventListener("load", refresh);

      const timers = [window.setTimeout(refresh, 400), window.setTimeout(refresh, 1200)];
      requestAnimationFrame(() => requestAnimationFrame(refresh));

      return () => {
        timers.forEach(clearTimeout);
        window.removeEventListener("resize", refresh);
        window.removeEventListener("load", refresh);
        tween1.scrollTrigger?.kill();
        tween2.scrollTrigger?.kill();
        tween1.kill();
        tween2.kill();
      };
    });

    return () => mm.revert();
  }, []);

  return null;
}
