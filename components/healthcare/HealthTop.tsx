"use client";

import { useEffect, useRef, useState } from "react";
import Reveal from "@/components/motion/Reveal";
import { CtaLink } from "@/components/ui";
import {
  HC_HERO,
  HC_BRING_PATIENTS,
  HC_SEARCH_STAGES,
  HC_DIFFERENT,
} from "@/lib/healthcare-seo-content";

/* ---- Hero: copy left, a search-to-booking flow right ----
   Search interface style, not stock photography. The three steps play once
   in sequence and hold; reduced-motion users see the final state. */

function useTypedOnce(text: string, start: boolean, speed = 55) {
  const [shown, setShown] = useState("");
  useEffect(() => {
    if (!start) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setShown(text);
      return;
    }
    let i = 0;
    const id = setInterval(() => {
      i += 1;
      setShown(text.slice(0, i));
      if (i >= text.length) clearInterval(id);
    }, speed);
    return () => clearInterval(id);
  }, [text, start, speed]);
  return shown;
}

function BookingFlow() {
  const ref = useRef<HTMLDivElement>(null);
  const [step, setStep] = useState(-1);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setStep(2);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        if (!entries[0].isIntersecting) return;
        io.disconnect();
        setStep(0);
        setTimeout(() => setStep(1), 1700);
        setTimeout(() => setStep(2), 3100);
      },
      { rootMargin: "0px 0px -15% 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const typed = useTypedOnce("specialist near me", step >= 0);

  return (
    <div ref={ref} className="relative mx-auto w-full max-w-[520px]">
      <div aria-hidden className="absolute inset-x-6 top-10 bottom-6 rounded-[2rem] bg-indigo/10 blur-3xl" />

      <div className="relative grid gap-4">
        {/* step 1: the patient search */}
        <div className="rounded-2xl border border-line bg-surface p-4 shadow-[0_16px_40px_rgba(11,13,18,0.07)]">
          <p className="text-[10.5px] font-bold uppercase tracking-[0.14em] text-indigo">Step 1 · The patient search</p>
          <div className="mt-3 flex items-center gap-3 rounded-xl border border-line bg-ivory/70 px-3.5 py-2.5">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="var(--color-graphite)" strokeWidth="1.8" strokeLinecap="round" aria-hidden>
              <circle cx="11" cy="11" r="6.5" />
              <path d="M15.8 15.8 20 20" />
            </svg>
            <span className="text-[13.5px] font-medium text-ink">
              {typed}
              {step === 0 && <span className="animate-pulse ml-0.5 inline-block h-3.5 w-px translate-y-0.5 bg-ink/70" />}
            </span>
          </div>
        </div>

        <div aria-hidden className="flex justify-center">
          <svg width="16" height="18" viewBox="0 0 16 18" fill="none" className={`transition-opacity duration-500 ${step >= 1 ? "opacity-100" : "opacity-0"}`}>
            <path d="M8 0v12M3.5 8 8 13l4.5-5" stroke="var(--color-indigo)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>

        {/* step 2: the treatment / provider page */}
        <div className={`rounded-2xl border bg-surface p-4 transition-all duration-700 ease-soft ${step >= 1 ? "translate-y-0 border-indigo/30 opacity-100 shadow-[0_18px_44px_rgba(99,91,255,0.14)]" : "translate-y-3 border-line opacity-0"}`}>
          <p className="text-[10.5px] font-bold uppercase tracking-[0.14em] text-indigo">Step 2 · The treatment page</p>
          <div className="mt-3 flex items-start gap-3">
            <span className="grid size-9 shrink-0 place-items-center rounded-lg bg-gradient-to-br from-indigo to-indigo-deep text-white">
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                <path d="M12 6.5v11M6.5 12h11" />
              </svg>
            </span>
            <div className="min-w-0 flex-1">
              <span className="block h-2 w-2/3 rounded-full bg-ink/15" />
              <span className="mt-2 block h-2 w-full rounded-full bg-ink/8" />
              <div className="mt-3 flex flex-wrap gap-1.5">
                <span className="rounded-full border border-line bg-ivory/70 px-2.5 py-1 text-[10.5px] font-semibold text-ink">Accepting new patients</span>
                <span className="rounded-full bg-citron px-2.5 py-1 text-[10.5px] font-bold text-ink-solid">Book appointment</span>
              </div>
            </div>
          </div>
        </div>

        <div aria-hidden className="flex justify-center">
          <svg width="16" height="18" viewBox="0 0 16 18" fill="none" className={`transition-opacity duration-500 ${step >= 2 ? "opacity-100" : "opacity-0"}`}>
            <path d="M8 0v12M3.5 8 8 13l4.5-5" stroke="var(--color-indigo)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>

        {/* step 3: the appointment request */}
        <div className={`flex items-center gap-3.5 rounded-2xl border border-line bg-surface p-4 transition-all duration-700 ease-soft ${step >= 2 ? "translate-y-0 opacity-100 shadow-[0_18px_44px_rgba(11,13,18,0.08)]" : "translate-y-3 opacity-0"}`}>
          <span className="grid size-10 shrink-0 place-items-center rounded-full bg-citron">
            <svg width="18" height="18" viewBox="0 0 12 12" fill="none" aria-hidden><path d="m2.5 6.5 2.5 2.5 4.5-5" stroke="#0B0D12" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </span>
          <div>
            <p className="text-[10.5px] font-bold uppercase tracking-[0.14em] text-indigo">Step 3 · The outcome</p>
            <p className="mt-0.5 font-heading text-[15px] font-bold tracking-[-0.01em]">Appointment request received</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export function HealthHero() {
  return (
    <section className="relative overflow-x-clip pt-[136px]">
      <div aria-hidden className="wash-lilac absolute inset-x-0 top-0 h-[680px]" />
      <div
        aria-hidden
        className="grid-pattern absolute left-1/2 top-24 h-[440px] w-[760px] -translate-x-1/2 [mask-image:radial-gradient(ellipse_70%_70%_at_50%_40%,#000_35%,transparent_75%)]"
      />

      <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-6 pb-20 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12 lg:pb-28">
        <div>
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full bg-lilac px-4 py-2 text-[12.5px] font-bold uppercase tracking-[0.1em] text-indigo">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                <path d="M12 6.5v11M6.5 12h11" />
              </svg>
              {HC_HERO.eyebrow}
            </span>
          </Reveal>
          <Reveal delay={60} duration={600}>
            <h1 className="mt-6 font-heading text-[clamp(2.4rem,4.8vw,3.8rem)] font-bold leading-[1.06] tracking-[-0.03em]">
              Healthcare SEO
              <br />
              <span className="text-indigo">Services</span>
            </h1>
          </Reveal>
          <Reveal delay={120} duration={600}>
            <p className="mt-6 max-w-xl text-[16px] leading-relaxed text-graphite">{HC_HERO.intro}</p>
            <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-graphite">{HC_HERO.intro2}</p>
          </Reveal>
          <Reveal delay={180} duration={600}>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <CtaLink href={HC_HERO.primaryCta.href}>{HC_HERO.primaryCta.label}</CtaLink>
              <CtaLink href={HC_HERO.secondaryCta.href} variant="ghost">{HC_HERO.secondaryCta.label}</CtaLink>
            </div>
          </Reveal>
        </div>

        <Reveal variant="right" delay={120}>
          <BookingFlow />
        </Reveal>
      </div>
    </section>
  );
}

/* ---- Trusted by healthcare teams: styled label only. Real approved logos
   are added later with written permission; nothing is invented. ---- */
export function HealthTrustedBy() {
  return (
    <section className="overflow-x-clip border-y border-line py-8">
      <div className="mx-auto max-w-6xl px-6 text-center">
        <p className="text-[11.5px] font-bold uppercase tracking-[0.16em] text-graphite">
          Trusted by healthcare teams
        </p>
        <p className="mt-3 text-[13px] text-graphite/70">
          Client logos are added with written permission.
        </p>
      </div>
    </section>
  );
}

/* ---- Search should bring patients: copy left, results snapshot right.
   Subtle fade only; the snapshot carries the visual weight. ---- */
export function HealthBringPatients() {
  const s = HC_BRING_PATIENTS.snapshot;
  return (
    <section className="overflow-x-clip py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <Reveal variant="left">
            <h2 className="font-heading text-[clamp(1.9rem,3.6vw,2.6rem)] font-bold leading-[1.12] tracking-[-0.02em]">
              Search Should Bring <span className="text-indigo">Patients</span>
            </h2>
            <div className="mt-6 grid gap-4">
              {HC_BRING_PATIENTS.paras.map((p, i) => (
                <p key={i} className="text-[15px] leading-relaxed text-graphite">{p}</p>
              ))}
            </div>
          </Reveal>

          <Reveal variant="right" delay={80}>
            <article className="cta-indigo relative overflow-hidden rounded-3xl p-8 text-white">
              <div aria-hidden className="pointer-events-none absolute -right-16 -top-16 size-48 rounded-full border border-white/10" />
              <p className="relative text-[11px] font-bold uppercase tracking-[0.14em] text-citron">{s.label}</p>
              <p className="relative mt-5 font-heading text-[clamp(1.35rem,2.4vw,1.7rem)] font-bold leading-snug tracking-[-0.015em]">
                {s.heading}
              </p>
              <p className="relative mt-4 text-[13.5px] leading-relaxed text-white/70">{s.body}</p>
              <p className="relative mt-6 border-t border-white/10 pt-4 text-[11.5px] text-white/45">{s.note}</p>
            </article>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ---- How patients search for care: four-stage journey. The brief calls
   this the best animation on the page; each stage activates once on
   scroll with the connecting line drawing across. ---- */
export function HealthSearchStages() {
  return (
    <section className="overflow-x-clip wash-lilac-full py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <div className="max-w-3xl">
            <h2 className="font-heading text-[clamp(1.9rem,3.6vw,2.6rem)] font-bold leading-[1.12] tracking-[-0.02em]">
              How Patients <span className="text-indigo">Search</span> for Care
            </h2>
            <p className="mt-6 text-[15px] leading-relaxed text-graphite">{HC_SEARCH_STAGES.intro}</p>
          </div>
        </Reveal>

        <Reveal delay={80}>
          <div className="relative mt-12">
            <span aria-hidden className="absolute left-[12%] right-[12%] top-[26px] hidden h-px bg-line lg:block" />
            <span
              aria-hidden
              className="trend-bar absolute left-[12%] top-[26px] hidden h-px w-[76%] bg-indigo/50 lg:block"
              style={{ "--bar-delay": "200ms" } as React.CSSProperties}
            />

            <ol className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
              {HC_SEARCH_STAGES.stages.map((s, i) => (
                <li key={s.name} className="reveal-item relative" style={{ transitionDelay: `${150 + i * 90}ms` }}>
                  <span className="relative z-10 grid size-13 place-items-center rounded-full border border-indigo/25 bg-surface font-heading text-[15px] font-bold text-indigo">
                    {i + 1}
                  </span>
                  <h3 className="mt-5 font-heading text-[16px] font-bold leading-snug tracking-[-0.01em]">{s.name}</h3>

                  <div className="mt-3 flex items-center gap-2.5 rounded-xl border border-line bg-surface px-3 py-2.5">
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="var(--color-indigo)" strokeWidth="1.9" strokeLinecap="round" aria-hidden className="shrink-0">
                      <circle cx="11" cy="11" r="6.5" />
                      <path d="M15.8 15.8 20 20" />
                    </svg>
                    <span className="min-w-0 flex-1 truncate text-[12px] font-medium text-ink">{s.query}</span>
                    <span aria-hidden className="animate-pulse h-3 w-px shrink-0 bg-ink/40" />
                  </div>

                  <p className="mt-3 text-[13px] leading-relaxed text-graphite">{s.desc}</p>
                </li>
              ))}
            </ol>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---- Why healthcare SEO is different: 2x2 text-led cards. No decorative
   animation; the brief asks for this section to stay calm. ---- */
export function HealthDifferent() {
  return (
    <section className="overflow-x-clip py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <div className="max-w-3xl">
            <h2 className="font-heading text-[clamp(1.9rem,3.6vw,2.6rem)] font-bold leading-[1.12] tracking-[-0.02em]">
              Why Healthcare SEO Is <span className="text-indigo">Different</span>
            </h2>
            <p className="mt-6 text-[15px] leading-relaxed text-graphite">{HC_DIFFERENT.intro}</p>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {HC_DIFFERENT.cards.map((c) => (
            <article
              key={c.title}
              className="flex h-full flex-col rounded-2xl border border-line border-t-2 border-t-indigo bg-surface p-7"
            >
              <h3 className="font-heading text-[16px] font-bold tracking-[-0.01em]">{c.title}</h3>
              <p className="mt-3 text-[13.5px] leading-relaxed text-graphite">{c.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
