"use client";

import { useState } from "react";
import Link from "next/link";
import Reveal from "@/components/motion/Reveal";
import FaqSection from "@/components/FaqSection";
import CtaBanner from "@/components/CtaBanner";
import { SectionBadge } from "@/components/ui";
import {
  SAAS_AI,
  SAAS_MID_CTA,
  SAAS_WHY,
  SAAS_FAQS,
  SAAS_FINAL,
} from "@/lib/saas-seo-content";

/* Glyphs for the "why choose" cards. */
const WHY_ICONS: Record<string, React.ReactNode> = {
  target: (
    <>
      <circle cx="12" cy="12" r="8.4" />
      <circle cx="12" cy="12" r="4.4" />
      <circle cx="12" cy="12" r="1" fill="currentColor" stroke="none" />
    </>
  ),
  layers: (
    <>
      <path d="m12 3.6 8 4.2-8 4.2-8-4.2Z" />
      <path d="m4.4 12.4 7.6 4 7.6-4" />
      <path d="m4.4 16.6 7.6 4 7.6-4" />
    </>
  ),
  sparkle: (
    <path d="M12 3.2c.5 4.6 4.2 8.3 8.8 8.8-4.6.5-8.3 4.2-8.8 8.8-.5-4.6-4.2-8.3-8.8-8.8 4.6-.5 8.3-4.2 8.8-8.8Z" />
  ),
  chart: (
    <>
      <path d="M4 19.4h16" />
      <rect x="6.2" y="12" width="3.2" height="6" rx="1" />
      <rect x="11.4" y="8.4" width="3.2" height="9.6" rx="1" />
      <rect x="16.6" y="5" width="3.2" height="13" rx="1" />
    </>
  ),
  wrench: (
    <path d="M15.4 4.6a4.6 4.6 0 0 0-5.9 5.6L4 15.7l2.6 2.6 5.5-5.5a4.6 4.6 0 0 0 5.6-5.9l-2.7 2.7-2.2-2.2Z" />
  ),
};

/* ---- SaaS SEO for Google and AI Search ----
   Four surfaces as a split list, with the honesty note held in its own
   bordered callout so it reads as a stated limit, not fine print. */
export function SaasAiSearch() {
  return (
    <section className="relative overflow-x-clip border-t border-line py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <SectionBadge>{SAAS_AI.badge}</SectionBadge>
          <h2 className="mt-5 max-w-2xl font-heading text-[clamp(1.9rem,3.6vw,2.6rem)] font-bold leading-[1.12] tracking-[-0.02em]">
            SaaS SEO for Google and{" "}
            <span className="text-indigo">{SAAS_AI.accent}</span>
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-px overflow-hidden rounded-3xl border border-line bg-line/70 md:grid-cols-2">
          {SAAS_AI.items.map((it, i) => (
            <Reveal key={it.title} delay={i * 70}>
              <div className="group h-full bg-surface p-8 transition-colors duration-300 ease-soft hover:bg-ivory/60">
                <span className="font-heading text-[12.5px] font-bold tabular-nums text-indigo/40 transition-colors duration-300 group-hover:text-indigo">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-2 font-heading text-[17.5px] font-bold leading-snug tracking-[-0.01em] transition-colors duration-300 group-hover:text-indigo">
                  {it.title}
                </h3>
                <span className="mt-3 block h-0.5 w-7 rounded-full bg-indigo transition-all duration-300 ease-soft group-hover:w-12" />
                <p className="mt-4 text-[14.5px] leading-relaxed text-graphite">
                  {it.body}
                </p>
                {it.linkLabel && it.href && it.href !== "#" && (
                  <Link
                    href={it.href}
                    className="group/l mt-3 inline-flex items-center gap-1.5 text-[14px] font-bold text-indigo"
                  >
                    {it.linkLabel}
                    <span className="transition-transform duration-200 group-hover/l:translate-x-0.5">
                      &rarr;
                    </span>
                  </Link>
                )}
                {it.linkLabel && (!it.href || it.href === "#") && (
                  <p className="mt-3 text-[14px] font-bold text-indigo">
                    {it.linkLabel}
                  </p>
                )}
              </div>
            </Reveal>
          ))}
        </div>

        {/* stated limit, verbatim from the source copy */}
        <Reveal delay={80}>
          <div className="mt-8 flex items-start gap-4 rounded-2xl border border-line bg-ivory/50 px-7 py-6">
            <span className="mt-0.5 grid size-8 shrink-0 place-items-center rounded-full bg-lilac text-indigo">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                aria-hidden
              >
                <circle cx="12" cy="12" r="8.6" />
                <path d="M12 8.2v4.6M12 15.8v.2" />
              </svg>
            </span>
            <p className="text-[14.5px] leading-relaxed text-graphite">
              {SAAS_AI.note}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---- Mid-page CTA banner on the indigo ground. ---- */
export function SaasMidCta() {
  return <CtaBanner title={SAAS_MID_CTA.title} body={SAAS_MID_CTA.body} cta={SAAS_MID_CTA.cta} />;
}

/* ---- Why SaaS Companies Choose Search Nexio ----
   Five reasons. The first spans two columns so the grid does not leave a
   gap at five items, and the lead reason carries the most weight. */
export function SaasWhy() {
  return (
    <section className="relative overflow-x-clip wash-lilac-full border-t border-line py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <SectionBadge>{SAAS_WHY.badge}</SectionBadge>
          <h2 className="mt-5 max-w-2xl font-heading text-[clamp(1.9rem,3.6vw,2.6rem)] font-bold leading-[1.12] tracking-[-0.02em]">
            Why SaaS Companies{" "}
            <span className="text-indigo">{SAAS_WHY.accent}</span> Search Nexio
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {SAAS_WHY.items.map((it, i) => (
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
                <p className="mt-4 text-[14.5px] leading-relaxed text-graphite">
                  {it.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---- FAQ: shared accordion + schema (components/FaqSection). ---- */
export function SaasFaq() {
  return (
    <FaqSection
      bordered
      title={<>B2B SaaS SEO <span className="text-indigo">FAQs</span></>}
      faqs={SAAS_FAQS}
    />
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

export function SaasForm() {
  const [sent, setSent] = useState(false);

  return (
    <section id="saas-strategy" className="relative overflow-x-clip py-16 md:py-24">
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
                SaaS SEO Strategy
              </span>
              <h2 className="mt-6 font-heading text-[clamp(1.9rem,3.6vw,2.7rem)] font-bold leading-[1.1] tracking-[-0.02em] text-white">
                Build a <span className="text-citron">{SAAS_FINAL.accent}</span>{" "}
                SaaS Growth Channel
              </h2>
              <p className="mt-5 max-w-lg text-[15px] leading-relaxed text-white/70">
                {SAAS_FINAL.body}
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
                        up about your SaaS SEO strategy.
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
                      <Field label="Company" />
                      <Field label="Website" />
                      <Field label="Product category" full />
                    </div>
                    <label className="mt-4 block">
                      <span className="text-[12.5px] font-semibold text-ink">
                        What are you trying to grow?
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
                      {SAAS_FINAL.cta.label}
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
