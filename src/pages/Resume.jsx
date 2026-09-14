import { Link } from "react-router-dom";
import { resumeData } from "../data/resumeData";
import { Printer, ArrowLeft, Mail, Phone, MapPin, Globe } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "../components/Icons";

export default function Resume() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="py-8 px-4 sm:px-6">
      {/* ----------------- ACTION BAR (Hidden in Print) ----------------- */}
      <div className="max-w-4xl mx-auto mb-8 flex flex-wrap items-center justify-between gap-4 print:hidden">
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white border border-[#E8E5DF] text-[#121316] hover:bg-[#F2EDE4] transition text-xs font-semibold shadow-xs"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Portfolio</span>
        </Link>

        <div className="flex items-center gap-3">
          <span className="text-xs font-mono text-[#7A7E89] hidden sm:inline">
            Optimized for A4 Printing & ATS Scanners
          </span>
          <button
            onClick={handlePrint}
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-[#121316] text-white hover:bg-[#C27803] transition text-xs font-semibold shadow-xs cursor-pointer"
          >
            <Printer className="w-4 h-4" />
            <span>Print / Save as PDF</span>
          </button>
        </div>
      </div>

      {/* ----------------- RESUME SHEET (A4 Structured) ----------------- */}
      <article className="max-w-4xl mx-auto bg-white border border-[#E8E5DF] rounded-3xl sm:rounded-[32px] p-6 sm:p-12 shadow-sm text-[#121316] print:border-none print:shadow-none print:p-2 print:m-0 print:max-w-none print:w-full">
        
        {/* HEADER */}
        <header className="border-b-2 border-[#121316] pb-6 mb-7">
          <h1 className="text-2xl sm:text-3xl font-extrabold font-mono tracking-tight text-[#121316] uppercase mb-1">
            {resumeData.personal.name}
          </h1>
          <p className="text-sm sm:text-base font-semibold text-[#C27803] mb-4">
            {resumeData.personal.title}
          </p>

          <div className="flex flex-wrap gap-x-5 gap-y-2 text-xs font-mono text-[#4A4E57]">
            <a href={`mailto:${resumeData.personal.email}`} className="flex items-center gap-1.5 hover:text-[#C27803] transition">
              <Mail className="w-3.5 h-3.5 text-[#C27803]" />
              <span>{resumeData.personal.email}</span>
            </a>
            <a href="tel:917990361109" className="flex items-center gap-1.5 hover:text-[#C27803] transition">
              <Phone className="w-3.5 h-3.5 text-[#C27803]" />
              <span>{resumeData.personal.phone}</span>
            </a>
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-[#C27803]" />
              <span>{resumeData.personal.location}</span>
            </span>
            <a href={resumeData.personal.github} target="_blank" rel="noreferrer" className="flex items-center gap-1.5 hover:text-[#C27803] transition">
              <GithubIcon className="w-3.5 h-3.5 text-[#C27803]" />
              <span>github.com/JAYU0812</span>
            </a>
            <a href={resumeData.personal.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-1.5 hover:text-[#C27803] transition">
              <LinkedinIcon className="w-3.5 h-3.5 text-[#C27803]" />
              <span>linkedin.com/in/sonijay1908</span>
            </a>
            <a href={resumeData.personal.portfolio} target="_blank" rel="noreferrer" className="flex items-center gap-1.5 hover:text-[#C27803] transition">
              <Globe className="w-3.5 h-3.5 text-[#C27803]" />
              <span>propkart.nbpropertytech.com</span>
            </a>
          </div>
        </header>

        {/* 1. PROFESSIONAL SUMMARY */}
        <section className="mb-7">
          <h2 className="text-xs font-mono font-bold uppercase tracking-widest text-[#121316] border-b border-[#121316] pb-1 mb-3">
            Professional Summary
          </h2>
          <p className="text-xs sm:text-sm text-[#333740] leading-relaxed text-justify">
            {resumeData.summary}
          </p>
        </section>

        {/* 2. TECHNICAL SKILLS */}
        <section className="mb-7">
          <h2 className="text-xs font-mono font-bold uppercase tracking-widest text-[#121316] border-b border-[#121316] pb-1 mb-3">
            Technical Competencies
          </h2>
          <div className="space-y-2 text-xs">
            <div className="flex flex-col sm:flex-row sm:items-baseline gap-1">
              <span className="font-bold min-w-[170px] text-[#121316]">Mobile Development:</span>
              <span className="text-[#4A4E57]">{resumeData.skills.mobile.join(", ")}</span>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-baseline gap-1">
              <span className="font-bold min-w-[170px] text-[#121316]">Frontend Development:</span>
              <span className="text-[#4A4E57]">{resumeData.skills.frontend.join(", ")}</span>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-baseline gap-1">
              <span className="font-bold min-w-[170px] text-[#121316]">Backend & APIs:</span>
              <span className="text-[#4A4E57]">{resumeData.skills.backend.join(", ")}</span>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-baseline gap-1">
              <span className="font-bold min-w-[170px] text-[#121316]">Database & Storage:</span>
              <span className="text-[#4A4E57]">{resumeData.skills.database.join(", ")}</span>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-baseline gap-1">
              <span className="font-bold min-w-[170px] text-[#121316]">Tools & Algorithms:</span>
              <span className="text-[#4A4E57]">{resumeData.skills.tools.join(", ")}</span>
            </div>
          </div>
        </section>

        {/* 3. EXPERIENCE */}
        <section className="mb-7">
          <h2 className="text-xs font-mono font-bold uppercase tracking-widest text-[#121316] border-b border-[#121316] pb-1 mb-4">
            Professional Experience
          </h2>

          <div className="space-y-6">
            {resumeData.experience.map((exp, idx) => (
              <div key={idx} className="break-inside-avoid">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-1">
                  <h3 className="text-sm font-bold text-[#121316]">
                    {exp.company} <span className="font-normal text-[#656A76]">| {exp.role}</span>
                  </h3>
                  <span className="text-xs font-mono font-medium text-[#7A7E89]">
                    {exp.period} • {exp.location}
                  </span>
                </div>

                <p className="text-xs font-mono text-[#C27803] font-semibold mb-2">
                  {exp.description}
                </p>

                <ul className="list-disc pl-5 space-y-1.5 text-xs text-[#333740] leading-relaxed">
                  {exp.bullets.map((bullet, bIdx) => (
                    <li key={bIdx}>{bullet}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* 4. KEY PROJECTS */}
        <section className="mb-7">
          <h2 className="text-xs font-mono font-bold uppercase tracking-widest text-[#121316] border-b border-[#121316] pb-1 mb-4">
            Production Software & Live Deployments
          </h2>

          <div className="space-y-4">
            {resumeData.projects.map((proj, idx) => (
              <div key={idx} className="break-inside-avoid">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-0.5">
                  <div className="flex items-center gap-2">
                    <h3 className="text-xs sm:text-sm font-bold text-[#121316]">
                      {proj.name}
                    </h3>
                    <span className="text-[10px] font-mono px-2 py-0.2 rounded bg-[#F2EDE4] text-[#78350F] border border-[#E8E5DF]">
                      {proj.badge}
                    </span>
                  </div>
                  {proj.url && (
                    <a
                      href={proj.url}
                      target="_blank"
                      rel="noreferrer"
                      className="text-xs font-mono text-[#C27803] hover:underline"
                    >
                      {proj.displayUrl}
                    </a>
                  )}
                </div>

                <p className="text-[11px] font-mono text-[#656A76] mb-1">
                  <strong>Tech Stack:</strong> {proj.technologies}
                </p>

                <ul className="list-disc pl-5 space-y-1 text-xs text-[#333740] leading-relaxed">
                  {proj.bullets.map((bullet, bIdx) => (
                    <li key={bIdx}>{bullet}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* 5. EDUCATION */}
        <section className="mb-7">
          <h2 className="text-xs font-mono font-bold uppercase tracking-widest text-[#121316] border-b border-[#121316] pb-1 mb-3">
            Education
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {resumeData.education.map((edu, idx) => (
              <div key={idx} className="break-inside-avoid bg-[#FBF9F5] p-3 rounded-xl border border-[#E8E5DF]">
                <h3 className="text-xs font-bold text-[#121316]">{edu.degree}</h3>
                <p className="text-[11px] text-[#4A4E57]">{edu.institution}</p>
                <p className="text-[10px] font-mono text-[#C27803] font-semibold mt-1">{edu.period}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 6. ACHIEVEMENTS & CERTIFICATIONS */}
        <section className="mb-7">
          <h2 className="text-xs font-mono font-bold uppercase tracking-widest text-[#121316] border-b border-[#121316] pb-1 mb-3">
            Honors, Certifications & Achievements
          </h2>
          <ul className="list-disc pl-5 space-y-1 text-xs text-[#333740] leading-relaxed">
            {resumeData.achievements.map((ach, idx) => (
              <li key={idx}>{ach}</li>
            ))}
            {resumeData.certifications.map((cert, idx) => (
              <li key={`cert-${idx}`}>{cert}</li>
            ))}
          </ul>
        </section>

        {/* 7. LEADERSHIP & LANGUAGES */}
        <section className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2 border-t border-[#E8E5DF]">
          <div>
            <h2 className="text-xs font-mono font-bold uppercase tracking-widest text-[#121316] mb-2">
              Leadership
            </h2>
            <ul className="list-disc pl-5 space-y-1 text-xs text-[#333740]">
              {resumeData.leadership.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-xs font-mono font-bold uppercase tracking-widest text-[#121316] mb-2">
              Languages
            </h2>
            <p className="text-xs text-[#333740] font-mono">
              English (Professional) • Hindi (Fluent) • Gujarati (Native)
            </p>
          </div>
        </section>

      </article>
    </div>
  );
}
