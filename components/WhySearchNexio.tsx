"use client";

import { MaskedHeading, Reveal, Stagger, StaggerItem } from "@/components/motion/primitives";
import { Eyebrow } from "@/components/ui";
import { WHY } from "@/lib/content";

export default function WhySearchNexio() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-28 md:py-36">
      <Reveal>
        <Eyebrow>Why Us</Eyebrow>
      </Reveal>
      <MaskedHeading
        className="mt-8 font-display text-4xl font-medium leading-[1.05] tracking-[-0.01em] md:text-6xl"
        lines={["Why SearchNexio"]}
      />
      <Reveal delay={0.15}>
        <p className="mt-6 max-w-2xl leading-relaxed text-ink/65">
          The short version: we are a search visibility agency that works the
          way high-trust businesses need their partners to work.
        </p>
      </Reveal>

      <Stagger className="mt-14 grid md:grid-cols-2">
        {WHY.map((item, i) => (
          <StaggerItem
            key={item.title}
            className={`border-line py-8 md:border-t md:p-8 ${
              i % 2 === 0 ? "md:pl-0 md:border-r" : "md:pr-0"
            } border-t first:border-t-0 md:first:border-t`}
          >
            <h3 className="text-base font-semibold">{item.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-ink/65">{item.body}</p>
          </StaggerItem>
        ))}
      </Stagger>

      {/* Testimonial slot: single quote, no carousel; pending permission outreach. */}
      <Reveal delay={0.15} className="mt-14">
        <figure className="border border-dashed border-copper/50 p-10 text-center">
          <span aria-hidden className="font-display text-5xl leading-none text-copper">
            &ldquo;
          </span>
          <figcaption className="mt-3 font-mono text-[10px] uppercase tracking-[0.2em] text-ink/45">
            One client quote, one sentence, name, company. Pending permission outreach.
          </figcaption>
        </figure>
      </Reveal>
    </section>
  );
}
