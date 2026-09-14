import { useState } from "react";
import { 
  Activity, 
  Smartphone, 
  Zap, 
  ArrowUpRight, 
  ExternalLink,
  Cpu,
  GitBranch,
  Terminal,
  Layers,
  ShieldCheck
} from "lucide-react";

export default function ArchitectureConsole() {
  const [activeTab, setActiveTab] = useState("telemetry");

  return (
    <div className="bg-[#121316] text-[#FBF9F5] rounded-3xl p-6 sm:p-10 border border-[#2B2E36] shadow-xl relative overflow-hidden">
      {/* Console Top Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#2B2E36] mb-8">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#E8C37D]">
              System Telemetry & Architecture Console
            </span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white">
            Production Engineering Depth
          </h3>
        </div>

        {/* Tab Buttons */}
        <div className="flex flex-wrap gap-1.5 p-1 bg-[#1C1F26] border border-[#2E333D] rounded-xl text-xs font-mono">
          {[
            { id: "telemetry", label: "PropKart Latencies", icon: <Activity className="w-3.5 h-3.5" /> },
            { id: "gitsphere", label: "GitSphere Desktop", icon: <GitBranch className="w-3.5 h-3.5" /> },
            { id: "playstore", label: "Play Store Apps", icon: <Smartphone className="w-3.5 h-3.5" /> },
            { id: "jewellery", label: "Jeweller ERP Suite", icon: <Zap className="w-3.5 h-3.5" /> },
            { id: "haversine", label: "Haversine Math", icon: <Cpu className="w-3.5 h-3.5" /> }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-3.5 py-2 rounded-lg transition cursor-pointer ${
                activeTab === tab.id
                  ? "bg-[#C27803] text-white font-bold shadow-xs"
                  : "text-[#A4ACB9] hover:text-white hover:bg-[#252932]"
              }`}
            >
              {tab.icon}
              <span>{tab.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Tab 1: PropKart Telemetry & Latencies */}
      {activeTab === "telemetry" && (
        <div className="space-y-6 animate-in fade-in duration-200">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div className="bg-[#1C1F26] p-4 rounded-2xl border border-[#2E333D]">
              <div className="text-[10px] font-mono text-[#8A909E] uppercase mb-1">Isar Read Latency</div>
              <div className="text-2xl font-mono font-extrabold text-[#E8C37D]">2ms – 8ms</div>
              <p className="text-[11px] text-[#A4ACB9] mt-1">Perceived zero-wait memory hydration</p>
            </div>
            <div className="bg-[#1C1F26] p-4 rounded-2xl border border-[#2E333D]">
              <div className="text-[10px] font-mono text-[#8A909E] uppercase mb-1">Batch Write Speed</div>
              <div className="text-2xl font-mono font-extrabold text-emerald-400">10ms – 25ms</div>
              <p className="text-[11px] text-[#A4ACB9] mt-1">100+ entities/transaction batch</p>
            </div>
            <div className="bg-[#1C1F26] p-4 rounded-2xl border border-[#2E333D]">
              <div className="text-[10px] font-mono text-[#8A909E] uppercase mb-1">Lead Ad Ingestion</div>
              <div className="text-2xl font-mono font-extrabold text-[#E8C37D]">&lt; 1 Second</div>
              <p className="text-[11px] text-[#A4ACB9] mt-1">Meta Graph API webhook push</p>
            </div>
            <div className="bg-[#1C1F26] p-4 rounded-2xl border border-[#2E333D]">
              <div className="text-[10px] font-mono text-[#8A909E] uppercase mb-1">Socket Batching</div>
              <div className="text-2xl font-mono font-extrabold text-sky-400">100ms Debounce</div>
              <p className="text-[11px] text-[#A4ACB9] mt-1">Phoenix channel transactional grouping</p>
            </div>
          </div>

          <div className="bg-[#171A21] p-5 sm:p-6 rounded-2xl border border-[#262B35] font-mono text-xs space-y-3">
            <div className="text-[#8A909E] flex items-center justify-between pb-2 border-b border-[#262B35]">
              <span>// PropKart Conflict Resolution & Ingestion Architecture</span>
              <a 
                href="https://propkart.nbpropertytech.com" 
                target="_blank" 
                rel="noreferrer"
                className="text-[#E8C37D] hover:underline flex items-center gap-1 text-[11px]"
              >
                propkart.nbpropertytech.com <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
            <p className="text-[#A4ACB9] leading-relaxed">
              • <strong className="text-white">Deterministic Server-Wins Outbox Replay:</strong> Field agents log follow-ups and update stages in offline basements. Mutations persist in local outbox queues and replay sequentially with strict timestamp verification against cloud PostgreSQL.
            </p>
            <p className="text-[#A4ACB9] leading-relaxed">
              • <strong className="text-white">Lead Understanding Engine:</strong> Analyzes raw Meta Ads payload, cleanses Indian mobile formats (+91) via regex, scores completeness (0–100%), and generates one-tap WhatsApp deep-links for telecallers.
            </p>
          </div>
        </div>
      )}

      {/* Tab: GitSphere Desktop Visual Engine */}
      {activeTab === "gitsphere" && (
        <div className="space-y-6 animate-in fade-in duration-200">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div className="bg-[#1C1F26] p-4 rounded-2xl border border-[#2E333D]">
              <div className="text-[10px] font-mono text-[#8A909E] uppercase mb-1">Visual Git Pipeline</div>
              <div className="text-2xl font-mono font-extrabold text-[#E8C37D]">4 Stages</div>
              <p className="text-[11px] text-[#A4ACB9] mt-1">Working &rarr; Stage &rarr; Branch &rarr; Remote</p>
            </div>
            <div className="bg-[#1C1F26] p-4 rounded-2xl border border-[#2E333D]">
              <div className="text-[10px] font-mono text-[#8A909E] uppercase mb-1">GitHub Account Switch</div>
              <div className="text-2xl font-mono font-extrabold text-emerald-400">1-Click SQLite</div>
              <p className="text-[11px] text-[#A4ACB9] mt-1">Zero terminal re-auth collisions</p>
            </div>
            <div className="bg-[#1C1F26] p-4 rounded-2xl border border-[#2E333D]">
              <div className="text-[10px] font-mono text-[#8A909E] uppercase mb-1">Inno Setup Size</div>
              <div className="text-2xl font-mono font-extrabold text-[#E8C37D]">12.07 MB</div>
              <p className="text-[11px] text-[#A4ACB9] mt-1">Windows setup wizard + ZIP</p>
            </div>
            <div className="bg-[#1C1F26] p-4 rounded-2xl border border-[#2E333D]">
              <div className="text-[10px] font-mono text-[#8A909E] uppercase mb-1">README Script Runner</div>
              <div className="text-2xl font-mono font-extrabold text-sky-400">1-Click Run</div>
              <p className="text-[11px] text-[#A4ACB9] mt-1">Categorized Setup / Dev / Test</p>
            </div>
          </div>

          {/* Interactive 4-Stage Visualizer */}
          <div className="bg-[#171A21] p-5 sm:p-6 rounded-2xl border border-[#262B35]">
            <div className="text-[#8A909E] font-mono text-xs flex items-center justify-between pb-3 border-b border-[#262B35] mb-4">
              <span>// GitSphere Interactive 4-Stage Visual Pipeline</span>
              <span className="text-[#E8C37D] text-[11px]">Flutter Desktop + Win32/DWM</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 font-mono text-xs">
              <div className="bg-[#1C1F26] p-3.5 rounded-xl border border-[#2E333D] relative">
                <div className="flex items-center justify-between text-[#E8C37D] text-[11px] font-bold mb-1">
                  <span>1. Working Tree</span>
                  <Terminal className="w-3.5 h-3.5 text-[#C27803]" />
                </div>
                <p className="text-[11px] text-[#A4ACB9] leading-snug">
                  Unstaged edits, deleted files & additions tracked via native Process runner.
                </p>
              </div>

              <div className="bg-[#1C1F26] p-3.5 rounded-xl border border-[#2E333D] relative">
                <div className="flex items-center justify-between text-emerald-400 text-[11px] font-bold mb-1">
                  <span>2. Staging Area</span>
                  <Layers className="w-3.5 h-3.5 text-emerald-500" />
                </div>
                <p className="text-[11px] text-[#A4ACB9] leading-snug">
                  Selective file & hunk staging (git add) without terminal syntax friction.
                </p>
              </div>

              <div className="bg-[#1C1F26] p-3.5 rounded-xl border border-[#2E333D] relative">
                <div className="flex items-center justify-between text-sky-400 text-[11px] font-bold mb-1">
                  <span>3. Commit Branch</span>
                  <GitBranch className="w-3.5 h-3.5 text-sky-400" />
                </div>
                <p className="text-[11px] text-[#A4ACB9] leading-snug">
                  Atomic snapshots with authorship attribution and commit log graphs.
                </p>
              </div>

              <div className="bg-[#1C1F26] p-3.5 rounded-xl border border-[#2E333D] relative">
                <div className="flex items-center justify-between text-amber-400 text-[11px] font-bold mb-1">
                  <span>4. GitHub Cloud</span>
                  <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
                </div>
                <p className="text-[11px] text-[#A4ACB9] leading-snug">
                  Upstream push/pull ledger with teammate sync status and branch sync.
                </p>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-[#262B35] text-[11px] text-[#A4ACB9] space-y-1.5 font-mono">
              <p>• <strong className="text-white">Multi-Account GitHub Juggling:</strong> Stores personal, freelance, and company GitHub credentials in local SQLite (`sqflite_common_ffi`), updating Git identities (`user.name` & `user.email`) in 1 click.</p>
              <p>• <strong className="text-white">Collaborator Push/Pull Blindness:</strong> Distinguishes 'I pushed' vs 'Collaborator pushed', logging whether teammates have pulled upstream changes.</p>
            </div>
          </div>
        </div>
      )}

      {/* Tab 2: Play Store Deployments */}
      {activeTab === "playstore" && (
        <div className="grid sm:grid-cols-2 gap-6 animate-in fade-in duration-200">
          <div className="bg-[#1C1F26] p-6 rounded-2xl border border-[#2E333D] flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-900/60 text-emerald-300 border border-emerald-700/50">
                  Google Play Store
                </span>
                <span className="text-xs font-mono text-[#8A909E]">Released June 2025</span>
              </div>
              <h4 className="text-lg font-bold text-white mb-1">Parichay Sammelan</h4>
              <p className="text-xs font-mono text-[#E8C37D] mb-3">com.hssolutiontech.ParichaySammelan</p>
              <p className="text-xs text-[#A4ACB9] leading-relaxed mb-4">
                Community registration and event check-in app with Razorpay ticketing and high-speed QR code venue verification.
              </p>
            </div>
            <a
              href="https://play.google.com/store/apps/details?id=com.hssolutiontech.ParichaySammelan&pcampaignid=web_share"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-[#0F766E] hover:bg-[#0D655E] text-white text-xs font-semibold transition"
            >
              <Smartphone className="w-3.5 h-3.5" />
              <span>View on Google Play Store</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="bg-[#1C1F26] p-6 rounded-2xl border border-[#2E333D] flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-900/60 text-emerald-300 border border-emerald-700/50">
                  Google Play Store
                </span>
                <span className="text-xs font-mono text-[#8A909E]">Released August 2025</span>
              </div>
              <h4 className="text-lg font-bold text-white mb-1">KITAAB — Jeweller Ledger</h4>
              <p className="text-xs font-mono text-[#E8C37D] mb-3">com.jeweller.ledger</p>
              <p className="text-xs text-[#A4ACB9] leading-relaxed mb-4">
                Digital transaction ledger replacing physical bahi-khata registers for retail jewellers with credit/debit calculations and PDF statements.
              </p>
            </div>
            <a
              href="https://play.google.com/store/apps/details?id=com.jeweller.ledger&pcampaignid=web_share"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-[#0F766E] hover:bg-[#0D655E] text-white text-xs font-semibold transition"
            >
              <Smartphone className="w-3.5 h-3.5" />
              <span>View on Google Play Store</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      )}

      {/* Tab 3: Chandrakala Jewellers ERP Suite */}
      {activeTab === "jewellery" && (
        <div className="space-y-4 animate-in fade-in duration-200">
          <div className="grid sm:grid-cols-3 gap-4">
            <div className="bg-[#1C1F26] p-4 rounded-2xl border border-[#2E333D]">
              <div className="text-[10px] font-mono text-[#8A909E] uppercase mb-1">Commercial Storefront</div>
              <div className="text-sm font-bold text-white mb-1">chandrakalajewellers.in</div>
              <p className="text-[11px] text-[#A4ACB9]">Live luxury digital showroom with click-to-inquire automated WhatsApp flow.</p>
            </div>
            <div className="bg-[#1C1F26] p-4 rounded-2xl border border-[#2E333D]">
              <div className="text-[10px] font-mono text-[#8A909E] uppercase mb-1">Proprietary GST Engine</div>
              <div className="text-sm font-bold text-white mb-1">Automated Tax Billing</div>
              <p className="text-[11px] text-[#A4ACB9]">Dynamic calculation of metal purity, hallmark fees, making charges, and CGST/SGST.</p>
            </div>
            <div className="bg-[#1C1F26] p-4 rounded-2xl border border-[#2E333D]">
              <div className="text-[10px] font-mono text-[#8A909E] uppercase mb-1">Flutter Desktop Tag Printer</div>
              <div className="text-sm font-bold text-white mb-1">22-Slot HUID Printer</div>
              <p className="text-[11px] text-[#A4ACB9]">Thermal barcode printing on 139.7x190.5mm sheets with central tail strip tags for rings/chains.</p>
            </div>
          </div>
          <div className="flex justify-end pt-2">
            <a
              href="https://chandrakalajewellers.in"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-xs font-mono text-[#E8C37D] hover:underline"
            >
              <span>Explore chandrakalajewellers.in</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      )}

      {/* Tab 4: Haversine Math */}
      {activeTab === "haversine" && (
        <div className="bg-[#1C1F26] p-6 rounded-2xl border border-[#2E333D] font-mono text-xs space-y-4 animate-in fade-in duration-200">
          <div className="flex items-center justify-between pb-3 border-b border-[#2E333D]">
            <span className="text-[#E8C37D] font-bold">Hackathon 5th Place Winner: Anti-Proxy Geofencing Formula</span>
            <span className="text-[10px] px-2 py-0.5 rounded bg-[#C27803]/20 text-[#E8C37D] border border-[#C27803]/40">Awarded</span>
          </div>
          <p className="text-[#A4ACB9] leading-relaxed">
            To prevent proxy attendance across large auditoriums and field sites, attendees scan a cryptographic time-based rolling QR code while their GPS coordinates are mathematically validated using the spherical Haversine formula:
          </p>
          <div className="bg-[#121316] p-4 rounded-xl border border-[#2E333D] text-[#E8C37D] overflow-x-auto text-[11px] leading-relaxed">
            a = sin²(Δlat/2) + cos(lat1) ⋅ cos(lat2) ⋅ sin²(Δlon/2)<br />
            c = 2 ⋅ atan2( √a, √(1−a) )<br />
            d = R ⋅ c  (where R = 6,371 km)
          </div>
          <p className="text-[#8A909E] text-[11px]">
            If distance &le; authorized venue radius (e.g. 50m) and QR token hash is unexpired, attendance is permanently verified.
          </p>
        </div>
      )}
    </div>
  );
}
