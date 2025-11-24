import { motion } from "framer-motion";

const apps = [
  {
    logo: "/assets/img/logo-kpu.png",
    title: "SIREKAP",
    desc: "(Sistem Informasi Rekapitulasi)",
    href: "https://play.google.com/store/apps/details?id=id.go.kpu.sirekap2024&hl=id",
  },
  {
    logo: "/assets/img/logo-kpu.png",
    title: "SIDALIH",
    desc: "(Sistem Informasi Daftar Pemilih)",
    href: "https://cekdptonline.kpu.go.id/",
  },
  {
    logo: "/assets/img/logo-kpu.png",
    title: "SILON",
    desc: "(Sistem Informasi Pencalonan)",
    href: "https://sipol.kpu.go.id/",
  },
  {
    logo: "/assets/img/logo-kpu.png",
    title: "SIKADEKA",
    desc: "(Sistem Informasi Kampanye dan Dana Kampanye)",
    href: "https://infopemilu.kpu.go.id/Pemilu/sikadeka",
  },
  {
    logo: "/assets/img/logo-kpu.png",
    title: "infopemilu",
    desc: "(infopemilu.kpu.go.id)",
    href: "https://infopemilu.kpu.go.id/",
  },
  {
    logo: "/assets/img/logo-kpu.png",
    title: "BankPol",
    desc: "Fasilitasi bantuan keuangan Partai Politik di BPKAD Badung",
    href: "https://bakesbangpol.badungkab.go.id/fasilitasi-bantuan-keuangan-partai-politik-",
  },
  {
    logo: "/assets/img/logo-kpu.png",
    title: "Surat Keterangan Terdaftar Partai Politik",
    href: "https://sipol.kpu.go.id/",
  },
  {
    logo: "/assets/img/logo-bawaslu.png",
    title: "SIWASLU",
    desc: "(Sistem Informasi Pengawasan Pemilu)",
    href: "https://play.google.com/store/apps/details?id=com.id.go.bawaslu.siwaslu2024&hl=id",
  },
  {
    logo: "/assets/img/logo-jdih.png",
    title: "JDIH",
    desc: "(Jaringan Dokumentasi dan Informasi Hukum)",
    href: "https://jdih.kpu.go.id/",
  },
  {
    logo: "/assets/img/logo-kpu.png",
    title: "PPID KPU",
    href: "https://ppid.kpu.go.id/",
  },
  {
    logo: "/assets/img/logo-bawaslu.png",
    title: "PPID BAWASLU",
    href: "https://ppid.bawaslu.go.id/",
  },
];

export function InovasiDigitalSection() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      {/* Grid item */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {apps.map((app, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
            viewport={{ once: true }}
            className="relative flex items-center bg-gradient-to-r from-red-600 to-orange-400 rounded-xl shadow-md hover:shadow-lg hover:scale-95 transition-all duration-50 overflow-visible"
          >
            <a href={app.href} target="_blank">
              {/* Logo */}
              <div className="absolute -left-6 top-1/2 -translate-y-1/2">
                <div className="bg-white p-3 rounded-full shadow-md">
                  <img
                    src={app.logo}
                    alt={app.title}
                    className="h-16 w-16 object-contain"
                  />
                </div>
              </div>

              {/* Teks */}
              <div className="pl-20 pr-6 py-4 text-left text-white">
                <h3 className="font-bold text-lg leading-tight">{app.title}</h3>
                {app.desc && (
                  <p className="text-sm text-white/90 font-light">{app.desc}</p>
                )}
              </div>
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
