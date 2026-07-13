import type { Metadata } from "next";
import SitePageLayout from "@/components/layout/SitePageLayout";
import ServicesHero from "@/components/home/ServicesHero";
import ServicesSectionMobile from "@/components/home/ServicesSectionMobile";
import ServicesGrid from "@/components/home/ServicesGrid";

export const metadata: Metadata = {
  title: "Services | TGT Nexus",
  description:
    "Empowering businesses through innovation — branding, web design, mobile apps, and digital marketing services.",
};

export default function ServicesPage() {
  return (
    <SitePageLayout heroFlush>
      <div className="tgt-team-page-intro w-full">
        <ServicesHero />
      </div>
      <div className="site-page-section relative w-full tgt-reveal">
        <ServicesSectionMobile hideHeader />
      </div>
      <div className="site-page-section tgt-services-grid-section relative min-h-[665px] w-full tgt-reveal-stagger max-md:hidden">
        <ServicesGrid />
      </div>
    </SitePageLayout>
  );
}
