import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { MessageSquare, X, Sparkles } from "lucide-react";

// Contextual tips based on current route
const pageDefaults = {
  "/": "Welcome! I'm Jay's Portfolio Guide. Hover over project cards or stats to inspect technical details.",
  "/about": "Learn about Jay's engineering background, technical toolkit, and career evolution since Feb 2025.",
  "/projects": "All 7 production systems & apps — filter by Mobile/Play Store, Web, or Enterprise CRM platforms.",
  "/resume": "Print-ready ATS resume. Click 'Print / Save as PDF' above to generate an A4 clean copy.",
  "/contact": "Have an engineering role or project inquiry? Send a direct message or connect instantly on WhatsApp!"
};

export default function Mascot() {
  const location = useLocation();
  const [hoverMessage, setHoverMessage] = useState(null);
  const [isMinimized, setIsMinimized] = useState(false);
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
        className="fixed bottom-5 right-5 z-40 bg-[#121316] hover:bg-[#C27803] text-white p-3 rounded-full shadow-lg transition-all duration-300 flex items-center justify-center print:hidden cursor-pointer group"
        title="Open Portfolio Guide"
      >
        <MessageSquare className="w-5 h-5 group-hover:scale-110 transition-transform" />
      </button>
    );
  }

  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end max-w-[280px] sm:max-w-xs font-sans print:hidden">
      {/* Speech Bubble */}
      <div className="relative mb-2.5 bg-white/95 backdrop-blur-md border border-[#E8E5DF] text-[#121316] p-3.5 rounded-2xl shadow-xl transition-all duration-300 origin-bottom-right">
        {/* Header bar of bubble */}
        <div className="flex items-center justify-between pb-1.5 mb-1.5 border-b border-[#F2EDE4]">
          <span className="text-[11px] font-mono font-bold text-[#C27803] uppercase tracking-wider flex items-center gap-1">
            <Sparkles className="w-3 h-3" />
            Portfolio Guide
          </span>
          <button
            onClick={() => setIsMinimized(true)}
            className="text-[#7A7E89] hover:text-[#121316] text-xs p-0.5 rounded-md hover:bg-[#F2EDE4] transition cursor-pointer"
            title="Minimize Guide"
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
        className={`flex items-center gap-2 px-3 py-2 rounded-full bg-[#121316] text-white text-xs font-mono font-medium shadow-md hover:bg-[#C27803] transition-all cursor-pointer ${
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
