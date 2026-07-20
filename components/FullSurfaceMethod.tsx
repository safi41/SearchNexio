"use client";

import { useEffect, useRef, useState } from "react";
import Reveal from "@/components/motion/Reveal";
import { SectionHead } from "@/components/ui";
import { GoogleG, MapsPin, SparkleAI, ChatGPTMark } from "@/components/brand-icons";
import { METHOD_STEPS } from "@/lib/content";

/* The method as a timeline: a vertical rail of steps on the left with a
   progress line that fills as you scroll, and a sticky visual panel on the
   right whose graphic switches to match the active step. */

/* ---------- step visuals (the "images" that change with the timeline) --- */

function PanelChip({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border border-line bg-surface px-3 py-1 text-[11px] font-semibold shadow-sm ${className}`}
    >
      {children}
    </span>
  );
}

/* 01 Map — the surface radar sweeping the grid */
function MapVisual() {
  return (
    <div className="relative flex h-full items-center justify-center overflow-hidden">
      <div aria-hidden className="grid-pattern absolute inset-0 opacity-70 [background-size:34px_34px]" />
      <span aria-hidden className="absolute size-56 rounded-full border border-dashed border-indigo/40" />
      <span aria-hidden className="absolute size-36 rounded-full border border-indigo/25" />
      <span aria-hidden className="absolute size-20 rounded-full border border-indigo/40" />
      <span className="relative size-4 rounded-full bg-indigo shadow-[0_0_18px_rgba(99,91,255,0.8)]" />
      <span aria-hidden className="absolute left-[26%] top-[28%] size-3 rounded-full bg-ink/50" />
      <span aria-hidden className="absolute right-[24%] top-[60%] size-3 rounded-full bg-warn/80" />
      <span aria-hidden className="absolute right-[34%] top-[22%] size-2 rounded-full bg-ink/35" />
      <span aria-hidden className="absolute left-[30%] bottom-[24%] size-2 rounded-full bg-indigo/50" />
      <PanelChip className="absolute bottom-5 left-1/2 -translate-x-1/2">
        <span className="size-1.5 rounded-full bg-warn" /> 2 invisible surfaces found
      </PanelChip>
    </div>
  );
}

/* 02 Fix — the prioritized checklist working itself down */
function FixVisual() {
  const rows = [
    { done: true, w: "w-40" },
    { done: true, w: "w-32" },
    { done: true, w: "w-36" },
    { done: false, w: "w-28" },
  ];
  return (
    <div className="relative flex h-full items-center justify-center">
      <div className="w-64 rounded-2xl border border-line bg-surface p-5 shadow-[0_14px_36px_rgba(11,13,18,0.08)]">
        <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.14em] text-graphite">
          Fix queue
        </p>
        <div className="grid gap-3">
          {rows.map((row, i) => (
            <div key={i} className="flex items-center gap-2.5">
              <span
                className={`grid size-5 shrink-0 place-items-center rounded-full ${
                  row.done ? "bg-citron" : "border border-warn/60 bg-surface"
                }`}
              >
                {row.done ? (
                  <svg width="10" height="10" viewBox="0 0 12 12" fill="none" aria-hidden>
                    <path
                      d="m2.5 6.5 2.5 2.5 4.5-5"
                      stroke="#0B0D12"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                ) : (
                  <span className="size-1.5 rounded-full bg-warn" />
                )}
              </span>
              <span className={`h-2 rounded-full bg-line ${row.w}`} />
            </div>
          ))}
        </div>
      </div>
      <PanelChip className="absolute bottom-5 left-1/2 -translate-x-1/2">
        prioritized by revenue impact
      </PanelChip>
    </div>
  );
}

/* 03 Amplify — authority radiating out to every surface */
function AmplifyVisual() {
  const marks = [
    { icon: <GoogleG size={16} />, pos: "left-[16%] top-[24%]" },
    { icon: <MapsPin size={16} />, pos: "right-[18%] top-[28%]" },
    { icon: <SparkleAI size={16} />, pos: "left-[20%] bottom-[22%]" },
    { icon: <ChatGPTMark size={16} />, pos: "right-[16%] bottom-[26%]" },
  ];
  return (
    <div className="relative flex h-full items-center justify-center overflow-hidden">
      <span aria-hidden className="absolute size-64 rounded-full border border-indigo/15" />
      <span aria-hidden className="absolute size-44 rounded-full border border-indigo/25" />
      <span aria-hidden className="absolute size-24 rounded-full border border-indigo/40" />
      <span className="relative grid size-12 place-items-center rounded-full bg-indigo shadow-[0_10px_28px_rgba(99,91,255,0.45)]">
        <svg width="20" height="20" viewBox="0 0 12 12" fill="none" aria-hidden>
          <path
            d="M6 10V2m0 0L2.5 5.5M6 2l3.5 3.5"
            stroke="#ffffff"
            strokeWidth="1.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
      {marks.map((mark, i) => (
        <span
          key={i}
          className={`absolute ${mark.pos} grid size-10 place-items-center rounded-full border border-line bg-surface shadow-[0_6px_16px_rgba(11,13,18,0.1)]`}
        >
          {mark.icon}
        </span>
      ))}
      <PanelChip className="absolute bottom-5 left-1/2 -translate-x-1/2">
        cited across every surface
      </PanelChip>
    </div>
  );
}

/* 04 Prove — the reporting curve and the numbers that moved */
function ProveVisual() {
  return (
    <div className="relative flex h-full items-center justify-center overflow-hidden">
      <svg
        className="absolute inset-x-6 bottom-6 h-40 w-[calc(100%-48px)]"
        viewBox="0 0 300 140"
        preserveAspectRatio="none"
        aria-hidden
      >
        <path
          d="M0,120 C40,116 70,106 105,94 C150,79 200,55 300,20 L300,140 L0,140 Z"
          className="fill-lilac"
          opacity="0.8"
        />
        <path
          d="M0,120 C40,116 70,106 105,94 C150,79 200,55 300,20"
          fill="none"
          stroke="#635BFF"
          strokeWidth="3"
        />
        <circle cx="300" cy="20" r="4.5" fill="#635BFF" />
      </svg>
      <div className="absolute left-6 top-6 grid gap-2">
        <PanelChip>
          Visibility 68 <span aria-hidden className="text-graphite">&rarr;</span>{" "}
          <span className="text-indigo">82</span>
        </PanelChip>
        <PanelChip>
          <svg width="9" height="9" viewBox="0 0 12 12" fill="none" aria-hidden>
            <path
              d="M6 10V2m0 0L2.5 5.5M6 2l3.5 3.5"
              stroke="#635BFF"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          +64% organic leads
        </PanelChip>
      </div>
    </div>
  );
}

const VISUALS = [MapVisual, FixVisual, AmplifyVisual, ProveVisual];

/* ---------- the timeline ------------------------------------------------ */

export default function FullSurfaceMethod() {
  const [active, setActive] = useState(0);
  const stepRefs = useRef<(HTMLLIElement | null)[]>([]);

  useEffect(() => {
    const observers = stepRefs.current.map((el, i) => {
      if (!el) return null;
      const io = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) setActive(i);
        },
        /* a step becomes active while it crosses the middle band of the viewport */
        { rootMargin: "-38% 0px -48% 0px" }
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

        <div className="mt-14 grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
          {/* the rail */}
          <Reveal variant="left">
            <ol className="relative">
              {/* base line + scroll-filled progress line */}
              <span aria-hidden className="absolute bottom-5 left-[19px] top-5 w-0.5 rounded bg-line" />
              <span
                aria-hidden
                className="absolute left-[19px] top-5 w-0.5 rounded bg-indigo transition-all duration-700 ease-soft"
                style={{ height: `calc((100% - 40px) * ${active / (METHOD_STEPS.length - 1)})` }}
              />
              {METHOD_STEPS.map((step, i) => {
                const state = i < active ? "done" : i === active ? "active" : "next";
                return (
                  <li
                    key={step.name}
                    ref={(el) => {
                      stepRefs.current[i] = el;
                    }}
                    className={`relative flex gap-5 pl-0 ${
                      i < METHOD_STEPS.length - 1 ? "pb-12" : ""
                    }`}
                  >
                    <span
                      className={`relative z-10 grid size-10 shrink-0 place-items-center rounded-full font-heading text-[14px] font-bold transition-all duration-500 ease-soft ${
                        state === "active"
                          ? "bg-indigo text-white shadow-[0_0_0_6px_var(--c-lilac)]"
                          : state === "done"
                            ? "bg-indigo text-white"
                            : "border border-line bg-surface text-graphite"
                      }`}
                    >
                      {state === "done" ? (
                        <svg width="13" height="13" viewBox="0 0 12 12" fill="none" aria-hidden>
                          <path
                            d="m2.5 6.5 2.5 2.5 4.5-5"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      ) : (
                        step.index
                      )}
                    </span>
                    <div
                      className={`pt-1 transition-opacity duration-500 ${
                        state === "next" ? "opacity-50" : "opacity-100"
                      }`}
                    >
                      <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-graphite">
                        Step {step.index}
                      </p>
                      <h3
                        className={`mt-1 font-heading text-[21px] font-bold transition-colors duration-500 ${
                          state === "active" ? "text-indigo" : "text-ink"
                        }`}
                      >
                        {step.name}
                      </h3>
                      <p className="mt-2 max-w-md text-[13.5px] leading-relaxed text-graphite">
                        {step.body}
                      </p>

                      {/* mobile: each step carries its own visual inline */}
                      <div className="mt-4 h-44 overflow-hidden rounded-2xl border border-line/70 bg-ivory/70 lg:hidden">
                        {(() => {
                          const StepVisual = VISUALS[i];
                          return <StepVisual />;
                        })()}
                      </div>
                    </div>
                  </li>
                );
              })}
            </ol>
          </Reveal>

          {/* the sticky panel: its graphic follows the active step */}
          <Reveal variant="right" className="hidden lg:block">
            <div className="sticky top-28 h-[420px]">
              <div className="relative h-full overflow-hidden rounded-[2rem] border border-line bg-surface shadow-[0_20px_50px_rgba(11,13,18,0.06)]">
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-lilac/60 to-transparent"
                />
                {VISUALS.map((StepVisual, i) => (
                  <div
                    key={i}
                    aria-hidden={active !== i}
                    className={`absolute inset-0 transition-all duration-700 ease-soft ${
                      active === i
                        ? "scale-100 opacity-100"
                        : active > i
                          ? "-translate-y-3 scale-[0.97] opacity-0"
                          : "translate-y-3 scale-[0.97] opacity-0"
                    }`}
                  >
                    <StepVisual />
                  </div>
                ))}
                <span className="absolute right-5 top-5 rounded-full bg-lilac px-3 py-1 text-[10.5px] font-semibold tracking-[0.06em] text-indigo">
                  STEP {METHOD_STEPS[active].index} / 04
                </span>
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal delay={120}>
          <p className="mx-auto mt-12 max-w-xl text-center text-[14px] leading-relaxed text-ink">
            No long-term lock-in contracts. We keep our clients by delivering
            results, not through legal commitments.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
