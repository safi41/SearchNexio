"use client";

import { Reveal } from "@/components/motion/primitives";
import { CLIENTS } from "@/lib/content";

/* Per the copy doc: text wordmarks are the approved fallback, so the strip is
   typographic by design. An infinite marquee, paused on hover; reduced motion
   gets a static row. TODO before launch: written permission from each client. */
export default function LogoStrip() {
  const row = [...CLIENTS, ...CLIENTS];
  return (
    <section className="border-y border-line py-16 md:py-20">
      <Reveal className="mx-auto max-w-6xl px-6">
        <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-ink/45">
          Trusted by businesses in healthcare, SaaS, ecommerce, and finance
        </p>
      </Reveal>
      <Reveal delay={0.15} className="relative mt-8 overflow-hidden">
        <div className="marquee">
          <div className="motion-ambient animate-marquee flex w-max items-baseline">
            {row.map((name, i) => (
              <span
                key={`${name}-${i}`}
                aria-hidden={i >= CLIENTS.length}
                className="shrink-0 pr-20 font-display text-2xl tracking-tight text-ink/45 transition-colors duration-300 hover:text-teal"
              >
                {name}
              </span>
            ))}
          </div>
        </div>
        <span
          aria-hidden
          className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-paper to-transparent"
        />
        <span
          aria-hidden
          className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-paper to-transparent"
        />
      </Reveal>
    </section>
  );
}
