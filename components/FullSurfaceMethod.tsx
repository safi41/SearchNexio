"use client";

import { useEffect, useRef, useState } from "react";
import Reveal from "@/components/motion/Reveal";
import { SectionHead } from "@/components/ui";
import { METHOD_STEPS } from "@/lib/content";

/* The method as a timeline: a vertical rail of steps on the left with a
   progress line that fills as you scroll, and a sticky visual panel on the
   right whose 3D illustration switches to match the active step. */

/* ---------- step visuals (the "images" that change with the timeline) ---
   Each step is a soft 3D illustration in the site's indigo/violet palette:
   a map + pin, a code-cleanup laptop, a growth chart + target, and a report
   with a check badge. */

/* Bare frame: no card chrome, just centers the illustration. */
function Screen({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-full flex-col">
      <div className="relative flex-1 py-4">{children}</div>
    </div>
  );
}

/* soft floating ground shadow under a 3D illustration */
function FloorShadow({ className = "" }: { className?: string }) {
  return (
    <span
      aria-hidden
      className={`absolute left-1/2 -translate-x-1/2 rounded-[50%] bg-indigo/20 blur-md ${className}`}
    />
  );
}

/* 01 Map — a 3D isometric map tile with a glossy location pin dropped on it. */
function MapVisual() {
  return (
    <Screen>
      <div className="flex h-full items-center justify-center">
        <div className="relative h-52 w-64">
          <FloorShadow className="bottom-4 h-4 w-40" />
          <svg viewBox="0 0 280 220" fill="none" className="absolute inset-0 size-full drop-shadow-[0_18px_30px_rgba(99,91,255,0.25)]" aria-hidden>
            <defs>
              <linearGradient id="map-face" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#EEEBFF" />
                <stop offset="100%" stopColor="#D9D2FF" />
              </linearGradient>
              <linearGradient id="map-side" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#C3B9FA" />
                <stop offset="100%" stopColor="#A99CF2" />
              </linearGradient>
              <linearGradient id="pin-grad" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#8F7BFF" />
                <stop offset="100%" stopColor="#4A43D9" />
              </linearGradient>
            </defs>
            {/* isometric map slab: top face + thin extruded side */}
            <path d="M140 44 262 110 140 176 18 110Z" fill="url(#map-side)" transform="translate(0 12)" />
            <path d="M140 44 262 110 140 176 18 110Z" fill="url(#map-face)" />
            {/* roads on the map top */}
            <g stroke="#B9AEF5" strokeWidth="4" strokeLinecap="round" opacity="0.85">
              <path d="M70 96 140 60 M140 60 205 96 M96 140 168 100 M112 150 190 108" />
            </g>
            <g stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeDasharray="1 9" opacity="0.9">
              <path d="M70 96 205 132" />
            </g>
            {/* a couple of building blocks */}
            <path d="M92 104 108 96 116 100 100 108Z" fill="#fff" opacity="0.7" />
            <path d="M176 118 192 110 200 114 184 122Z" fill="#fff" opacity="0.7" />
          </svg>
          {/* the glossy 3D pin */}
          <svg viewBox="0 0 80 110" className="absolute left-1/2 top-2 h-32 -translate-x-1/2 drop-shadow-[0_14px_20px_rgba(74,67,217,0.45)]" aria-hidden>
            <path d="M40 4C21 4 6 19 6 38c0 24 34 64 34 64s34-40 34-64C74 19 59 4 40 4Z" fill="url(#pin-grad)" />
            <circle cx="40" cy="37" r="13" fill="#fff" />
            <ellipse cx="32" cy="24" rx="9" ry="5" fill="#fff" opacity="0.35" />
          </svg>
        </div>
      </div>
    </Screen>
  );
}

/* 02 Fix — a 3D laptop showing code being swept clean by a broom. */
function FixVisual() {
  return (
    <Screen>
      <div className="flex h-full items-center justify-center">
        <div className="relative h-52 w-64">
          <FloorShadow className="bottom-3 h-4 w-44" />
          <svg viewBox="0 0 280 200" fill="none" className="absolute inset-0 size-full drop-shadow-[0_18px_30px_rgba(99,91,255,0.25)]" aria-hidden>
            <defs>
              <linearGradient id="lap-screen" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#F1EEFF" />
                <stop offset="100%" stopColor="#E0DAFF" />
              </linearGradient>
              <linearGradient id="lap-base" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#C7BEF8" />
                <stop offset="100%" stopColor="#A89BF0" />
              </linearGradient>
              <linearGradient id="broom-h" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#8F7BFF" />
                <stop offset="100%" stopColor="#4A43D9" />
              </linearGradient>
            </defs>
            {/* laptop lid + screen */}
            <rect x="52" y="24" width="176" height="116" rx="12" fill="#B7ACF3" />
            <rect x="60" y="32" width="160" height="100" rx="8" fill="url(#lap-screen)" />
            {/* code lines on screen (left half tidy, right half messy fading) */}
            <g strokeLinecap="round" strokeWidth="4">
              <path d="M74 50h40" stroke="#8F7BFF" />
              <path d="M74 64h64" stroke="#C6BDF6" />
              <path d="M74 78h30" stroke="#8F7BFF" />
              <path d="M74 92h52" stroke="#C6BDF6" />
              <path d="M74 106h34" stroke="#8F7BFF" />
            </g>
            {/* laptop base */}
            <path d="M40 140h200l16 22H24Z" fill="url(#lap-base)" />
            <rect x="118" y="146" width="44" height="6" rx="3" fill="#fff" opacity="0.7" />
          </svg>
          {/* the broom sweeping, with sparkle bits */}
          <svg viewBox="0 0 120 130" className="absolute -right-2 top-0 h-40 drop-shadow-[0_12px_18px_rgba(74,67,217,0.4)]" aria-hidden>
            <rect x="70" y="8" width="9" height="66" rx="4.5" fill="#4A43D9" transform="rotate(28 74 40)" />
            <path d="M40 78 78 58l20 30c-8 10-24 16-38 12-8-2-14-9-20-22Z" fill="url(#broom-h)" />
            <g stroke="#fff" strokeWidth="2" strokeLinecap="round" opacity="0.85">
              <path d="M52 92l6 12M64 86l6 13M76 80l6 12" />
            </g>
          </svg>
          {/* citron sparkle "cleaned" marks */}
          <span className="absolute right-6 top-2 text-citron-deep">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden><path d="M12 2l1.6 5.4L19 9l-5.4 1.6L12 16l-1.6-5.4L5 9l5.4-1.6Z" /></svg>
          </span>
          <span className="absolute right-1 top-14 text-citron-deep">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" aria-hidden><path d="M12 2l1.6 5.4L19 9l-5.4 1.6L12 16l-1.6-5.4L5 9l5.4-1.6Z" /></svg>
          </span>
        </div>
      </div>
    </Screen>
  );
}

/* 03 Amplify — a 3D growth bar chart with a rising arrow and a target. */
function AmplifyVisual() {
  const bars = [
    { x: 40, h: 40 },
    { x: 84, h: 66 },
    { x: 128, h: 92 },
    { x: 172, h: 124 },
  ];
  return (
    <Screen>
      <div className="flex h-full items-center justify-center">
        <div className="relative h-52 w-64">
          <FloorShadow className="bottom-3 h-4 w-44" />
          <svg viewBox="0 0 280 200" fill="none" className="absolute inset-0 size-full drop-shadow-[0_18px_30px_rgba(99,91,255,0.25)]" aria-hidden>
            <defs>
              <linearGradient id="bar-face" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#8F7BFF" />
                <stop offset="100%" stopColor="#635BFF" />
              </linearGradient>
              <linearGradient id="bar-top" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#B3A6FF" />
                <stop offset="100%" stopColor="#8F7BFF" />
              </linearGradient>
              <linearGradient id="arrow-grad" x1="0" y1="1" x2="1" y2="0">
                <stop offset="0%" stopColor="#8F7BFF" />
                <stop offset="100%" stopColor="#4A43D9" />
              </linearGradient>
            </defs>
            {/* the 3D bars: front face + slim top for depth */}
            {bars.map((b) => (
              <g key={b.x}>
                <rect x={b.x} y={168 - b.h} width="30" height={b.h} rx="5" fill="url(#bar-face)" />
                <path d={`M${b.x} ${168 - b.h} l7 -8 h30 l-7 8 Z`} fill="url(#bar-top)" />
                <path d={`M${b.x + 30} ${168 - b.h} l7 -8 v${b.h} l-7 8 Z`} fill="#4A43D9" opacity="0.6" />
              </g>
            ))}
            {/* rising arrow sweeping up over the bars */}
            <path d="M46 150 C96 138 130 118 200 62" stroke="url(#arrow-grad)" strokeWidth="6" strokeLinecap="round" fill="none" />
            <path d="M200 62 183 66 M200 62 l-5 17" stroke="url(#arrow-grad)" strokeWidth="6" strokeLinecap="round" />
            {/* base line */}
            <path d="M28 172h224" stroke="#C7BEF8" strokeWidth="4" strokeLinecap="round" />
          </svg>
          {/* target/goal marker top-right */}
          <svg viewBox="0 0 48 48" className="absolute right-1 top-1 size-12 drop-shadow-[0_8px_14px_rgba(74,67,217,0.4)]" aria-hidden>
            <circle cx="24" cy="24" r="20" fill="#EEEBFF" />
            <circle cx="24" cy="24" r="14" fill="none" stroke="#8F7BFF" strokeWidth="3.5" />
            <circle cx="24" cy="24" r="6" fill="#DFFF52" />
            <circle cx="24" cy="24" r="2.5" fill="#4A43D9" />
          </svg>
        </div>
      </div>
    </Screen>
  );
}

/* 04 Prove — a 3D report/dashboard document with a check badge. */
function ProveVisual() {
  return (
    <Screen>
      <div className="flex h-full items-center justify-center">
        <div className="relative h-52 w-64">
          <FloorShadow className="bottom-3 h-4 w-40" />
          <svg viewBox="0 0 280 200" fill="none" className="absolute inset-0 size-full drop-shadow-[0_18px_30px_rgba(99,91,255,0.25)]" aria-hidden>
            <defs>
              <linearGradient id="doc-face" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#FBFAFF" />
                <stop offset="100%" stopColor="#ECE8FF" />
              </linearGradient>
              <linearGradient id="doc-back" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#C9C0F8" />
                <stop offset="100%" stopColor="#B0A3F2" />
              </linearGradient>
              <linearGradient id="pie-a" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#8F7BFF" />
                <stop offset="100%" stopColor="#4A43D9" />
              </linearGradient>
            </defs>
            {/* a second doc peeking behind for depth */}
            <rect x="78" y="30" width="130" height="150" rx="12" fill="url(#doc-back)" transform="rotate(-6 143 105)" />
            {/* the front report doc */}
            <rect x="66" y="24" width="150" height="156" rx="12" fill="url(#doc-face)" />
            {/* donut chart */}
            <circle cx="104" cy="66" r="20" fill="none" stroke="#DDD6FA" strokeWidth="9" />
            <path d="M104 46 a20 20 0 0 1 17 30" fill="none" stroke="url(#pie-a)" strokeWidth="9" strokeLinecap="round" />
            {/* mini bar chart */}
            <g>
              <rect x="138" y="58" width="10" height="20" rx="2" fill="#C6BDF6" />
              <rect x="154" y="50" width="10" height="28" rx="2" fill="#8F7BFF" />
              <rect x="170" y="42" width="10" height="36" rx="2" fill="#635BFF" />
            </g>
            {/* text lines */}
            <g stroke="#D6CEF7" strokeWidth="6" strokeLinecap="round">
              <path d="M84 112h114" />
              <path d="M84 130h114" />
              <path d="M84 148h74" />
            </g>
          </svg>
          {/* floating citron check badge */}
          <span className="absolute -right-1 bottom-8 grid size-14 place-items-center rounded-2xl bg-gradient-to-br from-[#8F7BFF] to-indigo drop-shadow-[0_12px_20px_rgba(74,67,217,0.45)]">
            <span className="grid size-8 place-items-center rounded-full bg-citron">
              <svg width="16" height="16" viewBox="0 0 12 12" fill="none" aria-hidden>
                <path d="m2.5 6.5 2.5 2.5 4.5-5" stroke="#0B0D12" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
          </span>
        </div>
      </div>
    </Screen>
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
                      <div className="mt-4 h-72 overflow-hidden lg:hidden">
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
            <div className="sticky top-28 h-[460px]">
              <div className="relative h-full">
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
