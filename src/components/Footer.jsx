import { Link } from "react-router-dom";
import { MessageCircle, ArrowUpRight } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./Icons";

export default function Footer() {
  return (
    <footer className="bg-[#F2EDE4] border-t border-[#E8E5DF] py-10 sm:py-14 text-sm text-[#4A4E57] print:hidden mt-12 sm:mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 sm:gap-10 mb-8 sm:mb-12">
          
          {/* Col 1: Bio */}
          <div className="sm:col-span-2 md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-[#121316] text-[#FBF9F5] flex items-center justify-center font-mono font-bold text-xs shrink-0">
                SJ
              </div>
              <span className="font-bold text-base text-[#121316]">
                Soni Jaykumar Hasmukh
              </span>
            </div>
            <p className="text-[#656A76] max-w-md text-xs sm:text-sm leading-relaxed">
              Full Stack Software Engineer building enterprise PropTech systems at NB Developers.
              Passionate about Offline-First mobile architectures, realtime synchronization, and scalable full-stack products.
            </p>
            <div className="flex items-center gap-2 text-xs font-mono text-[#7A7E89]">
              <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
              Based in Ahmedabad, Gujarat, India
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider font-bold text-[#121316] mb-3 sm:mb-4">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <Link to="/" className="hover:text-[#C27803] transition">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/projects" className="hover:text-[#C27803] transition">
                  Projects Showcase
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-[#C27803] transition">
                  About & Background
                </Link>
              </li>
              <li>
                <Link to="/resume" className="hover:text-[#C27803] transition">
                  Professional Resume
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-[#C27803] transition">
                  Get in Touch
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Connect & Live Links */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider font-bold text-[#121316] mb-3 sm:mb-4">
              Connect & Live
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <a
                  href="https://portfolio-iota-nine-7b2v5ah7u8.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#C27803] inline-flex items-center gap-1 transition"
                >
                  <span className="font-semibold text-[#121316]">Portfolio (Live Site)</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#C27803]" />
                </a>
              </li>
              <li>
                <a
                  href="https://propkart.nbpropertytech.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#C27803] inline-flex items-center gap-1 transition"
                >
                  <span>PropKart CRM (Software Project)</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
                </a>
              </li>
              <li>
                <a
                  href="https://crm.nbdeveloper.co.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#C27803] inline-flex items-center gap-1 transition"
                >
                  <span>NB-HRMS ERP (crm.nbdeveloper.co.in)</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
                </a>
              </li>
              <li>
                <a
                  href="https://chandrakalajewellers.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#C27803] inline-flex items-center gap-1 transition"
                >
                  <span>Chandrakala Jewellers</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/JAYU0812"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#C27803] inline-flex items-center gap-1.5 transition"
                >
                  <GithubIcon className="w-4 h-4" />
                  <span>GitHub</span>
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com/in/sonijay1908"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#C27803] inline-flex items-center gap-1.5 transition"
                >
                  <LinkedinIcon className="w-4 h-4" />
                  <span>LinkedIn</span>
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/917990361109"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#C27803] inline-flex items-center gap-1.5 transition"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-600" />
                  <span>WhatsApp</span>
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-6 sm:pt-8 border-t border-[#E8E5DF] flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 text-xs text-[#7A7E89] text-center sm:text-left">
          <p>© {new Date().getFullYear()} Soni Jaykumar Hasmukh. All rights reserved.</p>
          <p className="font-mono text-center sm:text-right">
            Crafted with React, Tailwind CSS & Vite • Zero AI Template Bloat
          </p>
        </div>
      </div>
    </footer>
  );
}
