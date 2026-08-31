"use client";

import Reveal from "@/components/motion/Reveal";
import FaqSection from "@/components/FaqSection";
import { CtaLink } from "@/components/ui";
import { InlineCta } from "@/components/seoservices/SeoMid";
import {
  SEO_PROCESS,
  SEO_MEASURE,
  SEO_WHY,
  SEO_WHEN,
  SEO_FAQS,
  SEO_FINAL,
  SEO_CTA,
  SEO_ROUTES,
} from "@/lib/seo-services-content";

/* ---- How Our SEO Process Works ----
   The deck's six-step path: two rows of three on desktop, each row's
   progress line drawing on scroll; one vertical timeline on mobile. ---- */

function ProcessStep({ step, index }: { step: (typeof SEO_PROCESS.steps)[number]; index: number }) {
  return (
    <div className="reveal-item" style={{ transitionDelay: `${150 + (index % 3) * 110}ms` }}>
      <span className="relative z-10 inline-grid size-11 place-items-center rounded-full bg-ink font-heading text-[14px] font-bold text-citron shadow-[0_10px_26px_rgba(11,13,18,0.22)]">
        {index + 1}
      </span>
      <h3 className="mt-4 font-heading text-[16px] font-bold leading-snug tracking-[-0.01em]">
        {step.title}
      </h3>
      <p className="mt-2.5 max-w-[320px] text-[13.5px] leading-relaxed text-graphite">
        {step.desc}
      </p>
    </div>
  );
}

export function SeoProcess() {
  const rows = [SEO_PROCESS.steps.slice(0, 3), SEO_PROCESS.steps.slice(3)];

  return (
    <section className="overflow-x-clip wash-lilac-full py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <h2 className="max-w-2xl font-heading text-[clamp(1.9rem,3.6vw,2.6rem)] font-bold leading-[1.12] tracking-[-0.02em]">
            How Our SEO <span className="text-indigo">Process Works</span>
          </h2>
        </Reveal>

        {/* desktop: two rows of three, the path drawing across each row */}
        <div className="mt-12 hidden space-y-14 lg:block">
          {rows.map((row, r) => (
            <Reveal key={r} delay={r * 120}>
              <div className="relative">
                <span
                  aria-hidden
                  className="flow-line absolute left-[22px] right-[18%] top-[22px] h-px bg-gradient-to-r from-indigo/40 via-indigo/30 to-indigo/10"
                />
                <div className="grid grid-cols-3 gap-8">
                  {row.map((s, i) => (
                    <ProcessStep key={s.title} step={s} index={r * 3 + i} />
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* mobile: one vertical timeline */}
        <div className="relative mt-10 lg:hidden">
          <span
            aria-hidden
            className="absolute bottom-6 left-[21px] top-6 w-px bg-gradient-to-b from-indigo/40 via-indigo/25 to-transparent"
          />
          {SEO_PROCESS.steps.map((s, i) => (
            <Reveal key={s.title} delay={i * 60}>
              <div className="relative flex gap-5 pb-9 last:pb-0">
                <span className="relative z-10 grid size-11 shrink-0 place-items-center rounded-full bg-ink font-heading text-[14px] font-bold text-citron shadow-[0_10px_26px_rgba(11,13,18,0.22)]">
                  {i + 1}
                </span>
                <div className="pt-1">
                  <h3 className="font-heading text-[16px] font-bold leading-snug tracking-[-0.01em]">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-[13.5px] leading-relaxed text-graphite">{s.desc}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---- How We Measure SEO Performance ----
   The deck's compact dashboard-style panel: KPI names with small
   sparkline marks. No numbers anywhere; nothing is invented. ---- */

/* Decorative sparkline shapes; deliberately unlabeled and unscaled. */
const SPARKS = [
  "M1 15 C8 13 12 9 18 8 S30 10 37 5",
  "M1 13 C7 12 13 12 19 9 S31 7 37 6",
  "M1 14 C9 14 13 8 20 8 S31 6 37 4",
  "M1 12 C8 12 12 10 18 10 S30 6 37 6",
  "M1 15 C7 11 14 12 20 9 S31 8 37 5",
  "M1 13 C8 13 13 9 19 9 S30 8 37 4",
  "M1 14 C8 12 12 11 19 8 S30 8 37 6",
  "M1 12 C8 12 14 9 20 9 S31 5 37 5",
];

export function SeoMeasure() {
  return (
    <section className="overflow-x-clip py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <h2 className="max-w-2xl font-heading text-[clamp(1.9rem,3.6vw,2.6rem)] font-bold leading-[1.12] tracking-[-0.02em]">
            How We Measure <span className="text-indigo">SEO Performance</span>
          </h2>
          <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-graphite">
            {SEO_MEASURE.intro}
          </p>
        </Reveal>

        <Reveal delay={80}>
          <div className="mt-10 overflow-hidden rounded-3xl border border-line bg-surface shadow-[0_24px_64px_rgba(11,13,18,0.06)]">
            <div className="flex items-center justify-between border-b border-line px-6 py-4 md:px-8">
              <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-graphite/70">
                Reported every month
              </p>
              <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-graphite/60">
                <span aria-hidden className="size-1.5 rounded-full bg-indigo/50" />
                What we track, not sample data
              </span>
            </div>
            <div className="grid gap-px bg-line/70 sm:grid-cols-2 lg:grid-cols-4">
              {SEO_MEASURE.metrics.map((m, i) => (
                <div
                  key={m}
                  className="reveal-item group bg-surface p-6 transition-colors duration-300 ease-soft hover:bg-ivory/60"
                  style={{ transitionDelay: `${120 + i * 45}ms` }}
                >
                  <svg viewBox="0 0 38 18" className="h-[18px] w-[38px] text-indigo/60 transition-colors duration-300 group-hover:text-indigo" aria-hidden>
                    <path d={SPARKS[i]} fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                  </svg>
                  <p className="mt-3.5 text-[13.5px] font-semibold leading-snug">{m}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal delay={140}>
          <p className="mt-8 max-w-3xl text-[14.5px] leading-relaxed text-graphite">
            {SEO_MEASURE.close}
          </p>
        </Reveal>
      </div>
    </section>
  );
}

/* ---- Why Choose Search Nexio as Your SEO Agency? ----
   The deck's five trust cards. The fifth is the deck's team-bio slot,
   held (dashed) until genuine details are confirmed. A small inline
   button follows, per the deck's CTA plan. ---- */

export function SeoWhy() {
  return (
    <section className="overflow-x-clip wash-lilac-full py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <h2 className="max-w-2xl font-heading text-[clamp(1.9rem,3.6vw,2.6rem)] font-bold leading-[1.12] tracking-[-0.02em]">
            Why Choose Search Nexio as{" "}
            <span className="text-indigo">Your SEO Agency?</span>
          </h2>
        </Reveal>

        <Reveal delay={80}>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {SEO_WHY.points.map((p, i) => (
              <article
                key={p.title}
                className={`reveal-item flex h-full flex-col rounded-3xl p-7 transition-all duration-300 ease-soft ${
                  p.pending
                    ? "border border-dashed border-indigo/30 bg-surface/60"
                    : "border border-line bg-surface hover:-translate-y-1.5 hover:shadow-[0_24px_56px_rgba(99,91,255,0.12)]"
                }`}
                style={{ transitionDelay: `${120 + i * 60}ms` }}
              >
                <span className={`font-heading text-[13px] font-bold tabular-nums ${p.pending ? "text-graphite/50" : "text-indigo/60"}`}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-3 font-heading text-[16.5px] font-bold leading-snug tracking-[-0.01em]">
                  {p.title}
                </h3>
                <p className={`mt-3 text-[13.5px] leading-relaxed ${p.pending ? "text-graphite/70" : "text-graphite"}`}>
                  {p.desc}
                </p>
              </article>
            ))}
          </div>
        </Reveal>

        <Reveal delay={140}>
          <div className="mt-10 flex justify-center">
            <InlineCta />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---- When Are Professional SEO Services the Right Investment? ----
   A calm checklist with the qualifying paragraph, per the deck: no
   animation beyond the section reveal, no CTA. ---- */

export function SeoWhen() {
  return (
    <section className="overflow-x-clip py-16 md:py-24">
      <div className="mx-auto max-w-4xl px-6">
        <Reveal>
          <h2 className="font-heading text-[clamp(1.9rem,3.6vw,2.6rem)] font-bold leading-[1.12] tracking-[-0.02em]">
            When Are Professional SEO Services the{" "}
            <span className="text-indigo">Right Investment?</span>
          </h2>
          <p className="mt-5 text-[15px] leading-relaxed text-graphite">{SEO_WHEN.intro}</p>

          <ul className="mt-7 space-y-3.5">
            {SEO_WHEN.checks.map((c) => (
              <li key={c} className="flex items-start gap-3.5">
                <span aria-hidden className="mt-0.5 grid size-6 shrink-0 place-items-center rounded-full bg-indigo/10 text-indigo">
                  <svg width="12" height="12" viewBox="0 0 14 14" fill="none">
                    <path d="m2.6 7.4 3 3 5.8-6.6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                <span className="text-[14.5px] leading-relaxed">{c}</span>
              </li>
            ))}
          </ul>

          <p className="mt-8 rounded-2xl border border-line bg-ivory/60 px-6 py-5 text-[14px] leading-relaxed text-graphite">
            {SEO_WHEN.close}
          </p>
        </Reveal>
      </div>
    </section>
  );
}

/* ---- FAQ: the shared row accordion with FAQPage schema. ---- */

export function SeoFaq() {
  return (
    <FaqSection
      title={
        <>
          Professional SEO Services <span className="text-indigo">FAQs</span>
        </>
      }
      faqs={SEO_FAQS}
      bordered
    />
  );
}

/* ---- Final CTA: a full-width close with one button only, per the deck.
   The backdrop is a static search-growth line, not a data chart. ---- */

export function SeoFinal() {
  return (
    <section className="overflow-x-clip py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal variant="scale">
          <div className="cta-indigo relative overflow-hidden rounded-[2rem] px-8 py-16 text-center md:px-12 md:py-20">
            {/* static growth line, decorative only */}
            <svg
              aria-hidden
              viewBox="0 0 1200 300"
              preserveAspectRatio="none"
              className="pointer-events-none absolute inset-x-0 bottom-0 h-40 w-full opacity-[0.14]"
            >
              <path
                d="M0 265 C180 250 300 235 430 200 S720 130 880 95 S1120 40 1200 25"
                fill="none"
                stroke="#fff"
                strokeWidth="3"
                strokeLinecap="round"
              />
              <path
                d="M0 265 C180 250 300 235 430 200 S720 130 880 95 S1120 40 1200 25 L1200 300 L0 300 Z"
                fill="#fff"
                opacity="0.25"
              />
            </svg>

            <div className="relative">
              <h2 className="mx-auto max-w-3xl font-heading text-[clamp(1.9rem,3.6vw,2.7rem)] font-bold leading-[1.12] tracking-[-0.02em] text-white">
                Find Out What Is Limiting Your{" "}
                <span className="text-citron">{SEO_FINAL.accent}</span>
              </h2>
              <p className="mx-auto mt-6 max-w-2xl text-[15px] leading-relaxed text-white/75">
                {SEO_FINAL.body}
              </p>
              <div className="mt-9 flex justify-center">
                <CtaLink href={SEO_ROUTES.review} variant="glass">
                  {SEO_CTA}
                </CtaLink>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
