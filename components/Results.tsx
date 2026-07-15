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
        const intro = ref.current!.querySelector<HTMLElement>("[data-results-intro]");
        const track = ref.current!.querySelector<HTMLElement>("[data-results-track]");
        const progress = ref.current!.querySelector<HTMLElement>("[data-results-progress]");
        if (!intro || !track) return;
        const cards = gsap.utils.toArray<HTMLElement>("[data-results-card]", track);

        /* JS is driving the track now: switch it from a native horizontal
           scroller (the touch/no-JS fallback) to a GSAP-translated one */
        gsap.set(track, { overflow: "visible" });
        /* later cards stay hidden until the horizontal act reveals them */
        gsap.set(cards.slice(1), { autoAlpha: 0, y: 40 });

        const travel = () => Math.max(0, track.scrollWidth - track.clientWidth);
        /* scroll length: a push-in beat up front (intro leaves, card one
           arrives), the horizontal travel, then a curtain beat that hands
           off horizontally to the Methodology section */
        const PUSH = () => window.innerHeight * 0.9;
        const CURTAIN = () => window.innerHeight * 0.8;

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: ref.current,
            start: "top top",
            end: () => `+=${PUSH() + travel() + CURTAIN()}`,
            scrub: 0.8,
            pin: true,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
        });

        const total = PUSH() + travel() + CURTAIN();
        const push = PUSH() / total;
        const trav = travel() / total;
        const curt = CURTAIN() / total;

        /* act one — the intro owns the whole screen. as you scroll, card one
           flies in from the bottom-right and pushes the intro up and out. */
        tl.fromTo(
          cards[0],
          { xPercent: 70, yPercent: 85, autoAlpha: 0 },
          { xPercent: 0, yPercent: 0, autoAlpha: 1, ease: "power2.out", duration: push },
          0
        );
        tl.to(
          intro,
          { yPercent: -55, autoAlpha: 0, ease: "power2.in", duration: push * 0.85 },
          push * 0.05
        );

        /* act two — card one holds the screen and the track slides left, each
           later card lifting in as the travel brings it into the frame.
           reveals are sequenced on the main timeline (not containerAnimation
           triggers) so the wide cards can't pre-pass their thresholds and
           show up during the full-screen intro. */
        tl.to(track, { x: () => -travel(), ease: "none", duration: trav }, push);
        cards.slice(1).forEach((card, i) => {
          tl.fromTo(
            card,
            { autoAlpha: 0, y: 40 },
            { autoAlpha: 1, y: 0, ease: "power2.out", duration: trav * 0.3 },
            push + trav * (0.02 + i * 0.4)
          );
        });

        /* the progress rail tracks the card journey only; it is full by the
           time the curtain starts */
        if (progress) {
          tl.fromTo(
            progress,
            { scaleX: 0 },
            { scaleX: 1, ease: "none", duration: push + trav },
            0
          );
        }

        /* act three — the handoff: paper curtain slats sweep in from the
           right (rightmost leading), covering the dark act in the Methodology
           section's own background; its name fades up on the curtain, then
           the pin releases onto matching paper below — an invisible seam */
        const slats = gsap.utils.toArray<HTMLElement>("[data-curtain-slat]", ref.current!);
        tl.to(
          slats,
          {
            scaleX: 1,
            ease: "none",
            duration: curt * 0.6,
            stagger: { each: curt * 0.07, from: "end" },
          },
          push + trav
        );
        tl.fromTo(
          "[data-curtain-label]",
          { autoAlpha: 0, x: 32 },
          { autoAlpha: 1, x: 0, ease: "power2.out", duration: curt * 0.3 },
          push + trav + curt * 0.6
        );

        /* leaving this breakpoint (e.g. resize to mobile): hand the track back
           to native scrolling and clear the transforms */
        return () => {
          gsap.set(track, { overflow: "", x: 0 });
          gsap.set([intro, ...cards], { clearProps: "transform,opacity,visibility" });
          gsap.set(slats, { clearProps: "transform" });
          gsap.set("[data-curtain-label]", { clearProps: "transform,opacity,visibility" });
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

      {/* the handoff curtain: paper slats that sweep in from the right after
          the last card, carrying the next act's name. slats ship scaled to
          zero so they never cover the section without the timeline. */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-20 hidden md:block"
      >
        <div className="absolute inset-0 flex">
          {Array.from({ length: 6 }).map((_, i) => (
            <span
              key={i}
              data-curtain-slat
              className="h-full flex-1 origin-right border-l border-line bg-paper"
              style={{ transform: "scaleX(0)" }}
            />
          ))}
        </div>
        <div
          data-curtain-label
          className="absolute inset-0 flex items-center px-[8vw] opacity-0"
        >
          <p className="font-mono text-xs uppercase tracking-[0.35em] text-teal">
            <span className="mr-3 text-copper">+</span>Our Methodology
          </p>
        </div>
      </div>

      {/* desktop: two full-screen layers inside the pinned viewport. the intro
          owns the screen first; card one flies in from the bottom-right and
          pushes it up and out; the remaining cards then ride the horizontal
          track. on touch/reduced-motion the layers stack in normal flow. */}
      <div className="relative md:h-svh">
        {/* act one — the intro covers the whole screen */}
        <div
          data-results-intro
          className="px-6 pt-24 pb-10 md:absolute md:inset-0 md:flex md:flex-col md:justify-center md:px-[8vw] md:py-0"
        >
          <p className="font-mono text-xs uppercase tracking-[0.35em] text-sage">
            Results
          </p>
          <h2 className="mt-6 font-display text-4xl font-medium leading-[1.05] tracking-[-0.01em] md:text-7xl">
            Results
          </h2>
          <p className="mt-6 max-w-md leading-relaxed text-paper/65">
            What this looks like when it works. Real engagements, real numbers.
            Every case study shows exactly what we did, how we did it, and how
            long the process took.
          </p>
          <p className="mt-6 max-w-md text-paper/55">
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
            className="mt-8 hidden font-mono text-[10px] uppercase tracking-[0.2em] text-paper/35 md:block"
          >
            Scroll to explore &rarr;
          </p>
        </div>

        {/* act two — the card track fills the same screen; card one pushes the
            intro away, the rest scroll horizontally. touch scrolls natively. */}
        <div
          data-results-track
          className="flex snap-x snap-mandatory gap-6 overflow-x-auto px-6 pb-24 md:absolute md:inset-0 md:items-center md:gap-8 md:overflow-visible md:px-[8vw] md:pb-0"
        >
          {TILES.map((study) => (
            <ResultCard key={study.client} study={study} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ResultCard({ study }: { study: CaseStudy }) {
  return (
    <Link
      href="/case-studies"
      data-results-card
      className="group flex w-[82vw] shrink-0 snap-start flex-col gap-3 border border-paper/15 bg-paper/3 p-7 transition-colors duration-500 hover:border-sage/50 md:h-[64vh] md:w-[52vw] md:gap-4 md:p-10"
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
