"use client";

import { useEffect, useRef, useState } from "react";
import Reveal from "@/components/motion/Reveal";
import { CtaLink } from "@/components/ui";
import { AI_PROCESS, AI_DELIVERABLES, ROUTES } from "@/lib/ai-search-content";

/* Our AI Search Process: four-step scroll-activated timeline (reused pattern)
   + the dark CTA banner, plus What You Receive and How We Measure. */

export function AiSearchProcess() {
  const [active, setActive] = useState(0);
  const stepRefs = useRef<(HTMLLIElement | null)[]>([]);

  useEffect(() => {
    const observers = stepRefs.current.map((el, i) => {
      if (!el) return null;
      const io = new IntersectionObserver(
        (entries) => { if (entries[0].isIntersecting) setActive(i); },
        { rootMargin: "-40% 0px -50% 0px" }
      );
      io.observe(el);
      return io;
    });
    return () => observers.forEach((io) => io?.disconnect());
  }, []);

  return (
    <section id="ai-process" className="scroll-mt-24 overflow-x-clip py-16 md:py-24">
      <div className="mx-auto max-w-4xl px-6">
        <Reveal>
          <h2 className="text-center font-heading text-[clamp(1.9rem,3.6vw,2.6rem)] font-bold leading-[1.12] tracking-[-0.02em]">
            Our AI Search Process
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-center text-[15px] leading-relaxed text-graphite">
            Every Search Nexio AI search engagement follows a four-phase sequence. Strategy is set before implementation begins, and measurement starts before any changes are made.
          </p>
        </Reveal>

        <ol className="relative mt-12">
          <span aria-hidden className="absolute bottom-6 left-[21px] top-6 w-px bg-line" />
          <span aria-hidden className="absolute left-[21px] top-6 w-px bg-gradient-to-b from-indigo to-indigo/70 transition-all duration-700 ease-soft" style={{ height: `calc((100% - 48px) * ${active / (AI_PROCESS.length - 1)})` }} />
          {AI_PROCESS.map((step, i) => {
            const state = i < active ? "done" : i === active ? "active" : "next";
            return (
              <li key={step.name} ref={(el) => { stepRefs.current[i] = el; }} className={`relative flex gap-5 ${i < AI_PROCESS.length - 1 ? "pb-12" : ""}`}>
                <span className={`relative z-10 grid size-11 shrink-0 place-items-center rounded-2xl font-heading text-[14px] font-bold tabular-nums transition-all duration-500 ease-soft ${
                  state === "active" ? "bg-indigo text-white shadow-[0_0_0_5px_var(--c-lilac)]" : state === "done" ? "bg-indigo text-white" : "border border-line bg-surface text-graphite"
                }`}>
                  {state === "done" ? <svg width="14" height="14" viewBox="0 0 12 12" fill="none" aria-hidden><path d="m2.5 6.5 2.5 2.5 4.5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg> : step.index}
                </span>
                <div className={`pt-1.5 transition-opacity duration-500 ${state === "next" ? "opacity-45" : "opacity-100"}`}>
                  <h3 className={`font-heading text-[20px] font-bold tracking-[-0.01em] transition-colors duration-500 ${state === "active" ? "text-indigo" : "text-ink"}`}>{step.name}</h3>
                  <p className="mt-2 max-w-xl text-[14px] leading-relaxed text-graphite">{step.body}</p>
                </div>
              </li>
            );
          })}
        </ol>
      </div>

      {/* dark CTA banner */}
      <Reveal delay={80}>
        <div className="mx-auto mt-16 max-w-6xl px-6">
          <div className="cta-indigo relative overflow-hidden rounded-[2rem] px-8 py-12 text-center md:px-12">
            <div className="relative">
              <h3 className="mx-auto max-w-2xl font-heading text-[clamp(1.5rem,2.8vw,2rem)] font-bold leading-[1.14] tracking-[-0.02em] text-white">
                See where your brand stands across priority AI platforms.
              </h3>
              <p className="mx-auto mt-4 max-w-xl text-[15px] leading-relaxed text-white/70">
                Benchmark visibility, identify competitor advantages and understand what should be addressed first.
              </p>
              <div className="mt-8 flex justify-center">
                <CtaLink href={ROUTES.audit}>Request an AI Visibility Review</CtaLink>
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

/* What You Receive: 11-item documented-scope grid. */
export function AiSearchReceive() {
  return (
    <section className="overflow-x-clip wash-lilac-full py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <h2 className="max-w-2xl font-heading text-[clamp(1.9rem,3.6vw,2.6rem)] font-bold leading-[1.12] tracking-[-0.02em]">
            What You Receive
          </h2>
          <p className="mt-6 max-w-2xl text-[15px] leading-relaxed text-graphite">
            Every engagement is built around clear outputs rather than broad activity descriptions.
          </p>
        </Reveal>
        <Reveal delay={80}>
          <div className="mt-10 grid overflow-hidden rounded-3xl border border-line bg-surface sm:grid-cols-2 lg:grid-cols-3">
            {AI_DELIVERABLES.map((d, i) => (
              <div key={d} className="flex items-center gap-3 border-b border-line px-5 py-4 last:border-b-0 sm:[&:nth-last-child(-n+1)]:border-b-0 lg:border-r">
                <span className="font-heading text-[13px] font-bold tabular-nums text-indigo/60">{String(i + 1).padStart(2, "0")}</span>
                <span className="text-[14px] font-semibold text-ink">{d}</span>
              </div>
            ))}
          </div>
          <p className="mt-6 text-[13.5px] leading-relaxed text-graphite">
            Each deliverable is documented before work begins so scope is confirmed before budget is committed.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

/* How We Measure AI Visibility: eyebrow + big heading, a six-column metric
   strip divided by hairlines (icon, title, indigo dash, one-liner), the
   framework links and the measurement note panel. */

const MEASURE_METRICS = [
  {
    title: "Brand mention rate",
    desc: "How often your brand is mentioned across AI responses.",
    icon: (
      <g>
        <path d="M3.5 10.5v3a1.5 1.5 0 0 0 1.5 1.5h2l7.5 4.5V6L7 10.5H5a1.5 1.5 0 0 0-1.5 0Z" />
        <path d="M7 15v4.5" />
        <path d="M17.5 9.5c.7.6 1 1.5 1 2.5s-.3 1.9-1 2.5M19.5 7c1.3 1.3 2 3 2 5s-.7 3.7-2 5" />
      </g>
    ),
  },
  {
    title: "Citation rate",
    desc: "How often AI responses include a citation or source link.",
    icon: (
      <g>
        <circle cx="12" cy="11" r="7.5" />
        <path d="M12 18.5c-1.5 1.4-3.4 2-5.5 2 .8-1 1.3-2.1 1.4-3.2" />
        <path d="M9.2 9.2c0-.9.7-1.7 1.6-1.7M13.6 9.2c0-.9.7-1.7 1.6-1.7" />
        <path d="M9.2 9.2v1.6M13.6 9.2v1.6" />
      </g>
    ),
  },
  {
    title: "Recommendation frequency",
    desc: "How often your brand is recommended by AI.",
    icon: (
      <g>
        <path d="m12 3.6 2.5 5.1 5.6.8-4 4 .9 5.6-5-2.7-5 2.7.9-5.6-4-4 5.6-.8Z" />
      </g>
    ),
  },
  {
    title: "AI share of voice",
    desc: "Your visibility compared to competitors in AI answers.",
    icon: (
      <g>
        <path d="M12 5.5v13M8.5 8.5v7M5 10.5v3M15.5 8.5v7M19 10.5v3" />
      </g>
    ),
  },
  {
    title: "Brand accuracy",
    desc: "How accurately AI represents your brand and offerings.",
    icon: (
      <g>
        <circle cx="12" cy="12" r="7" />
        <circle cx="12" cy="12" r="2.6" />
        <path d="M12 2.5V5M12 19v2.5M21.5 12H19M5 12H2.5" />
      </g>
    ),
  },
  {
    title: "AI-referred demand",
    desc: "The volume of visits or actions driven by AI referrals.",
    icon: (
      <g>
        <path d="M4 17.5 10 11l3.5 3.5L20 8" />
        <path d="M15 7.5h5V12.5" />
      </g>
    ),
  },
];

export function AiSearchMeasure() {
  return (
    <section className="relative overflow-hidden py-16 md:py-24">
      {/* faint arc decor, top right */}
      <div aria-hidden className="pointer-events-none absolute -right-40 -top-40 hidden lg:block">
        <div className="size-[480px] rounded-full border border-indigo/[0.06]" />
        <div className="absolute inset-10 rounded-full border border-indigo/[0.07]" />
        <div className="absolute inset-20 rounded-full border border-indigo/[0.08]" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6">
        <Reveal>
          <p className="flex items-center gap-3 text-[13px] font-bold uppercase tracking-[0.1em] text-indigo">
            Why it matters
            <span aria-hidden className="flex items-center">
              <span className="size-1.5 rounded-full bg-indigo" />
              <span className="ml-0.5 h-px w-14 bg-indigo/60" />
            </span>
          </p>
          <h2 className="mt-4 font-heading text-[clamp(2.2rem,4.5vw,3.4rem)] font-bold leading-[1.06] tracking-[-0.03em]">
            How We Measure AI Visibility
          </h2>
          <p className="mt-6 max-w-3xl text-[16px] leading-relaxed text-graphite">
            AI visibility does not behave like a fixed keyword ranking. Results can differ by platform, prompt wording, location and repeated testing. Search Nexio uses structured prompt groups and platform-level reporting to track directional performance across six core metrics.
          </p>
        </Reveal>

        {/* six-column metric strip with hairline dividers */}
        <div className="mt-12 grid gap-y-10 border-line sm:grid-cols-2 lg:grid-cols-6">
          {MEASURE_METRICS.map((m, i) => (
            <Reveal
              key={m.title}
              variant="up"
              delay={Math.min(i * 60, 300)}
              className={`lg:px-6 ${i > 0 ? "lg:border-l lg:border-line" : "lg:pl-0"} ${i % 2 === 1 ? "sm:max-lg:border-l sm:max-lg:border-line sm:max-lg:pl-6" : ""}`}
            >
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="var(--color-indigo)" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                {m.icon}
              </svg>
              <h3 className="mt-6 font-heading text-[16.5px] font-bold leading-snug tracking-[-0.01em]">{m.title}</h3>
              <span className="mt-3 block h-0.5 w-7 rounded-full bg-indigo" />
              <p className="mt-3 text-[13px] leading-relaxed text-graphite">{m.desc}</p>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120}>
          <div className="mt-12 border-t border-line pt-8">
            <p className="max-w-4xl text-[14.5px] leading-relaxed text-graphite">
              Full metric definitions and measurement methodology are documented on each service page.
              <br className="hidden md:block" /> The{" "}
              <a href={ROUTES.geo} className="font-semibold text-indigo underline decoration-indigo/30 underline-offset-2">GEO measurement framework</a>{" "}
              covers generative platform monitoring. The{" "}
              <a href={ROUTES.aeo} className="font-semibold text-indigo underline decoration-indigo/30 underline-offset-2">AEO measurement framework</a>{" "}
              covers direct-answer retrieval tracking.
            </p>
          </div>

          {/* measurement note panel */}
          <div className="mt-8 flex items-center gap-5 rounded-2xl bg-lilac/40 px-6 py-5">
            <span aria-hidden className="grid size-12 shrink-0 place-items-center rounded-full bg-lilac text-indigo">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <rect x="5" y="3.5" width="14" height="17" rx="2.5" />
                <path d="M8.5 8h7M8.5 12h7M8.5 16h4.5" />
              </svg>
            </span>
            <span aria-hidden className="hidden h-10 w-px bg-indigo/15 sm:block" />
            <p className="text-[13.5px] leading-relaxed text-graphite">
              <span className="font-semibold text-ink">Measurement note.</span> Reports document the prompt sample, platform mix, testing frequency and attribution limits. A single AI response is never presented as a permanent result.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
