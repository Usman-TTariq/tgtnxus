"use client";

import { useLayoutEffect, useRef } from "react";
import Swiper from "swiper";
import {
  Autoplay,
  Controller,
  EffectFade,
  Navigation,
} from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-fade";

const IMG = "/agenio/assets/images/testimonials";
const SHAPE = `${IMG}/top-left-shape.svg`;

const slides = [
  {
    image: "/agenio/assets/images/carousel-1.webp",
    title: "Beyond expectations",
    quote:
      "Working with this team completely transformed how we present our product. Their attention to detail and understanding of user experience helped us increase engagement beyond expectations.",
    name: "Daniel Lewis",
    role: "Founder, Lunaris Coffee Co.",
  },
  {
    image: "/agenio/assets/images/carousel-2.webp",
    title: "Professional experience",
    quote:
      "They delivered a sophisticated, modern brand that aligns perfectly with our values. Communication was seamless from start to finish — truly a professional experience.",
    name: "Michael Roberts",
    role: "CEO, Axis Legal Group",
  },
  {
    image: "/agenio/assets/images/carousel-3.webp",
    title: "Genuinely love",
    quote:
      "Their design process is smart, collaborative, and strategic. They understood our vision quickly and turned it into a product our users genuinely love.",
    name: "Jason Ward",
    role: "Product Manager, Brightly Studio",
  },
];

export default function TestimonialsSection() {
  const root = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const el = root.current;
    if (!el) return;

    const imageEl = el.querySelector(".testimonials-image-slider") as HTMLElement;
    const contentEl = el.querySelector(
      ".testimonials-content-slider"
    ) as HTMLElement;
    const prevBtn = el.querySelector(".swiper-btn-prev") as HTMLElement;
    const nextBtn = el.querySelector(".swiper-btn-next") as HTMLElement;

    if (!imageEl || !contentEl || !prevBtn || !nextBtn) return;

    const imageSwiper = new Swiper(imageEl, {
      modules: [Navigation, Controller, Autoplay],
      slidesPerView: 1,
      slidesPerGroup: 1,
      spaceBetween: 0,
      speed: 1800,
      loop: true,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
      navigation: {
        nextEl: nextBtn,
        prevEl: prevBtn,
      },
    });

    const contentSwiper = new Swiper(contentEl, {
      modules: [Controller, EffectFade],
      slidesPerView: 1,
      spaceBetween: 0,
      effect: "fade",
      speed: 1800,
      loop: true,
      autoplay: false,
      fadeEffect: {
        crossFade: true,
      },
    });

    imageSwiper.controller.control = contentSwiper;
    contentSwiper.controller.control = imageSwiper;

    return () => {
      imageSwiper.destroy(true, true);
      contentSwiper.destroy(true, true);
    };
  }, []);

  const loopSlides = [...slides, ...slides];

  return (
    <section ref={root} className="wpr-testimonials-area mb--16">
      <div className="container">
        <div className="section-inner border-1">
          <div className="swiper testimonials-image-slider">
            <div className="swiper-wrapper">
              {loopSlides.map((slide, i) => (
                <div className="swiper-slide" key={`img-${i}`}>
                  <div className="image-area">
                    <img src={slide.image} alt="" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="testimonials-panel">
            <div className="testimonials-label">
              <span className="testimonials-label-dot" aria-hidden />
              <span>TESTIMONIALS</span>
            </div>

            <div className="swiper testimonials-content-slider">
              <div className="swiper-wrapper">
                {loopSlides.map((slide, i) => (
                  <div className="swiper-slide" key={`content-${i}`}>
                    <div className="testimonials-content">
                      <div className="top">
                        <h2 className="title h5">{slide.title}</h2>
                        <p className="desc">&ldquo;{slide.quote}&rdquo;</p>
                      </div>
                      <div className="author-area">
                        <h3 className="h6">{slide.name}</h3>
                        <p>{slide.role}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="swiper-navigation">
              <div className="swiper-btn swiper-btn-prev">
                <svg
                  width="17"
                  height="30"
                  viewBox="0 0 17 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.6094 0L0.859375 13.75L0 14.6484L0.859375 15.5469L14.6094 29.2969L16.4062 27.5L3.55469 14.6484L16.4062 1.79688L14.6094 0Z"
                    fill="#F9FAFB"
                  />
                </svg>
              </div>
              <div className="swiper-btn swiper-btn-next">
                <svg
                  width="17"
                  height="30"
                  viewBox="0 0 17 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.79688 0L0 1.79688L12.8516 14.6484L0 27.5L1.79688 29.2969L15.5469 15.5469L16.4062 14.6484L15.5469 13.75L1.79688 0Z"
                    fill="#F9FAFB"
                  />
                </svg>
              </div>
            </div>
          </div>

          <div className="top-left-shape">
            <img src={SHAPE} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}
