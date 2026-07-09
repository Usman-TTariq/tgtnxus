"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

/**
 * Agenio index.html + main.js containerResize()
 * Same trigger, pin, scrub, scale 0.1→1 timeline.
 * pinReparent + runway added for scaled absolute page layout.
 */
export default function ProjectScrollAnimation() {
  useEffect(() => {
    const mm = gsap.matchMedia();

    mm.add("(min-width: 769px)", () => {
      gsap.registerPlugin(ScrollTrigger);

      const pinWrap = document.querySelector<HTMLElement>(".tgt-project-pin");
      const wrapper = document.querySelector<HTMLElement>(".tgt-project-video-wrapper");
      const slideContent = document.querySelector<HTMLElement>(".tgt-project-slide-content");
      const featureProject = document.querySelector<HTMLElement>(".feature-project");
      const runway = document.querySelector<HTMLElement>(".tgt-project-scroll-runway");

      if (!pinWrap || !wrapper || !slideContent || !featureProject) return;

      const syncRunway = () => {
        if (runway) runway.style.height = `${window.innerHeight}px`;
      };
      syncRunway();

      gsap.set(wrapper, {
        scale: 0.1,
        opacity: 0,
        transformOrigin: "center center",
        willChange: "transform, opacity",
      });

      gsap.set(slideContent, { opacity: 0, willChange: "opacity" });
      gsap.set(featureProject, { pointerEvents: "none" });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: pinWrap,
          start: "top top",
          end: () => "+=" + window.innerHeight,
          scrub: 0.8,
          pin: true,
          pinReparent: true,
          pinSpacing: false,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      tl.to(wrapper, { opacity: 1, duration: 0.25, ease: "power1.out" })
        .to(wrapper, { scale: 1, duration: 1.4, ease: "power2.out" })
        .to(slideContent, { opacity: 1, duration: 0.4, ease: "power1.out" }, ">")
        .to(featureProject, { pointerEvents: "auto" }, ">");

      const refresh = () => {
        syncRunway();
        ScrollTrigger.refresh();
      };

      window.addEventListener("resize", refresh);
      window.addEventListener("load", refresh);

      const timers = [window.setTimeout(refresh, 500), window.setTimeout(refresh, 1500)];
      requestAnimationFrame(() => requestAnimationFrame(refresh));

      return () => {
        timers.forEach(clearTimeout);
        window.removeEventListener("resize", refresh);
        window.removeEventListener("load", refresh);
        tl.scrollTrigger?.kill();
        tl.kill();
      };
    });

    return () => mm.revert();
  }, []);

  return null;
}
