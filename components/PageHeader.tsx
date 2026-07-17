"use client";

import { Reveal } from "@/components/motion/primitives";
import { Badge } from "@/components/ui";

export default function PageHeader({
  eyebrow,
  lines,
  intro,
}: {
  eyebrow: string;
  lines: string[];
  intro?: string;
}) {
  return (
    <header className="relative mx-auto max-w-6xl px-6 pb-14 pt-36 text-center md:pt-44">
      <div
        aria-hidden
        className="grid-pattern absolute left-1/2 top-16 h-[280px] w-[560px] -translate-x-1/2 [mask-image:radial-gradient(ellipse_70%_70%_at_50%_40%,#000_35%,transparent_75%)]"
      />
      <Reveal>
        <Badge>{eyebrow}</Badge>
        <h1 className="mx-auto mt-6 max-w-3xl font-heading text-[clamp(2.4rem,5.4vw,4rem)] font-bold leading-[1.08] tracking-[-0.02em]">
          {lines.join(" ")}
        </h1>
      </Reveal>
      {intro && (
        <Reveal delay={0.15}>
          <p className="mx-auto mt-6 max-w-2xl text-[15.5px] leading-relaxed text-graphite">
            {intro}
          </p>
        </Reveal>
      )}
    </header>
  );
}
