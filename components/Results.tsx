import Link from "next/link";
import Reveal from "@/components/motion/Reveal";
import { Eyebrow, CtaLink } from "@/components/ui";
import { CASE_STUDIES, type CaseStudy } from "@/lib/content";

/* Homepage shows three tiles per the doc; Darussalam is the doc's approved
   swap candidate and lives on /case-studies. Metric-first cards: the number
   is the headline. Pending [[ ]] metrics keep the dashed-chip treatment so
   nothing unverified ships as a real figure. */
const TILES = CASE_STUDIES.slice(0, 3);

function Metric({ value }: { value: string }) {
  if (value.includes("[[")) {
    return (
      <span className="inline-block self-start rounded-[10px] border border-dashed border-graphite/50 px-3 py-1.5 text-[11px] font-medium uppercase tracking-[0.1em] text-graphite">
        metric pending case study
      </span>
    );
  }
  return (
    <span className="text-[26px] font-[420] tracking-[-0.02em] tabular-nums">
      {value}
    </span>
  );
}

export default function Results() {
  return (
    <section id="results" className="border-t border-line bg-surface py-20 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <Eyebrow>Results</Eyebrow>
          <h2 className="mt-4 max-w-2xl text-[clamp(1.8rem,3.4vw,2.75rem)] font-[380] leading-[1.1] tracking-[-0.025em]">
            What this looks like when it works.
          </h2>
          <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-graphite">
            Real engagements, real numbers. Every case study shows exactly what
            we did, how we did it, and how long the process took.
          </p>
        </Reveal>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {TILES.map((study, i) => (
            <Reveal key={study.client} delay={i * 60} className="h-full">
              <ResultTile study={study} />
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-8">
          <p className="text-sm text-graphite">
            More case studies, including the ones where results took longer
            than expected.
          </p>
          <CtaLink href="/case-studies" variant="ghost" disabled>
            View all case studies
          </CtaLink>
        </Reveal>
      </div>
    </section>
  );
}

/* Light tile shared with the /case-studies grid. */
export function ResultTile({ study }: { study: CaseStudy }) {
  return (
    <Link
      href="/case-studies"
      className="group flex h-full flex-col gap-3 rounded-2xl border border-line bg-surface p-6 transition-colors duration-200 hover:border-indigo/40"
    >
      <Eyebrow>{study.industry}</Eyebrow>
      <Metric value={study.metric} />
      <p className="text-[15px] font-medium tracking-[-0.01em]">
        {study.summary.split(".")[0]}.
      </p>
      <p className="text-[13px] leading-relaxed text-graphite">
        {study.summary.split(".").slice(1).join(".").trim()}
      </p>
      <span className="mt-auto pt-2 text-[13px] font-medium text-indigo">
        Read the case study{" "}
        <span
          aria-hidden
          className="inline-block transition-transform duration-200 group-hover:translate-x-[3px]"
        >
          &rarr;
        </span>
      </span>
    </Link>
  );
}
