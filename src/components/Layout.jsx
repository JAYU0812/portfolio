import Header from "./Header";
import Footer from "./Footer";
import Mascot from "./Mascot";
import MobileBottomNav from "./MobileBottomNav";

export default function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen w-full overflow-x-clip bg-[#FBF9F5] dark:bg-[#0A0B0E] text-[#121316] dark:text-[#F5F5F7] selection:bg-[#E8C37D]/35 selection:text-[#78350F] dark:selection:bg-[#C27803]/40 dark:selection:text-[#FCD34D] relative transition-colors duration-250">
      {/* Architectural subtle background grid - bespoke, tactile, non-AI */}
      <div className="fixed inset-0 -z-10 architectural-grid opacity-60 pointer-events-none" />
      
      {/* Warm artisan ambient accent - subtle warm amber wash, no purple/cyan neon blobs */}
      <div className="fixed top-0 right-0 w-[350px] sm:w-[550px] h-[250px] sm:h-[350px] -z-10 bg-gradient-to-b from-[#F2EDE4] dark:from-[#C27803]/10 to-transparent rounded-full blur-2xl opacity-40 pointer-events-none" />
      <div className="fixed bottom-0 left-0 w-[300px] sm:w-[500px] h-[250px] sm:h-[350px] -z-10 bg-gradient-to-t from-[#EDE7DC] dark:from-[#1A1D24]/40 to-transparent rounded-full blur-2xl opacity-30 pointer-events-none" />

      <Header />
      <main className="flex-grow w-full max-w-full pb-16 sm:pb-0">
        {children}
      </main>
      <Mascot />
      <Footer />
      <MobileBottomNav />
    </div>
  );
}
