import Header from "@/components/Header";
import Hero from "@/components/Hero";
import HistorySection from "@/components/HistorySection";
import MissionsSection from "@/components/MissionsSection";
import CosmonoutsSection from "@/components/CosmonoutsSection";
import AchievementsSection from "@/components/AchievementsSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <HistorySection />
        <AchievementsSection />
        <MissionsSection />
        <CosmonoutsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;