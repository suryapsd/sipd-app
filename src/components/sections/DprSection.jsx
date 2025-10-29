// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

export function DprSection({ anggota = [] }) {
  function formatTTL(tempat, tanggalIso) {
    try {
      if (!tanggalIso) return tempat || "-";

      const date = new Date(tanggalIso);
      const day = date.getDate();
      const month = date.getMonth();
      const year = date.getFullYear();

      const monthNames = [
        "Januari",
        "Februari",
        "Maret",
        "April",
        "Mei",
        "Juni",
        "Juli",
        "Agustus",
        "September",
        "Oktober",
        "November",
        "Desember",
      ];

      const formattedDate = `${day} ${monthNames[month]} ${year}`;

      // gabungkan tempat dan tanggal
      return tempat ? `${tempat}, ${formattedDate}` : formattedDate;
    } catch {
      return "-";
    }
  }

  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      {/* Daftar Anggota */}
      <div className="flex flex-col gap-10">
        {anggota.length === 0 ? (
          <p className="text-gray-500 italic text-left">
            Data anggota DPRD belum tersedia.
          </p>
        ) : (
          anggota.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              viewport={{ once: true }}
              className="flex flex-col md:flex-row bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              {/* FOTO */}
              <div className="md:w-1/3 w-full bg-gray-100 flex justify-center items-center">
                <img
                  src={item.foto || "/assets/img/default-profile.png"}
                  alt={item.nama}
                  className="w-full h-80 md:h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* DETAIL */}
              <div className="md:w-2/3 w-full p-6 md:p-8 text-gray-800 text-left">
                <h3 className="text-2xl font-bold text-gray-900 mb-1">
                  {item.nama}
                </h3>
                <p className="text-red-600 font-semibold mb-6">
                  {item.jabatan}
                </p>

                {/* Grid 2 Kolom */}
                <div className="space-y-1 text-sm md:text-base leading-relaxed">
                  <div className="flex">
                    <span className="w-48 font-semibold">Nama</span>
                    <span className="mr-2">:</span>
                    <span>{item.nama}</span>
                  </div>
                  <div className="flex">
                    <span className="w-48 font-semibold">Jabatan</span>
                    <span className="mr-2">:</span>
                    <span>{item.jabatan}</span>
                  </div>
                  <div className="flex">
                    <span className="w-48 font-semibold">Partai Politik</span>
                    <span className="mr-2">:</span>
                    <span>{item.partai_politik}</span>
                  </div>
                  <div className="flex">
                    <span className="w-48 font-semibold">Fraksi</span>
                    <span className="mr-2">:</span>
                    <span>{item.fraksi}</span>
                  </div>
                  <div className="flex">
                    <span className="w-48 font-semibold">
                      Tempat / Tgl Lahir
                    </span>
                    <span className="mr-2">:</span>
                    <span>
                      {item.tempat_lahir || item.tanggal_lahir
                        ? formatTTL(item.tempat_lahir, item.tanggal_lahir)
                        : "-"}
                    </span>
                  </div>
                  <div className="flex">
                    <span className="w-48 font-semibold">Jenis Kelamin</span>
                    <span className="mr-2">:</span>
                    <span>{item.jenis_kelamin}</span>
                  </div>
                  <div className="flex">
                    <span className="w-48 font-semibold">
                      Status Perkawinan
                    </span>
                    <span className="mr-2">:</span>
                    <span>{item.status_perkawinan}</span>
                  </div>
                  <div className="flex">
                    <span className="w-48 font-semibold">Agama</span>
                    <span className="mr-2">:</span>
                    <span>{item.agama}</span>
                  </div>
                  <div className="flex">
                    <span className="w-48 font-semibold">Alamat</span>
                    <span className="mr-2">:</span>
                    <span>{item.alamat}</span>
                  </div>
                  <div className="flex">
                    <span className="w-48 font-semibold">Perolehan Suara</span>
                    <span className="mr-2">:</span>
                    <span>
                      {item.perolehan_suara
                        ? new Intl.NumberFormat("id-ID").format(
                            item.perolehan_suara
                          )
                        : "–"}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))
        )}
      </div>
    </section>
  );
}
