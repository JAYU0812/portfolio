import { useParams, Link } from "react-router-dom";
import { 
  ArrowLeft, 
  Clock, 
  ArrowUpRight, 
  HelpCircle,
  Smartphone,
  Database,
  Zap,
  Server,
  Layout,
  Building2,
  Cpu,
  Code2,
  BookOpen
} from "lucide-react";
import { 
  CATEGORIES, 
  getQuestionsByCategory 
} from "../data/developerQuestionsData";
import SEO from "../components/SEO";

export default function QuestionCategory() {
  const { categorySlug } = useParams();
  const category = CATEGORIES[categorySlug];
  const questions = getQuestionsByCategory(categorySlug);

  const getCategoryIcon = (slug) => {
    switch (slug) {
      case "flutter": return <Smartphone className="w-5 h-5 text-sky-500" />;
      case "database": return <Database className="w-5 h-5 text-amber-500" />;
      case "supabase": return <Zap className="w-5 h-5 text-emerald-500" />;
      case "nodejs": return <Server className="w-5 h-5 text-green-500" />;
      case "react": return <Layout className="w-5 h-5 text-cyan-500" />;
      case "crm-development": return <Building2 className="w-5 h-5 text-pink-500" />;
      case "software-architecture": return <Cpu className="w-5 h-5 text-purple-500" />;
      case "php-mysql": return <Code2 className="w-5 h-5 text-indigo-500" />;
      default: return <BookOpen className="w-5 h-5 text-[#C27803]" />;
    }
  };

  if (!category) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center px-4 py-16 text-center text-[#121316] dark:text-[#F5F5F7]">
        <h2 className="text-2xl font-bold mb-2">Technical Category Not Found</h2>
        <p className="text-sm text-[#656A76] dark:text-[#8E95A5] mb-6">
          The requested engineering topic does not exist or has been relocated.
        </p>
        <Link
          to="/developer-questions"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#121316] dark:bg-[#C27803] text-white text-xs font-semibold"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Browse All Developer Questions</span>
        </Link>
      </div>
    );
  }

  const categorySchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": `https://portfolio-iota-nine-7b2v5ah7u8.vercel.app/developer-questions/${category.slug}/#collection`,
        "url": `https://portfolio-iota-nine-7b2v5ah7u8.vercel.app/developer-questions/${category.slug}`,
        "name": `${category.name} Developer Questions & Blueprints | Jay Soni`,
        "description": category.description,
        "author": {
          "@type": "Person",
          "name": "Soni Jaykumar Hasmukh",
          "url": "https://portfolio-iota-nine-7b2v5ah7u8.vercel.app/"
        }
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
            "name": category.name,
            "item": `https://portfolio-iota-nine-7b2v5ah7u8.vercel.app/developer-questions/${category.slug}`
          }
        ]
      }
    ]
  };

  // Other categories for discovery
  const otherCategories = Object.values(CATEGORIES).filter((c) => c.slug !== category.slug);

  return (
    <div className="py-8 sm:py-16 text-[#121316] dark:text-[#F5F5F7] transition-colors duration-200">
      <SEO 
        title={`${category.name} Technical Questions & Architectural Guides | Jay Soni`}
        description={category.description}
        keywords={`${category.name}, Developer Questions, Jay Soni, Software Architecture, Production Guides`}
        canonical={`https://portfolio-iota-nine-7b2v5ah7u8.vercel.app/developer-questions/${category.slug}`}
        structuredData={categorySchema}
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Navigation Breadcrumbs */}
        <div className="flex items-center gap-2 text-xs font-mono text-[#7A7E89] dark:text-[#8E95A5] mb-6">
          <Link to="/" className="hover:text-[#C27803] dark:hover:text-[#E8C37D] transition">Home</Link>
          <span>/</span>
          <Link to="/developer-questions" className="hover:text-[#C27803] dark:hover:text-[#E8C37D] transition">Developer Questions</Link>
          <span>/</span>
          <span className="text-[#121316] dark:text-white font-semibold">{category.name}</span>
        </div>

        {/* Category Header */}
        <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-[#14161E] border border-[#E8E5DF] dark:border-[#232733] shadow-xs mb-10">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-[#FBF9F5] dark:bg-[#0E1015] border border-[#E8E5DF] dark:border-[#262933] flex items-center justify-center shrink-0 shadow-2xs">
              {getCategoryIcon(category.slug)}
            </div>
            <div>
              <div className="flex items-center gap-2.5">
                <h1 className="text-2xl sm:text-3xl font-extrabold text-[#121316] dark:text-white">
                  {category.name}
                </h1>
                <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-bold bg-[#F2EDE4] dark:bg-[#1C202B] text-[#C27803] dark:text-[#E8C37D]">
                  {questions.length} Guides
                </span>
              </div>
              <p className="text-sm text-[#4A4E57] dark:text-[#A1A7B5] mt-2 leading-relaxed max-w-2xl">
                {category.description}
              </p>
            </div>
          </div>
        </div>

        {/* Questions List */}
        <section className="space-y-4 mb-14">
          {questions.length === 0 ? (
            <div className="text-center py-16 px-4 rounded-2xl bg-white dark:bg-[#14161E] border border-dashed border-[#E8E5DF] dark:border-[#2E3342]">
              <HelpCircle className="w-10 h-10 text-[#7A7E89] mx-auto mb-2 opacity-50" />
              <h3 className="font-bold text-sm text-[#121316] dark:text-white mb-1">
                Articles in Peer Review
              </h3>
              <p className="text-xs text-[#656A76] dark:text-[#8E95A5]">
                Additional questions for this category are currently being curated and will publish in the next batch.
              </p>
            </div>
          ) : (
            questions.map((item) => (
              <article
                key={item.id}
                className="p-5 sm:p-6 rounded-2xl bg-white dark:bg-[#14161E] border border-[#E8E5DF] dark:border-[#232733] hover:border-[#C27803]/40 dark:hover:border-[#E8C37D]/40 transition shadow-2xs group"
              >
                <div className="flex items-center justify-between gap-2 mb-2 text-xs font-mono text-[#7A7E89] dark:text-[#8E95A5]">
                  <span className="text-[10px] uppercase font-bold px-2 py-0.5 rounded bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800">
                    {item.difficulty}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    {item.readingTime}
                  </span>
                </div>

                <Link to={`/developer-questions/${item.categorySlug}/${item.slug}`}>
                  <h2 className="font-bold text-lg sm:text-xl text-[#121316] dark:text-white group-hover:text-[#C27803] dark:group-hover:text-[#E8C37D] transition mb-2">
                    {item.title}
                  </h2>
                </Link>

                <p className="text-xs sm:text-sm text-[#4A4E57] dark:text-[#A1A7B5] leading-relaxed mb-4">
                  {item.shortAnswer}
                </p>

                <div className="flex items-center justify-between pt-3 border-t border-[#E8E5DF] dark:border-[#232733] text-xs">
                  <div className="flex flex-wrap items-center gap-1.5">
                    {item.tags.map((t) => (
                      <span key={t} className="px-2 py-0.5 rounded text-[10px] font-mono bg-[#FBF9F5] dark:bg-[#0E1015] border border-[#E8E5DF] dark:border-[#262933] text-[#656A76] dark:text-[#8E95A5]">
                        #{t}
                      </span>
                    ))}
                  </div>

                  <Link
                    to={`/developer-questions/${item.categorySlug}/${item.slug}`}
                    className="inline-flex items-center gap-1 font-semibold text-[#C27803] dark:text-[#E8C37D] group-hover:underline"
                  >
                    <span>Read Guide</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </article>
            ))
          )}
        </section>

        {/* Explore Other Categories */}
        <section className="pt-8 border-t border-[#E8E5DF] dark:border-[#22252F]">
          <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-[#7A7E89] dark:text-[#8E95A5] mb-4">
            Explore Other Technical Domains
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {otherCategories.map((c) => (
              <Link
                key={c.slug}
                to={`/developer-questions/${c.slug}`}
                className="p-3.5 rounded-xl bg-white dark:bg-[#14161E] border border-[#E8E5DF] dark:border-[#232733] hover:border-[#C27803]/40 transition text-center group"
              >
                <div className="w-8 h-8 rounded-lg bg-[#FBF9F5] dark:bg-[#0E1015] mx-auto flex items-center justify-center mb-2">
                  {getCategoryIcon(c.slug)}
                </div>
                <div className="text-xs font-bold text-[#121316] dark:text-white group-hover:text-[#C27803] dark:group-hover:text-[#E8C37D] truncate">
                  {c.name}
                </div>
              </Link>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}
