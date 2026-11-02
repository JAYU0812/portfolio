import { Link } from "react-router-dom";
import { ExternalLink, Smartphone, Award, Sparkles, ArrowRight, Activity } from "lucide-react";
import { GithubIcon } from "./Icons";

export default function ProjectCard({ project, onHoverSpeak }) {
  const getBadgeIcon = (badge = "") => {
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

  // Derive a punchy metric or flagship highlight for the compact card
  const getKeyHighlight = () => {
    if (project.metrics?.readLatency) return `⚡ ${project.metrics.readLatency} Read Latency`;
    if (project.metrics?.securityScore) return `🛡️ 100/100 Security Audit`;
    if (project.highlights && project.highlights.length > 0) {
      const first = project.highlights[0];
      return first.length > 60 ? `${first.slice(0, 57)}...` : first;
    }
    return `Verified Production Architecture`;
  };

  return (
    <div
      onMouseEnter={() => onHoverSpeak && onHoverSpeak(`${project.title}: ${project.tagline}`)}
      onMouseLeave={() => onHoverSpeak && onHoverSpeak(null)}
      className="group bg-white rounded-2xl sm:rounded-3xl border border-[#E8E5DF] p-5 sm:p-6 shadow-xs hover:shadow-lg hover:border-[#C27803]/50 transition-all duration-300 flex flex-col justify-between h-[420px] relative overflow-hidden"
    >
      {/* Top Header: Badge & Date */}
      <div>
        <div className="flex items-center justify-between gap-2 mb-3">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-mono font-semibold bg-[#F2EDE4] text-[#121316] border border-[#E8E5DF] truncate max-w-[200px]">
            {getBadgeIcon(project.badge)}
            <span className="truncate">{project.badge}</span>
          </span>
          <span className="text-[11px] font-mono text-[#7A7E89] shrink-0">
            {project.date}
          </span>
        </div>

        {/* Project Title (Fixed Height Clamped) */}
        <Link 
          to={`/projects/${project.id}`} 
          className="block group/link"
        >
          <h3 className="text-base sm:text-lg font-bold text-[#121316] tracking-tight group-hover/link:text-[#C27803] transition-colors leading-snug line-clamp-2 h-[48px] mb-1">
            {project.title}
          </h3>
        </Link>

        {/* Category & Version */}
        <p className="text-[11px] font-mono text-[#C27803] font-medium truncate mb-2.5">
          {project.category} {project.version ? `• ${project.version}` : ""}
        </p>

        {/* Tagline / Brief Description (Clamped to exactly 3 lines) */}
        <p className="text-xs text-[#555963] leading-relaxed line-clamp-3 h-[54px] mb-3">
          {project.tagline || project.description}
        </p>
      </div>

      {/* Middle Section: Key Impact Metric & Tech Pills */}
      <div>
        {/* Key Feature Highlight Pill */}
        <div className="mb-3 px-2.5 py-1.5 rounded-lg bg-[#FBF9F5] border border-[#E8E5DF] text-[11px] font-mono text-[#121316] truncate flex items-center gap-1.5">
          <Activity className="w-3 h-3 text-[#C27803] shrink-0" />
          <span className="truncate text-[#333740] font-medium">{getKeyHighlight()}</span>
        </div>

        {/* Tech Stack Pills (Limited to top 3 + counter) */}
        <div className="flex flex-wrap items-center gap-1.5 mb-4">
          {project.tech.slice(0, 3).map((techItem, idx) => (
            <span
              key={idx}
              className="px-2 py-0.5 rounded-md text-[10px] font-mono bg-[#F2EDE4]/60 text-[#4A4E57] border border-[#E8E5DF]"
            >
              {techItem}
            </span>
          ))}
          {project.tech.length > 3 && (
            <span className="px-1.5 py-0.5 rounded-md text-[10px] font-mono text-[#7A7E89] bg-white border border-[#E8E5DF]">
              +{project.tech.length - 3}
            </span>
          )}
        </div>
      </div>

      {/* Action Footer: Primary Case Study Button + Quick External Links */}
      <div className="pt-3 border-t border-[#F2EDE4] flex items-center justify-between gap-2">
        <Link
          to={`/projects/${project.id}`}
          className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-[#121316] text-white hover:bg-[#C27803] active:scale-98 transition text-xs font-semibold shadow-xs"
        >
          <span>Case Study</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>

        {/* External Quick Icons */}
        <div className="flex items-center gap-1.5 shrink-0">
          {project.liveUrl && project.liveUrl !== "#" && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              title="Visit Live Platform"
              className="w-8 h-8 rounded-lg bg-[#F2EDE4] hover:bg-[#E8E5DF] text-[#121316] hover:text-[#C27803] flex items-center justify-center transition shadow-2xs"
            >
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          )}

          {project.playStoreUrl && (
            <a
              href={project.playStoreUrl}
              target="_blank"
              rel="noopener noreferrer"
              title="Google Play Store"
              className="w-8 h-8 rounded-lg bg-[#0F766E]/10 hover:bg-[#0F766E]/20 text-[#0F766E] flex items-center justify-center transition shadow-2xs"
            >
              <Smartphone className="w-3.5 h-3.5" />
            </a>
          )}

          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              title="View GitHub Repository"
              className="w-8 h-8 rounded-lg bg-[#24292E]/10 hover:bg-[#24292E]/20 text-[#24292E] flex items-center justify-center transition shadow-2xs"
            >
              <GithubIcon className="w-3.5 h-3.5" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
