"use client";

import Link from "next/link";
import { MaskedHeading, Reveal } from "@/components/motion/primitives";
import { TiltCard } from "@/components/motion/interactive";
import { CtaLink, Eyebrow } from "@/components/ui";
import { CASE_STUDIES, type CaseStudy } from "@/lib/content";

/* Homepage shows three tiles per the doc; Darussalam is the doc's approved
   swap candidate and lives on /case-studies. */
const TILES = CASE_STUDIES.slice(0, 3);

export default function Results() {
  return (
    <section id="results" className="mx-auto max-w-6xl px-6 py-28 md:py-36">
      <Reveal>
        <Eyebrow>Results</Eyebrow>
      </Reveal>
      <MaskedHeading
        className="mt-8 font-display text-4xl font-medium leading-[1.05] tracking-[-0.01em] md:text-6xl"
        lines={["Results"]}
      />
      <Reveal delay={0.15}>
        <p className="mt-6 max-w-2xl leading-relaxed text-ink/65">
          What this looks like when it works. Real engagements, real numbers.
          Every case study shows exactly what we did, how we did it, and how
          long the process took.
        </p>
      </Reveal>

      <div className="mt-14 grid gap-5 md:grid-cols-3 md:auto-rows-fr">
        {TILES.map((study, i) => (
          <Reveal
            key={study.client}
            delay={i * 0.12}
            className={study.featured ? "md:col-span-2 md:row-span-2" : ""}
          >
            <ResultTile study={study} />
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.2} className="mt-12">
        <p className="text-ink/60">
          More case studies, including the ones where results took longer than
          expected.
        </p>
        <div className="mt-2">
          <CtaLink href="/case-studies" variant="ghost">
            View all case studies
          </CtaLink>
        </div>
      </Reveal>
    </section>
  );
}

export function ResultTile({ study }: { study: CaseStudy }) {
  return (
    <TiltCard className="h-full">
      <Link
        href="/case-studies"
        className="group flex h-full flex-col gap-4 border border-line bg-surface p-8 transition-colors duration-500 hover:border-copper/45"
      >
        <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-teal">
          {study.client} &middot; {study.industry}
        </p>
        <span className="self-start border border-dashed border-copper/60 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.12em] text-copper">
          {study.metric}
        </span>
        <p
          className={`font-display font-medium tracking-tight ${
            study.featured ? "text-3xl" : "text-xl"
          }`}
        >
          {study.summary.split(".")[0]}.
        </p>
        <p className="text-sm leading-relaxed text-ink/65">
          {study.summary.split(".").slice(1).join(".").trim()}
        </p>
        <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-ink/40">
          {study.duration}
        </p>
        <span className="mt-auto pt-2 text-sm font-semibold text-teal">
          Read the case study{" "}
          <span
            aria-hidden
            className="inline-block transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-1"
          >
            &rarr;
          </span>
        </span>
      </Link>
    </TiltCard>
  );
}
