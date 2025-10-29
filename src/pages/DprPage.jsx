import { useEffect, useState } from "react";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { TitleSection } from "@/components/sections/TitleSection";
import { DprSection } from "@/components/sections/DprSection";
import { getDprd } from "@/services/dprdService";
import { Loader } from "@/components/common/Loader";

export default function DprPage() {
  const [loading, setLoading] = useState(true);
  const [dprd, setDprd] = useState([]);

  useEffect(() => {
    const fetchAll = async () => {
      try {
        const [dprdData] = await Promise.all([
          getDprd(),
          // tambahkan API lain di sini kalau perlu
        ]);
        setDprd(dprdData);
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
        <TitleSection
          img="assets/img/Pelantikan DPRD Badung (16).jpeg"
          title="Anggota DPRD Kab. Badung (2024-2029)"
        />
        <DprSection anggota={dprd} />
      </main>
      <Footer />
    </div>
  );
}
