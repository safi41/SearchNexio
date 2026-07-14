"use client";

import { Stagger, StaggerItem } from "@/components/motion/primitives";
import { INDUSTRIES } from "@/lib/content";

/* Hub page: each industry gets its one approved sentence, never paragraphs. */
export default function IndustryList() {
  return (
    <Stagger className="mx-auto max-w-6xl px-6">
      {INDUSTRIES.map((industry) => (
        <StaggerItem
          key={industry.name}
          className="group grid gap-2 border-t border-line py-10 last:border-b md:grid-cols-[2fr_3fr] md:items-baseline md:gap-10"
        >
          <h2 className="font-display text-2xl font-medium tracking-tight transition-colors duration-500 group-hover:text-teal md:text-3xl">
            {industry.name}
          </h2>
          <p className="leading-relaxed text-ink/65">{industry.blurb}</p>
        </StaggerItem>
      ))}
    </Stagger>
  );
}
