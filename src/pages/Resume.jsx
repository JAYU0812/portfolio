import { useState } from "react";
import { Link } from "react-router-dom";
import { resumeData } from "../data/resumeData";
import { 
  Printer, 
  ArrowLeft, 
  Mail, 
  Phone, 
  MapPin, 
  Globe, 
  Download, 
  Check, 
  FileText,
  Sparkles
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "../components/Icons";

export default function Resume() {
  const [viewMode, setViewMode] = useState("ats"); // "ats" (strict 2-page standard) or "full" (complete archive)

  const handlePrint = () => {
    window.print();
  };

  // Select project list based on view mode
  const displayProjects = viewMode === "ats" ? resumeData.flagshipProjects : resumeData.projects;

  return (
    <div className="py-6 sm:py-8 px-3 sm:px-6 print:p-0 print:m-0 text-[#121316] dark:text-[#F5F5F7] transition-colors duration-200">
      
      {/* ----------------- ACTION & CONTROL BAR (Hidden in Print) ----------------- */}
      <div className="max-w-4xl mx-auto mb-6 sm:mb-8 space-y-4 print:hidden">
        
        {/* Navigation & Print Actions */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
          <Link
            to="/"
            className="inline-flex items-center justify-center sm:justify-start gap-2 px-4 py-2.5 rounded-xl bg-white dark:bg-[#14161E] border border-[#E8E5DF] dark:border-[#232733] text-[#121316] dark:text-[#F5F5F7] hover:bg-[#F2EDE4] dark:hover:bg-[#1C202B] transition text-xs font-semibold shadow-xs"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Portfolio</span>
          </Link>

          <div className="flex flex-wrap items-center justify-end gap-2.5">
            <a
              href="/Jaykumar_Hasmukh_Soni_Resume.pdf"
              download="Jaykumar_Hasmukh_Soni_Resume.pdf"
              className="inline-flex items-center justify-center gap-1.5 px-3.5 sm:px-4 py-2.5 rounded-xl bg-white dark:bg-[#14161E] border border-[#E8E5DF] dark:border-[#232733] text-[#121316] dark:text-[#F5F5F7] hover:bg-[#F2EDE4] dark:hover:bg-[#1C202B] hover:border-[#C27803]/40 transition text-xs font-semibold shadow-xs"
            >
              <Download className="w-4 h-4 text-[#C27803] dark:text-[#E8C37D]" />
              <span>Download PDF</span>
            </a>

            <button
              onClick={handlePrint}
              className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-2.5 rounded-xl bg-[#121316] text-white hover:bg-[#C27803] dark:bg-[#C27803] dark:hover:bg-[#E58B0B] transition text-xs font-semibold shadow-xs cursor-pointer shrink-0 active:scale-95"
            >
              <Printer className="w-4 h-4" />
              <span>Print / Save as PDF (A4)</span>
            </button>
          </div>
        </div>

        {/* Format Selector & Print Optimization Banner */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 p-3 sm:p-4 rounded-2xl bg-white dark:bg-[#14161E] border border-[#E8E5DF] dark:border-[#232733] shadow-xs">
          <div className="flex items-center gap-2.5">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse shrink-0" />
            <div>
              <span className="text-xs font-bold text-[#121316] dark:text-white flex items-center gap-1.5">
                <FileText className="w-3.5 h-3.5 text-[#C27803]" />
                {viewMode === "ats" ? "A4 ATS Standard (Strict 2 Pages)" : "Extended Career Dossier (All 20 Projects)"}
              </span>
              <p className="text-[11px] text-[#656A76] dark:text-[#8E95A5] mt-0.5">
                {viewMode === "ats" 
                  ? "Optimized for corporate ATS parsers and 2-page physical/PDF print with zero spillover." 
                  : "Complete chronological archive including student portals, academic tools, and minor repositories."}
              </p>
            </div>
          </div>

          {/* Mode Switch Pills */}
          <div className="flex items-center gap-1 p-1 bg-[#F2EDE4] dark:bg-[#1C202B] rounded-xl text-xs font-semibold w-full sm:w-auto">
            <button
              onClick={() => setViewMode("ats")}
              className={`flex-1 sm:flex-none flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-lg transition cursor-pointer ${
                viewMode === "ats"
                  ? "bg-[#121316] text-white dark:bg-[#C27803] shadow-xs"
                  : "text-[#656A76] dark:text-[#8E95A5] hover:text-[#121316] dark:hover:text-white"
              }`}
            >
              {viewMode === "ats" && <Check className="w-3 h-3" />}
              <span>2-Page ATS (Default)</span>
            </button>

            <button
              onClick={() => setViewMode("full")}
              className={`flex-1 sm:flex-none flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-lg transition cursor-pointer ${
                viewMode === "full"
                  ? "bg-[#121316] text-white dark:bg-[#C27803] shadow-xs"
                  : "text-[#656A76] dark:text-[#8E95A5] hover:text-[#121316] dark:hover:text-white"
              }`}
            >
              {viewMode === "full" && <Check className="w-3 h-3" />}
              <span>Full Archive (20 Projects)</span>
            </button>
          </div>
        </div>

      </div>

      {/* ----------------- RESUME SHEET (A4 Structured) ----------------- */}
      <article className="max-w-4xl mx-auto bg-white dark:bg-[#14161E] border border-[#E8E5DF] dark:border-[#232733] rounded-2xl sm:rounded-[24px] p-4 sm:p-8 lg:p-10 shadow-sm text-[#121316] dark:text-[#F5F5F7] print:border-none print:shadow-none print:p-0 print:m-0 print:max-w-none print:w-full print:bg-white print:text-black print:dark:bg-white print:dark:text-black">
        
        {/* =========================================================================
            PAGE 1 OF 2: HEADER, SUMMARY, SKILLS, PROFESSIONAL EXPERIENCE
           ========================================================================= */}
        <div className="print-page-1">
          {/* HEADER (Candidate Identity & Contact Channels) */}
          <div className="resume-header print:block border-b-2 border-[#121316] dark:border-[#2E3342] print:border-[#121316] pb-3 sm:pb-4 mb-4 sm:mb-5 print:pb-2 print:mb-3">
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
              <h1 className="text-xl sm:text-2xl lg:text-3xl font-extrabold font-mono tracking-tight text-[#121316] dark:text-white print:text-black uppercase print:text-[18pt] print:leading-tight">
                {resumeData.personal.name}
              </h1>
              <span className="text-[10px] font-mono font-bold text-[#C27803] print:text-[#92400E] uppercase tracking-wider hidden print:inline">
                A4 Executive Resume · Page 1 of 2
              </span>
            </div>

            <p className="text-xs sm:text-sm font-semibold text-[#C27803] dark:text-[#E8C37D] print:text-[#92400E] mb-2 print:mb-1.5 print:text-[10pt] font-mono">
              {resumeData.personal.title}
            </p>

            {/* Contact Row */}
            <div className="flex flex-wrap items-center gap-x-3.5 gap-y-1 text-xs print:text-[8pt] font-mono text-[#4A4E57] dark:text-[#A1A7B5] print:text-black">
              <a href={`mailto:${resumeData.personal.email}`} className="flex items-center gap-1 hover:text-[#C27803] dark:hover:text-[#E8C37D] transition break-all">
                <Mail className="w-3 h-3 text-[#C27803] dark:text-[#E8C37D] shrink-0 print:hidden" />
                <span>{resumeData.personal.email}</span>
              </a>
              <span className="text-[#C27803] print:text-[#444]">•</span>
              <a href="tel:917990361109" className="flex items-center gap-1 hover:text-[#C27803] dark:hover:text-[#E8C37D] transition">
                <Phone className="w-3 h-3 text-[#C27803] dark:text-[#E8C37D] shrink-0 print:hidden" />
                <span>{resumeData.personal.phone}</span>
              </a>
              <span className="text-[#C27803] print:text-[#444]">•</span>
              <span className="flex items-center gap-1">
                <MapPin className="w-3 h-3 text-[#C27803] dark:text-[#E8C37D] shrink-0 print:hidden" />
                <span>{resumeData.personal.location}</span>
              </span>
              <span className="text-[#C27803] print:text-[#444]">•</span>
              <a href={resumeData.personal.github} target="_blank" rel="noreferrer" className="flex items-center gap-1 hover:text-[#C27803] dark:hover:text-[#E8C37D] transition">
                <GithubIcon className="w-3 h-3 text-[#C27803] dark:text-[#E8C37D] shrink-0 print:hidden" />
                <span>github.com/JAYU0812</span>
              </a>
              <span className="text-[#C27803] print:text-[#444]">•</span>
              <a href={resumeData.personal.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-1 hover:text-[#C27803] dark:hover:text-[#E8C37D] transition">
                <LinkedinIcon className="w-3 h-3 text-[#C27803] dark:text-[#E8C37D] shrink-0 print:hidden" />
                <span>linkedin.com/in/sonijay1908</span>
              </a>
              <span className="text-[#C27803] print:text-[#444]">•</span>
              <a href={resumeData.personal.portfolio} target="_blank" rel="noreferrer" className="flex items-center gap-1 hover:text-[#C27803] dark:hover:text-[#E8C37D] transition font-bold text-[#C27803] print:text-black">
                <Globe className="w-3 h-3 shrink-0 print:hidden" />
                <span>portfolio-iota-nine-7b2v5ah7u8.vercel.app</span>
              </a>
            </div>
          </div>

          {/* 1. PROFESSIONAL SUMMARY */}
          <section className="mb-4 sm:mb-5 print:mb-2.5">
            <h2 className="text-xs print:text-[9pt] font-mono font-bold uppercase tracking-wider text-[#121316] dark:text-white print:text-black border-b border-[#121316] dark:border-[#2E3342] print:border-[#333] pb-0.5 mb-1.5 print:mb-1">
              Professional Summary
            </h2>
            <p className="text-xs print:text-[8pt] text-[#333740] dark:text-[#D1D5DB] print:text-[#222] leading-relaxed print:leading-[1.28] text-justify">
              {resumeData.summary}
            </p>
          </section>

          {/* 2. TECHNICAL SKILLS */}
          <section className="mb-4 sm:mb-5 print:mb-2.5">
            <h2 className="text-xs print:text-[9pt] font-mono font-bold uppercase tracking-wider text-[#121316] dark:text-white print:text-black border-b border-[#121316] dark:border-[#2E3342] print:border-[#333] pb-0.5 mb-1.5 print:mb-1">
              Technical Competencies
            </h2>
            <div className="space-y-1 print:space-y-0.5 text-xs print:text-[7.8pt] print:leading-[1.24]">
              <div className="flex flex-col sm:flex-row sm:items-baseline gap-0.5 sm:gap-1">
                <span className="font-bold w-full sm:w-auto sm:min-w-[150px] print:min-w-[130px] text-[#121316] dark:text-white print:text-black shrink-0">
                  Mobile Development:
                </span>
                <span className="text-[#4A4E57] dark:text-[#A1A7B5] print:text-[#333]">
                  {resumeData.skills.mobile.join(", ")}
                </span>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-baseline gap-0.5 sm:gap-1">
                <span className="font-bold w-full sm:w-auto sm:min-w-[150px] print:min-w-[130px] text-[#121316] dark:text-white print:text-black shrink-0">
                  Frontend Development:
                </span>
                <span className="text-[#4A4E57] dark:text-[#A1A7B5] print:text-[#333]">
                  {resumeData.skills.frontend.join(", ")}
                </span>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-baseline gap-0.5 sm:gap-1">
                <span className="font-bold w-full sm:w-auto sm:min-w-[150px] print:min-w-[130px] text-[#121316] dark:text-white print:text-black shrink-0">
                  Backend & Systems:
                </span>
                <span className="text-[#4A4E57] dark:text-[#A1A7B5] print:text-[#333]">
                  {resumeData.skills.backend.join(", ")}
                </span>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-baseline gap-0.5 sm:gap-1">
                <span className="font-bold w-full sm:w-auto sm:min-w-[150px] print:min-w-[130px] text-[#121316] dark:text-white print:text-black shrink-0">
                  Database & Storage:
                </span>
                <span className="text-[#4A4E57] dark:text-[#A1A7B5] print:text-[#333]">
                  {resumeData.skills.database.join(", ")}
                </span>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-baseline gap-0.5 sm:gap-1">
                <span className="font-bold w-full sm:w-auto sm:min-w-[150px] print:min-w-[130px] text-[#121316] dark:text-white print:text-black shrink-0">
                  DevOps & Tooling:
                </span>
                <span className="text-[#4A4E57] dark:text-[#A1A7B5] print:text-[#333]">
                  {resumeData.skills.tools.join(", ")}
                </span>
              </div>
            </div>
          </section>

          {/* 3. EXPERIENCE */}
          <section className="mb-2 print:mb-0">
            <h2 className="text-xs print:text-[9pt] font-mono font-bold uppercase tracking-wider text-[#121316] dark:text-white print:text-black border-b border-[#121316] dark:border-[#2E3342] print:border-[#333] pb-0.5 mb-2 print:mb-1.5">
              Professional Experience
            </h2>

            <div className="space-y-3.5 sm:space-y-4 print:space-y-2">
              {resumeData.experience.map((exp, idx) => {
                const bulletList = (viewMode === "ats" && exp.coreBullets) ? exp.coreBullets : exp.bullets;

                return (
                  <div key={idx} className="print-avoid-break">
                    <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-0.5 gap-0.5">
                      <h3 className="text-xs sm:text-sm print:text-[8.5pt] font-bold text-[#121316] dark:text-white print:text-black">
                        {exp.company} <span className="font-normal text-[#656A76] dark:text-[#8E95A5] print:text-[#555]">| {exp.role}</span>
                      </h3>
                      <span className="text-[11px] sm:text-xs print:text-[7.5pt] font-mono font-medium text-[#7A7E89] dark:text-[#8E95A5] print:text-[#444]">
                        {exp.period} • {exp.location}
                      </span>
                    </div>

                    <p className="text-[11px] sm:text-xs print:text-[7.8pt] font-mono text-[#C27803] dark:text-[#E8C37D] print:text-[#92400E] font-semibold mb-1 print:mb-0.5">
                      {exp.description}
                    </p>

                    <ul className="list-disc pl-4 sm:pl-4.5 space-y-1 print:space-y-0.5 text-xs print:text-[7.8pt] text-[#333740] dark:text-[#D1D5DB] print:text-[#222] leading-relaxed print:leading-[1.26]">
                      {bulletList.map((bullet, bIdx) => (
                        <li key={bIdx}>{bullet}</li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </section>
        </div>

        {/* =========================================================================
            HARD PAGE BREAK (A4 Separation between Page 1 and Page 2)
           ========================================================================= */}
        <div className="my-8 py-3 border-t-2 border-dashed border-[#E8E5DF] dark:border-[#2B303E] print:border-none print:m-0 print:p-0 print-page-break flex items-center justify-center">
          <span className="text-[10px] font-mono uppercase tracking-widest text-[#7A7E89] dark:text-[#8E95A5] bg-[#FBF9F5] dark:bg-[#14161E] px-3 py-1 rounded-full border border-[#E8E5DF] dark:border-[#2B303E] print:hidden shadow-xs flex items-center gap-1.5">
            <Sparkles className="w-3 h-3 text-[#C27803]" />
            Page 2 (A4 Page Break)
          </span>
        </div>

        {/* =========================================================================
            PAGE 2 OF 2: FLAGSHIP PROJECTS, EDUCATION, AWARDS & LEADERSHIP
           ========================================================================= */}
        <div className="print-page-2">
          
          {/* Subtle Page 2 Header for Print */}
          <div className="hidden print:flex items-center justify-between border-b border-[#E8E5DF] pb-1 mb-2">
            <span className="font-mono text-[8pt] font-bold uppercase text-[#121316]">
              {resumeData.personal.name} — Technical Resume
            </span>
            <span className="font-mono text-[7.5pt] font-semibold text-[#92400E]">
              Page 2 of 2
            </span>
          </div>

          {/* 4. KEY PROJECTS */}
          <section className="mb-4 print:mb-2">
            <div className="flex items-center justify-between border-b border-[#121316] dark:border-[#2E3342] print:border-[#333] pb-0.5 mb-2 print:mb-1.5">
              <h2 className="text-xs print:text-[9pt] font-mono font-bold uppercase tracking-wider text-[#121316] dark:text-white print:text-black">
                {viewMode === "ats" ? "Key Flagship Systems & Deployments" : "Production Software & Live Deployments"}
              </h2>
              <span className="text-[10px] font-mono text-[#7A7E89] dark:text-[#8E95A5] print:text-[#555] print:text-[7pt]">
                Showing {displayProjects.length} Systems
              </span>
            </div>

            <div className="space-y-3 print:space-y-1.5">
              {displayProjects.map((proj, idx) => (
                <div key={idx} className="print-avoid-break">
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-0.5 gap-1">
                    <div className="flex flex-wrap items-center gap-1.5">
                      <h3 className="text-xs sm:text-sm print:text-[8.3pt] font-bold text-[#121316] dark:text-white print:text-black">
                        {proj.name}
                      </h3>
                      <span className="text-[9px] font-mono px-1.5 py-0.2 rounded bg-[#F2EDE4] dark:bg-[#1C202B] text-[#78350F] dark:text-[#FCD34D] border border-[#E8E5DF] dark:border-[#2B303E] print:bg-[#F2EDE4] print:text-[#78350F] print:py-0 print:px-1">
                        {proj.badge}
                      </span>
                    </div>
                    {proj.url && (
                      <a
                        href={proj.url}
                        target="_blank"
                        rel="noreferrer"
                        className="text-[11px] sm:text-xs print:text-[7.5pt] font-mono text-[#C27803] dark:text-[#E8C37D] print:text-[#92400E] hover:underline break-all"
                      >
                        {proj.displayUrl}
                      </a>
                    )}
                  </div>

                  <p className="text-[11px] print:text-[7.3pt] font-mono text-[#656A76] dark:text-[#8E95A5] print:text-[#444] mb-0.5">
                    <strong>Tech:</strong> {proj.technologies}
                  </p>

                  <ul className="list-disc pl-4 sm:pl-4.5 space-y-0.5 text-xs print:text-[7.6pt] text-[#333740] dark:text-[#D1D5DB] print:text-[#222] leading-relaxed print:leading-[1.25]">
                    {proj.bullets.map((bullet, bIdx) => (
                      <li key={bIdx}>{bullet}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* ATS Note pointing to complete portfolio */}
            {viewMode === "ats" && (
              <div className="mt-2.5 p-2 rounded-lg bg-[#FBF9F5] dark:bg-[#101218] border border-[#E8E5DF] dark:border-[#232733] print:bg-transparent print:border-none print:p-0 print:mt-1.5 text-[11px] print:text-[7.5pt] font-mono text-[#656A76] dark:text-[#A1A7B5] print:text-[#444]">
                <span>
                  ✦ <strong>Full Portfolio:</strong> 14+ additional production applications, Google Play Store releases (Parichay Sammelan, KITAAB), developer tools & case studies documented at{" "}
                  <a href="https://portfolio-iota-nine-7b2v5ah7u8.vercel.app/projects" target="_blank" rel="noreferrer" className="text-[#C27803] print:text-black underline font-semibold">
                    portfolio-iota-nine-7b2v5ah7u8.vercel.app/projects
                  </a>
                </span>
              </div>
            )}
          </section>

          {/* 5. EDUCATION */}
          <section className="mb-3.5 print:mb-2 print-avoid-break">
            <h2 className="text-xs print:text-[9pt] font-mono font-bold uppercase tracking-wider text-[#121316] dark:text-white print:text-black border-b border-[#121316] dark:border-[#2E3342] print:border-[#333] pb-0.5 mb-1.5 print:mb-1">
              Education
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-3 print:grid-cols-3 print:gap-2">
              {resumeData.education.map((edu, idx) => (
                <div key={idx} className="bg-[#FBF9F5] dark:bg-[#101218] print:bg-transparent p-2.5 sm:p-3 print:p-1 rounded-xl border border-[#E8E5DF] dark:border-[#232733] print:border-[#DDD]">
                  <h3 className="text-xs print:text-[8pt] font-bold text-[#121316] dark:text-white print:text-black leading-snug">
                    {edu.degree}
                  </h3>
                  <p className="text-[11px] print:text-[7.2pt] text-[#4A4E57] dark:text-[#A1A7B5] print:text-[#555] leading-snug">
                    {edu.institution}
                  </p>
                  <p className="text-[10px] print:text-[7.2pt] font-mono text-[#C27803] dark:text-[#E8C37D] print:text-[#92400E] font-semibold mt-0.5">
                    {edu.period}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* 6. ACHIEVEMENTS & CERTIFICATIONS */}
          <section className="mb-3.5 print:mb-2 print-avoid-break">
            <h2 className="text-xs print:text-[9pt] font-mono font-bold uppercase tracking-wider text-[#121316] dark:text-white print:text-black border-b border-[#121316] dark:border-[#2E3342] print:border-[#333] pb-0.5 mb-1.5 print:mb-1">
              Honors, Certifications & Achievements
            </h2>
            <ul className="list-disc pl-4 sm:pl-4.5 space-y-1 print:space-y-0.5 text-xs print:text-[7.6pt] text-[#333740] dark:text-[#D1D5DB] print:text-[#222] leading-relaxed print:leading-[1.25]">
              {(viewMode === "ats" && resumeData.coreAchievements ? resumeData.coreAchievements : resumeData.achievements).slice(0, 5).map((ach, idx) => (
                <li key={idx}>{ach}</li>
              ))}
              {resumeData.certifications.slice(0, 3).map((cert, idx) => (
                <li key={`cert-${idx}`}>{cert}</li>
              ))}
            </ul>
          </section>

          {/* 7. LEADERSHIP & LANGUAGES */}
          <section className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 print:grid-cols-2 print:gap-3 pt-2 border-t border-[#E8E5DF] dark:border-[#232733] print:border-[#DDD] print-avoid-break">
            <div>
              <h2 className="text-xs print:text-[8.5pt] font-mono font-bold uppercase tracking-wider text-[#121316] dark:text-white print:text-black mb-1">
                Leadership
              </h2>
              <ul className="list-disc pl-4 space-y-0.5 text-xs print:text-[7.5pt] text-[#333740] dark:text-[#D1D5DB] print:text-[#333]">
                {resumeData.leadership.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-xs print:text-[8.5pt] font-mono font-bold uppercase tracking-wider text-[#121316] dark:text-white print:text-black mb-1">
                Languages
              </h2>
              <p className="text-xs print:text-[7.5pt] text-[#333740] dark:text-[#D1D5DB] print:text-[#333] font-mono">
                English (Professional) • Hindi (Native) • Gujarati (Fluent)
              </p>
            </div>
          </section>

        </div>

      </article>
    </div>
  );
}
