import { useState } from "react";
import { projects } from "../data/projects";
import ProjectCard from "../components/ProjectCard";
import TimelineRoadmap from "../components/TimelineRoadmap";
import SEO from "../components/SEO";
import { Link } from "react-router-dom";
import { 
  Layers, 
  Smartphone, 
  Globe, 
  Building2, 
  Cpu, 
  ArrowUpRight,
  Store,
  Terminal,
  Milestone,
  LayoutGrid
} from "lucide-react";

export default function Projects() {
  const [viewMode, setViewMode] = useState("roadmap"); // 'roadmap' | 'grid'
  const [activeFilter, setActiveFilter] = useState("all");

  const filterTabs = [
    { id: "all", label: "All Projects", count: projects.length, icon: <Layers className="w-3.5 h-3.5" /> },
    { id: "crm", label: "Enterprise & CRMs", count: projects.filter(p => p.filterCategory === "crm").length, icon: <Building2 className="w-3.5 h-3.5" /> },
    { id: "tools", label: "Developer Tools & Desktop", count: projects.filter(p => p.filterCategory === "tools").length, icon: <Terminal className="w-3.5 h-3.5" /> },
    { id: "mobile", label: "Mobile & Play Store", count: projects.filter(p => p.filterCategory === "mobile").length, icon: <Smartphone className="w-3.5 h-3.5" /> },
    { id: "web", label: "Web Platforms", count: projects.filter(p => p.filterCategory === "web").length, icon: <Globe className="w-3.5 h-3.5" /> },
    { id: "systems", label: "Smart Systems & IoT", count: projects.filter(p => p.filterCategory === "systems").length, icon: <Cpu className="w-3.5 h-3.5" /> }
  ];

  const filteredProjects = activeFilter === "all" 
    ? projects 
    : projects.filter(p => p.filterCategory === activeFilter);

  const handleMascotSpeak = (text) => {
    window.dispatchEvent(new CustomEvent("mascot-speak", { detail: { text } }));
  };

  return (
    <div className="py-8 sm:py-16 text-[#121316] dark:text-[#F5F5F7] transition-colors duration-200">
      <SEO 
        title="Engineering Portfolio & Production Projects | Jay Soni"
        description="Explore 20 production systems, commercial CRMs, Google Play Store applications, offline-first mobile apps, and developer tools engineered by Jay Soni in Ahmedabad."
        keywords="Jay Soni Projects, PropKart CRM, Parichay Sammelan App, Jeweller Ledger, GitSphere Desktop, Flutter Projects Ahmedabad, React Production Apps, Software Architecture Portfolio"
        canonical="https://portfolio-iota-nine-7b2v5ah7u8.vercel.app/projects"
      />
      {/* ----------------- 1. PAGE HEADER ----------------- */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 mb-8 sm:mb-12">
        <div className="max-w-3xl">
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#C27803] dark:text-[#E8C37D]">
            Engineering Portfolio & Roadmap
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-[#121316] dark:text-[#F5F5F7] tracking-tight mt-1 mb-3 sm:mb-4">
            Production Systems & Engineering Journey
          </h1>
          <p className="text-sm sm:text-lg text-[#4A4E57] dark:text-[#A1A7B5] leading-relaxed">
            Every project here represents real-world software deployed in production — from enterprise PropTech operating systems and sovereign P2P cryptographic networks to Google Play Store releases and retail GST ERPs.
          </p>
        </div>

        {/* View Mode Switcher: Timeline Roadmap vs Category Grid */}
        <div className="mt-6 sm:mt-8 flex flex-wrap items-center gap-2 p-1.5 bg-white dark:bg-[#14161E] border border-[#E8E5DF] dark:border-[#232733] rounded-2xl shadow-xs w-full sm:w-fit">
          <button
            onClick={() => setViewMode("roadmap")}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
              viewMode === "roadmap"
                ? "bg-[#121316] text-white dark:bg-[#C27803] dark:text-white shadow-xs"
                : "text-[#4A4E57] dark:text-[#A1A7B5] hover:bg-[#F2EDE4] dark:hover:bg-[#1C202B] hover:text-[#121316] dark:hover:text-white"
            }`}
          >
            <Milestone className="w-4 h-4 text-[#C27803] dark:text-inherit" />
            <span>Timeline Roadmap (2023 – Present)</span>
            <span className={`text-[10px] font-mono px-2 py-0.5 rounded-md ${
              viewMode === "roadmap" 
                ? "bg-[#333740] text-[#E8C37D] dark:bg-black/30 dark:text-white" 
                : "bg-[#F2EDE4] dark:bg-[#1C202B] text-[#7A7E89] dark:text-[#A1A7B5]"
            }`}>
              Recommended
            </span>
          </button>

          <button
            onClick={() => setViewMode("grid")}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
              viewMode === "grid"
                ? "bg-[#121316] text-white dark:bg-[#C27803] dark:text-white shadow-xs"
                : "text-[#4A4E57] dark:text-[#A1A7B5] hover:bg-[#F2EDE4] dark:hover:bg-[#1C202B] hover:text-[#121316] dark:hover:text-white"
            }`}
          >
            <LayoutGrid className="w-4 h-4 text-[#C27803] dark:text-inherit" />
            <span>Category Grid</span>
            <span className={`text-[10px] font-mono px-2 py-0.5 rounded-md ${
              viewMode === "grid" 
                ? "bg-[#333740] text-[#E8C37D] dark:bg-black/30 dark:text-white" 
                : "bg-[#F2EDE4] dark:bg-[#1C202B] text-[#7A7E89] dark:text-[#A1A7B5]"
            }`}>
              {projects.length} Projects
            </span>
          </button>
        </div>
      </section>

      {/* ----------------- 2. MAIN CONTENT (ROADMAP OR GRID) ----------------- */}
      {viewMode === "roadmap" ? (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 mb-16 sm:mb-20">
          <TimelineRoadmap onHoverSpeak={handleMascotSpeak} />
        </section>
      ) : (
        <>
          {/* Category Filter Tabs */}
          <section className="max-w-7xl mx-auto px-4 sm:px-6 mb-8 sm:mb-10">
            <div className="flex overflow-x-auto no-scrollbar scroll-smooth gap-1.5 sm:gap-2 p-1.5 bg-white dark:bg-[#14161E] border border-[#E8E5DF] dark:border-[#232733] rounded-2xl shadow-xs w-full sm:w-fit max-w-full">
              {filterTabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveFilter(tab.id)}
                  className={`shrink-0 flex items-center gap-2 px-3 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer whitespace-nowrap ${
                    activeFilter === tab.id
                      ? "bg-[#121316] text-white dark:bg-[#C27803] dark:text-white shadow-xs"
                      : "text-[#4A4E57] dark:text-[#A1A7B5] hover:bg-[#F2EDE4] dark:hover:bg-[#1C202B] hover:text-[#121316] dark:hover:text-white"
                  }`}
                >
                  {tab.icon}
                  <span>{tab.label}</span>
                  <span className={`text-[10px] font-mono px-1.5 py-0.5 rounded-md ${
                    activeFilter === tab.id 
                      ? "bg-[#333740] text-[#E8C37D] dark:bg-black/30 dark:text-white" 
                      : "bg-[#F2EDE4] dark:bg-[#1C202B] text-[#7A7E89] dark:text-[#8E95A5]"
                  }`}>
                    {tab.count}
                  </span>
                </button>
              ))}
            </div>
          </section>

          {/* Projects Grid */}
          <section className="max-w-7xl mx-auto px-4 sm:px-6 mb-16 sm:mb-20">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-8">
              {filteredProjects.map((project) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  onHoverSpeak={handleMascotSpeak}
                />
              ))}
            </div>
          </section>
        </>
      )}

      {/* ----------------- 3. CLIENT DIGITIZATION DEMOS SECTION ----------------- */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-10 sm:py-12 border-t border-[#E8E5DF] dark:border-[#22252F]">
        <div className="max-w-2xl mb-8">
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#C27803] dark:text-[#E8C37D]">
            Retail Digitization Demos
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#121316] dark:text-[#F5F5F7] mt-1 mb-2">
            Local Business Transformation Solutions
          </h2>
          <p className="text-xs sm:text-sm text-[#4A4E57] dark:text-[#A1A7B5] leading-relaxed">
            In addition to major production systems, I have helped 5+ traditional retail business owners build online storefronts, catalog ordering, and WhatsApp booking tools.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          {[
            {
              title: "Kirana & Grocery Store",
              category: "Retail Inventory Demo",
              desc: "Quick neighborhood grocery ordering system with category filtering and automated WhatsApp cart dispatch.",
              link: "/kirana-demo",
              badge: "Client Template"
            },
            {
              title: "Pharmacy & Medical Store",
              category: "Healthcare Store Demo",
              desc: "Local pharmacy medicine inquiry and diagnostic essentials portal with prescription photo upload flow.",
              link: "/medical-demo",
              badge: "Client Template"
            },
            {
              title: "Glow Beauty & Salon Studio",
              category: "Service Booking Demo",
              desc: "Aesthetic beauty salon service menu and WhatsApp appointment booking integration.",
              link: "/salon-demo",
              badge: "Client Template"
            }
          ].map((demo, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-[#14161E] p-5 sm:p-6 rounded-2xl sm:rounded-3xl border border-[#E8E5DF] dark:border-[#232733] shadow-xs hover:border-[#C27803]/40 dark:hover:border-[#C27803]/60 transition flex flex-col justify-between"
            >
              <div>
                <div className="flex justify-between items-center mb-3">
                  <span className="text-[10px] font-mono uppercase font-bold text-[#C27803] dark:text-[#E8C37D] px-2 py-0.5 rounded bg-[#F2EDE4] dark:bg-[#1C202B]">
                    {demo.badge}
                  </span>
                  <Store className="w-4 h-4 text-[#7A7E89] dark:text-[#8E95A5]" />
                </div>
                <h3 className="text-base sm:text-lg font-bold text-[#121316] dark:text-[#F5F5F7] mb-1">
                  {demo.title}
                </h3>
                <p className="text-xs font-mono text-[#7A7E89] dark:text-[#8E95A5] mb-2 sm:mb-3">
                  {demo.category}
                </p>
                <p className="text-xs text-[#4A4E57] dark:text-[#A1A7B5] leading-relaxed mb-5 sm:mb-6">
                  {demo.desc}
                </p>
              </div>
              <Link
                to={demo.link}
                className="inline-flex items-center gap-2 text-xs font-semibold text-[#121316] dark:text-[#F5F5F7] hover:text-[#C27803] dark:hover:text-[#E8C37D] transition pt-2 border-t border-[#F2EDE4] dark:border-[#22252F]"
              >
                <span>View Interactive Demo</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
