import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/sections/HeroSection";
import BrandCarouselSection from "@/sections/BrandCarouselSection";
import InventorySection from "@/sections/InventorySection";
import FinancingSection from "@/sections/FinancingSection";
import TradeInSection from "@/sections/TradeInSection";
import ReviewsSection from "@/sections/ReviewsSection";
import FAQSection from "@/sections/FAQSection";
import ContactSection from "@/sections/ContactSection";
import InteractiveBackdrop from "@/components/InteractiveBackdrop";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#070b12] text-slate-100">
      <InteractiveBackdrop />
      <Header />
      <main>
        <HeroSection />
        <BrandCarouselSection />
        <InventorySection />
        <FinancingSection />
        <TradeInSection />
        <ReviewsSection />
        <FAQSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
