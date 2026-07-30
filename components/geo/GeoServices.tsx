"use client";

import { useState } from "react";
import Reveal from "@/components/motion/Reveal";
import { GEO_SERVICES } from "@/lib/geo-content";

/* Our generative engine optimization services: a two-column layout — a list
   of selectable service cards on the left, and a sticky analysis panel on
   the right that updates when a service is selected. On mobile it collapses
   into an accordion (the panel details expand under the active card). */

function CheckDot() {
  return (
    <span className="mt-0.5 grid size-4 shrink-0 place-items-center rounded-full bg-citron">
      <svg width="9" height="9" viewBox="0 0 12 12" fill="none" aria-hidden>
        <path d="m2.5 6.5 2.5 2.5 4.5-5" stroke="#0B0D12" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </span>
  );
}

export default function GeoServices() {
  const [active, setActive] = useState(0);
  const current = GEO_SERVICES[active];

  return (
    <section className="overflow-x-clip wash-lilac-full py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <div className="max-w-3xl">
            <h2 className="font-heading text-[clamp(1.9rem,3.6vw,2.6rem)] font-bold leading-[1.12] tracking-[-0.02em]">
              Our generative engine optimization services
            </h2>
            <p className="mt-6 text-[15px] leading-relaxed text-graphite">
              Search Nexio combines prompt intelligence, content, technical foundations and external authority within one coordinated program. Each engagement begins with a measurable baseline and a prioritized implementation plan.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-4 lg:grid-cols-[1fr_1fr] lg:gap-8">
          {/* left: selectable service cards */}
          <Reveal variant="left">
            <div className="grid gap-3">
              {GEO_SERVICES.map((s, i) => {
                const on = i === active;
                return (
                  <div key={s.key}>
                    <button
                      type="button"
                      onClick={() => setActive(i)}
                      aria-expanded={on}
                      className={`flex w-full items-center gap-3 rounded-2xl border px-5 py-4 text-left transition-all duration-300 ease-soft ${
                        on
                          ? "border-indigo/40 bg-surface shadow-[0_10px_30px_rgba(99,91,255,0.08)]"
                          : "border-line bg-surface/70 hover:border-indigo/25 hover:bg-surface"
                      }`}
                    >
                      <span className={`grid size-8 shrink-0 place-items-center rounded-lg font-heading text-[13px] font-bold tabular-nums transition-colors ${on ? "bg-indigo text-white" : "bg-lilac text-indigo"}`}>
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className={`flex-1 font-heading text-[15.5px] font-bold tracking-[-0.01em] transition-colors ${on ? "text-indigo" : "text-ink"}`}>
                        {s.title}
                      </span>
                      <svg
                        width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden
                        className={`shrink-0 text-graphite transition-transform duration-300 ${on ? "rotate-90 text-indigo" : ""}`}
                      >
                        <path d="M6 3l5 5-5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </button>

                    {/* mobile accordion body */}
                    <div className={`overflow-hidden lg:hidden ${on ? "max-h-[420px]" : "max-h-0"} transition-[max-height] duration-500 ease-soft`}>
                      <div className="rounded-b-2xl border-x border-b border-line bg-surface px-5 pb-5 pt-2">
                        <p className="text-[13.5px] leading-relaxed text-graphite">{s.summary}</p>
                        <ul className="mt-4 grid gap-2">
                          {s.panel.map((item) => (
                            <li key={item} className="flex gap-2.5 text-[13px] text-ink">
                              <CheckDot /> {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </Reveal>

          {/* right: sticky analysis panel (desktop only) */}
          <Reveal variant="right" delay={80} className="hidden lg:block">
            <div className="sticky top-28">
              <div className="rounded-3xl border border-line bg-surface p-7">
                <div className="flex items-center gap-2 border-b border-line pb-4">
                  <span aria-hidden className="flex items-center">
                    <span className="size-3 rounded-full bg-ink" />
                    <span className="-ml-1 size-3 rounded-full bg-indigo mix-blend-multiply" />
                  </span>
                  <span className="font-heading text-[13px] font-bold tracking-[-0.01em]">Service detail</span>
                </div>

                {/* keyed so it crossfades when the active service changes */}
                <div key={active} className="geo-panel-fade pt-5">
                  <h3 className="font-heading text-[20px] font-bold tracking-[-0.01em]">{current.title}</h3>
                  <p className="mt-3 text-[14px] leading-relaxed text-graphite">{current.summary}</p>
                  <ul className="mt-6 grid gap-2.5">
                    {current.panel.map((item) => (
                      <li key={item} className="flex gap-3 rounded-xl border border-line bg-ivory/50 px-3.5 py-2.5 text-[13.5px] font-medium text-ink">
                        <CheckDot /> {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
