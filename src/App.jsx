import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Resume from "./pages/Resume";
import Contact from "./pages/Contact";
import MedicalStore from "./pages/demo/MedicalStore";
import KiranaStore from "./pages/demo/KiranaStore";
import Salon from "./pages/demo/Salon";
import Layout from "./components/Layout";

function App() {
  return (
    <BrowserRouter>

      <Routes>
        <Route path="/" element={<Layout><Home /></Layout>} />
        <Route path="/about" element={<Layout><About /></Layout>} />
        <Route path="/projects" element={<Layout><Projects /></Layout>} />
        <Route path="/resume" element={<Layout><Resume /></Layout>} />
        <Route path="/contact" element={<Layout><Contact /></Layout>} />
        <Route path="/medical-demo" element={<MedicalStore />} />
        <Route path="/kirana-demo" element={<KiranaStore />} />
        <Route path="/salon-demo" element={<Salon />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;