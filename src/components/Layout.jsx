import Header from "./Header";
import Footer from "./Footer";
import Mascot from "./Mascot";

export default function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen bg-[#FBF9F5] text-[#121316] selection:bg-[#E8C37D]/35 selection:text-[#78350F] relative">
      {/* Architectural subtle background grid - bespoke, tactile, non-AI */}
      <div className="fixed inset-0 -z-10 architectural-grid opacity-60 pointer-events-none" />
      
      {/* Warm artisan ambient accent - subtle warm amber wash, no purple/cyan neon blobs */}
      <div className="fixed top-0 right-0 w-[550px] h-[350px] -z-10 bg-gradient-to-b from-[#F2EDE4] to-transparent rounded-full blur-2xl opacity-40 pointer-events-none" />
      <div className="fixed bottom-0 left-0 w-[500px] h-[350px] -z-10 bg-gradient-to-t from-[#EDE7DC] to-transparent rounded-full blur-2xl opacity-30 pointer-events-none" />

      <Header />
      <main className="flex-grow">
        {children}
      </main>
      <Mascot />
      <Footer />
    </div>
  );
}
