import { useEffect, useState } from "react";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { HeroSectionPage } from "@/components/sections/HeroSectionPage";
import { Loader } from "@/components/common/Loader";
import { getPartai } from "@/services/partaiService";
import { PartaiSection } from "@/components/sections/PartaiSection";

export default function PartaiPage() {
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
        <HeroSectionPage
          title="Data Partai Politik"
          desc="Kabupaten Badung memiliki dinamika politik yang aktif, ditopang oleh 15 partai politik di tingkat kabupaten yang dinyatakan memenuhi syarat verifikasi KPU Kabupaten Badung. Dukungan masyarakat tersebar di enam kecamatan, dengan kawasan pariwisata dan perkotaan menjadi pusat konsentrasi pemilih serta wilayah perdesaan tetap menjadi basis dukungan kuat. Partai politik di Badung tidak hanya berpartisipasi dalam kontestasi pemilu, tetapi juga berfungsi sebagai sarana pendidikan politik, penyalur aspirasi, dan penghubung komunikasi antara masyarakat dengan pemerintah daerah."
        />
        <PartaiSection partai={partai} />
      </main>
      <Footer />
    </div>
  );
}
