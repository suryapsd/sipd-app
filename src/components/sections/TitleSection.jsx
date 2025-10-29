// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

export function TitleSection({
  img = "assets/img/1920x1080_dengan_latar_foto_bupati_dan_wakil_bupati_di_tengah.webp",
  title = "Kesbangpol",
}) {
  return (
    <section className="relative w-full h-[60vh] overflow-hidden mt-12">
      {/* Gambar background */}
      <img
        src={img}
        alt="Latar belakang Bupati dan Wakil Bupati"
        className="absolute inset-0 w-full h-full object-cover "
      />

      {/* Overlay hitam transparan */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Konten teks */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 flex flex-col items-center justify-center text-center h-full px-6"
      >
        <h1 className="text-3xl md:text-6xl font-bold text-white mb-4">
          {title}
        </h1>
        <div className="w-16 h-0.5 bg-white my-2 md:my-4 rounded-full"></div>
      </motion.div>
    </section>
  );
}
