import { useState } from "react";
import { projects } from "../data/projects";
import ProjectCard from "./ProjectCard";
import { 
  Award, 
  Sparkles, 
  ShieldCheck, 
  Smartphone, 
  Zap, 
  Building2, 
  Calendar, 
  Terminal, 
  CheckCircle2
} from "lucide-react";

export default function TimelineRoadmap({ onHoverSpeak }) {
  const [activeEra, setActiveEra] = useState("all");

  const roadmapMilestones = [
    {
      id: "era-2026-apex",
      year: "2026",
      period: "October 2026",
      title: "Apex Industry Recognition & Platform Ecosystem Expansion",
      badge: "Company-Wide Award Winner",
      badgeColor: "bg-[#FEF3C7] text-[#92400E] border-[#FCD34D] dark:bg-[#C27803]/20 dark:text-[#FCD34D] dark:border-[#C27803]/40",
      icon: <Award className="w-4 h-4 text-[#B45309] dark:text-[#FCD34D]" />,
      summary: "Awarded Certificate of Appreciation by NB Infra Projects Limited (Since 1946) for exceptional engineering leadership, delivering the Natural Language AI Search Engine in PropKart OS and launching the standalone PropKart Broker Portal.",
      highlights: [
        "Formally recognized by Founder & Chairman Rahul D. Prajapati for outstanding architectural contributions.",
        "Engineered Natural Language AI Search Engine in PropKart OS with tenant-isolated PostgreSQL intent extraction and safe query telemetry (Migrations 84–93).",
        "Architected PropKart Broker Portal (Flutter + NestJS 10 + PostgreSQL 16) with dual-tier RERA governance queues and Hostinger SSL SMTP.",
        "Launched official production marketing platform nbpropertytech.com with Next.js 15, Docker, and GitHub Actions VPS CI/CD."
      ],
      projectIds: ["propkart-broker", "nbpropertytech-portal", "propkart"]
    },
    {
      id: "era-2026-crypto",
      year: "2026",
      period: "September 2026",
      title: "Sovereign Cryptographic P2P & Institutional Systems",
      badge: "Cryptographic Architecture",
      badgeColor: "bg-[#EDE9FE] text-[#6D28D9] border-[#DDD6FE] dark:bg-[#6D28D9]/20 dark:text-[#DDD6FE] dark:border-[#6D28D9]/40",
      icon: <ShieldCheck className="w-4 h-4 text-[#6D28D9] dark:text-[#DDD6FE]" />,
      summary: "Architected DevSync, an account-per-device sovereign cryptographic P2P suite with on-device Ed25519 payload signatures and X25519 ECDH key exchange, alongside an institutional Academic Attendance Management System.",
      highlights: [
        "Pioneered hybrid networking: LAN transfer via Shelf HTTP + UDP multicast with zero-retention Vercel Serverless SSE relay fallback.",
        "Engineered dual role-based academic portal suite for Faculty course registers and Student self-service presence tracking against 75% mandates."
      ],
      projectIds: ["devsync", "academic-ams"]
    },
    {
      id: "era-2026-proptech",
      year: "2026",
      period: "June – August 2026",
      title: "Enterprise PropTech Lead Architect at NB Developers",
      badge: "Enterprise Flagship OS",
      badgeColor: "bg-[#ECFDF5] text-[#065F46] border-[#A7F3D0] dark:bg-[#065F46]/25 dark:text-[#A7F3D0] dark:border-[#059669]/40",
      icon: <Building2 className="w-4 h-4 text-[#059669] dark:text-[#34D399]" />,
      summary: "Spearheaded the evolution of PropKart Real-Estate CRM & OS, establishing an Offline-First Flutter foundation (2–8ms reads via embedded Isar NoSQL), Target SDK 36 Google Play readiness, and 100/100 automated security compliance.",
      highlights: [
        "Architected 95-file Mobile Foundation & Design System (20,000+ LOC) with native app shells and contextual telecaller outcome sheets.",
        "Engineered Site Visit Historical Tracking Engine with PostgreSQL Migrations 38 & 39 and automated Round-Robin lead allocation.",
        "Launched public PropKart Listing showcase directory (listing.nbpropertytech.com) and dynamic intake engine (propconnect.nbpropertytech.com).",
        "Engineered NB-HRMS Enterprise ERP platform with AES-256 field encryption, Hasura GraphQL, and OpenAI Whisper voice transcription.",
        "Built TechDrive enterprise cloud document vault and Legacy Tower high-ticket investor portal."
      ],
      projectIds: ["propkart-listing", "propkart-connect", "nb-hrms", "techdrive", "legacy-tower"]
    },
    {
      id: "era-2025-desktop",
      year: "2025",
      period: "Late 2025",
      title: "Desktop Engine Innovation & Top 5 Hackathon Victory",
      badge: "Hackathon Award & Desktop Engine",
      badgeColor: "bg-[#EFF6FF] text-[#1E40AF] border-[#BFDBFE] dark:bg-[#1E40AF]/20 dark:text-[#BFDBFE] dark:border-[#2563EB]/40",
      icon: <Terminal className="w-4 h-4 text-[#2563EB] dark:text-[#93C5FD]" />,
      summary: "Secured 5th Rank in state Hackathon for mathematical Haversine geofenced QR attendance algorithm, built GitSphere desktop visual Git engine, and engineered clinical hospital management CRM.",
      highlights: [
        "Architected GitSphere Windows desktop visual Git control room (Flutter Desktop, Win32/DWM, SQLite multi-profile switcher).",
        "Mathematical Haversine algorithm computing great-circle distances in real-time to prevent proxy attendance.",
        "Engineered clinical hospital management dashboard with bed occupancy visualization and doctor rosters."
      ],
      projectIds: ["gitsphere", "hackathon-attendance", "hospital-dashboard"]
    },
    {
      id: "era-2025-mobile",
      year: "2025",
      period: "Mid 2025",
      title: "Mobile App Mastery & Google Play Store Publications",
      badge: "2x Play Store Publisher",
      badgeColor: "bg-[#F0FDF4] text-[#166534] border-[#BBF7D0] dark:bg-[#166534]/20 dark:text-[#BBF7D0] dark:border-[#16A34A]/40",
      icon: <Smartphone className="w-4 h-4 text-[#16A34A] dark:text-[#86EFAC]" />,
      summary: "Published 2 commercial native applications to the Google Play Store (Parichay Sammelan and KITAAB Jeweller Ledger) and completed intensive 3-month Flutter mobile architecture training.",
      highlights: [
        "Published Parichay Sammelan (QR ticket matchmaking & member registration app) on Google Play Store.",
        "Published KITAAB (Jeweller Ledger offline B2B accounting system) on Google Play Store.",
        "Mastered reactive state management (BLoC, Riverpod), local caching, and ProGuard obfuscation."
      ],
      projectIds: ["parichay-sammelan", "kitaab"]
    },
    {
      id: "era-2025-first",
      year: "2025",
      period: "Early 2025",
      title: "The First Production Web Platform",
      badge: "First Production Software",
      badgeColor: "bg-[#F8F6F2] text-[#4A4E57] border-[#E8E5DF] dark:bg-[#1C202B] dark:text-[#D1D5DB] dark:border-[#2B303E]",
      icon: <Sparkles className="w-4 h-4 text-[#C27803] dark:text-[#E8C37D]" />,
      summary: "Launched the Soni Samaj Community Directory in February 2025, designing normalized relational schemas for multi-tier family hierarchies and occupation indexing across Gujarat.",
      highlights: [
        "Jay's foundational software project connecting hundreds of families.",
        "Designed fast relational database search by city, native village, and profession."
      ],
      projectIds: ["soni-samaj"]
    },
    {
      id: "era-2023-retail",
      year: "2023",
      period: "2023 – 2024",
      title: "The Genesis: Real-World Business Digitization & Retail ERPs",
      badge: "Retail Digitization Era",
      badgeColor: "bg-[#FFFBEB] text-[#B45309] border-[#FDE68A] dark:bg-[#B45309]/20 dark:text-[#FDE68A] dark:border-[#D97706]/40",
      icon: <Zap className="w-4 h-4 text-[#D97706] dark:text-[#FBBF24]" />,
      summary: "Digitized 5+ offline brick-and-mortar retail businesses, architecting the complete Chandrakala Jewellers ERP ecosystem with custom multi-factor GST calculation and physical thermal barcode label printing.",
      highlights: [
        "Engineered proprietary GST billing calculation engine computing metal purity, hallmark fees, making wastage, and CGST/SGST.",
        "Built Flutter desktop physical barcode printing software for 22 staggered jewellery tags with central tail strips & HUID tracking.",
        "Digitized pharmacies, grocery kirana stores, and salons from manual paper ledgers to digital inventory management."
      ],
      projectIds: ["chandrakala-jewellers"]
    }
  ];

  const eraFilters = [
    { id: "all", label: "Entire Journey (2023 – Present)" },
    { id: "2026", label: "2026: Enterprise & AI" },
    { id: "2025", label: "2025: Play Store & Desktop" },
    { id: "2023", label: "2023–2024: The Genesis" }
  ];

  const filteredMilestones = activeEra === "all"
    ? roadmapMilestones
    : roadmapMilestones.filter((m) => m.year === activeEra || (activeEra === "2023" && m.year === "2023"));

  return (
    <div className="w-full space-y-8 sm:space-y-12">
      {/* Era Filter Selector */}
      <div className="flex overflow-x-auto no-scrollbar scroll-smooth gap-2 p-1.5 bg-white dark:bg-[#14161E] border border-[#E8E5DF] dark:border-[#232733] rounded-2xl shadow-xs w-full sm:w-fit mx-auto -mx-1 px-1.5 sm:mx-auto">
        {eraFilters.map((era) => (
          <button
            key={era.id}
            onClick={() => setActiveEra(era.id)}
            className={`shrink-0 px-3.5 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer whitespace-nowrap active:scale-95 ${
              activeEra === era.id
                ? "bg-[#121316] text-white dark:bg-[#C27803] dark:text-white shadow-xs"
                : "text-[#4A4E57] dark:text-[#A1A7B5] hover:bg-[#F2EDE4] dark:hover:bg-[#1C202B] hover:text-[#121316] dark:hover:text-white"
            }`}
          >
            {era.label}
          </button>
        ))}
      </div>

      {/* Vertical Interactive Roadmap Track */}
      <div className="relative border-l-2 border-[#E8E5DF] dark:border-[#262933] ml-4 sm:ml-8 md:ml-12 pl-5 sm:pl-10 space-y-10 sm:space-y-16">
        {filteredMilestones.map((milestone) => {
          // Get the actual project objects for this milestone
          const milestoneProjects = projects.filter((p) => milestone.projectIds.includes(p.id));

          return (
            <div key={milestone.id} className="relative group">
              {/* Timeline Glowing Node on the left spine */}
              <div className="absolute -left-[33px] sm:-left-[53px] top-1 w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-white dark:bg-[#14161E] border-4 border-[#C27803] shadow-md flex items-center justify-center">
                <span className="w-1.5 h-1.5 rounded-full bg-[#121316] dark:bg-[#E8C37D]"></span>
              </div>

              {/* Milestone Narrative Card */}
              <div className="bg-white dark:bg-[#14161E] rounded-2xl sm:rounded-3xl p-5 sm:p-8 border border-[#E8E5DF] dark:border-[#232733] shadow-xs hover:border-[#C27803]/40 dark:hover:border-[#C27803]/60 transition space-y-4 mb-6">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#121316] dark:bg-[#1C202B] text-[#E8C37D] font-mono text-xs font-bold border border-transparent dark:border-[#2E3342]">
                      <Calendar className="w-3.5 h-3.5 text-[#C27803] dark:text-[#E8C37D]" />
                      <span>{milestone.period}</span>
                    </span>
                    <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-semibold border ${milestone.badgeColor}`}>
                      {milestone.icon}
                      <span>{milestone.badge}</span>
                    </span>
                  </div>
                </div>

                <h3 className="text-xl sm:text-2xl font-extrabold text-[#121316] dark:text-[#F5F5F7] tracking-tight">
                  {milestone.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#4A4E57] dark:text-[#A1A7B5] leading-relaxed">
                  {milestone.summary}
                </p>

                {/* Key Bullet Highlights */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5 pt-3 border-t border-[#F2EDE4] dark:border-[#222530]">
                  {milestone.highlights.map((item, hIdx) => (
                    <div key={hIdx} className="flex items-start gap-2 text-xs text-[#555963] dark:text-[#9CA3AF]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                      <span className="leading-snug">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Associated Fixed-Size Project Cards for this Era */}
              {milestoneProjects.length > 0 && (
                <div className="pl-0 sm:pl-2">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#C27803] dark:text-[#E8C37D]">
                      Production Deliverables from this Era ({milestoneProjects.length})
                    </span>
                    <div className="h-px bg-[#E8E5DF] dark:bg-[#232733] flex-1"></div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                    {milestoneProjects.map((proj) => (
                      <ProjectCard 
                        key={proj.id} 
                        project={proj} 
                        onHoverSpeak={onHoverSpeak} 
                      />
                    ))}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
