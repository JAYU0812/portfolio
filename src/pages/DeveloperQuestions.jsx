import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { 
  Search, 
  Sparkles, 
  ArrowUpRight, 
  Clock, 
  Layers, 
  CheckCircle2, 
  HelpCircle,
  Smartphone,
  Database,
  Zap,
  Server,
  Layout,
  Building2,
  Cpu,
  Code2,
  BookOpen,
  Filter,
  X
} from "lucide-react";
import { 
  CATEGORIES, 
  DEVELOPER_QUESTIONS, 
  getFeaturedQuestions 
} from "../data/developerQuestionsData";
import SEO from "../components/SEO";

export default function DeveloperQuestions() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedDifficulty, setSelectedDifficulty] = useState("all");
  const [sortBy, setSortBy] = useState("featured"); // 'featured' | 'newest' | 'readingTime'

  const categoriesList = useMemo(() => Object.values(CATEGORIES), []);
  const featuredQuestions = useMemo(() => getFeaturedQuestions(), []);

  // Filter & Search Logic
  const filteredQuestions = useMemo(() => {
    let result = DEVELOPER_QUESTIONS.filter((q) => q.status === "published");

    // Category Filter
    if (selectedCategory !== "all") {
      result = result.filter((q) => q.categorySlug === selectedCategory);
    }

    // Difficulty Filter
    if (selectedDifficulty !== "all") {
      result = result.filter((q) => q.difficulty.toLowerCase() === selectedDifficulty.toLowerCase());
    }

    // Text Search
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      result = result.filter((item) => {
        const inTitle = item.title.toLowerCase().includes(q);
        const inShort = item.shortAnswer.toLowerCase().includes(q);
        const inTags = item.tags.some((t) => t.toLowerCase().includes(q));
        const inCat = item.category.toLowerCase().includes(q);
        return inTitle || inShort || inTags || inCat;
      });
    }

    // Sorting
    if (sortBy === "newest") {
      result.sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt));
    } else if (sortBy === "readingTime") {
      result.sort((a, b) => parseInt(a.readingTime) - parseInt(b.readingTime));
    } else if (sortBy === "featured") {
      result.sort((a, b) => (b.featured === a.featured ? 0 : b.featured ? 1 : -1));
    }

    return result;
  }, [searchQuery, selectedCategory, selectedDifficulty, sortBy]);

  // Icon mapping
  const getCategoryIcon = (slug) => {
    switch (slug) {
      case "flutter": return <Smartphone className="w-4 h-4 text-sky-500" />;
      case "database": return <Database className="w-4 h-4 text-amber-500" />;
      case "supabase": return <Zap className="w-4 h-4 text-emerald-500" />;
      case "nodejs": return <Server className="w-4 h-4 text-green-500" />;
      case "react": return <Layout className="w-4 h-4 text-cyan-500" />;
      case "crm-development": return <Building2 className="w-4 h-4 text-pink-500" />;
      case "software-architecture": return <Cpu className="w-4 h-4 text-purple-500" />;
      case "php-mysql": return <Code2 className="w-4 h-4 text-indigo-500" />;
      default: return <BookOpen className="w-4 h-4 text-[#C27803]" />;
    }
  };

  const hubSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": "https://portfolio-iota-nine-7b2v5ah7u8.vercel.app/developer-questions/#collection",
        "url": "https://portfolio-iota-nine-7b2v5ah7u8.vercel.app/developer-questions",
        "name": "Developer Questions & Answers Knowledge Hub | Jay Soni",
        "description": "Searchable technical engineering knowledge hub covering Flutter, Isar NoSQL, offline-first architectures, Supabase Realtime, and scalable enterprise CRMs.",
        "author": {
          "@type": "Person",
          "name": "Soni Jaykumar Hasmukh",
          "url": "https://portfolio-iota-nine-7b2v5ah7u8.vercel.app/"
        },
        "hasPart": DEVELOPER_QUESTIONS.map((q) => ({
          "@type": "TechArticle",
          "headline": q.title,
          "url": `https://portfolio-iota-nine-7b2v5ah7u8.vercel.app/developer-questions/${q.categorySlug}/${q.slug}`
        }))
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
          }
        ]
      }
    ]
  };

  return (
    <div className="py-8 sm:py-16 text-[#121316] dark:text-[#F5F5F7] transition-colors duration-200">
      <SEO 
        title="Developer Questions & Answers — Technical Knowledge Hub | Jay Soni"
        description="Searchable technical knowledge hub by Jay Soni. In-depth, practical architectural solutions for Flutter, Isar NoSQL, Supabase Realtime, offline-first systems, and enterprise CRMs."
        keywords="Developer Questions, Flutter Architecture, Offline-First Flutter, Isar Database, Supabase Realtime, PostgreSQL Optimization, CRM Architecture, Jay Soni Developer"
        canonical="https://portfolio-iota-nine-7b2v5ah7u8.vercel.app/developer-questions"
        structuredData={hubSchema}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* ----------------- 1. HERO SECTION ----------------- */}
        <section className="max-w-3xl mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F2EDE4] dark:bg-[#1C202B] border border-[#E8E5DF] dark:border-[#262933] text-[#C27803] dark:text-[#E8C37D] font-mono text-xs font-bold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Technical Knowledge Hub</span>
          </div>
          
          <h1 className="text-3xl sm:text-5xl font-extrabold text-[#121316] dark:text-white tracking-tight leading-tight mb-4">
            Developer Questions & Answers
          </h1>
          
          <p className="text-sm sm:text-lg text-[#4A4E57] dark:text-[#A1A7B5] leading-relaxed">
            Original, production-grounded technical engineering answers by <strong>Soni Jaykumar (Jay Soni)</strong>. 
            Real architectural blueprints from actual software systems — covering <strong>Offline-First Flutter</strong>, <strong>Isar NoSQL</strong>, <strong>Supabase Realtime</strong>, <strong>Node.js</strong>, and <strong>Enterprise CRMs</strong>.
          </p>

          {/* Quick Metrics */}
          <div className="flex flex-wrap items-center gap-4 mt-6 text-xs font-mono text-[#7A7E89] dark:text-[#8E95A5]">
            <span className="inline-flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-500" />
              15 In-Depth Engineering Guides
            </span>
            <span className="hidden sm:inline">•</span>
            <span className="inline-flex items-center gap-1.5">
              <Layers className="w-4 h-4 text-[#C27803] dark:text-[#E8C37D]" />
              8 Technical Categories
            </span>
            <span className="hidden sm:inline">•</span>
            <span className="inline-flex items-center gap-1.5">
              <HelpCircle className="w-4 h-4 text-sky-500" />
              Zero AI-Hallucinated Fluff
            </span>
          </div>
        </section>

        {/* ----------------- 2. SEARCH & FILTER CONTROLS ----------------- */}
        <div className="p-4 sm:p-6 rounded-2xl bg-white dark:bg-[#14161E] border border-[#E8E5DF] dark:border-[#232733] shadow-xs mb-10 space-y-4">
          
          {/* Search Bar */}
          <div className="relative">
            <Search className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-[#7A7E89] dark:text-[#8E95A5]" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search developer questions (e.g. offline-first, isar, supabase realtime, conflict resolution, jwt)..."
              className="w-full pl-12 pr-10 py-3.5 rounded-xl bg-[#FBF9F5] dark:bg-[#0E1015] border border-[#E8E5DF] dark:border-[#2E3342] text-sm text-[#121316] dark:text-white placeholder-[#7A7E89] focus:outline-none focus:border-[#C27803] dark:focus:border-[#E8C37D] transition shadow-2xs"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-[#7A7E89] hover:text-[#121316] dark:hover:text-white"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Category Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 pt-1 scrollbar-none">
            <button
              onClick={() => setSelectedCategory("all")}
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition cursor-pointer ${
                selectedCategory === "all"
                  ? "bg-[#121316] text-white dark:bg-[#C27803]"
                  : "bg-[#F2EDE4] dark:bg-[#1A1D27] text-[#4A4E57] dark:text-[#A1A7B5] hover:bg-[#E8E2D5]"
              }`}
            >
              All Topics ({DEVELOPER_QUESTIONS.length})
            </button>

            {categoriesList.map((cat) => {
              const count = DEVELOPER_QUESTIONS.filter((q) => q.categorySlug === cat.slug).length;
              const isActive = selectedCategory === cat.slug;
              return (
                <button
                  key={cat.slug}
                  onClick={() => setSelectedCategory(cat.slug)}
                  className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition cursor-pointer ${
                    isActive
                      ? "bg-[#121316] text-white dark:bg-[#C27803]"
                      : "bg-[#F2EDE4] dark:bg-[#1A1D27] text-[#4A4E57] dark:text-[#A1A7B5] hover:bg-[#E8E2D5]"
                  }`}
                >
                  {getCategoryIcon(cat.slug)}
                  <span>{cat.name}</span>
                  <span className="opacity-60 text-[10px]">({count})</span>
                </button>
              );
            })}
          </div>

          {/* Secondary Sorting & Difficulty Row */}
          <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-[#E8E5DF] dark:border-[#232733] text-xs">
            <div className="flex items-center gap-2">
              <span className="text-[#7A7E89] dark:text-[#8E95A5] flex items-center gap-1 font-mono">
                <Filter className="w-3.5 h-3.5" />
                Difficulty:
              </span>
              {["all", "intermediate", "advanced"].map((diff) => (
                <button
                  key={diff}
                  onClick={() => setSelectedDifficulty(diff)}
                  className={`px-2.5 py-1 rounded-lg uppercase tracking-wider text-[10px] font-mono transition cursor-pointer ${
                    selectedDifficulty === diff
                      ? "bg-[#121316] text-white dark:bg-[#C27803] font-bold"
                      : "text-[#656A76] dark:text-[#8E95A5] hover:bg-[#F2EDE4] dark:hover:bg-[#1C202B]"
                  }`}
                >
                  {diff}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-2">
              <span className="text-[#7A7E89] dark:text-[#8E95A5] font-mono">Sort By:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-2.5 py-1 rounded-lg bg-[#FBF9F5] dark:bg-[#0E1015] border border-[#E8E5DF] dark:border-[#2E3342] text-xs font-mono text-[#121316] dark:text-[#F5F5F7] focus:outline-none"
              >
                <option value="featured">Featured First</option>
                <option value="newest">Newest Published</option>
                <option value="readingTime">Quickest Reads</option>
              </select>
            </div>
          </div>
        </div>

        {/* ----------------- 3. FEATURED QUESTIONS SHOWCASE (When Not Searching) ----------------- */}
        {!searchQuery && selectedCategory === "all" && (
          <section className="mb-14">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-[#121316] dark:text-white">
                  Featured Architectural Questions
                </h2>
                <p className="text-xs text-[#656A76] dark:text-[#8E95A5] mt-0.5">
                  Hand-picked technical breakdowns of complex production engineering problems.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {featuredQuestions.slice(0, 3).map((item) => (
                <Link
                  key={item.id}
                  to={`/developer-questions/${item.categorySlug}/${item.slug}`}
                  className="group flex flex-col justify-between p-6 rounded-2xl bg-white dark:bg-[#14161E] border border-[#E8E5DF] dark:border-[#232733] hover:border-[#C27803]/50 dark:hover:border-[#E8C37D]/50 shadow-xs hover:shadow-md transition-all duration-200"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11px] font-mono font-semibold bg-[#F2EDE4] dark:bg-[#1E222F] text-[#C27803] dark:text-[#E8C37D]">
                        {getCategoryIcon(item.categorySlug)}
                        <span>{item.category}</span>
                      </span>
                      <span className="text-[11px] font-mono text-[#7A7E89] dark:text-[#8E95A5] flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {item.readingTime}
                      </span>
                    </div>

                    <h3 className="font-bold text-base text-[#121316] dark:text-white group-hover:text-[#C27803] dark:group-hover:text-[#E8C37D] transition leading-snug mb-2.5">
                      {item.title}
                    </h3>

                    <p className="text-xs text-[#656A76] dark:text-[#8E95A5] line-clamp-3 leading-relaxed mb-4">
                      {item.shortAnswer}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[#E8E5DF] dark:border-[#232733] flex items-center justify-between text-xs font-semibold text-[#C27803] dark:text-[#E8C37D]">
                    <span>Read Architectural Blueprint</span>
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition" />
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* ----------------- 4. QUESTION LIST RESULTS ----------------- */}
        <section className="mb-14">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl sm:text-2xl font-bold text-[#121316] dark:text-white">
              {searchQuery ? `Search Results (${filteredQuestions.length})` : "All Technical Guides"}
            </h2>
            <span className="text-xs font-mono text-[#7A7E89] dark:text-[#8E95A5]">
              Showing {filteredQuestions.length} of {DEVELOPER_QUESTIONS.length}
            </span>
          </div>

          {filteredQuestions.length === 0 ? (
            <div className="text-center py-16 px-4 rounded-2xl bg-white dark:bg-[#14161E] border border-dashed border-[#E8E5DF] dark:border-[#2E3342]">
              <HelpCircle className="w-12 h-12 text-[#7A7E89] mx-auto mb-3 opacity-60" />
              <h3 className="font-bold text-base text-[#121316] dark:text-white mb-1">
                No matching questions found
              </h3>
              <p className="text-xs text-[#656A76] dark:text-[#8E95A5] mb-4">
                Try searching for different keywords such as "isar", "supabase", "flutter", or "crm".
              </p>
              <button
                onClick={() => { setSearchQuery(""); setSelectedCategory("all"); setSelectedDifficulty("all"); }}
                className="px-4 py-2 rounded-xl bg-[#121316] dark:bg-[#C27803] text-white text-xs font-semibold cursor-pointer"
              >
                Reset All Filters
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              {filteredQuestions.map((item) => (
                <article
                  key={item.id}
                  className="p-5 sm:p-6 rounded-2xl bg-white dark:bg-[#14161E] border border-[#E8E5DF] dark:border-[#232733] hover:border-[#C27803]/40 dark:hover:border-[#E8C37D]/40 transition shadow-2xs group"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                    <div className="flex flex-wrap items-center gap-2">
                      <Link
                        to={`/developer-questions/${item.categorySlug}`}
                        className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11px] font-mono font-semibold bg-[#F2EDE4] dark:bg-[#1E222F] text-[#C27803] dark:text-[#E8C37D] hover:underline"
                      >
                        {getCategoryIcon(item.categorySlug)}
                        <span>{item.category}</span>
                      </Link>

                      <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800">
                        {item.difficulty}
                      </span>
                    </div>

                    <div className="flex items-center gap-3 text-xs font-mono text-[#7A7E89] dark:text-[#8E95A5]">
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" />
                        {item.readingTime}
                      </span>
                      <span>•</span>
                      <span>Published {item.publishedAt}</span>
                    </div>
                  </div>

                  <Link to={`/developer-questions/${item.categorySlug}/${item.slug}`}>
                    <h3 className="font-bold text-lg sm:text-xl text-[#121316] dark:text-white group-hover:text-[#C27803] dark:group-hover:text-[#E8C37D] transition mb-2">
                      {item.title}
                    </h3>
                  </Link>

                  <p className="text-xs sm:text-sm text-[#4A4E57] dark:text-[#A1A7B5] leading-relaxed mb-4">
                    {item.shortAnswer}
                  </p>

                  <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-[#E8E5DF] dark:border-[#232733]">
                    <div className="flex flex-wrap items-center gap-1.5">
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-0.5 rounded text-[10px] font-mono bg-[#FBF9F5] dark:bg-[#0E1015] border border-[#E8E5DF] dark:border-[#262933] text-[#656A76] dark:text-[#8E95A5]"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>

                    <Link
                      to={`/developer-questions/${item.categorySlug}/${item.slug}`}
                      className="inline-flex items-center gap-1 text-xs font-semibold text-[#C27803] dark:text-[#E8C37D] group-hover:underline"
                    >
                      <span>Full Technical Blueprint</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          )}
        </section>

        {/* ----------------- 5. ABOUT THE AUTHOR & AUTHORITY SECTION ----------------- */}
        <section className="p-6 sm:p-8 rounded-3xl bg-[#F2EDE4]/60 dark:bg-[#14161E] border border-[#E8E5DF] dark:border-[#232733] shadow-xs mb-10">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 rounded-2xl bg-[#121316] text-[#FBF9F5] dark:bg-[#1C202B] dark:text-[#E8C37D] dark:border dark:border-[#2E3342] flex items-center justify-center font-mono font-bold text-lg shrink-0 shadow-xs">
                SJ
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="font-bold text-lg text-[#121316] dark:text-white">
                    Soni Jaykumar Hasmukh (Jay Soni)
                  </h3>
                  <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-[#C27803]/10 text-[#C27803] dark:text-[#E8C37D] border border-[#C27803]/20">
                    Lead Architect
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-[#656A76] dark:text-[#8E95A5] mt-1 max-w-xl leading-relaxed">
                  Lead Mobile & Full-Stack Architect at NB Developers / NB PropertyTech in Science City, Ahmedabad. 
                  Recipient of the October 2026 Certificate of Appreciation for engineering excellence. Creator of PropKart CRM, GitSphere, and published Google Play Store applications.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-2.5 shrink-0">
              <Link
                to="/projects"
                className="px-4 py-2 rounded-xl bg-white dark:bg-[#1A1D27] border border-[#E8E5DF] dark:border-[#2E3342] text-xs font-semibold text-[#121316] dark:text-white hover:border-[#C27803] transition shadow-2xs"
              >
                View Case Studies
              </Link>
              <Link
                to="/contact"
                className="px-4 py-2 rounded-xl bg-[#121316] dark:bg-[#C27803] text-white text-xs font-semibold hover:bg-[#C27803] transition shadow-xs"
              >
                Consult with Jay
              </Link>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
