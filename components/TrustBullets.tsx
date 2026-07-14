"use client";

import { useRef } from "react";
import { gsap, useGSAP, EASE, MOTION_OK } from "@/components/motion/gsap";
import { CtaLink, Eyebrow } from "@/components/ui";
import { TRUST_BULLETS } from "@/lib/content";

/* The dark act: the section pins while an intro heading, a hairline divider,
   and the three trust statements ride through horizontally. Cards are pulled
   up from below as the scrub carries them in. The act ends with a handoff:
   a full-screen paper panel carrying the "Why It Matters" opening slides in
   from the right, its ink curtain bars retracting as it arrives; once it
   owns the screen the pin releases and normal vertical scrolling continues
   into the rest of that section. */
export default function TrustBullets() {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add(`${MOTION_OK} and (min-width: 768px)`, () => {
        const track = trackRef.current!;
        const dist = () => track.scrollWidth - window.innerWidth;
        const setProgress = gsap.quickSetter("[data-trust-progress]", "scaleX");

        const scrollTween = gsap.to(track, {
          x: () => -dist(),
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: () => `+=${dist()}`,
            scrub: 0.8,
            pin: true,
            anticipatePin: 1,
            invalidateOnRefresh: true,
            onUpdate: (self) => setProgress(self.progress),
          },
        });

        /* intro and divider set the stage as the section arrives, and pack
           away again when the reader scrolls back out */
        gsap.from("[data-trust-intro]", {
          autoAlpha: 0,
          y: 60,
          duration: 1.1,
          ease: EASE,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
            toggleActions: "play none none reverse",
          },
        });
        gsap.from("[data-trust-divider]", {
          scaleY: 0,
          transformOrigin: "top center",
          duration: 1.3,
          ease: EASE,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
            toggleActions: "play none none reverse",
          },
        });

        /* cards climb from below the viewport edge, scrubbed by the scroll
           itself: the lift spans the card's whole journey from the right
           edge to mid-screen, so it rises exactly as slowly as the reader
           scrolls, and sinks back down in reverse on the way up */
        gsap.utils.toArray<HTMLElement>("[data-trust-card]").forEach((card) => {
          gsap.from(card, {
            y: () => window.innerHeight * 0.75,
            ease: "none",
            scrollTrigger: {
              trigger: card,
              containerAnimation: scrollTween,
              start: "left 100%",
              end: "left 40%",
              scrub: 1,
            },
          });
          gsap.from(card, {
            autoAlpha: 0,
            ease: "none",
            scrollTrigger: {
              trigger: card,
              containerAnimation: scrollTween,
              start: "left 100%",
              end: "left 75%",
              scrub: 1,
            },
          });
        });

        /* the handoff: as the paper panel slides in from the right, its ink
           curtain bars retract alternately left and right, scrubbed by the
           same horizontal motion, finishing as the panel owns the screen */
        gsap.to("[data-why-curtain] span", {
          clipPath: (i: number) =>
            i % 2 ? "inset(0% 0% 0% 100%)" : "inset(0% 100% 0% 0%)",
          ease: "none",
          stagger: 0.12,
          scrollTrigger: {
            trigger: "[data-why-panel]",
            containerAnimation: scrollTween,
            start: "left 95%",
            end: "left 0%",
            scrub: true,
          },
        });
        gsap.from("[data-why-heading]", {
          autoAlpha: 0,
          y: 40,
          duration: 1.2,
          ease: EASE,
          scrollTrigger: {
            trigger: "[data-why-panel]",
            containerAnimation: scrollTween,
            start: "left 35%",
            toggleActions: "play none none reverse",
          },
        });
      });

      mm.add(`${MOTION_OK} and (max-width: 767px)`, () => {
        gsap.from("[data-trust-intro], [data-trust-card], [data-why-panel]", {
          autoAlpha: 0,
          y: 60,
          duration: 1.6,
          ease: EASE,
          stagger: 0.2,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        });
      });

      /* reduced motion: no pin, so fold the track into a plain vertical list */
      mm.add("(prefers-reduced-motion: reduce)", () => {
        gsap.set(trackRef.current, { flexWrap: "wrap", width: "100%", x: 0, height: "auto" });
        gsap.set("[data-trust-card], [data-trust-intro], [data-why-panel]", {
          width: "100%",
          height: "auto",
        });
        gsap.set("[data-trust-divider], [data-why-curtain]", { display: "none" });
      });
    },
    { scope: sectionRef }
  );

  return (
    <section ref={sectionRef} className="relative overflow-hidden bg-ink text-paper">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(50rem 35rem at 85% 100%, rgba(14,90,90,0.3), transparent 65%)",
        }}
      />
      <div className="relative py-20 md:h-svh md:py-0">
        <div
          ref={trackRef}
          className="flex flex-col gap-10 px-6 md:h-full md:w-max md:flex-row md:flex-nowrap md:items-center md:gap-10 md:px-0 md:pl-[max(1.5rem,calc((100vw-72rem)/2+1.5rem))]"
        >
          <div
            data-trust-intro
            className="flex flex-col justify-center md:w-[32vw] md:max-w-[34rem] md:shrink-0"
          >
            <h2 className="font-display text-4xl font-medium leading-[1.05] tracking-[-0.01em] md:text-6xl">
              What we&apos;re built on
            </h2>
            <div className="mt-8">
              <CtaLink href="/about" variant="ghost" tone="dark">
                How we work
              </CtaLink>
            </div>
          </div>

          <span
            data-trust-divider
            aria-hidden
            className="hidden w-px self-stretch bg-paper/15 md:block md:shrink-0"
          />

          {TRUST_BULLETS.map((bullet) => (
            <article
              key={bullet.title}
              data-trust-card
              className="flex min-h-[18rem] flex-col justify-center border border-paper/25 p-8 md:min-h-[min(34vw,50svh)] md:w-[44vw] md:max-w-[44rem] md:shrink-0 md:p-12"
            >
              <h3 className="max-w-xl font-display text-2xl font-medium leading-tight tracking-tight md:text-4xl">
                {bullet.title}
              </h3>
              <p className="mt-6 max-w-lg leading-relaxed text-paper/75">
                {bullet.body}
              </p>
            </article>
          ))}

          {/* the incoming section, arriving as the final horizontal panel */}
          <div
            data-why-panel
            className="relative -mx-6 flex flex-col justify-center overflow-hidden bg-paper px-6 py-16 text-ink md:mx-0 md:h-full md:w-screen md:shrink-0 md:px-[max(1.5rem,calc((100vw-72rem)/2+1.5rem))] md:py-0"
          >
            <span
              aria-hidden
              className="pointer-events-none absolute inset-0"
              style={{
                background:
                  "radial-gradient(50rem 35rem at 15% 0%, rgba(14,90,90,0.08), transparent 65%)",
              }}
            />
            <div data-why-heading className="relative">
              <Eyebrow>Why It Matters</Eyebrow>
              <h2 className="mt-8 max-w-3xl font-display text-4xl font-medium leading-[1.08] tracking-[-0.01em] md:text-6xl">
                Search has changed.
                <br />
                Most SEO <em className="text-copper">hasn&apos;t</em>.
              </h2>
            </div>
            <div
              data-why-curtain
              aria-hidden
              className="pointer-events-none absolute inset-0 z-20 hidden md:flex md:flex-col"
            >
              {Array.from({ length: 6 }).map((_, i) => (
                <span
                  key={i}
                  className="w-full flex-1 bg-ink"
                  style={{ clipPath: "inset(0% 0% 0% 0%)" }}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="pointer-events-none absolute inset-x-0 bottom-8 z-30 mx-auto hidden w-full max-w-6xl px-6 md:block">
          <div className="h-px w-full bg-paper/15">
            <span
              data-trust-progress
              className="block h-px w-full origin-left scale-x-0 bg-sage"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
