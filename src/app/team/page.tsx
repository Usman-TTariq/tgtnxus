import type { Metadata } from "next";
import SitePageLayout from "@/components/layout/SitePageLayout";
import TeamHero from "@/components/home/TeamHero";
import TeamSection from "@/components/home/TeamSection";

export const metadata: Metadata = {
  title: "Our Team | TGT Nexus",
  description: "Meet the leadership team behind TGT Nexus.",
};

export default function TeamPage() {
  return (
    <SitePageLayout>
      <div className="tgt-team-page-intro tgt-reveal w-full">
        <TeamHero />
      </div>
      <TeamSection />
    </SitePageLayout>
  );
}
