import BrandMarquee from "./BrandMarquee";

const brands = [
  { src: "/assets/images/zoetis-logo.png", alt: "Zoetis" },
  { src: "/assets/images/huvepherma-logo.png", alt: "Huvepharma" },
  { src: "/assets/images/beauty-blender-logo.png", alt: "beautyblender" },
  { src: "/assets/images/hanor-logo.png", alt: "Hanor" },
  { src: "/assets/images/eravant-logo.png", alt: "Eravant" },
  { src: "/assets/images/boehrenger-logo.png", alt: "Boehringer" },
  { src: "/assets/images/progressive-beef-logo.png", alt: "Progressive Beef" },
];

type BrandAreaProps = {
  variant?: "canvas" | "page";
};

function BrandLabel() {
  return (
    <>
      <p className="mb-0">{"//WE'RE"}</p>
      <p>TRUSTED BY</p>
    </>
  );
}

export default function BrandArea({ variant = "canvas" }: BrandAreaProps) {
  const isHome = variant === "canvas";

  return (
    <div
      className={`tgt-brand-area tgt-brand-area--strip ${
        isHome ? "tgt-brand-area--home" : "tgt-brand-area--page"
      } border border-solid border-[rgba(3,7,18,0.1)] bg-white`}
      data-node-id={isHome ? "3:3664" : undefined}
    >
      <div className="tgt-brand-label tgt-brand-label--strip text-[#030712]">
        <BrandLabel />
      </div>

      <div className="tgt-brand-logos-track tgt-brand-logos-track--strip">
        <BrandMarquee brands={brands} fullWidth />
      </div>

      {isHome ? (
        <>
          <div className="tgt-brand-pixel tgt-brand-pixel--tl" aria-hidden />
          <div className="tgt-brand-pixel tgt-brand-pixel--bl" aria-hidden />
        </>
      ) : null}
    </div>
  );
}
