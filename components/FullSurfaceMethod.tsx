"use client";

import { useRef } from "react";
import { gsap, useGSAP, ScrollTrigger, EASE, MOTION_OK } from "@/components/motion/gsap";
import { MaskedHeading, Reveal } from "@/components/motion/primitives";
import { Eyebrow } from "@/components/ui";
import { METHOD_STEPS } from "@/lib/content";

/* This section's story: order. The copy says the method works "in a set
   order," so the intro pins in place while a teal line, scrubbed directly by
   the scroll position, draws down the rail and assembles each step as it
   arrives: node, index, name, body. */
export default function FullSurfaceMethod() {
  const ref = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add(`${MOTION_OK} and (min-width: 900px)`, () => {
        const left = ref.current!.querySelector<HTMLElement>("[data-method-left]");
        const rail = ref.current!.querySelector<HTMLElement>("[data-method-rail]");
        if (!left || !rail) return;
        ScrollTrigger.create({
          trigger: rail,
          start: "top 120px",
          end: () => `+=${Math.max(0, rail.offsetHeight - left.offsetHeight)}`,
          pin: left,
          pinSpacing: false,
        });
      });

      mm.add(MOTION_OK, () => {
        gsap.fromTo(
          "[data-method-progress]",
          { scaleY: 0 },
          {
            scaleY: 1,
            transformOrigin: "top center",
            ease: "none",
            scrollTrigger: {
              trigger: "[data-method-rail]",
              start: "top 75%",
              end: "bottom 55%",
              scrub: 0.6,
            },
          }
        );

        gsap.utils.toArray<HTMLElement>("[data-method-step]").forEach((step) => {
          const tl = gsap.timeline({
            scrollTrigger: { trigger: step, start: "top 75%", once: true },
            defaults: { ease: EASE },
          });
          tl.from(step.querySelector("[data-step-node]"), {
            scale: 0,
            duration: 0.5,
            ease: "back.out(2.5)",
          })
            .from(step.querySelector("[data-step-idx]"), { autoAlpha: 0, duration: 0.5 }, 0.1)
            .from(step.querySelector("[data-step-name]"), { yPercent: 112, duration: 0.8 }, 0.15)
            .from(
              step.querySelector("[data-step-body]"),
              { autoAlpha: 0, y: 14, duration: 0.7 },
              0.25
            );
        });
      });
    },
    { scope: ref }
  );

  return (
    <section ref={ref} className="mx-auto max-w-6xl px-6 py-28 md:py-40">
      <div className="grid gap-16 md:grid-cols-[5fr_7fr] md:gap-24 md:items-start">
        <div data-method-left>
          <Reveal>
            <Eyebrow>Our Methodology</Eyebrow>
          </Reveal>
          <MaskedHeading
            className="mt-8 font-display text-4xl font-medium leading-[1.05] tracking-[-0.01em] md:text-5xl"
            lines={["The Full-Surface", "Method"]}
          />
          <Reveal delay={0.25}>
            <p className="mt-8 leading-relaxed text-ink/70">
              Most SEO focuses entirely on traditional web rankings. Our
              approach treats every platform your buyers use as one connected
              system, working through them in a set order.
            </p>
          </Reveal>
          <Reveal delay={0.35}>
            <div className="mt-10 border-l-2 border-copper pl-5">
              <p className="font-display text-lg italic leading-snug text-ink/85">
                No long-term lock-in contracts. We keep our clients by
                delivering results, not through legal commitments.
              </p>
            </div>
          </Reveal>
        </div>

        <ol data-method-rail className="relative">
          <span aria-hidden className="absolute bottom-0 left-0 top-0 w-px bg-line" />
          <span
            data-method-progress
            aria-hidden
            className="absolute bottom-0 left-0 top-0 w-px bg-teal"
            style={{ transform: "scaleY(0)" }}
          />
          {METHOD_STEPS.map((step, i) => (
            <li
              key={step.name}
              data-method-step
              className={`relative pl-10 md:pl-14 ${
                i === METHOD_STEPS.length - 1 ? "" : "pb-16 md:pb-20"
              }`}
            >
              <span
                data-step-node
                aria-hidden
                className="absolute -left-[5px] top-2 h-[11px] w-[11px] rounded-full border-2 border-teal bg-paper"
              />
              <p data-step-idx className="font-mono text-xs tracking-[0.25em] text-copper">
                {step.index}
              </p>
              <span className="mt-3 block overflow-hidden">
                <span
                  data-step-name
                  className="block font-display text-3xl font-medium tracking-tight md:text-4xl"
                >
                  {step.name}
                </span>
              </span>
              <p data-step-body className="mt-4 max-w-lg leading-relaxed text-ink/70">
                {step.body}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
