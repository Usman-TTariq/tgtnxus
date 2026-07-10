"use client";

import { useRef } from "react";
import { VISION_HEADER, VISION_PROJECTS } from "./vision-data";

export default function VisionSectionMobile() {
  const trackRef = useRef<HTMLDivElement>(null);

  const scrollByCard = (direction: -1 | 1) => {
    const track = trackRef.current;
    if (!track) return;

    const card = track.querySelector(".tgt-vision-mobile-card") as HTMLElement | null;
    const step = card?.offsetWidth ?? track.clientWidth;
    track.scrollBy({ left: direction * step, behavior: "smooth" });
  };

  return (
    <section className="tgt-vision-mobile md:hidden" aria-label="Our vision">
      <div className="tgt-vision-mobile-header">
        <div className="tgt-vision-mobile-label">
          <span className="tgt-vision-mobile-label-mark" aria-hidden />
          <span className="tgt-vision-mobile-label-text">{VISION_HEADER.eyebrow}</span>
        </div>

        <h2 className="tgt-vision-mobile-title">{VISION_HEADER.titleLead}</h2>

        <div className="tgt-vision-mobile-thumb-row">
          <img
            src={VISION_HEADER.thumbImage}
            alt=""
            width={120}
            height={68}
            className="tgt-vision-mobile-thumb"
          />
          <p className="tgt-vision-mobile-title-tail">{VISION_HEADER.titleTrail}</p>
        </div>

        <p className="tgt-vision-mobile-desc">{VISION_HEADER.description}</p>
      </div>

      <div className="tgt-vision-mobile-carousel">
        <div ref={trackRef} className="tgt-vision-mobile-track">
          {VISION_PROJECTS.map((project, index) => (
            <article key={project.id} className="tgt-vision-mobile-card">
              <div className="tgt-vision-mobile-card-media">
                <img
                  src={project.image}
                  alt=""
                  width={360}
                  height={220}
                  className="tgt-vision-mobile-card-image"
                  loading={index === 0 ? "eager" : "lazy"}
                />
              </div>

              <div className="tgt-vision-mobile-card-panel">
                <div className="tgt-vision-mobile-card-top">
                  <span className="tgt-vision-mobile-card-index">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="tgt-vision-mobile-card-title">
                    <a href={project.href}>{project.title}</a>
                  </h3>
                  <p className="tgt-vision-mobile-card-text">{project.description}</p>
                </div>

                <ul className="tgt-vision-mobile-stats">
                  {project.stats.map((stat) => (
                    <li key={stat.label}>
                      <span className="tgt-vision-mobile-stat-value">{stat.value}</span>
                      <span className="tgt-vision-mobile-stat-label">{stat.label}</span>
                    </li>
                  ))}
                </ul>

                <a href={project.href} className="tgt-vision-mobile-card-link">
                  View project
                  <svg width="14" height="14" viewBox="0 0 18 18" fill="none" aria-hidden>
                    <path
                      d="M18 0V13.4751H16.5083V2.53591L1.0442 18L0 16.9061L15.4144 1.49171H4.47514V0H18Z"
                      fill="currentColor"
                    />
                  </svg>
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="tgt-vision-mobile-nav">
          <button
            type="button"
            className="tgt-vision-mobile-nav-btn"
            aria-label="Previous project"
            onClick={() => scrollByCard(-1)}
          >
            <svg width="14" height="24" viewBox="0 0 17 30" fill="none" aria-hidden>
              <path
                d="M14.6094 0L0.859375 13.75L0 14.6484L0.859375 15.5469L14.6094 29.2969L16.4062 27.5L3.55469 14.6484L16.4062 1.79688L14.6094 0Z"
                fill="currentColor"
              />
            </svg>
          </button>
          <span className="tgt-vision-mobile-nav-label">Swipe to explore projects</span>
          <button
            type="button"
            className="tgt-vision-mobile-nav-btn"
            aria-label="Next project"
            onClick={() => scrollByCard(1)}
          >
            <svg width="14" height="24" viewBox="0 0 17 30" fill="none" aria-hidden>
              <path
                d="M1.79688 0L0 1.79688L12.8516 14.6484L0 27.5L1.79688 29.2969L15.5469 15.5469L16.4062 14.6484L15.5469 13.75L1.79688 0Z"
                fill="currentColor"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
