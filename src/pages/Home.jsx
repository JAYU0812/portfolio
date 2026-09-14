import { Link } from "react-router-dom";
import { projects } from "../data/projects";
import { timelineEvents } from "../data/timeline";
import ProjectCard from "../components/ProjectCard";
import ArchitectureConsole from "../components/ArchitectureConsole";
import { 
  ArrowUpRight, 
  Smartphone, 
  Database, 
  Layers, 
  CheckCircle2, 
  MessageCircle, 
  FileText, 
  Zap, 
  Building2, 
  ShieldCheck,
  Terminal
} from "lucide-react";

export default function Home() {
  const featuredProjects = projects.filter((p) => p.featured);

  const handleMascotSpeak = (text) => {
    window.dispatchEvent(new CustomEvent("mascot-speak", { detail: { text } }));
  };

  return (
    <div className="py-8 sm:py-12 text-[#121316]">
      {/* ----------------- 1. HERO SECTION ----------------- */}
      <section className="max-w-7xl mx-auto px-6 pt-4 pb-16 sm:pb-24">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Hero Column */}
          <div className="lg:col-span-7 space-y-7">
            {/* Status Pill */}
            <div 
              onMouseEnter={() => handleMascotSpeak("I am currently architecting PropKart at NB Developers in Ahmedabad!")}
              onMouseLeave={() => handleMascotSpeak(null)}
              className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white border border-[#E8E5DF] shadow-xs text-xs font-mono text-[#121316]"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span className="font-semibold text-[#C27803]">Current Role:</span>
              <span>Software Engineer @ NB Developers</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#121316] leading-[1.12]">
              Building{" "}
              <span className="text-[#C27803] underline decoration-[#E8C37D]/60 decoration-wavy decoration-2">
                Production
              </span>{" "}
              Web & Mobile Systems.
            </h1>

            {/* Intro Paragraph */}
            <p className="text-base sm:text-lg text-[#4A4E57] leading-relaxed max-w-2xl font-normal">
              I’m <span className="font-semibold text-[#121316]">Soni Jaykumar</span>, a Full-Stack Software Engineer specializing in{" "}
              <strong className="text-[#121316] font-semibold">Flutter</strong>,{" "}
              <strong className="text-[#121316] font-semibold">React</strong>,{" "}
              <strong className="text-[#121316] font-semibold">Node.js</strong>, and{" "}
              <strong className="text-[#121316] font-semibold">Offline-First Architectures</strong>. 
              Currently architecting PropKart CRM at NB Developers, with GitSphere desktop visual engine, 2 apps published on the Google Play Store, custom retail GST engines, and physical barcode label printing systems.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4 pt-2">
              <Link
                to="/projects"
                onMouseEnter={() => handleMascotSpeak(`View all ${projects.length} real-world projects with live links!`)}
                onMouseLeave={() => handleMascotSpeak(null)}
                className="px-6 py-3.5 rounded-xl bg-[#121316] text-white hover:bg-[#C27803] transition-all duration-200 text-sm font-semibold shadow-xs flex items-center gap-2"
              >
                <span>Explore Projects</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>

              <Link
                to="/resume"
                onMouseEnter={() => handleMascotSpeak("Read my print-ready ATS resume.")}
                onMouseLeave={() => handleMascotSpeak(null)}
                className="px-6 py-3.5 rounded-xl bg-white border border-[#E8E5DF] text-[#121316] hover:bg-[#F2EDE4] hover:border-[#C27803]/40 transition-all duration-200 text-sm font-semibold shadow-xs flex items-center gap-2"
              >
                <FileText className="w-4 h-4 text-[#C27803]" />
                <span>View Resume</span>
              </Link>

              <a
                href="https://wa.me/917990361109"
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={() => handleMascotSpeak("Message me directly on WhatsApp.")}
                onMouseLeave={() => handleMascotSpeak(null)}
                className="px-5 py-3.5 rounded-xl bg-[#0F766E] text-white hover:bg-[#0D655E] transition-all duration-200 text-sm font-semibold shadow-xs flex items-center gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp Me</span>
              </a>
            </div>

            {/* Key Accomplishments Chips */}
            <div className="pt-4 flex flex-wrap gap-3">
              {[
                { label: "Live: propkart.nbpropertytech.com", link: "https://propkart.nbpropertytech.com" },
                { label: "GitSphere Desktop (v1.0.0)", link: "/projects" },
                { label: "Live: chandrakalajewellers.in", link: "https://chandrakalajewellers.in" },
                { label: "2 Google Play Store Apps", link: "/projects" },
                { label: "5th Rank Hackathon Winner", link: "/projects" }
              ].map((item, idx) => (
                <span
                  key={idx}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#F2EDE4]/80 text-[#3A3D44] border border-[#E8E5DF] text-xs font-mono"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  {item.label}
                </span>
              ))}
            </div>
          </div>

          {/* Right Hero Column: Interactive Architecture Card */}
          <div className="lg:col-span-5">
            <div className="bg-[#121316] text-[#FBF9F5] rounded-3xl p-6 sm:p-8 shadow-xl border border-[#2B2E36] relative overflow-hidden">
              
              {/* Header inside terminal card */}
              <div className="flex items-center justify-between pb-4 border-b border-[#2B2E36] mb-6">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                  <span className="ml-2 font-mono text-xs text-[#8A909E]">
                    jay@architecture-stack
                  </span>
                </div>
                <span className="font-mono text-[10px] uppercase px-2 py-0.5 rounded bg-[#C27803]/20 text-[#E8C37D] border border-[#C27803]/40">
                  Production Live
                </span>
              </div>

              {/* Architecture Core Highlights */}
              <div className="space-y-4 font-mono text-xs">
                
                {/* PropKart Highlight */}
                <div className="bg-[#1C1F26] p-4 rounded-2xl border border-[#2E333D]">
                  <div className="flex items-center justify-between text-[#E8C37D] font-bold mb-1.5">
                    <span className="flex items-center gap-1.5">
                      <Building2 className="w-4 h-4 text-[#C27803]" />
                      PropKart CRM & OS (v2.1.1)
                    </span>
                    <span className="text-[10px] text-emerald-400">ONLINE</span>
                  </div>
                  <p className="text-[#A4ACB9] text-[11px] leading-relaxed mb-2">
                    Offline-First Flutter client (Isar DB) + Supabase PostgreSQL realtime sync + Meta Lead Ads webhook campaign routing.
                  </p>
                  <div className="flex items-center justify-between text-[10px] text-[#7A8291] pt-2 border-t border-[#2E333D]">
                    <span>Real Estate Enterprise CRM</span>
                    <a 
                      href="https://propkart.nbpropertytech.com" 
                      target="_blank" 
                      rel="noreferrer"
                      className="text-[#C27803] hover:underline flex items-center gap-1"
                    >
                      propkart.nbpropertytech.com ↗
                    </a>
                  </div>
                </div>

                {/* GitSphere Desktop Highlight */}
                <div className="bg-[#1C1F26] p-4 rounded-2xl border border-[#2E333D]">
                  <div className="flex items-center justify-between text-[#E8C37D] font-bold mb-1.5">
                    <span className="flex items-center gap-1.5">
                      <Terminal className="w-4 h-4 text-[#C27803]" />
                      GitSphere Desktop (v1.0.0)
                    </span>
                    <span className="text-[10px] text-emerald-400 font-mono">RELEASED</span>
                  </div>
                  <p className="text-[#A4ACB9] text-[11px] leading-relaxed mb-2">
                    Visual Git control center with 4-stage pipeline, SQLite multi-account switching, and 1-click README script runner.
                  </p>
                  <div className="flex items-center justify-between text-[10px] text-[#7A8291] pt-2 border-t border-[#2E333D]">
                    <span>Flutter Desktop + Win32/DWM</span>
                    <span className="text-[#E8C37D]">Inno Setup (12.07 MB)</span>
                  </div>
                </div>

                {/* Google Play Store Apps */}
                <div className="bg-[#1C1F26] p-4 rounded-2xl border border-[#2E333D]">
                  <div className="flex items-center justify-between text-[#E8C37D] font-bold mb-1.5">
                    <span className="flex items-center gap-1.5">
                      <Smartphone className="w-4 h-4 text-[#C27803]" />
                      Google Play Store Apps
                    </span>
                    <span className="text-[10px] text-emerald-400">2 PUBLISHED</span>
                  </div>
                  <div className="space-y-1.5 text-[#A4ACB9] text-[11px]">
                    <div className="flex justify-between items-center">
                      <a 
                        href="https://play.google.com/store/apps/details?id=com.hssolutiontech.ParichaySammelan&pcampaignid=web_share"
                        target="_blank" 
                        rel="noreferrer"
                        className="text-[#FBF9F5] hover:text-[#C27803] flex items-center gap-1"
                      >
                        • Parichay Sammelan (QR Ticket App) ↗
                      </a>
                      <span className="text-[10px] text-emerald-400 font-mono">Live on Store</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <a 
                        href="https://play.google.com/store/apps/details?id=com.jeweller.ledger&pcampaignid=web_share"
                        target="_blank" 
                        rel="noreferrer"
                        className="text-[#FBF9F5] hover:text-[#C27803] flex items-center gap-1"
                      >
                        • KITAAB (Jeweller Ledger App) ↗
                      </a>
                      <span className="text-[10px] text-emerald-400 font-mono">Live on Store</span>
                    </div>
                  </div>
                </div>

                {/* Commercial Domain + GST Engine + Label Printer */}
                <div className="bg-[#1C1F26] p-4 rounded-2xl border border-[#2E333D]">
                  <div className="flex items-center justify-between text-[#E8C37D] font-bold mb-1.5">
                    <span className="flex items-center gap-1.5">
                      <Zap className="w-4 h-4 text-[#C27803]" />
                      Chandrakala Jewellers ERP Suite
                    </span>
                    <span className="text-[10px] text-emerald-400">COMMERCIAL</span>
                  </div>
                  <p className="text-[#A4ACB9] text-[11px] leading-relaxed mb-2">
                    Live Web Platform + Custom GST Billing CRM + Flutter Thermal Barcode Tag Printer (22-slot staggered HUID jewellery tag layout).
                  </p>
                  <a 
                    href="https://chandrakalajewellers.in" 
                    target="_blank" 
                    rel="noreferrer"
                    className="text-[#C27803] text-[10px] hover:underline flex items-center gap-1"
                  >
                    chandrakalajewellers.in ↗
                  </a>
                </div>

              </div>

              {/* Status footer inside card */}
              <div className="mt-5 pt-4 border-t border-[#2B2E36] flex items-center justify-between text-[11px] font-mono text-[#8A909E]">
                <span>Status: Available for high-impact projects</span>
                <span className="text-emerald-400">● Full Stack</span>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* ----------------- 2. STATS & METRICS ----------------- */}
      <section className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {[
            {
              number: `${projects.length}`,
              label: "Production Systems",
              sub: "PropTech, Desktop, Fintech & Web",
              hover: `All ${projects.length} projects are real production applications solving business workflow problems.`
            },
            {
              number: "2",
              label: "Play Store Apps",
              sub: "Parichay Sammelan & KITAAB",
              hover: "Released natively compiled Android applications on Google Play Store."
            },
            {
              number: "5+",
              label: "Businesses Digitized",
              sub: "Jewellery, Healthcare & Retail",
              hover: "Transformed traditional offline businesses into digital operations with custom CRMs."
            },
            {
              number: "Top 5",
              label: "Hackathon Award",
              sub: "Haversine Geofenced QR System",
              hover: "Secured 5th position among dozens of competitive teams using smart math geofencing."
            }
          ].map((stat, idx) => (
            <div
              key={idx}
              onMouseEnter={() => handleMascotSpeak(stat.hover)}
              onMouseLeave={() => handleMascotSpeak(null)}
              className="bg-white rounded-3xl p-6 sm:p-7 border border-[#E8E5DF] shadow-xs hover:border-[#C27803]/50 hover:shadow-md transition-all duration-300"
            >
              <div className="text-3xl sm:text-4xl font-extrabold text-[#121316] font-mono mb-1 tracking-tight">
                {stat.number}
              </div>
              <div className="text-sm font-bold text-[#C27803] mb-1">
                {stat.label}
              </div>
              <p className="text-xs text-[#656A76]">
                {stat.sub}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ----------------- 3. ARCHITECTURE & TELEMETRY CONSOLE ----------------- */}
      <section className="max-w-7xl mx-auto px-6 py-6 sm:py-8">
        <ArchitectureConsole />
      </section>

      {/* ----------------- 4. FEATURED PROJECTS ----------------- */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#C27803]">
              Featured Engineering
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#121316] tracking-tight mt-1">
              Production Work & Live Deployments
            </h2>
          </div>
          <Link
            to="/projects"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#121316] hover:text-[#C27803] transition"
          >
            <span>View All {projects.length} Projects</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {featuredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onHoverSpeak={handleMascotSpeak}
            />
          ))}
        </div>
      </section>

      {/* ----------------- 4. CHRONOLOGICAL JOURNEY (Feb 2025 -> Present) ----------------- */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-[#E8E5DF] shadow-xs">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#C27803]">
              Growth & Milestones
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#121316] tracking-tight mt-1 mb-4">
              My Engineering Journey (2025 – Present)
            </h2>
            <p className="text-sm sm:text-base text-[#4A4E57] leading-relaxed">
              From building my very first software platform in February 2025 to publishing Android apps on Google Play Store, completing internships in Flutter & React, and now architecting PropKart at NB Developers.
            </p>
          </div>

          <div className="space-y-6">
            {timelineEvents.map((item, idx) => (
              <div
                key={idx}
                onMouseEnter={() => handleMascotSpeak(item.summary)}
                onMouseLeave={() => handleMascotSpeak(null)}
                className="group p-5 sm:p-6 rounded-2xl bg-[#FBF9F5] border border-[#E8E5DF] hover:border-[#C27803]/50 transition-all duration-200"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs font-bold text-[#C27803] px-2.5 py-1 rounded-md bg-[#F2EDE4] border border-[#E8E5DF]">
                      {item.date}
                    </span>
                    <h3 className="text-base font-bold text-[#121316] group-hover:text-[#C27803] transition-colors">
                      {item.title}
                    </h3>
                  </div>
                  <span className="text-xs font-mono text-[#7A7E89] self-start sm:self-auto">
                    {item.badge}
                  </span>
                </div>
                <p className="text-sm text-[#4A4E57] leading-relaxed mb-3">
                  {item.summary}
                </p>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs text-[#656A76]">
                  {item.details.map((detail, dIdx) => (
                    <li key={dIdx} className="flex items-start gap-2">
                      <span className="text-[#C27803] font-bold">•</span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ----------------- 5. CORE ARCHITECTURAL CAPABILITIES ----------------- */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#C27803]">
            Technical Competence
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#121316] tracking-tight mt-1 mb-3">
            Core Engineering Strengths
          </h2>
          <p className="text-sm text-[#4A4E57]">
            Architectural patterns and technologies I leverage to build dependable digital products.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: <Database className="w-6 h-6 text-[#C27803]" />,
              title: "Offline-First Architectures",
              desc: "Engineering local-first client databases with Isar in Flutter, ensuring high responsiveness and zero data loss without internet connectivity."
            },
            {
              icon: <Layers className="w-6 h-6 text-[#C27803]" />,
              title: "Realtime Synchronization",
              desc: "Building bi-directional data pipelines connecting mobile/web clients with Supabase PostgreSQL and Node.js REST / WebSocket services."
            },
            {
              icon: <Smartphone className="w-6 h-6 text-[#C27803]" />,
              title: "Production Mobile Apps",
              desc: "Crafting performant cross-platform Flutter and Android applications, handling device storage, and shipping successfully to Google Play Store."
            },
            {
              icon: <ShieldCheck className="w-6 h-6 text-[#C27803]" />,
              title: "Enterprise PropTech & CRMs",
              desc: "Designing comprehensive business workflows: telecaller modules, lead staging, automated WhatsApp communication, and analytics dashboards."
            },
            {
              icon: <Zap className="w-6 h-6 text-[#C27803]" />,
              title: "Custom Calculation Engines",
              desc: "Programming proprietary math logic, such as automated GST billing for retail jewellers and Haversine spherical geofencing algorithms."
            },
            {
              icon: <Building2 className="w-6 h-6 text-[#C27803]" />,
              title: "Full-Stack Deployment",
              desc: "Managing full application lifecycles from database modeling and API routes to custom domain configurations and production Vercel hosting."
            }
          ].map((feature, idx) => (
            <div
              key={idx}
              className="bg-white p-7 rounded-3xl border border-[#E8E5DF] shadow-xs hover:border-[#C27803]/50 hover:shadow-md transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-2xl bg-[#F2EDE4] flex items-center justify-center mb-5">
                {feature.icon}
              </div>
              <h3 className="text-lg font-bold text-[#121316] mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-[#4A4E57] leading-relaxed">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ----------------- 6. CALL TO ACTION ----------------- */}
      <section className="max-w-4xl mx-auto px-6 py-16 text-center">
        <div className="bg-[#121316] text-white rounded-3xl p-10 sm:p-14 shadow-xl border border-[#2B2E36] relative overflow-hidden">
          <div className="relative z-10 max-w-xl mx-auto space-y-5">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#E8C37D]">
              Open for Opportunities
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              Let’s Build High-Impact Software Together
            </h2>
            <p className="text-sm sm:text-base text-[#A4ACB9] leading-relaxed">
              Whether you need an enterprise PropTech solution, an Offline-First mobile app, a commercial web platform, or a dedicated full-stack software engineer — let's connect.
            </p>
            <div className="flex flex-wrap justify-center gap-4 pt-4">
              <a
                href="https://wa.me/917990361109"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 rounded-xl bg-[#C27803] hover:bg-[#9E6102] text-white font-semibold text-sm transition-colors shadow-xs flex items-center gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Chat on WhatsApp</span>
              </a>
              <Link
                to="/contact"
                className="px-6 py-3.5 rounded-xl bg-[#2B2E36] hover:bg-[#383C46] text-white font-semibold text-sm transition-colors shadow-xs"
              >
                Contact Form
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
