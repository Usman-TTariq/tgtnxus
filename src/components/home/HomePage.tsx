import Header from "./Header";
import Banner from "./Banner";
import BrandArea from "./BrandArea";
import AboutSection from "./AboutSection";
import ServicesHeader from "./ServicesHeader";
import ServicesGrid from "./ServicesGrid";
import VisionProject from "../sections/VisionProject";
import MarqueeSection from "./MarqueeSection";
import TestimonialsSection from "./TestimonialsSection";
import CtaSection from "./CtaSection";
import ContactSection from "./ContactSection";
import Footer from "./Footer";
import Preloader from "../animations/Preloader";
import HomeAnimations from "../animations/HomeAnimations";

export default function HomePage() {
  return (
    <>
      <Preloader />
      <HomeAnimations />
    <div className="responsive-page-wrapper bg-[#f3f4f6]">
    <div className="responsive-page-inner relative w-[1920px] h-[8289px] bg-[#f3f4f6] overflow-x-clip overflow-y-visible shrink-0">
      <div className="tgt-home-slot tgt-home-slot--header absolute top-0 left-0 w-full min-h-[130px] z-[60]">
        <Header />
      </div>
      <div className="tgt-home-slot tgt-home-slot--banner absolute top-[129px] left-0 w-full h-[802px]">
        <Banner />
      </div>
      <div className="tgt-home-slot tgt-home-slot--brand absolute top-[929px] left-[160px] w-[1600px] h-[202px]">
        <BrandArea />
      </div>
      <div className="tgt-home-slot tgt-home-slot--about absolute top-[1144px] left-[160px] w-[1600px] h-[1020px] tgt-reveal">
        <AboutSection />
      </div>
      <div className="tgt-home-slot tgt-home-slot--services-header absolute top-[2181px] left-[160px] w-[1600px] h-[280px] tgt-reveal">
        <ServicesHeader />
      </div>
      <div className="tgt-home-slot tgt-home-slot--services-grid absolute top-[2467px] left-[161px] w-[1599px] h-[665px] tgt-reveal-stagger">
        <ServicesGrid />
      </div>
      <div className="tgt-home-slot tgt-home-slot--vision absolute top-[3216px] left-[160px] w-[1600px] overflow-visible z-[10]">
        <VisionProject />
      </div>
      <div className="tgt-home-slot tgt-home-slot--marquee marquee-slot absolute top-[5020px] left-0 w-full h-[363px] z-[2] isolate bg-[#f3f4f6]">
        <MarqueeSection />
      </div>
      <div className="tgt-home-slot tgt-home-slot--testimonials absolute top-[5416px] left-[160px] w-[1600px] h-[798px] z-[2] overflow-hidden">
        <TestimonialsSection />
      </div>
      <div id="careers" className="tgt-home-slot tgt-home-slot--careers absolute top-[6246px] left-[160px] w-[1600px] h-[614px] z-[3] tgt-reveal overflow-hidden">
        <CtaSection />
      </div>
      <div className="tgt-home-slot tgt-home-slot--contact absolute top-[6859px] left-[160px] w-[1760px] h-[703px] tgt-reveal">
        <ContactSection />
      </div>
      <div className="tgt-home-slot tgt-home-slot--footer absolute top-[7585px] left-[160px] w-[1600px] h-[704px] tgt-reveal">
        <Footer />
      </div>
    </div>
    </div>
    </>
  );
}
