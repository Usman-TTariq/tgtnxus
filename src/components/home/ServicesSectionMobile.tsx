import { SERVICE_ARROW_ICON, SERVICES, SERVICES_HEADER } from "./services-data";

type ServicesSectionMobileProps = {
  /** Hide eyebrow/title/desc when a page hero already covers that. */
  hideHeader?: boolean;
};

export default function ServicesSectionMobile({ hideHeader = false }: ServicesSectionMobileProps) {
  return (
    <section className="tgt-services-mobile md:hidden" aria-label="Our services">
      {!hideHeader ? (
        <div className="tgt-services-mobile-header">
          <div className="tgt-services-mobile-label">
            <span className="tgt-services-mobile-label-mark" aria-hidden />
            <span className="tgt-services-mobile-label-text">{SERVICES_HEADER.eyebrow}</span>
          </div>
          <h2 className="tgt-services-mobile-title">{SERVICES_HEADER.title}</h2>
          <p className="tgt-services-mobile-desc">{SERVICES_HEADER.description}</p>
        </div>
      ) : null}

      <div className="tgt-services-mobile-cards">
        {SERVICES.map((service) => (
          <article key={service.number} className="tgt-services-mobile-card">
            <div className="tgt-services-mobile-card-image-wrap">
              <img src={service.image} alt="" className="tgt-services-mobile-card-image" />
            </div>

            <div className="tgt-services-mobile-card-panel">
              <div className="tgt-services-mobile-card-head">
                <span className="tgt-services-mobile-card-tag">{service.tag}</span>
                <span className="tgt-services-mobile-card-number">{service.number}</span>
              </div>

              <p className="tgt-services-mobile-card-text">{service.description}</p>

              <div className="tgt-services-mobile-card-footer">
                <ul className="tgt-services-mobile-card-list">
                  {service.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <a
                  href="/contact"
                  className="tgt-services-mobile-card-btn"
                  aria-label={`Learn more about ${service.tag}`}
                >
                  <img src={SERVICE_ARROW_ICON} alt="" width={10} height={18} />
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
