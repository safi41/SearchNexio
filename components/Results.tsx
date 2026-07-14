"use client";

import { useRef } from "react";
import Link from "next/link";
import { gsap, useGSAP, ScrollTrigger, MOTION_OK } from "@/components/motion/gsap";
import { TiltCard } from "@/components/motion/interactive";
import { CtaLink } from "@/components/ui";
import { CASE_STUDIES, type CaseStudy } from "@/lib/content";

/* Homepage shows three tiles per the doc; Darussalam is the doc's approved
   swap candidate and lives on /case-studies. */
const TILES = CASE_STUDIES.slice(0, 3);

/* Dark act: the results ride a horizontal track. On desktop the section pins
   and vertical scroll is remapped to horizontal travel — an intro panel first,
   then each case study slides through the frame. On touch it's a native swipe;
   reduced-motion gets a plain dark stack. */
export default function Results() {
  const ref = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add(`${MOTION_OK} and (min-width: 900px)`, () => {
        const track = ref.current!.querySelector<HTMLElement>("[data-results-track]");
        const progress = ref.current!.querySelector<HTMLElement>("[data-results-progress]");
        if (!track) return;

        /* JS is driving the track now: switch it from a native horizontal
           scroller (the touch/no-JS fallback) to a GSAP-translated one */
        gsap.set(track, { overflow: "visible" });

        /* distance the track must travel left so its right edge reaches the
           viewport's right edge */
        const travel = () => Math.max(0, track.scrollWidth - window.innerWidth);

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: ref.current,
            start: "top top",
            end: () => `+=${travel()}`,
            scrub: 0.8,
            pin: true,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
        });

        tl.to(track, { x: () => -travel(), ease: "none" }, 0);
        if (progress) {
          tl.fromTo(progress, { scaleX: 0 }, { scaleX: 1, ease: "none" }, 0);
        }

        /* each card lifts slightly as it enters the frame, reversing on the
           way out, so the track reads as a sequence rather than one slab */
        gsap.utils.toArray<HTMLElement>("[data-results-card]", track).forEach((card) => {
          gsap.fromTo(
            card,
            { autoAlpha: 0.55, y: 24 },
            {
              autoAlpha: 1,
              y: 0,
              ease: "none",
              scrollTrigger: {
                trigger: card,
                containerAnimation: tl,
                start: "left 85%",
                end: "left 45%",
                scrub: true,
              },
            }
          );
        });

        /* leaving this breakpoint (e.g. resize to mobile): hand the track back
           to native scrolling and clear the transform */
        return () => {
          gsap.set(track, { overflow: "", x: 0 });
        };
      });
    },
    { scope: ref }
  );

  return (
    <section
      ref={ref}
      id="results"
      className="relative overflow-hidden bg-ink text-paper"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(55rem 40rem at 12% 100%, rgba(110,139,106,0.1), transparent 60%)",
        }}
      />

      {/* horizontal scroll progress rail, filled as the track travels */}
      <span
        aria-hidden
        className="absolute inset-x-0 top-0 z-10 h-px bg-paper/10"
      >
        <span
          data-results-progress
          className="block h-full origin-left scale-x-0 bg-sage"
          style={{ boxShadow: "0 0 10px 1px rgba(110,139,106,0.5)" }}
        />
      </span>

      {/* the track: on desktop it's translated by GSAP; on touch it scrolls
          natively (overflow-x + snap); reduced-motion wraps to a stack */}
      <div
        data-results-track
        className="flex snap-x snap-mandatory gap-6 overflow-x-auto px-6 py-24 md:min-h-svh md:flex-nowrap md:items-center md:gap-8 md:px-[8vw] md:py-0"
      >
        {/* intro panel */}
        <div className="w-[82vw] shrink-0 snap-start md:w-[34vw]">
          <p className="font-mono text-xs uppercase tracking-[0.35em] text-sage">
            Results
          </p>
          <h2 className="mt-8 font-display text-4xl font-medium leading-[1.05] tracking-[-0.01em] md:text-6xl">
            Results
          </h2>
          <p className="mt-6 max-w-md leading-relaxed text-paper/65">
            What this looks like when it works. Real engagements, real numbers.
            Every case study shows exactly what we did, how we did it, and how
            long the process took.
          </p>
          <p className="mt-8 text-paper/55">
            More case studies, including the ones where results took longer than
            expected.
          </p>
          <div className="mt-3">
            <CtaLink href="/case-studies" variant="ghost">
              View all case studies
            </CtaLink>
          </div>
          <p
            aria-hidden
            className="mt-10 hidden font-mono text-[10px] uppercase tracking-[0.2em] text-paper/35 md:block"
          >
            Scroll to explore &rarr;
          </p>
        </div>

        {TILES.map((study) => (
          <ResultCard key={study.client} study={study} />
        ))}
      </div>
    </section>
  );
}

function ResultCard({ study }: { study: CaseStudy }) {
  return (
    <Link
      href="/case-studies"
      data-results-card
      className="group flex w-[82vw] shrink-0 snap-start flex-col gap-4 border border-paper/15 bg-paper/3 p-8 transition-colors duration-500 hover:border-sage/50 md:h-[62vh] md:w-[40vw]"
    >
      <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-sage">
        {study.client} &middot; {study.industry}
      </p>
      <span className="self-start border border-dashed border-copper/60 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.12em] text-copper">
        {study.metric}
      </span>
      <p className="font-display text-2xl font-medium tracking-tight md:text-3xl">
        {study.summary.split(".")[0]}.
      </p>
      <p className="text-sm leading-relaxed text-paper/60">
        {study.summary.split(".").slice(1).join(".").trim()}
      </p>
      <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-paper/40">
        {study.duration}
      </p>
      <span className="mt-auto pt-2 text-sm font-semibold text-sage">
        Read the case study{" "}
        <span
          aria-hidden
          className="inline-block transition-transform duration-500 ease-soft group-hover:translate-x-1"
        >
          &rarr;
        </span>
      </span>
    </Link>
  );
}

/* Light tile used by the /case-studies grid (a paper page). Kept as the
   named export CaseStudyGrid depends on; the homepage uses the dark
   ResultCard above instead. */
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
            className="inline-block transition-transform duration-500 ease-soft group-hover:translate-x-1"
          >
            &rarr;
          </span>
        </span>
      </Link>
    </TiltCard>
  );
}
