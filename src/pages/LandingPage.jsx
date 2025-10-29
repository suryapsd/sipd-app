import { useEffect, useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { HeroSection } from "@/components/sections/HeroSection";
import { Footer } from "@/components/layout/Footer";
import { Loader } from "@/components/common/Loader";
import { MenuSection } from "@/components/sections/MenuSection";
import { PartaiCarouselSection } from "@/components/sections/PartaiCarouselSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { getPartai } from "@/services/partaiService";

export default function LandingPage() {
  const [loading, setLoading] = useState(true);
  const [partai, setPartai] = useState([]);

  useEffect(() => {
    const fetchAll = async () => {
      try {
        const [partaiData] = await Promise.all([
          getPartai(),
          // tambahkan API lain di sini kalau perlu
        ]);
        setPartai(partaiData);
      } catch (err) {
        console.error("Gagal memuat data:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchAll();
  }, []);

  if (loading) return <Loader />;

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <MenuSection />

        {/* IFRAME - embed responsif */}
        <div className="w-full flex justify-center my-10">
          <iframe
            title="Statistik Politik"
            width="80%"
            height="700"
            src="https://lookerstudio.google.com/embed/reporting/9e04e672-d98e-499a-a624-e86cde274d6d/page/S9tJF"
            frameBorder="0"
            style={{ border: 0 }}
            allowFullScreen
            sandbox="allow-storage-access-by-user-activation allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox"
          ></iframe>
        </div>

        <PartaiCarouselSection partai={partai} />
        <AboutSection />
      </main>
      <Footer />
    </div>
  );
}
