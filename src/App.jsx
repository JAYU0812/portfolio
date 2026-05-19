import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Resume from "./pages/Resume";
import Contact from "./pages/Contact";
import MedicalStore from "./pages/demo/MedicalStore";
import KiranaStore from "./pages/demo/KiranaStore";
import Salon from "./pages/demo/Salon";

function App() {
  return (
    <BrowserRouter>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/medical-demo" element={<MedicalStore />} />
        <Route path="/kirana-demo" element={<KiranaStore />} />
        <Route path="/salon-demo" element={<Salon />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;