"use client";

import { useEffect, useRef, useState } from "react";
import Reveal from "@/components/motion/Reveal";
import { SectionHead } from "@/components/ui";
import { GoogleG, MapsPin, SparkleAI, ChatGPTMark } from "@/components/brand-icons";
import { METHOD_STEPS } from "@/lib/content";

/* The method as a timeline: a vertical rail of steps on the left with a
   progress line that fills as you scroll, and a sticky visual panel on the
   right whose graphic switches to match the active step. */

/* ---------- step visuals (the "images" that change with the timeline) ---
   Each visual is framed as a small product screen: a titled app window with
   a live-status header, so the panel reads like a real dashboard rather than
   a loose diagram. */

function ArrowUp({ className = "" }: { className?: string }) {
  return (
    <svg width="10" height="10" viewBox="0 0 12 12" fill="none" aria-hidden className={className}>
      <path
        d="M6 10V2m0 0L2.5 5.5M6 2l3.5 3.5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function Check({ className = "" }: { className?: string }) {
  return (
    <svg width="11" height="11" viewBox="0 0 12 12" fill="none" aria-hidden className={className}>
      <path
        d="m2.5 6.5 2.5 2.5 4.5-5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/* App-window frame with a header row: title on the left, live pill on the
   right. Gives every visual a consistent product-screen look. */
function Screen({
  title,
  status,
  statusTone = "live",
  children,
}: {
  title: string;
  status: string;
  statusTone?: "live" | "warn" | "up";
  children: React.ReactNode;
}) {
  const tone =
    statusTone === "warn"
      ? "bg-warn/10 text-warn"
      : statusTone === "up"
        ? "bg-indigo/10 text-indigo"
        : "bg-citron/40 text-ink-solid";
  return (
    <div className="mx-6 flex h-full flex-col">
      <div className="flex items-center justify-between border-b border-line px-1 pb-3 pt-6">
        <div className="flex items-center gap-2">
          <span aria-hidden className="flex items-center">
            <span className="size-3 rounded-full bg-ink" />
            <span className="-ml-1 size-3 rounded-full bg-indigo mix-blend-multiply" />
          </span>
          <span className="font-heading text-[13px] font-bold tracking-[-0.01em]">
            {title}
          </span>
        </div>
        <span
          className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[10px] font-semibold tracking-[0.04em] ${tone}`}
        >
          <span className="size-1.5 rounded-full bg-current" />
          {status}
        </span>
      </div>
      <div className="relative flex-1 py-4">{children}</div>
    </div>
  );
}

/* a big platform logo bubble with an optional status badge */
function LogoBubble({
  children,
  size = "size-16",
  badge,
  className = "",
}: {
  children: React.ReactNode;
  size?: string;
  badge?: "ok" | "warn" | null;
  className?: string;
}) {
  return (
    <span
      className={`relative grid ${size} place-items-center rounded-2xl border border-line bg-surface ${className}`}
    >
      {children}
      {badge === "ok" && (
        <span aria-hidden className="absolute -bottom-1.5 -right-1.5 grid size-5 place-items-center rounded-full bg-citron">
          <Check className="size-3 text-ink-solid" />
        </span>
      )}
      {badge === "warn" && (
        <span aria-hidden className="absolute -bottom-1.5 -right-1.5 grid size-5 place-items-center rounded-full bg-warn text-white">
          <span className="text-[11px] font-bold leading-none">!</span>
        </span>
      )}
    </span>
  );
}

/* 01 Map — the four surfaces scanned: found ones checked, missing ones
   flagged, over a soft radar sweep. */
function MapVisual() {
  return (
    <Screen title="Surface Scan" status="SCANNING" statusTone="up">
      <div className="flex h-full flex-col items-center justify-center">
        <div className="relative size-60">
          {/* radar rings, centered */}
          <span aria-hidden className="absolute inset-0 rounded-full border border-dashed border-indigo/25" />
          <span aria-hidden className="absolute inset-8 rounded-full border border-indigo/20" />
          <span aria-hidden className="absolute inset-[4.5rem] rounded-full border border-indigo/25" />
          <span aria-hidden className="absolute left-1/2 top-1/2 size-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo shadow-[0_0_16px_rgba(99,91,255,0.7)]" />
          {/* four logos at the four corners of the radar */}
          <LogoBubble badge="ok" className="absolute left-0 top-4">
            <GoogleG size={26} />
          </LogoBubble>
          <LogoBubble badge="ok" className="absolute right-0 top-4">
            <MapsPin size={26} />
          </LogoBubble>
          <LogoBubble badge="warn" className="absolute bottom-4 left-0">
            <SparkleAI size={26} />
          </LogoBubble>
          <LogoBubble badge="warn" className="absolute bottom-4 right-0">
            <ChatGPTMark size={26} />
          </LogoBubble>
        </div>
        <div className="mt-2 inline-flex items-center gap-1.5 rounded-full bg-warn/10 px-3 py-1 text-[11px] font-semibold text-warn">
          <span className="size-1.5 rounded-full bg-warn" /> 2 surfaces where buyers can&apos;t find you
        </div>
      </div>
    </Screen>
  );
}

/* 02 Fix — the flagged surfaces flip to fixed, with a progress line. */
function FixVisual() {
  return (
    <Screen title="Fixing Gaps" status="2 / 2 FIXED" statusTone="live">
      <div className="relative flex h-full items-center justify-center">
        <div className="flex items-center gap-6">
          {/* was broken */}
          <LogoBubble size="size-20" className="opacity-50">
            <SparkleAI size={30} />
            <span aria-hidden className="absolute -bottom-1.5 -right-1.5 grid size-6 place-items-center rounded-full bg-warn/20 text-warn">
              <span className="text-[12px] font-bold leading-none">!</span>
            </span>
          </LogoBubble>
          {/* the fix arrow */}
          <span className="grid size-9 place-items-center rounded-full bg-indigo text-white">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
              <path d="M5 12h14m0 0-6-6m6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
          {/* now fixed */}
          <LogoBubble size="size-20" badge="ok" className="border-indigo/40 shadow-[0_0_0_4px_rgba(99,91,255,0.1)]">
            <SparkleAI size={30} />
          </LogoBubble>
        </div>
      </div>
      <div className="mt-1 flex items-center gap-2 self-center rounded-xl bg-lilac/60 px-3 py-2 text-[11px] font-semibold text-indigo">
        <ArrowUp /> fixed in order of revenue impact
      </div>
    </Screen>
  );
}

/* 03 Amplify — authority hub broadcasting out to every logo. */
function AmplifyVisual() {
  const marks = [
    { icon: <GoogleG size={22} />, pos: "left-0 top-4" },
    { icon: <MapsPin size={22} />, pos: "right-0 top-4" },
    { icon: <SparkleAI size={22} />, pos: "bottom-4 left-0" },
    { icon: <ChatGPTMark size={22} />, pos: "bottom-4 right-0" },
  ];
  return (
    <Screen title="Authority Signals" status="BROADCASTING" statusTone="up">
      <div className="flex h-full items-center justify-center">
        <div className="relative size-60">
          <span aria-hidden className="absolute inset-0 rounded-full border border-indigo/12" />
          <span aria-hidden className="absolute inset-7 rounded-full border border-indigo/22" />
          <span aria-hidden className="absolute inset-16 rounded-full border border-indigo/32" />
          {/* the SearchNexio core, centered */}
          <span className="absolute left-1/2 top-1/2 grid size-14 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-2xl bg-gradient-to-br from-indigo to-[#4A43D9] text-white shadow-[0_12px_28px_rgba(99,91,255,0.45)]">
            <span className="flex items-center">
              <span className="size-3.5 rounded-full bg-white" />
              <span className="-ml-1.5 size-3.5 rounded-full bg-citron mix-blend-screen" />
            </span>
          </span>
          {/* four logos pinned to the four corners of the square */}
          {marks.map((m, i) => (
            <LogoBubble key={i} size="size-11" badge="ok" className={`absolute ${m.pos}`}>
              {m.icon}
            </LogoBubble>
          ))}
        </div>
      </div>
    </Screen>
  );
}

/* 04 Prove — the logos as a citation row, growth arrow rising behind. */
function ProveVisual() {
  return (
    <Screen title="Now Cited On" status="+64% LEADS" statusTone="live">
      <div className="relative flex h-full items-center justify-center">
        {/* rising arrow behind */}
        <svg aria-hidden className="absolute inset-0 h-full w-full" viewBox="0 0 300 160" fill="none" preserveAspectRatio="none">
          <defs>
            <linearGradient id="prove-fill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#635BFF" stopOpacity="0.18" />
              <stop offset="100%" stopColor="#635BFF" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path d="M14,140 C80,132 150,110 210,72 C240,54 270,32 292,14 L292,160 L14,160 Z" fill="url(#prove-fill)" />
          <path d="M14,140 C80,132 150,110 210,72 C240,54 270,32 292,14" stroke="#635BFF" strokeWidth="2.5" strokeLinecap="round" vectorEffect="non-scaling-stroke" />
          <path d="M292 14 279 16.5M292 14l-4 12" stroke="#635BFF" strokeWidth="2.5" strokeLinecap="round" />
        </svg>
        {/* the four logos, all now cited */}
        <div className="relative flex items-center gap-2.5">
          {[<GoogleG key="g" size={20} />, <MapsPin key="m" size={20} />, <SparkleAI key="s" size={20} />, <ChatGPTMark key="c" size={20} />].map((mark, i) => (
            <LogoBubble key={i} size="size-12" badge="ok">
              {mark}
            </LogoBubble>
          ))}
        </div>
      </div>
      <div className="mt-1 inline-flex items-center gap-2 self-center rounded-full bg-lilac/70 px-3 py-1 text-[11px] font-bold text-indigo">
        <ArrowUp /> Visibility 68 &rarr; 82 &middot; +64% leads
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
                      <div className="mt-4 h-72 overflow-hidden rounded-2xl border border-line bg-surface shadow-[0_14px_36px_rgba(11,13,18,0.06)] lg:hidden">
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
              <div className="relative h-full overflow-hidden rounded-[2rem] border border-line bg-surface shadow-[0_20px_50px_rgba(11,13,18,0.07)]">
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-lilac/40 to-transparent"
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
