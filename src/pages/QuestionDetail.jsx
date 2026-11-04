import { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { 
  ArrowLeft, 
  Clock, 
  Calendar, 
  ArrowUpRight, 
  Sparkles, 
  Copy, 
  Check, 
  Share2, 
  BookOpen,
  Building2
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "../components/Icons";
import { 
  getQuestionBySlug, 
  DEVELOPER_QUESTIONS 
} from "../data/developerQuestionsData";
import { projects } from "../data/projects";
import SEO from "../components/SEO";

export default function QuestionDetail() {
  const { categorySlug, questionSlug } = useParams();
  const navigate = useNavigate();
  const [copiedCodeIndex, setCopiedCodeIndex] = useState(null);
  const [linkCopied, setLinkCopied] = useState(false);

  const question = getQuestionBySlug(categorySlug, questionSlug);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [categorySlug, questionSlug]);

  if (!question) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center px-4 py-16 text-center text-[#121316] dark:text-[#F5F5F7]">
        <h2 className="text-2xl sm:text-3xl font-extrabold mb-3">Technical Guide Not Found</h2>
        <p className="text-sm text-[#656A76] dark:text-[#8E95A5] mb-6">
          The requested technical answer does not exist or has been relocated.
        </p>
        <Link
          to="/developer-questions"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#121316] dark:bg-[#C27803] text-white text-xs font-semibold hover:bg-[#C27803] dark:hover:bg-[#E58B0B] transition"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Return to Knowledge Hub</span>
        </Link>
      </div>
    );
  }

  // Related questions resolved
  const relatedQuestionObjects = (question.relatedQuestions || [])
    .map((qId) => DEVELOPER_QUESTIONS.find((item) => item.id === qId && item.status === "published"))
    .filter(Boolean);

  // Related portfolio projects resolved
  const relatedProjectObjects = (question.relatedProjects || [])
    .map((pId) => projects.find((p) => p.id === pId))
    .filter(Boolean);

  const handleCopyCode = (code, index) => {
    navigator.clipboard.writeText(code);
    setCopiedCodeIndex(index);
    setTimeout(() => setCopiedCodeIndex(null), 2000);
  };

  const handleShareLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setLinkCopied(true);
    setTimeout(() => setLinkCopied(false), 2000);
  };

  const canonicalUrl = `https://portfolio-iota-nine-7b2v5ah7u8.vercel.app/developer-questions/${question.categorySlug}/${question.slug}`;

  // Structured Data (TechArticle + BreadcrumbList)
  const articleSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "TechArticle",
        "@id": `${canonicalUrl}/#article`,
        "url": canonicalUrl,
        "headline": question.title,
        "description": question.shortAnswer,
        "proficiencyLevel": question.difficulty,
        "inLanguage": "en-US",
        "datePublished": question.publishedAt,
        "dateModified": question.updatedAt,
        "keywords": question.tags.join(", "),
        "author": {
          "@type": "Person",
          "@id": "https://portfolio-iota-nine-7b2v5ah7u8.vercel.app/#person",
          "name": "Soni Jaykumar Hasmukh",
          "alternateName": "Jay Soni",
          "jobTitle": "Lead Mobile & Full-Stack Architect",
          "url": "https://portfolio-iota-nine-7b2v5ah7u8.vercel.app/"
        },
        "publisher": {
          "@type": "Person",
          "name": "Soni Jaykumar Hasmukh",
          "url": "https://portfolio-iota-nine-7b2v5ah7u8.vercel.app/"
        },
        "mainEntityOfPage": canonicalUrl
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://portfolio-iota-nine-7b2v5ah7u8.vercel.app/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Developer Questions",
            "item": "https://portfolio-iota-nine-7b2v5ah7u8.vercel.app/developer-questions"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": question.category,
            "item": `https://portfolio-iota-nine-7b2v5ah7u8.vercel.app/developer-questions/${question.categorySlug}`
          },
          {
            "@type": "ListItem",
            "position": 4,
            "name": question.title,
            "item": canonicalUrl
          }
        ]
      }
    ]
  };

  return (
    <div className="py-6 sm:py-12 text-[#121316] dark:text-[#F5F5F7] transition-colors duration-200">
      <SEO 
        title={question.seoTitle}
        description={question.seoDescription}
        keywords={question.tags.join(", ") + ", Jay Soni, Software Engineer Ahmedabad"}
        canonical={canonicalUrl}
        structuredData={articleSchema}
      />

      <article className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Navigation Breadcrumbs & Back */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6 sm:mb-8 pb-4 border-b border-[#E8E5DF] dark:border-[#22252F]">
          <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-[#7A7E89] dark:text-[#8E95A5]">
            <Link to="/" className="hover:text-[#C27803] dark:hover:text-[#E8C37D] transition">Home</Link>
            <span>/</span>
            <Link to="/developer-questions" className="hover:text-[#C27803] dark:hover:text-[#E8C37D] transition">Dev Q&A</Link>
            <span>/</span>
            <Link to={`/developer-questions/${question.categorySlug}`} className="hover:text-[#C27803] dark:hover:text-[#E8C37D] transition">
              {question.category}
            </Link>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleShareLink}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white dark:bg-[#14161E] border border-[#E8E5DF] dark:border-[#232733] text-[#121316] dark:text-[#F5F5F7] hover:bg-[#F2EDE4] dark:hover:bg-[#1C202B] transition text-xs font-semibold shadow-2xs cursor-pointer"
            >
              {linkCopied ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Share2 className="w-3.5 h-3.5" />}
              <span>{linkCopied ? "Link Copied" : "Share"}</span>
            </button>

            <button
              onClick={() => navigate(-1)}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white dark:bg-[#14161E] border border-[#E8E5DF] dark:border-[#232733] text-[#121316] dark:text-[#F5F5F7] hover:bg-[#F2EDE4] dark:hover:bg-[#1C202B] transition text-xs font-semibold shadow-2xs cursor-pointer"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back</span>
            </button>
          </div>
        </div>

        {/* ----------------- 1. ARTICLE HEADER ----------------- */}
        <header className="mb-8 sm:mb-10">
          <div className="flex flex-wrap items-center gap-2.5 mb-4">
            <Link
              to={`/developer-questions/${question.categorySlug}`}
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-mono font-semibold bg-[#F2EDE4] dark:bg-[#1E222F] text-[#C27803] dark:text-[#E8C37D] hover:underline"
            >
              <span>{question.category}</span>
            </Link>

            <span className="text-xs font-mono uppercase px-2.5 py-0.5 rounded bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800">
              {question.difficulty}
            </span>

            <span className="text-xs font-mono text-[#7A7E89] dark:text-[#8E95A5] flex items-center gap-1 ml-auto">
              <Clock className="w-3.5 h-3.5" />
              {question.readingTime}
            </span>
          </div>

          <h1 className="text-2xl sm:text-4xl font-extrabold text-[#121316] dark:text-white tracking-tight leading-tight mb-4">
            {question.title}
          </h1>

          {/* Metadata Row */}
          <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-[#7A7E89] dark:text-[#8E95A5] pt-3 border-t border-[#E8E5DF] dark:border-[#232733]">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-full bg-[#121316] text-[#FBF9F5] dark:bg-[#1C202B] dark:text-[#E8C37D] flex items-center justify-center font-bold text-[10px]">
                SJ
              </div>
              <span className="text-[#121316] dark:text-white font-semibold">
                Soni Jaykumar (Jay Soni)
              </span>
            </div>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5" />
              Published: {question.publishedAt}
            </span>
            <span>•</span>
            <span className="text-emerald-600 dark:text-emerald-400 font-semibold">
              Updated: {question.updatedAt}
            </span>
          </div>
        </header>

        {/* ----------------- 2. QUICK DIRECT ANSWER (EXECUTIVE SUMMARY) ----------------- */}
        <section className="p-5 sm:p-6 rounded-2xl bg-amber-500/5 dark:bg-[#E8C37D]/5 border-l-4 border-[#C27803] dark:border-[#E8C37D] mb-8 shadow-xs">
          <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#C27803] dark:text-[#E8C37D] mb-2">
            <Sparkles className="w-4 h-4" />
            <span>Direct Technical Answer (TL;DR)</span>
          </div>
          <p className="text-sm sm:text-base text-[#121316] dark:text-[#F5F5F7] leading-relaxed font-medium">
            {question.shortAnswer}
          </p>
        </section>

        {/* ----------------- 3. TABLE OF CONTENTS ----------------- */}
        {question.tableOfContents && question.tableOfContents.length > 0 && (
          <nav className="p-5 rounded-2xl bg-white dark:bg-[#14161E] border border-[#E8E5DF] dark:border-[#232733] mb-10 shadow-2xs">
            <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-[#7A7E89] dark:text-[#8E95A5] mb-3 flex items-center gap-2">
              <BookOpen className="w-3.5 h-3.5" />
              <span>In This Technical Guide</span>
            </h3>
            <ul className="grid sm:grid-cols-2 gap-2 text-xs font-medium">
              {question.tableOfContents.map((toc) => (
                <li key={toc.id}>
                  <a
                    href={`#${toc.id}`}
                    className="text-[#4A4E57] dark:text-[#A1A7B5] hover:text-[#C27803] dark:hover:text-[#E8C37D] transition flex items-center gap-1.5"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C27803]/40 dark:bg-[#E8C37D]/40"></span>
                    <span>{toc.title}</span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        )}

        {/* ----------------- 4. IN-DEPTH TECHNICAL SECTIONS ----------------- */}
        <div className="space-y-10 sm:space-y-12">
          {question.sections.map((section, idx) => (
            <section key={section.id} id={section.id} className="scroll-mt-24">
              <h2 className="text-xl sm:text-2xl font-bold text-[#121316] dark:text-white tracking-tight mb-4 flex items-center gap-2.5">
                <span className="w-7 h-7 rounded-lg bg-[#F2EDE4] dark:bg-[#1E222F] text-[#C27803] dark:text-[#E8C37D] text-xs font-mono flex items-center justify-center shrink-0">
                  {idx + 1}
                </span>
                <span>{section.title}</span>
              </h2>

              <div className="prose dark:prose-invert max-w-none text-sm sm:text-base text-[#373A40] dark:text-[#D1D5DB] leading-relaxed space-y-4">
                {section.content.split("\n\n").map((para, pIdx) => {
                  // Render markdown table if detected
                  if (para.includes("|") && para.includes("---")) {
                    const rows = para.trim().split("\n");
                    const headers = rows[0].split("|").filter(Boolean).map(h => h.trim());
                    const dataRows = rows.slice(2).map(r => r.split("|").filter(Boolean).map(c => c.trim()));

                    return (
                      <div key={pIdx} className="overflow-x-auto my-4">
                        <table className="w-full text-xs text-left border-collapse border border-[#E8E5DF] dark:border-[#232733] rounded-xl overflow-hidden">
                          <thead>
                            <tr className="bg-[#F2EDE4] dark:bg-[#1A1D27] text-[#121316] dark:text-white">
                              {headers.map((h, hIdx) => (
                                <th key={hIdx} className="p-3 border-b border-[#E8E5DF] dark:border-[#232733] font-bold">
                                  {h}
                                </th>
                              ))}
                            </tr>
                          </thead>
                          <tbody>
                            {dataRows.map((r, rIdx) => (
                              <tr key={rIdx} className="border-b border-[#E8E5DF] dark:border-[#232733] hover:bg-black/5 dark:hover:bg-white/5">
                                {r.map((cell, cIdx) => (
                                  <td key={cIdx} className="p-3">
                                    {cell}
                                  </td>
                                ))}
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    );
                  }

                  return (
                    <p key={pIdx}>
                      {para}
                    </p>
                  );
                })}
              </div>

              {/* Code Snippet Box */}
              {section.codeSnippet && (
                <div className="mt-5 rounded-2xl overflow-hidden border border-[#E8E5DF] dark:border-[#2E3342] bg-[#0E1015] shadow-xs">
                  <div className="flex items-center justify-between px-4 py-2.5 bg-[#181B24] border-b border-[#2E3342] text-xs font-mono text-gray-300">
                    <span className="font-semibold text-[#E8C37D]">
                      {section.codeSnippet.caption || section.codeSnippet.language}
                    </span>
                    <button
                      onClick={() => handleCopyCode(section.codeSnippet.code, idx)}
                      className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-[#242836] hover:bg-[#32374A] transition text-[11px] text-gray-200 cursor-pointer"
                    >
                      {copiedCodeIndex === idx ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-emerald-400" />
                          <span className="text-emerald-400 font-semibold">Copied</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" />
                          <span>Copy</span>
                        </>
                      )}
                    </button>
                  </div>
                  <pre className="p-4 sm:p-5 text-xs sm:text-sm font-mono text-gray-100 overflow-x-auto leading-relaxed">
                    <code>{section.codeSnippet.code}</code>
                  </pre>
                </div>
              )}
            </section>
          ))}
        </div>

        {/* ----------------- 5. PRODUCTION CASE STUDY LINKS ----------------- */}
        {relatedProjectObjects.length > 0 && (
          <section className="mt-14 pt-8 border-t border-[#E8E5DF] dark:border-[#22252F]">
            <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#C27803] dark:text-[#E8C37D] mb-4">
              <Building2 className="w-4 h-4" />
              <span>Real-World Implementation Case Studies</span>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {relatedProjectObjects.map((proj) => (
                <Link
                  key={proj.id}
                  to={`/projects/${proj.id}`}
                  className="p-4 sm:p-5 rounded-2xl bg-white dark:bg-[#14161E] border border-[#E8E5DF] dark:border-[#232733] hover:border-[#C27803]/40 transition group flex flex-col justify-between"
                >
                  <div>
                    <span className="text-[10px] font-mono font-bold uppercase text-[#C27803] dark:text-[#E8C37D]">
                      Production System
                    </span>
                    <h4 className="font-bold text-sm sm:text-base text-[#121316] dark:text-white group-hover:text-[#C27803] dark:group-hover:text-[#E8C37D] transition mt-1">
                      {proj.title}
                    </h4>
                    <p className="text-xs text-[#656A76] dark:text-[#8E95A5] mt-1 line-clamp-2">
                      {proj.tagline || proj.summary}
                    </p>
                  </div>
                  <div className="pt-3 mt-3 border-t border-[#E8E5DF] dark:border-[#232733] flex items-center justify-between text-xs font-semibold text-[#C27803] dark:text-[#E8C37D]">
                    <span>Inspect System Blueprint</span>
                    <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition" />
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* ----------------- 6. RELATED DEVELOPER QUESTIONS ----------------- */}
        {relatedQuestionObjects.length > 0 && (
          <section className="mt-10 pt-8 border-t border-[#E8E5DF] dark:border-[#22252F]">
            <h3 className="text-base sm:text-lg font-bold text-[#121316] dark:text-white mb-4">
              Related Technical Questions
            </h3>
            <div className="space-y-3">
              {relatedQuestionObjects.map((rel) => (
                <Link
                  key={rel.id}
                  to={`/developer-questions/${rel.categorySlug}/${rel.slug}`}
                  className="p-4 rounded-xl bg-white dark:bg-[#14161E] border border-[#E8E5DF] dark:border-[#232733] hover:border-[#C27803]/40 transition flex items-center justify-between gap-3 group"
                >
                  <div>
                    <span className="text-[10px] font-mono font-semibold text-[#7A7E89] dark:text-[#8E95A5]">
                      {rel.category} • {rel.readingTime}
                    </span>
                    <h4 className="font-bold text-sm text-[#121316] dark:text-white group-hover:text-[#C27803] dark:group-hover:text-[#E8C37D] transition">
                      {rel.title}
                    </h4>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-[#C27803] dark:text-[#E8C37D] shrink-0 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition" />
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* ----------------- 7. AUTHOR CREDENTIALS CARD ----------------- */}
        <section className="mt-12 p-6 sm:p-8 rounded-3xl bg-[#F2EDE4]/60 dark:bg-[#14161E] border border-[#E8E5DF] dark:border-[#232733] shadow-xs">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 rounded-2xl bg-[#121316] text-[#FBF9F5] dark:bg-[#1C202B] dark:text-[#E8C37D] dark:border dark:border-[#2E3342] flex items-center justify-center font-mono font-bold text-lg shrink-0">
                SJ
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="font-bold text-base sm:text-lg text-[#121316] dark:text-white">
                    Soni Jaykumar Hasmukh
                  </h3>
                  <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-[#C27803]/10 text-[#C27803] dark:text-[#E8C37D] border border-[#C27803]/20">
                    Author
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-[#656A76] dark:text-[#8E95A5] mt-1 leading-relaxed">
                  Lead Mobile & Full-Stack Architect at NB Developers / NB PropertyTech in Science City, Ahmedabad. Specialist in Flutter SDK 36, Isar NoSQL (2–8ms), offline-first architectures, and enterprise PropTech CRMs.
                </p>
                <div className="flex items-center gap-3 mt-3 text-xs text-[#7A7E89] dark:text-[#8E95A5]">
                  <a
                    href="https://github.com/JAYU0812"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#C27803] dark:hover:text-[#E8C37D] inline-flex items-center gap-1 font-mono"
                  >
                    <GithubIcon className="w-3.5 h-3.5" />
                    <span>GitHub</span>
                  </a>
                  <span>•</span>
                  <a
                    href="https://linkedin.com/in/sonijay1908"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#C27803] dark:hover:text-[#E8C37D] inline-flex items-center gap-1 font-mono"
                  >
                    <LinkedinIcon className="w-3.5 h-3.5" />
                    <span>LinkedIn</span>
                  </a>
                  <span>•</span>
                  <Link
                    to="/about"
                    className="hover:text-[#C27803] dark:hover:text-[#E8C37D] font-mono"
                  >
                    About Jay
                  </Link>
                </div>
              </div>
            </div>

            <Link
              to="/contact"
              className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-[#121316] dark:bg-[#C27803] text-white text-xs font-semibold hover:bg-[#C27803] transition shadow-xs text-center shrink-0"
            >
              Consult With Jay
            </Link>
          </div>
        </section>

      </article>
    </div>
  );
}
