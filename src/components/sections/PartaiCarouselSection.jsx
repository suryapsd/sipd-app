import { useRef } from "react";
import Autoplay from "embla-carousel-autoplay";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";

export function PartaiCarouselSection({ partai = [] }) {
  const plugin = useRef(Autoplay({ delay: 2000, stopOnInteraction: true }));

  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      <div className="flex flex-col md:flex-row items-center gap-12">
        {/* KIRI: TEKS */}
        <div className="w-full md:w-1/3 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-primary">
            Partai Politik
          </h2>
          <div className="w-16 h-0.5 mx-auto md:mx-0 bg-[#cc0000] my-4 rounded-full"></div>
          <p className="text-gray-700 mb-6 leading-relaxed">
            Kabupaten Badung memiliki 15 partai politik terverifikasi KPU dengan
            dukungan tersebar di enam kecamatan. Partai politik berperan sebagai
            sarana pendidikan politik, penyalur aspirasi, dan penghubung
            masyarakat dengan pemerintah daerah.
          </p>
          <Button variant="outline">
            Selengkapnya
            <ArrowRight />
          </Button>
        </div>

        {/* KANAN: CAROUSEL */}
        <div className="w-full md:w-2/3 flex justify-center items-center">
          {partai.length === 0 ? (
            <div className="w-full flex justify-center items-center h-64 text-gray-500">
              Tidak ada data partai.
            </div>
          ) : (
            <Carousel
              opts={{ align: "center" }}
              className="w-full max-w-sm lg:max-w-xl"
              plugins={[plugin.current]}
              onMouseEnter={plugin.current.stop}
              onMouseLeave={plugin.current.reset}
            >
              <CarouselContent className="overflow-visible">
                {partai.map((p, idx) => (
                  <CarouselItem
                    key={idx}
                    className="basis-full sm:basis-1/2 lg:basis-1/3"
                  >
                    <div className="p-0.5 h-full">
                      <Card className="h-full shadow-sm hover:shadow-md hover:scale-95 transition-all duration-300 flex flex-col">
                        <CardContent className="flex flex-col items-center justify-between text-center h-full">
                          <div className="flex flex-col items-center">
                            <img
                              src={p["logo_partai"]}
                              alt={p["nama_partai"]}
                              className="h-20 object-contain mb-4 brightness-105"
                              referrerPolicy="no-referrer"
                            />
                            <CardTitle className="font-semibold text-gray-800 leading-snug">
                              {p["nama_partai"]}
                            </CardTitle>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-0 md:-left-10" />
              <CarouselNext className="right-0 md:-right-10" />
            </Carousel>
          )}
        </div>
      </div>
    </section>
  );
}
