import { Menu } from "lucide-react";
import logo from "@/assets/img/logo.png";

export function Navbar() {
  return (
    <nav className="w-full flex items-center justify-between px-8 py-4 bg-white shadow-sm fixed top-0 left-0 z-50">
      {/* 🔹 Logo + Nama */}
      <div className="flex items-center gap-3">
        <a href="/">
          <img
            src={logo} // 🔧 ganti sesuai path logo kamu
            alt="Logo KesbangPol"
            className="h-10 object-contain"
          />
        </a>
      </div>

      {/* 🔹 Menu Navigasi */}
      <div className="hidden md:flex gap-6 text-sm font-medium text-gray-700">
        <a href="/" className="hover:text-primary transition-colors">
          Home
        </a>
        <a href="/contact" className="hover:text-primary transition-colors">
          Contact
        </a>
      </div>

      {/* 🔹 Tombol Mobile */}
      <button className="md:hidden">
        <Menu className="w-6 h-6 text-gray-700" />
      </button>
    </nav>
  );
}
