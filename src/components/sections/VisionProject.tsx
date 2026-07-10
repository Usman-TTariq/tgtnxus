"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Swiper from "swiper";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

gsap.registerPlugin(ScrollTrigger);

function syncThumbScale(wrapper: HTMLElement, thumb: HTMLElement) {
  const thumbRect = thumb.getBoundingClientRect();
  const wrapRect = wrapper.getBoundingClientRect();

  if (!wrapRect.width || !wrapRect.height) {
    gsap.set(wrapper, {
      scale: 0.1,
      autoAlpha: 0,
      transformOrigin: "center center",
    });
    return 0.1;
  }

  const originX =
    ((thumbRect.left + thumbRect.width / 2 - wrapRect.left) / wrapRect.width) *
    100;
  const originY =
    ((thumbRect.top + thumbRect.height / 2 - wrapRect.top) / wrapRect.height) *
    100;
  const startScale = thumbRect.width / wrapRect.width;

  gsap.set(wrapper, {
    scale: startScale,
    autoAlpha: 0,
    transformOrigin: `${originX}% ${originY}%`,
    force3D: true,
    willChange: "transform, opacity",
  });

  gsap.set(thumb, {
    autoAlpha: 1,
    scale: 1,
    transformOrigin: "center center",
    force3D: true,
  });

  return startScale;
}

export default function VisionProject() {
  const root = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const el = root.current;
    if (!el) return;

    const swiper = new Swiper(
      el.querySelector(".project-slider") as HTMLElement,
      {
        modules: [Navigation],
        slidesPerView: 1,
        slidesPerGroup: 1,
        spaceBetween: 0,
        speed: 1300,
        loop: false,
        autoplay: false,
        navigation: {
          nextEl: el.querySelector(".slider-next") as HTMLElement,
          prevEl: el.querySelector(".slider-prev") as HTMLElement,
        },
      }
    );

    const onLoad = () => ScrollTrigger.refresh();
    window.addEventListener("load", onLoad);

    const refreshTimers = [
      window.setTimeout(() => ScrollTrigger.refresh(), 400),
      window.setTimeout(() => ScrollTrigger.refresh(), 1200),
    ];

    let mm: gsap.MatchMedia | undefined;

    const ctx = gsap.context(() => {
      mm = gsap.matchMedia();

      mm.add("(min-width: 769px)", () => {
        const pinWrap = el.querySelector(".wpr-video-pin") as HTMLElement;
        const floatingContent = el.querySelector(
          ".floating-content"
        ) as HTMLElement;
        const wrapper = el.querySelector(".wpr-video-wrapper") as HTMLElement;
        const thumb = el.querySelector(
          ".vision-inline-thumb"
        ) as HTMLElement;
        const runway = el.querySelector(
          ".wpr-project-scroll-runway"
        ) as HTMLElement;
        const slideContents = wrapper?.querySelectorAll(".slide-content");
        const featureProjects =
          wrapper?.querySelectorAll(".feature-project");
        const swiperNav = wrapper?.querySelector(".swiper-navigation");

        if (
          !pinWrap ||
          !floatingContent ||
          !wrapper ||
          !thumb ||
          !runway ||
          !slideContents?.length ||
          !featureProjects?.length ||
          !swiperNav
        )
          return;

        const syncRunway = () => {
          runway.style.height = "0px";
        };

        const setThumbLayerOrder = (animationActive: boolean) => {
          if (animationActive) {
            floatingContent.style.zIndex = "2";
            pinWrap.style.zIndex = "12";
          } else {
            floatingContent.style.zIndex = "15";
            pinWrap.style.zIndex = "10";
            gsap.set(thumb, { autoAlpha: 1 });
          }
        };

        const applyThumbStart = () => syncThumbScale(wrapper, thumb);

        const resetAtStart = () => {
          applyThumbStart();
          setThumbLayerOrder(false);
          gsap.set(textFadeTargets, { autoAlpha: 1 });
          gsap.set([...slideContents, swiperNav], { opacity: 0 });
          gsap.set(featureProjects, { pointerEvents: "none" });
        };

        let tl: gsap.core.Timeline;
        let wasAnimating = false;

        const textFadeTargets = floatingContent.querySelectorAll(
          ".sub-title, .desc"
        );

        syncRunway();
        resetAtStart();

        gsap.set(textFadeTargets, { autoAlpha: 1, willChange: "opacity" });
        gsap.set([...slideContents, swiperNav], {
          opacity: 0,
          willChange: "opacity",
        });
        gsap.set(featureProjects, { pointerEvents: "none" });

        const scheduleStartMeasure = () => {
          requestAnimationFrame(() => {
            requestAnimationFrame(() => {
              if ((tl?.scrollTrigger?.progress ?? 0) < 0.01) {
                resetAtStart();
              }
            });
          });
        };

        tl = gsap
          .timeline({
            scrollTrigger: {
              trigger: el,
              start: "top top",
              end: () => "+=" + window.innerHeight,
              scrub: 1,
              pin: el,
              pinType: "transform",
              pinSpacing: false,
              anticipatePin: 0,
              invalidateOnRefresh: true,
              onRefresh: (self) => {
                syncRunway();
                if (self.progress < 0.01) resetAtStart();
              },
              onEnter: scheduleStartMeasure,
              onEnterBack: scheduleStartMeasure,
              onLeaveBack: () => {
                wasAnimating = false;
                resetAtStart();
              },
              onUpdate: (self) => {
                const animating = self.progress > 0.01;

                if (wasAnimating && !animating) {
                  resetAtStart();
                }

                wasAnimating = animating;
                setThumbLayerOrder(animating);
              },
            },
          })
          .to(
            thumb,
            {
              autoAlpha: 0,
              duration: 0.02,
              ease: "none",
            },
            0
          )
          .to(
            wrapper,
            {
              autoAlpha: 1,
              duration: 0.02,
              ease: "none",
            },
            0
          )
          .to(
            wrapper,
            {
              scale: 1,
              duration: 0.98,
              ease: "none",
              force3D: true,
            },
            0
          )
          .to(
            [...slideContents, swiperNav],
            {
              opacity: 1,
              duration: 0.35,
              ease: "power1.out",
            },
            0.98
          )
          .to(featureProjects, { pointerEvents: "auto" }, ">")
          .to(pinWrap, { pointerEvents: "auto", duration: 0 }, ">");

        const onRefreshInit = () => {
          syncRunway();
        };

        const refresh = () => {
          syncRunway();
          ScrollTrigger.refresh();
          if ((tl?.scrollTrigger?.progress ?? 0) < 0.01) {
            resetAtStart();
          }
        };

        window.addEventListener("resize", refresh);
        ScrollTrigger.addEventListener("refreshInit", onRefreshInit);

        requestAnimationFrame(() => requestAnimationFrame(refresh));

        return () => {
          window.removeEventListener("resize", refresh);
          ScrollTrigger.removeEventListener("refreshInit", onRefreshInit);
          floatingContent.style.zIndex = "";
          pinWrap.style.zIndex = "";
          gsap.set(wrapper, {
            clearProps: "transform,opacity,visibility,transformOrigin",
          });
          gsap.set(thumb, {
            clearProps: "transform,opacity,visibility,transformOrigin",
          });
          gsap.set(textFadeTargets, {
            clearProps: "opacity,visibility,autoAlpha",
          });
          gsap.set([...slideContents, swiperNav], { clearProps: "opacity" });
          tl.scrollTrigger?.kill();
          tl.kill();
        };
      });
    }, root);

    return () => {
      refreshTimers.forEach(clearTimeout);
      window.removeEventListener("load", onLoad);
      swiper.destroy(true, true);
      ctx.revert();
      mm?.revert();
    };
  }, []);

  return (
    <section ref={root} className="wpr-project-area mb--16">
      <div className="container">
        <div className="section-inner border-1">
          <div className="space"></div>

          <div className="floating-content">
            <div className="section-title-area center-style">
              <p className="sub-title bg-white">OUR VISION</p>
              <h2 className="section-title second-font font-semi-bold text-normal">
                Every project we take on <br />
                <span>
                  starts{" "}
                  <span>
                    <img
                      src="/assets/images/portfolio/nova-mobile-app.png"
                      width={147}
                      height={83}
                      alt=""
                      className="vision-inline-thumb"
                    />
                  </span>{" "}
                  with a
                </span>
                <br />
                deep understanding of goals
              </h2>
              <p className="desc">
                We&apos;re a multidisciplinary design agency that blends
                creativity, strategy, and technology to build meaningful brands
                and digital experiences. The results don&apos;t just look great,
                they work great.
              </p>
            </div>
          </div>

          <div className="wpr-video-pin">
            <div className="wpr-video-wrapper">
              <div className="swiper project-slider">
                <div className="swiper-wrapper">
                  <div className="swiper-slide">
                    <div className="slide feature-project">
                      <div className="image-area">
                        <img
                          src="/assets/images/portfolio/nova-mobile-app.png"
                          alt=""
                          className="video-img"
                        />
                        <img
                          src="/assets/images/portfolio/shape-top-left.svg"
                          alt=""
                          className="shape top-left-shape"
                        />
                        <img
                          src="/assets/images/portfolio/shape-top-right.svg"
                          alt=""
                          className="shape top-right-shape"
                        />
                      </div>
                      <div className="slide-content">
                        <div className="product-intro">
                          <div className="top">
                            <h2 className="h3 title">
                              <a href="/work-details">Nova Mobile App</a>
                            </h2>
                            <p className="desc">
                              We streamlined user flows, refreshed the visual
                              language, and introduced accessibility-focused
                              design components to improve usability.
                            </p>
                          </div>
                          <div className="bottom">
                            <ul>
                              <li>
                                <h3 className="h5">40%</h3>
                                <p>Faster completion</p>
                              </li>
                              <li>
                                <h3 className="h5">+25%</h3>
                                <p>Faster completion</p>
                              </li>
                              <li>
                                <h3 className="h5">4.8</h3>
                                <p>Star rating</p>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="hover_mouse">
                        <div className="box"></div>
                        <a href="/work-details">
                          View Projects
                          <svg
                            width="18"
                            height="18"
                            viewBox="0 0 18 18"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M18 0V13.4751H16.5083V2.53591L1.0442 18L0 16.9061L15.4144 1.49171H4.47514V0H18Z"
                              fill="#98FF03"
                            />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="swiper-slide">
                    <div className="slide feature-project">
                      <div className="image-area">
                        <img
                          src="/assets/images/portfolio/nova-mobile-app.png"
                          alt=""
                          className="video-img"
                        />
                        <img
                          src="/assets/images/portfolio/shape-top-left.svg"
                          alt=""
                          className="shape top-left-shape"
                        />
                        <img
                          src="/assets/images/portfolio/shape-top-right.svg"
                          alt=""
                          className="shape top-right-shape"
                        />
                      </div>
                      <div className="slide-content">
                        <div className="product-intro">
                          <div className="top">
                            <h2 className="h3 title">
                              <a href="/work-details">Axis Legal Website</a>
                            </h2>
                            <p className="desc">
                              We streamlined user flows, refreshed the visual
                              language, and introduced accessibility-focused
                              design components to improve usability.
                            </p>
                          </div>
                          <div className="bottom">
                            <ul>
                              <li>
                                <h3 className="h5">+70%</h3>
                                <p>Session duration</p>
                              </li>
                              <li>
                                <h3 className="h5">1 unified</h3>
                                <p>Brand system</p>
                              </li>
                              <li>
                                <h3 className="h5">4 w</h3>
                                <p>Delivery time</p>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="hover_mouse">
                        <div className="box"></div>
                        <a href="/work-details">
                          View Projects
                          <svg
                            width="18"
                            height="18"
                            viewBox="0 0 18 18"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M18 0V13.4751H16.5083V2.53591L1.0442 18L0 16.9061L15.4144 1.49171H4.47514V0H18Z"
                              fill="#98FF03"
                            />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="swiper-slide">
                    <div className="slide feature-project">
                      <div className="image-area">
                        <img
                          src="/assets/images/portfolio/nova-mobile-app.png"
                          alt=""
                          className="video-img"
                        />
                        <img
                          src="/assets/images/portfolio/shape-top-left.svg"
                          alt=""
                          className="shape top-left-shape"
                        />
                        <img
                          src="/assets/images/portfolio/shape-top-right.svg"
                          alt=""
                          className="shape top-right-shape"
                        />
                      </div>
                      <div className="slide-content">
                        <div className="product-intro">
                          <div className="top">
                            <h2 className="h3 title">
                              <a href="/work-details">
                                Lunaris Co . Branding
                              </a>
                            </h2>
                            <p className="desc">
                              We crafted a modern visual identity for Lunaris
                              Coffee Co., blending organic textures with clean
                              typography to reflect their artisanal roots.
                            </p>
                          </div>
                          <div className="bottom">
                            <ul>
                              <li>
                                <h3 className="h5">+65%</h3>
                                <p>Brand recognition</p>
                              </li>
                              <li>
                                <h3 className="h5">12</h3>
                                <p>New product lines</p>
                              </li>
                              <li>
                                <h3 className="h5">3 mon</h3>
                                <p>To done project</p>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="hover_mouse">
                        <div className="box"></div>
                        <a href="/work-details">
                          View Projects
                          <svg
                            width="18"
                            height="18"
                            viewBox="0 0 18 18"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M18 0V13.4751H16.5083V2.53591L1.0442 18L0 16.9061L15.4144 1.49171H4.47514V0H18Z"
                              fill="#98FF03"
                            />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="swiper-navigation">
                  <div className="swiper-btn slider-prev">
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
                  <div className="swiper-btn slider-next">
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
            </div>
          </div>
        </div>
      </div>
      <div className="wpr-project-scroll-runway" aria-hidden="true" />
    </section>
  );
}
