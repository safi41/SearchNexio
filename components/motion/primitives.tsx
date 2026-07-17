"use client";

import type { ElementType, ReactNode } from "react";
import RevealBase from "@/components/motion/Reveal";

/* Aurora Curtain compat layer: the old GSAP primitives kept their names but
   now follow the one-animation policy — a single quiet fade-up per group,
   no staggers, no masks, no blinds. */

export function Reveal({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
}) {
  /* legacy callers pass seconds (0.2); the new system uses ms */
  const ms = delay < 10 ? delay * 1000 : delay;
  return (
    <RevealBase className={className} delay={ms}>
      {children}
    </RevealBase>
  );
}

export function Stagger({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return <RevealBase className={className}>{children}</RevealBase>;
}

export function StaggerItem({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return <div className={className}>{children}</div>;
}

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
  return (
    <RevealBase>
      <Tag className={className}>
        {lines.map((line, i) => (
          <span key={i} className={`block ${lineClassName ?? ""}`}>
            {line}
          </span>
        ))}
      </Tag>
    </RevealBase>
  );
}

export function BlindsReveal({
  children,
  className,
}: {
  children: ReactNode;
  cover?: string;
  className?: string;
  slats?: number;
  direction?: "vertical" | "horizontal";
}) {
  return <div className={`relative ${className ?? ""}`}>{children}</div>;
}
