"use client";

import { useEffect, useRef, useState } from "react";
import Reveal from "@/components/motion/Reveal";
import FaqSection from "@/components/FaqSection";
import ClosingForm from "@/components/ClosingForm";
import { CtaLink, Field } from "@/components/ui";
import {
  CRYPTO_PROCESS,
  CRYPTO_PROCESS_CTA,
  CRYPTO_METRICS,
  CRYPTO_WHY,
  CRYPTO_ENGAGEMENTS,
  CRYPTO_PRICING_INTRO,
  CRYPTO_LIMITATIONS,
  CRYPTO_FAQS,
  CRYPTO_FINAL,
  C_ROUTES,
} from "@/lib/crypto-seo-content";

/* ---- Our Crypto SEO Process: four-step timeline, steps activate one at a
   time on scroll. Followed by the dark audit CTA banner. ---- */
export function CryptoProcess() {
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
    <section id="crypto-process" className="scroll-mt-24 overflow-x-clip py-16 md:py-24">
      <div className="mx-auto max-w-4xl px-6">
        <Reveal>
          <h2 className="text-center font-heading text-[clamp(1.9rem,3.6vw,2.6rem)] font-bold leading-[1.12] tracking-[-0.02em]">
            Our Crypto SEO <span className="text-indigo">Process</span>
          </h2>
        </Reveal>

        <ol className="relative mt-12">
          <span aria-hidden className="absolute bottom-6 left-[21px] top-6 w-px bg-line" />
          <span
            aria-hidden
            className="absolute left-[21px] top-6 w-px bg-gradient-to-b from-indigo to-indigo/70 transition-all duration-700 ease-soft"
            style={{ height: `calc((100% - 48px) * ${active / (CRYPTO_PROCESS.length - 1)})` }}
          />
          {CRYPTO_PROCESS.map((step, i) => {
            const state = i < active ? "done" : i === active ? "active" : "next";
            return (
              <li
                key={step.name}
                ref={(el) => {
                  stepRefs.current[i] = el;
                }}
                className={`relative flex gap-5 ${i < CRYPTO_PROCESS.length - 1 ? "pb-12" : ""}`}
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

      {/* audit CTA banner */}
      <Reveal delay={80}>
        <div className="mx-auto mt-16 max-w-6xl px-6">
          <div className="cta-indigo relative overflow-hidden rounded-[2rem] px-8 py-12 text-center md:px-12">
            <div aria-hidden className="pointer-events-none absolute inset-0">
              <div className="absolute -right-28 -top-28 size-96 rounded-full border border-white/10" />
              <div className="absolute -bottom-24 -left-24 size-80 rounded-full border border-white/10" />
            </div>
            <div className="relative">
              <h3 className="mx-auto max-w-2xl font-heading text-[clamp(1.5rem,2.8vw,2rem)] font-bold leading-[1.14] tracking-[-0.02em] text-white">
                {CRYPTO_PROCESS_CTA.heading}
              </h3>
              <p className="mx-auto mt-4 max-w-xl text-[15px] leading-relaxed text-white/70">
                {CRYPTO_PROCESS_CTA.body}
              </p>
              <div className="mt-8 flex justify-center">
                <CtaLink href={CRYPTO_PROCESS_CTA.cta.href}>{CRYPTO_PROCESS_CTA.cta.label}</CtaLink>
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

/* ---- How We Measure Growth: eight metrics in two groups. No placeholder
   numbers and no animated counters: the note below explains that tracking
   has limits, and growing numbers would contradict it. ---- */
export function CryptoMeasure() {
  const groups = [
    { key: "acquisition", label: "Acquisition metrics" },
    { key: "visibility", label: "Visibility metrics" },
  ] as const;

  return (
    <section className="overflow-x-clip py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <div className="max-w-3xl">
            <h2 className="font-heading text-[clamp(1.9rem,3.6vw,2.6rem)] font-bold leading-[1.12] tracking-[-0.02em]">
              How We <span className="text-indigo">Measure</span> Crypto SEO Growth
            </h2>
            <p className="mt-6 text-[15px] leading-relaxed text-graphite">{CRYPTO_METRICS.intro}</p>
          </div>
        </Reveal>

        {/* Crypto reads as one dark measurement console: a single panel with
            two tagged groups inside, metrics as tiles. No numbers and no
            counters, since the note below explains attribution gaps. */}
        <Reveal delay={80}>
          <div className="cta-indigo relative mt-12 overflow-hidden rounded-[2rem] p-7 md:p-10">
            <div aria-hidden className="pointer-events-none absolute inset-0">
              <div className="absolute -right-24 -top-24 size-80 rounded-full border border-white/10" />
              <div
                className="absolute bottom-6 right-8 h-20 w-32 opacity-50"
                style={{
                  backgroundImage: "radial-gradient(rgba(255,255,255,0.25) 1.5px, transparent 1.5px)",
                  backgroundSize: "14px 14px",
                }}
              />
            </div>

            <div className="relative grid gap-10">
              {groups.map((g, gi) => (
                <div key={g.key}>
                  <div className="flex items-center gap-3 border-b border-white/10 pb-3">
                    <span className={`size-2.5 rounded-full ${gi === 0 ? "bg-citron" : "bg-white/60"}`} />
                    <h3 className="font-heading text-[14px] font-bold uppercase tracking-[0.1em] text-white">
                      {g.label}
                    </h3>
                  </div>
                  <div className="mt-4 grid gap-3 sm:grid-cols-2">
                    {CRYPTO_METRICS.items
                      .filter((m) => m.group === g.key)
                      .map((m) => (
                        <div
                          key={m.name}
                          className="rounded-2xl border border-white/10 bg-white/[0.06] p-5 backdrop-blur-sm transition-colors duration-300 hover:bg-white/[0.11]"
                        >
                          <h4 className="font-heading text-[14.5px] font-bold tracking-[-0.01em] text-white">{m.name}</h4>
                          <p className="mt-1.5 text-[12.5px] leading-relaxed text-white/65">{m.desc}</p>
                        </div>
                      ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="mt-8 flex items-start gap-5 rounded-2xl bg-lilac/40 px-6 py-5">
            <span aria-hidden className="mt-0.5 grid size-10 shrink-0 place-items-center rounded-full border border-indigo/30 text-indigo">
              <svg width="15" height="15" viewBox="0 0 16 16" fill="none">
                <path d="M8 7.2v4M8 4.6v.2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
              </svg>
            </span>
            <p className="text-[13px] leading-relaxed text-graphite">{CRYPTO_METRICS.note}</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---- Why Choose Search Nexio: sticky heading + evidence-led proof items.
   Static, minimal hover only. ---- */
export function CryptoWhy() {
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
            {CRYPTO_WHY.map((w, i) => (
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
export function CryptoEngagements() {
  return (
    <section className="overflow-x-clip py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <h2 className="text-center font-heading text-[clamp(1.9rem,3.6vw,2.6rem)] font-bold leading-[1.12] tracking-[-0.02em]">
            Crypto SEO <span className="text-indigo">Pricing</span>
          </h2>
          <div className="mx-auto mt-5 grid max-w-3xl gap-3 text-center">
            {CRYPTO_PRICING_INTRO.map((t) => (
              <p key={t.slice(0, 24)} className="text-[15.5px] leading-relaxed text-graphite">
                {t}
              </p>
            ))}
          </div>
        </Reveal>

        {/* Crypto lists its tiers as full-width rows rather than columns:
            an index number, the tier and its qualifier, then the scope. The
            highlighted tier carries a lilac field. */}
        <Reveal delay={80}>
          <div className="mt-12 grid gap-4">
            {CRYPTO_ENGAGEMENTS.map((e, i) => (
              <div
                key={e.title}
                className={`group grid gap-5 rounded-3xl p-8 transition-all duration-300 ease-soft hover:-translate-y-1 lg:grid-cols-[64px_0.85fr_1.15fr] lg:items-start lg:gap-10 ${
                  e.highlight
                    ? "bg-lilac/50 shadow-[0_16px_44px_rgba(99,91,255,0.14)]"
                    : "bg-surface shadow-[0_10px_30px_rgba(11,13,18,0.05)] hover:shadow-[0_20px_50px_rgba(99,91,255,0.1)]"
                }`}
              >
                <span
                  aria-hidden
                  className="font-heading text-[38px] font-extrabold leading-none tracking-[-0.03em] text-indigo/25 transition-colors duration-300 group-hover:text-indigo/50"
                >
                  {String(i + 1).padStart(2, "0")}
                </span>

                <div>
                  <h3 className="font-heading text-[20px] font-bold tracking-[-0.015em]">{e.title}</h3>
                  <p className="mt-2 inline-flex items-center gap-2 text-[11.5px] font-bold uppercase tracking-[0.1em] text-indigo">
                    <span className="size-1.5 rounded-full bg-indigo" />
                    Best for {e.forWho}
                  </p>
                </div>

                <div>
                  <p className="text-[13.5px] leading-relaxed text-graphite">{e.desc}</p>
                  <div className="mt-5 border-t border-line pt-4">
                    <p className="font-heading text-[17px] font-bold tracking-[-0.01em] text-indigo">
                      {e.price}
                    </p>
                    <p className="mt-1.5 text-[12.5px] leading-relaxed text-graphite">
                      {e.priceNote}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="mt-10 flex justify-center">
            <CtaLink href={C_ROUTES.contact} variant="ghost">Discuss Your Crypto SEO Strategy</CtaLink>
          </div>
          <p className="mx-auto mt-6 max-w-3xl text-center text-[13px] leading-relaxed text-graphite">
            Scope and pricing are confirmed before any work begins. Contact us to
            discuss enterprise scope.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

/* ---- What SEO Cannot Guarantee: narrow text block, no cards, no
   animation. The visual restraint signals honesty. ---- */
export function CryptoLimitations() {
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
            {CRYPTO_LIMITATIONS.map((l, i) => (
              <p key={i} className="text-[15px] leading-relaxed text-graphite">{l}</p>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---- FAQ: shared accordion + schema (components/FaqSection). ---- */
export function CryptoFaq() {
  return (
    <FaqSection
      title={<>Frequently Asked <span className="text-indigo">Questions</span></>}
      faqs={CRYPTO_FAQS}
    />
  );
}


export function CryptoForm() {
  return (
    <ClosingForm
      id="visibility-review"
      scrollMt
      badge="Crypto SEO Review"
      title={CRYPTO_FINAL.title}
      intro={
        <>
          <div className="mt-5 grid max-w-lg gap-3">
                {CRYPTO_FINAL.paras.map((t) => (
                  <p key={t.slice(0, 24)} className="text-[15px] leading-relaxed text-white/70">{t}</p>
                ))}
              </div>
              <p className="mt-7 text-[14px] text-white/70">
                Prefer to speak directly?{" "}
                <a href={CRYPTO_FINAL.secondaryCta.href} className="font-semibold text-white underline decoration-white/40 underline-offset-2">
                  {CRYPTO_FINAL.secondaryCta.label}
                </a>
              </p>
        </>
      }
      submitLabel={CRYPTO_FINAL.submit}
      sentMessage="Thank you. Search Nexio will review your details and follow up about your crypto SEO audit."
      privacy={CRYPTO_FINAL.privacy}
    >
      <div className="grid gap-4 sm:grid-cols-2">
                      <Field label="Name" required />
                      <Field label="Work email" type="email" required />
                      <Field label="Company" />
                      <Field label="Website" type="url" required />
                      <Field label="Product type" required />
                      <Field label="Target market" />
                      <Field label="Phone (optional)" type="tel" full />
                      <label className="block sm:col-span-2">
                        <span className="text-[12.5px] font-semibold text-ink">Main SEO challenge <span className="text-indigo">*</span></span>
                        <textarea
                          required
                          rows={4}
                          className="mt-1.5 w-full resize-none rounded-xl border border-line bg-ivory/60 px-3.5 py-2.5 text-[14px] text-ink outline-none transition-colors focus:border-indigo/50 focus:bg-surface"
                        />
                      </label>
                    </div>
    </ClosingForm>
  );
}
