"use client";

import Link from "next/link";
import { MaskedHeading, Reveal, Stagger, StaggerItem } from "@/components/motion/primitives";
import { Eyebrow } from "@/components/ui";
import { INDUSTRIES } from "@/lib/content";

/* Slim band. Doc rule: one sentence per industry maximum, shown on hover here
   and in full on the /industries hub page. */
export default function Industries() {
  return (
    <section className="border-y border-line">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-24">
        <Reveal>
          <Eyebrow>Who We Serve</Eyebrow>
        </Reveal>
        <MaskedHeading
          className="mt-8 font-display text-3xl font-medium leading-[1.05] tracking-[-0.01em] md:text-5xl"
          lines={["Industries We Work With"]}
        />
        <Reveal delay={0.15}>
          <p className="mt-6 max-w-2xl leading-relaxed text-ink/65">
            We focus on businesses where trust decides the sale, and buyers
            research everything before choosing.
          </p>
        </Reveal>
        <Stagger className="mt-10 flex flex-wrap gap-3">
          {INDUSTRIES.map((industry) => (
            <StaggerItem key={industry.name}>
              <Link
                href="/industries"
                title={industry.blurb}
                className="group relative inline-block overflow-hidden border border-teal px-5 py-3 text-sm font-medium text-teal transition-colors duration-500 hover:text-paper"
              >
                <span className="absolute inset-0 origin-bottom scale-y-0 bg-teal transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-y-100" />
                <span className="relative">{industry.name}</span>
              </Link>
            </StaggerItem>
          ))}
        </Stagger>
        <Reveal delay={0.3}>
          <p className="mt-10 font-display italic text-ink/60">
            Not sure if you fit? The visibility review will tell you honestly.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
