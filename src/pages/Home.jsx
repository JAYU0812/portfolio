import { useState } from "react";
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
  Terminal,
  Award,
  Trophy,
  Eye,
  X
} from "lucide-react";

export default function Home() {
  const [showCertModal, setShowCertModal] = useState(false);
  const featuredProjects = projects.filter((p) => p.featured);

  const handleMascotSpeak = (text) => {
    window.dispatchEvent(new CustomEvent("mascot-speak", { detail: { text } }));
  };

  return (
    <div className="py-6 sm:py-12 text-[#121316] dark:text-[#F5F5F7] transition-colors duration-200">
      {/* ----------------- 1. HERO SECTION ----------------- */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 pt-2 sm:pt-4 pb-12 sm:pb-24 overflow-hidden">
        <div className="grid lg:grid-cols-12 gap-6 lg:gap-8 items-center w-full min-w-0">
          
          {/* Left Hero Column */}
          <div className="lg:col-span-7 space-y-4 sm:space-y-6 min-w-0 w-full">
            {/* Status & Award Badges */}
            <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
              <div 
                onMouseEnter={() => handleMascotSpeak("I am Lead Mobile & Full-Stack Architect at NB Developers / NB PropertyTech in Ahmedabad!")}
                onMouseLeave={() => handleMascotSpeak(null)}
                className="inline-flex items-center gap-1.5 px-2.5 sm:px-3.5 py-1 sm:py-1.5 rounded-full bg-white dark:bg-[#14161E] border border-[#E8E5DF] dark:border-[#262933] shadow-xs text-[11px] sm:text-xs font-mono text-[#121316] dark:text-[#F5F5F7] max-w-full min-w-0"
              >
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shrink-0"></span>
                <span className="font-semibold text-[#C27803] dark:text-[#E8C37D] shrink-0">Role:</span>
                <span className="truncate max-w-[190px] xs:max-w-none">Lead Architect @ NB Developers</span>
              </div>

              <button
                onClick={() => setShowCertModal(true)}
                className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full bg-[#FEF3C7] dark:bg-[#C27803]/20 hover:bg-[#FDE68A] dark:hover:bg-[#C27803]/30 text-[#92400E] dark:text-[#FCD34D] border border-[#FCD34D] dark:border-[#C27803]/40 text-[11px] sm:text-xs font-semibold shadow-xs transition cursor-pointer shrink-0"
                title="View Certificate of Appreciation from NB Infra Projects Limited"
              >
                <Award className="w-3.5 h-3.5 text-[#B45309] dark:text-[#FCD34D] shrink-0" />
                <span>🏆 R&R Winner</span>
              </button>
            </div>

            {/* Main Headline */}
            <h1 className="text-2xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#121316] dark:text-white leading-[1.18] sm:leading-[1.12]">
              Building{" "}
              <span className="text-[#C27803] dark:text-[#E8C37D] underline decoration-[#E8C37D]/60 dark:decoration-[#C27803]/60 decoration-wavy decoration-2">
                Production
              </span>{" "}
              Web & Mobile Systems.
            </h1>

            {/* Intro Paragraph */}
            <p className="text-xs sm:text-base lg:text-lg text-[#4A4E57] dark:text-[#A1A7B5] leading-relaxed max-w-2xl font-normal">
              I’m <span className="font-semibold text-[#121316] dark:text-white">Soni Jaykumar</span>, an Award-Winning Lead Mobile & Full-Stack Architect specializing in{" "}
              <strong className="text-[#121316] dark:text-white font-semibold">Flutter</strong>,{" "}
              <strong className="text-[#121316] dark:text-white font-semibold">React</strong>,{" "}
              <strong className="text-[#121316] dark:text-white font-semibold">Node.js / NestJS</strong>, and{" "}
              <strong className="text-[#121316] dark:text-white font-semibold">Offline-First Architectures</strong>. 
              Currently architecting the enterprise PropTech ecosystem at NB Developers / NB PropertyTech (PropKart OS with Natural Language AI Search, PropKart Broker Portal, live nbpropertytech.com), with GitSphere desktop engine, 2 Google Play Store releases, and custom retail GST ERPs.
            </p>

            {/* Action Buttons: Compact 2x2 grid on mobile, flex row on desktop */}
            <div className="grid grid-cols-2 sm:flex sm:flex-row gap-2 sm:gap-3 pt-1 sm:pt-2 w-full sm:w-auto">
              <Link
                to="/projects"
                onMouseEnter={() => handleMascotSpeak(`View all ${projects.length} real-world projects with live links!`)}
                onMouseLeave={() => handleMascotSpeak(null)}
                className="flex items-center justify-center gap-1.5 px-3 sm:px-5 py-2.5 sm:py-3.5 rounded-xl bg-[#121316] text-white hover:bg-[#C27803] dark:bg-[#C27803] dark:hover:bg-[#E58B0B] active:scale-95 transition-all duration-200 text-xs sm:text-sm font-semibold shadow-xs text-center"
              >
                <span>Explore Projects</span>
                <ArrowUpRight className="w-3.5 h-3.5 shrink-0" />
              </Link>

              <Link
                to="/resume"
                onMouseEnter={() => handleMascotSpeak("Read my print-ready ATS resume.")}
                onMouseLeave={() => handleMascotSpeak(null)}
                className="flex items-center justify-center gap-1.5 px-3 sm:px-5 py-2.5 sm:py-3.5 rounded-xl bg-white dark:bg-[#14161E] border border-[#E8E5DF] dark:border-[#262933] text-[#121316] dark:text-white hover:bg-[#F2EDE4] dark:hover:bg-[#1E222D] hover:border-[#C27803]/40 active:scale-95 transition-all duration-200 text-xs sm:text-sm font-semibold shadow-xs text-center"
              >
                <FileText className="w-3.5 h-3.5 text-[#C27803] dark:text-[#E8C37D] shrink-0" />
                <span>Resume</span>
              </Link>

              <button
                onClick={() => setShowCertModal(true)}
                className="flex items-center justify-center gap-1.5 px-3 sm:px-4 py-2.5 sm:py-3.5 rounded-xl bg-[#FEF3C7] dark:bg-[#C27803]/20 text-[#92400E] dark:text-[#FCD34D] border border-[#FCD34D] dark:border-[#C27803]/40 hover:bg-[#FDE68A] dark:hover:bg-[#C27803]/30 active:scale-95 transition-all duration-200 text-xs sm:text-sm font-semibold shadow-xs cursor-pointer text-center"
              >
                <Award className="w-3.5 h-3.5 text-[#B45309] dark:text-[#FCD34D] shrink-0" />
                <span>View Award</span>
              </button>

              <a
                href="https://wa.me/917990361109"
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={() => handleMascotSpeak("Message me directly on WhatsApp.")}
                onMouseLeave={() => handleMascotSpeak(null)}
                className="flex items-center justify-center gap-1.5 px-3 sm:px-4 py-2.5 sm:py-3.5 rounded-xl bg-[#0F766E] text-white hover:bg-[#0D655E] active:scale-95 transition-all duration-200 text-xs sm:text-sm font-semibold shadow-xs text-center"
              >
                <MessageCircle className="w-3.5 h-3.5 shrink-0" />
                <span>WhatsApp</span>
              </a>
            </div>

            {/* Key Accomplishments Chips */}
            <div className="pt-2 sm:pt-4 flex flex-wrap gap-1.5 sm:gap-2">
              {[
                { label: "🏆 Reward & Recognition (NB Infra)", action: () => setShowCertModal(true) },
                { label: "PropKart OS (AI Search + SDK 36)", link: "https://propkart.nbpropertytech.com" },
                { label: "PropKart Broker Portal (v1.0.0)", link: "https://github.com/JAYU0812/brokerportal" },
                { label: "Live: nbpropertytech.com", link: "https://nbpropertytech.com" },
                { label: "Live: listing.nbpropertytech.com", link: "https://listing.nbpropertytech.com" },
                { label: "DevSync (P2P Crypto Engine)", link: "/projects" },
                { label: "Live: crm.nbdeveloper.co.in", link: "https://crm.nbdeveloper.co.in" },
                { label: "Live: chandrakalajewellers.in", link: "https://chandrakalajewellers.in" },
                { label: "2 Google Play Store Apps", link: "/projects" },
                { label: "5th Rank Hackathon Winner", link: "/projects" }
              ].map((item, idx) => (
                item.action ? (
                  <button
                    key={idx}
                    onClick={item.action}
                    className="inline-flex items-center gap-1.5 px-2.5 py-1 sm:py-1.5 rounded-lg bg-[#FEF3C7] dark:bg-[#C27803]/20 text-[#92400E] dark:text-[#FCD34D] border border-[#FCD34D] dark:border-[#C27803]/40 text-[10px] sm:text-xs font-mono font-semibold cursor-pointer hover:bg-[#FDE68A] dark:hover:bg-[#C27803]/30 transition max-w-full"
                  >
                    <Award className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#B45309] dark:text-[#FCD34D] shrink-0" />
                    <span className="truncate max-w-[170px] xs:max-w-[240px] sm:max-w-none">{item.label}</span>
                  </button>
                ) : (
                  <span
                    key={idx}
                    className="inline-flex items-center gap-1.5 px-2.5 py-1 sm:py-1.5 rounded-lg bg-[#F2EDE4]/80 dark:bg-[#1C202B] text-[#3A3D44] dark:text-[#D1D5DB] border border-[#E8E5DF] dark:border-[#2B303E] text-[10px] sm:text-xs font-mono max-w-full"
                  >
                    <CheckCircle2 className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0" />
                    <span className="truncate max-w-[170px] xs:max-w-[240px] sm:max-w-none">{item.label}</span>
                  </span>
                )
              ))}
            </div>
          </div>

          {/* Right Hero Column: Interactive Architecture Card */}
          <div className="lg:col-span-5 w-full min-w-0">
            <div className="bg-[#121316] text-[#FBF9F5] rounded-2xl sm:rounded-3xl p-4 sm:p-7 shadow-xl border border-[#2B2E36] relative overflow-hidden min-w-0">
              
              {/* Header inside terminal card */}
              <div className="flex items-center justify-between pb-3.5 sm:pb-4 border-b border-[#2B2E36] mb-4 sm:mb-6">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/80"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500/80"></div>
                  <span className="ml-1.5 font-mono text-[11px] sm:text-xs text-[#8A909E] truncate">
                    jay@architecture-stack
                  </span>
                </div>
                <span className="font-mono text-[10px] uppercase px-2 py-0.5 rounded bg-[#C27803]/20 text-[#E8C37D] border border-[#C27803]/40 shrink-0">
                  Production Live
                </span>
              </div>

              {/* Architecture Core Highlights */}
              <div className="space-y-3 sm:space-y-4 font-mono text-xs">
                
                {/* PropKart Highlight */}
                <div className="bg-[#1C1F26] p-3.5 sm:p-4 rounded-xl sm:rounded-2xl border border-[#2E333D]">
                  <div className="flex items-center justify-between text-[#E8C37D] font-bold mb-1.5">
                    <span className="flex items-center gap-1.5 text-xs sm:text-sm">
                      <Building2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#C27803] shrink-0" />
                      PropKart CRM & OS (v2.1.3+13)
                    </span>
                    <span className="text-[10px] text-emerald-400 font-mono">AI SEARCH</span>
                  </div>
                  <p className="text-[#A4ACB9] text-[11px] leading-relaxed mb-2">
                    Natural Language AI Search in AppShell + Offline Isar DB (2ms) + Target SDK 36 + PostgreSQL Migrations 1–93 + 100/100 Security Audit.
                  </p>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between text-[10px] text-[#7A8291] pt-2 border-t border-[#2E333D] gap-1 sm:gap-0">
                    <span>PropTech Operating System</span>
                    <div className="flex items-center gap-2">
                      <a 
                        href="https://propkart.nbpropertytech.com" 
                        target="_blank" 
                        rel="noreferrer"
                        className="text-[#C27803] hover:underline"
                      >
                        propkart ↗
                      </a>
                      <span>•</span>
                      <a 
                        href="https://nbpropertytech.com" 
                        target="_blank" 
                        rel="noreferrer"
                        className="text-[#E8C37D] hover:underline"
                      >
                        marketing ↗
                      </a>
                    </div>
                  </div>
                </div>

                {/* PropKart Broker Portal Highlight */}
                <div className="bg-[#1C1F26] p-3.5 sm:p-4 rounded-xl sm:rounded-2xl border border-[#2E333D]">
                  <div className="flex items-center justify-between text-[#E8C37D] font-bold mb-1.5">
                    <span className="flex items-center gap-1.5 text-xs sm:text-sm">
                      <ShieldCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#C27803] shrink-0" />
                      PropKart Broker Portal (v1.0.0)
                    </span>
                    <span className="text-[10px] text-emerald-400 font-mono">NESTJS 10</span>
                  </div>
                  <p className="text-[#A4ACB9] text-[11px] leading-relaxed mb-2">
                    Two-Tier RERA Approval Queues + Dynamic RBAC + Tamper-Evident Audit Trail + Hostinger SSL SMTP Activation.
                  </p>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between text-[10px] text-[#7A8291] pt-2 border-t border-[#2E333D] gap-1 sm:gap-0">
                    <span>Flutter + NestJS + Postgres 16</span>
                    <a 
                      href="https://github.com/JAYU0812/brokerportal" 
                      target="_blank" 
                      rel="noreferrer"
                      className="text-[#E8C37D] hover:underline"
                    >
                      brokerportal ↗
                    </a>
                  </div>
                </div>

                {/* GitSphere Desktop Highlight */}
                <div className="bg-[#1C1F26] p-3.5 sm:p-4 rounded-xl sm:rounded-2xl border border-[#2E333D]">
                  <div className="flex items-center justify-between text-[#E8C37D] font-bold mb-1.5">
                    <span className="flex items-center gap-1.5 text-xs sm:text-sm">
                      <Terminal className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#C27803] shrink-0" />
                      GitSphere Desktop (v1.0.0)
                    </span>
                    <span className="text-[10px] text-emerald-400 font-mono">RELEASED</span>
                  </div>
                  <p className="text-[#A4ACB9] text-[11px] leading-relaxed mb-2">
                    Visual Git control center with 4-stage pipeline, SQLite multi-account switching, and 1-click README script runner.
                  </p>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between text-[10px] text-[#7A8291] pt-2 border-t border-[#2E333D] gap-1 sm:gap-0">
                    <span>Flutter Desktop + Win32/DWM</span>
                    <span className="text-[#E8C37D]">Inno Setup (12.07 MB)</span>
                  </div>
                </div>

                {/* Google Play Store Apps */}
                <div className="bg-[#1C1F26] p-3.5 sm:p-4 rounded-xl sm:rounded-2xl border border-[#2E333D]">
                  <div className="flex items-center justify-between text-[#E8C37D] font-bold mb-1.5">
                    <span className="flex items-center gap-1.5 text-xs sm:text-sm">
                      <Smartphone className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#C27803] shrink-0" />
                      Google Play Store Apps
                    </span>
                    <span className="text-[10px] text-emerald-400 font-mono">2 PUBLISHED</span>
                  </div>
                  <div className="space-y-1.5 text-[#A4ACB9] text-[11px]">
                    <div className="flex justify-between items-center">
                      <a 
                        href="https://play.google.com/store/apps/details?id=com.hssolutiontech.ParichaySammelan&pcampaignid=web_share"
                        target="_blank" 
                        rel="noreferrer"
                        className="text-[#FBF9F5] hover:text-[#C27803] flex items-center gap-1 truncate"
                      >
                        • Parichay Sammelan (QR Ticket App) ↗
                      </a>
                      <span className="text-[10px] text-emerald-400 font-mono shrink-0 ml-2">Live</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <a 
                        href="https://play.google.com/store/apps/details?id=com.jeweller.ledger&pcampaignid=web_share"
                        target="_blank" 
                        rel="noreferrer"
                        className="text-[#FBF9F5] hover:text-[#C27803] flex items-center gap-1 truncate"
                      >
                        • KITAAB (Jeweller Ledger App) ↗
                      </a>
                      <span className="text-[10px] text-emerald-400 font-mono shrink-0 ml-2">Live</span>
                    </div>
                  </div>
                </div>

                {/* Commercial Domain + GST Engine + Label Printer */}
                <div className="bg-[#1C1F26] p-3.5 sm:p-4 rounded-xl sm:rounded-2xl border border-[#2E333D]">
                  <div className="flex items-center justify-between text-[#E8C37D] font-bold mb-1.5">
                    <span className="flex items-center gap-1.5 text-xs sm:text-sm">
                      <Zap className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#C27803] shrink-0" />
                      Chandrakala Jewellers ERP Suite
                    </span>
                    <span className="text-[10px] text-emerald-400 font-mono">COMMERCIAL</span>
                  </div>
                  <p className="text-[#A4ACB9] text-[11px] leading-relaxed mb-2">
                    Live Web Platform + Custom GST Billing CRM + Flutter Thermal Barcode Tag Printer (22-slot staggered HUID layout).
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
              <div className="mt-4 pt-3.5 border-t border-[#2B2E36] flex items-center justify-between text-[11px] font-mono text-[#8A909E]">
                <span>Status: Available for projects</span>
                <span className="text-emerald-400">● Full Stack</span>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* ----------------- 2. STATS & METRICS ----------------- */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-6 sm:py-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5">
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
              className="bg-white dark:bg-[#14161E] rounded-2xl sm:rounded-3xl p-4 sm:p-7 border border-[#E8E5DF] dark:border-[#232733] shadow-xs hover:border-[#C27803]/50 dark:hover:border-[#C27803]/60 hover:shadow-md transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="text-2xl sm:text-4xl font-extrabold text-[#121316] dark:text-white font-mono mb-0.5 sm:mb-1 tracking-tight truncate">
                  {stat.number}
                </div>
                <div className="text-xs sm:text-sm font-bold text-[#C27803] dark:text-[#E8C37D] mb-0.5 sm:mb-1 leading-snug">
                  {stat.label}
                </div>
              </div>
              <p className="text-[10px] sm:text-xs text-[#656A76] dark:text-[#8E95A5] leading-tight sm:leading-normal mt-1">
                {stat.sub}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ----------------- 2.5 AWARD & RECOGNITION SPOTLIGHT ----------------- */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-6 sm:py-8" id="recognition">
        <div className="bg-gradient-to-br from-[#121316] via-[#1A1D24] to-[#121316] text-[#FBF9F5] rounded-2xl sm:rounded-3xl p-5 sm:p-8 lg:p-10 border-2 border-[#C27803]/40 shadow-2xl relative overflow-hidden">
          {/* Subtle background glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#C27803]/10 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20"></div>

          <div className="grid lg:grid-cols-12 gap-6 lg:gap-10 items-center relative z-10">
            {/* Left Content */}
            <div className="lg:col-span-8 space-y-4 sm:space-y-5">
              <div className="flex flex-wrap items-center gap-2.5">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#C27803]/20 text-[#E8C37D] border border-[#C27803]/50 text-[11px] sm:text-xs font-mono font-bold uppercase tracking-wider">
                  <Trophy className="w-3.5 h-3.5 text-[#E8C37D]" />
                  Reward & Recognition Award
                </span>
                <span className="text-[11px] sm:text-xs font-mono text-[#8A909E]">
                  NB Infra Projects Limited · Since 1946
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white leading-tight">
                Certificate of Appreciation for Exceptional Performance & Leadership
              </h2>

              <p className="text-xs sm:text-sm text-[#A4ACB9] leading-relaxed italic border-l-2 border-[#C27803] pl-3.5 sm:pl-4">
                &ldquo;In recognition of your exceptional performance and valuable contributions throughout the quarter. Your dedication, commitment, and pursuit of excellence are truly appreciated.&rdquo;
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono text-[#C9D1D9] pt-1">
                <div className="bg-[#1C1F26] p-3 rounded-xl border border-[#2E333D]">
                  <span className="text-[#8A909E] block text-[10px] uppercase">Presented By</span>
                  <span className="font-bold text-white">Rahul D. Prajapati</span>
                  <span className="text-[11px] text-[#E8C37D] block">Founder & Chairman</span>
                </div>
                <div className="bg-[#1C1F26] p-3 rounded-xl border border-[#2E333D]">
                  <span className="text-[#8A909E] block text-[10px] uppercase">Scope of Impact</span>
                  <span className="font-bold text-white">PropKart OS & Broker Portal</span>
                  <span className="text-[11px] text-emerald-400 block">AI Search & Database Scalability (M1-93)</span>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-2 sm:gap-3 pt-2">
                <button
                  onClick={() => setShowCertModal(true)}
                  className="px-4 sm:px-5 py-2 sm:py-2.5 rounded-xl bg-[#C27803] hover:bg-[#9E6102] text-white text-xs font-semibold shadow-xs transition flex items-center gap-1.5 sm:gap-2 cursor-pointer active:scale-95"
                >
                  <Eye className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  <span>Inspect Certificate</span>
                </button>
                <Link
                  to="/resume"
                  className="px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-xl bg-[#2B2E36] hover:bg-[#383C46] text-white text-xs font-semibold transition flex items-center gap-1.5 active:scale-95"
                >
                  <FileText className="w-3.5 h-3.5 text-[#E8C37D]" />
                  <span>View in Resume</span>
                </Link>
              </div>
            </div>

            {/* Right Certificate Preview Card */}
            <div className="lg:col-span-4 flex justify-center">
              <div 
                onClick={() => setShowCertModal(true)}
                className="group relative cursor-pointer rounded-xl sm:rounded-2xl overflow-hidden border-2 border-[#C27803]/50 shadow-2xl max-w-[280px] sm:max-w-[320px] bg-black/40 hover:border-[#E8C37D] transition-all duration-300"
              >
                <img 
                  src="/certificates/nb-infra-certificate-of-appreciation.png" 
                  alt="NB Infra Projects Certificate of Appreciation - Jay Soni"
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-2 text-white p-4 text-center">
                  <div className="w-10 h-10 rounded-full bg-[#C27803] flex items-center justify-center shadow-lg">
                    <Eye className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-xs font-bold font-mono">Click to View High-Res</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ----------------- 3. ARCHITECTURE & TELEMETRY CONSOLE ----------------- */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-6 sm:py-8">
        <ArchitectureConsole />
      </section>

      {/* ----------------- 4. FEATURED PROJECTS ----------------- */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-10 sm:py-16">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 sm:mb-12 gap-3 sm:gap-4">
          <div>
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#C27803] dark:text-[#E8C37D]">
              Featured Engineering
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#121316] dark:text-white tracking-tight mt-1">
              Production Work & Live Deployments
            </h2>
          </div>
          <Link
            to="/projects"
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#121316] dark:text-white hover:text-[#C27803] dark:hover:text-[#E8C37D] transition w-fit"
          >
            <span>View All {projects.length} Projects</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {featuredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onHoverSpeak={handleMascotSpeak}
            />
          ))}
        </div>
      </section>

      {/* ----------------- 5. CHRONOLOGICAL JOURNEY (2023 -> Present) ----------------- */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-10 sm:py-16">
        <div className="bg-white dark:bg-[#14161E] rounded-2xl sm:rounded-3xl p-5 sm:p-8 lg:p-12 border border-[#E8E5DF] dark:border-[#232733] shadow-xs">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-8 sm:mb-12 gap-4">
            <div className="max-w-3xl">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#C27803] dark:text-[#E8C37D]">
                Growth & Milestones
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-[#121316] dark:text-white tracking-tight mt-1 mb-3 sm:mb-4">
                My Engineering Journey (2023 – Present)
              </h2>
              <p className="text-xs sm:text-base text-[#4A4E57] dark:text-[#A1A7B5] leading-relaxed">
                From pioneering physical barcode engines and proprietary GST billing in 2023 to publishing Android apps on Google Play Store, winning hackathons, and architecting enterprise PropTech platforms with Natural Language AI Search at NB Developers.
              </p>
            </div>

            <Link
              to="/projects"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#121316] text-white hover:bg-[#C27803] dark:bg-[#C27803] dark:hover:bg-[#E58B0B] transition-all duration-200 text-xs sm:text-sm font-semibold shadow-xs shrink-0 w-fit"
            >
              <span>Explore Interactive Roadmap</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="space-y-4 sm:space-y-6">
            {timelineEvents.map((item, idx) => (
              <div
                key={idx}
                onMouseEnter={() => handleMascotSpeak(item.summary)}
                onMouseLeave={() => handleMascotSpeak(null)}
                className="group p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-[#FBF9F5] dark:bg-[#101218] border border-[#E8E5DF] dark:border-[#222530] hover:border-[#C27803]/50 dark:hover:border-[#C27803]/60 transition-all duration-200"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 sm:gap-2 mb-2">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:items-center gap-1 sm:gap-3">
                    <span className="font-mono text-[11px] sm:text-xs font-bold text-[#C27803] dark:text-[#E8C37D] px-2.5 py-0.5 sm:py-1 rounded-md bg-[#F2EDE4] dark:bg-[#1C202B] border border-[#E8E5DF] dark:border-[#2B303E] w-fit">
                      {item.date}
                    </span>
                    <h3 className="text-sm sm:text-base font-bold text-[#121316] dark:text-[#F5F5F7] group-hover:text-[#C27803] dark:group-hover:text-[#E8C37D] transition-colors leading-snug">
                      {item.title}
                    </h3>
                  </div>
                  <span className="text-[11px] sm:text-xs font-mono text-[#7A7E89] dark:text-[#8E95A5] self-start sm:self-auto shrink-0">
                    {item.badge}
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-[#4A4E57] dark:text-[#A1A7B5] leading-relaxed mb-3">
                  {item.summary}
                </p>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-1.5 sm:gap-2 text-[11px] sm:text-xs text-[#656A76] dark:text-[#8E95A5]">
                  {item.details.map((detail, dIdx) => (
                    <li key={dIdx} className="flex items-start gap-2">
                      <span className="text-[#C27803] dark:text-[#E8C37D] font-bold shrink-0">•</span>
                      <span className="leading-snug">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ----------------- 6. CORE ARCHITECTURAL CAPABILITIES ----------------- */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-10 sm:py-16">
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#C27803] dark:text-[#E8C37D]">
            Technical Competence
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#121316] dark:text-white tracking-tight mt-1 mb-2 sm:mb-3">
            Core Engineering Strengths
          </h2>
          <p className="text-xs sm:text-sm text-[#4A4E57] dark:text-[#A1A7B5]">
            Architectural patterns and technologies I leverage to build dependable digital products.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
          {[
            {
              icon: <Database className="w-5 h-5 sm:w-6 sm:h-6 text-[#C27803] dark:text-[#E8C37D]" />,
              title: "Offline-First Architectures",
              desc: "Engineering local-first client databases with Isar in Flutter, ensuring high responsiveness and zero data loss without internet connectivity."
            },
            {
              icon: <Layers className="w-5 h-5 sm:w-6 sm:h-6 text-[#C27803] dark:text-[#E8C37D]" />,
              title: "Realtime Synchronization",
              desc: "Building bi-directional data pipelines connecting mobile/web clients with Supabase PostgreSQL and Node.js REST / WebSocket services."
            },
            {
              icon: <Smartphone className="w-5 h-5 sm:w-6 sm:h-6 text-[#C27803] dark:text-[#E8C37D]" />,
              title: "Production Mobile Apps",
              desc: "Crafting performant cross-platform Flutter and Android applications, handling device storage, and shipping successfully to Google Play Store."
            },
            {
              icon: <ShieldCheck className="w-5 h-5 sm:w-6 sm:h-6 text-[#C27803] dark:text-[#E8C37D]" />,
              title: "Enterprise PropTech & CRMs",
              desc: "Designing comprehensive business workflows: telecaller modules, lead staging, automated WhatsApp communication, and analytics dashboards."
            },
            {
              icon: <Zap className="w-5 h-5 sm:w-6 sm:h-6 text-[#C27803] dark:text-[#E8C37D]" />,
              title: "Custom Calculation Engines",
              desc: "Programming proprietary math logic, such as automated GST billing for retail jewellers and Haversine spherical geofencing algorithms."
            },
            {
              icon: <Building2 className="w-5 h-5 sm:w-6 sm:h-6 text-[#C27803] dark:text-[#E8C37D]" />,
              title: "Full-Stack Deployment",
              desc: "Managing full application lifecycles from database modeling and API routes to custom domain configurations and production Vercel hosting."
            }
          ].map((feature, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-[#14161E] p-5 sm:p-7 rounded-2xl sm:rounded-3xl border border-[#E8E5DF] dark:border-[#232733] shadow-xs hover:border-[#C27803]/50 dark:hover:border-[#C27803]/60 hover:shadow-md transition-all duration-300"
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-[#F2EDE4] dark:bg-[#1C202B] flex items-center justify-center mb-4 sm:mb-5">
                {feature.icon}
              </div>
              <h3 className="text-base sm:text-lg font-bold text-[#121316] dark:text-[#F5F5F7] mb-1.5 sm:mb-2">
                {feature.title}
              </h3>
              <p className="text-xs sm:text-sm text-[#4A4E57] dark:text-[#A1A7B5] leading-relaxed">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ----------------- 7. CALL TO ACTION ----------------- */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 py-10 sm:py-16 text-center">
        <div className="bg-[#121316] text-white rounded-2xl sm:rounded-3xl p-6 sm:p-10 lg:p-14 shadow-xl border border-[#2B2E36] relative overflow-hidden">
          <div className="relative z-10 max-w-xl mx-auto space-y-4 sm:space-y-5">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#E8C37D]">
              Open for Opportunities
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight leading-snug">
              Let’s Build High-Impact Software Together
            </h2>
            <p className="text-xs sm:text-base text-[#A4ACB9] leading-relaxed">
              Whether you need an enterprise PropTech solution, an Offline-First mobile app, a commercial web platform, or a dedicated full-stack software engineer — let's connect.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3 pt-3 sm:pt-4 w-full sm:w-fit sm:mx-auto">
              <a
                href="https://wa.me/917990361109"
                target="_blank"
                rel="noopener noreferrer"
                className="justify-center px-5 py-2.5 sm:py-3.5 rounded-xl bg-[#C27803] hover:bg-[#9E6102] active:scale-95 text-white font-semibold text-xs sm:text-sm transition-colors shadow-xs flex items-center gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Chat on WhatsApp</span>
              </a>
              <Link
                to="/contact"
                className="justify-center px-5 py-2.5 sm:py-3.5 rounded-xl bg-[#2B2E36] hover:bg-[#383C46] active:scale-95 text-white font-semibold text-xs sm:text-sm transition-colors shadow-xs flex items-center text-center"
              >
                Contact Form
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* ----------------- CERTIFICATE LIGHTBOX MODAL ----------------- */}
      {showCertModal && (
        <div 
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200"
          onClick={() => setShowCertModal(false)}
        >
          <div 
            className="bg-[#121316] border-2 border-[#C27803] rounded-2xl sm:rounded-3xl max-w-2xl w-full max-h-[92vh] overflow-y-auto p-4 sm:p-6 shadow-2xl relative text-white"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between pb-3 sm:pb-4 border-b border-[#2E333D] mb-4">
              <div className="flex items-center gap-2">
                <Trophy className="w-5 h-5 text-[#C27803]" />
                <h3 className="font-extrabold text-sm sm:text-base tracking-tight font-mono">
                  Certificate of Appreciation — NB Infra Projects
                </h3>
              </div>
              <button
                onClick={() => setShowCertModal(false)}
                className="w-8 h-8 rounded-full bg-[#2B2E36] hover:bg-[#383C46] flex items-center justify-center text-[#A4ACB9] hover:text-white transition cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Certificate High-Res Image */}
            <div className="rounded-xl overflow-hidden border border-[#2E333D] bg-black/60 mb-4 flex justify-center">
              <img 
                src="/certificates/nb-infra-certificate-of-appreciation.png" 
                alt="Certificate of Appreciation - Jay Soni"
                className="w-full max-h-[60vh] object-contain"
              />
            </div>

            {/* Modal Citation Details */}
            <div className="space-y-2 text-xs font-mono text-[#A4ACB9]">
              <p className="text-white font-semibold italic border-l-2 border-[#C27803] pl-3 py-0.5">
                &ldquo;In recognition of your exceptional performance and valuable contributions throughout the quarter. Your dedication, commitment, and pursuit of excellence are truly appreciated.&rdquo;
              </p>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pt-2 border-t border-[#2E333D] text-[11px] gap-1 sm:gap-0">
                <span>Authorized by: <strong className="text-white">Rahul D. Prajapati (Founder & Chairman)</strong></span>
                <span className="text-[#E8C37D]">NB Infra Projects Limited (Since 1946)</span>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-[#2E333D] flex justify-end">
              <button
                onClick={() => setShowCertModal(false)}
                className="px-4 py-2 rounded-xl bg-[#2B2E36] hover:bg-[#383C46] text-white text-xs font-semibold transition cursor-pointer"
              >
                Close View
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
