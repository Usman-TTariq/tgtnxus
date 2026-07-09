import Header from "./Header";
import Banner from "./Banner";
import BrandArea from "./BrandArea";
import AboutSection from "./AboutSection";
import ResultsSection from "./ResultsSection";
import ServicesHeader from "./ServicesHeader";
import ServicesGrid from "./ServicesGrid";
import ProjectsSection from "./ProjectsSection";
import MarqueeSection from "./MarqueeSection";
import TestimonialsSection from "./TestimonialsSection";
import CtaSection from "./CtaSection";
import ContactSection from "./ContactSection";
import Footer from "./Footer";

export default function HomePage() {
  return (
    <div className="relative mx-auto w-[1920px] h-[7877px] bg-white overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-[130px]">
        <Header />
      </div>
      <div className="absolute top-[129px] left-0 w-full h-[802px]">
        <Banner />
      </div>
      <div className="absolute top-[929px] left-[160px] w-[1600px] h-[202px]">
        <BrandArea />
      </div>
      <div className="absolute top-[1144px] left-[160px] w-[1600px] h-[1020px]">
        <AboutSection />
      </div>
      <div className="absolute top-[1599px] left-[161px] w-[795px] h-[500px]">
        <ResultsSection />
      </div>
      <div className="absolute top-[2181px] left-[160px] w-[1600px] h-[280px]">
        <ServicesHeader />
      </div>
      <div className="absolute top-[2467px] left-[161px] w-[1599px] h-[665px]">
        <ServicesGrid />
      </div>
      <div className="absolute top-[3216px] left-[160px] w-[1600px] h-[1366px]">
        <ProjectsSection />
      </div>
      <div className="absolute top-[4608px] left-0 w-full h-[363px]">
        <MarqueeSection />
      </div>
      <div className="absolute top-[5004px] left-[160px] w-[1600px] h-[798px]">
        <TestimonialsSection />
      </div>
      <div className="absolute top-[5834px] left-[160px] w-[1600px] h-[614px]">
        <CtaSection />
      </div>
      <div className="absolute top-[6447px] left-[160px] w-[1760px] h-[703px]">
        <ContactSection />
      </div>
      <div className="absolute top-[7173px] left-[160px] w-[1600px] h-[704px]">
        <Footer />
      </div>
    </div>
  );
}
