import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-6 py-20">
      <div className="text-center max-w-md bg-white border border-[#E8E5DF] p-10 rounded-3xl shadow-sm">
        <span className="text-5xl font-mono font-extrabold text-[#C27803] block mb-4">
          404
        </span>
        <h1 className="text-2xl font-bold text-[#121316] mb-3">
          Page Not Found
        </h1>
        <p className="text-sm text-[#4A4E57] mb-8 leading-relaxed">
          The page you are looking for doesn't exist or may have been relocated.
        </p>
        <Link
          to="/"
          className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#121316] text-white hover:bg-[#C27803] transition-colors text-sm font-semibold shadow-xs"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Return to Homepage</span>
        </Link>
      </div>
    </div>
  );
}
