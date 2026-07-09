const imgVector = "https://www.figma.com/api/mcp/asset/33e21105-cc53-4314-b119-2963bad866a6";

const services = [
  {
    image: "/agenio/assets/images/logo-card.png",
    tag: "BRANDING",
    number: "01",
    description:
      "Create a memorable brand with our comprehensive branding services, from logo design to strategic positioning, ensuring your business stands out.",
    items: ["Logo Design", "Brand Identity", "Strategy", "Guidelines"],
  },
  {
    image: "/agenio/assets/images/responsive-card.png",
    tag: "Web Design & Development",
    number: "02",
    description:
      "We craft websites that not only look great but also offer a seamless user experience, driving engagement and conversions while reflecting your brand's unique identity.",
    items: ["Responsive Design", "UI/UX", "Fast Performance", "SEO Ready"],
  },
  {
    image: "/agenio/assets/images/mobile-card.png",
    tag: "Mobile App Development",
    number: "03",
    description:
      "Transform your ideas into mobile apps that engage users and offer a flawless experience on both iOS and Android platforms.",
    items: ["Android Apps", "iOS Apps", "Cross Platform", "App Maintenance"],
  },
  {
    image: "/agenio/assets/images/marketing-card.png",
    tag: "Digital Marketing",
    number: "04",
    description:
      "Maximize your online visibility and grow your audience with our tailored digital marketing strategies, including SEO, PPC, social media, and content marketing.",
    items: ["SEO", "PPC Ads", "Social Media", "Content Marketing"],
  },
];

function ServiceCard({
  image,
  tag,
  number,
  description,
  items,
  className = "",
}: (typeof services)[number] & { className?: string }) {
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
          <a href="#contact" className="tgt-service-card-btn" aria-label={`Learn more about ${tag}`}>
            <img src={imgVector} alt="" className="h-[18px] w-[10px]" />
          </a>
        </div>
      </div>
    </article>
  );
}

export default function ServicesGrid() {
  return (
    <div className="relative size-full" data-node-id="45:54">
      <div className="tgt-services-grid size-full">
        {services.map((service) => (
          <ServiceCard key={service.number} {...service} />
        ))}
      </div>
    </div>
  );
}
