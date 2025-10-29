import { Card, CardContent, CardTitle } from "@/components/ui/card";

export function PartaiSection({ partai = [] }) {
  return (
    <section className="max-w-7xl mx-auto px-6 pb-20">
      {partai.length === 0 ? (
        <div className="w-full flex justify-center items-center h-64 text-gray-500">
          Tidak ada data partai.
        </div>
      ) : (
        <div
          className="
            grid 
            grid-cols-2 
            sm:grid-cols-3 
            md:grid-cols-4 
            lg:grid-cols-5 
            gap-6
          "
        >
          {partai.map((p, idx) => (
            <Card
              key={idx}
              className="
                flex flex-col items-center justify-between 
                shadow-sm hover:shadow-md hover:scale-95 
                transition-all duration-300 
                h-full text-center
              "
            >
              <CardContent className="flex flex-col items-center justify-between h-full p-4">
                <div className="w-24 h-24 flex items-center justify-center mb-4">
                  <img
                    src={p["logo_partai"]}
                    alt={p["nama_partai"]}
                    className="max-h-20 h-20 object-contain brightness-105 contrast-110"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <CardTitle className="font-semibold text-gray-800 text-sm leading-snug">
                  {p["nama_partai"]}
                </CardTitle>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </section>
  );
}
