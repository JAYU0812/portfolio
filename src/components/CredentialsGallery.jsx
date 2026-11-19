import { useState, useEffect } from "react";
import {
  Award,
  Trophy,
  FileCheck2,
  Eye,
  X,
  ExternalLink,
  Calendar,
  MapPin,
  ShieldCheck,
  Building2,
  Hash
} from "lucide-react";
import { CREDENTIALS } from "../data/credentials";

/**
 * Reusable High-Resolution Document Lightbox Modal
 */
export function CredentialModal({ credential, onClose }) {
  useEffect(() => {
    if (!credential) return;
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [credential, onClose]);

  if (!credential) return null;

  const getTypeIcon = (type) => {
    if (type === "award") return <Trophy className="w-5 h-5 text-[#E8C37D]" />;
    if (type === "offer-letter") return <FileCheck2 className="w-5 h-5 text-emerald-400" />;
    return <Award className="w-5 h-5 text-[#E8C37D]" />;
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={credential.title}
      className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="bg-[#121316] border-2 border-[#C27803]/70 rounded-2xl sm:rounded-3xl max-w-3xl w-full max-h-[92vh] overflow-y-auto p-4 sm:p-6 shadow-2xl relative text-white"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-start justify-between gap-3 pb-3 sm:pb-4 border-b border-[#2E333D] mb-4">
          <div className="flex items-start gap-2.5 min-w-0">
            <div className="w-9 h-9 rounded-xl bg-[#1C1F26] border border-[#2E333D] flex items-center justify-center shrink-0 mt-0.5">
              {getTypeIcon(credential.type)}
            </div>
            <div className="min-w-0">
              <span className="text-[10px] font-mono uppercase tracking-wider text-[#E8C37D] block">
                {credential.typeLabel}
              </span>
              <h3 className="font-extrabold text-sm sm:text-base tracking-tight text-white leading-snug">
                {credential.title}
              </h3>
            </div>
          </div>

          <button
            onClick={onClose}
            aria-label="Close document preview"
            className="w-8 h-8 rounded-full bg-[#2B2E36] hover:bg-[#383C46] flex items-center justify-center text-[#A4ACB9] hover:text-white transition shrink-0 cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* High-Resolution Image Frame */}
        <div className="rounded-xl overflow-hidden border border-[#2E333D] bg-black/70 mb-4 flex justify-center p-2">
          <img
            src={credential.image}
            alt={credential.imageAlt}
            width="800"
            height="600"
            decoding="async"
            className="w-full max-h-[60vh] object-contain rounded-lg"
          />
        </div>

        {/* Official Citation & Metadata */}
        <div className="space-y-3 text-xs font-mono text-[#A4ACB9]">
          {credential.quote && (
            <p className="text-[#F5F5F7] font-sans text-xs sm:text-sm italic border-l-2 border-[#C27803] pl-3 py-0.5 leading-relaxed">
              &ldquo;{credential.quote}&rdquo;
            </p>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2 border-t border-[#2E333D]">
            <div className="bg-[#1C1F26] p-3 rounded-xl border border-[#2E333D]">
              <span className="text-[10px] text-[#8A909E] uppercase block mb-0.5">Issuing Authority</span>
              <span className="text-white font-semibold block">{credential.issuer}</span>
              <span className="text-[11px] text-[#E8C37D] block mt-0.5">{credential.signatory}</span>
            </div>

            <div className="bg-[#1C1F26] p-3 rounded-xl border border-[#2E333D]">
              <span className="text-[10px] text-[#8A909E] uppercase block mb-0.5">Verification & Date</span>
              <span className="text-white font-semibold block">
                {credential.date} {credential.duration ? `(${credential.duration})` : ""}
              </span>
              <div className="flex flex-wrap items-center gap-2 mt-0.5 text-[11px]">
                {credential.credentialId && (
                  <span className="text-emerald-400">ID: {credential.credentialId}</span>
                )}
                {credential.verificationCode && (
                  <span className="text-[#E8C37D]">Code: {credential.verificationCode}</span>
                )}
              </div>
            </div>
          </div>

          {credential.location && (
            <div className="flex items-center gap-1.5 text-[11px] text-[#8A909E] pt-1">
              <MapPin className="w-3.5 h-3.5 text-[#C27803] shrink-0" />
              <span>{credential.location}</span>
            </div>
          )}
        </div>

        {/* Action Footer */}
        <div className="mt-4 pt-3 border-t border-[#2E333D] flex flex-wrap items-center justify-between gap-2">
          <a
            href={credential.image}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-[#1C1F26] hover:bg-[#2B2E36] border border-[#2E333D] text-[#E8C37D] text-xs font-semibold transition"
          >
            <ExternalLink className="w-3.5 h-3.5" />
            <span>Open Full-Size Image</span>
          </a>

          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl bg-[#C27803] hover:bg-[#9E6102] text-white text-xs font-semibold transition cursor-pointer"
          >
            Close View
          </button>
        </div>
      </div>
    </div>
  );
}

/**
 * Executive Verified Credentials Gallery
 * @param {Object} props
 * @param {boolean} [props.excludeAward=false] - Exclude NB Infra award (e.g., on Home where NB Infra has its own hero spotlight)
 * @param {boolean} [props.showFilters=true] - Show category filter pills
 * @param {string} [props.heading] - Custom heading
 * @param {string} [props.subheading] - Custom subheading
 */
export default function CredentialsGallery({
  excludeAward = false,
  showFilters = true,
  heading = "Verified Certifications & Official Credentials",
  subheading = "Authenticated technical certificates, internship offer letters, and corporate recognition documents."
}) {
  const [activeFilter, setActiveFilter] = useState("all");
  const [selectedCredential, setSelectedCredential] = useState(null);

  const baseCredentials = excludeAward
    ? CREDENTIALS.filter((c) => c.id !== "nb-infra-award")
    : CREDENTIALS;

  const filteredCredentials =
    activeFilter === "all"
      ? baseCredentials
      : baseCredentials.filter((c) => c.type === activeFilter);

  const getBadgeStyle = (type) => {
    if (type === "award") {
      return {
        icon: <Trophy className="w-3.5 h-3.5" />,
        className:
          "bg-amber-500/15 text-[#92400E] dark:text-[#E8C37D] border-[#C27803]/40"
      };
    }
    if (type === "offer-letter") {
      return {
        icon: <FileCheck2 className="w-3.5 h-3.5" />,
        className:
          "bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border-emerald-500/30"
      };
    }
    return {
      icon: <Award className="w-3.5 h-3.5" />,
      className:
        "bg-sky-500/10 text-sky-700 dark:text-sky-300 border-sky-500/30"
    };
  };

  const filterOptions = [
    { id: "all", label: `All (${baseCredentials.length})` },
    ...(!excludeAward
      ? [{ id: "award", label: "Awards" }]
      : []),
    { id: "certification", label: "Certificates" },
    { id: "offer-letter", label: "Offer Letters" }
  ];

  return (
    <div className="w-full">
      {/* Header Row */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6 sm:mb-8">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-1.5 text-xs font-mono font-bold uppercase tracking-wider text-[#C27803] dark:text-[#E8C37D] mb-1.5">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Verified Documentation</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#121316] dark:text-white tracking-tight">
            {heading}
          </h2>
          <p className="text-xs sm:text-sm text-[#4A4E57] dark:text-[#A1A7B5] mt-1.5 leading-relaxed">
            {subheading}
          </p>
        </div>

        {/* Filter Pills */}
        {showFilters && (
          <div className="flex flex-wrap items-center gap-1.5">
            {filterOptions.map((opt) => (
              <button
                key={opt.id}
                onClick={() => setActiveFilter(opt.id)}
                className={`px-3 py-1.5 rounded-xl text-xs font-mono font-semibold transition cursor-pointer ${
                  activeFilter === opt.id
                    ? "bg-[#121316] text-white dark:bg-[#C27803] shadow-xs"
                    : "bg-white dark:bg-[#14161E] border border-[#E8E5DF] dark:border-[#232733] text-[#4A4E57] dark:text-[#A1A7B5] hover:border-[#C27803]/50"
                }`}
              >
                {opt.label}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Cards Grid */}
      <div
        className={`grid grid-cols-1 ${
          filteredCredentials.length === 3
            ? "md:grid-cols-3"
            : "md:grid-cols-2 lg:grid-cols-2"
        } gap-5 sm:gap-6`}
      >
        {filteredCredentials.map((cred) => {
          const badge = getBadgeStyle(cred.type);
          return (
            <article
              key={cred.id}
              className="group bg-white dark:bg-[#14161E] rounded-2xl sm:rounded-3xl border border-[#E8E5DF] dark:border-[#232733] hover:border-[#C27803]/60 dark:hover:border-[#E8C37D]/50 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col overflow-hidden"
            >
              {/* Document Preview Thumbnail */}
              <div
                onClick={() => setSelectedCredential(cred)}
                className="relative h-52 sm:h-56 bg-[#F2EDE4]/70 dark:bg-[#0C0E13] border-b border-[#E8E5DF] dark:border-[#232733] p-4 flex items-center justify-center overflow-hidden cursor-pointer"
              >
                <img
                  src={cred.image}
                  alt={cred.imageAlt}
                  loading="lazy"
                  decoding="async"
                  width="400"
                  height="280"
                  className="max-h-full max-w-full object-contain rounded-lg shadow-md border border-black/10 dark:border-white/10 group-hover:scale-105 transition-transform duration-300"
                />

                {/* Top-left Status Badge */}
                <span
                  className={`absolute top-3 left-3 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider border backdrop-blur-md ${badge.className}`}
                >
                  {badge.icon}
                  <span>{cred.type === "offer-letter" ? "Offer Letter" : cred.type === "award" ? "R&R Award" : "Certificate"}</span>
                </span>

                {/* Hover Lightbox Trigger Overlay */}
                <div className="absolute inset-0 bg-[#121316]/65 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex flex-col items-center justify-center gap-2 text-white">
                  <div className="w-10 h-10 rounded-full bg-[#C27803] flex items-center justify-center shadow-lg">
                    <Eye className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-xs font-mono font-bold">Inspect Official Document</span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 sm:p-6 flex flex-col flex-1 justify-between">
                <div>
                  <div className="flex flex-wrap items-center justify-between gap-2 text-[11px] font-mono text-[#7A7E89] dark:text-[#8E95A5] mb-2">
                    <span className="inline-flex items-center gap-1">
                      <Calendar className="w-3 h-3 text-[#C27803] dark:text-[#E8C37D]" />
                      {cred.date}
                    </span>
                    {cred.credentialId && (
                      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-[#FBF9F5] dark:bg-[#101218] border border-[#E8E5DF] dark:border-[#262933] text-[#121316] dark:text-[#E8C37D] font-semibold">
                        <Hash className="w-2.5 h-2.5" />
                        {cred.credentialId}
                      </span>
                    )}
                  </div>

                  <h3 className="font-extrabold text-base sm:text-lg text-[#121316] dark:text-white leading-snug mb-1.5 group-hover:text-[#C27803] dark:group-hover:text-[#E8C37D] transition-colors">
                    {cred.title}
                  </h3>

                  <div className="flex items-center gap-1.5 text-xs font-semibold text-[#4A4E57] dark:text-[#C9D1D9] mb-2.5">
                    <Building2 className="w-3.5 h-3.5 text-[#C27803] dark:text-[#E8C37D] shrink-0" />
                    <span className="truncate">{cred.issuer}</span>
                  </div>

                  <p className="text-xs text-[#656A76] dark:text-[#8E95A5] leading-relaxed mb-4 line-clamp-3">
                    {cred.summary}
                  </p>

                  {/* Skills / Verification Chips */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {cred.gradeOrStatus && (
                      <span className="px-2 py-0.5 rounded-md text-[10px] font-mono font-bold bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800">
                        {cred.gradeOrStatus}
                      </span>
                    )}
                    {cred.skills.slice(0, 3).map((skill) => (
                      <span
                        key={skill}
                        className="px-2 py-0.5 rounded-md text-[10px] font-mono bg-[#FBF9F5] dark:bg-[#101218] border border-[#E8E5DF] dark:border-[#262933] text-[#4A4E57] dark:text-[#A1A7B5]"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Footer Action Row */}
                <div className="pt-3.5 border-t border-[#E8E5DF] dark:border-[#232733] flex items-center justify-between gap-2">
                  <span className="text-[11px] font-mono text-[#7A7E89] dark:text-[#8E95A5] truncate">
                    {cred.signatory}
                  </span>
                  <button
                    onClick={() => setSelectedCredential(cred)}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#121316] dark:bg-[#1C202B] hover:bg-[#C27803] dark:hover:bg-[#C27803] text-white text-xs font-semibold transition shrink-0 cursor-pointer active:scale-95"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>Inspect</span>
                  </button>
                </div>
              </div>
            </article>
          );
        })}
      </div>

      {/* High-Res Lightbox Modal */}
      <CredentialModal
        credential={selectedCredential}
        onClose={() => setSelectedCredential(null)}
      />
    </div>
  );
}
