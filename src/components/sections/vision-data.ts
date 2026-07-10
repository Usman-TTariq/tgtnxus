export const VISION_HEADER = {
  eyebrow: "Our vision",
  titleLead: "Every project we take on",
  titleTrail: "starts with a deep understanding of goals",
  description:
    "We're a multidisciplinary design agency that blends creativity, strategy, and technology to build meaningful brands and digital experiences. The results don't just look great, they work great.",
  thumbImage: "/assets/images/portfolio/nova-mobile-app.png",
} as const;

export const VISION_PROJECTS = [
  {
    id: "nova-mobile-app",
    image: "/assets/images/portfolio/nova-mobile-app.png",
    title: "Nova Mobile App",
    href: "/work-details",
    description:
      "We streamlined user flows, refreshed the visual language, and introduced accessibility-focused design components to improve usability.",
    stats: [
      { value: "40%", label: "Faster completion" },
      { value: "+25%", label: "Faster completion" },
      { value: "4.8", label: "Star rating" },
    ],
  },
  {
    id: "axis-legal",
    image: "/assets/images/portfolio/nova-mobile-app.png",
    title: "Axis Legal Website",
    href: "/work-details",
    description:
      "We streamlined user flows, refreshed the visual language, and introduced accessibility-focused design components to improve usability.",
    stats: [
      { value: "+70%", label: "Session duration" },
      { value: "1 unified", label: "Brand system" },
      { value: "4 w", label: "Delivery time" },
    ],
  },
  {
    id: "lunaris-branding",
    image: "/assets/images/portfolio/nova-mobile-app.png",
    title: "Lunaris Co. Branding",
    href: "/work-details",
    description:
      "We crafted a modern visual identity for Lunaris Coffee Co., blending organic textures with clean typography to reflect their artisanal roots.",
    stats: [
      { value: "+65%", label: "Brand recognition" },
      { value: "12", label: "New product lines" },
      { value: "3 mon", label: "To done project" },
    ],
  },
] as const;

export const VISION_SHAPE_TL = "/assets/images/portfolio/shape-top-left.svg";
export const VISION_SHAPE_TR = "/assets/images/portfolio/shape-top-right.svg";
