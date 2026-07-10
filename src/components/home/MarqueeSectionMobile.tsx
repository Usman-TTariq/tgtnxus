import { MARQUEE_ROWS } from "./marquee-data";

const REPEAT = 6;

export default function MarqueeSectionMobile() {
  return (
    <section className="tgt-marquee-mobile md:hidden" aria-label="Brand values marquee">
      <div className="tgt-marquee-mobile-card">
        {MARQUEE_ROWS.map((row) => {
          const items = Array.from({ length: REPEAT }, () => row);
          const loop = [...items, ...items];

          return (
            <div key={row.id} className="tgt-marquee-mobile-row">
              <div
                className={`tgt-marquee-mobile-track${row.reverse ? " is-reverse" : ""}`}
              >
                {loop.map((item, index) => (
                  <span key={`${item.id}-${index}`} className="tgt-marquee-mobile-item">
                    {item.label}
                    <img src={item.icon} alt="" width={22} height={28} />
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
