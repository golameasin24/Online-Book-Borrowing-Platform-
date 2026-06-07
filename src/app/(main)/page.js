import HeroSeciotn from "@/components/HeroSecion/HeroSection";
import ReviewSection from "@/components/Reviews/Reviews";
import Selection from "@/components/Selection/Selection";
import StatsSection from "@/components/Stats/Stats";

export default function HomePage() {
  return (
    <main className="flex flex-col min-h-screen">
      <HeroSeciotn />
      <Selection />
      <StatsSection />
      <ReviewSection />
    </main>
  );
}
