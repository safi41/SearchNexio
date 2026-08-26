"use client";

import { useEffect, useRef, useState } from "react";
import Reveal from "@/components/motion/Reveal";
import { CtaLink } from "@/components/ui";
import {
  HC_PROCESS,
  HC_PROCESS_CTA,
  HC_METRICS,
  HC_WHY,
  HC_ENGAGEMENTS,
  HC_ENGAGEMENT_NOTE,
  HC_LIMITATIONS,
  HC_FAQS,
  HC_FINAL,
  H_ROUTES,
} from "@/lib/healthcare-seo-content";

/* ---- Our healthcare SEO process: four-step timeline, steps activate one
   at a time on scroll, followed by the dark audit CTA band. ---- */
export function HealthProcess() {
  const [active, setActive] = useState(0);
  const stepRefs = useRef<(HTMLLIElement | null)[]>([]);

  useEffect(() => {
    const observers = stepRefs.current.map((el, i) => {
      if (!el) return null;
      const io = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) setActive(i);
        },
        { rootMargin: "-40% 0px -50% 0px" }
      );
      io.observe(el);
      return io;
    });
    return () => observers.forEach((io) => io?.disconnect());
  }, []);

  return (
    <section id="healthcare-process" className="scroll-mt-24 overflow-x-clip py-16 md:py-24">
      <div className="mx-auto max-w-4xl px-6">
        <Reveal>
          <h2 className="text-center font-heading text-[clamp(1.9rem,3.6vw,2.6rem)] font-bold leading-[1.12] tracking-[-0.02em]">
            Our Healthcare SEO <span className="text-indigo">Process</span>
          </h2>
        </Reveal>

        <ol className="relative mt-12">
          <span aria-hidden className="absolute bottom-6 left-[21px] top-6 w-px bg-line" />
          <span
            aria-hidden
            className="absolute left-[21px] top-6 w-px bg-gradient-to-b from-indigo to-indigo/70 transition-all duration-700 ease-soft"
            style={{ height: `calc((100% - 48px) * ${active / (HC_PROCESS.length - 1)})` }}
          />
          {HC_PROCESS.map((step, i) => {
            const state = i < active ? "done" : i === active ? "active" : "next";
            return (
              <li
                key={step.name}
                ref={(el) => {
                  stepRefs.current[i] = el;
                }}
                className={`relative flex gap-5 ${i < HC_PROCESS.length - 1 ? "pb-12" : ""}`}
              >
                <span
                  className={`relative z-10 grid size-11 shrink-0 place-items-center rounded-2xl font-heading text-[14px] font-bold tabular-nums transition-all duration-500 ease-soft ${
                    state === "active"
                      ? "bg-indigo text-white shadow-[0_0_0_5px_var(--c-lilac)]"
                      : state === "done"
                        ? "bg-indigo text-white"
                        : "border border-line bg-surface text-graphite"
                  }`}
                >
                  {state === "done" ? (
                    <svg width="14" height="14" viewBox="0 0 12 12" fill="none" aria-hidden>
                      <path d="m2.5 6.5 2.5 2.5 4.5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  ) : (
                    step.index
                  )}
                </span>
                <div className={`pt-1.5 transition-opacity duration-500 ${state === "next" ? "opacity-45" : "opacity-100"}`}>
                  <h3 className={`font-heading text-[20px] font-bold tracking-[-0.01em] transition-colors duration-500 ${state === "active" ? "text-indigo" : "text-ink"}`}>
                    {step.name}
                  </h3>
                  <p className="mt-2 max-w-xl text-[14px] leading-relaxed text-graphite">{step.body}</p>
                </div>
              </li>
            );
          })}
        </ol>
      </div>

      <Reveal delay={80}>
        <div className="mx-auto mt-16 max-w-6xl px-6">
          <div className="cta-indigo relative overflow-hidden rounded-[2rem] px-8 py-12 text-center md:px-12">
            <div aria-hidden className="pointer-events-none absolute inset-0">
              <div className="absolute -right-28 -top-28 size-96 rounded-full border border-white/10" />
              <div className="absolute -bottom-24 -left-24 size-80 rounded-full border border-white/10" />
            </div>
            <div className="relative">
              <h3 className="mx-auto max-w-2xl font-heading text-[clamp(1.5rem,2.8vw,2rem)] font-bold leading-[1.14] tracking-[-0.02em] text-white">
                {HC_PROCESS_CTA.heading}
              </h3>
              <p className="mx-auto mt-4 max-w-xl text-[15px] leading-relaxed text-white/70">{HC_PROCESS_CTA.body}</p>
              <div className="mt-8 flex justify-center">
                <CtaLink href={HC_PROCESS_CTA.cta.href}>{HC_PROCESS_CTA.cta.label}</CtaLink>
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

/* ---- How we measure patient growth: eight metrics in two groups. No
   placeholder numbers and no animated counters; the brief is explicit,
   and the note below explains the attribution limits. ---- */
export function HealthMeasure() {
  const groups = [
    { key: "acquisition", label: "Patient contact metrics" },
    { key: "visibility", label: "Visibility metrics" },
  ] as const;

  return (
    <section className="overflow-x-clip py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <div className="max-w-3xl">
            <h2 className="font-heading text-[clamp(1.9rem,3.6vw,2.6rem)] font-bold leading-[1.12] tracking-[-0.02em]">
              How We <span className="text-indigo">Measure</span> Patient Growth
            </h2>
            <p className="mt-6 text-[15px] leading-relaxed text-graphite">{HC_METRICS.intro}</p>
          </div>
        </Reveal>

        {/* Reads as a monthly report sheet: two labelled blocks of rows, each
            row a metric with its own definition. Deliberately plain, since
            the section's argument is measurement honesty. */}
        <div className="mt-12 grid gap-10">
          {groups.map((g, gi) => (
            <Reveal key={g.key} delay={gi * 80}>
              <div>
                <div className="flex items-center gap-3 border-b-2 border-ink/10 pb-3">
                  <span className={`size-2.5 rounded-full ${gi === 0 ? "bg-citron-deep" : "bg-indigo"}`} />
                  <h3 className="font-heading text-[15px] font-bold uppercase tracking-[0.08em]">{g.label}</h3>
                  <span className="ml-auto text-[12px] font-medium text-graphite">
                    {HC_METRICS.items.filter((m) => m.group === g.key).length} reported monthly
                  </span>
                </div>
                <div className="grid md:grid-cols-2">
                  {HC_METRICS.items
                    .filter((m) => m.group === g.key)
                    .map((m, i) => (
                      <div
                        key={m.name}
                        className={`group flex gap-4 border-b border-line py-5 transition-colors duration-300 hover:bg-surface md:px-5 ${i % 2 === 0 ? "md:border-r" : ""}`}
                      >
                        <span
                          className={`mt-1 h-8 w-1 shrink-0 rounded-full transition-all duration-300 ease-soft group-hover:h-10 ${gi === 0 ? "bg-citron-deep" : "bg-indigo"}`}
                        />
                        <div>
                          <h4 className="font-heading text-[14.5px] font-bold tracking-[-0.01em]">{m.name}</h4>
                          <p className="mt-1 text-[12.5px] leading-relaxed text-graphite">{m.desc}</p>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120}>
          <div className="mt-8 flex items-start gap-5 rounded-2xl bg-lilac/40 px-6 py-5">
            <span aria-hidden className="mt-0.5 grid size-10 shrink-0 place-items-center rounded-full border border-indigo/30 text-indigo">
              <svg width="15" height="15" viewBox="0 0 16 16" fill="none">
                <path d="M8 7.2v4M8 4.6v.2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
              </svg>
            </span>
            <p className="text-[13px] leading-relaxed text-graphite">{HC_METRICS.note}</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---- Why choose Search Nexio: sticky heading + evidence-led proof items,
   minimal hover only. ---- */
export function HealthWhy() {
  return (
    <section className="overflow-x-clip wash-lilac-full py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-12 lg:grid-cols-[0.65fr_1.35fr] lg:gap-20">
          <Reveal variant="left" className="lg:sticky lg:top-28 lg:self-start">
            <h2 className="font-heading text-[clamp(1.9rem,3.6vw,2.8rem)] font-bold leading-[1.1] tracking-[-0.02em]">
              Why Choose
              <br />
              <span className="text-indigo">Search Nexio</span>
            </h2>
            <span className="mt-6 block h-1 w-12 rounded-full bg-indigo" />
          </Reveal>

          <div className="grid gap-x-10 gap-y-10 sm:grid-cols-2">
            {HC_WHY.map((w, i) => (
              <Reveal key={w.title} variant="up" delay={Math.min((i % 2) * 80, 160)}>
                <div className="border-l-2 border-line pl-6 transition-colors duration-300 ease-soft hover:border-indigo">
                  <span className="font-heading text-[13px] font-bold tabular-nums text-indigo">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-2 font-heading text-[16px] font-bold tracking-[-0.01em]">{w.title}</h3>
                  <p className="mt-2 text-[13px] leading-relaxed text-graphite">{w.desc}</p>
                  {w.links && (
                    <p className="mt-3 flex flex-wrap gap-4">
                      {w.links.map((l) => (
                        <a key={l.label} href={l.href} className="text-[13px] font-semibold text-indigo underline decoration-indigo/30 underline-offset-2">
                          {l.label}
                        </a>
                      ))}
                    </p>
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---- Engagement options: three tiers on one board, shared CTA below. ---- */
export function HealthEngagements() {
  return (
    <section className="overflow-x-clip py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <h2 className="text-center font-heading text-[clamp(1.9rem,3.6vw,2.6rem)] font-bold leading-[1.12] tracking-[-0.02em]">
            Healthcare SEO <span className="text-indigo">Engagement</span> Options
          </h2>
        </Reveal>

        {/* Comparison cards: the middle tier is raised and outlined so the
            three read as options to weigh side by side. */}
        <Reveal delay={80}>
          <div className="mt-12 grid items-start gap-5 lg:grid-cols-3">
            {HC_ENGAGEMENTS.map((e) => (
              <div
                key={e.title}
                className={`group relative flex h-full flex-col rounded-3xl p-8 transition-all duration-300 ease-soft hover:-translate-y-1.5 ${
                  e.highlight
                    ? "border-2 border-indigo bg-surface shadow-[0_24px_60px_rgba(99,91,255,0.18)] lg:-mt-4 lg:pb-12"
                    : "border border-line bg-surface shadow-[0_10px_30px_rgba(11,13,18,0.05)] hover:shadow-[0_24px_56px_rgba(99,91,255,0.12)]"
                }`}
              >
                {e.highlight && (
                  <span className="absolute -top-3 left-8 rounded-full bg-indigo px-3 py-1 text-[10.5px] font-bold uppercase tracking-[0.1em] text-white">
                    Most coordinated
                  </span>
                )}
                <span className="inline-flex w-fit items-center rounded-full bg-lilac px-3 py-1.5 text-[10.5px] font-bold uppercase tracking-[0.1em] text-indigo">
                  {e.forWho}
                </span>
                <h3 className="mt-4 font-heading text-[20px] font-bold tracking-[-0.01em]">{e.title}</h3>
                <span className="mt-3 block h-px w-full bg-line" />
                <p className="mt-4 flex-1 text-[13.5px] leading-relaxed text-graphite">{e.desc}</p>
                {e.link && (
                  <a href={e.link.href} className="mt-6 inline-flex w-fit items-center gap-2 text-[13px] font-semibold text-indigo">
                    {e.link.label}
                    <span aria-hidden className="grid size-5 place-items-center rounded-full bg-indigo/10 transition-all duration-200 group-hover:bg-indigo group-hover:text-white">
                      <svg width="10" height="10" viewBox="0 0 12 12" fill="none"><path d="M2 6h8m0 0L6.5 2.5M10 6l-3.5 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                    </span>
                  </a>
                )}
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="mt-10 flex justify-center">
            <CtaLink href={H_ROUTES.contact} variant="ghost">Discuss Your Healthcare SEO Strategy</CtaLink>
          </div>
          <p className="mx-auto mt-6 max-w-3xl text-center text-[13px] leading-relaxed text-graphite">
            {HC_ENGAGEMENT_NOTE}
          </p>
        </Reveal>
      </div>
    </section>
  );
}

/* ---- What SEO cannot guarantee: narrow text block on the off-white
   ground, small shield above. No cards, no animation. ---- */
export function HealthLimitations() {
  return (
    <section className="overflow-x-clip bg-ivory py-16 md:py-24">
      <div className="mx-auto max-w-[740px] px-6">
        <Reveal>
          <span aria-hidden className="grid size-11 place-items-center rounded-2xl bg-lilac text-indigo">
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
              <path d="M11 3 4 6v5c0 4 3 6.5 7 8 4-1.5 7-4 7-8V6l-7-3Z" />
            </svg>
          </span>
          <h2 className="mt-6 font-heading text-[clamp(1.9rem,3.6vw,2.6rem)] font-bold leading-[1.12] tracking-[-0.02em]">
            What SEO Cannot <span className="text-indigo">Guarantee</span>
          </h2>
          <div className="mt-6 grid gap-4">
            {HC_LIMITATIONS.map((l, i) => (
              <p key={i} className="text-[15px] leading-relaxed text-graphite">{l}</p>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---- FAQ accordion with FAQPage schema. Full copy stays in the HTML. ---- */
function FaqRow({ q, a, open, onToggle }: { q: string; a: string; open: boolean; onToggle: () => void }) {
  return (
    <div className="border-b border-line last:border-b-0">
      <button type="button" onClick={onToggle} aria-expanded={open} className="flex w-full items-center justify-between gap-4 py-5 text-left">
        <span className="font-heading text-[16px] font-bold tracking-[-0.01em]">{q}</span>
        <span className={`grid size-7 shrink-0 place-items-center rounded-full border border-line transition-all duration-300 ${open ? "rotate-45 border-indigo/40 bg-indigo text-white" : "text-graphite"}`}>
          <svg width="13" height="13" viewBox="0 0 14 14" fill="none" aria-hidden><path d="M7 2v10M2 7h10" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" /></svg>
        </span>
      </button>
      <div className={`grid transition-all duration-300 ease-soft ${open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
        <div className="overflow-hidden">
          <p className="pb-5 pr-10 text-[14px] leading-relaxed text-graphite">{a}</p>
        </div>
      </div>
    </div>
  );
}

export function HealthFaq() {
  const [open, setOpen] = useState(0);
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: HC_FAQS.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <section className="overflow-x-clip py-16 md:py-24">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <div className="mx-auto max-w-[800px] px-6">
        <Reveal>
          <h2 className="text-center font-heading text-[clamp(1.9rem,3.6vw,2.6rem)] font-bold leading-[1.12] tracking-[-0.02em]">
            Frequently Asked <span className="text-indigo">Questions</span>
          </h2>
        </Reveal>
        <div className="mt-10">
          {HC_FAQS.map((f, i) => (
            <Reveal
              key={f.q}
              variant={i % 2 === 0 ? "left" : "right"}
              delay={Math.min(i * 50, 240)}
            >
              <FaqRow q={f.q} a={f.a} open={open === i} onToggle={() => setOpen(open === i ? -1 : i)} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---- Start your healthcare SEO review: copy left, form right, no
   decorative animation around the form. ---- */
function Field({ label, type = "text", required = false, full = false }: { label: string; type?: string; required?: boolean; full?: boolean }) {
  return (
    <label className={`block ${full ? "sm:col-span-2" : ""}`}>
      <span className="text-[12.5px] font-semibold text-ink">
        {label}
        {required && <span className="text-indigo"> *</span>}
      </span>
      <input
        type={type}
        required={required}
        className="mt-1.5 w-full rounded-xl border border-line bg-ivory/60 px-3.5 py-2.5 text-[14px] text-ink outline-none transition-colors focus:border-indigo/50 focus:bg-surface"
      />
    </label>
  );
}

export function HealthForm() {
  const [sent, setSent] = useState(false);

  return (
    <section id="healthcare-review" className="scroll-mt-24 overflow-x-clip py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="cta-indigo relative overflow-hidden rounded-[2rem] p-7 md:p-12">
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
          </div>

          <div className="relative grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
            <Reveal variant="left">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-[12px] font-semibold text-white backdrop-blur-sm">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden className="text-citron">
                  <path d="M12 6.5v11M6.5 12h11" />
                </svg>
                Healthcare SEO Review
              </span>
              <h2 className="mt-6 font-heading text-[clamp(1.9rem,3.6vw,2.7rem)] font-bold leading-[1.1] tracking-[-0.02em] text-white">
                {HC_FINAL.title}
              </h2>
              <p className="mt-5 max-w-lg text-[15px] leading-relaxed text-white/70">{HC_FINAL.body}</p>
              <p className="mt-7 text-[14px] text-white/70">
                Prefer to speak directly?{" "}
                <a href={HC_FINAL.secondaryCta.href} className="font-semibold text-white underline decoration-white/40 underline-offset-2">
                  {HC_FINAL.secondaryCta.label}
                </a>
              </p>
            </Reveal>

            <Reveal variant="right" delay={80}>
              <div className="rounded-3xl bg-surface p-7 shadow-[0_30px_80px_rgba(11,13,18,0.35)] md:p-8">
                {sent ? (
                  <div className="grid min-h-[400px] place-items-center text-center">
                    <div>
                      <span className="mx-auto grid size-14 place-items-center rounded-2xl bg-citron">
                        <svg width="24" height="24" viewBox="0 0 12 12" fill="none" aria-hidden><path d="m2.5 6.5 2.5 2.5 4.5-5" stroke="#0B0D12" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                      </span>
                      <h3 className="mt-5 font-heading text-[20px] font-bold tracking-[-0.01em]">Request received</h3>
                      <p className="mx-auto mt-2 max-w-sm text-[14px] leading-relaxed text-graphite">
                        Thank you. Search Nexio will review your details and follow up about your healthcare SEO audit.
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
                      <Field label="Company or practice" />
                      <Field label="Website" type="url" required />
                      <Field label="Number of locations" required />
                      <Field label="Primary specialty or services" required />
                      <label className="block sm:col-span-2">
                        <span className="text-[12.5px] font-semibold text-ink">Main SEO challenge <span className="text-indigo">*</span></span>
                        <textarea
                          required
                          rows={4}
                          className="mt-1.5 w-full resize-none rounded-xl border border-line bg-ivory/60 px-3.5 py-2.5 text-[14px] text-ink outline-none transition-colors focus:border-indigo/50 focus:bg-surface"
                        />
                      </label>
                      <Field label="Phone number (optional)" type="tel" full />
                    </div>

                    <button
                      type="submit"
                      className="group mt-6 flex w-full items-center justify-center gap-2.5 rounded-full bg-citron py-3 text-[14.5px] font-semibold text-ink-solid transition-colors duration-200 hover:bg-citron-deep"
                    >
                      {HC_FINAL.submit}
                      <span aria-hidden className="grid size-6 place-items-center rounded-full bg-ink-solid text-citron transition-transform duration-200 group-hover:translate-x-0.5">
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2 6h8m0 0L6.5 2.5M10 6l-3.5 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                      </span>
                    </button>

                    <p className="mt-4 text-[11.5px] leading-relaxed text-graphite">{HC_FINAL.privacy}</p>
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
