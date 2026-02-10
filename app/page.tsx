import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/sections/HeroSection";
import InventorySection from "@/sections/InventorySection";
import FinancingSection from "@/sections/FinancingSection";
import TradeInSection from "@/sections/TradeInSection";
import ReviewsSection from "@/sections/ReviewsSection";
import FAQSection from "@/sections/FAQSection";
import ContactSection from "@/sections/ContactSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <Header />
      <main>
        <HeroSection />
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
