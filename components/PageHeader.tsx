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
        className="mt-6 text-5xl font-[360] leading-[1.05] tracking-[-0.03em] md:text-6xl"
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
