"use client";

import { useState } from "react";
import Reveal from "@/components/motion/Reveal";
import { Badge } from "@/components/ui";

/* Review your GEO visibility: the final AI Visibility Audit form on the left
   and an audit-output summary on the right. Low completion friction, no
   decorative animation, Company name optional. Submission is inert in this
   build (no backend); it shows a confirmation state. */

const OUTPUTS = [
  "Priority platforms and commercial prompt coverage",
  "Competitor visibility for the same prompts",
  "Citation sources influencing responses",
  "Brand-description issues and inaccuracies",
  "Content gaps and entity inconsistencies",
  "Authority development opportunities",
];

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
        className="mt-1.5 w-full rounded-xl border border-line bg-ivory/60 px-3.5 py-2.5 text-[14px] text-ink outline-none transition-colors placeholder:text-graphite/60 focus:border-indigo/50 focus:bg-surface"
      />
    </label>
  );
}

export default function GeoAuditForm() {
  const [sent, setSent] = useState(false);

  return (
    <section id="visibility-audit" className="scroll-mt-24 overflow-x-clip py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <div className="max-w-2xl">
            <Badge>AI Visibility Audit</Badge>
            <h2 className="mt-5 font-heading text-[clamp(1.9rem,3.6vw,2.6rem)] font-bold leading-[1.12] tracking-[-0.02em]">
              Review your GEO visibility
            </h2>
            <p className="mt-5 text-[15px] leading-relaxed text-graphite">
              See where your brand appears across generative platforms, which competitors receive stronger visibility and which sources influence recommendations in your market.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-[1.15fr_0.85fr] lg:gap-8">
          {/* the form */}
          <Reveal variant="left">
            <div className="rounded-3xl border border-line bg-surface p-7 md:p-8">
              {sent ? (
                <div className="grid min-h-[360px] place-items-center text-center">
                  <div>
                    <span className="mx-auto grid size-14 place-items-center rounded-2xl bg-citron">
                      <svg width="24" height="24" viewBox="0 0 12 12" fill="none" aria-hidden><path d="m2.5 6.5 2.5 2.5 4.5-5" stroke="#0B0D12" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                    </span>
                    <h3 className="mt-5 font-heading text-[20px] font-bold tracking-[-0.01em]">Request received</h3>
                    <p className="mx-auto mt-2 max-w-sm text-[14px] leading-relaxed text-graphite">
                      Thank you. A Search Nexio specialist will review your details and follow up about your AI Visibility Audit.
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
                    <Field label="First name" required />
                    <Field label="Last name" required />
                    <Field label="Work email" type="email" required />
                    <Field label="Phone number" type="tel" required />
                    <Field label="Company name" />
                    <Field label="Website" type="url" required />
                    <label className="block sm:col-span-2">
                      <span className="text-[12.5px] font-semibold text-ink">How can we help <span className="text-indigo">*</span></span>
                      <textarea
                        required
                        rows={4}
                        className="mt-1.5 w-full resize-none rounded-xl border border-line bg-ivory/60 px-3.5 py-2.5 text-[14px] text-ink outline-none transition-colors placeholder:text-graphite/60 focus:border-indigo/50 focus:bg-surface"
                      />
                    </label>
                  </div>

                  <button
                    type="submit"
                    className="group mt-6 inline-flex items-center gap-2.5 rounded-full bg-citron py-2.5 pl-6 pr-2.5 text-[14.5px] font-semibold text-ink-solid transition-colors duration-200 hover:bg-citron-deep"
                  >
                    Request an AI Visibility Audit
                    <span aria-hidden className="grid size-6 place-items-center rounded-full bg-ink-solid text-citron transition-transform duration-200 group-hover:translate-x-0.5">
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2 6h8m0 0L6.5 2.5M10 6l-3.5 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                    </span>
                  </button>

                  <p className="mt-4 text-[11.5px] leading-relaxed text-graphite">
                    By submitting this form, you agree that Search Nexio may use the information provided to respond to your enquiry in accordance with the Privacy Policy.
                  </p>
                </form>
              )}
            </div>
          </Reveal>

          {/* audit output summary */}
          <Reveal variant="right" delay={80}>
            <div className="rounded-3xl border border-indigo/20 bg-lilac/40 p-7">
              <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-indigo">The audit identifies</p>
              <ul className="mt-5 grid gap-3">
                {OUTPUTS.map((o) => (
                  <li key={o} className="flex gap-3 text-[13.5px] leading-relaxed text-ink">
                    <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-indigo text-white">
                      <svg width="10" height="10" viewBox="0 0 12 12" fill="none" aria-hidden><path d="m2.5 6.5 2.5 2.5 4.5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                    </span>
                    {o}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
