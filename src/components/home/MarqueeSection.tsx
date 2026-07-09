import MarqueeScrollAnimation from "../animations/MarqueeScrollAnimation";

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
  return (
    <section className="tgt-marquee-area" data-node-id="50:509">
      <MarqueeScrollAnimation />
      <div className="tgt-marquee-container">
        <div className="tgt-marquee-inner overflow-hidden border-1">
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
