"use client";

import Reveal from "@/components/motion/Reveal";
import { SectionBadge, Field } from "@/components/ui";
import FaqSection from "@/components/FaqSection";
import ClosingForm from "@/components/ClosingForm";
import {
  ECOM_MEASURE,
  ECOM_WHY,
  ECOM_WHEN,
  ECOM_FAQS,
  ECOM_FINAL,
} from "@/lib/ecommerce-seo-content";

/* Glyphs for the why-choose cards. */
const WHY_ICONS: Record<string, React.ReactNode> = {
  grid: (
    <>
      <rect x="4" y="4" width="7" height="7" rx="1.6" />
      <rect x="13" y="4" width="7" height="7" rx="1.6" />
      <rect x="4" y="13" width="7" height="7" rx="1.6" />
      <rect x="13" y="13" width="7" height="7" rx="1.6" />
    </>
  ),
  layers: (
    <>
      <path d="m12 3.6 8 4.2-8 4.2-8-4.2Z" />
      <path d="m4.4 12.4 7.6 4 7.6-4" />
      <path d="m4.4 16.6 7.6 4 7.6-4" />
    </>
  ),
  wrench: (
    <path d="M15.4 4.6a4.6 4.6 0 0 0-5.9 5.6L4 15.7l2.6 2.6 5.5-5.5a4.6 4.6 0 0 0 5.6-5.9l-2.7 2.7-2.2-2.2Z" />
  ),
  chart: (
    <>
      <path d="M4 19.4h16" />
      <rect x="6.2" y="12" width="3.2" height="6" rx="1" />
      <rect x="11.4" y="8.4" width="3.2" height="9.6" rx="1" />
      <rect x="16.6" y="5" width="3.2" height="13" rx="1" />
    </>
  ),
  target: (
    <>
      <circle cx="12" cy="12" r="8.4" />
      <circle cx="12" cy="12" r="4.4" />
      <circle cx="12" cy="12" r="1" fill="currentColor" stroke="none" />
    </>
  ),
};

/* ---- What We Measure in Ecommerce SEO ----
   The six metrics as a reporting panel tied to priority pages. */
export function EcomMeasure() {
  return (
    <section className="relative overflow-x-clip border-t border-line py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:gap-16">
          <Reveal variant="left">
            <div>
              <SectionBadge>{ECOM_MEASURE.badge}</SectionBadge>
              <h2 className="mt-5 font-heading text-[clamp(1.9rem,3.6vw,2.6rem)] font-bold leading-[1.12] tracking-[-0.02em]">
                What We <span className="text-indigo">{ECOM_MEASURE.accent}</span>{" "}
                in Ecommerce SEO
              </h2>
              <p className="mt-5 text-[15.5px] leading-relaxed text-graphite">
                {ECOM_MEASURE.intro}
              </p>
              <p className="mt-4 text-[15.5px] leading-relaxed text-graphite">
                {ECOM_MEASURE.close}
              </p>
            </div>
          </Reveal>

          <Reveal variant="right" delay={80}>
            <ul className="grid gap-px overflow-hidden rounded-3xl border border-line bg-line/70">
              {ECOM_MEASURE.items.map((m, i) => (
                <li
                  key={m}
                  className="group flex items-center gap-4 bg-surface px-6 py-5 transition-colors duration-300 ease-soft hover:bg-ivory/60"
                >
                  <span className="font-heading text-[12px] font-bold tabular-nums text-indigo/40 transition-colors duration-300 group-hover:text-indigo">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="font-heading text-[15px] font-bold tracking-[-0.01em] transition-colors duration-300 group-hover:text-indigo">
                    {m}
                  </span>
                  <span className="ml-auto h-0.5 w-5 rounded-full bg-indigo/30 transition-all duration-300 ease-soft group-hover:w-9 group-hover:bg-indigo" />
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ---- Why Choose Search Nexio ----
   Five reasons; the lead reason spans two columns so the grid closes. */
export function EcomWhy() {
  return (
    <section className="relative overflow-x-clip wash-lilac-full border-t border-line py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <SectionBadge>{ECOM_WHY.badge}</SectionBadge>
          <h2 className="mt-5 max-w-3xl font-heading text-[clamp(1.9rem,3.6vw,2.6rem)] font-bold leading-[1.12] tracking-[-0.02em]">
            Why <span className="text-indigo">{ECOM_WHY.accent}</span> Search
            Nexio as Your Ecommerce SEO Agency?
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {ECOM_WHY.items.map((it, i) => (
            <Reveal key={it.title} delay={i * 60} className={i === 0 ? "lg:col-span-2" : ""}>
              <div className="group flex h-full flex-col rounded-3xl bg-surface p-7 shadow-[0_10px_30px_rgba(11,13,18,0.05)] transition-all duration-300 ease-soft hover:-translate-y-1.5 hover:scale-[1.015] hover:shadow-[0_24px_56px_rgba(99,91,255,0.14)]">
                <span className="grid size-12 place-items-center rounded-2xl bg-gradient-to-b from-lilac to-lilac/40 text-indigo transition-transform duration-300 ease-soft group-hover:scale-110">
                  <svg
                    width="21"
                    height="21"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden
                  >
                    {WHY_ICONS[it.icon]}
                  </svg>
                </span>
                <h3 className="mt-5 font-heading text-[16.5px] font-bold tracking-[-0.01em] transition-colors duration-300 group-hover:text-indigo">
                  {it.title}
                </h3>
                <span className="mt-3 block h-0.5 w-7 rounded-full bg-indigo transition-all duration-300 ease-soft group-hover:w-12" />
                <p className="mt-4 text-[14.5px] leading-relaxed text-graphite">{it.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---- When Should You Hire an Ecommerce SEO Agency? ----
   Seven signals as a checklist the reader can match themselves against. */
export function EcomWhen() {
  return (
    <section className="relative overflow-x-clip border-t border-line py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <Reveal variant="left">
            <div>
              <SectionBadge>{ECOM_WHEN.badge}</SectionBadge>
              <h2 className="mt-5 font-heading text-[clamp(1.9rem,3.6vw,2.6rem)] font-bold leading-[1.12] tracking-[-0.02em]">
                When Should You{" "}
                <span className="text-indigo">{ECOM_WHEN.accent}</span> an
                Ecommerce SEO Agency?
              </h2>
              <p className="mt-5 text-[15.5px] leading-relaxed text-graphite">
                {ECOM_WHEN.intro}
              </p>
              <p className="mt-6 font-heading text-[15.5px] font-bold leading-snug tracking-[-0.01em]">
                {ECOM_WHEN.close}
              </p>
            </div>
          </Reveal>

          <Reveal variant="right" delay={80}>
            <ul className="grid gap-3">
              {ECOM_WHEN.signals.map((sig) => (
                <li
                  key={sig}
                  className="group flex items-start gap-4 rounded-2xl border border-line bg-surface px-6 py-4 transition-all duration-300 ease-soft hover:-translate-y-0.5 hover:border-indigo/40 hover:shadow-[0_16px_38px_rgba(99,91,255,0.1)]"
                >
                  <span
                    aria-hidden
                    className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-md border border-indigo/35 text-indigo transition-colors duration-300 group-hover:bg-indigo group-hover:text-white"
                  >
                    <svg width="11" height="11" viewBox="0 0 12 12" fill="none">
                      <path d="m2.5 6.4 2.4 2.4 4.6-5" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <span className="text-[14.5px] leading-relaxed text-ink/85">{sig}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ---- FAQ: shared accordion + schema (components/FaqSection). ---- */
export function EcomFaq() {
  return (
    <FaqSection
      bordered
      title={<>Ecommerce SEO <span className="text-indigo">FAQs</span></>}
      faqs={ECOM_FAQS}
    />
  );
}


export function EcomForm() {
  return (
    <ClosingForm
      id="ecommerce-review"
      badge="Ecommerce SEO Review"
      title={<>Grow Your Ecommerce Store Through{" "}
                <span className="text-citron">{ECOM_FINAL.accent}</span></>}
      intro={
        <>
          <p className="mt-5 max-w-lg text-[15px] leading-relaxed text-white/70">
                {ECOM_FINAL.body}
              </p>
        </>
      }
      submitLabel={ECOM_FINAL.submit}
      sentMessage="Thank you. Search Nexio will review your details and follow up about your ecommerce SEO review."
      privacy={ECOM_FINAL.privacy}
    >
      <div className="grid gap-4 sm:grid-cols-2">
                      <Field label="Name" required />
                      <Field label="Work email" type="email" required />
                      <Field label="Store URL" full required />
                      <Field label="Platform" />
                      <Field label="Approximate catalog size" />
                    </div>
                    <label className="mt-4 block">
                      <span className="text-[12.5px] font-semibold text-ink">
                        Main ecommerce SEO challenge
                      </span>
                      <textarea
                        rows={4}
                        className="mt-1.5 w-full resize-none rounded-xl border border-line bg-ivory/50 px-4 py-3 text-[14px] outline-none transition-colors duration-200 focus:border-indigo/50 focus:bg-surface"
                      />
                    </label>
    </ClosingForm>
  );
}
