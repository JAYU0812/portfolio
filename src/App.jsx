import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";

import Home from "./pages/Home";
import Layout from "./components/Layout";
import ScrollToTop from "./components/ScrollToTop";

// Code-split routes to reduce initial bundle and maximize performance
const About = lazy(() => import("./pages/About"));
const Projects = lazy(() => import("./pages/Projects"));
const ProjectDetail = lazy(() => import("./pages/ProjectDetail"));
const Resume = lazy(() => import("./pages/Resume"));
const Contact = lazy(() => import("./pages/Contact"));
const DeveloperQuestions = lazy(() => import("./pages/DeveloperQuestions"));
const QuestionCategory = lazy(() => import("./pages/QuestionCategory"));
const QuestionDetail = lazy(() => import("./pages/QuestionDetail"));
const MedicalStore = lazy(() => import("./pages/demo/MedicalStore"));
const KiranaStore = lazy(() => import("./pages/demo/KiranaStore"));
const Salon = lazy(() => import("./pages/demo/Salon"));
const NotFound = lazy(() => import("./pages/NotFound"));

function RouteFallback() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <div className="w-8 h-8 border-2 border-[#C27803] border-t-transparent rounded-full animate-spin"></div>
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Suspense fallback={<RouteFallback />}>
          <Routes>
            <Route path="/" element={<Layout><Home /></Layout>} />
            <Route path="/about" element={<Layout><About /></Layout>} />
            <Route path="/projects" element={<Layout><Projects /></Layout>} />
            <Route path="/projects/:id" element={<Layout><ProjectDetail /></Layout>} />
            <Route path="/resume" element={<Layout><Resume /></Layout>} />
            <Route path="/contact" element={<Layout><Contact /></Layout>} />
            
            {/* Developer Questions & Answers Knowledge Hub */}
            <Route path="/developer-questions" element={<Layout><DeveloperQuestions /></Layout>} />
            <Route path="/developer-questions/:categorySlug" element={<Layout><QuestionCategory /></Layout>} />
            <Route path="/developer-questions/:categorySlug/:questionSlug" element={<Layout><QuestionDetail /></Layout>} />

            {/* Client Demo Pages */}
            <Route path="/medical-demo" element={<MedicalStore />} />
            <Route path="/kirana-demo" element={<KiranaStore />} />
            <Route path="/salon-demo" element={<Salon />} />

            {/* 404 Catch-All */}
            <Route path="*" element={<Layout><NotFound /></Layout>} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;