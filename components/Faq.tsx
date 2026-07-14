"use client";

import { useRef, useState } from "react";
import { gsap, useGSAP, EASE_INOUT } from "@/components/motion/gsap";
import { MaskedHeading, Reveal } from "@/components/motion/primitives";
import { Eyebrow } from "@/components/ui";
import { FAQS } from "@/lib/content";

/* FAQPage schema mirrors the visible copy exactly, per the doc's schema rule. */
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((faq) => ({
    "@type": "Question",
    name: faq.q,
    acceptedAnswer: { "@type": "Answer", text: `${faq.lead} ${faq.rest}` },
  })),
};

export default function Faq() {
  return (
    <section className="mx-auto max-w-6xl px-6 pb-28 md:pb-36">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="flex flex-wrap items-end justify-between gap-6">
        <div>
          <Reveal>
            <Eyebrow>FAQ</Eyebrow>
          </Reveal>
          <MaskedHeading
            className="mt-8 font-display text-4xl font-medium leading-[1.05] tracking-[-0.01em] md:text-5xl"
            lines={["Questions, answered directly"]}
          />
        </div>
        <Reveal delay={0.2}>
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink/45">
            Last updated: July 2026
          </p>
        </Reveal>
      </div>

      <div className="mt-12 max-w-3xl">
        {FAQS.map((faq, i) => (
          <Reveal key={faq.q} delay={Math.min(i * 0.05, 0.25)}>
            <FaqRow q={faq.q} lead={faq.lead} rest={faq.rest} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function FaqRow({ q, lead, rest }: { q: string; lead: string; rest: string }) {
  const [open, setOpen] = useState(false);
  const rowRef = useRef<HTMLDivElement>(null);
  const bodyRef = useRef<HTMLDivElement>(null);
  const iconRef = useRef<HTMLSpanElement>(null);
  const { contextSafe } = useGSAP({ scope: rowRef });

  const toggle = contextSafe(() => {
    const next = !open;
    setOpen(next);
    gsap.to(iconRef.current, { rotate: next ? 45 : 0, duration: 0.4, ease: EASE_INOUT });
    if (next) {
      gsap.set(bodyRef.current, { height: "auto", autoAlpha: 1 });
      gsap.from(bodyRef.current, { height: 0, autoAlpha: 0, duration: 0.5, ease: EASE_INOUT });
    } else {
      gsap.to(bodyRef.current, { height: 0, autoAlpha: 0, duration: 0.45, ease: EASE_INOUT });
    }
  });

  return (
    <div ref={rowRef} className="border-t border-line last:border-b">
      <button
        type="button"
        aria-expanded={open}
        onClick={toggle}
        className="flex w-full items-center justify-between gap-6 py-6 text-left font-semibold text-ink transition-colors duration-300 hover:text-teal"
      >
        {q}
        <span ref={iconRef} aria-hidden className="shrink-0 font-mono text-lg text-copper">
          +
        </span>
      </button>
      <div ref={bodyRef} className="h-0 overflow-hidden opacity-0" aria-hidden={!open}>
        {/* First sentence bold: it answers the question directly, per the doc. */}
        <p className="max-w-2xl pb-6 text-sm leading-relaxed text-ink/70">
          <b className="font-semibold text-ink">{lead}</b> {rest}
        </p>
      </div>
    </div>
  );
}
