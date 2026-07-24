import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Mascot from "./Mascot";

export default function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50 text-slate-800 antialiased selection:bg-blue-100 selection:text-blue-900 transition-colors duration-300">
      {/* Background soft blurs for modern glassmorphism effect */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none opacity-40">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-300 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-purple-300 rounded-full blur-3xl animate-pulse"></div>
      </div>

      <Header />
      <main className="flex-grow">
        {children}
      </main>
      <Mascot />
      <Footer />
    </div>
  );
}
