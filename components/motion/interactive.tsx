"use client";

import { useRef, type ReactNode } from "react";
import { gsap, useGSAP } from "@/components/motion/gsap";

const reduced = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/* Element leans toward the cursor and springs back elastically on leave. */
export function Magnetic({
  children,
  strength = 0.3,
  className,
}: {
  children: ReactNode;
  strength?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { contextSafe } = useGSAP({ scope: ref });

  const onMove = contextSafe((e: React.MouseEvent) => {
    if (reduced() || !ref.current) return;
    const r = ref.current.getBoundingClientRect();
    gsap.to(ref.current, {
      x: (e.clientX - (r.left + r.width / 2)) * strength,
      y: (e.clientY - (r.top + r.height / 2)) * strength,
      duration: 0.4,
      ease: "power3.out",
    });
  });

  const onLeave = contextSafe(() => {
    gsap.to(ref.current, { x: 0, y: 0, duration: 0.8, ease: "elastic.out(1, 0.4)" });
  });

  return (
    <div
      ref={ref}
      className={`inline-block ${className ?? ""}`}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
    >
      {children}
    </div>
  );
}

/* Card tilts in 3D toward the cursor, capped at a few degrees so it stays calm. */
export function TiltCard({
  children,
  className,
  max = 4,
}: {
  children: ReactNode;
  className?: string;
  max?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { contextSafe } = useGSAP({ scope: ref });

  const onMove = contextSafe((e: React.MouseEvent) => {
    if (reduced() || !ref.current) return;
    const r = ref.current.getBoundingClientRect();
    gsap.to(ref.current, {
      rotateX: -((e.clientY - r.top) / r.height - 0.5) * 2 * max,
      rotateY: ((e.clientX - r.left) / r.width - 0.5) * 2 * max,
      transformPerspective: 1000,
      duration: 0.5,
      ease: "power3.out",
    });
  });

  const onLeave = contextSafe(() => {
    gsap.to(ref.current, { rotateX: 0, rotateY: 0, duration: 0.7, ease: "power3.out" });
  });

  return (
    <div ref={ref} className={className} onMouseMove={onMove} onMouseLeave={onLeave}>
      {children}
    </div>
  );
}
