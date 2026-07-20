import Reveal from "@/components/motion/Reveal";
import { CtaLink, SectionHead } from "@/components/ui";
import { MapsPin, SparkleAI } from "@/components/brand-icons";
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
   backdrop. One large flagship card carries a full illustration; two mid
   cards carry small illustrative details; the rest are clean icon + text
   cards with per-card accents. The hierarchy of the layout — not a uniform
   grid — is what gives the section its editorial rhythm. */

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

/* flagship illustration: an AI answer that cites your brand */
function FlagshipArt() {
  return (
    <div className="relative mt-6 flex flex-1 items-center overflow-hidden rounded-2xl border border-line/70 bg-ivory/60 px-5 py-6">
      <div aria-hidden className="grid-pattern absolute inset-0 opacity-40 [background-size:24px_24px] [mask-image:radial-gradient(ellipse_80%_80%_at_70%_30%,#000,transparent)]" />
      <div className="relative mx-auto grid w-full max-w-xs gap-3">
        {/* the question */}
        <div className="flex justify-end">
          <span className="rounded-2xl rounded-br-md bg-indigo px-4 py-2.5 text-[12px] font-medium text-white">
            best clinics near me?
          </span>
        </div>
        {/* the AI answer citing the brand */}
        <div className="flex items-start gap-2.5">
          <span className="mt-0.5 grid size-7 shrink-0 place-items-center rounded-full border border-line bg-surface">
            <SparkleAI size={15} />
          </span>
          <span className="flex-1 rounded-2xl rounded-tl-md border border-line bg-surface px-4 py-3">
            <Bar className="w-full" />
            <span className="mt-2 flex flex-wrap items-center gap-1.5">
              <Bar className="w-12" />
              <span className="inline-flex items-center gap-1 rounded-full bg-citron px-2 py-0.5 text-[10px] font-bold text-ink-solid">
                <svg width="9" height="9" viewBox="0 0 12 12" fill="none" aria-hidden>
                  <path d="m2.5 6.5 2.5 2.5 4.5-5" stroke="#0B0D12" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                Your brand
              </span>
              <Bar className="w-9" />
            </span>
            <Bar className="mt-2 w-3/4" />
          </span>
        </div>
      </div>
    </div>
  );
}

/* mid-card illustration: a SERP with your result ranked #1 */
function RankArt() {
  return (
    <div className="relative mt-5 overflow-hidden rounded-xl border border-line/70 bg-ivory/60 p-3">
      <div className="grid gap-1.5">
        <div className="relative rounded-lg border-2 border-indigo bg-surface p-2">
          <span className="absolute -right-1.5 -top-1.5 grid size-4 place-items-center rounded-full bg-citron text-[9px] font-bold text-ink-solid">
            1
          </span>
          <div className="flex items-center gap-1.5">
            <span className="size-3.5 rounded-full bg-lilac" />
            <Bar className="w-20 bg-indigo/50" />
          </div>
          <Bar className="mt-1.5 w-28" />
        </div>
        <div className="rounded-lg border border-line bg-surface p-2 opacity-50">
          <Bar className="w-16" />
        </div>
      </div>
    </div>
  );
}

/* mid-card illustration: traffic dips, then recovers past the drop */
function RecoveryArt() {
  return (
    <div className="relative mt-5 h-20 overflow-hidden rounded-xl border border-line/70 bg-ivory/60">
      <svg className="absolute inset-x-3 bottom-2 h-14 w-[calc(100%-24px)]" viewBox="0 0 220 56" preserveAspectRatio="none" aria-hidden>
        <path d="M0,18 C20,20 34,26 52,38 C62,45 72,48 84,46" fill="none" stroke="#C2410C" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M84,46 C110,42 140,28 170,16 C188,10 205,7 220,4" fill="none" stroke="#635BFF" strokeWidth="2.5" strokeLinecap="round" />
        <circle cx="84" cy="46" r="3.5" fill="#635BFF" />
      </svg>
      <span className="absolute right-3 top-2.5 inline-flex items-center gap-1 rounded-full border border-line bg-surface px-2 py-0.5 text-[9.5px] font-semibold">
        <span className="size-1.5 rounded-full bg-indigo" /> recovered
      </span>
    </div>
  );
}

/* right-column illustration: a map tile with location pins + map-pack chip */
function MapArt() {
  return (
    <div className="relative mt-6 flex-1 overflow-hidden rounded-xl border border-line/70 bg-ivory/60">
      <div aria-hidden className="grid-pattern absolute inset-0 opacity-70 [background-size:26px_26px]" />
      {/* a faint route line weaving through */}
      <svg aria-hidden className="absolute inset-0 h-full w-full" preserveAspectRatio="none" viewBox="0 0 300 120">
        <path d="M20,90 C80,88 90,40 150,42 C210,44 220,84 285,70" fill="none" stroke="var(--color-indigo)" strokeWidth="1.5" strokeDasharray="4 5" opacity="0.4" />
      </svg>
      <span aria-hidden className="absolute left-[24%] top-[30%]"><MapsPin size={22} /></span>
      <span aria-hidden className="absolute right-[28%] top-[54%]"><MapsPin size={16} /></span>
      <span aria-hidden className="absolute left-[52%] bottom-[20%] size-2 rounded-full bg-indigo/60" />
      <span className="absolute right-3 top-3 rounded-full border border-line bg-surface px-2.5 py-1 text-[10px] font-semibold">
        Map pack <span className="text-indigo">#1</span>
      </span>
    </div>
  );
}

/* bottom-card illustration: a compact leads/pipeline bar chart trending up */
function LeadsArt() {
  const bars = [30, 44, 38, 58, 72, 90];
  return (
    <div className="mt-5 flex-1 overflow-hidden rounded-xl border border-line/70 bg-ivory/60 p-3.5">
      <div className="flex items-center justify-between">
        <span className="text-[10.5px] font-semibold text-graphite">Pipeline value</span>
        <span className="inline-flex items-center gap-1 text-[10.5px] font-bold text-indigo">
          <svg width="10" height="10" viewBox="0 0 12 12" fill="none" aria-hidden>
            <path d="M2 10 10 2m0 0H4.5M10 2v5.5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          +64%
        </span>
      </div>
      <div className="mt-3 flex h-14 items-end gap-1.5">
        {bars.map((h, i) => (
          <span
            key={i}
            className={`flex-1 rounded-t-sm ${i === bars.length - 1 ? "bg-indigo" : "bg-lilac"}`}
            style={{ height: `${h}%` }}
          />
        ))}
      </div>
    </div>
  );
}

/* right-column illustration: a stack of technical-health checks passing */
function StackArt() {
  const rows = ["Core Web Vitals", "Crawl & index", "Structured data"];
  return (
    <div className="mt-6 flex-1 space-y-2 rounded-xl border border-line/70 bg-ivory/60 p-3.5">
      {rows.map((r) => (
        <div key={r} className="flex items-center justify-between rounded-lg border border-line bg-surface px-3 py-2">
          <span className="text-[11.5px] font-medium text-graphite">{r}</span>
          <span className="grid size-4 place-items-center rounded-full bg-citron">
            <svg width="9" height="9" viewBox="0 0 12 12" fill="none" aria-hidden>
              <path d="m2.5 6.5 2.5 2.5 4.5-5" stroke="#0B0D12" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
        </div>
      ))}
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

        {/* Bento grid: 6 cols on lg so the flagship can span 3 and the
            smaller cards fall into two neat rows of three-wide equivalents. */}
        <div className="mt-12 grid auto-rows-[minmax(0,1fr)] grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-6">
          {/* FLAGSHIP — spans 3 cols, 2 rows */}
          <Reveal variant="scale" className="sm:col-span-2 lg:col-span-3 lg:row-span-2">
            <article className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-indigo/25 bg-gradient-to-br from-lilac/70 via-surface to-surface p-7 transition-all duration-300 ease-soft hover:-translate-y-1 hover:border-indigo/45">
              <div className="flex items-center gap-3">
                <IconTile accent={0}>
                  <BotIcon />
                </IconTile>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-indigo/10 px-2.5 py-1 text-[10.5px] font-bold uppercase tracking-[0.08em] text-indigo">
                  <span className="size-1.5 rounded-full bg-indigo" /> AI-ready
                </span>
              </div>
              <h3 className="mt-5 max-w-sm font-heading text-[22px] font-bold leading-tight tracking-[-0.015em] transition-colors duration-300 group-hover:text-indigo">
                Visibility where buyers ask AI
              </h3>
              <p className="mt-3 max-w-sm text-[14px] leading-relaxed text-graphite">
                Get cited inside ChatGPT, AI Overviews, and answer engines, so
                you show up in the moment buyers decide, not bypassed.
              </p>
              <FlagshipArt />
            </article>
          </Reveal>

          {/* two illustrated cards stacked to the flagship's right (rows 1 & 2);
              each carries a small illustration anchored to fill the height */}
          <Reveal variant="scale" delay={80} className="lg:col-span-3">
            <article className={`group relative flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-surface/80 p-6 backdrop-blur-sm transition-all duration-300 ease-soft hover:-translate-y-1 hover:border-indigo/40 hover:bg-surface before:absolute before:inset-x-0 before:top-0 before:h-0.5 before:origin-left before:scale-x-0 before:transition-transform before:duration-300 group-hover:before:scale-x-100 ${ACCENTS[1].edge}`}>
              <IconTile accent={1}>
                <PinIcon />
              </IconTile>
              <h3 className="mt-5 font-heading text-[16px] font-bold leading-snug tracking-[-0.01em] transition-colors duration-300 group-hover:text-indigo">
                Local SEO that wins the map
              </h3>
              <p className="mt-2 text-[13px] leading-relaxed text-graphite">
                Own the map pack and clean, consistent listings across every
                location.
              </p>
              <MapArt />
            </article>
          </Reveal>
          <Reveal variant="scale" delay={140} className="lg:col-span-3">
            <article className={`group relative flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-surface/80 p-6 backdrop-blur-sm transition-all duration-300 ease-soft hover:-translate-y-1 hover:border-indigo/40 hover:bg-surface before:absolute before:inset-x-0 before:top-0 before:h-0.5 before:origin-left before:scale-x-0 before:transition-transform before:duration-300 group-hover:before:scale-x-100 ${ACCENTS[2].edge}`}>
              <IconTile accent={2}>
                <WrenchIcon />
              </IconTile>
              <h3 className="mt-5 font-heading text-[16px] font-bold leading-snug tracking-[-0.01em] transition-colors duration-300 group-hover:text-indigo">
                Technical SEO foundation
              </h3>
              <p className="mt-2 text-[13px] leading-relaxed text-graphite">
                Fix speed, crawl, indexation, and structured data so everything
                else works.
              </p>
              <StackArt />
            </article>
          </Reveal>

          {/* bottom row: revenue (illustrated), recover (illustrated), reporting */}
          <Reveal variant="scale" delay={80} className="lg:col-span-2">
            <article className={`group relative flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-surface/80 p-6 backdrop-blur-sm transition-all duration-300 ease-soft hover:-translate-y-1 hover:border-indigo/40 hover:bg-surface before:absolute before:inset-x-0 before:top-0 before:h-0.5 before:origin-left before:scale-x-0 before:transition-transform before:duration-300 group-hover:before:scale-x-100 ${ACCENTS[0].edge}`}>
              <IconTile accent={0}>
                <SearchIcon />
              </IconTile>
              <h3 className="mt-5 font-heading text-[16px] font-bold leading-snug tracking-[-0.01em] transition-colors duration-300 group-hover:text-indigo">
                SEO built around revenue
              </h3>
              <p className="mt-2 text-[13px] leading-relaxed text-graphite">
                Rank for the keywords that bring real customers, not just raw
                impressions.
              </p>
              <RankArt />
            </article>
          </Reveal>
          <Reveal variant="scale" delay={140} className="lg:col-span-2">
            <article className={`group relative flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-surface/80 p-6 backdrop-blur-sm transition-all duration-300 ease-soft hover:-translate-y-1 hover:border-indigo/40 hover:bg-surface before:absolute before:inset-x-0 before:top-0 before:h-0.5 before:origin-left before:scale-x-0 before:transition-transform before:duration-300 group-hover:before:scale-x-100 ${ACCENTS[3].edge}`}>
              <IconTile accent={3}>
                <ShieldIcon />
              </IconTile>
              <h3 className="mt-5 font-heading text-[16px] font-bold leading-snug tracking-[-0.01em] transition-colors duration-300 group-hover:text-indigo">
                Recover &amp; protect traffic
              </h3>
              <p className="mt-2 text-[13px] leading-relaxed text-graphite">
                Diagnose drops from updates or migrations and rebuild a durable
                footprint.
              </p>
              <RecoveryArt />
            </article>
          </Reveal>
          <Reveal variant="scale" delay={200} className="sm:col-span-2 lg:col-span-2">
            <article className={`group relative flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-surface/80 p-6 backdrop-blur-sm transition-all duration-300 ease-soft hover:-translate-y-1 hover:border-indigo/40 hover:bg-surface before:absolute before:inset-x-0 before:top-0 before:h-0.5 before:origin-left before:scale-x-0 before:transition-transform before:duration-300 group-hover:before:scale-x-100 ${ACCENTS[4].edge}`}>
              <IconTile accent={4}>
                <ChartIcon />
              </IconTile>
              <h3 className="mt-5 font-heading text-[16px] font-bold leading-snug tracking-[-0.01em] transition-colors duration-300 group-hover:text-indigo">
                Conversion-focused reporting
              </h3>
              <p className="mt-2 text-[13px] leading-relaxed text-graphite">
                Tie every change to leads and pipeline revenue, not vanity
                keyword positions.
              </p>
              <LeadsArt />
            </article>
          </Reveal>
        </div>

        <Reveal className="mt-12 text-center">
          <p className="text-[14px] text-graphite">
            Not sure which piece you need? That is what the visibility review
            is for.
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
