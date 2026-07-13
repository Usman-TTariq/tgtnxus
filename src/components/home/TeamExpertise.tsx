"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const EXPERTISE_ITEMS = [
  { index: "01", label: "Branding", percent: 80 },
  { index: "02", label: "Web Designing & Development", percent: 65 },
  { index: "03", label: "Web App Development", percent: 70 },
  { index: "04", label: "Mobile App Development", percent: 80 },
  { index: "05", label: "Content Writing", percent: 65 },
  { index: "06", label: "Digital Marketing", percent: 70 },
] as const;

export default function TeamExpertise() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const rows = gsap.utils.toArray<HTMLElement>(".tgt-team-expertise-row");

      rows.forEach((row, i) => {
        const fill = row.querySelector<HTMLElement>(".tgt-team-expertise-bar-fill");
        const percentEl = row.querySelector<HTMLElement>(".tgt-team-expertise-percent");
        if (!fill || !percentEl) return;

        const target = Number(fill.dataset.percent ?? 0);
        const counter = { val: 0 };

        const trigger = {
          trigger: row,
          start: "top 88%",
          toggleActions: "play none none none",
        };

        gsap.fromTo(
          fill,
          { width: "0%" },
          {
            width: `${target}%`,
            duration: 1.15,
            ease: "power2.out",
            delay: i * 0.08,
            scrollTrigger: trigger,
          }
        );

        gsap.to(counter, {
          val: target,
          duration: 1.15,
          ease: "power2.out",
          delay: i * 0.08,
          scrollTrigger: trigger,
          onUpdate: () => {
            percentEl.textContent = `${Math.round(counter.val)}%`;
          },
        });
      });
    }, sectionRef);

    const refresh = () => ScrollTrigger.refresh();
    window.addEventListener("resize", refresh);
    const t = window.setTimeout(refresh, 400);

    return () => {
      window.removeEventListener("resize", refresh);
      window.clearTimeout(t);
      ctx.revert();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="tgt-team-expertise"
      aria-labelledby="team-expertise-title"
    >
      <header className="tgt-team-expertise-header tgt-reveal">
        <div className="tgt-team-expertise-eyebrow">
          <span className="tgt-team-expertise-eyebrow-mark" aria-hidden />
          <span>OUR EXPERTISE</span>
        </div>
        <h2 id="team-expertise-title" className="tgt-team-expertise-title">
          Driving Success With 12+ Years Of Proven IT Solutions.
        </h2>
      </header>

      <div className="tgt-team-expertise-grid tgt-reveal">
        {EXPERTISE_ITEMS.map(({ index, label, percent }) => (
          <div key={index} className="tgt-team-expertise-row">
            <div className="tgt-team-expertise-label">
              <span className="tgt-team-expertise-index">/ {index}</span>
              <span className="tgt-team-expertise-name">{label}</span>
            </div>

            <div className="tgt-team-expertise-stat">
              <span className="tgt-team-expertise-workflow">/WORKFLOW</span>
              <div className="tgt-team-expertise-bar-wrap">
                <div className="tgt-team-expertise-bar-track" aria-hidden>
                  <div
                    className="tgt-team-expertise-bar-fill"
                    data-percent={percent}
                    style={{ width: "0%" }}
                  >
                    <span className="tgt-team-expertise-bar-knob" aria-hidden />
                  </div>
                </div>
                <span className="tgt-team-expertise-percent" data-percent={percent}>
                  0%
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
