"use client";

import { useEffect, useRef, useState } from "react";
import Reveal from "@/components/motion/Reveal";
import { CtaLink } from "@/components/ui";
import { GEO_PROCESS } from "@/lib/geo-content";

/* Our GEO process: a four-step Benchmark, Prioritize, Build, Measure timeline
   that activates one step at a time during scroll. Followed by a full-width
   conversion banner ("Review your AI visibility"). */

export default function GeoProcess() {
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
    <section id="geo-process" className="scroll-mt-24 overflow-x-clip py-16 md:py-24">
      <div className="mx-auto max-w-4xl px-6">
        <Reveal>
          <h2 className="text-center font-heading text-[clamp(1.9rem,3.6vw,2.6rem)] font-bold leading-[1.12] tracking-[-0.02em]">
            Our GEO process
          </h2>
        </Reveal>

        <ol className="relative mt-12">
          {/* base + scroll-filled progress line */}
          <span aria-hidden className="absolute bottom-6 left-[21px] top-6 w-px bg-line" />
          <span
            aria-hidden
            className="absolute left-[21px] top-6 w-px bg-gradient-to-b from-indigo to-indigo/70 transition-all duration-700 ease-soft"
            style={{ height: `calc((100% - 48px) * ${active / (GEO_PROCESS.length - 1)})` }}
          />
          {GEO_PROCESS.map((step, i) => {
            const state = i < active ? "done" : i === active ? "active" : "next";
            return (
              <li
                key={step.name}
                ref={(el) => { stepRefs.current[i] = el; }}
                className={`relative flex gap-5 ${i < GEO_PROCESS.length - 1 ? "pb-12" : ""}`}
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
                    <svg width="14" height="14" viewBox="0 0 12 12" fill="none" aria-hidden><path d="m2.5 6.5 2.5 2.5 4.5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  ) : step.index}
                </span>
                <div className={`pt-1.5 transition-opacity duration-500 ${state === "next" ? "opacity-45" : "opacity-100"}`}>
                  <h3 className={`font-heading text-[20px] font-bold tracking-[-0.01em] transition-colors duration-500 ${state === "active" ? "text-indigo" : "text-ink"}`}>
                    {step.name}
                  </h3>
                  <p className="mt-2 max-w-xl text-[14px] leading-relaxed text-graphite">
                    {step.body}
                  </p>
                </div>
              </li>
            );
          })}
        </ol>
      </div>

      {/* conversion banner */}
      <Reveal delay={80}>
        <div className="mx-auto mt-16 max-w-6xl px-6">
          <div className="cta-indigo relative overflow-hidden rounded-[2rem] px-8 py-12 text-center md:px-12">
            <div className="relative">
              <h3 className="font-heading text-[clamp(1.6rem,3vw,2.2rem)] font-bold leading-[1.12] tracking-[-0.02em] text-white">
                Review your AI visibility
              </h3>
              <p className="mx-auto mt-4 max-w-xl text-[15px] leading-relaxed text-white/70">
                See where your brand appears, where competitors lead and which sources influence generative recommendations in your category.
              </p>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                <CtaLink href="#visibility-audit">Request an AI Visibility Audit</CtaLink>
                <CtaLink href="#geo-process" variant="glass">See Our GEO Process</CtaLink>
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
