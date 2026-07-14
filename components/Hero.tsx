"use client";

import { useRef } from "react";
import { gsap, useGSAP, SplitText, EASE, EASE_INOUT, MOTION_OK } from "@/components/motion/gsap";
import { Magnetic } from "@/components/motion/interactive";
import { CtaLink } from "@/components/ui";
import { SURFACES } from "@/lib/content";

/* The hero tells the whole story in one pass: an invisible business ("Found"
   as a ghost outline) is scanned, found, and reported visible on every
   surface. One master timeline; the radar breathes underneath. */
export default function Hero() {
  const ref = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add(MOTION_OK, () => {
        /* the hero ships CSS-hidden so nothing paints before this runs; flip
           it visible here and let the from() tweens re-hide instantly in the
           same tick, so the first painted frame is the radar dot alone */
        gsap.set("[data-hero-hidden]", { autoAlpha: 1 });

        /* act one, alone on stage: the radar blooms from a dot at the hero's
           center and travels to its resting spot; no text is visible yet */
        const inner = ref.current!.querySelector<HTMLElement>("[data-radar-inner]");
        const bloom = Boolean(inner && inner.offsetParent);
        if (bloom) {
          const heroRect = ref.current!.getBoundingClientRect();
          const innerRect = inner!.getBoundingClientRect();
          const dx = heroRect.left + heroRect.width / 2 - (innerRect.left + innerRect.width / 2);
          const dy = heroRect.top + heroRect.height / 2 - (innerRect.top + innerRect.height / 2);
          const seed = inner!.querySelector("[data-radar-seed]");
          const rtl = gsap.timeline({ defaults: { ease: "power3.inOut" } });
          rtl
            .set(inner, { autoAlpha: 0, x: dx, y: dy, scale: 0.06, transformOrigin: "50% 50%" })
            /* seed counter-scales so the center reads as a real dot while tiny */
            .set(seed, { scale: 26, transformOrigin: "50% 50%" })
            .to(inner, { autoAlpha: 1, duration: 0.5, ease: "power2.out" }, 0.2)
            .to(inner, { x: 0, y: 0, scale: 1, duration: 1.7 }, 0.8)
            .to(seed, { scale: 1, duration: 1.7 }, 0.8);
        }

        /* act two: text enters only once the radar has reached its side
           position (immediately on screens where the radar is hidden) */
        const T = bloom ? 2.3 : 0.2;
        const eyebrow = new SplitText("[data-hero-eyebrow]", { type: "chars" });
        const tl = gsap.timeline({ defaults: { ease: EASE } });

        tl.from("[data-hero-eyebrow]", { autoAlpha: 0, duration: 0.01 }, T)
          .from(eyebrow.chars, { opacity: 0, duration: 0.01, stagger: 0.022 }, T)
          .from("[data-hero-line]", { yPercent: 112, duration: 1, stagger: 0.14 }, T + 0.35)
          .from("[data-hero-sub]", { autoAlpha: 0, y: 20, duration: 0.9 }, T + 0.9)
          .from("[data-hero-ctas]", { autoAlpha: 0, y: 20, duration: 0.9 }, T + 1.1)
          .from("[data-hero-proof]", { autoAlpha: 0, duration: 0.9 }, T + 1.3)
          /* the scan: copper bar sweeps, solid word is revealed behind it */
          .fromTo(
            "[data-found-solid]",
            { clipPath: "inset(-15% 100% -15% 0)" },
            { clipPath: "inset(-15% 0% -15% 0)", duration: 1 },
            T + 1.3
          )
          .fromTo(
            "[data-found-bar]",
            { left: "0%", autoAlpha: 1 },
            { left: "100%", duration: 1, ease: EASE_INOUT, immediateRender: false },
            T + 1.3
          )
          .to("[data-found-bar]", { autoAlpha: 0, duration: 0.2 }, T + 2.2)
          /* surface readout resolves */
          .from("[data-scan-strip]", { autoAlpha: 0, duration: 0.8 }, T + 1.5)
          .fromTo(
            "[data-scan-shimmer]",
            { left: "-10%" },
            { left: "105%", duration: 1.5, ease: "power1.inOut" },
            T + 1.7
          )
          .from(
            "[data-scan-dot]",
            { scale: 0, duration: 0.5, ease: "back.out(2.5)", stagger: 0.15 },
            T + 1.9
          )
          .from("[data-scan-status]", { autoAlpha: 0, duration: 0.4, stagger: 0.15 }, T + 2.05);

        /* scroll mask on exit: the hero recedes and dims as the story moves on */
        gsap.to("[data-hero-body]", {
          yPercent: -6,
          autoAlpha: 0.25,
          ease: "none",
          scrollTrigger: {
            trigger: ref.current,
            start: "40% top",
            end: "bottom top",
            scrub: true,
          },
        });

        /* the detonation: scrolling shatters the hook into letters that fly
           apart across the screen, scrubbed so scrolling back reassembles
           them. The line masks open only while the debris is in the air. */
        const hookSplit = new SplitText("[data-hero-line]", { type: "chars,words" });
        gsap.to(hookSplit.chars, {
          x: () => gsap.utils.random(-520, 520),
          y: () => gsap.utils.random(-260, 460),
          rotation: () => gsap.utils.random(-170, 170),
          autoAlpha: 0,
          ease: "power1.in",
          stagger: { each: 0.015, from: "random" },
          scrollTrigger: {
            trigger: ref.current,
            start: "top top",
            end: "+=70%",
            scrub: 1,
            onToggle: (self) => {
              gsap.set(ref.current!.querySelectorAll("[data-hero-mask]"), {
                overflow: self.isActive ? "visible" : "hidden",
              });
            },
          },
        });
      });

      /* reduced motion: no choreography, just show the finished hero */
      mm.add("(prefers-reduced-motion: reduce)", () => {
        gsap.set("[data-hero-hidden]", { autoAlpha: 1 });
      });
    },
    { scope: ref }
  );

  return (
    <header ref={ref} className="relative overflow-hidden">
      {/* without JS the choreography never runs; show the finished hero */}
      <noscript>
        <style>{`[data-hero-hidden]{opacity:1 !important;visibility:visible !important}`}</style>
      </noscript>
      <Globe />

      {/* the hero owns the first screen: content centers in the free space,
          the surface strip anchors to the bottom edge of the viewport */}
      <div data-hero-body className="relative z-10 flex min-h-svh flex-col">
        <div className="mx-auto flex w-full max-w-6xl flex-1 flex-col justify-center px-6 pb-10 pt-28">
          <p
            data-hero-eyebrow
            data-hero-hidden
            className="font-mono text-xs uppercase tracking-[0.35em] text-teal opacity-0"
          >
            Search Visibility Agency
            <span
              aria-hidden
              className="motion-ambient ml-2 inline-block h-3 w-[7px] translate-y-px animate-caret bg-copper"
            />
          </p>

          {/* serif and grotesque interleave: Bricolage carries the weight,
              Newsreader italic carries the voice words */}
          <h1
            data-hero-hidden
            className="mt-10 font-hook text-[clamp(2.9rem,8vw,6.9rem)] font-bold leading-[1.02] tracking-[-0.03em] opacity-0"
          >
            <span data-hero-mask className="block overflow-hidden pb-[0.09em] -mb-[0.09em]">
              <span data-hero-line className="block">
                Get <FoundWord />
              </span>
            </span>
            <span data-hero-mask className="block overflow-hidden pb-[0.09em] -mb-[0.09em]">
              <span data-hero-line className="block">
                Everywhere
              </span>
            </span>
            <span data-hero-mask className="block overflow-hidden pb-[0.09em]">
              <span data-hero-line className="block">
                Buyers{" "}
                <em className="font-display font-medium italic tracking-[-0.01em]">
                  Search
                </em>
              </span>
            </span>
          </h1>

          <p
            data-hero-sub
            data-hero-hidden
            className="mt-8 max-w-xl text-lg leading-relaxed text-ink/75 opacity-0"
          >
            Your buyers now decide on Google, Maps, AI Overviews, and ChatGPT
            before they ever click. We make sure you show up in every one of
            those moments, then turn that visibility into leads and revenue.
          </p>

          <div
            data-hero-ctas
            data-hero-hidden
            className="mt-10 flex flex-wrap items-center gap-x-10 gap-y-4 opacity-0"
          >
            <Magnetic>
              <CtaLink href="/#visibility-review">Request a Visibility Review</CtaLink>
            </Magnetic>
            <CtaLink href="/case-studies" variant="ghost">
              View Case Studies
            </CtaLink>
          </div>

          <p
            data-hero-proof
            data-hero-hidden
            className="mt-12 max-w-md text-sm leading-relaxed text-ink/55 opacity-0"
          >
            Built for healthcare, tax, SaaS, and multi-location businesses that
            need search visibility they can measure.
          </p>
        </div>

        <div
          data-scan-strip
          data-hero-hidden
          className="relative mx-auto max-w-6xl border-t border-line px-6 opacity-0"
        >
          <span
            data-scan-shimmer
            aria-hidden
            className="absolute -top-px h-px w-32 bg-gradient-to-r from-transparent via-copper to-transparent"
          />
          <ul className="grid grid-cols-2 md:grid-cols-4">
            {SURFACES.map((surface) => (
              <li
                key={surface}
                className="flex items-center gap-3 border-line px-2 py-5 md:border-r md:px-5 md:last:border-r-0 md:first:pl-2"
              >
                <span data-scan-dot className="h-1.5 w-1.5 shrink-0 rounded-full bg-sage" />
                <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-ink/70">
                  {surface}
                </span>
                <span
                  data-scan-status
                  className="ml-auto font-mono text-[10px] uppercase tracking-[0.15em] text-sage"
                >
                  visible
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
}

/* Ghost outline base + solid overlay that the timeline clip-reveals. */
function FoundWord() {
  return (
    <span className="relative inline-block font-display font-medium italic tracking-[-0.01em]">
      <span className="sr-only">Found</span>
      <span
        aria-hidden
        className="text-transparent"
        style={{ WebkitTextStroke: "0.018em rgba(14,90,90,0.45)" }}
      >
        Found
      </span>
      <span data-found-solid aria-hidden className="absolute inset-0 text-teal">
        Found
      </span>
      <span
        data-found-bar
        aria-hidden
        className="absolute -inset-y-1 w-[3px] bg-copper opacity-0"
      />
    </span>
  );
}

/* Latitude/longitude ellipse radii (as a fraction of the sphere radius),
   drawn from the equator outward so the wireframe reads as a real globe. */
const PARALLELS = [0.34, 0.64, 0.87, 0.985];
/* Static meridians that fill the front face while the spinning group turns
   behind/through them, so the sphere never looks empty edge-on. */
const MERIDIANS = [0.28, 0.6, 0.86];
/* Contact blips ride the surface, echoing the radar's "found" pulses. */
const BLIPS = [
  { left: "38%", top: "30%", delay: 1.5 },
  { left: "64%", top: "44%", delay: 4.2 },
  { left: "48%", top: "66%", delay: 7.1 },
];

/* Spinning wireframe web/globe. Keeps the radar's role exactly: data-speed
   lets ScrollSmoother parallax the outer shell, data-radar-inner plays the
   load-time bloom, and data-radar-seed is the center dot the timeline
   counter-scales. Only the dial itself changed from radar to globe. */
function Globe() {
  return (
    <div
      aria-hidden
      data-speed="0.85"
      className="pointer-events-none absolute -right-2 top-1/2 -mt-[23rem] hidden h-[30rem] w-[30rem] lg:block"
    >
      <div data-radar-inner data-hero-hidden className="absolute inset-0 opacity-0">
        {/* halo rings breathe outward where the radar pulses used to */}
        {[
          { delay: 0, color: "border-teal" },
          { delay: 4.5, color: "border-copper-deep" },
        ].map(({ delay, color }) => (
          <span
            key={delay}
            className={`motion-ambient absolute inset-0 animate-globe-halo rounded-full border ${color}`}
            style={{ animationDelay: `${delay}s`, opacity: 0 }}
          />
        ))}

        {/* the sphere: perspective wrapper so the spinning meridian cage reads
            as depth rather than a flat rotation */}
        <div className="absolute inset-[6%]" style={{ perspective: "1400px" }}>
          {/* sphere outline + static latitude lines: these never spin */}
          <svg viewBox="-100 -100 200 200" className="absolute inset-0 h-full w-full">
            <circle cx="0" cy="0" r="99" fill="none" stroke="rgba(14,90,90,0.35)" strokeWidth="0.6" />
            {PARALLELS.map((r) => (
              <g key={r}>
                <ellipse cx="0" cy={-r * 99} rx={Math.sqrt(1 - r * r) * 99} ry={Math.sqrt(1 - r * r) * 12} fill="none" stroke="rgba(14,90,90,0.22)" strokeWidth="0.5" />
                <ellipse cx="0" cy={r * 99} rx={Math.sqrt(1 - r * r) * 99} ry={Math.sqrt(1 - r * r) * 12} fill="none" stroke="rgba(14,90,90,0.22)" strokeWidth="0.5" />
              </g>
            ))}
            <line x1="0" y1="-99" x2="0" y2="99" stroke="rgba(14,90,90,0.22)" strokeWidth="0.5" />
          </svg>

          {/* the spinning meridian cage: rotates on the vertical axis forever */}
          <div
            className="motion-ambient absolute inset-0 animate-globe-spin"
            style={{ transformStyle: "preserve-3d" }}
          >
            {[0, 45, 90, 135].map((deg) => (
              <span
                key={deg}
                className="absolute inset-0 rounded-full border border-teal/40"
                style={{ transform: `rotateY(${deg}deg)` }}
              />
            ))}
          </div>

          {/* a few flat front-face meridians keep the globe legible edge-on */}
          <svg viewBox="-100 -100 200 200" className="absolute inset-0 h-full w-full">
            {MERIDIANS.map((rx) => (
              <ellipse key={rx} cx="0" cy="0" rx={rx * 99} ry="99" fill="none" stroke="rgba(14,90,90,0.12)" strokeWidth="0.5" />
            ))}
          </svg>
        </div>

        {BLIPS.map((blip) => (
          <span
            key={blip.delay}
            className="motion-ambient absolute h-2 w-2 animate-blip rounded-full bg-sage"
            style={{ left: blip.left, top: blip.top, animationDelay: `${blip.delay}s`, opacity: 0 }}
          />
        ))}
        <span
          data-radar-seed
          className="absolute left-1/2 top-1/2 -ml-1 -mt-1 h-2 w-2 rounded-full bg-teal/70"
        />
      </div>
    </div>
  );
}
