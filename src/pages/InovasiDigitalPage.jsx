import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { TitleSection } from "@/components/sections/TitleSection";
import { InovasiDigitalSection } from "@/components/sections/InovasiDigitalSection";

export default function InovasiDigitalPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        <TitleSection title="Inovasi dan Pelayanan Digital" />
        <InovasiDigitalSection />
      </main>
      <Footer />
    </div>
  );
}
