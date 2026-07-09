"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function HomeAnimations() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Scroll reveal — fade up
      gsap.utils.toArray<HTMLElement>(".tgt-reveal").forEach((el) => {
        gsap.to(el, {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 90%",
            toggleActions: "play none none none",
          },
        });
      });

      // Scroll reveal — fade from left
      gsap.utils.toArray<HTMLElement>(".tgt-reveal-left").forEach((el) => {
        gsap.to(el, {
          opacity: 1,
          x: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 90%",
            toggleActions: "play none none none",
          },
        });
      });

      // Scroll reveal — fade from right (staggered children)
      gsap.utils.toArray<HTMLElement>(".tgt-reveal-stagger").forEach((container) => {
        const items = container.querySelectorAll<HTMLElement>(".tgt-reveal-right");
        if (!items.length) return;
        gsap.to(items, {
          opacity: 1,
          x: 0,
          duration: 0.8,
          ease: "power2.out",
          stagger: 0.15,
          scrollTrigger: {
            trigger: container,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        });
      });

      // Text title line reveal
      gsap.utils.toArray<HTMLElement>(".tgt-quote-reveal").forEach((el) => {
        gsap.from(el, {
          y: 60,
          opacity: 0,
          duration: 0.7,
          ease: "circ.out",
          delay: 0.2,
          scrollTrigger: {
            trigger: el,
            start: "top 88%",
            toggleActions: "play none none none",
          },
        });
      });

      // Image parallax on scroll
      gsap.utils.toArray<HTMLElement>(".tgt-parallax-img").forEach((img) => {
        const wrap = img.closest(".tgt-parallax-wrap") ?? img.parentElement;
        if (!wrap) return;

        gsap.fromTo(
          img,
          { scale: 1.25, opacity: 0 },
          {
            scale: 1,
            opacity: 1,
            duration: 1.2,
            ease: "power2.out",
            scrollTrigger: {
              trigger: wrap,
              start: "top 90%",
              toggleActions: "play none none none",
            },
          }
        );

        gsap.to(img, {
          yPercent: 15,
          ease: "none",
          scrollTrigger: {
            trigger: wrap,
            start: "top bottom",
            end: "bottom top",
            scrub: 1,
          },
        });
      });
    });

    const handleResize = () => ScrollTrigger.refresh();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      ctx.revert();
    };
  }, []);

  return null;
}
