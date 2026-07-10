"use client";

import SiteAnimations from "@/components/animations/SiteAnimations";
import Header from "@/components/home/Header";
import Footer from "@/components/home/Footer";

type SitePageLayoutProps = {
  children: React.ReactNode;
};

export default function SitePageLayout({ children }: SitePageLayoutProps) {
  return (
    <>
      <SiteAnimations />
      <div className="site-page min-h-screen bg-[#f3f4f6]">
        <Header />
        <main className="site-page-main mx-auto w-full max-w-[1600px] px-4 pb-12 pt-6 md:px-8 md:pt-8">
          {children}
        </main>
        <div className="site-page-footer mx-auto w-full max-w-[1600px] px-4 pb-8 md:px-8">
          <div className="relative min-h-[704px] w-full tgt-reveal">
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
}
