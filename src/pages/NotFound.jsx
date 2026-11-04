import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import SEO from "../components/SEO";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-6 py-20 text-[#121316] dark:text-[#F5F5F7]">
      <SEO 
        title="404 — Page Not Found"
        description="The page you requested was not found."
      />
      <div className="text-center max-w-md bg-white dark:bg-[#14161E] border border-[#E8E5DF] dark:border-[#232733] p-10 rounded-3xl shadow-sm">
        <span className="text-5xl font-mono font-extrabold text-[#C27803] dark:text-[#E8C37D] block mb-4">
          404
        </span>
        <h1 className="text-2xl font-bold text-[#121316] dark:text-white mb-3">
          Page Not Found
        </h1>
        <p className="text-sm text-[#4A4E57] dark:text-[#A1A7B5] mb-8 leading-relaxed">
          The page you are looking for doesn't exist or may have been relocated.
        </p>
        <Link
          to="/"
          className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#121316] text-white hover:bg-[#C27803] dark:bg-[#C27803] dark:hover:bg-[#E58B0B] transition-colors text-sm font-semibold shadow-xs"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Return to Homepage</span>
        </Link>
      </div>
    </div>
  );
}
