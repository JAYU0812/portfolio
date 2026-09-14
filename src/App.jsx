import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Resume from "./pages/Resume";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import MedicalStore from "./pages/demo/MedicalStore";
import KiranaStore from "./pages/demo/KiranaStore";
import Salon from "./pages/demo/Salon";
import Layout from "./components/Layout";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout><Home /></Layout>} />
        <Route path="/about" element={<Layout><About /></Layout>} />
        <Route path="/projects" element={<Layout><Projects /></Layout>} />
        <Route path="/resume" element={<Layout><Resume /></Layout>} />
        <Route path="/contact" element={<Layout><Contact /></Layout>} />
        
        {/* Client Demo Pages */}
        <Route path="/medical-demo" element={<MedicalStore />} />
        <Route path="/kirana-demo" element={<KiranaStore />} />
        <Route path="/salon-demo" element={<Salon />} />

        {/* 404 Catch-All */}
        <Route path="*" element={<Layout><NotFound /></Layout>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;