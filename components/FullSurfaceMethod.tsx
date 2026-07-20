"use client";

import { useEffect, useRef, useState } from "react";
import Reveal from "@/components/motion/Reveal";
import { SectionHead } from "@/components/ui";
import { GoogleG, MapsPin, SparkleAI, ChatGPTMark } from "@/components/brand-icons";
import { METHOD_STEPS } from "@/lib/content";

/* The method as a timeline: a scroll-driven vertical rail on the left and a
   sticky product-UI panel on the right whose "receipt" swaps to match the
   active step. Each panel is a believable dashboard fragment showing the
   OUTPUT of that step, in the same restrained UI language as the Results and
   Services sections — no clip-art illustrations. Data animates in when a
   panel becomes active. */

/* ---------- shared panel chrome ------------------------------------------ */

/* An app-window card: header with a title + a status pill, then the body. */
function Panel({
  title,
  status,
  tone = "live",
  children,
}: {
  title: string;
  status: string;
  tone?: "live" | "warn" | "up";
  children: React.ReactNode;
}) {
  const pill =
    tone === "warn"
      ? "bg-warn/10 text-warn"
      : tone === "up"
        ? "bg-indigo/10 text-indigo"
        : "bg-citron/40 text-ink-solid";
  return (
    <div className="flex h-full flex-col overflow-hidden rounded-3xl border border-line bg-surface">
      <div className="flex items-center justify-between border-b border-line px-5 py-3.5">
        <div className="flex items-center gap-2">
          <span aria-hidden className="flex items-center">
            <span className="size-3 rounded-full bg-ink" />
            <span className="-ml-1 size-3 rounded-full bg-indigo mix-blend-multiply" />
          </span>
          <span className="font-heading text-[13px] font-bold tracking-[-0.01em]">{title}</span>
        </div>
        <span className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[10px] font-semibold tracking-[0.04em] ${pill}`}>
          <span className="size-1.5 rounded-full bg-current" />
          {status}
        </span>
      </div>
      <div className="flex flex-1 flex-col justify-center gap-2.5 px-5 py-5">{children}</div>
    </div>
  );
}

function CheckMini({ className = "" }: { className?: string }) {
  return (
    <svg width="11" height="11" viewBox="0 0 12 12" fill="none" aria-hidden className={className}>
      <path d="m2.5 6.5 2.5 2.5 4.5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/* ---------- 01 Map — visibility audit ------------------------------------ */

function MapPanel({ on }: { on: boolean }) {
  const rows = [
    { icon: <GoogleG size={15} />, label: "Google", score: 82, ok: true },
    { icon: <MapsPin size={15} />, label: "Maps", score: 74, ok: true },
    { icon: <SparkleAI size={15} />, label: "AI Overviews", score: 41, ok: false },
    { icon: <ChatGPTMark size={15} />, label: "ChatGPT", score: 28, ok: false },
  ];
  return (
    <Panel title="Visibility Audit" status="SCANNING" tone="up">
      {rows.map((r, i) => (
        <div key={r.label} className="flex items-center gap-3">
          <span className="grid size-7 shrink-0 place-items-center rounded-lg border border-line bg-ivory">{r.icon}</span>
          <span className="w-24 shrink-0 text-[12.5px] font-semibold">{r.label}</span>
          <span className="h-2 flex-1 overflow-hidden rounded-full bg-ivory">
            <span
              className={`block h-full rounded-full transition-[width] duration-[900ms] ease-soft ${r.ok ? "bg-indigo" : "bg-warn"}`}
              style={{ width: on ? `${r.score}%` : "0%", transitionDelay: `${120 + i * 90}ms` }}
            />
          </span>
          <span className={`w-8 shrink-0 text-right text-[12px] font-bold tabular-nums ${r.ok ? "text-indigo" : "text-warn"}`}>
            {r.ok ? r.score : "!"}
          </span>
        </div>
      ))}
      <p className="mt-1 inline-flex items-center gap-1.5 self-start rounded-full bg-warn/10 px-3 py-1 text-[11px] font-semibold text-warn">
        <span className="size-1.5 rounded-full bg-warn" /> 2 surfaces where buyers can&apos;t find you
      </p>
    </Panel>
  );
}

/* ---------- 02 Fix — prioritized fix queue ------------------------------- */

function FixPanel({ on }: { on: boolean }) {
  const items = [
    { label: "Core Web Vitals & crawl errors", tag: "High", done: true },
    { label: "Local business data & citations", tag: "High", done: true },
    { label: "Content gaps on money pages", tag: "Med", done: false },
    { label: "Schema & structured data", tag: "Med", done: false },
  ];
  return (
    <Panel title="Fix Queue" status="PRIORITIZED" tone="live">
      {items.map((it, i) => (
        <div
          key={it.label}
          className="flex items-center gap-3 rounded-xl border border-line bg-ivory/60 px-3 py-2.5 transition-all duration-500 ease-soft"
          style={{ transitionDelay: `${100 + i * 90}ms`, opacity: on ? 1 : 0, transform: on ? "translateX(0)" : "translateX(10px)" }}
        >
          <span className={`grid size-5 shrink-0 place-items-center rounded-full ${it.done ? "bg-citron text-ink-solid" : "border border-line bg-surface text-graphite"}`}>
            {it.done ? <CheckMini /> : <span className="size-1.5 rounded-full bg-graphite/50" />}
          </span>
          <span className="flex-1 text-[12.5px] font-medium">{it.label}</span>
          <span className={`rounded-full px-2 py-0.5 text-[10px] font-bold ${it.tag === "High" ? "bg-indigo/10 text-indigo" : "bg-line/70 text-graphite"}`}>
            {it.tag}
          </span>
        </div>
      ))}
      <p className="mt-1 text-[11px] text-graphite">Sorted by revenue impact, not by what&apos;s easiest to code.</p>
    </Panel>
  );
}

/* ---------- 03 Amplify — authority & citations tracker ------------------- */

function AmplifyPanel({ on }: { on: boolean }) {
  const cited = [
    { icon: <ChatGPTMark size={14} />, label: "ChatGPT" },
    { icon: <SparkleAI size={14} />, label: "AI Overviews" },
    { icon: <GoogleG size={14} />, label: "Google Top 3" },
  ];
  return (
    <Panel title="Authority Tracker" status="BUILDING" tone="up">
      {/* rising trend line */}
      <div className="relative h-24 overflow-hidden rounded-xl border border-line bg-ivory/60 p-2">
        <svg viewBox="0 0 260 88" preserveAspectRatio="none" className="size-full" aria-hidden>
          <defs>
            <linearGradient id="amp-fill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#635BFF" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#635BFF" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path d="M4,74 C60,68 110,54 160,34 C190,22 220,16 256,8 L256,88 L4,88 Z" fill="url(#amp-fill)" />
          <path
            d="M4,74 C60,68 110,54 160,34 C190,22 220,16 256,8"
            fill="none"
            stroke="#635BFF"
            strokeWidth="2.5"
            strokeLinecap="round"
            vectorEffect="non-scaling-stroke"
            pathLength={1}
            style={{
              strokeDasharray: 1,
              strokeDashoffset: on ? 0 : 1,
              transition: "stroke-dashoffset 1100ms var(--ease-soft) 150ms",
            }}
          />
        </svg>
        <span className="absolute right-2.5 top-2.5 inline-flex items-center gap-1 rounded-full bg-indigo/10 px-2 py-0.5 text-[10.5px] font-bold text-indigo">
          +18 positions
        </span>
      </div>
      {/* citation chips lighting up */}
      <p className="mt-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-graphite">Now cited in</p>
      <div className="flex flex-wrap gap-2">
        {cited.map((c, i) => (
          <span
            key={c.label}
            className="inline-flex items-center gap-1.5 rounded-full border border-indigo/25 bg-indigo/5 px-2.5 py-1 text-[11.5px] font-semibold transition-all duration-500 ease-soft"
            style={{ transitionDelay: `${400 + i * 160}ms`, opacity: on ? 1 : 0, transform: on ? "scale(1)" : "scale(0.9)" }}
          >
            {c.icon}
            {c.label}
            <span className="grid size-3.5 place-items-center rounded-full bg-citron text-ink-solid">
              <CheckMini className="size-2" />
            </span>
          </span>
        ))}
      </div>
    </Panel>
  );
}

/* ---------- 04 Prove — pipeline report card ------------------------------ */

function ProvePanel({ on }: { on: boolean }) {
  const bars = [34, 46, 40, 58, 72, 92];
  const stats = [
    { v: "+64%", l: "Leads" },
    { v: "3.1×", l: "Pipeline" },
    { v: "9.2×", l: "AI citations" },
  ];
  return (
    <Panel title="Pipeline Report" status="+64% QoQ" tone="live">
      <div className="rounded-xl border border-line bg-ivory/60 p-4">
        <div className="flex items-center justify-between">
          <span className="text-[11.5px] font-semibold text-ink">Pipeline value</span>
          <span className="inline-flex items-center gap-1 text-[11.5px] font-bold text-indigo">
            <svg width="11" height="11" viewBox="0 0 12 12" fill="none" aria-hidden>
              <path d="M2 10 10 2m0 0H4.5M10 2v5.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            trending up
          </span>
        </div>
        <div className="mt-3 flex h-16 items-end gap-2">
          {bars.map((h, i) => (
            <span
              key={i}
              className={`flex-1 rounded-t-md transition-[height] duration-[800ms] ease-soft ${i === bars.length - 1 ? "bg-indigo" : "bg-lilac"}`}
              style={{ height: on ? `${h}%` : "6%", transitionDelay: `${120 + i * 70}ms` }}
            />
          ))}
        </div>
      </div>
      <div className="mt-1 grid grid-cols-3 gap-2">
        {stats.map((s, i) => (
          <div
            key={s.l}
            className="rounded-xl border border-line bg-surface px-2.5 py-2 text-center transition-all duration-500 ease-soft"
            style={{ transitionDelay: `${500 + i * 110}ms`, opacity: on ? 1 : 0, transform: on ? "translateY(0)" : "translateY(6px)" }}
          >
            <p className="font-heading text-[16px] font-bold tabular-nums text-indigo">{s.v}</p>
            <p className="text-[10.5px] text-graphite">{s.l}</p>
          </div>
        ))}
      </div>
    </Panel>
  );
}

const PANELS = [MapPanel, FixPanel, AmplifyPanel, ProvePanel];

/* ---------- the timeline ------------------------------------------------- */

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

        <div className="mt-14 grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
          {/* the rail */}
          <Reveal variant="left">
            <ol className="relative">
              {/* base line + scroll-filled progress line */}
              <span aria-hidden className="absolute bottom-6 left-[21px] top-6 w-px bg-line" />
              <span
                aria-hidden
                className="absolute left-[21px] top-6 w-px bg-gradient-to-b from-indigo to-indigo/70 transition-all duration-700 ease-soft"
                style={{ height: `calc((100% - 48px) * ${active / (METHOD_STEPS.length - 1)})` }}
              />
              {METHOD_STEPS.map((step, i) => {
                const state = i < active ? "done" : i === active ? "active" : "next";
                return (
                  <li
                    key={step.name}
                    ref={(el) => {
                      stepRefs.current[i] = el;
                    }}
                    className={`relative flex gap-5 pl-0 ${i < METHOD_STEPS.length - 1 ? "pb-12" : ""}`}
                  >
                    <span
                      className={`relative z-10 grid size-11 shrink-0 place-items-center rounded-2xl font-heading text-[14px] font-bold transition-all duration-500 ease-soft ${
                        state === "active"
                          ? "bg-indigo text-white shadow-[0_0_0_5px_var(--c-lilac)]"
                          : state === "done"
                            ? "bg-indigo text-white"
                            : "border border-line bg-surface text-graphite"
                      }`}
                    >
                      {state === "done" ? (
                        <CheckMini className="size-4" />
                      ) : (
                        step.index
                      )}
                    </span>
                    <div
                      className={`pt-1.5 transition-opacity duration-500 ${state === "next" ? "opacity-45" : "opacity-100"}`}
                    >
                      <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-graphite">
                        Step {step.index}
                      </p>
                      <h3
                        className={`mt-1 font-heading text-[21px] font-bold tracking-[-0.01em] transition-colors duration-500 ${
                          state === "active" ? "text-indigo" : "text-ink"
                        }`}
                      >
                        {step.name}
                      </h3>
                      <p className="mt-2 max-w-md text-[13.5px] leading-relaxed text-graphite">
                        {step.body}
                      </p>

                      {/* mobile: each step carries its own panel inline */}
                      <div className="mt-5 lg:hidden">
                        {(() => {
                          const StepPanel = PANELS[i];
                          return (
                            <div className="h-80">
                              <StepPanel on />
                            </div>
                          );
                        })()}
                      </div>
                    </div>
                  </li>
                );
              })}
            </ol>
          </Reveal>

          {/* the sticky panel: its product-UI receipt follows the active step */}
          <Reveal variant="right" className="hidden lg:block">
            <div className="sticky top-28 h-[420px]">
              <div className="relative h-full">
                {PANELS.map((StepPanel, i) => (
                  <div
                    key={i}
                    aria-hidden={active !== i}
                    className={`absolute inset-0 transition-all duration-500 ease-soft ${
                      active === i
                        ? "translate-y-0 scale-100 opacity-100"
                        : active > i
                          ? "pointer-events-none -translate-y-2 scale-[0.98] opacity-0"
                          : "pointer-events-none translate-y-2 scale-[0.98] opacity-0"
                    }`}
                  >
                    <StepPanel on={active === i} />
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
