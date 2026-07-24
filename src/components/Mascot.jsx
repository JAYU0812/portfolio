import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function Mascot() {
  const location = useLocation();
  const [message, setMessage] = useState("");
  const [hoverMessage, setHoverMessage] = useState(null);
  const [isMinimized, setIsMinimized] = useState(false);
  const [isBouncing, setIsBouncing] = useState(false);

  // Default messages for each page
  const pageDefaults = {
    "/": "Hey! I'm Soni Jaykumar. Welcome to my interactive portfolio! Here I showcase my web and mobile products.",
    "/about": "Here's my story! I'm a B.Tech IT student specializing in full-stack mobile and web products.",
    "/projects": "Check out my software projects! Hover over any card and I will tell you what I did for that project.",
    "/resume": "This is my professional resume. I've designed it to fit cleanly on A4 print templates (max 2 pages) and pass ATS scans.",
    "/contact": "Need a developer or have a project idea? Fill out this contact form or reach out directly on WhatsApp!"
  };

  useEffect(() => {
    // Set default message on route change
    const defaultMsg = pageDefaults[location.pathname] || "Glad you're here! Explore my portfolio to see more.";
    setMessage(defaultMsg);
    setHoverMessage(null);
  }, [location.pathname]);

  useEffect(() => {
    // Listen to custom mascot-speak events from hover elements
    const handleSpeak = (e) => {
      if (e.detail && e.detail.text) {
        setHoverMessage(e.detail.text);
        setIsBouncing(true);
        setTimeout(() => setIsBouncing(false), 500);
      } else {
        setHoverMessage(null);
      }
    };

    window.addEventListener("mascot-speak", handleSpeak);
    return () => {
      window.removeEventListener("mascot-speak", handleSpeak);
    };
  }, []);

  const displayMessage = hoverMessage || message;

  if (isMinimized) {
    return (
      <button
        onClick={() => setIsMinimized(false)}
        className="fixed bottom-6 right-6 z-40 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:scale-110 transition duration-300 flex items-center justify-center print:hidden cursor-pointer"
        title="Open Mascot Guide"
      >
        💬 Helper
      </button>
    );
  }

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end max-w-xs md:max-w-sm font-sans print:hidden">
      {/* Speech Bubble */}
      <div className="relative mb-3 bg-white/80 backdrop-blur-md border border-white/40 text-slate-800 p-4 rounded-2xl shadow-xl transition-all duration-300 scale-100 origin-bottom-right">
        {/* Close Button */}
        <button
          onClick={() => setIsMinimized(true)}
          className="absolute top-1 right-2 text-slate-400 hover:text-slate-600 text-xs font-bold focus:outline-none cursor-pointer"
          title="Minimize"
        >
          ✕
        </button>
        <p className="text-xs md:text-sm font-medium leading-relaxed pr-2">
          {displayMessage}
        </p>
        {/* Speech Bubble Arrow */}
        <div className="absolute bottom-[-6px] right-8 w-3 h-3 bg-white/80 border-r border-b border-white/40 rotate-45"></div>
      </div>

      {/* Cartoon Avatar */}
      <div 
        className={`flex items-center gap-2 cursor-pointer transition-transform duration-300 ${isBouncing ? "animate-bounce" : "hover:scale-105"}`}
        onClick={() => {
          setIsBouncing(true);
          setTimeout(() => setIsBouncing(false), 500);
        }}
      >
        <div className="bg-gradient-to-tr from-blue-500 to-indigo-600 p-1.5 rounded-full shadow-lg">
          {/* Animated Developer Avatar SVG */}
          <svg className="w-16 h-16 md:w-20 md:h-20" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Face/Skin */}
            <circle cx="50" cy="45" r="22" fill="#ffd8b3" />
            
            {/* Eyes */}
            <ellipse cx="42" cy="42" rx="2.5" ry="3.5" fill="#333">
              <animate attributeName="ry" values="3.5;0.5;3.5" dur="4s" repeatCount="indefinite" />
            </ellipse>
            <ellipse cx="58" cy="42" rx="2.5" ry="3.5" fill="#333">
              <animate attributeName="ry" values="3.5;0.5;3.5" dur="4s" repeatCount="indefinite" />
            </ellipse>
            
            {/* Glasses Frame */}
            <rect x="35" y="37" width="14" height="10" rx="3" stroke="#1e293b" strokeWidth="2.5" fill="none" />
            <rect x="51" y="37" width="14" height="10" rx="3" stroke="#1e293b" strokeWidth="2.5" fill="none" />
            <line x1="49" y1="42" x2="51" y2="42" stroke="#1e293b" strokeWidth="2.5" />
            <line x1="32" y1="42" x2="35" y2="42" stroke="#1e293b" strokeWidth="1.5" />
            <line x1="65" y1="42" x2="68" y2="42" stroke="#1e293b" strokeWidth="1.5" />

            {/* Nose */}
            <path d="M49 46 Q50 49 51 46" stroke="#e09d6f" strokeWidth="2" strokeLinecap="round" />

            {/* Mouth (Smile) */}
            <path d="M43 53 Q50 59 57 53" stroke="#333" strokeWidth="2" strokeLinecap="round" fill="none" />

            {/* Hair */}
            <path d="M28 42 C26 30, 38 18, 50 20 C62 18, 74 30, 72 42 C72 38, 70 34, 66 32 C60 30, 40 30, 34 32 C30 34, 28 38, 28 42 Z" fill="#1e293b" />
            {/* Front Fringe */}
            <path d="M34 33 Q42 27 50 34 Q58 27 66 33" stroke="#1e293b" strokeWidth="3" strokeLinecap="round" />

            {/* Body / Shirt */}
            <path d="M24 75 C24 67, 76 67, 76 75 C76 85, 24 85, 24 75 Z" fill="#2563eb" />
            {/* Tie / V-Neck collar */}
            <path d="M44 68 L50 78 L56 68 Z" fill="#ffffff" />
            <path d="M48 78 L50 90 L52 78 Z" fill="#ef4444" />
          </svg>
        </div>
      </div>
    </div>
  );
}
