"use client";

import { useState } from "react";
import Reveal from "@/components/motion/Reveal";
import { RESEARCH_AREAS } from "@/lib/geo-content";
import { ChatGPTMark, GeminiMark, PerplexityMark } from "@/components/brand-icons";

/* GEO visibility in practice: intro + a sample report with platform tabs
   (short crossfade) showing prompt groups, competitors and sources, plus the
   research-area table. Sample data is clearly labelled illustrative. */

const TABS = [
  {
    key: "chatgpt",
    label: "ChatGPT",
    icon: <ChatGPTMark size={16} />,
    prompts: [
      { prompt: "best providers for [category]", brand: true, competitors: 3 },
      { prompt: "[brand] vs alternatives", brand: true, competitors: 4 },
      { prompt: "top [service] firms", brand: false, competitors: 5 },
    ],
    sources: ["Owned comparison page", "Industry review site", "Expert profile"],
  },
  {
    key: "gemini",
    label: "Gemini",
    icon: <GeminiMark size={16} />,
    prompts: [
      { prompt: "recommended [category] vendors", brand: true, competitors: 2 },
      { prompt: "alternatives to [competitor]", brand: false, competitors: 4 },
      { prompt: "[category] for enterprise", brand: true, competitors: 3 },
    ],
    sources: ["Owned service page", "Directory listing", "Editorial article"],
  },
  {
    key: "perplexity",
    label: "Perplexity",
    icon: <PerplexityMark size={16} />,
    prompts: [
      { prompt: "compare [category] providers", brand: true, competitors: 5 },
      { prompt: "who offers [capability]", brand: true, competitors: 3 },
      { prompt: "[service] pricing overview", brand: false, competitors: 4 },
    ],
    sources: ["Owned pricing page", "Comparison publication", "Community thread"],
  },
];

const intro = [
  "Search Nexio uses structured testing rather than relying on a single AI response or one screenshot. We define commercial prompt groups, test them across selected platforms, repeat the tests, record brand and competitor appearances and document the sources shown where citations are available.",
  "This produces a repeatable baseline that can be compared over time. Reports explain the number of prompts tested, the platforms included, the testing frequency and the limits of the data.",
];

export default function GeoInPractice() {
  const [tab, setTab] = useState(0);
  const active = TABS[tab];

  return (
    <section className="overflow-x-clip wash-lilac-full py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <div className="max-w-3xl">
            <h2 className="font-heading text-[clamp(1.9rem,3.6vw,2.6rem)] font-bold leading-[1.12] tracking-[-0.02em]">
              GEO visibility in practice
            </h2>
            <p className="mt-2 text-[13px] font-semibold uppercase tracking-[0.14em] text-graphite">How we test GEO visibility</p>
            <div className="mt-5 grid gap-4">
              {intro.map((p, i) => (
                <p key={i} className="text-[15px] leading-relaxed text-graphite">{p}</p>
              ))}
            </div>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          {/* sample report with platform tabs */}
          <Reveal variant="left">
            <div className="rounded-3xl border border-line bg-surface p-6">
              <div className="flex items-center justify-between">
                <span className="font-heading text-[14px] font-bold tracking-[-0.01em]">Sample visibility report</span>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-indigo/10 px-2.5 py-1 text-[10px] font-semibold tracking-[0.04em] text-indigo">ILLUSTRATIVE</span>
              </div>

              {/* tabs */}
              <div className="mt-4 flex gap-2">
                {TABS.map((t, i) => (
                  <button
                    key={t.key}
                    type="button"
                    onClick={() => setTab(i)}
                    className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-[12.5px] font-semibold transition-colors duration-200 ${
                      i === tab ? "border-indigo/40 bg-indigo/5 text-indigo" : "border-line text-graphite hover:border-indigo/25"
                    }`}
                  >
                    {t.icon}
                    {t.label}
                  </button>
                ))}
              </div>

              {/* tab body (crossfades on change) */}
              <div key={tab} className="geo-panel-fade mt-5">
                <div className="grid gap-2">
                  {active.prompts.map((p) => (
                    <div key={p.prompt} className="flex items-center gap-3 rounded-xl border border-line bg-ivory/50 px-3.5 py-2.5">
                      <span className={`grid size-5 shrink-0 place-items-center rounded-full text-[10px] ${p.brand ? "bg-citron text-ink-solid" : "bg-line text-graphite"}`}>
                        {p.brand ? (
                          <svg width="9" height="9" viewBox="0 0 12 12" fill="none" aria-hidden><path d="m2.5 6.5 2.5 2.5 4.5-5" stroke="#0B0D12" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                        ) : "–"}
                      </span>
                      <span className="flex-1 text-[12.5px] font-medium text-ink">{p.prompt}</span>
                      <span className="text-[11px] text-graphite">{p.competitors} competitors</span>
                    </div>
                  ))}
                </div>
                <p className="mt-4 text-[11px] font-semibold uppercase tracking-[0.12em] text-graphite">Sources cited</p>
                <div className="mt-2 flex flex-wrap gap-2">
                  {active.sources.map((s) => (
                    <span key={s} className="rounded-full border border-line bg-surface px-2.5 py-1 text-[11.5px] text-graphite">{s}</span>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>

          {/* research areas table */}
          <Reveal variant="right" delay={80}>
            <div className="overflow-hidden rounded-3xl border border-line bg-surface">
              <div className="border-b border-line bg-lilac/40 px-5 py-3.5">
                <span className="font-heading text-[14px] font-bold tracking-[-0.01em]">What we assess</span>
              </div>
              {RESEARCH_AREAS.map((r) => (
                <div key={r.area} className="border-b border-line px-5 py-3.5 last:border-b-0">
                  <p className="text-[13.5px] font-bold text-ink">{r.area}</p>
                  <p className="mt-1 text-[12.5px] leading-relaxed text-graphite">{r.assess}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
