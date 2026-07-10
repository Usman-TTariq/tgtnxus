import ContactForm from "./ContactForm";
import { CONTACT_INFO } from "./careers-contact-data";

export default function ContactSectionMobile() {
  return (
    <section id="contact" className="tgt-contact-mobile md:hidden" aria-label="Contact us">
      <div className="tgt-contact-mobile-card tgt-contact-mobile-card--info">
        <div className="tgt-contact-mobile-badge">
          <span className="tgt-contact-mobile-badge-mark" aria-hidden />
          <span>Contact</span>
        </div>

        <div className="tgt-contact-mobile-emails">
          {CONTACT_INFO.emails.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </div>

        <div className="tgt-contact-mobile-badge tgt-contact-mobile-badge--office">
          <span className="tgt-contact-mobile-badge-mark" aria-hidden />
          <span>Office</span>
        </div>

        <h3 className="tgt-contact-mobile-city">{CONTACT_INFO.city}</h3>
        <p className="tgt-contact-mobile-address">{CONTACT_INFO.address}</p>
      </div>

      <div className="tgt-contact-mobile-card tgt-contact-mobile-card--form">
        <h2 className="tgt-contact-mobile-form-title">Fill The Form &amp; Get Noticed</h2>
        <ContactForm layout="page" />
      </div>
    </section>
  );
}
