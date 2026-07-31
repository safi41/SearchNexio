"use client";

import { useState } from "react";
import Reveal from "@/components/motion/Reveal";

/* Review your GEO visibility: an enterprise-style conversion panel. The
   whole section sits on the deep-indigo CTA ground — copy and the
   audit-output checklist on the left as glass rows, the form floating on an
   elevated white card to the right. Company name optional. Submission is
   inert in this build (no backend); it shows a confirmation state. */

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
        <div className="cta-indigo relative overflow-hidden rounded-[2rem] p-7 md:p-12">
          {/* decor: orbit rings top-right, dot grid bottom-left, spark dots */}
          <div aria-hidden className="pointer-events-none absolute inset-0">
            <div className="absolute -right-28 -top-28 size-96 rounded-full border border-white/10" />
            <div className="absolute -right-10 -top-10 size-56 rounded-full border border-white/10" />
            <div
              className="absolute bottom-6 left-6 h-28 w-40 opacity-60"
              style={{
                backgroundImage: "radial-gradient(rgba(255,255,255,0.25) 1.5px, transparent 1.5px)",
                backgroundSize: "14px 14px",
              }}
            />
            <span className="absolute right-[38%] top-10 size-1.5 rounded-full bg-citron/80" />
            <span className="absolute left-[46%] bottom-12 size-1.5 rounded-full bg-white/40" />
          </div>

          <div className="relative grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-14">
            {/* left: copy + audit outputs */}
            <Reveal variant="left">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-[12px] font-semibold text-white backdrop-blur-sm">
                <svg width="13" height="13" viewBox="0 0 24 24" aria-hidden className="text-citron">
                  <path d="M12 2c.4 5 5 9.6 10 10-5 .4-9.6 5-10 10-.4-5-5-9.6-10-10 5-.4 9.6-5 10-10Z" fill="currentColor" />
                </svg>
                AI Visibility Audit
              </span>
              <h2 className="mt-6 font-heading text-[clamp(1.9rem,3.6vw,2.7rem)] font-bold leading-[1.1] tracking-[-0.02em] text-white">
                Review your GEO visibility
              </h2>
              <p className="mt-5 max-w-lg text-[15px] leading-relaxed text-white/70">
                See where your brand appears across generative platforms, which competitors receive stronger visibility and which sources influence recommendations in your market.
              </p>

              <p className="mt-9 text-[11px] font-bold uppercase tracking-[0.16em] text-white/60">
                The audit identifies
              </p>
              <ul className="mt-4 grid gap-2.5">
                {OUTPUTS.map((o, i) => (
                  <li
                    key={o}
                    className="reveal-item flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.07] px-4 py-3 text-[13.5px] leading-snug text-white/90 backdrop-blur-sm"
                    style={{ transitionDelay: `${120 + i * 60}ms` }}
                  >
                    <span className="grid size-5 shrink-0 place-items-center rounded-full bg-citron text-ink-solid">
                      <svg width="10" height="10" viewBox="0 0 12 12" fill="none" aria-hidden><path d="m2.5 6.5 2.5 2.5 4.5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                    </span>
                    {o}
                  </li>
                ))}
              </ul>
            </Reveal>

            {/* right: the form on an elevated white card */}
            <Reveal variant="right" delay={80}>
              <div className="rounded-3xl bg-surface p-7 shadow-[0_30px_80px_rgba(11,13,18,0.35)] md:p-8">
                {sent ? (
                  <div className="grid min-h-[420px] place-items-center text-center">
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
                      className="group mt-6 flex w-full items-center justify-center gap-2.5 rounded-full bg-citron py-3 text-[14.5px] font-semibold text-ink-solid transition-colors duration-200 hover:bg-citron-deep"
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
          </div>
        </div>
      </div>
    </section>
  );
}
