import type { Metadata } from "next";
import SitePageLayout from "@/components/layout/SitePageLayout";
import PageHero from "@/components/layout/PageHero";
import ServicesHeader from "@/components/home/ServicesHeader";
import ServicesGrid from "@/components/home/ServicesGrid";
import TestimonialsSection from "@/components/home/TestimonialsSection";

export const metadata: Metadata = {
  title: "Services | TGT Nexus",
  description:
    "Empowering businesses through innovation — branding, web design, mobile apps, and digital marketing services.",
};

export default function ServicesPage() {
  return (
    <SitePageLayout>
      <PageHero
        eyebrow="OUR SERVICES"
        title="Empowering Businesses through Innovation"
        description="Transform, adapt, and build cutting-edge digital products and solutions tailored to your business needs."
      />
      <div className="site-page-section relative min-h-[280px] w-full tgt-reveal">
        <ServicesHeader />
      </div>
      <div className="site-page-section tgt-services-grid-section relative min-h-[665px] w-full tgt-reveal-stagger max-md:hidden">
        <ServicesGrid />
      </div>
      <div className="site-page-section relative min-h-[798px] w-full tgt-reveal">
        <TestimonialsSection />
      </div>
    </SitePageLayout>
  );
}
