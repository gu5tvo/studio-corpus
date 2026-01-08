import UnifiedHeroStory from "@/components/UnifiedHeroStory";
import CinematicReveal from "@/components/CinematicReveal";
import HorizontalScrollSection from "@/components/HorizontalScrollSection";
import StickyImageSection from "@/components/StickyImageSection";
import LayeredParallax from "@/components/LayeredParallax";
import Testimonials from "@/components/Testimonials";
import InteractiveEnding from "@/components/InteractiveEnding";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <UnifiedHeroStory />
      <CinematicReveal />
      <HorizontalScrollSection />
      <StickyImageSection />
      <LayeredParallax />
      <Testimonials />
      <InteractiveEnding />
      <Footer />
    </main>
  );
}
