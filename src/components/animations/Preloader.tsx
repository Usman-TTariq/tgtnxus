"use client";

import { useEffect, useState } from "react";
import { gsap } from "gsap";
import { LOGO_MARK, LOGO_TYPE } from "@/lib/brand";

export default function Preloader() {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const bars = document.querySelectorAll<HTMLElement>(".tgt-preloader-bar-inner");
    let increment = 0;

    const animateBars = () => {
      for (let i = 0; i < 2; i++) {
        const bar = bars[i + increment];
        if (!bar) return;
        gsap.to(bar, {
          width: `${Math.floor(Math.random() * 101)}%`,
          duration: 0.3,
          ease: "none",
        });
      }

      gsap.delayedCall(0.3, () => {
        for (let i = 0; i < 2; i++) {
          const bar = bars[i + increment];
          if (bar) {
            gsap.to(bar, { width: "100%", duration: 0.3, ease: "none" });
          }
        }

        increment += 2;

        if (increment < bars.length) {
          animateBars();
        } else {
          const preloader = document.querySelector<HTMLElement>(".tgt-preloader");
          if (!preloader) {
            setHidden(true);
            return;
          }
          gsap.to(preloader, {
            "--tgt-preloader-clip": "100%",
            duration: 0.3,
            ease: "none",
            onComplete: () => setHidden(true),
          });
        }
      });
    };

    const timer = setTimeout(animateBars, 300);
    return () => clearTimeout(timer);
  }, []);

  if (hidden) return null;

  return (
    <div className="tgt-preloader">
      <div className="tgt-preloader-brand">
        <img
          className="tgt-preloader-logo-mark"
          src={LOGO_MARK}
          alt=""
          width={40}
          height={40}
          aria-hidden
        />
        <img
          className="tgt-preloader-logo-type"
          src={LOGO_TYPE}
          alt="TGT Nexus"
          width={160}
          height={26}
        />
      </div>
      <div className="tgt-preloader-bars">
        {Array.from({ length: 8 }).map((_, i) => (
          <div key={i} className="tgt-preloader-bar">
            <div className="tgt-preloader-bar-inner" />
          </div>
        ))}
      </div>
    </div>
  );
}
