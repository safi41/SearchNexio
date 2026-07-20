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

/* Reference-style feature grid: 3 columns of compact cards, each with a
   tinted icon tile, title, and one-line description, over a faint ribbed
   backdrop. The hovered card lifts and gets a highlighted border. */

/* Six capability cards, drawn from the service copy. The first four map to
   the real SERVICES; the last two are the cross-cutting capabilities named
   in the service item lists. */
const FEATURES = [
  {
    icon: <SearchIcon />,
    title: "SEO built around revenue",
    desc: "Rank for the keywords that bring real customers, not just raw impressions.",
  },
  {
    icon: <PinIcon />,
    title: "Local SEO that wins the map",
    desc: "Own the map pack and clean, consistent listings across every location.",
  },
  {
    icon: <BotIcon />,
    title: "Visibility where buyers ask AI",
    desc: "Get cited inside ChatGPT, AI Overviews, and answer engines, not bypassed.",
  },
  {
    icon: <ShieldIcon />,
    title: "Recover & protect traffic",
    desc: "Diagnose drops from updates or migrations and rebuild a durable footprint.",
  },
  {
    icon: <WrenchIcon />,
    title: "Technical SEO foundation",
    desc: "Fix speed, crawl, indexation, and structured data so everything else works.",
  },
  {
    icon: <ChartIcon />,
    title: "Conversion-focused reporting",
    desc: "Tie every change to leads and pipeline revenue, not vanity keyword positions.",
  },
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

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((f, i) => (
            <Reveal
              key={f.title}
              variant="scale"
              delay={(i % 3) * 60}
              className="h-full"
            >
              <article className="group h-full rounded-2xl border border-line bg-surface/80 p-6 backdrop-blur-sm transition-all duration-300 ease-soft hover:-translate-y-1 hover:border-indigo/50 hover:bg-surface hover:shadow-[0_16px_44px_rgba(99,91,255,0.14)]">
                <span className="grid size-12 place-items-center rounded-xl bg-gradient-to-b from-lilac to-lilac/40 text-indigo transition-transform duration-300 ease-soft group-hover:scale-110">
                  {f.icon}
                </span>
                <h3 className="mt-5 font-heading text-[16.5px] font-bold leading-snug tracking-[-0.01em] transition-colors duration-300 group-hover:text-indigo">
                  {f.title}
                </h3>
                <p className="mt-2.5 text-[13.5px] leading-relaxed text-graphite">
                  {f.desc}
                </p>
              </article>
            </Reveal>
          ))}
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
    <article className="group h-full rounded-3xl border border-line bg-surface p-8 transition-all duration-300 ease-soft hover:-translate-y-1 hover:shadow-[0_14px_40px_rgba(11,13,18,0.08)]">
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
