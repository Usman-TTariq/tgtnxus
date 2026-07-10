import { AboutIcon01, AboutIcon02, AboutIcon03 } from "./AboutFeatureIcons";

export const ABOUT_PATTERN = "/agenio/assets/images/pattern.png";
export const ABOUT_IMAGE = "/agenio/assets/images/about-us-home.png";

export const ABOUT_INTRO =
  "is a full-service web development and design company delivering innovative digital solutions. We specialize in custom websites, e-commerce, mobile apps, and digital marketing. Our team creates scalable, user-focused solutions that help businesses strengthen their online presence, reach the right audience, and achieve sustainable growth.";

export const ABOUT_TAGLINE =
  "Our results speak for themselves. Each number represents the trust we've built.";

export const ABOUT_FEATURES = [
  {
    icon: AboutIcon01,
    title: "Strategic Guidance",
    description:
      "Providing insightful guidance and strategic direction to help you achieve your business objectives and outshine the competition.",
  },
  {
    icon: AboutIcon02,
    title: "24/7 Support",
    description:
      "Round-the-clock assistance, ensuring that your needs are met anytime, anywhere, with our 24/7 dedicated support.",
  },
  {
    icon: AboutIcon03,
    title: "Custom Request",
    description:
      "Unleash your imagination and let us create a bespoke solution that perfectly aligns with your specific needs and aspirations.",
  },
] as const;
