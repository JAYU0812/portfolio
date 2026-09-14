import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { MessageSquare, X, Sparkles } from "lucide-react";

// Contextual tips based on current route
const pageDefaults = {
  "/": "Welcome! I'm Jay's Portfolio Guide. Tap or hover over project cards to inspect technical details.",
  "/about": "Explore Jay's engineering background, technical stack, and chronological milestones.",
  "/projects": "All 9 production systems & apps — filter by Enterprise CRMs, Developer Tools, Play Store, or Web.",
  "/resume": "Print-ready ATS resume. Click 'Print / Save as PDF' above to generate an A4 clean copy.",
  "/contact": "Have an engineering role or project inquiry? Send a direct message or connect instantly on WhatsApp!"
};

export default function Mascot() {
  const location = useLocation();
  const [hoverMessage, setHoverMessage] = useState(null);
  const [isMinimized, setIsMinimized] = useState(() => {
    return typeof window !== "undefined" ? window.innerWidth < 768 : false;
  });
  const [isPulsing, setIsPulsing] = useState(false);

  const defaultMsg = pageDefaults[location.pathname] || "Explore Jay's production projects and live apps.";

  useEffect(() => {
    const handleSpeak = (e) => {
      if (e.detail && e.detail.text) {
        setHoverMessage(e.detail.text);
        setIsPulsing(true);
        setTimeout(() => setIsPulsing(false), 400);
      } else {
        setHoverMessage(null);
      }
    };

    window.addEventListener("mascot-speak", handleSpeak);
    return () => {
      window.removeEventListener("mascot-speak", handleSpeak);
    };
  }, []);

  const displayMessage = hoverMessage || defaultMsg;

  if (isMinimized) {
    return (
      <button
        onClick={() => setIsMinimized(false)}
        className="fixed bottom-4 right-4 sm:bottom-5 sm:right-5 z-40 bg-[#121316] hover:bg-[#C27803] text-white w-12 h-12 rounded-full shadow-xl transition-all duration-300 flex items-center justify-center print:hidden cursor-pointer group border border-[#2B2E36] active:scale-95"
        title="Open Portfolio Guide"
        aria-label="Open Portfolio Guide"
      >
        <div className="relative">
          <MessageSquare className="w-5 h-5 group-hover:scale-110 transition-transform" />
          <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-emerald-400 rounded-full border-2 border-[#121316] animate-pulse"></span>
        </div>
      </button>
    );
  }

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-5 sm:right-5 z-40 flex flex-col items-end max-w-[calc(100vw-32px)] sm:max-w-xs font-sans print:hidden">
      {/* Speech Bubble */}
      <div className="relative mb-2.5 bg-white/95 backdrop-blur-md border border-[#E8E5DF] text-[#121316] p-3.5 sm:p-4 rounded-2xl shadow-xl transition-all duration-300 origin-bottom-right">
        {/* Header bar of bubble */}
        <div className="flex items-center justify-between pb-1.5 mb-1.5 border-b border-[#F2EDE4]">
          <span className="text-[11px] font-mono font-bold text-[#C27803] uppercase tracking-wider flex items-center gap-1">
            <Sparkles className="w-3 h-3" />
            Portfolio Guide
          </span>
          <button
            onClick={() => setIsMinimized(true)}
            className="text-[#7A7E89] hover:text-[#121316] text-xs p-1 rounded-md hover:bg-[#F2EDE4] transition cursor-pointer"
            title="Minimize Guide"
            aria-label="Minimize Guide"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Message Content */}
        <p className="text-xs text-[#333740] font-medium leading-relaxed">
          {displayMessage}
        </p>

        {/* Bubble arrow pointing down */}
        <div className="absolute -bottom-1.5 right-6 w-3 h-3 bg-white border-r border-b border-[#E8E5DF] rotate-45"></div>
      </div>

      {/* Guide Trigger Button */}
      <button 
        onClick={() => setIsMinimized(true)}
        className={`flex items-center gap-2 px-3.5 py-2 rounded-full bg-[#121316] text-white text-xs font-mono font-medium shadow-md hover:bg-[#C27803] transition-all cursor-pointer border border-[#2B2E36] ${
          isPulsing ? "ring-2 ring-[#C27803] scale-105" : ""
        }`}
        title="Click to minimize"
      >
        <div className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
        <span>Jay's Assistant</span>
      </button>
    </div>
  );
}
