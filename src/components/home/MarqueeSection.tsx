"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const ICON_RIGHT = "/agenio/assets/images/icon/black-right.svg";
const ICON_LEFT = "/agenio/assets/images/icon/black-left.svg";
const REPEAT_COUNT = 18;

function MarqueeLine({ label, icon }: { label: string; icon: string }) {
  return (
    <>
      {Array.from({ length: REPEAT_COUNT }).map((_, index) => (
        <span key={`${label}-${index}`}>
          {label}{" "}
          <span>
            <img src={icon} alt="" width={38} height={48} />
          </span>{" "}
        </span>
      ))}
    </>
  );
}

export default function MarqueeSection() {
  const root = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const el = root.current;
    if (!el) return;

    gsap.registerPlugin(ScrollTrigger);

    let mm: gsap.MatchMedia | undefined;

    const ctx = gsap.context(() => {
      mm = gsap.matchMedia();

      mm.add("(min-width: 769px)", () => {
        const row1 = el.querySelector(".tgt-scrollingtext-1") as HTMLElement;
        const row2 = el.querySelector(".tgt-scrollingtext-2") as HTMLElement;

        if (!row1 || !row2) return;

        gsap.set([row1, row2], { xPercent: 0, force3D: true });

        const scrollConfig = {
          trigger: el,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
          invalidateOnRefresh: true,
        };

        const tween1 = gsap.to(row1, {
          xPercent: 2,
          ease: "none",
          scrollTrigger: scrollConfig,
        });

        const tween2 = gsap.to(row2, {
          xPercent: -10,
          ease: "none",
          scrollTrigger: { ...scrollConfig },
        });

        return () => {
          tween1.scrollTrigger?.kill();
          tween2.scrollTrigger?.kill();
          tween1.kill();
          tween2.kill();
        };
      });
    }, root);

    const refresh = () => ScrollTrigger.refresh();
    window.addEventListener("load", refresh);
    window.addEventListener("resize", refresh);

    const timers = [
      window.setTimeout(refresh, 400),
      window.setTimeout(refresh, 1200),
    ];
    requestAnimationFrame(() => requestAnimationFrame(refresh));

    return () => {
      timers.forEach(clearTimeout);
      window.removeEventListener("load", refresh);
      window.removeEventListener("resize", refresh);
      ctx.revert();
      mm?.revert();
    };
  }, []);

  return (
    <section ref={root} className="tgt-marquee-area" data-node-id="50:509">
      <div className="tgt-marquee-container">
        <div className="tgt-marquee-inner border-1">
          <div className="tgt-marquee-text-wrapper first-text">
            <div className="text-split tgt-scrollingtext-1">
              <h2 className="tgt-marquee-title title">
                <MarqueeLine label="Innovative" icon={ICON_RIGHT} />
              </h2>
            </div>
          </div>

          <div className="tgt-marquee-text-wrapper">
            <div className="text-split tgt-scrollingtext-2">
              <h2 className="tgt-marquee-title title">
                <MarqueeLine label="Visionary" icon={ICON_LEFT} />
              </h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
