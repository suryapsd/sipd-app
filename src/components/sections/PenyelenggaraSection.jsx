// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

export function PenyelenggaraSection() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      {/* Grid dua kolom */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* KPU */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-white shadow-lg rounded-2xl p-8 border-t-4 border-red-600 flex flex-col items-center text-center hover:shadow-xl transition-shadow duration-300"
        >
          <a
            href="https://kab-badung.kpu.go.id/"
            className="flex flex-col items-center text-center"
            target="_blank"
          >
            <img
              src="/assets/img/logo-kpu.png"
              alt="Logo KPU"
              className="h-44 mb-6 object-contain"
            />
            <h3 className="text-2xl font-bold mb-4 text-gray-900 underline underline-offset-4">
              KPU KABUPATEN BADUNG
            </h3>
            <ul className="text-gray-700 text-left list-disc list-inside leading-relaxed space-y-2 max-w-md">
              <li>Profil dan Struktur Lembaga KPU</li>
              <li>
                Jumlah Badan Adhoc:
                <ol className="list-decimal list-inside ml-4 mt-1 space-y-1">
                  <li>PPK (Panitia Pemilihan Kecamatan)</li>
                  <li>PPS (Panitia Pemungutan Suara)</li>
                  <li>KPPS (Kelompok Penyelenggara Pemungutan Suara)</li>
                </ol>
              </li>
            </ul>
          </a>
        </motion.div>

        {/* BAWASLU */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-white shadow-lg rounded-2xl p-8 border-t-4 border-yellow-600 hover:shadow-xl transition-shadow duration-300"
        >
          <a
            href="https://badung.bawaslu.go.id/"
            className="flex flex-col items-center text-center"
            target="_blank"
          >
            <img
              src="/assets/img/logo-bawaslu.png"
              alt="Logo Bawaslu"
              className="h-44 mb-6 object-contain"
            />
            <h3 className="text-2xl font-bold mb-4 text-gray-900 underline underline-offset-4">
              BAWASLU KABUPATEN BADUNG
            </h3>
            <ul className="text-gray-700 text-left list-disc list-inside leading-relaxed space-y-2 max-w-md">
              <li>Profil dan Struktur Bawaslu Badung</li>
              <li>
                Jumlah Badan Adhoc:
                <ol className="list-decimal list-inside ml-4 mt-1 space-y-1">
                  <li>Panwaslucam</li>
                  <li>Panwas Desa/Kelurahan</li>
                  <li>Pengawas TPS</li>
                </ol>
              </li>
            </ul>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
