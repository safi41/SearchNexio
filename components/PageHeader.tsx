"use client";

import { MaskedHeading, Reveal } from "@/components/motion/primitives";
import { Eyebrow } from "@/components/ui";

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
    <header className="mx-auto max-w-6xl px-6 pb-16 pt-40 md:pt-48">
      <Reveal>
        <Eyebrow>{eyebrow}</Eyebrow>
      </Reveal>
      <MaskedHeading
        as="h1"
        className="mt-8 font-display text-5xl font-medium leading-[1.02] tracking-[-0.02em] md:text-7xl"
        lines={lines}
      />
      {intro && (
        <Reveal delay={0.2}>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-ink/70">{intro}</p>
        </Reveal>
      )}
    </header>
  );
}
