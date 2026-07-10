"use client";

const WORDS = ["Innovation", "Websites", "Brands", "Solutions", "Success", "Growth", "Future"];
const LOOP_WORDS = [...WORDS, ...WORDS];
const GRADIENT =
  "linear-gradient(148.1349942825198deg, rgb(85, 89, 92) 21.13%, rgb(0, 0, 0) 80.53%)";

type BannerWordRotatorProps = {
  className?: string;
};

export default function BannerWordRotator({ className }: BannerWordRotatorProps) {
  return (
    <div className={`tgt-hero-word-rotator ${className ?? ""}`.trim()} data-node-id="3:3612">
      <div
        className="tgt-hero-word-rotator-viewport relative w-full overflow-hidden"
        style={{ height: "var(--tgt-banner-word-height, 120px)" }}
      >
        <div className="tgt-word-rotator-inner relative w-full">
          {LOOP_WORDS.map((word, index) => (
            <div
              key={`${word}-${index}`}
              className="tgt-banner-title flex items-center justify-center bg-clip-text text-transparent"
              style={{
                backgroundImage: GRADIENT,
                height: "var(--tgt-banner-word-height, 120px)",
              }}
            >
              <p>{word}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
