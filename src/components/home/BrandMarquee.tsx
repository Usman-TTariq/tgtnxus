"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

type Brand = {
  mask: string;
  src: string;
  width: string;
  height: string;
  maskSize: string;
  inset?: string;
  maskPosition?: string;
};

function BrandLogo({
  mask,
  src,
  width,
  height,
  maskSize,
  inset,
  maskPosition,
}: Brand) {
  return (
    <div className="tgt-brand-marquee-item flex shrink-0 items-center justify-center">
      <div className={`relative overflow-clip ${width} ${height}`}>
        <div className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 overflow-clip ${width} ${height}`}>
          <div
            className={`absolute mask-alpha mask-intersect mask-no-clip mask-no-repeat ${inset ?? "inset-0"}`}
            style={{
              maskImage: `url("${mask}")`,
              maskSize,
              ...(maskPosition ? { maskPosition } : {}),
            }}
          >
            <img alt="" className="absolute inset-0 block size-full max-w-none" src={src} />
          </div>
        </div>
      </div>
    </div>
  );
}

type BrandMarqueeProps = {
  brands: Brand[];
  fullWidth?: boolean;
};

export default function BrandMarquee({ brands, fullWidth = false }: BrandMarqueeProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const viewportRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const track = trackRef.current;
    const viewport = viewportRef.current;
    if (!track) return;

    let tween: gsap.core.Tween | null = null;
    const mm = gsap.matchMedia();

    const startDesktop = () => {
      const loopWidth = track.scrollWidth / 2;
      if (!loopWidth) return;

      tween?.kill();
      track.classList.remove("is-css-marquee");
      viewport?.classList.remove("is-mobile-marquee");
      gsap.set(track, { x: 0 });
      tween = gsap.fromTo(
        track,
        { x: 0 },
        {
          x: -loopWidth,
          duration: 22,
          ease: "none",
          repeat: -1,
        }
      );
    };

    const startMobile = () => {
      tween?.kill();
      gsap.set(track, { x: 0, clearProps: "transform" });
      track.classList.add("is-css-marquee");
      viewport?.classList.add("is-mobile-marquee");
    };

    const onReady = (startFn: () => void) => {
      requestAnimationFrame(() => {
        requestAnimationFrame(startFn);
      });
    };

    const bindImages = (startFn: () => void) => {
      const imgs = Array.from(track.querySelectorAll("img"));
      if (imgs.length === 0) {
        onReady(startFn);
        return;
      }

      let pending = imgs.length;
      const done = () => {
        pending -= 1;
        if (pending === 0) onReady(startFn);
      };

      imgs.forEach((img) => {
        if (img.complete) done();
        else {
          img.addEventListener("load", done);
          img.addEventListener("error", done);
        }
      });

      if (pending === 0) onReady(startFn);
    };

    mm.add("(min-width: 769px)", () => {
      bindImages(startDesktop);
      return () => {
        tween?.kill();
        track.classList.remove("is-css-marquee");
        viewport?.classList.remove("is-mobile-marquee");
      };
    });

    mm.add("(max-width: 768px)", () => {
      bindImages(startMobile);
      return () => {
        tween?.kill();
        track.classList.remove("is-css-marquee");
        viewport?.classList.remove("is-mobile-marquee");
      };
    });

    return () => {
      tween?.kill();
      mm.revert();
    };
  }, [brands]);

  return (
    <div
      ref={viewportRef}
      className={`tgt-brand-marquee-viewport h-[200px] shrink-0 overflow-hidden ${fullWidth ? "w-full" : "w-[1200px]"}`}
    >
      <div ref={trackRef} className="tgt-brand-marquee-inner flex h-full w-max">
        {brands.map((brand, i) => (
          <BrandLogo key={`a-${i}`} {...brand} />
        ))}
        {brands.map((brand, i) => (
          <BrandLogo key={`b-${i}`} {...brand} />
        ))}
      </div>
    </div>
  );
}
