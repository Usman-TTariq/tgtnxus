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
};

export default function BrandMarquee({ brands }: BrandMarqueeProps) {
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let tween: gsap.core.Tween | null = null;

    const start = () => {
      const loopWidth = track.scrollWidth / 2;
      if (!loopWidth) return;

      tween?.kill();
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

    const imgs = Array.from(track.querySelectorAll("img"));
    const onReady = () => {
      requestAnimationFrame(() => {
        requestAnimationFrame(start);
      });
    };

    if (imgs.length === 0) {
      onReady();
    } else {
      let pending = imgs.length;
      imgs.forEach((img) => {
        if (img.complete) {
          pending -= 1;
          if (pending === 0) onReady();
        } else {
          img.addEventListener("load", () => {
            pending -= 1;
            if (pending === 0) onReady();
          });
          img.addEventListener("error", () => {
            pending -= 1;
            if (pending === 0) onReady();
          });
        }
      });
      if (pending === 0) onReady();
    }

    return () => {
      tween?.kill();
    };
  }, [brands]);

  return (
    <div className="tgt-brand-marquee-viewport h-[200px] w-[1200px] shrink-0 overflow-hidden">
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
