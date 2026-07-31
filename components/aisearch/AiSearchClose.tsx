"use client";

import { useState } from "react";
import Reveal from "@/components/motion/Reveal";
import { Badge, CtaLink } from "@/components/ui";
import { AI_WHY, AI_INDUSTRIES, AI_ENGAGEMENTS, AI_LIMITATIONS, AI_FAQS, ROUTES } from "@/lib/ai-search-content";

/* Why Businesses Choose Search Nexio: centered header + icon stat strip,
   then a hub diagram — the brand core in the middle wired by elbow
   connectors to three proof cards on each side. Falls back to stacked cards
   below lg. */
const STATS = [
  {
    big: "10+",
    label: "years of SEO experience",
    icon: (
      <g>
        <circle cx="12" cy="9" r="5.5" />
        <path d="m12 6.6.9 1.8 2 .3-1.5 1.4.4 2-1.8-1-1.8 1 .4-2L9.1 8.7l2-.3Z" />
        <path d="m8.8 13.5-1.6 6 4.8-2.7 4.8 2.7-1.6-6" />
      </g>
    ),
  },
  {
    big: "50+",
    label: "SEO projects",
    icon: (
      <g>
        <path d="M3.5 7.5v10A2.5 2.5 0 0 0 6 20h12a2.5 2.5 0 0 0 2.5-2.5v-8A2.5 2.5 0 0 0 18 7h-6L9.8 4.8A2 2 0 0 0 8.4 4H6a2.5 2.5 0 0 0-2.5 2.5Z" />
        <path d="M3.5 11h17" />
      </g>
    ),
  },
  {
    big: "1",
    label: "integrated search strategy",
    icon: (
      <g>
        <circle cx="12" cy="12" r="7" />
        <circle cx="12" cy="12" r="2.6" />
        <path d="M12 2.5V5M12 19v2.5M21.5 12H19M5 12H2.5" />
      </g>
    ),
  },
];

/* White icons for the indigo card tiles. AI_WHY order: 0 leadership,
   1 projects, 2 one-strategy, 3 collaboration, 4 human-reviewed,
   5 reporting. */
const WHY_TILE_ICONS = [
  /* crown — experienced search leadership */
  <g key="t0">
    <path d="m4 8 4 3.5L12 5l4 6.5L20 8l-1.5 9.5h-13Z" />
    <path d="M5.5 20h13" />
  </g>,
  /* briefcase — broad project experience */
  <g key="t1">
    <rect x="3.5" y="7.5" width="17" height="12.5" rx="2.5" />
    <path d="M9 7.5V6a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v1.5" />
    <path d="M3.5 12.5c2.8 1.3 5.6 2 8.5 2s5.7-.7 8.5-2" />
  </g>,
  /* converging arrows — search and AI under one strategy */
  <g key="t2">
    <path d="M4 4l5 5M9 5.5V9H5.5M20 4l-5 5M15 5.5V9h3.5M4 20l5-5M9 18.5V15H5.5M20 20l-5-5M15 18.5V15h3.5" />
  </g>,
  /* team — enterprise collaboration */
  <g key="t3">
    <circle cx="9.5" cy="8.5" r="2.4" />
    <circle cx="15.5" cy="8.5" r="2.4" />
    <path d="M4.5 18c.4-2.6 2.2-4.2 5-4.2 1 0 1.9.2 2.5.6M13 18c.4-2.6 2.2-4.2 5-4.2" />
  </g>,
  /* person — human-reviewed execution */
  <g key="t4">
    <circle cx="12" cy="8.4" r="3.2" />
    <path d="M5.5 19.5c.5-3.8 3-6 6.5-6s6 2.2 6.5 6" />
  </g>,
  /* bar chart — transparent reporting */
  <g key="t5">
    <rect x="3.5" y="4" width="17" height="16" rx="2.5" />
    <path d="M8 16v-4M12 16V8.5M16 16v-2.5" />
  </g>,
];

const LEFT_CARDS = [0, 3, 4];
const RIGHT_CARDS = [1, 2, 5];

function WhyCard({ index, delay, variant }: { index: number; delay: number; variant: "left" | "right" }) {
  const w = AI_WHY[index];
  return (
    <Reveal variant={variant} delay={delay}>
      <article className="flex h-full gap-4 rounded-2xl bg-surface p-6 shadow-[0_10px_30px_rgba(11,13,18,0.05)]">
        <span className="grid size-12 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-indigo to-indigo-deep text-white">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
            {WHY_TILE_ICONS[index]}
          </svg>
        </span>
        <div>
          <h3 className="font-heading text-[16px] font-bold tracking-[-0.01em]">{w.title}</h3>
          <p className="mt-2 text-[13px] leading-relaxed text-graphite">{w.desc}</p>
        </div>
      </article>
    </Reveal>
  );
}

/* Center column: brand core on faint rings, elbow connectors to each side. */
function WhyHub() {
  return (
    <div className="relative hidden self-stretch lg:block">
      <svg aria-hidden className="absolute inset-0 size-full" viewBox="0 0 220 640" preserveAspectRatio="none" fill="none">
        {[
          "M55 320H8",
          "M88 272V210Q88 196 74 196H8",
          "M88 368v62q0 14-14 14H8",
          "M165 320h47",
          "M132 272V210q0-14 14-14h66",
          "M132 368v62q0 14 14 14h66",
        ].map((d, i) => (
          <path key={i} d={d} stroke="var(--color-indigo)" strokeOpacity="0.4" strokeWidth="1.5" />
        ))}
        {[
          [8, 320], [55, 320], [8, 196], [88, 272], [8, 444], [88, 368],
          [212, 320], [165, 320], [212, 196], [132, 272], [212, 444], [132, 368],
        ].map(([cx, cy], i) => (
          <circle key={i} cx={cx} cy={cy} r="3.2" fill="var(--color-indigo)" fillOpacity="0.7" />
        ))}
      </svg>

      {/* rings + core */}
      <div aria-hidden className="absolute left-1/2 top-1/2 size-48 -translate-x-1/2 -translate-y-1/2 rounded-full border border-indigo/10" />
      <div aria-hidden className="absolute left-1/2 top-1/2 size-40 -translate-x-1/2 -translate-y-1/2 rounded-full border border-indigo/15" />
      <div className="absolute left-1/2 top-1/2 grid size-32 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-surface shadow-[0_20px_50px_rgba(99,91,255,0.25)]">
        <div
          className="grid size-[82%] place-items-center rounded-full"
          style={{
            background: "radial-gradient(circle at 35% 28%, #8F84FF 0%, #635BFF 58%, #4A43D9 100%)",
            boxShadow: "inset 0 10px 22px rgba(255,255,255,0.3), inset 0 -12px 26px rgba(40,34,150,0.35)",
          }}
        >
          <span className="font-heading text-[44px] font-extrabold italic leading-none text-white">N</span>
        </div>
      </div>
    </div>
  );
}

export function AiSearchWhy() {
  return (
    <section className="overflow-x-clip wash-lilac-full py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* centered header */}
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <p className="flex items-center justify-center gap-3 text-[13.5px] font-bold uppercase tracking-[0.06em] text-indigo">
              <span aria-hidden className="flex items-center gap-1">
                <span className="h-[3px] w-7 rounded-full bg-indigo/30" />
                <span className="h-[3px] w-2.5 rounded-full bg-indigo/50" />
              </span>
              Why businesses choose us
              <span aria-hidden className="flex items-center gap-1">
                <span className="h-[3px] w-2.5 rounded-full bg-indigo/50" />
                <span className="h-[3px] w-7 rounded-full bg-indigo/30" />
              </span>
            </p>
            <h2 className="mt-4 font-heading text-[clamp(2.2rem,4.6vw,3.5rem)] font-bold leading-[1.06] tracking-[-0.03em]">
              Why Businesses Choose Search Nexio
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-[16px] leading-relaxed text-graphite">
              We combine deep SEO expertise, proven processes, and AI-powered technology to deliver search visibility that drives real business results.
            </p>
          </div>
        </Reveal>

        {/* stat strip with hairline dividers */}
        <Reveal delay={80}>
          <div className="mx-auto mt-12 grid max-w-4xl gap-8 sm:grid-cols-3">
            {STATS.map((s, i) => (
              <div key={s.label} className={`flex items-center justify-center gap-4 ${i > 0 ? "sm:border-l sm:border-line" : ""}`}>
                <span className="grid size-16 shrink-0 place-items-center rounded-full bg-lilac/80 text-indigo">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                    {s.icon}
                  </svg>
                </span>
                <span>
                  <span className="block font-heading text-[34px] font-bold leading-none tracking-[-0.02em] text-indigo">{s.big}</span>
                  <span className="mt-1 block text-[13.5px] font-medium text-ink">{s.label}</span>
                </span>
              </div>
            ))}
          </div>
        </Reveal>

        {/* hub diagram: three cards each side of the brand core */}
        <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-[1fr_220px_1fr] lg:gap-x-0 lg:gap-y-5">
          <div className="grid gap-4 lg:gap-5">
            {LEFT_CARDS.map((idx, i) => (
              <WhyCard key={idx} index={idx} delay={i * 80} variant="left" />
            ))}
          </div>
          <WhyHub />
          <div className="grid gap-4 lg:gap-5">
            {RIGHT_CARDS.map((idx, i) => (
              <WhyCard key={idx} index={idx} delay={i * 80} variant="right" />
            ))}
          </div>
        </div>

        <Reveal delay={80}>
          <p className="mt-10 text-center text-[14px] leading-relaxed text-graphite">
            Read more about the team and approach on the{" "}
            <a href={ROUTES.about} className="font-semibold text-indigo underline decoration-indigo/30 underline-offset-2">About Search Nexio</a>{" "}
            page.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

/* Built for Complex Buying Journeys: five industry cards. */
export function AiSearchIndustries() {
  return (
    <section className="overflow-x-clip py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <div className="max-w-3xl">
            <h2 className="font-heading text-[clamp(1.9rem,3.6vw,2.6rem)] font-bold leading-[1.12] tracking-[-0.02em]">
              Built for Complex Buying Journeys
            </h2>
            <p className="mt-6 text-[15px] leading-relaxed text-graphite">
              AI search optimization produces the most measurable impact where buyers compare providers, validate expertise and review several sources before making contact. These are the conditions under which AI tools become embedded in the evaluation process.
            </p>
          </div>
        </Reveal>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {AI_INDUSTRIES.map((ind, i) => (
            <Reveal key={ind.name} variant="up" delay={Math.min((i % 3) * 60, 120)}>
              <article className="flex h-full flex-col rounded-2xl border border-line bg-surface p-6">
                <h3 className="font-heading text-[16.5px] font-bold tracking-[-0.01em]">{ind.name}</h3>
                <p className="mt-2 text-[13.5px] leading-relaxed text-graphite">{ind.desc}</p>
              </article>
            </Reveal>
          ))}
          {/* enterprise note card */}
          <Reveal variant="up" delay={120}>
            <article className="flex h-full flex-col justify-center rounded-2xl border border-indigo/25 bg-lilac/40 p-6">
              <p className="text-[13.5px] leading-relaxed text-ink">
                Larger organizations can combine the specialist AI search layer with our{" "}
                <a href={ROUTES.enterpriseSeo} className="font-semibold text-indigo underline decoration-indigo/30 underline-offset-2">Enterprise SEO services</a>{" "}
                when wider governance and technical work are required.
              </p>
            </article>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* Ways to Work With Us: three engagement cards (no pricing) + shared CTA. */
export function AiSearchWays() {
  return (
    <section className="overflow-x-clip wash-lilac-full py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          {/* sticky intro column */}
          <Reveal variant="left" className="lg:sticky lg:top-28 lg:self-start">
            <h2 className="font-heading text-[clamp(1.9rem,3.6vw,2.8rem)] font-bold leading-[1.1] tracking-[-0.02em]">
              Ways to Work
              <br />
              With <span className="text-indigo">Us</span>
            </h2>
            <span className="mt-6 block h-1 w-12 rounded-full bg-indigo" />
            <div className="mt-10 hidden lg:block">
              <CtaLink href={ROUTES.contact} variant="ghost">
                Discuss Your AI Search Strategy
              </CtaLink>
            </div>
          </Reveal>

          {/* decision path on a drawn spine */}
          <Reveal>
            <div className="relative">
              <span
                aria-hidden
                className="journey-line absolute bottom-6 left-5 top-6 w-px bg-indigo/25"
              />
              {AI_ENGAGEMENTS.map((e, i) => (
                <div
                  key={e.title}
                  className={`reveal-item relative pl-16 ${i > 0 ? "border-t border-line" : ""} py-9 first:pt-2 last:pb-2`}
                  style={{ transitionDelay: `${150 + i * 120}ms` }}
                >
                  <span className={`absolute left-0 grid size-10 place-items-center rounded-full bg-gradient-to-b from-indigo to-indigo-deep font-heading text-[14px] font-bold text-white ${i === 0 ? "top-2" : "top-9"}`}>
                    {i + 1}
                  </span>
                  <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-indigo">
                    Best for · {e.bestFor}
                  </p>
                  <h3 className="mt-2.5 font-heading text-[clamp(1.2rem,2vw,1.5rem)] font-bold leading-snug tracking-[-0.015em]">
                    {e.title}
                  </h3>
                  <p className="mt-3 max-w-xl text-[14px] leading-relaxed text-graphite">{e.desc}</p>
                  <a href={e.next.href} className="group mt-4 inline-flex items-center gap-2 text-[13.5px] font-semibold text-indigo">
                    {e.next.label}
                    <span className="grid size-5 place-items-center rounded-full bg-indigo/10 transition-all duration-200 group-hover:bg-indigo group-hover:text-white">
                      <svg width="11" height="11" viewBox="0 0 12 12" fill="none" aria-hidden><path d="M2 6h8m0 0L6.5 2.5M10 6l-3.5 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                    </span>
                  </a>
                </div>
              ))}
            </div>
            {/* mobile CTA */}
            <div className="mt-8 lg:hidden">
              <CtaLink href={ROUTES.contact} variant="ghost">
                Discuss Your AI Search Strategy
              </CtaLink>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* Realistic Outcomes and Limitations: shield emblem over a centered
   two-tone heading, then three soft rows — icon, divider, copy with the
   load-bearing phrases highlighted in indigo. */

/* Wraps the listed phrases of a sentence in bold indigo. */
function Highlighted({ text, phrases }: { text: string; phrases: string[] }) {
  const pattern = new RegExp(`(${phrases.map((p) => p.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")).join("|")})`, "g");
  return (
    <>
      {text.split(pattern).map((part, i) =>
        phrases.includes(part) ? (
          <strong key={i} className="font-semibold text-indigo">{part}</strong>
        ) : (
          <span key={i}>{part}</span>
        )
      )}
    </>
  );
}

export function AiSearchLimitations() {
  const rows = [
    {
      icon: (
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="var(--color-indigo)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
          <path d="M4.5 19.5h15" />
          <path d="M7 19.5v-4M11 19.5v-6.5M15 19.5v-4.5" />
          <path d="M6.5 11 12 6l2.5 2.5L19 4.5" />
          <path d="M15.5 4.5H19V8" />
        </svg>
      ),
      body: (
        <Highlighted
          text={AI_LIMITATIONS.intro}
          phrases={["cannot guarantee"]}
        />
      ),
    },
    {
      icon: (
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="var(--color-indigo)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
          <path d="M19.5 12a7.5 7.5 0 0 1-13 5.1M4.5 12a7.5 7.5 0 0 1 13-5.1" />
          <path d="M17.5 3.5v3.4h-3.4M6.5 20.5v-3.4h3.4" />
        </svg>
      ),
      body: (
        <Highlighted
          text={AI_LIMITATIONS.outro}
          phrases={[
            "differences",
            "gradual movement",
            "what changed, what can be measured and where uncertainty remains",
          ]}
        />
      ),
    },
    {
      icon: (
        <svg width="26" height="26" viewBox="0 0 24 24" fill="var(--color-indigo)" aria-hidden>
          <path d="M5 6.5C6.8 6.8 8 8.2 8 10.2c0 .3 0 .6-.1.8H10v6.5H3.5v-6C3.5 8.6 4 7.3 5 6.5Z" />
          <path d="M14.5 6.5c1.8.3 3 1.7 3 3.7 0 .3 0 .6-.1.8h2.1v6.5H13v-6c0-2.9.5-4.2 1.5-5Z" />
        </svg>
      ),
      body: (
        <>
          AI visibility is earned through clarity, authority and continuous
          optimization,{" "}
          <strong className="font-semibold text-indigo">not guaranteed by any platform.</strong>
        </>
      ),
    },
  ];

  return (
    <section className="overflow-x-clip py-16 md:py-24">
      <div className="mx-auto max-w-5xl px-6">
        <Reveal>
          {/* shield emblem over faint arcs */}
          <div className="relative flex justify-center">
            <span aria-hidden className="absolute top-1/2 size-36 -translate-y-1/2 rounded-full border border-indigo/10" />
            <span aria-hidden className="absolute top-1/2 size-52 -translate-y-1/2 rounded-full border border-indigo/[0.06]" />
            <span aria-hidden className="absolute left-[34%] top-0 size-1.5 rounded-full bg-indigo/40" />
            <span aria-hidden className="absolute right-[33%] top-10 size-1.5 rounded-full bg-indigo/30" />
            <span className="relative grid size-20 place-items-center rounded-full bg-surface shadow-[0_16px_44px_rgba(99,91,255,0.18)]">
              <svg width="30" height="30" viewBox="0 0 22 22" fill="none" stroke="var(--color-indigo)" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                <path d="M11 3 4 6v5c0 4 3 6.5 7 8 4-1.5 7-4 7-8V6l-7-3Z" />
              </svg>
            </span>
          </div>

          <h2 className="mt-8 text-center font-heading text-[clamp(2rem,4.4vw,3.2rem)] font-bold leading-[1.08] tracking-[-0.03em]">
            Realistic Outcomes <span className="text-indigo">and Limitations</span>
          </h2>
          <div className="mt-5 flex items-center justify-center gap-1.5" aria-hidden>
            <span className="h-1 w-14 rounded-full bg-indigo/60" />
            <span className="size-1.5 rounded-full bg-indigo/60" />
          </div>
        </Reveal>

        <div className="mt-12 grid gap-5">
          {rows.map((r, i) => (
            <Reveal key={i} variant="up" delay={Math.min(i * 90, 180)}>
              <div className="flex flex-col items-start gap-5 rounded-3xl bg-surface px-7 py-7 shadow-[0_14px_40px_rgba(11,13,18,0.06)] sm:flex-row sm:items-center sm:gap-7">
                <span className="grid size-16 shrink-0 place-items-center rounded-full bg-lilac/70">{r.icon}</span>
                <span aria-hidden className="hidden h-12 w-px shrink-0 bg-line sm:block" />
                <p className="text-[15px] leading-relaxed text-ink/85">{r.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* FAQ accordion. */
function FaqRow({ q, a, defaultOpen }: { q: string; a: React.ReactNode; defaultOpen?: boolean }) {
  const [open, setOpen] = useState(!!defaultOpen);
  return (
    <div className="overflow-hidden rounded-2xl border border-line bg-surface">
      <button type="button" onClick={() => setOpen((v) => !v)} aria-expanded={open} className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left">
        <span className="font-heading text-[16px] font-bold tracking-[-0.01em]">{q}</span>
        <span className={`grid size-7 shrink-0 place-items-center rounded-full border border-line transition-all duration-300 ${open ? "rotate-45 border-indigo/40 bg-indigo text-white" : "text-graphite"}`}>
          <svg width="13" height="13" viewBox="0 0 14 14" fill="none" aria-hidden><path d="M7 2v10M2 7h10" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" /></svg>
        </span>
      </button>
      <div className={`grid transition-all duration-300 ease-soft ${open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
        <div className="overflow-hidden"><p className="px-6 pb-5 text-[14px] leading-relaxed text-graphite">{a}</p></div>
      </div>
    </div>
  );
}

export function AiSearchFaq() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: AI_FAQS.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
  };
  return (
    <section className="mx-auto max-w-4xl overflow-x-clip px-6 py-16 md:py-24">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Reveal>
        <h2 className="text-center font-heading text-[clamp(1.9rem,3.6vw,2.6rem)] font-bold leading-[1.12] tracking-[-0.02em]">
          Frequently Asked Questions
        </h2>
      </Reveal>
      <div className="mt-10 grid gap-3">
        {AI_FAQS.map((f, i) => {
          /* the GEO vs AEO answer carries the GEO/AEO service links */
          const answer =
            f.q.startsWith("What is the difference between GEO and AEO") ? (
              <>
                {f.a}{" "}Our{" "}
                <a href={ROUTES.geo} className="font-semibold text-indigo underline decoration-indigo/30 underline-offset-2">GEO services</a>{" "}
                and{" "}
                <a href={ROUTES.aeo} className="font-semibold text-indigo underline decoration-indigo/30 underline-offset-2">AEO services</a>{" "}
                address each layer in detail.
              </>
            ) : (
              f.a
            );
          return (
            <Reveal key={f.q} variant={i % 2 === 0 ? "left" : "right"} delay={Math.min(i * 50, 240)}>
              <FaqRow q={f.q} a={answer} defaultOpen={i === 0} />
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}

/* Request an AI Visibility Review (final form). */
function Field({ label, type = "text", required = false, full = false }: { label: string; type?: string; required?: boolean; full?: boolean }) {
  return (
    <label className={`block ${full ? "sm:col-span-2" : ""}`}>
      <span className="text-[12.5px] font-semibold text-ink">{label}{required && <span className="text-indigo"> *</span>}</span>
      <input type={type} required={required} className="mt-1.5 w-full rounded-xl border border-line bg-ivory/60 px-3.5 py-2.5 text-[14px] text-ink outline-none transition-colors focus:border-indigo/50 focus:bg-surface" />
    </label>
  );
}

export function AiSearchForm() {
  const [sent, setSent] = useState(false);
  return (
    <section id="visibility-review" className="scroll-mt-24 overflow-x-clip py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12">
          <Reveal variant="left">
            <Badge>AI Visibility Review</Badge>
            <h2 className="mt-5 font-heading text-[clamp(1.9rem,3.6vw,2.6rem)] font-bold leading-[1.12] tracking-[-0.02em]">
              Request an AI Visibility Review
            </h2>
            <p className="mt-5 text-[15px] leading-relaxed text-graphite">
              Share a few details about your business and current search priorities. Search Nexio will review the request and recommend the most appropriate starting point across the AI Visibility Audit, GEO and AEO.
            </p>
            <p className="mt-6 text-[14px] text-graphite">
              Prefer to speak directly?{" "}
              <a href={ROUTES.contact} className="font-semibold text-indigo underline decoration-indigo/30 underline-offset-2">Book a Strategy Call</a>
            </p>
          </Reveal>

          <Reveal variant="right" delay={80}>
            <div className="rounded-3xl border border-line bg-surface p-7 md:p-8">
              {sent ? (
                <div className="grid min-h-[360px] place-items-center text-center">
                  <div>
                    <span className="mx-auto grid size-14 place-items-center rounded-2xl bg-citron">
                      <svg width="24" height="24" viewBox="0 0 12 12" fill="none" aria-hidden><path d="m2.5 6.5 2.5 2.5 4.5-5" stroke="#0B0D12" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                    </span>
                    <h3 className="mt-5 font-heading text-[20px] font-bold tracking-[-0.01em]">Request received</h3>
                    <p className="mx-auto mt-2 max-w-sm text-[14px] leading-relaxed text-graphite">Thank you. Search Nexio will review your details and recommend the most appropriate starting point.</p>
                  </div>
                </div>
              ) : (
                <form onSubmit={(e) => { e.preventDefault(); setSent(true); }}>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <Field label="First name" required />
                    <Field label="Last name" required />
                    <Field label="Website" type="url" required />
                    <Field label="Work email" type="email" required />
                    <Field label="Phone number" type="tel" required />
                    <Field label="Company name" />
                    <Field label="Primary market or region" full />
                    <label className="block sm:col-span-2">
                      <span className="text-[12.5px] font-semibold text-ink">What would you like to improve? <span className="text-indigo">*</span></span>
                      <textarea required rows={4} className="mt-1.5 w-full resize-none rounded-xl border border-line bg-ivory/60 px-3.5 py-2.5 text-[14px] text-ink outline-none transition-colors focus:border-indigo/50 focus:bg-surface" />
                    </label>
                  </div>
                  <button type="submit" className="group mt-6 inline-flex w-full items-center justify-center gap-2.5 rounded-full bg-citron py-3 text-[14.5px] font-semibold text-ink-solid transition-colors duration-200 hover:bg-citron-deep sm:w-auto sm:justify-start sm:pl-6 sm:pr-2.5">
                    Request My AI Visibility Review
                    <span aria-hidden className="grid size-6 place-items-center rounded-full bg-ink-solid text-citron transition-transform duration-200 group-hover:translate-x-0.5">
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2 6h8m0 0L6.5 2.5M10 6l-3.5 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                    </span>
                  </button>
                  <p className="mt-4 text-[11.5px] leading-relaxed text-graphite">
                    By submitting this form you agree that Search Nexio may use the information provided to respond to your enquiry in accordance with the{" "}
                    <a href={ROUTES.privacy} className="font-semibold underline decoration-graphite/40 underline-offset-2">Privacy Policy</a>.
                  </p>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
