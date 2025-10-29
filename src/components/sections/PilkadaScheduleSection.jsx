// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

export function PilkadaScheduleSection() {
  const phases = [
    {
      title: "Fase Persiapan",
      color: "from-red-500 to-orange-500",
      stages: [
        {
          name: "Perencanaan Program dan Anggaran",
          date: "Sampai 26 Januari 2024",
        },
        {
          name: "Penyusunan Peraturan Penyelenggaraan Pemilihan",
          date: "Sampai 18 November 2024",
        },
        {
          name: "Perencanaan Penyelenggaraan dan Tahapan",
          date: "Sampai 18 November 2024",
        },
        {
          name: "Pembentukan PPK, PPS, dan KPPS",
          date: "17 April – 18 November 2024",
        },
      ],
    },
    {
      title: "Fase Pemutakhiran Data & Dukungan",
      color: "from-orange-500 to-yellow-500",
      stages: [
        {
          name: "Pemutakhiran & Penyusunan Daftar Pemilih",
          date: "31 Mei – 23 September 2024",
        },
        {
          name: "Penyerahan Daftar Penduduk Potensial Pemilih",
          date: "24 April – 31 Mei 2024",
        },
        {
          name: "Pemberitahuan & Pendaftaran Pemantau Pemilihan",
          date: "27 Februari – 16 November 2024",
        },
        {
          name: "Pemenuhan Syarat Dukungan Pasangan Calon Perseorangan",
          date: "5 Mei – 19 Agustus 2024",
        },
      ],
    },
    {
      title: "Fase Pendaftaran & Penetapan Calon",
      color: "from-yellow-500 to-green-500",
      stages: [
        {
          name: "Pengumuman Pendaftaran Pasangan Calon",
          date: "24 – 26 Agustus 2024",
        },
        { name: "Pendaftaran Pasangan Calon", date: "27 – 29 Agustus 2024" },
        {
          name: "Penelitian Persyaratan Calon",
          date: "27 Agustus – 21 September 2024",
        },
        { name: "Penetapan Pasangan Calon", date: "22 September 2024" },
      ],
    },
    {
      title: "Fase Kampanye & Pemungutan Suara",
      color: "from-green-500 to-sky-500",
      stages: [
        {
          name: "Pelaksanaan Kampanye",
          date: "25 September – 23 November 2024",
        },
        {
          name: "Pemungutan & Penghitungan Suara",
          date: "27 November – 16 Desember 2024",
        },
      ],
    },
    {
      title: "Fase Penetapan & Pengesahan",
      color: "from-sky-500 to-blue-600",
      stages: [
        {
          name: "Penetapan Calon Terpilih",
          date: "Paling lama 5 hari setelah putusan MK atau tanpa sengketa",
        },
        {
          name: "Pengesahan Pengangkatan Calon Terpilih",
          date: "Paling lama 3 hari setelah penetapan calon terpilih",
        },
      ],
    },
  ];

  return (
    <section className="max-w-6xl mx-auto px-6 py-20">
      {/* Header */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-extrabold text-gray-900 tracking-tight">
          Tahapan dan Jadwal Pilkada 2024
        </h2>
        <p className="text-gray-600 mt-3 text-lg max-w-2xl mx-auto">
          Berdasarkan PKPU Nomor 2 Tahun 2024 tentang Tahapan dan Jadwal
          Pemilihan Gubernur, Wakil Gubernur, Bupati, Wakil Bupati, Wali Kota,
          dan Wakil Wali Kota Tahun 2024.
        </p>
      </div>

      {/* Timeline */}
      <div className="relative border-l-4 border-gray-200 ml-6 space-y-16">
        {phases.map((phase, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="relative pl-10"
          >
            {/* Bullet */}
            <div
              className={`absolute -left-4 w-8 h-8 rounded-full bg-gradient-to-r ${phase.color} flex items-center justify-center text-white font-bold shadow-lg`}
            >
              {index + 1}
            </div>

            {/* Phase Card */}
            <div className="bg-white shadow-md rounded-2xl p-8 border border-gray-100">
              <h3
                className={`text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r ${phase.color} mb-8 text-center`}
              >
                {phase.title}
              </h3>

              {/* Stage Cards Grid */}
              <div className="grid md:grid-cols-2 gap-6">
                {phase.stages.map((stage, i) => (
                  <div
                    key={i}
                    className="bg-gray-50 rounded-xl p-5 border border-gray-100 hover:border-red-400 hover:shadow-sm transition-all"
                  >
                    <div className="flex items-start">
                      <div className="w-2 h-2 mt-2 bg-red-500 rounded-full mr-3 flex-shrink-0"></div>
                      <div>
                        <p className="text-start font-medium text-gray-900">
                          {stage.name}
                        </p>
                        <p className="text-start text-sm text-gray-500 mt-1">
                          {stage.date}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
