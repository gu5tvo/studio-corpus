import UnifiedHeroStory from "@/components/UnifiedHeroStory";
import FAQ from "@/components/FAQ";
import HighImpactQuote from "@/components/HighImpactQuote";
import HorizontalScrollSection from "@/components/HorizontalScrollSection";
import StickyImageSection from "@/components/StickyImageSection";
import LayeredParallax from "@/components/LayeredParallax";
import Testimonials from "@/components/Testimonials";
import InteractiveEnding from "@/components/InteractiveEnding";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";

export default function Home() {
  return (
    <main className="relative">
      <SmoothScroll>
        <div className="relative z-10">
          <UnifiedHeroStory />
          <HorizontalScrollSection />
          <HighImpactQuote />
          <StickyImageSection />
          <LayeredParallax />
          <Testimonials />
          <FAQ />
          <InteractiveEnding />
          <Footer />
        </div>
      </SmoothScroll>
    </main>
  );
}
