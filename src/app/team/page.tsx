import type { Metadata } from "next";
import SitePageLayout from "@/components/layout/SitePageLayout";
import SiteCtaSection from "@/components/layout/SiteCtaSection";
import SiteContactSection from "@/components/layout/SiteContactSection";
import TeamHero from "@/components/home/TeamHero";
import TeamSection from "@/components/home/TeamSection";

export const metadata: Metadata = {
  title: "Our Team | TGT Nexus",
  description: "Meet the leadership team behind TGT Nexus.",
};

export default function TeamPage() {
  return (
    <SitePageLayout heroFlush>
      <div className="tgt-team-page-intro w-full">
        <TeamHero />
      </div>
      <TeamSection />
      <SiteCtaSection />
      <SiteContactSection />
    </SitePageLayout>
  );
}
