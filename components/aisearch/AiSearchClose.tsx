"use client";

import { useState } from "react";
import Reveal from "@/components/motion/Reveal";
import { Badge } from "@/components/ui";
import { AI_WHY, AI_INDUSTRIES, AI_ENGAGEMENTS, AI_LIMITATIONS, AI_FAQS, ROUTES } from "@/lib/ai-search-content";

/* Why Businesses Choose Search Nexio: first three as large stat cards, the
   rest as text cards. */
const STATS = [
  { big: "10+", label: "years of SEO experience" },
  { big: "50+", label: "SEO projects" },
  { big: "1", label: "integrated search strategy" },
];

export function AiSearchWhy() {
  return (
    <section className="overflow-x-clip wash-lilac-full py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <h2 className="font-heading text-[clamp(1.9rem,3.6vw,2.6rem)] font-bold leading-[1.12] tracking-[-0.02em]">
            Why Businesses Choose Search Nexio
          </h2>
        </Reveal>

        {/* three stat cards */}
        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          {STATS.map((s, i) => (
            <Reveal key={s.label} variant="up" delay={Math.min(i * 70, 140)}>
              <div className="rounded-2xl border border-indigo/20 bg-gradient-to-br from-lilac/60 to-surface p-6">
                <p className="font-heading text-[clamp(2.4rem,4vw,3rem)] font-bold leading-none tracking-[-0.02em] text-indigo">{s.big}</p>
                <p className="mt-2 text-[13.5px] font-medium text-ink">{s.label}</p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* six proof cards (full detail) */}
        <div className="mt-4 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {AI_WHY.map((w, i) => (
            <Reveal key={w.title} variant="up" delay={Math.min((i % 3) * 60, 120)}>
              <article className="flex h-full flex-col rounded-2xl border border-line bg-surface p-6">
                <h3 className="font-heading text-[16px] font-bold tracking-[-0.01em]">{w.title}</h3>
                <p className="mt-2.5 text-[13px] leading-relaxed text-graphite">{w.desc}</p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={80}>
          <p className="mt-8 text-[14px] leading-relaxed text-graphite">
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
        <Reveal>
          <h2 className="font-heading text-[clamp(1.9rem,3.6vw,2.6rem)] font-bold leading-[1.12] tracking-[-0.02em]">
            Ways to Work With Us
          </h2>
        </Reveal>
        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          {AI_ENGAGEMENTS.map((e, i) => (
            <Reveal key={e.title} variant="up" delay={Math.min(i * 60, 120)}>
              <article className="flex h-full flex-col rounded-2xl border border-line bg-surface p-7">
                <span className="inline-flex w-fit items-center rounded-full bg-lilac px-2.5 py-1 text-[10.5px] font-bold uppercase tracking-[0.08em] text-indigo">Best for: {e.bestFor}</span>
                <h3 className="mt-4 font-heading text-[18px] font-bold tracking-[-0.01em]">{e.title}</h3>
                <p className="mt-3 flex-1 text-[13.5px] leading-relaxed text-graphite">{e.desc}</p>
                <a href={e.next.href} className="mt-5 inline-flex items-center gap-1.5 text-[13.5px] font-semibold text-indigo">
                  {e.next.label}
                  <svg width="14" height="14" viewBox="0 0 12 12" fill="none" aria-hidden><path d="M2 6h8m0 0L6.5 2.5M10 6l-3.5 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </a>
              </article>
            </Reveal>
          ))}
        </div>
        <Reveal delay={80}>
          <div className="mt-8 flex justify-center">
            <a href={ROUTES.contact} className="inline-flex items-center gap-1.5 text-[14px] font-semibold text-indigo underline decoration-indigo/30 underline-offset-2">
              Discuss Your AI Search Strategy
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* Realistic Outcomes and Limitations: restrained text, single column. */
export function AiSearchLimitations() {
  return (
    <section className="overflow-x-clip py-16 md:py-24">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <Reveal>
          <span aria-hidden className="mx-auto grid size-11 place-items-center rounded-2xl bg-lilac text-indigo">
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M11 3 4 6v5c0 4 3 6.5 7 8 4-1.5 7-4 7-8V6l-7-3Z" /></svg>
          </span>
          <h2 className="mt-6 font-heading text-[clamp(1.9rem,3.6vw,2.6rem)] font-bold leading-[1.12] tracking-[-0.02em]">
            Realistic Outcomes and Limitations
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-[15px] leading-relaxed text-graphite">{AI_LIMITATIONS.intro}</p>
          <p className="mx-auto mt-4 max-w-2xl text-[15px] leading-relaxed text-graphite">{AI_LIMITATIONS.outro}</p>
        </Reveal>
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
