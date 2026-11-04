import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { ThemeToggle, ThemeSegmentedControl } from "./ThemeToggle";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Projects", path: "/projects" },
    { name: "Dev Q&A", path: "/developer-questions" },
    { name: "About", path: "/about" },
    { name: "Resume", path: "/resume" },
    { name: "Contact", path: "/contact" }
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#FBF9F5]/90 dark:bg-[#0A0B0E]/90 backdrop-blur-md border-b border-[#E8E5DF] dark:border-[#22252F] print:hidden transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between">
        
        {/* Brand Name & Role Indicator */}
        <Link 
          to="/" 
          onClick={() => setIsOpen(false)}
          className="group flex items-center gap-2.5 sm:gap-3 transition"
        >
          <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[#121316] text-[#FBF9F5] dark:bg-[#1C202B] dark:text-[#E8C37D] dark:border dark:border-[#2E3342] flex items-center justify-center font-mono font-bold text-xs sm:text-sm tracking-tight shadow-sm group-hover:bg-[#C27803] dark:group-hover:bg-[#C27803] dark:group-hover:text-white transition-colors duration-300 shrink-0">
            SJ
          </div>
          <div>
            <div className="text-sm sm:text-base font-bold tracking-tight text-[#121316] dark:text-[#F5F5F7] group-hover:text-[#C27803] dark:group-hover:text-[#E8C37D] transition-colors leading-tight">
              Soni Jaykumar
            </div>
            <div className="text-[10px] sm:text-xs font-mono text-[#7A7E89] dark:text-[#8E95A5] flex items-center gap-1.5 leading-tight mt-0.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
              Full Stack Engineer
            </div>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1 p-1 bg-[#F2EDE4]/70 dark:bg-[#14161E]/80 border border-[#E8E5DF] dark:border-[#22252F] rounded-full text-sm font-medium">
          {navLinks.map((link) => {
            const isActive = link.path === "/" 
              ? location.pathname === "/" 
              : location.pathname.startsWith(link.path);
            return (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-1.5 rounded-full transition-all duration-200 ${
                  isActive
                    ? "bg-[#121316] text-[#FBF9F5] dark:bg-[#C27803] dark:text-white shadow-xs font-semibold"
                    : "text-[#4A4E57] dark:text-[#A1A7B5] hover:text-[#121316] dark:hover:text-white hover:bg-white/60 dark:hover:bg-[#1E222D]"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* Right Action Buttons on Desktop */}
        <div className="hidden lg:flex items-center gap-2.5">
          <ThemeToggle />
          <a
            href="https://wa.me/917990361109"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-semibold px-4 py-2.5 rounded-xl bg-[#121316] text-white hover:bg-[#C27803] dark:bg-[#1C202B] dark:border dark:border-[#2E3342] dark:hover:bg-[#C27803] dark:hover:border-[#C27803] transition-all duration-200 shadow-xs"
          >
            <span>WhatsApp Me</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Mobile Action Row (Theme Toggle + Hamburger) */}
        <div className="flex items-center gap-2 lg:hidden">
          <ThemeToggle />
          
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center rounded-xl border border-[#E8E5DF] dark:border-[#262933] bg-white dark:bg-[#14161E] text-[#121316] dark:text-white hover:bg-[#F2EDE4] dark:hover:bg-[#1E222D] active:scale-95 transition cursor-pointer"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu drawer */}
      {isOpen && (
        <>
          <div 
            onClick={() => setIsOpen(false)}
            className="md:hidden fixed inset-0 top-[61px] bg-black/40 dark:bg-black/60 backdrop-blur-xs z-40 animate-in fade-in duration-200"
          />
          <div className="md:hidden bg-[#FBF9F5] dark:bg-[#0E1015] border-b border-[#E8E5DF] dark:border-[#22252F] py-4 px-4 sm:px-6 flex flex-col gap-1.5 shadow-2xl relative z-50 animate-in fade-in slide-in-from-top-2 duration-200">
            {navLinks.map((link) => {
              const isActive = link.path === "/" 
                ? location.pathname === "/" 
                : location.pathname.startsWith(link.path);
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`px-4 py-3 rounded-xl text-sm font-semibold transition flex items-center justify-between ${
                    isActive
                      ? "bg-[#121316] text-[#FBF9F5] dark:bg-[#1C202B] dark:text-[#E8C37D] shadow-xs"
                      : "text-[#4A4E57] dark:text-[#A1A7B5] hover:bg-[#F2EDE4] dark:hover:bg-[#181B24] active:bg-[#E8E2D5]"
                  }`}
                >
                  <span>{link.name}</span>
                  {isActive && (
                    <span className="w-2 h-2 rounded-full bg-[#E8C37D]"></span>
                  )}
                </Link>
              );
            })}

            {/* Theme Preference Segmented Row in Mobile Drawer */}
            <div className="pt-3 pb-1 border-t border-[#E8E5DF] dark:border-[#22252F] mt-2">
              <span className="text-[11px] font-mono text-[#7A7E89] dark:text-[#8E95A5] block mb-2 px-1">
                Appearance
              </span>
              <ThemeSegmentedControl />
            </div>

            <div className="pt-2">
              <a
                href="https://wa.me/917990361109"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-[#0F766E] text-white font-semibold text-sm shadow-xs active:bg-[#0D655E] transition"
              >
                <span>Chat on WhatsApp</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </>
      )}
    </header>
  );
}
