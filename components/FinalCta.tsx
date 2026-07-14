"use client";

import { useRef } from "react";
import { gsap, useGSAP, EASE, MOTION_OK } from "@/components/motion/gsap";
import { BlindsReveal, Reveal } from "@/components/motion/primitives";
import { Magnetic } from "@/components/motion/interactive";
import { CtaLink } from "@/components/ui";

/* The hero's scan moment replayed in negative: "invisible" starts as a ghost
   outline on ink and is clip-revealed to solid paper once the section lands.
   A ghost "found" watermark drifts behind: the answer under the question. */
export default function FinalCta() {
  const ref = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add(MOTION_OK, () => {
        const tl = gsap.timeline({
          scrollTrigger: { trigger: "[data-cta-h2]", start: "top 75%", once: true },
          defaults: { ease: EASE },
        });
        tl.from("[data-cta-h2]", { autoAlpha: 0, y: 30, duration: 0.9 }).fromTo(
          "[data-invisible-solid]",
          { clipPath: "inset(-15% 100% -15% 0)" },
          { clipPath: "inset(-15% 0% -15% 0)", duration: 1.2 },
          0.5
        );
      });
    },
    { scope: ref }
  );

  return (
    <BlindsReveal cover="paper">
      <section
        ref={ref}
        id="visibility-review"
        className="relative overflow-hidden bg-ink text-paper"
      >
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(55rem 40rem at 85% 0%, rgba(14,90,90,0.35), transparent 65%)",
          }}
        />
        <span
          aria-hidden
          data-speed="0.92"
          className="pointer-events-none absolute -left-6 bottom-10 select-none font-display text-[15vw] italic leading-none text-transparent"
          style={{ WebkitTextStroke: "1px rgba(250,247,242,0.07)" }}
        >
          found
        </span>
        <div aria-hidden className="pointer-events-none absolute -right-64 -top-40 h-[40rem] w-[40rem]">
          {[0, 4.5].map((delay) => (
            <span
              key={delay}
              className="motion-ambient absolute inset-0 animate-radar-ring rounded-full border border-paper/50"
              style={{ animationDelay: `${delay}s`, opacity: 0 }}
            />
          ))}
          <span
            className="motion-ambient absolute inset-0 animate-radar-sweep rounded-full"
            style={{
              background:
                "conic-gradient(from 0deg, transparent 0deg, transparent 318deg, rgba(250,247,242,0.06) 352deg, transparent 360deg)",
              maskImage: "radial-gradient(circle, black 0%, transparent 72%)",
              WebkitMaskImage: "radial-gradient(circle, black 0%, transparent 72%)",
            }}
          />
        </div>

        <div className="relative mx-auto max-w-6xl px-6 py-28 md:py-40">
          <h2
            data-cta-h2
            className="max-w-4xl font-display text-4xl font-medium leading-[1.08] tracking-[-0.01em] md:text-6xl"
          >
            Find out where you are{" "}
            <span className="relative inline-block italic">
              <span className="sr-only">invisible</span>
              <span
                aria-hidden
                className="text-transparent"
                style={{ WebkitTextStroke: "1px rgba(250,247,242,0.4)" }}
              >
                invisible
              </span>
              <span data-invisible-solid aria-hidden className="absolute inset-0 text-paper">
                invisible
              </span>
            </span>
          </h2>

          <Reveal delay={0.25}>
            <p className="mt-8 max-w-3xl leading-relaxed text-paper/70">
              This is a manual, analyst-led review conducted by our senior
              team, not a generic software report. It takes us a few business
              days to compile. You get a surface-by-surface map showing exactly
              where you appear across Google, Maps, and AI search, where your
              direct competitors are winning instead, where your current
              footprint is leaking revenue, and what we would fix first.
              Whether you choose to work with SearchNexio or fix the issues
              yourself, you will finally know exactly where your business
              stands.
            </p>
          </Reveal>

          <Reveal delay={0.4}>
            <div className="mt-12 flex flex-wrap items-center gap-x-10 gap-y-4">
              <Magnetic>
                <CtaLink href="/contact">Request a Visibility Review</CtaLink>
              </Magnetic>
              <CtaLink href="/contact" variant="ghost" tone="dark">
                Book a Call
              </CtaLink>
            </div>
          </Reveal>
        </div>
      </section>
    </BlindsReveal>
  );
}
