import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { TitleSection } from "@/components/sections/TitleSection";
import { PenyelenggaraSection } from "@/components/sections/PenyelenggaraSection";

export default function PenyelenggaraPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        <TitleSection title="Penyelenggara Pemilu" />
        <PenyelenggaraSection />
      </main>
      <Footer />
    </div>
  );
}
