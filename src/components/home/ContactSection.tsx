import ContactForm from "./ContactForm";
import ContactSectionMobile from "./ContactSectionMobile";

type ContactSectionProps = {
  variant?: "canvas" | "page";
  /** On careers page — form only, no contact info column */
  formOnly?: boolean;
};

function ContactInfoCanvas() {
  return (
    <div className="tgt-contact-info -translate-y-1/2 absolute contents left-[152px] right-[738.89px] top-[calc(50%+0.25px)]">
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-secondary font-semibold justify-center leading-[0] left-[328.11px] right-[824.89px] text-[#f9fafb] text-[51.989px] top-[193px] whitespace-nowrap">
        <a href="mailto:info@tgtnexus.com" className="leading-[51.989px] text-inherit no-underline">
          info@tgtnexus.com
        </a>
      </div>
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-secondary font-semibold justify-center leading-[0] left-[328.11px] right-[738.89px] text-[#f9fafb] text-[51.989px] top-[272.28px] whitespace-nowrap">
        <a href="mailto:careers@tgtnexus.com" className="leading-[51.989px] text-inherit no-underline">
          careers@tgtnexus.com
        </a>
      </div>
      <div className="-translate-y-1/2 absolute bg-[rgba(243,244,246,0.15)] h-[27.294px] left-[152px] right-[1331.67px] top-[calc(50%-159.96px)]">
        <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-primary font-normal h-[23.395px] justify-center leading-[0] left-[31.19px] text-[#f9fafb] text-[18.196px] top-[14.3px] w-[79.135px]">
          <p className="leading-[18.196px]">CONTACT</p>
        </div>
        <div className="-translate-y-1/2 absolute bg-[#ff272f] left-[5.2px] size-[15.597px] top-1/2" />
      </div>
      <div className="[word-break:break-word] absolute contents leading-[0] left-[328.66px] right-[842.6px] top-[352.56px]">
        <div className="-translate-y-1/2 absolute flex flex-col font-secondary font-semibold h-[62.387px] justify-center left-[328.66px] right-[1076.13px] text-[#f9fafb] text-[51.989px] top-[383.75px] tracking-[-2.0796px]">
          <p className="leading-[62.387px]">Karachi</p>
        </div>
        <div className="-translate-y-1/2 absolute flex flex-col font-secondary font-medium justify-center left-[328.76px] right-[842.6px] text-[22.817px] text-[rgba(255,255,255,0.6)] top-[483.99px]">
          <p className="leading-[34.226px]">
            Plot # 176-A, Sindhi Muslim Cooperative Housing Society Block A Sindhi Muslim CHS
            (SMCHS), Karachi, 74400
          </p>
        </div>
      </div>
      <div className="-translate-y-1/2 absolute bg-[rgba(243,244,246,0.15)] h-[25.995px] left-[152px] right-[1337.52px] top-[calc(50%+28.2px)]">
        <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-primary font-normal justify-center leading-[0] left-[31.19px] text-[#f9fafb] text-[18.196px] top-[14.05px] whitespace-nowrap">
          <p className="leading-[18.196px]">OFFFICE</p>
        </div>
        <div className="-translate-y-1/2 absolute bg-[#ff272f] left-[5.2px] size-[15.597px] top-1/2" />
      </div>
    </div>
  );
}

function ContactInfoPage() {
  return (
    <div className="tgt-contact-page-info">
      <div className="tgt-contact-page-badge">
        <span className="tgt-contact-page-badge-mark" aria-hidden />
        <span>Contact</span>
      </div>

      <div className="tgt-contact-page-emails">
        <a href="mailto:info@tgtnexus.com">info@tgtnexus.com</a>
        <a href="mailto:careers@tgtnexus.com">careers@tgtnexus.com</a>
      </div>

      <div className="tgt-contact-page-badge tgt-contact-page-badge--office">
        <span className="tgt-contact-page-badge-mark" aria-hidden />
        <span>Office</span>
      </div>

      <h3 className="tgt-contact-page-city">Karachi</h3>
      <p className="tgt-contact-page-address">
        Plot # 176-A, Sindhi Muslim Cooperative Housing Society Block A Sindhi Muslim CHS
        (SMCHS), Karachi, 74400
      </p>
    </div>
  );
}

export default function ContactSection({
  variant = "canvas",
  formOnly = false,
}: ContactSectionProps) {
  if (variant === "page") {
    return (
      <section
        id="contact"
        className={`tgt-contact-page${formOnly ? " tgt-contact-page--form-only" : ""}`}
      >
        <div className="tgt-contact-page-inner">
          {!formOnly && <ContactInfoPage />}
          <div className="tgt-contact-page-form">
            <h2 className="tgt-contact-page-form-title">Fill The Form &amp; Get Noticed</h2>
            <ContactForm layout="page" />
          </div>
        </div>
      </section>
    );
  }

  return (
    <>
      <ContactSectionMobile />

      <div className="tgt-contact-desktop border-[rgba(0,0,0,0)] border-b border-solid border-t relative hidden size-full md:block">
        <div className="tgt-contact-panel absolute overflow-visible bg-[#111] h-[702px] left-0 right-[160px] top-0">
          <ContactInfoCanvas />
          <ContactForm layout="canvas" />
          <div className="tgt-contact-form-heading -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-secondary font-semibold justify-center leading-[0] left-[1045px] right-[76px] text-[#f9fafb] text-[39.591px] top-[60.22px] whitespace-nowrap">
            <p className="leading-[39.591px]">{`Fill The Form & Get Noticed`}</p>
          </div>
        </div>
      </div>
    </>
  );
}
