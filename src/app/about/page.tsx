import type { Metadata } from "next";
import SitePageLayout from "@/components/layout/SitePageLayout";
import PageHero from "@/components/layout/PageHero";
import AboutSection from "@/components/home/AboutSection";
import BrandArea from "@/components/home/BrandArea";

export const metadata: Metadata = {
  title: "About Us | TGT Nexus",
  description:
    "Learn about TGT Nexus — a full-service web development and design company delivering innovative digital solutions.",
};

export default function AboutPage() {
  return (
    <SitePageLayout>
      <PageHero
        eyebrow="ABOUT US"
        title="Building Digital Solutions That Drive Growth"
        description="We specialize in custom websites, e-commerce, mobile apps, and digital marketing — helping businesses strengthen their online presence."
      />
      <div className="site-page-section relative min-h-[1020px] w-full tgt-reveal">
        <AboutSection />
      </div>
      <div className="site-page-section relative min-h-[202px] w-full tgt-reveal-left">
        <BrandArea variant="page" />
      </div>
    </SitePageLayout>
  );
}
