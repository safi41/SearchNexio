"use client";

import { useEffect, useRef, useState } from "react";
import Reveal from "@/components/motion/Reveal";
import { CtaLink } from "@/components/ui";
import {
  CRYPTO_HERO,
  QUALIFIED_DEMAND,
  CRYPTO_SEARCH_STAGES,
  CRYPTO_DIFFERENT,
} from "@/lib/crypto-seo-content";

/* ---- Hero: copy left, a three-step acquisition flow right ----
   The flow shows the outcome (search to service page to submitted form),
   not the technology. It plays once when it enters view and then holds its
   final state; reduced-motion users get the completed state immediately. */

/* Types out a string once, then stops. */
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

function AcquisitionFlow() {
  const ref = useRef<HTMLDivElement>(null);
  /* step 0 typing, 1 page appears, 2 form submitted */
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
        const t1 = setTimeout(() => setStep(1), 1500);
        const t2 = setTimeout(() => setStep(2), 2900);
        return () => {
          clearTimeout(t1);
          clearTimeout(t2);
        };
      },
      { rootMargin: "0px 0px -15% 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const typed = useTypedOnce("crypto tax help", step >= 0);

  return (
    <div ref={ref} className="relative mx-auto w-full max-w-[520px]">
      {/* soft indigo wash behind the stack */}
      <div aria-hidden className="absolute inset-x-6 top-10 bottom-6 rounded-[2rem] bg-indigo/10 blur-3xl" />

      <div className="relative grid gap-4">
        {/* step 1: the search */}
        <div className="rounded-2xl border border-line bg-surface p-4 shadow-[0_16px_40px_rgba(11,13,18,0.07)]">
          <p className="text-[10.5px] font-bold uppercase tracking-[0.14em] text-indigo">Step 1 · The search</p>
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

        {/* connector */}
        <div aria-hidden className="flex justify-center">
          <svg width="16" height="18" viewBox="0 0 16 18" fill="none" className={`transition-opacity duration-500 ${step >= 1 ? "opacity-100" : "opacity-0"}`}>
            <path d="M8 0v12M3.5 8 8 13l4.5-5" stroke="var(--color-indigo)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>

        {/* step 2: the service page */}
        <div className={`rounded-2xl border bg-surface p-4 transition-all duration-700 ease-soft ${step >= 1 ? "translate-y-0 border-indigo/30 opacity-100 shadow-[0_18px_44px_rgba(99,91,255,0.14)]" : "translate-y-3 border-line opacity-0"}`}>
          <p className="text-[10.5px] font-bold uppercase tracking-[0.14em] text-indigo">Step 2 · The service page</p>
          <div className="mt-3 flex items-start gap-3">
            <span className="grid size-9 shrink-0 place-items-center rounded-lg bg-gradient-to-br from-indigo to-indigo-deep text-white">
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                <rect x="4.5" y="3.5" width="15" height="17" rx="2.5" />
                <path d="M8 8h8M8 11.5h8M8 15h4.5" />
              </svg>
            </span>
            <div className="min-w-0 flex-1">
              <span className="block h-2 w-2/3 rounded-full bg-ink/15" />
              <span className="mt-2 block h-2 w-full rounded-full bg-ink/8" />
              <span className="mt-2 block h-2 w-4/5 rounded-full bg-ink/8" />
              <span className="mt-3 inline-flex items-center gap-1.5 rounded-full bg-citron px-3 py-1 text-[11px] font-bold text-ink-solid">
                Book a consultation
              </span>
            </div>
          </div>
        </div>

        {/* connector */}
        <div aria-hidden className="flex justify-center">
          <svg width="16" height="18" viewBox="0 0 16 18" fill="none" className={`transition-opacity duration-500 ${step >= 2 ? "opacity-100" : "opacity-0"}`}>
            <path d="M8 0v12M3.5 8 8 13l4.5-5" stroke="var(--color-indigo)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>

        {/* step 3: the qualified enquiry */}
        <div className={`flex items-center gap-3.5 rounded-2xl border border-line bg-surface p-4 transition-all duration-700 ease-soft ${step >= 2 ? "translate-y-0 opacity-100 shadow-[0_18px_44px_rgba(11,13,18,0.08)]" : "translate-y-3 opacity-0"}`}>
          <span className="grid size-10 shrink-0 place-items-center rounded-full bg-citron">
            <svg width="18" height="18" viewBox="0 0 12 12" fill="none" aria-hidden><path d="m2.5 6.5 2.5 2.5 4.5-5" stroke="#0B0D12" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </span>
          <div>
            <p className="text-[10.5px] font-bold uppercase tracking-[0.14em] text-indigo">Step 3 · The outcome</p>
            <p className="mt-0.5 font-heading text-[15px] font-bold tracking-[-0.01em]">Qualified enquiry received</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export function CryptoHero() {
  return (
    <section className="relative overflow-x-clip pt-[136px]">
      <div aria-hidden className="wash-lilac absolute inset-x-0 top-0 h-[680px]" />
      <div
        aria-hidden
        className="grid-pattern absolute left-1/2 top-24 h-[440px] w-[760px] -translate-x-1/2 [mask-image:radial-gradient(ellipse_70%_70%_at_50%_40%,#000_35%,transparent_75%)]"
      />

      <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-6 pb-20 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12 lg:pb-28">
        <div>
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full bg-lilac px-4 py-2 text-[12.5px] font-bold uppercase tracking-[0.1em] text-indigo">
              <svg width="14" height="14" viewBox="0 0 24 24" aria-hidden>
                <path d="M12 2c.4 5 5 9.6 10 10-5 .4-9.6 5-10 10-.4-5-5-9.6-10-10 5-.4 9.6-5 10-10Z" fill="currentColor" />
              </svg>
              {CRYPTO_HERO.eyebrow}
            </span>
          </Reveal>
          <Reveal delay={60} duration={600}>
            <h1 className="mt-6 font-heading text-[clamp(2.5rem,5vw,4rem)] font-bold leading-[1.06] tracking-[-0.03em]">
              Crypto SEO
              <br />
              <span className="text-indigo">Services</span>
            </h1>
          </Reveal>
          <Reveal delay={120} duration={600}>
            <p className="mt-6 max-w-xl text-[16px] leading-relaxed text-graphite">{CRYPTO_HERO.intro}</p>
          </Reveal>
          <Reveal delay={180} duration={600}>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <CtaLink href={CRYPTO_HERO.primaryCta.href}>{CRYPTO_HERO.primaryCta.label}</CtaLink>
              <CtaLink href={CRYPTO_HERO.secondaryCta.href} variant="ghost">{CRYPTO_HERO.secondaryCta.label}</CtaLink>
            </div>
          </Reveal>
          <Reveal delay={240}>
            <p className="mt-9 flex max-w-lg items-start gap-3 border-t border-line pt-7 text-[13px] leading-relaxed text-graphite">
              <span aria-hidden className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-lilac text-indigo">
                <svg width="11" height="11" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11 3 4 6v5c0 4 3 6.5 7 8 4-1.5 7-4 7-8V6l-7-3Z" /></svg>
              </span>
              {CRYPTO_HERO.trust}
            </p>
          </Reveal>
        </div>

        <Reveal variant="right" delay={120}>
          <AcquisitionFlow />
        </Reveal>
      </div>
    </section>
  );
}

/* ---- Trusted by crypto teams: styled label only. Real approved logos are
   added later; nothing is invented here. ---- */
export function CryptoTrustedBy() {
  return (
    <section className="overflow-x-clip border-y border-line py-8">
      <div className="mx-auto max-w-6xl px-6 text-center">
        <p className="text-[11.5px] font-bold uppercase tracking-[0.16em] text-graphite">
          Trusted by crypto teams
        </p>
        <p className="mt-3 text-[13px] text-graphite/70">
          Client logos are added with written permission.
        </p>
      </div>
    </section>
  );
}

/* ---- Search Should Drive Qualified Demand: copy left, the results
   snapshot card right. No animation; the card is the visual anchor. ---- */
export function CryptoQualifiedDemand() {
  const s = QUALIFIED_DEMAND.snapshot;
  return (
    <section className="overflow-x-clip py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <Reveal variant="left">
            <h2 className="font-heading text-[clamp(1.9rem,3.6vw,2.6rem)] font-bold leading-[1.12] tracking-[-0.02em]">
              Search Should Drive <span className="text-indigo">Qualified</span> Demand
            </h2>
            <div className="mt-6 grid gap-4">
              {QUALIFIED_DEMAND.paras.map((p, i) => (
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

/* ---- How Crypto Customers Search: four-stage journey. Columns appear
   left to right on scroll with an 80ms stagger, the connecting line draws
   once, and each search bar blinks once as if typed. ---- */
export function CryptoSearchStages() {
  return (
    <section className="overflow-x-clip wash-lilac-full py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <div className="max-w-3xl">
            <h2 className="font-heading text-[clamp(1.9rem,3.6vw,2.6rem)] font-bold leading-[1.12] tracking-[-0.02em]">
              How Crypto Customers <span className="text-indigo">Search</span>
            </h2>
            <p className="mt-6 text-[15px] leading-relaxed text-graphite">{CRYPTO_SEARCH_STAGES.intro}</p>
          </div>
        </Reveal>

        {/* Crypto reads as a query board: each stage is a card whose header
            is the real user query in a terminal-style bar, with the stage
            name as a label above it. Cards step down progressively to show
            movement toward the buying decision. */}
        <Reveal delay={80}>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
            {CRYPTO_SEARCH_STAGES.stages.map((s, i) => (
              <article
                key={s.name}
                className="reveal-item group flex h-full flex-col rounded-3xl bg-surface p-6 shadow-[0_10px_30px_rgba(11,13,18,0.05)] transition-all duration-300 ease-soft hover:-translate-y-1.5 hover:shadow-[0_24px_56px_rgba(99,91,255,0.14)] lg:mt-[var(--step)]"
                style={
                  {
                    transitionDelay: `${150 + i * 80}ms`,
                    "--step": `${i * 18}px`,
                  } as React.CSSProperties
                }
              >
                <div className="flex items-center justify-between">
                  <span className="text-[10.5px] font-bold uppercase tracking-[0.14em] text-indigo">
                    Stage {String(i + 1).padStart(2, "0")}
                  </span>
                  <span aria-hidden className="flex gap-1">
                    {[0, 1, 2, 3].map((b) => (
                      <span key={b} className={`size-1.5 rounded-full ${b <= i ? "bg-indigo" : "bg-indigo/15"}`} />
                    ))}
                  </span>
                </div>

                {/* the real user query, in a dark query bar */}
                <div className="mt-4 flex items-center gap-2.5 rounded-xl bg-ink-solid px-3 py-2.5 transition-shadow duration-300 group-hover:shadow-[0_0_0_3px_rgba(99,91,255,0.25)]">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="var(--color-citron)" strokeWidth="2" strokeLinecap="round" aria-hidden className="shrink-0">
                    <circle cx="11" cy="11" r="6.5" />
                    <path d="M15.8 15.8 20 20" />
                  </svg>
                  <span className="min-w-0 flex-1 truncate text-[12px] font-medium text-white/90">{s.query}</span>
                  <span aria-hidden className="animate-pulse h-3 w-px shrink-0 bg-white/60" />
                </div>

                <h3 className="mt-4 font-heading text-[15.5px] font-bold leading-snug tracking-[-0.01em] transition-colors duration-300 group-hover:text-indigo">
                  {s.name}
                </h3>
                <p className="mt-2 text-[13px] leading-relaxed text-graphite">{s.desc}</p>
              </article>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---- Why Crypto SEO Is Different: 2x2 text-led cards, static by
   instruction. The copy carries the section. ---- */
export function CryptoDifferent() {
  return (
    <section className="overflow-x-clip py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <h2 className="max-w-2xl font-heading text-[clamp(1.9rem,3.6vw,2.6rem)] font-bold leading-[1.12] tracking-[-0.02em]">
            Why Crypto SEO Is <span className="text-indigo">Different</span>
          </h2>
        </Reveal>

        {/* Crypto uses a wide 2x2 of dark-accent panels: each card carries a
            large ghost keyword in the corner rather than a number chip. */}
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {CRYPTO_DIFFERENT.map((c, i) => (
            <article
              key={c.title}
              className="group relative flex h-full flex-col overflow-hidden rounded-3xl bg-surface p-8 shadow-[0_10px_30px_rgba(11,13,18,0.05)] transition-all duration-300 ease-soft hover:-translate-y-1.5 hover:scale-[1.015] hover:shadow-[0_24px_56px_rgba(99,91,255,0.14)]"
            >
              <span
                aria-hidden
                className="pointer-events-none absolute right-7 top-6 font-heading text-[42px] font-extrabold leading-none tracking-[-0.03em] text-indigo/[0.12] transition-colors duration-300 group-hover:text-indigo/25"
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="relative max-w-[75%] font-heading text-[17px] font-bold tracking-[-0.01em] transition-colors duration-300 group-hover:text-indigo">
                {c.title}
              </h3>
              <p className="relative mt-3 text-[13.5px] leading-relaxed text-graphite">{c.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
