"use client";

import { useState } from "react";
import Reveal from "@/components/motion/Reveal";
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
              <span className="inline-flex rounded-full border border-line bg-surface px-3.5 py-1.5 text-[11.5px] font-bold uppercase tracking-[0.12em] text-indigo">
                {ECOM_MEASURE.badge}
              </span>
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
          <span className="inline-flex rounded-full border border-line bg-surface px-3.5 py-1.5 text-[11.5px] font-bold uppercase tracking-[0.12em] text-indigo">
            {ECOM_WHY.badge}
          </span>
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
              <span className="inline-flex rounded-full border border-line bg-surface px-3.5 py-1.5 text-[11.5px] font-bold uppercase tracking-[0.12em] text-indigo">
                {ECOM_WHEN.badge}
              </span>
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

/* ---- FAQ accordion with FAQPage schema. Full copy stays in the HTML. ---- */
function FaqRow({
  q,
  a,
  open,
  onToggle,
}: {
  q: string;
  a: string;
  open: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="border-b border-line last:border-b-0">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={open}
        className="flex w-full items-center justify-between gap-4 py-5 text-left"
      >
        <span className="font-heading text-[16px] font-bold tracking-[-0.01em]">{q}</span>
        <span
          className={`grid size-7 shrink-0 place-items-center rounded-full border border-line transition-all duration-300 ${
            open ? "rotate-45 border-indigo/40 bg-indigo text-white" : "text-graphite"
          }`}
        >
          <svg width="13" height="13" viewBox="0 0 14 14" fill="none" aria-hidden>
            <path d="M7 2v10M2 7h10" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          </svg>
        </span>
      </button>
      <div
        className={`grid transition-all duration-300 ease-soft ${
          open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <p className="pb-5 pr-10 text-[14px] leading-relaxed text-graphite">{a}</p>
        </div>
      </div>
    </div>
  );
}

export function EcomFaq() {
  const [open, setOpen] = useState(0);
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: ECOM_FAQS.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <section className="overflow-x-clip border-t border-line py-16 md:py-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <div className="mx-auto max-w-[800px] px-6">
        <Reveal>
          <h2 className="text-center font-heading text-[clamp(1.9rem,3.6vw,2.6rem)] font-bold leading-[1.12] tracking-[-0.02em]">
            Ecommerce SEO <span className="text-indigo">FAQs</span>
          </h2>
        </Reveal>
        <div className="mt-10">
          {ECOM_FAQS.map((f, i) => (
            <FaqRow
              key={f.q}
              q={f.q}
              a={f.a}
              open={open === i}
              onToggle={() => setOpen(open === i ? -1 : i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---- Closing CTA: dark indigo panel, copy left, form right. ---- */
function Field({
  label,
  type = "text",
  required = false,
  full = false,
}: {
  label: string;
  type?: string;
  required?: boolean;
  full?: boolean;
}) {
  return (
    <label className={`block ${full ? "sm:col-span-2" : ""}`}>
      <span className="text-[12.5px] font-semibold text-ink">
        {label}
        {required && <span className="text-indigo"> *</span>}
      </span>
      <input
        type={type}
        required={required}
        className="mt-1.5 w-full rounded-xl border border-line bg-ivory/50 px-4 py-3 text-[14px] outline-none transition-colors duration-200 focus:border-indigo/50 focus:bg-surface"
      />
    </label>
  );
}

export function EcomForm() {
  const [sent, setSent] = useState(false);

  return (
    <section id="ecommerce-review" className="relative overflow-x-clip py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="cta-indigo relative overflow-hidden rounded-[2rem] p-7 md:p-12">
          <div
            aria-hidden
            className="absolute inset-0 opacity-25"
            style={{
              backgroundImage:
                "radial-gradient(rgba(255,255,255,0.25) 1.5px, transparent 1.5px)",
              backgroundSize: "14px 14px",
            }}
          />

          <div className="relative grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
            <Reveal variant="left">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-[12px] font-semibold text-white backdrop-blur-sm">
                <svg width="13" height="13" viewBox="0 0 24 24" aria-hidden className="text-citron">
                  <path
                    d="M12 2c.4 5 5 9.6 10 10-5 .4-9.6 5-10 10-.4-5-5-9.6-10-10 5-.4 9.6-5 10-10Z"
                    fill="currentColor"
                  />
                </svg>
                Ecommerce SEO Review
              </span>
              <h2 className="mt-6 font-heading text-[clamp(1.9rem,3.6vw,2.7rem)] font-bold leading-[1.1] tracking-[-0.02em] text-white">
                Grow Your Ecommerce Store Through{" "}
                <span className="text-citron">{ECOM_FINAL.accent}</span>
              </h2>
              <p className="mt-5 max-w-lg text-[15px] leading-relaxed text-white/70">
                {ECOM_FINAL.body}
              </p>
            </Reveal>

            <Reveal variant="right" delay={80}>
              <div className="rounded-3xl bg-surface p-7 shadow-[0_30px_80px_rgba(11,13,18,0.35)] md:p-8">
                {sent ? (
                  <div className="grid min-h-[320px] place-items-center text-center">
                    <div>
                      <span className="mx-auto grid size-14 place-items-center rounded-2xl bg-citron">
                        <svg width="24" height="24" viewBox="0 0 12 12" fill="none" aria-hidden>
                          <path
                            d="m2.5 6.5 2.5 2.5 4.5-5"
                            stroke="#0B0D12"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                      <h3 className="mt-5 font-heading text-[20px] font-bold tracking-[-0.01em]">
                        Request received
                      </h3>
                      <p className="mx-auto mt-2 max-w-sm text-[14px] leading-relaxed text-graphite">
                        Thank you. Search Nexio will review your details and follow
                        up about your ecommerce SEO review.
                      </p>
                    </div>
                  </div>
                ) : (
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      setSent(true);
                    }}
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
                    <button
                      type="submit"
                      className="group mt-6 inline-flex w-full items-center justify-center gap-2.5 rounded-full bg-ink-solid px-7 py-3.5 text-[14.5px] font-bold text-white transition-transform duration-200 hover:-translate-y-0.5"
                    >
                      {ECOM_FINAL.submit}
                      <span
                        aria-hidden
                        className="grid size-6 place-items-center rounded-full bg-citron text-ink-solid transition-transform duration-200 group-hover:translate-x-0.5"
                      >
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                          <path
                            d="M2 6h8m0 0L6.5 2.5M10 6l-3.5 3.5"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                    </button>
                    <p className="mt-4 text-[11.5px] leading-relaxed text-graphite">
                      {ECOM_FINAL.privacy}
                    </p>
                  </form>
                )}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
