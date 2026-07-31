"use client";

import { useState } from "react";
import Reveal from "@/components/motion/Reveal";
import { WORK_COVERS, AI_PLATFORMS } from "@/lib/ai-search-content";
import { GoogleG, ChatGPTMark, GeminiMark, PerplexityKnot, ClaudeSpark, CopilotMark } from "@/components/brand-icons";

/* What the Work Covers: an interactive five-item list with a sticky detail
   panel on desktop (selecting an item updates the panel), accordion on
   mobile. */

function CheckDot() {
  return (
    <span className="grid size-6 shrink-0 place-items-center rounded-full bg-citron">
      <svg width="11" height="11" viewBox="0 0 12 12" fill="none" aria-hidden>
        <path d="m2.5 6.5 2.5 2.5 4.5-5" stroke="#0B0D12" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </span>
  );
}

/* Line icons for the five delivery components. */
const COVER_ICONS = [
  /* technical — monitor with magnifier */
  <g key="c1">
    <rect x="3" y="4" width="18" height="13" rx="2.5" />
    <path d="M9.5 21h5M12 17v4" />
    <circle cx="11" cy="10" r="2.8" />
    <path d="M13.2 12.2 15.5 14" />
  </g>,
  /* content — document and pencil */
  <g key="c2">
    <path d="M13 3.5H7A2.5 2.5 0 0 0 4.5 6v12A2.5 2.5 0 0 0 7 20.5h7.5" />
    <path d="M8 8h6M8 11.5h4" />
    <path d="m14 16.5 5.5-5.5 2 2-5.5 5.5-2.6.6Z" />
  </g>,
  /* entity — profile card */
  <g key="c3">
    <rect x="3.5" y="5" width="17" height="14" rx="2.5" />
    <circle cx="9" cy="11" r="2" />
    <path d="M6.3 16c.3-1.6 1.4-2.6 2.7-2.6s2.4 1 2.7 2.6" />
    <path d="M14.5 9.5h4M14.5 12.5h4M14.5 15.5h2.5" />
  </g>,
  /* authority — megaphone */
  <g key="c4">
    <path d="M3.5 10.5v3a1.5 1.5 0 0 0 1.5 1.5h2l7.5 4.5V6L7 10.5H5a1.5 1.5 0 0 0-1.5 0Z" />
    <path d="M7 15v4.5" />
    <path d="M17.5 9.5c.7.6 1 1.5 1 2.5s-.3 1.9-1 2.5" />
  </g>,
  /* monitoring — pulse chart */
  <g key="c5">
    <rect x="3.5" y="4.5" width="17" height="15" rx="2.5" />
    <path d="M6.5 13h2.5l1.6-3.6 2.2 5.8 1.6-2.2h3.1" />
  </g>,
];

export function AiSearchWorkCovers() {
  const [active, setActive] = useState(0);
  const current = WORK_COVERS[active];
  return (
    <section className="relative overflow-hidden wash-lilac-full py-16 md:py-24">
      {/* faint arc decor top-right, dot grid bottom-left */}
      <div aria-hidden className="pointer-events-none absolute -right-32 -top-32 hidden lg:block">
        <div className="size-[380px] rounded-full border border-indigo/[0.07]" />
        <div className="absolute inset-8 rounded-full border border-indigo/[0.08]" />
        <div className="absolute inset-16 rounded-full border border-indigo/[0.09]" />
      </div>
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-10 left-8 hidden h-24 w-32 lg:block"
        style={{
          backgroundImage: "radial-gradient(var(--wm-stroke) 1.6px, transparent 1.6px)",
          backgroundSize: "14px 14px",
        }}
      />

      <div className="relative mx-auto max-w-6xl px-6">
        <Reveal>
          <div className="max-w-3xl">
            <p className="text-[12.5px] font-bold uppercase tracking-[0.16em] text-indigo">
              Our work coverage
            </p>
            <h2 className="mt-3 font-heading text-[clamp(2.1rem,4.2vw,3.2rem)] font-bold leading-[1.08] tracking-[-0.03em]">
              What the Work <span className="text-indigo">Covers</span>
            </h2>
            <p className="mt-5 text-[15.5px] leading-relaxed text-graphite">
              The three services are supported by a coordinated set of technical, content, entity and authority activities. These are delivery components within the engagement, not separate service pages.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
          {/* selectable list: active row is an elevated card, the rest sit on
              hairlines */}
          <Reveal variant="left">
            <div>
              {WORK_COVERS.map((w, i) => {
                const on = i === active;
                return (
                  <div key={w.key} className={on ? "" : "border-b border-line last:border-b-0"}>
                    <button
                      type="button"
                      onClick={() => setActive(i)}
                      aria-expanded={on}
                      className={`flex w-full items-center gap-4 px-5 py-5 text-left transition-all duration-300 ease-soft ${
                        on
                          ? "rounded-2xl border border-indigo/25 bg-surface shadow-[0_16px_40px_rgba(99,91,255,0.12)]"
                          : "group"
                      }`}
                    >
                      <span className="grid size-11 shrink-0 place-items-center rounded-full bg-lilac font-heading text-[13.5px] font-bold tabular-nums text-indigo">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className={`flex-1 font-heading text-[16.5px] font-bold tracking-[-0.01em] transition-colors ${on ? "text-indigo" : "text-ink group-hover:text-indigo"}`}>
                        {w.title}
                      </span>
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden className={`shrink-0 transition-all duration-300 ${on ? "text-indigo" : "text-graphite/50 group-hover:translate-x-0.5"}`}>
                        <path d="M6 3l5 5-5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </button>
                    {/* mobile accordion body */}
                    <div className={`overflow-hidden lg:hidden ${on ? "max-h-[520px]" : "max-h-0"} transition-[max-height] duration-500 ease-soft`}>
                      <div className="px-5 pb-6 pt-1">
                        <p className="text-[13.5px] leading-relaxed text-graphite">{w.desc}</p>
                        <ul className="mt-4 grid gap-2.5">
                          {w.points.map((p) => (
                            <li key={p} className="flex items-center gap-3 rounded-xl border border-line bg-surface px-3.5 py-2.5 text-[13px] font-medium text-ink">
                              <CheckDot /> {p}
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

          {/* open detail panel */}
          <Reveal variant="right" delay={80} className="hidden lg:block">
            <div className="sticky top-28">
              <div key={active} className="geo-panel-fade">
                <div className="flex items-center gap-5">
                  <span className="grid size-20 shrink-0 place-items-center rounded-full bg-lilac/80 text-indigo">
                    <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                      {COVER_ICONS[active]}
                    </svg>
                  </span>
                  <div>
                    <p className="text-[11.5px] font-bold uppercase tracking-[0.16em] text-indigo">
                      Delivery component
                    </p>
                    <h3 className="mt-1.5 font-heading text-[26px] font-bold tracking-[-0.02em]">{current.title}</h3>
                  </div>
                </div>

                <p className="mt-6 text-[15px] leading-relaxed text-graphite">{current.desc}</p>

                <ul className="mt-6 grid gap-3">
                  {current.points.map((p, i) => (
                    <li
                      key={p}
                      className="reveal-item flex items-center gap-3.5 rounded-2xl border border-line bg-surface px-4.5 py-3.5 text-[14px] font-medium text-ink"
                      style={{ transitionDelay: `${i * 60}ms` }}
                    >
                      <CheckDot /> {p}
                    </li>
                  ))}
                </ul>

                {current.link && (
                  <a href={current.link.href} className="group mt-6 inline-flex items-center gap-2 text-[14.5px] font-semibold text-indigo">
                    {current.link.label}
                    <svg width="15" height="15" viewBox="0 0 12 12" fill="none" aria-hidden className="transition-transform duration-200 group-hover:translate-x-0.5">
                      <path d="M2 6h8m0 0L6.5 2.5M10 6l-3.5 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </a>
                )}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* Platforms We Optimize For: an expanding card rail. The hovered platform
   opens into a full card; the others collapse into vertical indigo pills
   with their number chip, like an accordion. Stacked cards below lg. */
const PLATFORM_ICONS = [
  <GoogleG key="g" size={26} />,
  <ChatGPTMark key="c" size={26} />,
  <GeminiMark key="ge" size={26} />,
  <PerplexityKnot key="p" size={26} />,
  <span key="cc" className="flex items-center gap-1.5">
    <ClaudeSpark size={18} />
    <CopilotMark size={20} />
  </span>,
];

export function AiSearchPlatforms() {
  const [active, setActive] = useState(0);

  return (
    <section className="overflow-x-clip py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <div className="max-w-3xl">
            <h2 className="font-heading text-[clamp(1.9rem,3.6vw,2.6rem)] font-bold leading-[1.12] tracking-[-0.02em]">
              Platforms We <span className="text-indigo">Optimize</span> For
            </h2>
            <p className="mt-6 text-[15px] leading-relaxed text-graphite">
              Platform relevance depends on where your customers research, compare and validate providers. Search Nexio selects the platforms that matter to the buying journey rather than applying an identical method to every surface.
            </p>
          </div>
        </Reveal>

        {/* desktop: expanding rail */}
        <Reveal delay={80}>
          <div className="mt-12 hidden h-[360px] gap-4 lg:flex">
            {AI_PLATFORMS.map((p, i) => {
              const open = active === i;
              const num = String(i + 1).padStart(2, "0");
              return (
                <div
                  key={p.name}
                  role="button"
                  tabIndex={0}
                  aria-expanded={open}
                  onMouseEnter={() => setActive(i)}
                  onFocus={() => setActive(i)}
                  onClick={() => setActive(i)}
                  className={`relative cursor-pointer overflow-hidden rounded-3xl transition-all duration-500 ease-soft ${
                    open
                      ? "border border-line bg-surface"
                      : "border border-transparent bg-gradient-to-b from-indigo to-indigo-deep"
                  }`}
                  style={{ flexGrow: open ? 3.2 : 0.55, flexBasis: 0 }}
                >
                  {/* open card */}
                  <div
                    className={`absolute inset-0 flex min-w-[300px] flex-col p-8 transition-opacity duration-300 ${
                      open ? "opacity-100 delay-150" : "pointer-events-none opacity-0"
                    }`}
                  >
                    <span aria-hidden className="absolute -bottom-20 -right-20 size-64 rounded-full bg-lilac/70 blur-2xl" />
                    <div className="relative flex items-start justify-between">
                      <span className="grid size-14 place-items-center rounded-2xl bg-gradient-to-b from-lilac to-lilac/40">
                        {PLATFORM_ICONS[i]}
                      </span>
                      <span className="grid size-9 place-items-center rounded-full border border-line bg-surface text-[12.5px] font-bold text-indigo">
                        {num}
                      </span>
                    </div>
                    <h3 className="relative mt-auto font-heading text-[22px] font-bold tracking-[-0.01em]">
                      {p.name}
                    </h3>
                    <p className="relative mt-3 max-w-md text-[14px] leading-relaxed text-graphite">
                      {p.desc}
                    </p>
                  </div>

                  {/* collapsed pill */}
                  <div
                    className={`absolute inset-0 flex flex-col items-center justify-between py-6 transition-opacity duration-300 ${
                      open ? "pointer-events-none opacity-0" : "opacity-100 delay-150"
                    }`}
                  >
                    <span
                      className="whitespace-nowrap font-heading text-[16.5px] font-bold tracking-[-0.01em] text-white"
                      style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
                    >
                      {p.name}
                    </span>
                    <span className="grid size-9 place-items-center rounded-full bg-white text-[12.5px] font-bold text-indigo">
                      {num}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </Reveal>

        {/* mobile: stacked cards */}
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:hidden">
          {AI_PLATFORMS.map((p, i) => (
            <Reveal key={p.name} variant="up" delay={Math.min(i * 50, 200)}>
              <article className="flex h-full flex-col rounded-2xl border border-line bg-surface p-5">
                <div className="flex items-center justify-between">
                  <span className="grid size-10 place-items-center rounded-xl border border-line bg-ivory">{PLATFORM_ICONS[i]}</span>
                  <span className="text-[12px] font-bold tabular-nums text-indigo/60">{String(i + 1).padStart(2, "0")}</span>
                </div>
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
