"use client";

import { useEffect, useRef, useState } from "react";
import Reveal from "@/components/motion/Reveal";
import { SectionHead } from "@/components/ui";
import {
  GoogleG,
  MapsPin,
  SparkleAI,
  ChatGPTMark,
  GeminiMark,
  PerplexityMark,
  BingMark,
  RedditMark,
} from "@/components/brand-icons";
import { METHOD_STEPS } from "@/lib/content";

/* The method as a scroll-swap timeline (reference layout): a large panel with
   a lifestyle photo + frosted app-dock on the left, step copy on the right,
   and a numbered rail on the far right. The active step swaps as you scroll.

   Photos live in /public/method/step-0X.jpg — drop real photos over the
   gradient placeholders using the same filenames. */

/* per-step content: the photo, the platforms shown in the frosted dock, and
   two sub-features (bold label + one-line description). name/body come from
   METHOD_STEPS so the section stays in sync with the locked copy. */
const STEPS = [
  {
    image: "/method/step-01.jpg",
    lead: "See exactly where buyers can and cannot find you.",
    dock: [
      <GoogleG key="g" size={20} />,
      <MapsPin key="m" size={20} />,
      <ChatGPTMark key="c" size={20} />,
      <GeminiMark key="ge" size={20} />,
      <PerplexityMark key="p" size={20} />,
      <BingMark key="b" size={20} />,
    ],
    features: [
      { title: "Full-surface audit", desc: "Every platform your buyers use, mapped in one place." },
      { title: "Real data, not guesses", desc: "Every campaign starts from measured visibility gaps." },
    ],
  },
  {
    image: "/method/step-02.jpg",
    lead: "Clear the technical and local issues holding you back.",
    dock: [
      <GoogleG key="g" size={20} />,
      <MapsPin key="m" size={20} />,
      <BingMark key="b" size={20} />,
    ],
    features: [
      { title: "Revenue-first priority", desc: "We fix what moves pipeline before what is easy to code." },
      { title: "Technical + local cleanup", desc: "Errors, content gaps, and business data, all handled." },
    ],
  },
  {
    image: "/method/step-03.jpg",
    lead: "Build the authority that earns rankings and AI citations.",
    dock: [
      <ChatGPTMark key="c" size={20} />,
      <GeminiMark key="ge" size={20} />,
      <PerplexityMark key="p" size={20} />,
      <SparkleAI key="s" size={20} />,
      <RedditMark key="r" size={20} />,
    ],
    features: [
      { title: "Rankings that hold", desc: "Durable authority, not short-lived tactics." },
      { title: "Cited inside AI answers", desc: "Show up when buyers ask ChatGPT, Gemini, and more." },
    ],
  },
  {
    image: "/method/step-04.jpg",
    lead: "Tie every change to leads and pipeline you can measure.",
    dock: [
      <GoogleG key="g" size={20} />,
      <MapsPin key="m" size={20} />,
      <ChatGPTMark key="c" size={20} />,
      <SparkleAI key="s" size={20} />,
    ],
    features: [
      { title: "Clear reporting", desc: "See what we changed, what it cost, and what it returned." },
      { title: "Leads, not vanity metrics", desc: "Outcomes measured in pipeline, not keyword positions." },
    ],
  },
];

/* the frosted app-dock overlaid on the bottom of the photo */
function AppDock({ marks }: { marks: React.ReactNode[] }) {
  return (
    <div className="absolute inset-x-4 bottom-4 rounded-2xl border border-white/40 bg-white/25 p-3 backdrop-blur-md">
      {/* a couple of soft signal waves above the dock */}
      <svg aria-hidden className="pointer-events-none absolute -top-10 inset-x-3 h-9 w-[calc(100%-24px)]" viewBox="0 0 300 36" fill="none" preserveAspectRatio="none">
        <path d="M0,20 C60,6 100,30 150,18 C200,6 240,28 300,14" stroke="#ffffff" strokeWidth="1.5" opacity="0.7" />
        <path d="M0,28 C60,16 100,36 150,26 C200,16 240,34 300,22" stroke="#ffffff" strokeWidth="1.5" opacity="0.4" />
      </svg>
      <div className="flex items-center justify-center gap-2 sm:gap-2.5">
        {marks.map((m, i) => (
          <span
            key={i}
            className="grid size-8 place-items-center rounded-full bg-white shadow-[0_4px_12px_rgba(11,13,18,0.12)] sm:size-9"
          >
            {m}
          </span>
        ))}
      </div>
    </div>
  );
}

/* one full panel: photo + dock on the left, step copy on the right */
function StepPanel({ index }: { index: number }) {
  const step = METHOD_STEPS[index];
  const v = STEPS[index];
  return (
    <div className="grid h-full gap-8 rounded-[2rem] border border-line bg-surface p-4 md:grid-cols-2 md:p-5 lg:gap-4">
      {/* photo panel */}
      <div className="relative min-h-[320px] overflow-hidden rounded-[1.5rem] md:min-h-full">
        <img
          src={v.image}
          alt=""
          aria-hidden
          className="absolute inset-0 size-full object-cover"
        />
        <span aria-hidden className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent" />
        <AppDock marks={v.dock} />
      </div>

      {/* copy panel */}
      <div className="flex flex-col justify-center px-2 py-4 md:px-6">
        <p className="text-[12px] font-semibold uppercase tracking-[0.16em] text-indigo">
          Step {step.index}
        </p>
        <h3 className="mt-3 font-heading text-[clamp(1.7rem,2.6vw,2.3rem)] font-bold leading-[1.1] tracking-[-0.02em]">
          {step.name}
        </h3>
        <p className="mt-3 max-w-md text-[14.5px] leading-relaxed text-graphite">
          {v.lead}
        </p>

        <div className="mt-8 space-y-6">
          {v.features.map((f) => (
            <div key={f.title}>
              <h4 className="font-heading text-[17px] font-bold tracking-[-0.01em]">
                {f.title}
              </h4>
              <p className="mt-1.5 max-w-md text-[13.5px] leading-relaxed text-graphite">
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* the numbered rail on the far right */
function Rail({ active }: { active: number }) {
  return (
    <div className="relative hidden w-12 shrink-0 flex-col items-center lg:flex">
      {/* base + progress line */}
      <span aria-hidden className="absolute bottom-5 left-1/2 top-5 w-0.5 -translate-x-1/2 rounded bg-line" />
      <span
        aria-hidden
        className="absolute left-1/2 top-5 w-0.5 -translate-x-1/2 rounded bg-indigo transition-all duration-500 ease-soft"
        style={{ height: `calc((100% - 40px) * ${active / (STEPS.length - 1)})` }}
      />
      <div className="flex h-full flex-col justify-between py-0">
        {STEPS.map((_, i) => (
          <span
            key={i}
            className={`relative z-10 grid size-10 place-items-center rounded-full font-heading text-[13px] font-bold tabular-nums transition-all duration-300 ease-soft ${
              i === active
                ? "bg-indigo text-white shadow-[0_0_0_5px_var(--c-page)]"
                : i < active
                  ? "bg-indigo text-white"
                  : "border border-line bg-surface text-graphite"
            }`}
          >
            {i < active ? (
              <svg width="14" height="14" viewBox="0 0 12 12" fill="none" aria-hidden>
                <path d="m2.5 6.5 2.5 2.5 4.5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            ) : (
              METHOD_STEPS[i].index
            )}
          </span>
        ))}
      </div>
    </div>
  );
}

/* ---------- the section --------------------------------------------------- */

export default function FullSurfaceMethod() {
  const [active, setActive] = useState(0);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observers = stepRefs.current.map((el, i) => {
      if (!el) return null;
      const io = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) setActive(i);
        },
        { rootMargin: "-40% 0px -50% 0px" }
      );
      io.observe(el);
      return io;
    });
    return () => observers.forEach((io) => io?.disconnect());
  }, []);

  return (
    <section className="relative overflow-x-clip wash-lilac-full py-16 md:py-24">
      <div
        aria-hidden
        className="grid-pattern absolute left-1/2 top-8 h-64 w-[520px] -translate-x-1/2 [mask-image:radial-gradient(ellipse_70%_70%_at_50%_40%,#000_30%,transparent_75%)]"
      />
      <div className="relative mx-auto max-w-6xl px-6">
        <Reveal>
          <SectionHead
            badge="Our Methodology"
            title="The Full-Surface Method"
            sub="Most SEO focuses entirely on traditional web rankings. Our approach treats every platform your buyers use as one connected system, working through them in a set order."
          />
        </Reveal>

        {/* desktop: a sticky panel that swaps as you scroll, with the rail.
            The two columns are each tall (one screen-ish per step). The panel
            and rail are sticky at the top of their tall columns, so they stay
            pinned while spy markers spaced down the column drive the active
            step. */}
        <div className="mt-14 hidden gap-6 lg:flex">
          {/* left column: tall, holds the sticky panel + the spy markers */}
          <div className="relative flex-1" style={{ height: `${STEPS.length * 55}vh` }}>
            <div className="sticky top-24">
              <Reveal variant="scale">
                <div className="relative min-h-[480px]">
                  {STEPS.map((_, i) => (
                    <div
                      key={i}
                      aria-hidden={active !== i}
                      className={`transition-all duration-500 ease-soft ${
                        active === i
                          ? "relative opacity-100"
                          : "pointer-events-none absolute inset-0 opacity-0"
                      }`}
                    >
                      <StepPanel index={i} />
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>
            {/* spy markers spaced down the tall column; each activates its step
                as it crosses the viewport middle band */}
            <div aria-hidden className="pointer-events-none absolute inset-0">
              {STEPS.map((_, i) => (
                <div
                  key={i}
                  ref={(el) => {
                    stepRefs.current[i] = el;
                  }}
                  className="absolute inset-x-0 h-px"
                  style={{ top: `${(i / STEPS.length) * 100}%` }}
                />
              ))}
            </div>
          </div>
          {/* right column: tall too, so the rail can stay sticky alongside */}
          <div style={{ height: `${STEPS.length * 55}vh` }}>
            <div className="sticky top-24 h-[480px]">
              <Rail active={active} />
            </div>
          </div>
        </div>

        {/* mobile / tablet: every step stacked, no scroll-swap */}
        <div className="mt-12 space-y-6 lg:hidden">
          {STEPS.map((_, i) => (
            <Reveal key={i} variant="up" delay={i * 40}>
              <StepPanel index={i} />
            </Reveal>
          ))}
        </div>

        <Reveal delay={120}>
          <p className="mx-auto mt-14 max-w-xl text-center text-[14px] leading-relaxed text-ink">
            No long-term lock-in contracts. We keep our clients by delivering
            results, not through legal commitments.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
