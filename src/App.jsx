// src/App.jsx
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import PartaiPage from "./pages/PartaiPage";
import PenyelenggaraPage from "./pages/PenyelenggaraPage";
import InovasiDigitalPage from "./pages/InovasiDigitalPage";
import DprPage from "./pages/DprPage";
import PilkadaPage from "./pages/PilkadaPage";

export default function App() {
  return (
    <Router>
      {/* Routes */}
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/partai" element={<PartaiPage />} />
        <Route path="/penyelenggara" element={<PenyelenggaraPage />} />
        <Route path="/inovasi" element={<InovasiDigitalPage />} />
        <Route path="/dprd" element={<DprPage />} />
        <Route path="/pilkada" element={<PilkadaPage />} />
      </Routes>
    </Router>
  );
}
