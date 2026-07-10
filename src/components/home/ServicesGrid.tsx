import { SERVICE_ARROW_ICON, SERVICES } from "./services-data";

function ServiceCard({
  image,
  tag,
  number,
  description,
  items,
  className = "",
}: (typeof SERVICES)[number] & { className?: string }) {
  return (
    <article className={`tgt-service-card tgt-reveal-right ${className}`.trim()}>
      <div className="tgt-service-card-image">
        <img src={image} alt="" />
      </div>
      <div className="tgt-service-card-content">
        <div>
          <p className="tgt-service-card-tag uppercase">{tag}</p>
          <p className="tgt-service-card-desc">{description}</p>
        </div>
        <p className="tgt-service-card-number">{number}</p>
        <div className="tgt-service-card-bottom">
          <ul className="tgt-service-card-list">
            {items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <a href="/contact" className="tgt-service-card-btn" aria-label={`Learn more about ${tag}`}>
            <img src={SERVICE_ARROW_ICON} alt="" className="h-[18px] w-[10px]" />
          </a>
        </div>
      </div>
    </article>
  );
}

export default function ServicesGrid() {
  return (
    <div className="tgt-services-grid-desktop hidden md:block relative size-full" data-node-id="45:54">
      <div className="tgt-services-grid size-full">
        {SERVICES.map((service) => (
          <ServiceCard key={service.number} {...service} />
        ))}
      </div>
    </div>
  );
}
