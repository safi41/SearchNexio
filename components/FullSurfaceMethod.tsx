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

/* 01 Map — a surface audit table: which platforms you're found on, and the
   two you're missing, over a faint radar backdrop. */
function MapVisual() {
  const surfaces = [
    { icon: <GoogleG size={15} />, label: "Google", score: 82, ok: true },
    { icon: <MapsPin size={15} />, label: "Maps", score: 74, ok: true },
    { icon: <SparkleAI size={15} />, label: "AI Overviews", score: 31, ok: false },
    { icon: <ChatGPTMark size={15} />, label: "ChatGPT", score: 18, ok: false },
  ];
  return (
    <Screen title="Surface Scan" status="SCANNING" statusTone="up">
      <div aria-hidden className="grid-pattern absolute inset-0 opacity-40 [background-size:30px_30px]" />
      <div aria-hidden className="absolute right-6 top-2 size-28 rounded-full border border-dashed border-indigo/30" />
      <div aria-hidden className="absolute right-14 top-10 size-12 rounded-full border border-indigo/25" />
      <div className="relative grid gap-2">
        {surfaces.map((s) => (
          <div
            key={s.label}
            className={`flex items-center gap-3 rounded-xl border px-3 py-2.5 ${
              s.ok
                ? "border-line bg-surface/90"
                : "border-warn/30 bg-warn/5"
            }`}
          >
            <span className="grid size-7 place-items-center rounded-lg border border-line bg-surface">
              {s.icon}
            </span>
            <span className="w-24 text-[12px] font-semibold">{s.label}</span>
            <span className="h-2 flex-1 overflow-hidden rounded-full bg-line/70">
              <span
                className={`block h-full rounded-full ${s.ok ? "bg-indigo" : "bg-warn/80"}`}
                style={{ width: `${s.score}%` }}
              />
            </span>
            <span
              className={`w-6 text-right text-[12px] font-bold tabular-nums ${
                s.ok ? "text-ink" : "text-warn"
              }`}
            >
              {s.score}
            </span>
          </div>
        ))}
      </div>
      <div className="relative mt-3 inline-flex items-center gap-1.5 rounded-full bg-warn/10 px-3 py-1 text-[11px] font-semibold text-warn">
        <span className="size-1.5 rounded-full bg-warn" /> 2 surfaces where buyers can&apos;t find you
      </div>
    </Screen>
  );
}

/* 02 Fix — a prioritized fix queue with impact tags, most of it cleared. */
function FixVisual() {
  const tasks = [
    { label: "Core Web Vitals", tag: "High", done: true },
    { label: "Schema markup", tag: "High", done: true },
    { label: "Local citations", tag: "Med", done: true },
    { label: "Broken redirects", tag: "Med", done: false, active: true },
  ];
  return (
    <Screen title="Fix Queue" status="3 / 4 DONE" statusTone="live">
      <div className="grid gap-2.5">
        {tasks.map((t) => (
          <div
            key={t.label}
            className={`flex items-center gap-3 rounded-xl border px-3 py-2.5 transition ${
              t.active
                ? "border-indigo/40 bg-indigo/5 shadow-[0_0_0_3px_rgba(99,91,255,0.08)]"
                : "border-line bg-surface/90"
            }`}
          >
            <span
              className={`grid size-6 shrink-0 place-items-center rounded-full ${
                t.done ? "bg-citron text-ink-solid" : "border-2 border-indigo/50 bg-surface"
              }`}
            >
              {t.done ? (
                <Check />
              ) : (
                <span className="size-1.5 rounded-full bg-indigo" />
              )}
            </span>
            <span
              className={`flex-1 text-[12.5px] font-semibold ${
                t.done ? "text-graphite line-through decoration-graphite/40" : "text-ink"
              }`}
            >
              {t.label}
            </span>
            <span
              className={`rounded-md px-2 py-0.5 text-[10px] font-bold ${
                t.tag === "High"
                  ? "bg-warn/10 text-warn"
                  : "bg-lilac text-indigo"
              }`}
            >
              {t.tag}
            </span>
          </div>
        ))}
      </div>
      <div className="mt-3 flex items-center gap-2 rounded-xl bg-lilac/60 px-3 py-2 text-[11px] font-semibold text-indigo">
        <ArrowUp /> ranked by revenue impact, not by what&apos;s easy
      </div>
    </Screen>
  );
}

/* 03 Amplify — authority hub broadcasting to every surface, with a live
   "cited" ticker beneath. */
function AmplifyVisual() {
  const marks = [
    { icon: <GoogleG size={16} />, pos: "left-[8%] top-[10%]" },
    { icon: <MapsPin size={16} />, pos: "right-[10%] top-[6%]" },
    { icon: <SparkleAI size={16} />, pos: "left-[12%] top-[46%]" },
    { icon: <ChatGPTMark size={16} />, pos: "right-[8%] top-[42%]" },
  ];
  return (
    <Screen title="Authority Signals" status="BROADCASTING" statusTone="up">
      <div className="relative h-[150px]">
        <div className="absolute inset-0 flex items-center justify-center">
          <span aria-hidden className="absolute size-40 rounded-full border border-indigo/12" />
          <span aria-hidden className="absolute size-28 rounded-full border border-indigo/22" />
          <span aria-hidden className="absolute size-16 rounded-full border border-indigo/35" />
          <span className="relative grid size-12 place-items-center rounded-2xl bg-indigo text-white shadow-[0_10px_28px_rgba(99,91,255,0.45)]">
            <span className="flex items-center">
              <span className="size-3 rounded-full bg-white" />
              <span className="-ml-1 size-3 rounded-full bg-citron mix-blend-screen" />
            </span>
          </span>
        </div>
        {marks.map((m, i) => (
          <span
            key={i}
            className={`absolute ${m.pos} grid size-10 place-items-center rounded-xl border border-line bg-surface shadow-[0_6px_16px_rgba(11,13,18,0.1)]`}
          >
            {m.icon}
          </span>
        ))}
      </div>
      <div className="mt-1 grid gap-1.5">
        {[
          "Cited in AI Overview for “best tax advisor”",
          "Featured in Google top 3 · local pack",
        ].map((line) => (
          <div
            key={line}
            className="flex items-center gap-2 rounded-lg border border-line bg-surface/90 px-3 py-1.5 text-[11px] font-medium text-graphite"
          >
            <span className="grid size-4 place-items-center rounded-full bg-citron text-ink-solid">
              <Check className="size-2.5" />
            </span>
            <span className="truncate">{line}</span>
          </div>
        ))}
      </div>
    </Screen>
  );
}

/* 04 Prove — a reporting card: KPI tiles over a growth area chart. */
function ProveVisual() {
  return (
    <Screen title="Revenue Report" status="+64% MoM" statusTone="live">
      <div className="grid grid-cols-3 gap-2">
        {[
          { label: "Visibility", value: "82", delta: "+14" },
          { label: "Leads", value: "1,284", delta: "+64%" },
          { label: "Pipeline", value: "$1.9M", delta: "+41%" },
        ].map((k) => (
          <div key={k.label} className="rounded-xl border border-line bg-surface/90 px-3 py-2.5">
            <p className="text-[10px] font-medium text-graphite">{k.label}</p>
            <p className="mt-0.5 font-heading text-[17px] font-bold tabular-nums leading-none">
              {k.value}
            </p>
            <p className="mt-1 inline-flex items-center gap-0.5 text-[9.5px] font-bold text-indigo">
              <ArrowUp className="size-2" /> {k.delta}
            </p>
          </div>
        ))}
      </div>
      <div className="relative mt-3 h-[128px] overflow-hidden rounded-xl border border-line bg-surface/90 p-3">
        <p className="relative z-10 text-[10px] font-semibold text-graphite">
          Organic leads &middot; 12 mo
        </p>
        <svg
          className="absolute inset-x-1 bottom-1 h-[104px] w-[calc(100%-8px)]"
          viewBox="0 0 300 104"
          preserveAspectRatio="none"
          aria-hidden
        >
          <defs>
            <linearGradient id="prove-fill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#635BFF" stopOpacity="0.32" />
              <stop offset="100%" stopColor="#635BFF" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path
            d="M0,90 C36,86 60,76 96,66 C150,50 205,34 250,20 C270,14 286,10 300,7 L300,104 L0,104 Z"
            fill="url(#prove-fill)"
          />
          <path
            d="M0,90 C36,86 60,76 96,66 C150,50 205,34 250,20 C270,14 286,10 300,7"
            fill="none"
            stroke="#635BFF"
            strokeWidth="2.5"
            vectorEffect="non-scaling-stroke"
          />
          <circle cx="298" cy="7" r="3.5" fill="#635BFF" />
        </svg>
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
