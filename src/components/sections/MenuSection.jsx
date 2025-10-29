import { Card, CardContent } from "@/components/ui/card";
import {
  Vote,
  Landmark,
  Lightbulb,
  BarChart3,
  Users,
  ClipboardCheck,
  UserCheck,
  UserPlus,
  UserCog,
} from "lucide-react";

const menus = [
  {
    title: "Penyelenggara Pemilu",
    icon: <Vote className="text-blue-500 w-8 h-8" />,
    link: "/penyelenggara",
  },
  {
    title: "Partai Politik",
    icon: <Landmark className="text-red-500 w-8 h-8" />,
    link: "/partai",
  },
  {
    title: "Inovasi dan Pelayanan Digital",
    icon: <Lightbulb className="text-yellow-500 w-8 h-8" />,
    link: "/inovasi",
  },
  {
    title: "Statistik dan Analisa Politik Lokal",
    icon: <BarChart3 className="text-green-500 w-8 h-8" />,
    link: "#statistik",
  },
  {
    title: "Dewan Perwakilan Rakyat Daerah",
    icon: <Users className="text-purple-500 w-8 h-8" />,
    link: "/dprd",
  },
  {
    title: "Pengawasan",
    icon: <ClipboardCheck className="text-orange-500 w-8 h-8" />,
    link: "#pengawasan",
  },
  {
    title: "Pemilihan Kepala Daerah di Kabupaten Badung",
    icon: <UserCheck className="text-cyan-500 w-8 h-8" />,
    link: "/pilkada",
  },
  {
    title: "Pemilihan Umum Presiden, DPR RI, DPRD Bali, DPRD Badung",
    icon: <UserPlus className="text-pink-500 w-8 h-8" />,
    link: "#pemilu",
  },
  {
    title: "Kepala Daerah",
    icon: <UserCog className="text-indigo-500 w-8 h-8" />,
    link: "#kepaladaerah",
  },
];

export function MenuSection() {
  return (
    <div className="relative flex flex-col items-center justify-center z-20 -mt-32 lg:-mt-60 xl:-mt-90">
      <div className="w-11/12 md:w-3/4 bg-transparent backdrop-blur-lg border border-white/40 rounded-4xl p-8">
        <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
          {menus.map((menu, index) => (
            <a key={index} href={menu.link} className="w-full h-full">
              <Card className="group flex h-full hover:shadow-xl hover:scale-[1.05] hover:bg-[url('/assets/img/royal-watercolor-valentine-red-background_1340-4028.jpg')] hover:text-white text-gray-800 transition-allduration-300 ease-out cursor-pointer rounded-2xl overflow-hidden">
                <CardContent className="flex flex-col items-center justify-center md:justify-start text-center lg:flex-row lg:items-center lg:text-left gap-4 w-full h-full ">
                  {/* Icon */}
                  <div className="w-20 h-20 min-w-20 flex items-center justify-center rounded-full bg-gray-50/60 shadow-inner group-hover:bg-white/20 transition-colors flex-shrink-0">
                    {menu.icon}
                  </div>

                  {/* Teks */}
                  <p className="font-semibold text-sm md:text-base leading-snug group-hover:text-white">
                    {menu.title}
                  </p>
                </CardContent>
              </Card>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
