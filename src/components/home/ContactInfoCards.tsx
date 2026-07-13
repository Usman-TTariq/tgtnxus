import { CONTACT_INFO } from "./careers-contact-data";

type ContactCard = {
  title: string;
  detail: string;
  href?: string;
  iconSrc: string;
};

const cards: ContactCard[] = [
  {
    title: "E-MAIL ADDRESS",
    detail: CONTACT_INFO.emails[0].label,
    href: CONTACT_INFO.emails[0].href,
    iconSrc: "/assets/images/mail-icon.png",
  },
  {
    title: "PHONE NUMBER",
    detail: CONTACT_INFO.phone.label,
    href: CONTACT_INFO.phone.href,
    iconSrc: "/assets/images/call-icon.png",
  },
  {
    title: "OUR LOCATION",
    detail: CONTACT_INFO.shortAddress,
    iconSrc: "/assets/images/location-icon.png",
  },
];

type ContactInfoCardsProps = {
  className?: string;
};

export default function ContactInfoCards({ className }: ContactInfoCardsProps) {
  const classes = className
    ? `tgt-contact-info-cards tgt-reveal ${className}`
    : "tgt-contact-info-cards tgt-reveal";

  return (
    <section className={classes} aria-label="Contact information">
      <div className="tgt-contact-info-cards-inner tgt-reveal-stagger">
        {cards.map((card) => {
          const detail = card.href ? (
            <a href={card.href} className="tgt-contact-info-card-detail">
              {card.detail}
            </a>
          ) : (
            <p className="tgt-contact-info-card-detail">{card.detail}</p>
          );

          return (
            <article key={card.title} className="tgt-contact-info-card tgt-reveal-right">
              <div className="tgt-contact-info-card-icon" aria-hidden>
                <img
                  className="tgt-contact-info-card-icon-img"
                  src={card.iconSrc}
                  alt=""
                  width={42}
                  height={42}
                />
              </div>
              <h3 className="tgt-contact-info-card-title">{card.title}</h3>
              {detail}
            </article>
          );
        })}
      </div>
    </section>
  );
}
