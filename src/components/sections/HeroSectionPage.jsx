export function HeroSectionPage({
  image = "/assets/img/840x942_tanpa_latar_foto_bupati_dan_wakil_bupati_ditengah.jpg",
  title = "Title",
  desc = "Description",
}) {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-30 md:py-30">
      <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-10 md:gap-16">
        {/* BAGIAN GAMBAR */}
        <div className="w-full md:w-1/2 flex justify-center items-center">
          <div className="w-full max-w-md ">
            <img
              src={image}
              alt="Hero image"
              className="w-full h-full object-contain md:object-cover rounded-2xl"
            />
          </div>
        </div>
        {/* BAGIAN TEKS */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary leading-tight">
            {title}
          </h2>
          <div className="w-20 h-0.5 md:h-1 bg-[#cc0000] mt-4 mb-8 mx-auto md:mx-0 rounded-full"></div>
          <p className="text-gray-700 text-sm md:text-base leading-relaxed">
            {desc}
          </p>
        </div>
      </div>
    </section>
  );
}
