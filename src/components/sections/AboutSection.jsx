import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export function AboutSection() {
  const images = [
    "assets/img/1920x1080_dengan_latar_foto_bupati_dan_wakil_bupati_di_tengah.webp",
    "assets/img/9.jpeg",
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      <h2 className="text-3xl md:text-4xl font-bold text-primary">
        Badan Kesatuan Bangsa dan Politik <br />
        Kabupaten Badung
      </h2>
      <div className="w-16 h-0.5 bg-[#cc0000] mx-auto mt-4 mb-12 rounded-full"></div>
      <div className="flex flex-col md:flex-row items-center gap-12">
        {/* KIRI: CAROUSEL GAMBAR */}
        <div className="w-full md:w-1/2 flex justify-center items-center">
          <div className="relative w-full">
            <Carousel className="w-full" opts={{ align: "center" }}>
              <CarouselContent>
                {images.map((src, index) => (
                  <CarouselItem key={index}>
                    <div className="p-1">
                      <Card className="overflow-hidden rounded-2xl shadow-md p-0">
                        <CardContent className="p-0">
                          <img
                            src={src}
                            alt={`Foto ${index + 1}`}
                            className="w-full h-96 object-cover"
                          />
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-2" />
              <CarouselNext className="right-2" />
            </Carousel>
          </div>
        </div>

        {/* KANAN: TEKS PENJELASAN */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <p className="text-gray-700 mb-6 leading-relaxed">
            Badan Kesatuan Bangsa dan Politik (Kesbangpol) Kabupaten Badung
            bertugas merumuskan kebijakan teknis serta melaksanakan kebijakan di
            bidang pembinaan ideologi Pancasila dan wawasan kebangsaan,
            penyelenggaraan politik dalam negeri dan kehidupan demokrasi,
            pemeliharaan ketahanan ekonomi, sosial, dan budaya, serta pembinaan
            kerukunan antar-suku, agama, ras, dan golongan.
          </p>
          <p className="text-gray-700 mb-6 leading-relaxed">
            Selain itu, Kesbangpol melakukan fasilitasi dan pemberdayaan
            organisasi kemasyarakatan, pelaksanaan kewaspadaan nasional serta
            penanganan konflik sosial di daerah; menyelenggarakan koordinasi,
            evaluasi, dan pelaporan untuk seluruh fungsi tersebut; serta
            memfasilitasi forum koordinasi pimpinan daerah. Badan ini juga
            menyelenggarakan administrasi kesekretariatan dan melaksanakan tugas
            lain yang diberikan oleh Bupati, sehingga mendukung stabilitas dan
            keharmonisan kehidupan berbangsa dan bernegara di Kabupaten Badung.
          </p>
        </div>
      </div>
    </section>
  );
}
