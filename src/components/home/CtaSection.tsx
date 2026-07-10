import CtaSectionMobile from "./CtaSectionMobile";

const ARROW_LEFT = "/agenio/assets/images/cta/arrow-left.svg";
const ARROW_RIGHT = "/agenio/assets/images/cta/arrow-right.svg";
const CAREER_BG = "/agenio/assets/images/career-bg-2.png";

const TITLE_GRADIENT =
  "linear-gradient(140.4438116569271deg, rgb(85, 89, 92) 21.13%, rgb(0, 0, 0) 80.53%)";

function CtaArrows({ side }: { side: "left" | "right" }) {
  const isLeft = side === "left";
  const src = isLeft ? ARROW_RIGHT : ARROW_LEFT;
  const positions = isLeft
    ? ["left-[4.5%] tgt-cta-arrow-left-1", "left-[7.5%] tgt-cta-arrow-left-2", "left-[10.5%] tgt-cta-arrow-left-3"]
    : ["right-[10.5%] tgt-cta-arrow-3", "right-[7.5%] tgt-cta-arrow-2", "right-[4.5%] tgt-cta-arrow-1"];

  return (
    <>
      {positions.map((pos) => (
        <div
          key={pos}
          className={`tgt-cta-arrow absolute top-[calc(50%-110px)] aspect-[26/32] opacity-15 ${pos}`}
        >
          <img
            alt=""
            className="block h-[32px] w-[26px]"
            height={32}
            src={src}
            width={26}
          />
        </div>
      ))}
    </>
  );
}

function CtaTitle() {
  return (
    <div
      className="tgt-cta-title pointer-events-none absolute left-1/2 top-[calc(50%-110px)] z-20 flex -translate-x-1/2 -translate-y-1/2 flex-col text-center font-primary text-[clamp(48px,7.5vw,120px)] font-normal uppercase leading-[0.95] tracking-[-0.06em]"
      data-node-id="54:1341"
    >
      <span
        className="mb-0 block bg-clip-text text-transparent"
        style={{ backgroundImage: TITLE_GRADIENT, WebkitBackgroundClip: "text" }}
      >
        Start Your
      </span>
      <span
        className="block bg-clip-text text-transparent"
        style={{ backgroundImage: TITLE_GRADIENT, WebkitBackgroundClip: "text" }}
      >
        Career With Us
      </span>
    </div>
  );
}

export default function CtaSection() {
  return (
    <>
      <CtaSectionMobile />

      <div
        className="tgt-cta-desktop tgt-cta-section relative hidden h-[614px] w-full overflow-hidden border border-solid border-[rgba(3,7,18,0.1)] bg-white md:block"
        data-node-id="54:1337"
      >
        <div className="absolute inset-0 z-0">
          <img alt="" className="size-full object-cover object-center" src={CAREER_BG} />
        </div>

        <CtaTitle />

        <CtaArrows side="left" />
        <CtaArrows side="right" />
      </div>
    </>
  );
}
