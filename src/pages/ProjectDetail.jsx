import { useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { projects } from "../data/projects";
import { 
  ArrowLeft, 
  ExternalLink, 
  Smartphone, 
  CheckCircle2, 
  ShieldCheck, 
  Activity, 
  ArrowRight,
  MessageCircle,
  Award,
  Sparkles,
  Calendar,
  Zap
} from "lucide-react";
import { GithubIcon } from "../components/Icons";

export default function ProjectDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const projectIndex = projects.findIndex((p) => p.id === id);
  const project = projects[projectIndex];

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [id]);

  if (!project) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center px-4 py-16 text-center text-[#121316] dark:text-[#F5F5F7]">
        <h2 className="text-2xl sm:text-3xl font-extrabold mb-3">Project Case Study Not Found</h2>
        <p className="text-sm text-[#656A76] dark:text-[#8E95A5] mb-6">
          The requested project deep-dive does not exist or has been relocated.
        </p>
        <Link
          to="/projects"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#121316] dark:bg-[#C27803] text-white text-xs font-semibold hover:bg-[#C27803] dark:hover:bg-[#E58B0B] transition"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Return to All Projects</span>
        </Link>
      </div>
    );
  }

  const prevProject = projectIndex > 0 ? projects[projectIndex - 1] : null;
  const nextProject = projectIndex < projects.length - 1 ? projects[projectIndex + 1] : null;

  const getBadgeIcon = (badge) => {
    if (badge.includes("Play Store")) return <Smartphone className="w-3.5 h-3.5 text-[#C27803] dark:text-[#E8C37D]" />;
    if (badge.includes("Hackathon")) return <Award className="w-3.5 h-3.5 text-[#C27803] dark:text-[#E8C37D]" />;
    if (badge.includes("Live") || badge.includes("Production")) {
      return <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />;
    }
    return <Sparkles className="w-3.5 h-3.5 text-[#C27803] dark:text-[#E8C37D]" />;
  };

  // Curated deep-dive context based on project type
  const getArchitectureNarrative = () => {
    if (project.id === "propkart") {
      return {
        challenge: "Real estate field agents frequently operate in low-connectivity underground parking decks and remote construction sites where traditional cloud CRMs freeze, lose unsaved lead entries, and cause telecaller dispatch collisions. Furthermore, multi-tenant lead routing from Meta Lead Ads and Housing.com required sub-second delivery without database locking.",
        solution: "Jay architected an enterprise Offline-First operating system anchored by an embedded Isar NoSQL local store delivering 2ms–8ms read times. To eliminate data loss, an asynchronous outbox mutation queue guarantees atomic persistence with strict Server-Wins conflict resolution. On top of this, Jay engineered a debounced Natural Language AI Search Engine in the AppShell, allowing agents to type conversational queries that translate safely to PostgreSQL without exposing raw queries or tenant boundaries.",
        impact: "Zero-latency UI response (0ms perceived wait), 100/100 automated security audit score (37/37 checks passed), Google Play Target SDK 36 readiness, and sub-second multi-channel lead ingestion with 24-hour cryptographic deduplication."
      };
    }
    if (project.id === "propkart-broker") {
      return {
        challenge: "Onboarding independent real estate brokers involved chaotic manual document handoffs, unverified RERA claims, lack of role isolation, and security vulnerabilities during initial credential distribution.",
        solution: "Jay engineered a cross-platform broker operations platform using Flutter and NestJS 10 with isolated PostgreSQL 16 containers. He architected two distinct governance queues: Queue A for automated fast-track verification of RERA-licensed brokers, and Queue B for brokers needing licensing assistance (with direct auto-drafted WhatsApp handoffs). System settings and RBAC are 100% dynamic in PostgreSQL, paired with automated Hostinger SSL SMTP dispatch of cryptographic single-use activation tokens.",
        impact: "Eliminated manual credential leakages, delivered tamper-evident audit logging with one-click JSON payload inspection, and created a single-command Docker deployment pipeline with zero hardcoded platform credentials."
      };
    }
    if (project.id === "devsync") {
      return {
        challenge: "Transferring sensitive code repositories and files across local networks typically requires third-party cloud intermediaries, creating security exposure, credential leaks, and high latency over the public internet.",
        solution: "Jay pioneered a sovereign cryptographic peer-to-peer suite using an account-per-device paradigm. Each device signs payload manifests on-device with Ed25519 and negotiates mutual session keys via X25519 ECDH for AES-256-GCM encryption. Networking operates on a hybrid topology: high-speed local discovery via UDP multicast + embedded Shelf HTTP servers, with an automated fallback to a zero-retention Vercel Serverless SSE relay backed by Upstash Redis.",
        impact: "Completely sovereign, end-to-end encrypted file and snippet exchange with perceived zero latency on LAN and immediate ephemeral message pruning upon receipt."
      };
    }
    if (project.id === "chandrakala-jewellers") {
      return {
        challenge: "Traditional jewellery showrooms struggle with complex multi-factor GST taxation (metal purity karats, making wastage, hallmark charges, CGST/SGST) and physical inventory management without dedicated ERPs.",
        solution: "Jay engineered a dual-engine retail ecosystem: a high-contrast luxury commercial e-commerce storefront live on chandrakalajewellers.in backed by Supabase PostgreSQL with rigorous Row-Level Security (RLS) policies, plus a specialized Flutter desktop application tailored for thermal barcode jewellery tag printing (22 staggered slots with central tail strips and HUID compliance).",
        impact: "Automated end-to-end sales billing with zero calculation error, eliminated stock tracking discrepancies, and established a direct click-to-inquire online customer catalog."
      };
    }
    if (project.id === "gitsphere") {
      return {
        challenge: "Developers juggling personal, corporate, and freelance projects frequently suffer from git identity collisions, accidental push mistakes, and terminal CLI fatigue when inspecting remote collaborator changes.",
        solution: "Jay built GitSphere, a native Windows visual Git control center utilizing Flutter Desktop, Riverpod, and native Win32/DWM process runners. GitSphere introduces a 4-stage visual pipeline (Working Tree → Staging → Commit Branch → Cloud) and manages isolated multi-profile credentials inside local SQLite (sqflite_common_ffi), enabling 1-click Git identity switching.",
        impact: "Packaged into a compact 12 MB production Inno Setup Windows installer, eliminating terminal authentication collisions and making remote collaborator commit histories instantly visual."
      };
    }
    if (project.id === "nbpropertytech-portal") {
      return {
        challenge: "NB PropertyTech needed a high-performance marketing portal to showcase its enterprise CRM/ERP capabilities to institutional real estate developers, handle real-time broker inquiries, and deploy reliably across cloud VPS infrastructure.",
        solution: "Jay built the portal with Next.js 15 (App Router, Standalone mode), TypeScript 5, Tailwind CSS, and Framer Motion. He containerized the application with Docker, configured Traefik reverse proxy for automated ACME SSL, and built a GitHub Actions CI/CD workflow that compiles, tests, and deploys directly to the production VPS.",
        impact: "Delivered sub-second page loads on nbpropertytech.com, automated broker inquiry persistence in PostgreSQL, and zero-downtime containerized deployments."
      };
    }
    if (project.id === "nb-hrms") {
      return {
        challenge: "Managing enterprise construction workforces requires strict identity document encryption, real-time field worker GPS location auditing outside company geofences, and high-volume lead reassignment across sales tiers.",
        solution: "Jay expanded the NB-HRMS suite into an integrated HRMS + CRM + ERP ecosystem. He engineered real-time GPS field trip tracking in Flutter that detects when an employee exits a designated work geofence (30m buffer, 12-hour session cache, 120s expiring live map pins), integrated double encryption (TRANSPORT_SECRET) with AES-256 field encryption for identity records, and implemented sensitive data masking with bulk lead transfers.",
        impact: "Comprehensive regulatory compliance for identity records, automated field auditing without battery drain, and unified mobile access via nb_crm_flutter."
      };
    }
    return {
      challenge: "Solving operational inefficiencies through high-performance software engineering, eliminating manual data entry bottlenecks, and building clean, resilient user interfaces.",
      solution: "Jay designed and deployed this system from requirement gathering to production launch, selecting modern architecture patterns, type-safe data pipelines, and optimized storage layers.",
      impact: "Production-tested reliability, intuitive responsive user experiences, and measurable business efficiency gains."
    };
  };

  const narrative = getArchitectureNarrative();

  return (
    <div className="py-6 sm:py-12 text-[#121316] dark:text-[#F5F5F7] transition-colors duration-200">
      <article className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Navigation Breadcrumbs & Back */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6 sm:mb-8 pb-4 border-b border-[#E8E5DF] dark:border-[#22252F]">
          <div className="flex items-center gap-2 text-xs font-mono text-[#7A7E89] dark:text-[#8E95A5]">
            <Link to="/" className="hover:text-[#C27803] dark:hover:text-[#E8C37D] transition">Home</Link>
            <span>/</span>
            <Link to="/projects" className="hover:text-[#C27803] dark:hover:text-[#E8C37D] transition">Projects</Link>
            <span>/</span>
            <span className="text-[#121316] dark:text-white font-semibold truncate max-w-[200px] sm:max-w-none">
              {project.title.split("—")[0].trim()}
            </span>
          </div>

          <button
            onClick={() => navigate(-1)}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white dark:bg-[#14161E] border border-[#E8E5DF] dark:border-[#232733] text-[#121316] dark:text-[#F5F5F7] hover:bg-[#F2EDE4] dark:hover:bg-[#1C202B] transition text-xs font-semibold shadow-2xs w-fit cursor-pointer"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back</span>
          </button>
        </div>

        {/* ----------------- 1. HERO CASE STUDY HEADER ----------------- */}
        <header className="bg-white dark:bg-[#14161E] rounded-2xl sm:rounded-3xl p-6 sm:p-10 border border-[#E8E5DF] dark:border-[#232733] shadow-xs mb-8 sm:mb-12 relative overflow-hidden">
          {/* Decorative subtle accent */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#C27803]/5 dark:bg-[#C27803]/10 rounded-full blur-3xl pointer-events-none"></div>

          <div className="relative z-10 space-y-4 sm:space-y-6">
            <div className="flex flex-wrap items-center gap-2.5">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-semibold bg-[#F2EDE4] dark:bg-[#1C202B] text-[#121316] dark:text-[#E8C37D] border border-[#E8E5DF] dark:border-[#2B303E]">
                {getBadgeIcon(project.badge)}
                <span>{project.badge}</span>
              </span>

              {project.version && (
                <span className="px-2.5 py-0.5 rounded-md text-[11px] font-mono font-bold bg-[#121316] dark:bg-[#202430] text-[#E8C37D] border border-transparent dark:border-[#2B303E]">
                  {project.version}
                </span>
              )}

              <span className="text-xs font-mono text-[#7A7E89] dark:text-[#8E95A5] flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5 text-[#C27803] dark:text-[#E8C37D]" />
                <span>{project.date}</span>
              </span>
            </div>

            <div>
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#C27803] dark:text-[#E8C37D] block mb-1">
                {project.category}
              </span>
              <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#121316] dark:text-[#F5F5F7] leading-tight">
                {project.title}
              </h1>
            </div>

            <p className="text-sm sm:text-lg text-[#4A4E57] dark:text-[#A1A7B5] leading-relaxed max-w-3xl font-medium">
              {project.tagline}
            </p>

            {/* Direct External Action CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#121316] text-white hover:bg-[#C27803] dark:bg-[#C27803] dark:hover:bg-[#E58B0B] active:scale-98 transition text-xs font-semibold shadow-xs"
                >
                  <span>Launch Live Platform</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              )}

              {project.playStoreUrl && (
                <a
                  href={project.playStoreUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#0F766E] text-white hover:bg-[#0D655E] active:scale-98 transition text-xs font-semibold shadow-xs"
                >
                  <Smartphone className="w-4 h-4" />
                  <span>Google Play Store</span>
                  <ExternalLink className="w-3.5 h-3.5 opacity-80" />
                </a>
              )}

              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#24292E] text-white hover:bg-[#121316] dark:bg-[#1E222D] dark:border dark:border-[#2E3342] dark:hover:bg-[#282D3C] active:scale-98 transition text-xs font-semibold shadow-xs"
                >
                  <GithubIcon className="w-4 h-4" />
                  <span>Inspect Source on GitHub</span>
                  <ExternalLink className="w-3.5 h-3.5 opacity-80" />
                </a>
              )}

              <a
                href={`https://wa.me/917990361109?text=Hi%20Jay,%20I%20am%20interested%20in%20your%20project:%20${encodeURIComponent(project.title)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-3 rounded-xl bg-[#FBF9F5] dark:bg-[#101218] border border-[#E8E5DF] dark:border-[#232733] text-[#121316] dark:text-[#F5F5F7] hover:bg-[#F2EDE4] dark:hover:bg-[#1C202B] transition text-xs font-semibold shadow-2xs"
              >
                <MessageCircle className="w-4 h-4 text-[#059669] dark:text-[#34D399]" />
                <span>Inquire About This Build</span>
              </a>
            </div>
          </div>
        </header>

        {/* ----------------- 2. ARCHITECTURAL TELEMETRY (If available) ----------------- */}
        {project.metrics && (
          <section className="mb-8 sm:mb-12">
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-[#C27803] dark:text-[#E8C37D] mb-3 sm:mb-4 flex items-center gap-2">
              <Activity className="w-4 h-4" />
              <span>Architectural Telemetry & Verified Benchmarks</span>
            </h2>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 font-mono">
              {Object.entries(project.metrics).map(([key, val], idx) => (
                <div key={idx} className="bg-white dark:bg-[#14161E] p-4 rounded-xl sm:rounded-2xl border border-[#E8E5DF] dark:border-[#232733] shadow-2xs">
                  <span className="text-[10px] text-[#7A7E89] dark:text-[#8E95A5] uppercase tracking-wider block mb-1">
                    {key.replace(/([A-Z])/g, ' $1').trim()}
                  </span>
                  <span className="text-sm sm:text-base font-bold text-emerald-600 dark:text-emerald-400 truncate block">
                    {val}
                  </span>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* ----------------- 3. PROBLEM & ARCHITECTURAL SOLUTION ----------------- */}
        <section className="grid lg:grid-cols-2 gap-6 sm:gap-8 mb-8 sm:mb-12">
          {/* The Operational Challenge */}
          <div className="bg-white dark:bg-[#14161E] p-6 sm:p-8 rounded-2xl sm:rounded-3xl border border-[#E8E5DF] dark:border-[#232733] shadow-xs space-y-3">
            <div className="flex items-center gap-2 text-rose-700 dark:text-rose-400 font-mono text-xs font-bold uppercase tracking-wider">
              <ShieldCheck className="w-4 h-4" />
              <span>The Operational Challenge</span>
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-[#121316] dark:text-[#F5F5F7]">
              Why Standard Solutions Failed
            </h3>
            <p className="text-xs sm:text-sm text-[#4A4E57] dark:text-[#A1A7B5] leading-relaxed">
              {narrative.challenge}
            </p>
          </div>

          {/* Jay's Architectural Breakthrough */}
          <div className="bg-white dark:bg-[#14161E] p-6 sm:p-8 rounded-2xl sm:rounded-3xl border-2 border-[#C27803]/40 dark:border-[#C27803]/60 shadow-xs space-y-3 relative overflow-hidden">
            <div className="flex items-center gap-2 text-[#C27803] dark:text-[#E8C37D] font-mono text-xs font-bold uppercase tracking-wider">
              <Zap className="w-4 h-4" />
              <span>Jay's Architectural Solution</span>
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-[#121316] dark:text-[#F5F5F7]">
              Engineered for Zero Failure
            </h3>
            <p className="text-xs sm:text-sm text-[#4A4E57] dark:text-[#A1A7B5] leading-relaxed">
              {narrative.solution}
            </p>
          </div>
        </section>

        {/* ----------------- 4. COMPREHENSIVE TECHNICAL HIGHLIGHTS ----------------- */}
        <section className="bg-white dark:bg-[#14161E] rounded-2xl sm:rounded-3xl p-6 sm:p-10 border border-[#E8E5DF] dark:border-[#232733] shadow-xs mb-8 sm:mb-12">
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#C27803] dark:text-[#E8C37D] block mb-2">
            Engineering Precision
          </span>
          <h2 className="text-xl sm:text-3xl font-extrabold text-[#121316] dark:text-[#F5F5F7] tracking-tight mb-6">
            Key Technical Innovations & Implementation Details
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {project.highlights && project.highlights.map((highlight, idx) => {
              const parts = highlight.split(":");
              const title = parts.length > 1 ? parts[0] : `Innovation 0${idx + 1}`;
              const desc = parts.length > 1 ? parts.slice(1).join(":") : highlight;

              return (
                <div 
                  key={idx}
                  className="p-4 sm:p-5 rounded-xl sm:rounded-2xl bg-[#FBF9F5] dark:bg-[#101218] border border-[#E8E5DF] dark:border-[#222530] hover:border-[#C27803]/40 dark:hover:border-[#C27803]/60 transition"
                >
                  <div className="flex items-center gap-2 text-[#121316] dark:text-[#F5F5F7] font-bold text-xs sm:text-sm mb-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                    <span>{title}</span>
                  </div>
                  <p className="text-xs text-[#555963] dark:text-[#9CA3AF] leading-relaxed pl-6">
                    {desc.trim()}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Business & System Impact Quote */}
          <div className="mt-6 pt-6 border-t border-[#E8E5DF] dark:border-[#222530] bg-[#F2EDE4]/40 dark:bg-[#101218]/80 p-4 sm:p-5 rounded-xl border border-[#E8E5DF] dark:border-[#222530]">
            <span className="text-[10px] font-mono font-bold uppercase text-[#C27803] dark:text-[#E8C37D] block mb-1">
              Measurable Business & Engineering Impact
            </span>
            <p className="text-xs sm:text-sm text-[#333740] dark:text-[#D1D5DB] font-medium leading-relaxed">
              {narrative.impact}
            </p>
          </div>
        </section>

        {/* ----------------- 5. COMPLETE TECH STACK ARSENAL ----------------- */}
        <section className="bg-white dark:bg-[#14161E] rounded-2xl sm:rounded-3xl p-6 sm:p-10 border border-[#E8E5DF] dark:border-[#232733] shadow-xs mb-8 sm:mb-12">
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#C27803] dark:text-[#E8C37D] block mb-2">
            Core Technologies
          </span>
          <h2 className="text-xl sm:text-2xl font-extrabold text-[#121316] dark:text-[#F5F5F7] tracking-tight mb-4">
            Technologies, Frameworks & Protocols
          </h2>

          <div className="flex flex-wrap gap-2">
            {project.tech.map((techItem, idx) => (
              <span
                key={idx}
                className="px-3 py-1.5 rounded-xl text-xs font-mono font-medium bg-[#FBF9F5] dark:bg-[#101218] text-[#333740] dark:text-[#D1D5DB] border border-[#E8E5DF] dark:border-[#222530] hover:border-[#C27803]/50 transition"
              >
                {techItem}
              </span>
            ))}
          </div>
        </section>

        {/* ----------------- 6. PREVIOUS / NEXT PROJECT NAVIGATOR ----------------- */}
        <nav className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10 sm:mb-14">
          {prevProject ? (
            <Link
              to={`/projects/${prevProject.id}`}
              className="group p-4 sm:p-5 rounded-2xl bg-white dark:bg-[#14161E] border border-[#E8E5DF] dark:border-[#232733] hover:border-[#C27803]/50 dark:hover:border-[#C27803]/70 transition flex items-center gap-3"
            >
              <div className="w-10 h-10 rounded-xl bg-[#F2EDE4] dark:bg-[#1C202B] group-hover:bg-[#C27803] group-hover:text-white transition flex items-center justify-center shrink-0 text-[#121316] dark:text-[#D1D5DB]">
                <ArrowLeft className="w-4 h-4" />
              </div>
              <div className="truncate">
                <span className="text-[10px] font-mono text-[#7A7E89] dark:text-[#8E95A5] uppercase block">Previous Case Study</span>
                <span className="text-xs sm:text-sm font-bold text-[#121316] dark:text-[#F5F5F7] group-hover:text-[#C27803] dark:group-hover:text-[#E8C37D] transition truncate block">
                  {prevProject.title.split("—")[0].trim()}
                </span>
              </div>
            </Link>
          ) : <div />}

          {nextProject ? (
            <Link
              to={`/projects/${nextProject.id}`}
              className="group p-4 sm:p-5 rounded-2xl bg-white dark:bg-[#14161E] border border-[#E8E5DF] dark:border-[#232733] hover:border-[#C27803]/50 dark:hover:border-[#C27803]/70 transition flex items-center justify-between sm:justify-end gap-3 text-right"
            >
              <div className="truncate text-left sm:text-right">
                <span className="text-[10px] font-mono text-[#7A7E89] dark:text-[#8E95A5] uppercase block">Next Case Study</span>
                <span className="text-xs sm:text-sm font-bold text-[#121316] dark:text-[#F5F5F7] group-hover:text-[#C27803] dark:group-hover:text-[#E8C37D] transition truncate block">
                  {nextProject.title.split("—")[0].trim()}
                </span>
              </div>
              <div className="w-10 h-10 rounded-xl bg-[#F2EDE4] dark:bg-[#1C202B] group-hover:bg-[#C27803] group-hover:text-white transition flex items-center justify-center shrink-0 text-[#121316] dark:text-[#D1D5DB]">
                <ArrowRight className="w-4 h-4" />
              </div>
            </Link>
          ) : <div />}
        </nav>

        {/* ----------------- 7. INVITATION CTA ----------------- */}
        <div className="bg-[#121316] dark:bg-[#14161E] text-white p-6 sm:p-10 rounded-2xl sm:rounded-3xl border border-[#2B2E36] dark:border-[#2A2E3B] text-center space-y-4">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#E8C37D]">
            Engineering Collaboration
          </span>
          <h3 className="text-xl sm:text-3xl font-extrabold tracking-tight">
            Need an Architect Who Ships Production Systems Like This?
          </h3>
          <p className="text-xs sm:text-sm text-[#A4ACB9] max-w-xl mx-auto leading-relaxed">
            I specialize in high-concurrency offline-first mobile systems, real-time lead ingestion engines, and scalable backend platforms. Let’s build together.
          </p>
          <div className="flex flex-wrap justify-center gap-3 pt-2">
            <a
              href="https://wa.me/917990361109"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-xl bg-[#C27803] hover:bg-[#9E6102] text-white font-semibold text-xs transition shadow-xs flex items-center gap-2"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Chat Directly on WhatsApp</span>
            </a>
            <Link
              to="/contact"
              className="px-6 py-3 rounded-xl bg-[#2B2E36] hover:bg-[#383C46] text-white font-semibold text-xs transition flex items-center"
            >
              Send Inbound Message
            </Link>
          </div>
        </div>

      </article>
    </div>
  );
}