"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { gsap } from "gsap";

type Brand = {
  src: string;
  alt: string;
};

function BrandLogo({ src, alt }: Brand) {
  return (
    <div className="tgt-brand-marquee-item">
      <img alt={alt} className="tgt-brand-marquee-logo" src={src} />
    </div>
  );
}

type BrandMarqueeProps = {
  brands: Brand[];
  fullWidth?: boolean;
};

/** Aim for ~2.75 visible cells so the strip always overflows (no trailing blank). */
function itemWidthForContainer(containerWidth: number, viewportWidth: number) {
  if (viewportWidth > 768) return 200;
  const visible = viewportWidth <= 640 ? 2.5 : 3.25;
  const raw = Math.floor(containerWidth / visible);
  if (viewportWidth <= 640) return Math.min(150, Math.max(128, raw));
  return Math.min(180, Math.max(150, raw));
}

export default function BrandMarquee({ brands, fullWidth = false }: BrandMarqueeProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const viewportRef = useRef<HTMLDivElement>(null);
  const [copies, setCopies] = useState(4);
  const [itemWidth, setItemWidth] = useState(200);

  useEffect(() => {
    const viewport = viewportRef.current;
    if (!viewport || brands.length === 0) return;

    const measure = () => {
      const vw = window.innerWidth;
      const cw = viewport.clientWidth || vw;
      const nextWidth = itemWidthForContainer(cw, vw);
      setItemWidth(nextWidth);
      viewport.style.setProperty("--brand-item-width", `${nextWidth}px`);

      const need = Math.ceil((cw * 2.5) / (nextWidth * brands.length));
      setCopies(Math.max(4, need));
    };

    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(viewport);
    window.addEventListener("resize", measure);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, [brands.length]);

  const sequence = useMemo(() => {
    if (brands.length === 0) return [];
    return Array.from({ length: copies }, () => brands).flat();
  }, [brands, copies]);

  useEffect(() => {
    const track = trackRef.current;
    const viewport = viewportRef.current;
    if (!track || sequence.length === 0) return;

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
          duration: 28,
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
  }, [sequence, itemWidth]);

  return (
    <div
      ref={viewportRef}
      className={`tgt-brand-marquee-viewport shrink-0 overflow-hidden ${fullWidth ? "w-full" : "w-[1200px]"}`}
      style={{ ["--brand-item-width" as string]: `${itemWidth}px` }}
    >
      <div ref={trackRef} className="tgt-brand-marquee-inner flex h-full w-max">
        {sequence.map((brand, i) => (
          <BrandLogo key={`a-${i}`} {...brand} />
        ))}
        {sequence.map((brand, i) => (
          <BrandLogo key={`b-${i}`} {...brand} />
        ))}
      </div>
    </div>
  );
}
