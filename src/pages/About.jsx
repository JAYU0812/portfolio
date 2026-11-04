import { Link } from "react-router-dom";
import { timelineEvents } from "../data/timeline";
import SEO from "../components/SEO";
import { 
  Smartphone, 
  CheckCircle2, 
  ArrowUpRight, 
  Award, 
  GraduationCap,
  Sparkles,
  Zap,
  Building2
} from "lucide-react";

export default function About() {
  const handleMascotSpeak = (text) => {
    window.dispatchEvent(new CustomEvent("mascot-speak", { detail: { text } }));
  };

  const techSkills = [
    {
      category: "Mobile & Offline-First",
      skills: ["Flutter", "Dart", "Isar Database", "BLoC & Riverpod", "Android Studio", "Play Store Deployment"]
    },
    {
      category: "Frontend & Web",
      skills: ["React.js", "JavaScript (ES6+)", "Tailwind CSS", "HTML5 / CSS3", "Vite", "Component Architecture"]
    },
    {
      category: "Backend & Systems",
      skills: ["Node.js", "Express.js", "PHP", "RESTful APIs", "Realtime WebSockets", "Authentication"]
    },
    {
      category: "Databases & Cloud",
      skills: ["Supabase", "PostgreSQL", "MySQL", "Relational Modeling", "Database Indexing", "Vercel"]
    },
    {
      category: "Engineering Specialties",
      skills: ["Offline-First Architecture", "Realtime Sync", "Haversine Geofencing", "GST Billing Engines", "Git & GitHub"]
    }
  ];

  return (
    <div className="py-8 sm:py-16 text-[#121316] dark:text-[#F5F5F7] transition-colors duration-200">
      <SEO 
        title="About Jay Soni — Software Engineer & Architect in Ahmedabad"
        description="Learn about Soni Jaykumar Hasmukh (Jay Soni), Lead Mobile & Full-Stack Architect at NB Developers in Ahmedabad, Gujarat. Background, technical journey, awards, and engineering philosophy."
        keywords="About Jay Soni, Soni Jaykumar, Engineer in Ahmedabad, Software Architect Ahmedabad, NB Developers Ahmedabad, Flutter Engineer Gujarat, Full Stack Developer Bio, Gandhinagar University IT"
        canonical="https://portfolio-iota-nine-7b2v5ah7u8.vercel.app/about"
      />
      {/* ----------------- 1. HERO BIO ----------------- */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 mb-12 sm:mb-16">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          <div className="lg:col-span-7 space-y-4 sm:space-y-6">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#C27803] dark:text-[#E8C37D]">
              About Soni Jaykumar
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-[#121316] dark:text-white tracking-tight leading-tight">
              Engineering Practical Software That Solves Real Workflow Problems.
            </h1>
            <p className="text-sm sm:text-lg text-[#4A4E57] dark:text-[#A1A7B5] leading-relaxed">
              I am an Award-Winning Lead Mobile & Full-Stack Architect currently building enterprise PropTech applications at <strong className="text-[#121316] dark:text-white font-semibold">NB Developers / NB PropertyTech</strong>. Recipient of the <strong className="text-[#121316] dark:text-white font-semibold">Reward & Recognition Certificate of Appreciation</strong> from NB Infra Projects Limited (Since 1946). My core expertise spans <strong className="text-[#121316] dark:text-white font-semibold">Flutter</strong>, <strong className="text-[#121316] dark:text-white font-semibold">React</strong>, <strong className="text-[#121316] dark:text-white font-semibold">Node.js / NestJS</strong>, and <strong className="text-[#121316] dark:text-white font-semibold">Offline-First Architectures</strong>.
            </p>
            <p className="text-xs sm:text-base text-[#4A4E57] dark:text-[#A1A7B5] leading-relaxed">
              My engineering philosophy is rooted in pragmatism: writing clean, modular, and resilient code that works flawlessly even without an internet connection. From architecting PropKart OS with Natural Language AI Search and launching PropKart Broker Portal to digitizing traditional businesses with custom GST ERPs and publishing apps on the Google Play Store, I take pride in delivering end-to-end software that drives genuine business value.
            </p>

            <div className="grid grid-cols-2 sm:flex sm:flex-row gap-2.5 sm:gap-3 pt-2">
              <Link
                to="/projects"
                className="px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl bg-[#121316] text-white hover:bg-[#C27803] dark:bg-[#C27803] dark:hover:bg-[#E58B0B] transition-colors text-xs sm:text-sm font-semibold shadow-xs flex items-center justify-center gap-1.5 active:scale-95"
              >
                <span>View My Work</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
              <Link
                to="/contact"
                className="px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl bg-white dark:bg-[#14161E] border border-[#E8E5DF] dark:border-[#262933] text-[#121316] dark:text-white hover:bg-[#F2EDE4] dark:hover:bg-[#1E222D] transition-colors text-xs sm:text-sm font-semibold shadow-xs flex items-center justify-center active:scale-95"
              >
                Let’s Connect
              </Link>
            </div>
          </div>

          {/* Right Highlights Card */}
          <div className="lg:col-span-5">
            <div className="bg-white dark:bg-[#14161E] rounded-2xl sm:rounded-3xl p-5 sm:p-8 border border-[#E8E5DF] dark:border-[#232733] shadow-sm space-y-5 sm:space-y-6">
              <h3 className="text-base font-bold text-[#121316] dark:text-[#F5F5F7] pb-3 border-b border-[#F2EDE4] dark:border-[#222530] flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#C27803] dark:text-[#E8C37D]" />
                <span>Executive Summary</span>
              </h3>

              <div className="space-y-3.5 text-xs">
                {/* Reward & Recognition Award Highlight */}
                <div className="flex items-start gap-3 bg-[#FEF3C7]/50 dark:bg-[#C27803]/20 p-2.5 rounded-xl border border-[#FCD34D] dark:border-[#C27803]/40">
                  <div className="w-8 h-8 rounded-lg bg-[#FEF3C7] dark:bg-[#C27803]/30 flex items-center justify-center shrink-0 text-[#B45309] dark:text-[#FCD34D]">
                    <Award className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#92400E] dark:text-[#FCD34D]">Reward & Recognition Award</h4>
                    <p className="text-[#78350F] dark:text-[#FDE68A] text-[11px] leading-tight">
                      Certificate of Appreciation from NB Infra Projects Limited (Since 1946), signed by Founder & Chairman Rahul D. Prajapati.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-xl bg-[#F2EDE4] dark:bg-[#1C202B] flex items-center justify-center shrink-0 text-[#C27803] dark:text-[#E8C37D]">
                    <Building2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#121316] dark:text-[#F5F5F7]">Lead Architect @ NB Developers</h4>
                    <p className="text-[#656A76] dark:text-[#8E95A5]">Architect of PropKart OS (SDK 36, AI Search), PropKart Broker Portal, and nbpropertytech.com.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-xl bg-[#F2EDE4] dark:bg-[#1C202B] flex items-center justify-center shrink-0 text-[#C27803] dark:text-[#E8C37D]">
                    <Smartphone className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#121316] dark:text-[#F5F5F7]">2 Google Play Store Releases</h4>
                    <p className="text-[#656A76] dark:text-[#8E95A5]">Published Parichay Sammelan and KITAAB Jeweller Ledger apps.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-xl bg-[#F2EDE4] dark:bg-[#1C202B] flex items-center justify-center shrink-0 text-[#C27803] dark:text-[#E8C37D]">
                    <Zap className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#121316] dark:text-[#F5F5F7]">Live Commercial Launch</h4>
                    <p className="text-[#656A76] dark:text-[#8E95A5]">Deployed chandrakalajewellers.in with custom GST billing calculation engine.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-xl bg-[#F2EDE4] dark:bg-[#1C202B] flex items-center justify-center shrink-0 text-[#C27803] dark:text-[#E8C37D]">
                    <Award className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#121316] dark:text-[#F5F5F7]">Top 5 Hackathon Winner</h4>
                    <p className="text-[#656A76] dark:text-[#8E95A5]">Awarded 5th position for mathematical Haversine geofenced QR attendance system.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-xl bg-[#F2EDE4] dark:bg-[#1C202B] flex items-center justify-center shrink-0 text-[#C27803] dark:text-[#E8C37D]">
                    <GraduationCap className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#121316] dark:text-[#F5F5F7]">B.Tech in Information Technology</h4>
                    <p className="text-[#656A76] dark:text-[#8E95A5]">Gandhinagar University (Expected 2027) • Class Representative.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ----------------- 2. TECHNICAL COMPETENCY MATRIX ----------------- */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-10 sm:py-12 border-t border-[#E8E5DF] dark:border-[#22252F]">
        <div className="max-w-2xl mb-8 sm:mb-12">
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#C27803] dark:text-[#E8C37D]">
            Skills Matrix
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#121316] dark:text-white tracking-tight mt-1 mb-2 sm:mb-3">
            Tools & Technical Specializations
          </h2>
          <p className="text-xs sm:text-sm text-[#4A4E57] dark:text-[#A1A7B5]">
            Core languages, frameworks, databases, and architectural methodologies applied in production.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {techSkills.map((category, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-[#14161E] p-5 sm:p-6 rounded-2xl sm:rounded-3xl border border-[#E8E5DF] dark:border-[#232733] shadow-xs"
            >
              <h3 className="text-sm font-bold text-[#121316] dark:text-[#F5F5F7] mb-3 sm:mb-4 pb-2 border-b border-[#F2EDE4] dark:border-[#222530] flex items-center justify-between">
                <span>{category.category}</span>
                <span className="text-xs font-mono text-[#C27803] dark:text-[#E8C37D]">0{idx + 1}</span>
              </h3>
              <div className="flex flex-wrap gap-1.5 sm:gap-2">
                {category.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    onMouseEnter={() => handleMascotSpeak(`I actively write and deploy systems using ${skill}.`)}
                    onMouseLeave={() => handleMascotSpeak(null)}
                    className="px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-xl bg-[#FBF9F5] dark:bg-[#101218] border border-[#E8E5DF] dark:border-[#262933] text-xs font-mono text-[#333740] dark:text-[#D1D5DB] hover:border-[#C27803]/50 transition cursor-help"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ----------------- 3. CAREER EVOLUTION TIMELINE ----------------- */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16 border-t border-[#E8E5DF] dark:border-[#22252F]">
        <div className="max-w-2xl mb-8 sm:mb-12">
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#C27803] dark:text-[#E8C37D]">
            Chronology
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#121316] dark:text-white tracking-tight mt-1 mb-2 sm:mb-3">
            Career Evolution: 2023 to Present
          </h2>
          <p className="text-xs sm:text-sm text-[#4A4E57] dark:text-[#A1A7B5]">
            A transparent record of hands-on software development milestones and professional roles.
          </p>
        </div>

        <div className="space-y-4 sm:space-y-6">
          {timelineEvents.map((event, idx) => (
            <div
              key={idx}
              className="p-5 sm:p-6 rounded-2xl sm:rounded-3xl bg-white dark:bg-[#14161E] border border-[#E8E5DF] dark:border-[#232733] shadow-xs hover:border-[#C27803]/40 dark:hover:border-[#C27803]/60 transition"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 sm:gap-2 mb-2">
                <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                  <span className="px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-md bg-[#F2EDE4] dark:bg-[#1C202B] text-[#C27803] dark:text-[#E8C37D] font-mono text-[11px] sm:text-xs font-bold border border-[#E8E5DF] dark:border-[#2B303E]">
                    {event.date}
                  </span>
                  <h3 className="text-sm sm:text-base font-bold text-[#121316] dark:text-[#F5F5F7]">
                    {event.title}
                  </h3>
                </div>
                <span className="text-[11px] sm:text-xs font-mono text-[#7A7E89] dark:text-[#8E95A5] self-start sm:self-auto">
                  {event.badge}
                </span>
              </div>
              <p className="text-xs sm:text-sm text-[#4A4E57] dark:text-[#A1A7B5] mb-3 leading-relaxed">
                {event.summary}
              </p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs text-[#656A76] dark:text-[#8E95A5]">
                {event.details.map((detail, dIdx) => (
                  <li key={dIdx} className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
