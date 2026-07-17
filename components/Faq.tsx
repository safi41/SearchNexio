"use client";

import { useState } from "react";
import Reveal from "@/components/motion/Reveal";
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
    <section className="mx-auto max-w-6xl px-6 pb-24 pt-4 md:pb-28">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="flex flex-wrap items-end justify-between gap-6">
        <Reveal>
          <Eyebrow>FAQ</Eyebrow>
          <h2 className="mt-4 text-[clamp(1.8rem,3.4vw,2.75rem)] font-[380] leading-[1.1] tracking-[-0.025em]">
            Questions, answered directly
          </h2>
        </Reveal>
        <Reveal delay={80}>
          <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-graphite">
            Last updated: July 2026
          </p>
        </Reveal>
      </div>

      <Reveal delay={100}>
        <div className="mt-10 max-w-3xl">
          {FAQS.map((faq) => (
            <FaqRow key={faq.q} q={faq.q} lead={faq.lead} rest={faq.rest} />
          ))}
        </div>
      </Reveal>
    </section>
  );
}

function FaqRow({ q, lead, rest }: { q: string; lead: string; rest: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-t border-line last:border-b">
      <button
        type="button"
        aria-expanded={open}
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between gap-6 py-5 text-left text-[15px] font-medium text-ink transition-colors duration-200 hover:text-indigo"
      >
        {q}
        <span
          aria-hidden
          className={`shrink-0 text-lg text-indigo transition-transform duration-200 ${
            open ? "rotate-45" : ""
          }`}
        >
          +
        </span>
      </button>
      <div
        className={`grid transition-[grid-template-rows] duration-300 ease-out ${
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
        aria-hidden={!open}
      >
        <div className="overflow-hidden">
          {/* First sentence bold: it answers the question directly, per the doc. */}
          <p className="max-w-2xl pb-5 text-sm leading-relaxed text-graphite">
            <b className="font-semibold text-ink">{lead}</b> {rest}
          </p>
        </div>
      </div>
    </div>
  );
}
