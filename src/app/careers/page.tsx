import type { Metadata } from "next";
import SitePageLayout from "@/components/layout/SitePageLayout";
// import SiteCtaSection from "@/components/layout/SiteCtaSection";
import SiteContactSection from "@/components/layout/SiteContactSection";
import CareersHero from "@/components/home/CareersHero";
import BrandArea from "@/components/home/BrandArea";
import CareersOpportunities from "@/components/home/CareersOpportunities";
import ContactInfoCards from "@/components/home/ContactInfoCards";

export const metadata: Metadata = {
  title: "Careers | TGT Nexus",
  description: "Start your career with TGT Nexus. Explore open positions and join our growing team.",
};

export default function CareersPage() {
  return (
    <SitePageLayout heroFlush>
      <div className="tgt-careers-intro tgt-reveal w-full">
        <CareersHero />
        <div className="site-page-section relative w-full">
          <BrandArea variant="page" />
        </div>
      </div>
      <CareersOpportunities />
      <ContactInfoCards />
      {/* <SiteCtaSection /> */}
      <SiteContactSection />
    </SitePageLayout>
  );
}
