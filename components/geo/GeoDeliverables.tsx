import Reveal from "@/components/motion/Reveal";
import { CtaLink } from "@/components/ui";
import { DELIVERABLES } from "@/lib/geo-content";

/* What you receive: a full-bleed dark band. Header splits badge + big
   two-line headline on the left from the supporting sentence on the right;
   below, a 5-across grid of dark glass cards — icon chip, citron number,
   title, one-line description and a citron end-dash. */

/* Line icons, one per deliverable, drawn in the card's citron accent. */
const ICONS = [
  /* 01 benchmark — bar chart */
  <g key="i1">
    <path d="M4 20h16" />
    <path d="M7 20v-6M12 20V9m5 11v-8" />
    <path d="M7 11l5-4 5 2" />
  </g>,
  /* 02 prompt library — document lines */
  <g key="i2">
    <rect x="5" y="3.5" width="14" height="17" rx="2.5" />
    <path d="M8.5 8h7M8.5 12h7M8.5 16h4.5" />
  </g>,
  /* 03 competitor analysis — trend line */
  <g key="i3">
    <rect x="3.5" y="4" width="17" height="16" rx="2.5" />
    <path d="M7 15.5l3.2-3.4 2.6 2.1 4.2-4.7" />
    <path d="M14.5 9.5H17V12" />
  </g>,
  /* 04 citation report — document check */
  <g key="i4">
    <path d="M6 3.5h8.5L19 8v10a2.5 2.5 0 0 1-2.5 2.5h-10A2.5 2.5 0 0 1 4 18V6a2.5 2.5 0 0 1 2-2.5Z" />
    <path d="M14 3.5V8h5" />
    <path d="M8.5 14.5l2.2 2.2 4-4.4" />
  </g>,
  /* 05 technical readiness — gear */
  <g key="i5">
    <circle cx="12" cy="12" r="2.6" />
    <circle cx="12" cy="12" r="6" />
    <path d="M12 3.5V6M12 18v2.5M20.5 12H18M6 12H3.5M17.7 6.3 16 8M8 16l-1.7 1.7M17.7 17.7 16 16M8 8 6.3 6.3" />
  </g>,
  /* 06 content roadmap — pie chart */
  <g key="i6">
    <path d="M12 4a8 8 0 1 0 8 8h-8Z" />
    <path d="M15 3.6A8 8 0 0 1 20.4 9H15Z" />
  </g>,
  /* 07 entity gap — magnifier */
  <g key="i7">
    <circle cx="11" cy="11" r="6.5" />
    <path d="M15.8 15.8 20 20" />
  </g>,
  /* 08 authority plan — rocket */
  <g key="i8">
    <path d="M12 15c-1.5-4 0-8.5 4.5-11 .8 4.8-.5 8.6-4.5 11Z" />
    <path d="M12.6 8.6c-2.7-.4-5 .6-6.6 2.9l2.9 1M15.4 11.4c.4 2.7-.6 5-2.9 6.6l-1-2.9" />
    <path d="M7.5 16.5c-1.2.8-1.8 2.4-2 4 1.6-.2 3.2-.8 4-2" />
  </g>,
  /* 09 implementation roadmap — open book */
  <g key="i9">
    <path d="M12 6.5C10.2 5 7.6 4.5 4.5 4.8v13.4c3.1-.3 5.7.2 7.5 1.6 1.8-1.4 4.4-1.9 7.5-1.6V4.8c-3.1-.3-5.7.2-7.5 1.7Z" />
    <path d="M12 6.5v13.3" />
  </g>,
  /* 10 monthly report — clipboard chart */
  <g key="i10">
    <rect x="5" y="4.5" width="14" height="16" rx="2.5" />
    <path d="M9.5 4.5V3h5v1.5" />
    <path d="M8.5 16v-3.5M12 16V9.5M15.5 16v-5" />
  </g>,
];

function SparkGlyph({ size = 13 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden>
      <path
        d="M12 2c.4 5 5 9.6 10 10-5 .4-9.6 5-10 10-.4-5-5-9.6-10-10 5-.4 9.6-5 10-10Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default function GeoDeliverables() {
  return (
    <section className="relative overflow-hidden bg-ink-solid py-16 md:py-24">
      {/* faint vertical slabs along the right edge, echoing the reference */}
      <div aria-hidden className="pointer-events-none absolute inset-y-0 right-0 hidden w-[420px] lg:block">
        <div className="absolute right-0 top-0 h-[45%] w-24 bg-gradient-to-b from-indigo/15 to-transparent" />
        <div className="absolute right-24 top-[12%] h-[55%] w-24 bg-gradient-to-b from-indigo/10 to-transparent" />
        <div className="absolute right-48 top-0 h-[30%] w-24 bg-gradient-to-b from-indigo/5 to-transparent" />
        <div className="absolute bottom-0 right-10 h-[35%] w-24 bg-gradient-to-t from-indigo/10 to-transparent" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6">
        {/* header: badge + headline left, supporting sentence right */}
        <div className="grid items-end gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
          <Reveal variant="left">
            <span className="inline-flex items-center gap-2 rounded-full border border-citron/50 px-4 py-1.5 text-[12px] font-bold uppercase tracking-[0.1em] text-citron">
              <SparkGlyph />
              What you receive
            </span>
            <h2 className="mt-6 font-heading text-[clamp(2.1rem,4.2vw,3.3rem)] font-bold leading-[1.1] tracking-[-0.02em] text-white">
              Everything you need for
              <br />
              actionable visibility<span className="text-citron">.</span>
            </h2>
          </Reveal>
          <Reveal variant="right" delay={80}>
            <p className="max-w-sm text-[16.5px] leading-relaxed text-white/70 lg:justify-self-end">
              Every engagement is built around defined outputs rather than
              broad activity descriptions.
            </p>
          </Reveal>
        </div>

        {/* 5-across deliverable cards */}
        <div className="mt-12 grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {DELIVERABLES.map((d, i) => (
            <Reveal key={d.title} variant="up" delay={(i % 5) * 60}>
              <article className="group flex h-full flex-col rounded-xl border border-white/10 bg-white/[0.04] p-5 transition-colors duration-300 ease-soft hover:border-citron/40 hover:bg-white/[0.07]">
                <span className="grid size-14 place-items-center rounded-full border border-white/10 bg-white/[0.05] text-citron transition-transform duration-300 ease-soft group-hover:scale-110">
                  <svg
                    width="26"
                    height="26"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden
                  >
                    {ICONS[i]}
                  </svg>
                </span>
                <span className="mt-5 text-[12.5px] font-bold tabular-nums text-citron">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-2 font-heading text-[16.5px] font-bold leading-snug tracking-[-0.01em] text-white">
                  {d.title}
                </h3>
                <p className="mt-2.5 text-[13px] leading-relaxed text-white/60">
                  {d.desc}
                </p>
                <span className="mt-auto block pt-5">
                  <span className="block h-[3px] w-6 rounded-full bg-citron transition-all duration-300 ease-soft group-hover:w-10" />
                </span>
              </article>
            </Reveal>
          ))}
        </div>

        {/* contextual link to the audit (in-page anchor) */}
        <Reveal delay={80}>
          <div className="mt-12 flex justify-center">
            <CtaLink href="#visibility-audit">Start with an AI Visibility Audit</CtaLink>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
