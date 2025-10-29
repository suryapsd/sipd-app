import { Button } from "@/components/ui/button";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import bgImage from "@/assets/img/1920x1080_dengan_latar_foto_bupati_dan_wakil_bupati_di_tengah.webp";

export function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden mt-12">
      {/* Gambar background */}
      <img
        src={bgImage}
        alt="Latar belakang Bupati dan Wakil Bupati"
        className="w-full min-h-screen md:h-auto object-cover"
      />

      {/* Overlay hitam transparan */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Konten teks */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="absolute inset-0 flex flex-col items-center justify-center md:justify-start text-center px-6 md:pt-40"
      >
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
          Sistem Informasi Politik Daerah
        </h1>
        <p className="text-lg text-gray-200 max-w-2xl mx-auto mb-8">
          Sistem Informasi Politik Kabupaten Badung hadir sebagai inovasi
          digital sederhana yang menyediakan informasi data politik secara
          online, transparan, dan mudah diakses.
        </p>
        <Button size="lg" className="bg-primary text-white">
          Selengkapnya
        </Button>
      </motion.div>
    </section>
  );
}
