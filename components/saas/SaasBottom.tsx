"use client";

import Link from "next/link";
import Reveal from "@/components/motion/Reveal";
import FaqSection from "@/components/FaqSection";
import ClosingForm from "@/components/ClosingForm";
import CtaBanner from "@/components/CtaBanner";
import { SectionBadge, Field } from "@/components/ui";
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


export function SaasForm() {
  return (
    <ClosingForm
      id="saas-strategy"
      badge="SaaS SEO Strategy"
      title={<>Build a <span className="text-citron">{SAAS_FINAL.accent}</span>{" "}
                SaaS Growth Channel</>}
      intro={
        <>
          <p className="mt-5 max-w-lg text-[15px] leading-relaxed text-white/70">
                {SAAS_FINAL.body}
              </p>
        </>
      }
      submitLabel={SAAS_FINAL.cta.label}
      sentMessage="Thank you. Search Nexio will review your details and follow up about your SaaS SEO strategy."
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
    </ClosingForm>
  );
}
