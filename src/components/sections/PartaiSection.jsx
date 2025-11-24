import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Card, CardContent, CardTitle } from "@/components/ui/card";

export function PartaiSection({ partai = [] }) {
  const [open, setOpen] = useState(false);
  const [selectedUrl, setSelectedUrl] = useState("");

  const openModal = (url) => {
    setSelectedUrl(url);
    setOpen(true);
  };

  return (
    <section className="max-w-7xl mx-auto px-6 pb-20">
      {/* === GRID === */}
      <div
        className="
        grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6
      "
      >
        {partai.map((p, idx) => (
          <Card
            key={idx}
            onClick={() => openModal(p["info_partai"])}
            className="
              cursor-pointer flex flex-col items-center justify-between 
              shadow-sm hover:shadow-md hover:scale-95 
              transition-all duration-300 
              h-full text-center
            "
          >
            <CardContent className="flex flex-col items-center justify-between h-full p-4">
              <CardTitle className="text-xl font-bold bg-gray-100 rounded-lg px-4 py-0.5">
                {p["no_urut"]}
              </CardTitle>

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

      {/* === MODAL === */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-[90vw] md:max-w-[70vw]">
          <DialogHeader>
            <DialogTitle>Informasi Partai Politik</DialogTitle>
          </DialogHeader>
          {/* iframe → mungkin diblock, tapi tetap mencoba */}
          <iframe
            src={selectedUrl}
            className="w-full h-[80vh] border rounded"
            onError={(e) => {
              e.target.outerHTML = `
                <div class='text-center p-6 text-red-600'>
                  Tidak dapat menampilkan halaman KPU (diblokir oleh server).
                </div>
              `;
            }}
          ></iframe>
        </DialogContent>
      </Dialog>
    </section>
  );
}
