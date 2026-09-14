import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ArrowUpRight } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Projects", path: "/projects" },
    { name: "About", path: "/about" },
    { name: "Resume", path: "/resume" },
    { name: "Contact", path: "/contact" }
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#FBF9F5]/90 backdrop-blur-md border-b border-[#E8E5DF] print:hidden transition-all duration-200">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Brand Name & Role Indicator */}
        <Link 
          to="/" 
          className="group flex items-center gap-3 transition"
        >
          <div className="w-10 h-10 rounded-xl bg-[#121316] text-[#FBF9F5] flex items-center justify-center font-mono font-bold text-sm tracking-tight shadow-sm group-hover:bg-[#C27803] transition-colors duration-300">
            SJ
          </div>
          <div>
            <div className="text-base font-bold tracking-tight text-[#121316] group-hover:text-[#C27803] transition-colors">
              Soni Jaykumar
            </div>
            <div className="text-xs font-mono text-[#7A7E89] flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
              Full Stack Engineer
            </div>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1 p-1 bg-[#F2EDE4]/70 border border-[#E8E5DF] rounded-full text-sm font-medium">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-1.5 rounded-full transition-all duration-200 ${
                  isActive
                    ? "bg-[#121316] text-[#FBF9F5] shadow-xs font-semibold"
                    : "text-[#4A4E57] hover:text-[#121316] hover:bg-white/60"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* Right Action Buttons */}
        <div className="hidden lg:flex items-center gap-3">
          <a
            href="https://wa.me/917990361109"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-semibold px-4 py-2 rounded-xl bg-[#121316] text-white hover:bg-[#C27803] transition-colors duration-200 shadow-xs"
          >
            <span>WhatsApp Me</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2.5 rounded-xl border border-[#E8E5DF] bg-white text-[#121316] hover:bg-[#F2EDE4] transition"
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile menu drawer */}
      {isOpen && (
        <div className="md:hidden bg-[#FBF9F5] border-b border-[#E8E5DF] py-4 px-6 flex flex-col gap-2 shadow-lg animate-in fade-in slide-in-from-top-2">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`px-4 py-2.5 rounded-xl text-sm font-medium transition ${
                  isActive
                    ? "bg-[#121316] text-[#FBF9F5] font-semibold"
                    : "text-[#4A4E57] hover:bg-[#F2EDE4]"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
          <div className="pt-2 mt-2 border-t border-[#E8E5DF]">
            <a
              href="https://wa.me/917990361109"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-[#C27803] text-white font-semibold text-sm shadow-xs"
            >
              <span>Chat on WhatsApp</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
