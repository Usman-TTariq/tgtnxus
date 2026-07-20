export const SERVICES_HEADER = {
  eyebrow: "Our services",
  title: "Empowering Businesses through Innovation",
  description:
    "Empowering you and businesses to transform, adapt, and build cutting-edge and disruptive digital products and solutions.",
} as const;

export const SERVICES = [
  {
    image: "/agenio/assets/images/logo-card.png",
    tag: "Branding",
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
] as const;

export const SERVICE_ARROW_ICON = "/assets/images/service-arrow.svg";
