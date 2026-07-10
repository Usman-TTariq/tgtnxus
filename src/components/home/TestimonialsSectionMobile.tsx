"use client";

import { useRef } from "react";
import { TESTIMONIALS } from "./testimonials-data";

export default function TestimonialsSectionMobile() {
  const trackRef = useRef<HTMLDivElement>(null);

  const scrollByCard = (direction: -1 | 1) => {
    const track = trackRef.current;
    if (!track) return;

    const card = track.querySelector(".tgt-testimonials-mobile-card") as HTMLElement | null;
    const step = card?.offsetWidth ?? track.clientWidth;
    track.scrollBy({ left: direction * step, behavior: "smooth" });
  };

  return (
    <section className="tgt-testimonials-mobile md:hidden" aria-label="Testimonials">
      <div className="tgt-testimonials-mobile-label">
        <span className="tgt-testimonials-mobile-label-mark" aria-hidden />
        <span className="tgt-testimonials-mobile-label-text">Testimonials</span>
      </div>

      <div ref={trackRef} className="tgt-testimonials-mobile-track">
        {TESTIMONIALS.map((slide, index) => (
          <article key={slide.id} className="tgt-testimonials-mobile-card">
            <div className="tgt-testimonials-mobile-media">
              <img
                src={slide.image}
                alt=""
                width={360}
                height={240}
                className="tgt-testimonials-mobile-image"
                loading={index === 0 ? "eager" : "lazy"}
              />
            </div>

            <div className="tgt-testimonials-mobile-panel">
              <h2 className="tgt-testimonials-mobile-title">{slide.title}</h2>
              <p className="tgt-testimonials-mobile-quote">&ldquo;{slide.quote}&rdquo;</p>
              <div className="tgt-testimonials-mobile-author">
                <h3 className="tgt-testimonials-mobile-name">{slide.name}</h3>
                <p className="tgt-testimonials-mobile-role">{slide.role}</p>
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="tgt-testimonials-mobile-nav">
        <button
          type="button"
          className="tgt-testimonials-mobile-nav-btn"
          aria-label="Previous testimonial"
          onClick={() => scrollByCard(-1)}
        >
          <svg width="14" height="24" viewBox="0 0 17 30" fill="none" aria-hidden>
            <path
              d="M14.6094 0L0.859375 13.75L0 14.6484L0.859375 15.5469L14.6094 29.2969L16.4062 27.5L3.55469 14.6484L16.4062 1.79688L14.6094 0Z"
              fill="currentColor"
            />
          </svg>
        </button>
        <span className="tgt-testimonials-mobile-nav-label">Swipe for more stories</span>
        <button
          type="button"
          className="tgt-testimonials-mobile-nav-btn"
          aria-label="Next testimonial"
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
    </section>
  );
}
