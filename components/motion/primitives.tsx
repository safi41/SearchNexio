"use client";

import { useRef, type ElementType, type ReactNode } from "react";
import { gsap, useGSAP, EASE, EASE_INOUT, MOTION_OK } from "@/components/motion/gsap";

export { EASE, EASE_INOUT };

export function Reveal({
  children,
  className,
  delay = 0,
  y = 28,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add(MOTION_OK, () => {
        gsap.from(ref.current, {
          autoAlpha: 0,
          y,
          duration: 1,
          delay,
          ease: EASE,
          scrollTrigger: { trigger: ref.current, start: "top 85%", once: true },
        });
      });
    },
    { scope: ref }
  );
  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}

export function Stagger({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add(MOTION_OK, () => {
        gsap.from(ref.current!.querySelectorAll("[data-stagger-item]"), {
          autoAlpha: 0,
          y: 24,
          duration: 0.9,
          ease: EASE,
          stagger: 0.09,
          scrollTrigger: { trigger: ref.current, start: "top 85%", once: true },
        });
      });
    },
    { scope: ref }
  );
  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}

export function StaggerItem({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div data-stagger-item className={className}>
      {children}
    </div>
  );
}

/* Headline lines rise out of an overflow mask, one line after the next. */
export function MaskedHeading({
  lines,
  as: Tag = "h2",
  className,
  lineClassName,
}: {
  lines: ReactNode[];
  as?: ElementType;
  className?: string;
  lineClassName?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add(MOTION_OK, () => {
        gsap.from(ref.current!.querySelectorAll("[data-mask-line]"), {
          yPercent: 112,
          duration: 1,
          ease: EASE,
          stagger: 0.12,
          scrollTrigger: { trigger: ref.current, start: "top 85%", once: true },
        });
      });
    },
    { scope: ref }
  );
  return (
    <div ref={ref}>
      <Tag className={className}>
        {lines.map((line, i) => (
          <span key={i} className="block overflow-hidden pb-[0.1em] -mb-[0.1em]">
            <span data-mask-line className={`block ${lineClassName ?? ""}`}>
              {line}
            </span>
          </span>
        ))}
      </Tag>
    </div>
  );
}

/* Section transition: staggered vertical blinds, revealed as a scroll mask.
   Each slat is clip-path masked away bottom-to-top, staggered across the row,
   and the whole reveal is scrubbed directly by scroll position, so the reader
   wipes the section open (and closed again) with their own scrolling. */
const BLIND_COVERS = {
  paper: "bg-paper",
  ink: "bg-ink",
  teal: "bg-teal",
  surface: "bg-surface",
} as const;

export function BlindsReveal({
  children,
  cover,
  className,
  slats = 6,
  direction = "vertical",
}: {
  children: ReactNode;
  cover: keyof typeof BLIND_COVERS;
  className?: string;
  slats?: number;
  /* vertical: side-by-side slats masking away bottom-to-top;
     horizontal: stacked full-width bars retracting alternately left/right */
  direction?: "vertical" | "horizontal";
}) {
  const ref = useRef<HTMLDivElement>(null);
  useGSAP(
    () => {
      const blinds = ref.current!.querySelectorAll("[data-blind]");
      const mm = gsap.matchMedia();
      mm.add(MOTION_OK, () => {
        /* slow wipe: begins the moment the section peeks in and the last slat
           finishes exactly when the section occupies the full screen */
        gsap.to(blinds, {
          clipPath:
            direction === "vertical"
              ? "inset(0% 0% 100% 0%)"
              : (i: number) =>
                  i % 2 ? "inset(0% 0% 0% 100%)" : "inset(0% 100% 0% 0%)",
          ease: "none",
          stagger: 0.15,
          duration: 1,
          scrollTrigger: {
            trigger: ref.current,
            start: "top bottom",
            end: "top top",
            scrub: 0.8,
          },
        });
      });
      mm.add("(prefers-reduced-motion: reduce)", () => {
        gsap.set(blinds, { display: "none" });
      });
    },
    { scope: ref }
  );
  return (
    <div ref={ref} className={`relative ${className ?? ""}`}>
      {children}
      <div
        aria-hidden
        className={`pointer-events-none absolute inset-0 z-20 flex ${
          direction === "horizontal" ? "flex-col" : ""
        }`}
      >
        {Array.from({ length: slats }).map((_, i) => (
          <span
            key={i}
            data-blind
            className={`flex-1 ${direction === "horizontal" ? "w-full" : "h-full"} ${BLIND_COVERS[cover]}`}
            style={{ clipPath: "inset(0% 0% 0% 0%)" }}
          />
        ))}
      </div>
    </div>
  );
}
