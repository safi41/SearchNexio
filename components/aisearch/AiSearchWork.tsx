"use client";

import { useState } from "react";
import Reveal from "@/components/motion/Reveal";
import { WORK_COVERS, AI_PLATFORMS } from "@/lib/ai-search-content";
import { GoogleG, ChatGPTMark, GeminiMark, PerplexityMark, SparkleAI } from "@/components/brand-icons";

/* What the Work Covers: an interactive five-item list with a sticky detail
   panel on desktop (selecting an item updates the panel), accordion on
   mobile. */

function CheckDot() {
  return (
    <span className="mt-0.5 grid size-4 shrink-0 place-items-center rounded-full bg-citron">
      <svg width="9" height="9" viewBox="0 0 12 12" fill="none" aria-hidden>
        <path d="m2.5 6.5 2.5 2.5 4.5-5" stroke="#0B0D12" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </span>
  );
}

export function AiSearchWorkCovers() {
  const [active, setActive] = useState(0);
  const current = WORK_COVERS[active];
  return (
    <section className="overflow-x-clip wash-lilac-full py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <div className="max-w-3xl">
            <h2 className="font-heading text-[clamp(1.9rem,3.6vw,2.6rem)] font-bold leading-[1.12] tracking-[-0.02em]">
              What the Work Covers
            </h2>
            <p className="mt-6 text-[15px] leading-relaxed text-graphite">
              The three services are supported by a coordinated set of technical, content, entity and authority activities. These are delivery components within the engagement, not separate service pages.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-4 lg:grid-cols-[1fr_1fr] lg:gap-8">
          {/* selectable list */}
          <Reveal variant="left">
            <div className="grid gap-3">
              {WORK_COVERS.map((w, i) => {
                const on = i === active;
                return (
                  <div key={w.key}>
                    <button
                      type="button"
                      onClick={() => setActive(i)}
                      aria-expanded={on}
                      className={`flex w-full items-center gap-3 rounded-2xl border px-5 py-4 text-left transition-all duration-300 ease-soft ${
                        on ? "border-indigo/40 bg-surface shadow-[0_10px_30px_rgba(99,91,255,0.08)]" : "border-line bg-surface/70 hover:border-indigo/25 hover:bg-surface"
                      }`}
                    >
                      <span className={`grid size-8 shrink-0 place-items-center rounded-lg font-heading text-[13px] font-bold tabular-nums transition-colors ${on ? "bg-indigo text-white" : "bg-lilac text-indigo"}`}>
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className={`flex-1 font-heading text-[15.5px] font-bold tracking-[-0.01em] transition-colors ${on ? "text-indigo" : "text-ink"}`}>{w.title}</span>
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden className={`shrink-0 text-graphite transition-transform duration-300 ${on ? "rotate-90 text-indigo" : ""}`}>
                        <path d="M6 3l5 5-5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </button>
                    {/* mobile accordion body */}
                    <div className={`overflow-hidden lg:hidden ${on ? "max-h-[440px]" : "max-h-0"} transition-[max-height] duration-500 ease-soft`}>
                      <div className="rounded-b-2xl border-x border-b border-line bg-surface px-5 pb-5 pt-2">
                        <p className="text-[13.5px] leading-relaxed text-graphite">{w.desc}</p>
                        <ul className="mt-4 grid gap-2">
                          {w.points.map((p) => (
                            <li key={p} className="flex gap-2.5 text-[13px] text-ink"><CheckDot /> {p}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </Reveal>

          {/* sticky detail panel */}
          <Reveal variant="right" delay={80} className="hidden lg:block">
            <div className="sticky top-28">
              <div className="rounded-3xl border border-line bg-surface p-7">
                <div className="flex items-center gap-2 border-b border-line pb-4">
                  <span aria-hidden className="flex items-center">
                    <span className="size-3 rounded-full bg-ink" />
                    <span className="-ml-1 size-3 rounded-full bg-indigo mix-blend-multiply" />
                  </span>
                  <span className="font-heading text-[13px] font-bold tracking-[-0.01em]">Delivery component</span>
                </div>
                <div key={active} className="geo-panel-fade pt-5">
                  <h3 className="font-heading text-[20px] font-bold tracking-[-0.01em]">{current.title}</h3>
                  <p className="mt-3 text-[14px] leading-relaxed text-graphite">{current.desc}</p>
                  <ul className="mt-6 grid gap-2.5">
                    {current.points.map((p) => (
                      <li key={p} className="flex gap-3 rounded-xl border border-line bg-ivory/50 px-3.5 py-2.5 text-[13.5px] font-medium text-ink"><CheckDot /> {p}</li>
                    ))}
                  </ul>
                  {current.link && (
                    <a href={current.link.href} className="mt-5 inline-flex items-center gap-1.5 text-[13.5px] font-semibold text-indigo">
                      {current.link.label}
                      <svg width="14" height="14" viewBox="0 0 12 12" fill="none" aria-hidden><path d="M2 6h8m0 0L6.5 2.5M10 6l-3.5 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* Platforms We Optimize For: five compact cards, soft hover only. */
const PLATFORM_ICONS = [
  <SparkleAI key="g" size={20} />,
  <ChatGPTMark key="c" size={20} />,
  <GeminiMark key="ge" size={20} />,
  <PerplexityMark key="p" size={20} />,
  <GoogleG key="cop" size={20} />,
];

export function AiSearchPlatforms() {
  return (
    <section className="overflow-x-clip py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <div className="max-w-3xl">
            <h2 className="font-heading text-[clamp(1.9rem,3.6vw,2.6rem)] font-bold leading-[1.12] tracking-[-0.02em]">
              Platforms We Optimize For
            </h2>
            <p className="mt-6 text-[15px] leading-relaxed text-graphite">
              Platform relevance depends on where your customers research, compare and validate providers. Search Nexio selects the platforms that matter to the buying journey rather than applying an identical method to every surface.
            </p>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {AI_PLATFORMS.map((p, i) => (
            <Reveal key={p.name} variant="up" delay={Math.min(i * 50, 200)}>
              <article className="group flex h-full flex-col rounded-2xl border border-line bg-surface p-5 transition-colors duration-300 ease-soft hover:border-indigo/30">
                <span className="grid size-10 place-items-center rounded-xl border border-line bg-ivory">{PLATFORM_ICONS[i]}</span>
                <h3 className="mt-4 font-heading text-[15px] font-bold leading-snug tracking-[-0.01em]">{p.name}</h3>
                <p className="mt-2 text-[12.5px] leading-relaxed text-graphite">{p.desc}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
