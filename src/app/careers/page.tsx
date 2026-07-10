import type { Metadata } from "next";
import SitePageLayout from "@/components/layout/SitePageLayout";
import CareersHero from "@/components/home/CareersHero";
import BrandArea from "@/components/home/BrandArea";
import CtaSection from "@/components/home/CtaSection";
import CareersOpportunities from "@/components/home/CareersOpportunities";
import ContactSection from "@/components/home/ContactSection";

export const metadata: Metadata = {
  title: "Careers | TGT Nexus",
  description: "Start your career with TGT Nexus. Explore open positions and join our growing team.",
};

export default function CareersPage() {
  return (
    <SitePageLayout>
      <div className="tgt-careers-intro tgt-reveal w-full">
        <CareersHero />
        <div className="site-page-section relative w-full">
          <BrandArea variant="page" />
        </div>
      </div>
      <div className="tgt-reveal w-full">
        <CtaSection />
      </div>
      <CareersOpportunities />
      <ContactSection variant="page" formOnly />
    </SitePageLayout>
  );
}
