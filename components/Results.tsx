import Link from "next/link";
import Reveal from "@/components/motion/Reveal";
import { CtaLink, SectionHead, Badge } from "@/components/ui";
import { CASE_STUDIES, type CaseStudy } from "@/lib/content";

/* Homepage shows three tiles per the doc; Darussalam is the doc's approved
   swap candidate and lives on /case-studies. Pending [[ ]] metrics keep the
   dashed-chip treatment so nothing unverified ships as a real figure. */
const TILES = CASE_STUDIES.slice(0, 3);

function Metric({ value }: { value: string }) {
  if (value.includes("[[")) {
    return (
      <span className="inline-block self-start rounded-full border border-dashed border-graphite/50 px-3.5 py-1.5 text-[10.5px] font-semibold uppercase tracking-[0.08em] text-graphite">
        metric pending case study
      </span>
    );
  }
  return (
    <span className="font-heading text-[30px] font-bold tabular-nums tracking-[-0.02em]">
      {value}
    </span>
  );
}

export default function Results() {
  return (
    <section id="results" className="overflow-x-clip py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <SectionHead
            badge="Results"
            title="What this looks like when it works."
            sub="Real engagements, real numbers. Every case study shows exactly what we did, how we did it, and how long the process took."
          />
        </Reveal>
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {TILES.map((study, i) => (
            <Reveal
              key={study.client}
              variant={(["left", "scale", "right"] as const)[i]}
              className="h-full"
            >
              <ResultTile study={study} />
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-10 text-center">
          <p className="text-[14px] text-graphite">
            More case studies, including the ones where results took longer
            than expected.
          </p>
          <div className="mt-4 flex justify-center">
            <CtaLink href="/case-studies" variant="ghost" disabled>
              View all case studies
            </CtaLink>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* Tile shared with the /case-studies grid. */
export function ResultTile({ study }: { study: CaseStudy }) {
  return (
    <Link
      href="/case-studies"
      className="group flex h-full flex-col gap-4 rounded-3xl border border-line bg-surface p-7 transition-all duration-300 ease-soft hover:-translate-y-1 hover:shadow-[0_14px_40px_rgba(11,13,18,0.08)]"
    >
      {/* growth sparkline header, same language as the hero dashboard */}
      <div className="reveal-item relative -mx-1 h-14 overflow-hidden rounded-xl border border-line/70 bg-ivory/70 [transition-delay:60ms]">
        <svg
          className="absolute inset-x-2 bottom-1 h-10 w-[calc(100%-16px)]"
          viewBox="0 0 200 40"
          preserveAspectRatio="none"
          aria-hidden
        >
          <path
            d="M0,34 C25,32 45,28 70,24 C105,18 140,13 200,5 L200,40 L0,40 Z"
            className="fill-lilac"
            opacity="0.8"
          />
          <path
            d="M0,34 C25,32 45,28 70,24 C105,18 140,13 200,5"
            fill="none"
            stroke="#635BFF"
            strokeWidth="2"
          />
          <circle cx="200" cy="5" r="3" fill="#635BFF" />
        </svg>
      </div>
      <span className="reveal-item self-start [transition-delay:120ms]">
        <Badge>{study.industry}</Badge>
      </span>
      <span className="reveal-item self-start [transition-delay:170ms]">
        <Metric value={study.metric} />
      </span>
      <p className="reveal-item font-heading text-[17px] font-bold leading-snug tracking-[-0.01em] [transition-delay:240ms]">
        {study.summary.split(".")[0]}.
      </p>
      <p className="reveal-item text-[13.5px] leading-relaxed text-graphite [transition-delay:310ms]">
        {study.summary.split(".").slice(1).join(".").trim()}
      </p>
      <span className="reveal-item mt-auto inline-flex items-center gap-2 pt-2 text-[13.5px] font-semibold text-ink [transition-delay:380ms]">
        Read the case study
        <span
          aria-hidden
          className="grid size-5.5 place-items-center rounded-full bg-indigo text-white transition-transform duration-200 group-hover:translate-x-0.5"
        >
          <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
            <path
              d="M2 6h8m0 0L6.5 2.5M10 6l-3.5 3.5"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </span>
    </Link>
  );
}
