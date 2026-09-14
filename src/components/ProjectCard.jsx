import { ExternalLink, Smartphone, Award, Sparkles, CheckCircle2 } from "lucide-react";

export default function ProjectCard({ project, onHoverSpeak }) {
  const getBadgeIcon = (badge) => {
    if (badge.includes("Play Store")) {
      return <Smartphone className="w-3.5 h-3.5 text-[#C27803]" />;
    }
    if (badge.includes("Hackathon")) {
      return <Award className="w-3.5 h-3.5 text-[#C27803]" />;
    }
    if (badge.includes("Live") || badge.includes("Production")) {
      return <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />;
    }
    return <Sparkles className="w-3.5 h-3.5 text-[#C27803]" />;
  };

  return (
    <div
      onMouseEnter={() => onHoverSpeak && onHoverSpeak(`${project.title}: ${project.tagline}`)}
      onMouseLeave={() => onHoverSpeak && onHoverSpeak(null)}
      className="group bg-white rounded-3xl border border-[#E8E5DF] p-6 sm:p-7 shadow-xs hover:shadow-md hover:border-[#C27803]/50 transition-all duration-300 flex flex-col h-full relative"
    >
      {/* Top Header: Badge & Date */}
      <div className="flex items-center justify-between gap-3 mb-4 flex-wrap">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-semibold bg-[#F2EDE4] text-[#121316] border border-[#E8E5DF]">
          {getBadgeIcon(project.badge)}
          <span>{project.badge}</span>
        </span>
        <span className="text-xs font-mono text-[#7A7E89]">
          {project.date}
        </span>
      </div>

      {/* Project Title */}
      <h3 className="text-xl font-bold text-[#121316] mb-1.5 tracking-tight group-hover:text-[#C27803] transition-colors">
        {project.title}
      </h3>

      {/* Tagline / Category */}
      <p className="text-xs font-mono text-[#C27803] font-medium mb-3">
        {project.category} {project.version ? `• ${project.version}` : ""}
      </p>

      {/* Description */}
      <p className="text-sm text-[#4A4E57] leading-relaxed mb-5">
        {project.description}
      </p>

      {/* Technical Highlights */}
      {project.highlights && project.highlights.length > 0 && (
        <div className="mb-6 space-y-1.5 pt-2 border-t border-[#F2EDE4]">
          {project.highlights.slice(0, 3).map((highlight, idx) => (
            <div key={idx} className="flex items-start gap-2 text-xs text-[#656A76]">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
              <span>{highlight}</span>
            </div>
          ))}
        </div>
      )}

      {/* Tech Stack Pills */}
      <div className="flex flex-wrap gap-1.5 mb-6 mt-auto">
        {project.tech.map((techItem, idx) => (
          <span
            key={idx}
            className="px-2.5 py-1 rounded-lg text-xs font-mono bg-[#F8F6F2] text-[#555963] border border-[#E8E5DF]"
          >
            {techItem}
          </span>
        ))}
      </div>

      {/* Action CTA Buttons */}
      <div className="pt-4 border-t border-[#F2EDE4] flex items-center justify-between flex-wrap gap-2">
        <div className="flex items-center gap-2 flex-wrap">
          {project.liveUrl && project.liveUrl !== "#" && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-[#121316] text-white hover:bg-[#C27803] transition-colors text-xs font-semibold shadow-xs"
            >
              <span>Visit Live</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          )}

          {project.playStoreUrl && (
            <a
              href={project.playStoreUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-[#0F766E] text-white hover:bg-[#0D655E] transition-colors text-xs font-semibold shadow-xs"
            >
              <Smartphone className="w-3.5 h-3.5" />
              <span>Google Play</span>
              <ExternalLink className="w-3 h-3 opacity-70" />
            </a>
          )}
        </div>

        {project.packageName && (
          <span className="text-[10px] font-mono text-[#7A7E89] hidden sm:inline">
            {project.packageName}
          </span>
        )}
      </div>
    </div>
  );
}
