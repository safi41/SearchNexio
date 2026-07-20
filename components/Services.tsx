import Reveal from "@/components/motion/Reveal";
import { CtaLink, SectionHead } from "@/components/ui";
import { MapsPin, SparkleAI, ChatGPTMark, GeminiMark } from "@/components/brand-icons";
import {
  SearchIcon,
  PinIcon,
  BotIcon,
  ShieldIcon,
  WrenchIcon,
  ChartIcon,
} from "@/components/icons";
import { SERVICES, type Service } from "@/lib/content";

/* Bento feature layout: an asymmetric arrangement over the ribbed lilac
   backdrop. A large flagship card carries an orbit + AI-answer illustration
   and an outcome strip; the remaining cards each carry their own rich UI
   illustration. The hierarchy of the layout — not a uniform grid — is what
   gives the section its editorial rhythm. */

/* Per-card accent: a subtle icon-tile gradient + a matching top hairline so
   no two cards read identically. */
const ACCENTS = [
  { tile: "from-indigo/18 to-indigo/5 text-indigo", edge: "before:bg-indigo/60" },
  { tile: "from-[#4CC9F0]/22 to-[#4CC9F0]/5 text-[#2a8fb3]", edge: "before:bg-[#4CC9F0]/70" },
  { tile: "from-[#8F7BFF]/22 to-[#8F7BFF]/5 text-[#6d5ce0]", edge: "before:bg-[#8F7BFF]/70" },
  { tile: "from-citron/50 to-citron/10 text-ink-solid", edge: "before:bg-citron-deep" },
  { tile: "from-indigo/16 to-indigo/4 text-indigo", edge: "before:bg-indigo/50" },
];

function Vignette({ children }: { children: React.ReactNode }) {
  return (
    <div className="reveal-item relative mb-6 flex h-28 items-center justify-center overflow-hidden rounded-2xl border border-line/70 bg-ivory/70 [transition-delay:120ms]">
      {children}
    </div>
  );
}

/* skeleton text bar */
function Bar({ className }: { className: string }) {
  return <span className={`block h-1.5 rounded-full bg-line ${className}`} />;
}

/* 1 — revenue SEO: a SERP with your result ranked first */
function SerpVignette() {
  return (
    <Vignette>
      <div className="grid w-56 gap-2">
        <div className="relative rounded-xl border-2 border-indigo bg-surface p-2.5 shadow-[0_6px_16px_rgba(99,91,255,0.18)]">
          <span className="absolute -right-2 -top-2 grid size-5 place-items-center rounded-full bg-citron text-[10px] font-bold text-ink-solid">
            1
          </span>
          <div className="flex items-center gap-2">
            <span className="grid size-5 place-items-center rounded-full bg-lilac">
              <span className="size-2 rounded-full bg-indigo" />
            </span>
            <Bar className="w-24 bg-indigo/50" />
          </div>
          <Bar className="mt-2 w-40" />
        </div>
        <div className="rounded-xl border border-line bg-surface p-2.5 opacity-60">
          <div className="flex items-center gap-2">
            <span className="size-5 rounded-full bg-line" />
            <Bar className="w-20" />
          </div>
        </div>
      </div>
    </Vignette>
  );
}

/* 2 — local SEO: a map tile with pins and the map-pack chip */
function LocalVignette() {
  return (
    <Vignette>
      <div aria-hidden className="grid-pattern absolute inset-0 opacity-70 [background-size:26px_26px]" />
      <span aria-hidden className="absolute left-[28%] top-[30%]">
        <MapsPin size={22} />
      </span>
      <span aria-hidden className="absolute right-[30%] top-[52%]">
        <MapsPin size={17} />
      </span>
      <span aria-hidden className="absolute left-[44%] bottom-[18%] size-2 rounded-full bg-indigo/60" />
      <span className="absolute right-4 top-3 rounded-full border border-line bg-surface px-2.5 py-1 text-[10px] font-semibold shadow-sm">
        Map pack <span className="text-indigo">#1</span>
      </span>
    </Vignette>
  );
}

/* 3 — AI visibility: an answer bubble citing the brand */
function AiVignette() {
  return (
    <Vignette>
      <div className="grid w-56 gap-2">
        <div className="flex justify-end">
          <span className="rounded-2xl rounded-br-md bg-indigo px-3 py-2">
            <Bar className="w-16 bg-white/70" />
          </span>
        </div>
        <div className="flex items-start gap-2">
          <span className="mt-1 grid size-6 place-items-center rounded-full border border-line bg-surface">
            <SparkleAI size={13} />
          </span>
          <span className="flex-1 rounded-2xl rounded-tl-md border border-line bg-surface px-3 py-2">
            <Bar className="w-32" />
            <span className="mt-1.5 flex items-center gap-1.5">
              <Bar className="w-10" />
              <span className="rounded-full bg-citron px-1.5 py-0.5 text-[9px] font-bold text-ink-solid">
                your brand
              </span>
              <Bar className="w-8" />
            </span>
          </span>
        </div>
      </div>
    </Vignette>
  );
}

/* 4 — recovery: traffic dips, then climbs back past the drop */
function RecoveryVignette() {
  return (
    <Vignette>
      <svg
        className="absolute inset-x-3 bottom-2 h-16 w-[calc(100%-24px)]"
        viewBox="0 0 220 64"
        preserveAspectRatio="none"
        aria-hidden
      >
        <path
          d="M0,22 C20,24 34,30 52,42 C62,49 72,52 84,50"
          fill="none"
          stroke="#C2410C"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <path
          d="M84,50 C110,46 140,32 170,20 C188,13 205,9 220,6"
          fill="none"
          stroke="#635BFF"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <circle cx="84" cy="50" r="3.5" fill="#635BFF" />
      </svg>
      <span className="absolute right-4 top-3 inline-flex items-center gap-1 rounded-full border border-line bg-surface px-2 py-0.5 text-[10px] font-semibold shadow-sm">
        <span className="size-1.5 rounded-full bg-indigo" /> recovered
      </span>
    </Vignette>
  );
}

const VIGNETTES = [SerpVignette, LocalVignette, AiVignette, RecoveryVignette];

/* ---------- bento card pieces ------------------------------------------- */

/* the tinted icon tile with a per-card accent gradient */
function IconTile({ accent, children }: { accent: number; children: React.ReactNode }) {
  return (
    <span
      className={`grid size-11 place-items-center rounded-xl bg-gradient-to-b ${ACCENTS[accent].tile} transition-transform duration-300 ease-soft group-hover:scale-110`}
    >
      {children}
    </span>
  );
}

/* small stat cell: icon + value + label, used in card stat rows */
function Stat({
  icon,
  value,
  label,
  valueClass = "text-ink",
}: {
  icon: React.ReactNode;
  value: string;
  label: string;
  valueClass?: string;
}) {
  return (
    <div className="flex items-center gap-2">
      <span className="grid size-8 shrink-0 place-items-center rounded-lg bg-lilac/70 text-indigo">
        {icon}
      </span>
      <div>
        <p className={`font-heading text-[15px] font-bold leading-none tabular-nums ${valueClass}`}>{value}</p>
        <p className="mt-1 text-[10.5px] leading-tight text-graphite">{label}</p>
      </div>
    </div>
  );
}

/* citron check chip used across the enriched illustrations */
function CheckDot({ size = 18 }: { size?: number }) {
  return (
    <span className="grid shrink-0 place-items-center rounded-full bg-citron" style={{ width: size, height: size }}>
      <svg width={size * 0.55} height={size * 0.55} viewBox="0 0 12 12" fill="none" aria-hidden>
        <path d="m2.5 6.5 2.5 2.5 4.5-5" stroke="#0B0D12" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </span>
  );
}

/* ---------- flagship: orbit + AI answer + outcome strip ------------------ */

/* the AI-answer card sitting inside two orbit rings dotted with platform
   logos — the reference's centerpiece. */
function FlagshipOrbit() {
  return (
    <div className="relative mx-auto mt-6 flex h-64 w-full max-w-md items-center justify-center">
      {/* orbit rings */}
      <span aria-hidden className="absolute size-56 rounded-full border border-dashed border-indigo/25" />
      <span aria-hidden className="absolute size-72 rounded-full border border-indigo/12" />
      <span aria-hidden className="absolute size-56 rounded-full bg-indigo/5 blur-xl" />

      {/* platform logos pinned around the rings */}
      <span aria-hidden className="absolute left-2 top-10 grid size-11 place-items-center rounded-full border border-line bg-surface shadow-[0_6px_16px_rgba(11,13,18,0.08)]">
        <ChatGPTMark size={22} />
      </span>
      <span aria-hidden className="absolute bottom-8 left-10 grid size-11 place-items-center rounded-full border border-line bg-surface shadow-[0_6px_16px_rgba(11,13,18,0.08)]">
        <GeminiMark size={22} />
      </span>
      <span aria-hidden className="absolute right-3 top-1/2 grid size-10 place-items-center rounded-full border border-line bg-surface shadow-[0_6px_16px_rgba(11,13,18,0.08)]">
        <SparkleAI size={20} />
      </span>

      {/* the question bubble */}
      <span className="absolute left-1/2 top-1 -translate-x-1/3 rounded-2xl rounded-bl-md bg-indigo px-3.5 py-2 text-[12px] font-semibold text-white shadow-[0_10px_24px_rgba(99,91,255,0.35)]">
        Best CRM for real estate?
      </span>

      {/* the AI answer card citing the brand */}
      <div className="relative z-10 w-56 rounded-2xl border border-line bg-surface p-3.5 shadow-[0_18px_44px_rgba(11,13,18,0.12)]">
        <div className="flex items-start gap-2">
          <span className="mt-0.5 grid size-6 shrink-0 place-items-center rounded-full bg-lilac">
            <SparkleAI size={13} />
          </span>
          <p className="text-[11.5px] leading-relaxed text-graphite">
            Based on reviews and features,{" "}
            <span className="rounded bg-citron/50 px-1 font-semibold text-ink-solid">
              TopAgent CRM
            </span>{" "}
            is a top choice for real estate professionals.
          </p>
        </div>
      </div>
    </div>
  );
}

/* the 4-item outcome strip beneath the flagship orbit */
const FLAGSHIP_FEATURES = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M8 3.5A4.5 4.5 0 0 0 4.8 11 4 4 0 0 0 7 18a4 4 0 0 0 8 0 4 4 0 0 0 2.2-7A4.5 4.5 0 0 0 14 3.5 3.4 3.4 0 0 0 11 2a3.4 3.4 0 0 0-3 1.5Z" />
        <path d="M11 2v18" />
      </svg>
    ),
    title: "AI Citations",
    sub: "Be seen in AI answers",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M1.5 11S4.5 5 11 5s9.5 6 9.5 6-3 6-9.5 6-9.5-6-9.5-6Z" />
        <circle cx="11" cy="11" r="2.8" />
      </svg>
    ),
    title: "More Visibility",
    sub: "Across platforms",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="8" cy="7" r="3" />
        <path d="M2.5 18c.7-3.3 2.9-5 5.5-5s4.8 1.7 5.5 5" />
        <circle cx="16.5" cy="8.5" r="2.2" />
        <path d="M14 17c.3-2.2 1.4-3.5 3-3.9" />
      </svg>
    ),
    title: "High Intent Buyers",
    sub: "At the right moment",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 15l5-5 3 3 7-7" />
        <path d="M16 6h3v3" />
      </svg>
    ),
    title: "Stronger Pipeline",
    sub: "More leads, more wins",
  },
];

function FlagshipStrip() {
  return (
    <div className="mt-auto grid grid-cols-2 gap-x-4 gap-y-5 border-t border-line/70 pt-6 sm:grid-cols-4">
      {FLAGSHIP_FEATURES.map((f) => (
        <div key={f.title} className="text-center">
          <span className="mx-auto grid size-9 place-items-center text-indigo">{f.icon}</span>
          <p className="mt-1.5 text-[12.5px] font-bold leading-tight tracking-[-0.01em]">{f.title}</p>
          <p className="mt-1 text-[10.5px] leading-tight text-graphite">{f.sub}</p>
        </div>
      ))}
    </div>
  );
}

/* ---------- local SEO: map + stat row ------------------------------------ */

function MapArt() {
  return (
    <div className="relative mt-6 h-44 overflow-hidden rounded-2xl border border-line/70 bg-ivory/60">
      {/* faint street grid */}
      <svg aria-hidden className="absolute inset-0 h-full w-full" viewBox="0 0 400 176" fill="none" preserveAspectRatio="xMidYMid slice">
        <g stroke="var(--color-line)" strokeWidth="8" opacity="0.5">
          <path d="M-10 50h420M-10 120h420M70 -10v200M200 -10v200M320 -10v200" />
        </g>
        <g stroke="var(--color-line)" strokeWidth="3" opacity="0.4">
          <path d="M-10 85h420M135 -10v200M260 -10v200" />
        </g>
        {/* dashed route between the pins */}
        <path d="M95,70 C150,40 210,55 250,95 C285,125 320,120 350,105" fill="none" stroke="var(--color-indigo)" strokeWidth="2.5" strokeDasharray="5 6" strokeLinecap="round" />
      </svg>
      {/* pulsing "you are here" dot */}
      <span aria-hidden className="absolute left-[38%] top-[54%]">
        <span className="grid size-8 place-items-center rounded-full bg-indigo/15">
          <span className="size-3.5 rounded-full bg-indigo shadow-[0_0_0_4px_rgba(99,91,255,0.18)]" />
        </span>
      </span>
      <span aria-hidden className="absolute left-[22%] top-[26%]"><MapsPin size={26} /></span>
      <span aria-hidden className="absolute right-[12%] top-[52%]"><MapsPin size={26} /></span>
      {/* map-pack chip with trophy */}
      <span className="absolute right-3 top-3 inline-flex items-center gap-1.5 rounded-full border border-line bg-surface px-2.5 py-1 text-[11px] font-semibold shadow-[0_6px_16px_rgba(11,13,18,0.08)]">
        Map pack
        <svg width="12" height="12" viewBox="0 0 20 20" fill="none" aria-hidden>
          <path d="M6 3h8v3a4 4 0 0 1-8 0V3Z" stroke="#635BFF" strokeWidth="1.5" strokeLinejoin="round" />
          <path d="M6 4H3.5v1.5A2.5 2.5 0 0 0 6 8M14 4h2.5v1.5A2.5 2.5 0 0 1 14 8M8 11h4M9 11v3M8 16h4" stroke="#635BFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </span>
    </div>
  );
}

function MapStats() {
  return (
    <div className="mt-auto grid grid-cols-3 gap-2 border-t border-line/70 pt-4">
      <Stat
        icon={<svg width="15" height="15" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M4 9 11 4l7 5v9H4V9Z" /><path d="M9 18v-5h4v5" /></svg>}
        value="2.3K+"
        label="Locations Optimized"
      />
      <Stat
        icon={<svg width="15" height="15" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M11 20s6-6.2 6-10.5a6 6 0 1 0-12 0C5 13.8 11 20 11 20Z" /><circle cx="11" cy="9.5" r="2" /></svg>}
        value="98%"
        label="Map Pack Coverage"
      />
      <Stat
        icon={<svg width="15" height="15" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M3 15l5-5 3 3 7-7" /><path d="M16 6h3v3" /></svg>}
        value="+34%"
        label="Direction Requests"
        valueClass="text-indigo"
      />
    </div>
  );
}

/* ---------- technical SEO: timeline of passing checks --------------------- */

const TECH_ROWS = [
  {
    label: "Core Web Vitals",
    icon: (
      <svg width="15" height="15" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 11h3l2-5 3 10 3-8 2 3h5" />
      </svg>
    ),
  },
  {
    label: "Crawl & Index",
    icon: (
      <svg width="15" height="15" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="12" r="4" />
        <path d="M11 5V3M11 8V6M6 12H3M19 12h-3M7.5 8.5 6 7M16 7l-1.5 1.5M7 16l-1 1.5M15 16l1 1.5" />
      </svg>
    ),
  },
  {
    label: "Structured Data",
    icon: (
      <svg width="15" height="15" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <path d="M7 6 3 11l4 5M15 6l4 5-4 5M12 4l-2 14" />
      </svg>
    ),
  },
];

function StackArt() {
  return (
    <div className="mt-6 flex flex-1 gap-3">
      {/* the vertical timeline rail */}
      <div aria-hidden className="relative flex w-4 shrink-0 flex-col items-center pt-4">
        <span className="absolute inset-y-4 w-px bg-line" />
        {TECH_ROWS.map((_, i) => (
          <span
            key={i}
            className="relative z-10 size-2.5 rounded-full border-2 border-indigo/40 bg-surface"
            style={{ marginTop: i === 0 ? 0 : "2.75rem" }}
          />
        ))}
      </div>
      {/* the check rows */}
      <div className="flex-1 space-y-2.5">
        {TECH_ROWS.map((r) => (
          <div key={r.label} className="flex items-center justify-between rounded-xl border border-line bg-surface px-3 py-2.5">
            <span className="flex items-center gap-2.5">
              <span className="grid size-6 place-items-center rounded-lg bg-lilac/70 text-indigo">{r.icon}</span>
              <span className="text-[12.5px] font-semibold">{r.label}</span>
            </span>
            <CheckDot size={20} />
          </div>
        ))}
      </div>
    </div>
  );
}

/* ---------- bottom row illustrations ------------------------------------- */

/* SEO revenue: a search bar + a ranking / potential-traffic stat card */
function RankArt() {
  return (
    <div className="mt-auto space-y-2.5 pt-5">
      {/* search bar */}
      <div className="flex items-center gap-2 rounded-xl border border-line bg-surface px-3 py-2.5 text-graphite">
        <SearchIcon />
        <span className="flex-1 text-[12px]">High intent keyword</span>
        <span className="grid size-6 place-items-center rounded-full bg-citron">
          <svg width="11" height="11" viewBox="0 0 12 12" fill="none" aria-hidden>
            <path d="M6 10V2m0 0L2.5 5.5M6 2l3.5 3.5" stroke="#0B0D12" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
      </div>
      {/* ranking + potential traffic split card */}
      <div className="flex items-center gap-3 rounded-xl border border-line bg-surface px-3 py-2.5">
        <span aria-hidden className="flex items-end gap-0.5">
          {[7, 11, 15].map((h, i) => (
            <span key={i} className={`w-1.5 rounded-sm ${i === 2 ? "bg-indigo" : "bg-lilac"}`} style={{ height: h }} />
          ))}
        </span>
        <div className="flex-1 border-l border-line pl-3">
          <p className="text-[10px] text-graphite">Ranking</p>
          <p className="font-heading text-[13px] font-bold text-ink">#1 &ndash; #3</p>
        </div>
        <div className="flex-1 border-l border-line pl-3">
          <p className="text-[10px] text-graphite">Potential Traffic</p>
          <p className="font-heading text-[13px] font-bold text-indigo">High</p>
        </div>
      </div>
    </div>
  );
}

/* recovery: dip -> recover curve with a shield badge overlapping the bottom */
function RecoveryArt() {
  return (
    <div className="relative mt-auto pb-4 pt-5">
      <div className="relative h-28 overflow-hidden rounded-xl border border-line/70 bg-ivory/60">
        <svg className="absolute inset-x-3 bottom-3 top-3 w-[calc(100%-24px)]" viewBox="0 0 240 88" preserveAspectRatio="none" aria-hidden>
          <defs>
            <linearGradient id="rec-fill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#635BFF" stopOpacity="0.16" />
              <stop offset="100%" stopColor="#635BFF" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path d="M0,70 C0,70 60,88 120,64 C180,40 240,10 240,10 L240,88 L0,88 Z" fill="url(#rec-fill)" />
          <path d="M0,30 C20,32 38,44 60,58 C72,66 84,70 96,68" fill="none" stroke="#C2410C" strokeWidth="2.5" strokeLinecap="round" vectorEffect="non-scaling-stroke" />
          <path d="M96,68 C130,62 170,36 210,20 C222,15 234,12 240,10" fill="none" stroke="#635BFF" strokeWidth="2.5" strokeLinecap="round" vectorEffect="non-scaling-stroke" />
          <circle cx="96" cy="68" r="4" fill="#635BFF" />
        </svg>
        <span className="absolute right-3 top-3 inline-flex items-center gap-1 rounded-full border border-line bg-surface px-2 py-0.5 text-[10px] font-semibold shadow-[0_4px_12px_rgba(11,13,18,0.06)]">
          <span className="size-1.5 rounded-full bg-indigo" /> Recovered
        </span>
      </div>
      {/* shield badge overlapping the bottom edge */}
      <span aria-hidden className="absolute -bottom-1 left-1/2 -translate-x-1/2">
        <span className="grid size-10 place-items-center rounded-2xl bg-gradient-to-br from-[#8F7BFF] to-indigo text-white shadow-[0_12px_28px_rgba(99,91,255,0.45)]">
          <svg width="18" height="18" viewBox="0 0 22 22" fill="none" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M11 3 4 6v5c0 4 3 6.5 7 8 4-1.5 7-4 7-8V6l-7-3Z" />
            <path d="m8 11 2 2 4-4" />
          </svg>
        </span>
      </span>
    </div>
  );
}

/* conversion: pipeline-value bar chart trending up */
function LeadsArt() {
  const bars = [34, 46, 40, 52, 66, 96];
  return (
    <div className="mt-auto rounded-xl border border-line/70 bg-ivory/60 p-4">
      <div className="flex items-center justify-between">
        <span className="text-[11.5px] font-semibold text-ink">Pipeline value</span>
        <span className="inline-flex items-center gap-1 text-[11.5px] font-bold text-indigo">
          <svg width="11" height="11" viewBox="0 0 12 12" fill="none" aria-hidden>
            <path d="M2 10 10 2m0 0H4.5M10 2v5.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          48%
        </span>
      </div>
      <div className="mt-4 flex h-16 items-end gap-2">
        {bars.map((h, i) => (
          <span
            key={i}
            className={`flex-1 rounded-t-md ${i === bars.length - 1 ? "bg-indigo" : "bg-lilac"}`}
            style={{ height: `${h}%` }}
          />
        ))}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------------ */

export default function Services() {
  return (
    <section className="relative overflow-x-clip wash-lilac-full py-16 md:py-24">
      {/* faint ribbed backdrop over the lilac wash, masked to fade at edges */}
      <div
        aria-hidden
        className="rib-pattern pointer-events-none absolute inset-0 opacity-70 [mask-image:radial-gradient(ellipse_80%_70%_at_50%_45%,#000_40%,transparent_85%)]"
      />
      <div className="relative mx-auto max-w-6xl px-6">
        <Reveal>
          <SectionHead
            badge="What We Do"
            title="Everything the Full-Surface Method covers."
            sub="Visibility problems are rarely isolated to one channel. A broken technical foundation ruins your AI citations. A messy site migration erases your keyword rankings. We fix all of it together because that is how your buyers experience it."
          />
        </Reveal>

        {/* Bento grid: 6 cols on lg. Flagship spans 3 cols x 2 rows; the two
            right cards fill those rows; the bottom three sit three-wide. */}
        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-6">
          {/* FLAGSHIP — spans 3 cols, 2 rows */}
          <Reveal variant="scale" className="sm:col-span-2 lg:col-span-3 lg:row-span-2">
            <article className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-indigo/25 bg-gradient-to-br from-lilac/70 via-surface to-surface p-7 transition-all duration-300 ease-soft hover:-translate-y-1 hover:border-indigo/45">
              <div className="flex items-center gap-3">
                <IconTile accent={0}>
                  <BotIcon />
                </IconTile>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-indigo/10 px-2.5 py-1 text-[10.5px] font-bold uppercase tracking-[0.08em] text-indigo">
                  <span className="size-1.5 rounded-full bg-indigo" /> AI-powered
                </span>
              </div>
              <h3 className="mt-5 max-w-sm font-heading text-[clamp(1.6rem,2.4vw,2rem)] font-bold leading-[1.1] tracking-[-0.02em]">
                Visibility where buyers ask <span className="text-indigo">AI</span>
              </h3>
              <p className="mt-3 max-w-sm text-[14px] leading-relaxed text-graphite">
                Get cited inside ChatGPT, AI Overviews, and answer engines, so
                you show up in the moment buyers decide, not bypassed.
              </p>
              <FlagshipOrbit />
              <FlagshipStrip />
            </article>
          </Reveal>

          {/* two illustrated cards stacked to the flagship's right */}
          <Reveal variant="scale" delay={80} className="lg:col-span-3">
            <article className={`group relative flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-surface/80 p-6 backdrop-blur-sm transition-all duration-300 ease-soft hover:-translate-y-1 hover:border-indigo/40 hover:bg-surface before:absolute before:inset-x-0 before:top-0 before:h-0.5 before:origin-left before:scale-x-0 before:transition-transform before:duration-300 group-hover:before:scale-x-100 ${ACCENTS[1].edge}`}>
              <IconTile accent={1}>
                <PinIcon />
              </IconTile>
              <h3 className="mt-5 font-heading text-[17px] font-bold leading-snug tracking-[-0.01em] transition-colors duration-300 group-hover:text-indigo">
                Local SEO that wins the map
              </h3>
              <p className="mt-2 text-[13px] leading-relaxed text-graphite">
                Own the map pack and dominate local listings across every
                location.
              </p>
              <MapArt />
              <MapStats />
            </article>
          </Reveal>
          <Reveal variant="scale" delay={140} className="lg:col-span-3">
            <article className={`group relative flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-surface/80 p-6 backdrop-blur-sm transition-all duration-300 ease-soft hover:-translate-y-1 hover:border-indigo/40 hover:bg-surface before:absolute before:inset-x-0 before:top-0 before:h-0.5 before:origin-left before:scale-x-0 before:transition-transform before:duration-300 group-hover:before:scale-x-100 ${ACCENTS[2].edge}`}>
              <IconTile accent={2}>
                <WrenchIcon />
              </IconTile>
              <h3 className="mt-5 font-heading text-[17px] font-bold leading-snug tracking-[-0.01em] transition-colors duration-300 group-hover:text-indigo">
                Technical SEO foundation
              </h3>
              <p className="mt-2 text-[13px] leading-relaxed text-graphite">
                Fix speed, crawl, indexation, and structured data so everything
                else works.
              </p>
              <StackArt />
            </article>
          </Reveal>

          {/* bottom row: revenue, recover, reporting — each illustrated */}
          <Reveal variant="scale" delay={80} className="lg:col-span-2">
            <article className={`group relative flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-surface/80 p-6 backdrop-blur-sm transition-all duration-300 ease-soft hover:-translate-y-1 hover:border-indigo/40 hover:bg-surface before:absolute before:inset-x-0 before:top-0 before:h-0.5 before:origin-left before:scale-x-0 before:transition-transform before:duration-300 group-hover:before:scale-x-100 ${ACCENTS[0].edge}`}>
              <div className="flex items-center gap-3">
                <IconTile accent={0}>
                  <SearchIcon />
                </IconTile>
                <h3 className="font-heading text-[15.5px] font-bold leading-snug tracking-[-0.01em] transition-colors duration-300 group-hover:text-indigo">
                  SEO built around revenue
                </h3>
              </div>
              <p className="mt-3 text-[13px] leading-relaxed text-graphite">
                Rank for the keywords that bring real customers, not just raw
                impressions.
              </p>
              <RankArt />
            </article>
          </Reveal>
          <Reveal variant="scale" delay={140} className="lg:col-span-2">
            <article className={`group relative flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-surface/80 p-6 backdrop-blur-sm transition-all duration-300 ease-soft hover:-translate-y-1 hover:border-indigo/40 hover:bg-surface before:absolute before:inset-x-0 before:top-0 before:h-0.5 before:origin-left before:scale-x-0 before:transition-transform before:duration-300 group-hover:before:scale-x-100 ${ACCENTS[3].edge}`}>
              <div className="flex items-center gap-3">
                <IconTile accent={3}>
                  <ShieldIcon />
                </IconTile>
                <h3 className="font-heading text-[15.5px] font-bold leading-snug tracking-[-0.01em] transition-colors duration-300 group-hover:text-indigo">
                  Recover &amp; protect traffic
                </h3>
              </div>
              <p className="mt-3 text-[13px] leading-relaxed text-graphite">
                Diagnose drops from updates or migrations and rebuild a durable
                footprint.
              </p>
              <RecoveryArt />
            </article>
          </Reveal>
          <Reveal variant="scale" delay={200} className="sm:col-span-2 lg:col-span-2">
            <article className={`group relative flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-surface/80 p-6 backdrop-blur-sm transition-all duration-300 ease-soft hover:-translate-y-1 hover:border-indigo/40 hover:bg-surface before:absolute before:inset-x-0 before:top-0 before:h-0.5 before:origin-left before:scale-x-0 before:transition-transform before:duration-300 group-hover:before:scale-x-100 ${ACCENTS[4].edge}`}>
              <div className="flex items-center gap-3">
                <IconTile accent={4}>
                  <ChartIcon />
                </IconTile>
                <h3 className="font-heading text-[15.5px] font-bold leading-snug tracking-[-0.01em] transition-colors duration-300 group-hover:text-indigo">
                  Conversion-focused reporting
                </h3>
              </div>
              <p className="mt-3 text-[13px] leading-relaxed text-graphite">
                Tie every change to leads and pipeline revenue, not vanity
                metrics.
              </p>
              <LeadsArt />
            </article>
          </Reveal>
        </div>

        <Reveal className="mt-12 text-center">
          <p className="inline-flex items-center gap-2 text-[14px] text-graphite">
            <span aria-hidden className="grid size-6 place-items-center rounded-full bg-lilac text-indigo">
              <svg width="13" height="13" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                <path d="M8 15h6M9 18h4M11 2a6 6 0 0 0-3.5 10.9c.5.4.5.8.5 1.1h6c0-.3 0-.7.5-1.1A6 6 0 0 0 11 2Z" />
              </svg>
            </span>
            Not sure which piece you need? That&apos;s what the{" "}
            <span className="font-semibold italic text-ink">visibility review</span> is for.
          </p>
          <div className="mt-4 flex justify-center">
            <CtaLink href="/#visibility-review">Request a Visibility Review</CtaLink>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* Tile shared with the /services page grid. */
export function ServiceTile({
  service,
  iconIndex = 0,
}: {
  service: Service;
  iconIndex?: number;
}) {
  const TileVignette = VIGNETTES[iconIndex % VIGNETTES.length];
  return (
    <article className="group h-full rounded-3xl border border-line bg-surface p-8 transition-all duration-300 ease-soft hover:-translate-y-1">
      <TileVignette />
      <h3 className="reveal-item font-heading text-[20px] font-bold tracking-[-0.01em] [transition-delay:190ms]">
        {service.title}
      </h3>
      <p className="reveal-item mt-2.5 text-[13.5px] leading-relaxed text-graphite [transition-delay:260ms]">
        The pain point it solves: {service.pain}
      </p>
      <ul className="reveal-item mt-5 grid gap-3 [transition-delay:330ms]">
        {service.items.map((item) => (
          <li key={item.lead} className="flex gap-2.5 text-[13.5px] leading-relaxed text-graphite">
            <svg
              className="mt-1 shrink-0 text-ink"
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              aria-hidden
            >
              <circle cx="7" cy="7" r="6.4" className="fill-lilac" />
              <path
                d="m4.4 7.2 1.8 1.8 3.4-3.6"
                stroke="#635BFF"
                strokeWidth="1.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span>
              <b className="font-semibold text-ink">{item.lead}</b> {item.text}
            </span>
          </li>
        ))}
      </ul>
    </article>
  );
}
