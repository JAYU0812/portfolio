import Header from "./Header";
import Footer from "./Footer";
import Mascot from "./Mascot";
import MobileBottomNav from "./MobileBottomNav";

export default function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen w-full max-w-full overflow-x-hidden bg-[#FBF9F5] dark:bg-[#0A0B0E] text-[#121316] dark:text-[#F5F5F7] selection:bg-[#E8C37D]/35 selection:text-[#78350F] dark:selection:bg-[#C27803]/40 dark:selection:text-[#FCD34D] relative transition-colors duration-250">
      {/* Architectural subtle background grid & ambient accents securely clipped */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute inset-0 architectural-grid opacity-60" />
        <div className="absolute top-0 right-0 w-[350px] sm:w-[550px] h-[250px] sm:h-[350px] bg-gradient-to-b from-[#F2EDE4] dark:from-[#C27803]/10 to-transparent rounded-full blur-2xl opacity-40 -mr-16 -mt-16" />
        <div className="absolute bottom-0 left-0 w-[300px] sm:w-[500px] h-[250px] sm:h-[350px] bg-gradient-to-t from-[#EDE7DC] dark:from-[#1A1D24]/40 to-transparent rounded-full blur-2xl opacity-30 -ml-16 -mb-16" />
      </div>

      <Header />
      <main className="flex-grow w-full max-w-full min-w-0 pb-20 sm:pb-0 overflow-x-hidden">
        {children}
      </main>
      <Mascot />
      <Footer />
      <MobileBottomNav />
    </div>
  );
}
