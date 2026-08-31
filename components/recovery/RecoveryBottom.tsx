"use client";

import Reveal from "@/components/motion/Reveal";
import FaqSection from "@/components/FaqSection";
import ClosingForm from "@/components/ClosingForm";
import CtaBanner from "@/components/CtaBanner";
import { Field } from "@/components/ui";
import {
  RECOVERY_SCENARIOS,
  RECOVERY_MEASURE,
  RECOVERY_BANNER,
  RECOVERY_WHY,
  RECOVERY_QUOTE,
  RECOVERY_FAQS,
  RECOVERY_FINAL,
  RECOVERY_CTA,
  R_ROUTES,
} from "@/lib/recovery-content";

/* ---- The two recovery scenarios ----
   Algorithm recovery on the dark panel, migration recovery on the light
   one: a paired spread rather than two more heading-and-copy blocks. ---- */

export function RecoveryScenarios() {
  return (
    <section className="overflow-x-clip py-16 md:py-24">
      <div className="mx-auto grid max-w-7xl gap-5 px-6 lg:grid-cols-2">
        {RECOVERY_SCENARIOS.map((s, i) => (
          <Reveal key={s.key} variant={i === 0 ? "left" : "right"} delay={i * 80}>
            <article
              className={`relative flex h-full flex-col overflow-hidden rounded-[2rem] p-8 md:p-10 ${
                i === 0
                  ? "bg-ink text-white"
                  : "border border-line bg-surface"
              }`}
            >
              {i === 0 && (
                <div aria-hidden className="pointer-events-none absolute inset-0">
                  <div className="absolute -right-24 -top-24 size-80 rounded-full border border-white/10" />
                  <div className="absolute -bottom-28 -left-20 size-72 rounded-full border border-white/[0.07]" />
                </div>
              )}

              <span
                className={`relative text-[11px] font-bold uppercase tracking-[0.16em] ${
                  i === 0 ? "text-citron" : "text-indigo"
                }`}
              >
                Scenario {String(i + 1).padStart(2, "0")}
              </span>
              <h2 className="relative mt-4 font-heading text-[clamp(1.4rem,2.4vw,1.85rem)] font-bold leading-[1.18] tracking-[-0.02em]">
                {s.title}
              </h2>
              {s.paras.map((p) => (
                <p
                  key={p.slice(0, 24)}
                  className={`relative mt-4 text-[14.5px] leading-relaxed ${
                    i === 0 ? "text-white/75" : "text-graphite"
                  }`}
                >
                  {p}
                </p>
              ))}
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* ---- How We Measure SEO Recovery ----
   Hairline 2x2 grid plus the separation note the copy closes on. ---- */

const MEASURE_ICONS = [
  /* visibility: eye */
  <g key="eye">
    <path d="M2.6 12S6 5.8 12 5.8 21.4 12 21.4 12 18 18.2 12 18.2 2.6 12 2.6 12Z" />
    <circle cx="12" cy="12" r="2.8" />
  </g>,
  /* traffic: returning arrow */
  <g key="traffic">
    <path d="M4 17.5h9.5a5 5 0 0 0 0-10H6.5" />
    <path d="M9 4.5 6 7.5l3 3" />
  </g>,
  /* technical: check in gear-lite frame */
  <g key="tech">
    <rect x="3.8" y="3.8" width="16.4" height="16.4" rx="3" />
    <path d="m8.3 12.2 2.6 2.6 4.8-5.4" />
  </g>,
  /* pipeline: bars up */
  <g key="pipe">
    <path d="M4 19.4h16" />
    <rect x="6.2" y="12" width="3.2" height="6" rx="1" />
    <rect x="11.4" y="8.4" width="3.2" height="9.6" rx="1" />
    <rect x="16.6" y="5" width="3.2" height="13" rx="1" />
  </g>,
];

export function RecoveryMeasure() {
  return (
    <section className="overflow-x-clip wash-lilac-full py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <h2 className="max-w-2xl font-heading text-[clamp(1.9rem,3.6vw,2.6rem)] font-bold leading-[1.12] tracking-[-0.02em]">
            How We Measure <span className="text-indigo">SEO Recovery</span>
          </h2>
        </Reveal>

        <Reveal delay={80}>
          <div className="mt-12 grid gap-px overflow-hidden rounded-3xl border border-line bg-line/70 sm:grid-cols-2">
            {RECOVERY_MEASURE.items.map((m, i) => (
              <div
                key={m.title}
                className="reveal-item group bg-surface p-7 transition-colors duration-300 ease-soft hover:bg-ivory/60 md:p-8"
                style={{ transitionDelay: `${120 + i * 60}ms` }}
              >
                <span className="grid size-11 place-items-center rounded-2xl bg-gradient-to-b from-lilac to-lilac/40 text-indigo transition-transform duration-300 ease-soft group-hover:scale-110">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                    {MEASURE_ICONS[i]}
                  </svg>
                </span>
                <h3 className="mt-4 font-heading text-[17px] font-bold tracking-[-0.01em] transition-colors duration-300 group-hover:text-indigo">
                  {m.title}
                </h3>
                <p className="mt-2.5 text-[14px] leading-relaxed text-graphite">{m.desc}</p>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={140}>
          <p className="mx-auto mt-8 max-w-3xl rounded-2xl border border-indigo/15 bg-lilac/40 px-6 py-5 text-center text-[14px] leading-relaxed text-graphite">
            {RECOVERY_MEASURE.note}
          </p>
        </Reveal>
      </div>
    </section>
  );
}

/* ---- Post-measurement banner: the third of the brief's four CTA
   placements. ---- */

export function RecoveryBanner() {
  return (
    <CtaBanner
      title={RECOVERY_BANNER.title}
      body={RECOVERY_BANNER.body}
      cta={{ label: RECOVERY_CTA, href: R_ROUTES.assessment }}
    />
  );
}

/* ---- Why Choose Search Nexio for SEO Recovery? ----
   Four numbered rows on hairlines, then the growth hand-off line with the
   professional SEO services link. ---- */

export function RecoveryWhy() {
  const [pre, post] = RECOVERY_WHY.growth.split(RECOVERY_WHY.growthAnchor);

  return (
    <section className="overflow-x-clip py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <h2 className="max-w-2xl font-heading text-[clamp(1.9rem,3.6vw,2.6rem)] font-bold leading-[1.12] tracking-[-0.02em]">
            Why Choose Search Nexio for{" "}
            <span className="text-indigo">SEO Recovery?</span>
          </h2>
        </Reveal>

        <div className="mt-10 grid gap-x-14 md:grid-cols-2">
          {RECOVERY_WHY.points.map((p, i) => (
            <Reveal key={p.title} delay={i * 70}>
              <div className="group border-t border-line py-7">
                <div className="flex items-baseline gap-4">
                  <span className="font-heading text-[13px] font-bold tabular-nums text-indigo/60 transition-colors duration-300 group-hover:text-indigo">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-heading text-[17.5px] font-bold tracking-[-0.01em] transition-colors duration-300 group-hover:text-indigo">
                    {p.title}
                  </h3>
                </div>
                <p className="mt-3 pl-9 text-[14px] leading-relaxed text-graphite">{p.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120}>
          <p className="mt-8 max-w-3xl text-[14.5px] leading-relaxed text-graphite">
            {pre}
            <a
              href={R_ROUTES.seoServices}
              className="font-semibold text-indigo underline decoration-indigo/30 underline-offset-2 transition-colors hover:decoration-indigo"
            >
              {RECOVERY_WHY.growthAnchor}
            </a>
            {post}
          </p>
        </Reveal>
      </div>
    </section>
  );
}

/* ---- Founder quote: the editorial dark callout used site-wide, never
   styled as a testimonial. ---- */

export function RecoveryQuote() {
  return (
    <section className="overflow-x-clip pb-16 md:pb-24">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal variant="scale">
          <figure className="relative overflow-hidden rounded-[2rem] bg-ink p-9 md:p-14">
            <div aria-hidden className="pointer-events-none absolute inset-0">
              <div className="absolute -right-24 -top-24 size-80 rounded-full border border-white/10" />
              <div className="absolute -bottom-28 -left-20 size-72 rounded-full border border-white/[0.07]" />
            </div>

            <figcaption className="relative inline-flex items-center gap-2.5 text-[11px] font-bold uppercase tracking-[0.16em] text-citron">
              <span aria-hidden className="h-px w-7 bg-citron/60" />
              {RECOVERY_QUOTE.eyebrow}
            </figcaption>

            <blockquote className="relative mt-6 max-w-3xl font-heading text-[clamp(1.15rem,2.2vw,1.6rem)] font-bold leading-[1.4] tracking-[-0.015em] text-white">
              {RECOVERY_QUOTE.quote}
            </blockquote>

            <div className="relative mt-8 flex items-center gap-4">
              <span
                aria-hidden
                className="grid size-11 shrink-0 place-items-center rounded-full bg-white/10 font-heading text-[15px] font-bold text-white ring-1 ring-white/15"
              >
                HL
              </span>
              <span>
                <span className="block font-heading text-[14.5px] font-bold text-white">
                  {RECOVERY_QUOTE.name}
                </span>
                <span className="mt-0.5 block text-[12.5px] text-white/60">
                  {RECOVERY_QUOTE.role}
                </span>
              </span>
            </div>
          </figure>
        </Reveal>
      </div>
    </section>
  );
}

/* ---- FAQ: the shared row accordion with FAQPage schema. ---- */

export function RecoveryFaq() {
  return (
    <FaqSection
      title={
        <>
          SEO Recovery Services <span className="text-indigo">FAQs</span>
        </>
      }
      faqs={RECOVERY_FAQS}
    />
  );
}

/* ---- Final CTA + form: the fourth sanctioned placement. ---- */

export function RecoveryForm() {
  return (
    <ClosingForm
      id="recovery-assessment"
      scrollMt
      badge="SEO Recovery Assessment"
      title={
        <>
          Find Out What Caused Your{" "}
          <span className="text-citron">{RECOVERY_FINAL.accent}</span>
        </>
      }
      intro={
        <p className="mt-5 max-w-lg text-[15px] leading-relaxed text-white/70">
          {RECOVERY_FINAL.body}
        </p>
      }
      submitLabel={RECOVERY_FINAL.submit}
      sentMessage="Thank you. Search Nexio will review where the loss occurred and follow up about your SEO recovery assessment."
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Name" required />
        <Field label="Work email" type="email" required />
        <Field label="Website" full required />
        <Field label="Approximate date the drop began" full />
      </div>
      <label className="mt-4 block">
        <span className="text-[12.5px] font-semibold text-ink">
          What have you noticed? (optional)
        </span>
        <textarea
          rows={4}
          className="mt-1.5 w-full resize-none rounded-xl border border-line bg-ivory/50 px-4 py-3 text-[14px] outline-none transition-colors duration-200 focus:border-indigo/50 focus:bg-surface"
        />
      </label>
    </ClosingForm>
  );
}
