import type { Metadata } from "next";
import SitePageLayout from "@/components/layout/SitePageLayout";
import SiteContactSection from "@/components/layout/SiteContactSection";
import ContactInfoCards from "@/components/home/ContactInfoCards";

export const metadata: Metadata = {
  title: "Contact Us | TGT Nexus",
  description: "Get in touch with TGT Nexus. Send us a message or apply for open positions.",
};

export default function ContactPage() {
  return (
    <SitePageLayout>
      <ContactInfoCards />
      <SiteContactSection formMode="inquiry" />
    </SitePageLayout>
  );
}
