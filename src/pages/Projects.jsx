import { useState } from "react";
import { projects } from "../data/projects";
import ProjectCard from "../components/ProjectCard";
import { Link } from "react-router-dom";
import { 
  Layers, 
  Smartphone, 
  Globe, 
  Building2, 
  Cpu, 
  ArrowUpRight,
  Store,
  Terminal
} from "lucide-react";

export default function Projects() {
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
    <div className="py-8 sm:py-16 text-[#121316]">
      {/* ----------------- 1. PAGE HEADER ----------------- */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 mb-8 sm:mb-12">
        <div className="max-w-3xl">
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#C27803]">
            Engineering Portfolio
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-[#121316] tracking-tight mt-1 mb-3 sm:mb-4">
            Production Software & Live Applications
          </h1>
          <p className="text-sm sm:text-lg text-[#4A4E57] leading-relaxed">
            Every project listed here is a deployed, real-world application engineered to solve operational challenges — featuring enterprise PropTech platforms, Google Play Store releases, proprietary GST billing software, and geofenced attendance algorithms.
          </p>
        </div>
      </section>

      {/* ----------------- 2. FILTER TABS (SWIPEABLE ON MOBILE) ----------------- */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 mb-8 sm:mb-10">
        <div className="flex overflow-x-auto no-scrollbar scroll-smooth gap-1.5 sm:gap-2 p-1.5 bg-white border border-[#E8E5DF] rounded-2xl shadow-xs w-full sm:w-fit -mx-1 px-1.5 sm:mx-0">
          {filterTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveFilter(tab.id)}
              className={`shrink-0 flex items-center gap-2 px-3 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer whitespace-nowrap ${
                activeFilter === tab.id
                  ? "bg-[#121316] text-white shadow-xs"
                  : "text-[#4A4E57] hover:bg-[#F2EDE4] hover:text-[#121316]"
              }`}
            >
              {tab.icon}
              <span>{tab.label}</span>
              <span className={`text-[10px] font-mono px-1.5 py-0.5 rounded-md ${
                activeFilter === tab.id ? "bg-[#333740] text-[#E8C37D]" : "bg-[#F2EDE4] text-[#7A7E89]"
              }`}>
                {tab.count}
              </span>
            </button>
          ))}
        </div>
      </section>

      {/* ----------------- 3. PROJECTS GRID ----------------- */}
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

      {/* ----------------- 4. CLIENT DIGITIZATION DEMOS SECTION ----------------- */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-10 sm:py-12 border-t border-[#E8E5DF]">
        <div className="max-w-2xl mb-8">
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#C27803]">
            Retail Digitization Demos
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#121316] mt-1 mb-2">
            Local Business Transformation Solutions
          </h2>
          <p className="text-xs sm:text-sm text-[#4A4E57] leading-relaxed">
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
              className="bg-white p-5 sm:p-6 rounded-2xl sm:rounded-3xl border border-[#E8E5DF] shadow-xs hover:border-[#C27803]/40 transition flex flex-col justify-between"
            >
              <div>
                <div className="flex justify-between items-center mb-3">
                  <span className="text-[10px] font-mono uppercase font-bold text-[#C27803] px-2 py-0.5 rounded bg-[#F2EDE4]">
                    {demo.badge}
                  </span>
                  <Store className="w-4 h-4 text-[#7A7E89]" />
                </div>
                <h3 className="text-base sm:text-lg font-bold text-[#121316] mb-1">
                  {demo.title}
                </h3>
                <p className="text-xs font-mono text-[#7A7E89] mb-2 sm:mb-3">
                  {demo.category}
                </p>
                <p className="text-xs text-[#4A4E57] leading-relaxed mb-5 sm:mb-6">
                  {demo.desc}
                </p>
              </div>
              <Link
                to={demo.link}
                className="inline-flex items-center gap-2 text-xs font-semibold text-[#121316] hover:text-[#C27803] transition pt-2 border-t border-[#F2EDE4]"
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
