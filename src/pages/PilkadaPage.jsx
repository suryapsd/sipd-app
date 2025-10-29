import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { TitleSection } from "@/components/sections/TitleSection";
import { PilkadaScheduleSection } from "@/components/sections/PilkadaScheduleSection";

export default function PilkadaPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        <TitleSection title="Pilkada Kabupaten Badung" />
        <PilkadaScheduleSection />
      </main>
      <Footer />
    </div>
  );
}
