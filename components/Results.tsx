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
    <section id="results" className="py-16 md:py-20">
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
            <Reveal key={study.client} delay={i * 70} className="h-full">
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
      className="group flex h-full flex-col gap-4 rounded-3xl border border-line bg-surface p-7 transition-shadow duration-200 hover:shadow-[0_14px_40px_rgba(11,13,18,0.08)]"
    >
      <Badge>{study.industry}</Badge>
      <Metric value={study.metric} />
      <p className="font-heading text-[17px] font-bold leading-snug tracking-[-0.01em]">
        {study.summary.split(".")[0]}.
      </p>
      <p className="text-[13.5px] leading-relaxed text-graphite">
        {study.summary.split(".").slice(1).join(".").trim()}
      </p>
      <span className="mt-auto inline-flex items-center gap-2 pt-2 text-[13.5px] font-semibold text-ink">
        Read the case study
        <span
          aria-hidden
          className="grid size-5.5 place-items-center rounded-full bg-citron text-ink transition-transform duration-200 group-hover:translate-x-0.5"
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
