"use client";

import { useEffect, useRef, useState } from "react";
import Reveal from "@/components/motion/Reveal";
import { CtaLink } from "@/components/ui";
import { AI_PROCESS, AI_DELIVERABLES, AI_METRICS, ROUTES } from "@/lib/ai-search-content";

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

/* How We Measure AI Visibility: summary paragraph + six-metric preview strip
   + links to the GEO and AEO measurement frameworks. */
export function AiSearchMeasure() {
  return (
    <section className="overflow-x-clip py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <div className="max-w-3xl">
            <h2 className="font-heading text-[clamp(1.9rem,3.6vw,2.6rem)] font-bold leading-[1.12] tracking-[-0.02em]">
              How We Measure AI Visibility
            </h2>
            <p className="mt-6 text-[15px] leading-relaxed text-graphite">
              AI visibility does not behave like a fixed keyword ranking. Results can differ by platform, prompt wording, location and repeated testing. Search Nexio uses structured prompt groups and platform-level reporting to track directional performance across six core metrics.
            </p>
          </div>
        </Reveal>

        <Reveal delay={80}>
          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {AI_METRICS.map((m) => (
              <div key={m} className="flex items-center gap-2.5 rounded-xl border border-line bg-surface px-4 py-3">
                <span className="size-1.5 rounded-full bg-indigo" />
                <span className="text-[13.5px] font-semibold text-ink">{m}</span>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={120}>
          <p className="mt-8 max-w-3xl text-[14px] leading-relaxed text-graphite">
            Full metric definitions and measurement methodology are documented on each service page. The{" "}
            <a href={ROUTES.geo} className="font-semibold text-indigo underline decoration-indigo/30 underline-offset-2">GEO measurement framework</a>{" "}
            covers generative platform monitoring. The{" "}
            <a href={ROUTES.aeo} className="font-semibold text-indigo underline decoration-indigo/30 underline-offset-2">AEO measurement framework</a>{" "}
            covers direct-answer retrieval tracking.
          </p>
          <p className="mt-4 max-w-3xl rounded-2xl border border-dashed border-graphite/30 bg-surface/50 px-5 py-4 text-[13px] leading-relaxed text-graphite">
            <span className="font-semibold text-ink">Measurement note.</span> Reports document the prompt sample, platform mix, testing frequency and attribution limits. A single AI response is never presented as a permanent result.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
