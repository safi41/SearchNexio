"use client";

import { useState } from "react";
import Reveal from "@/components/motion/Reveal";
import { SectionHead } from "@/components/ui";
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
    <section className="mx-auto max-w-4xl px-6 py-16 md:py-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Reveal>
        <SectionHead badge="FAQ" title="Questions, answered directly" />
        <p className="mt-4 text-center text-[11px] font-semibold uppercase tracking-[0.14em] text-graphite">
          Last updated: July 2026
        </p>
      </Reveal>

      <Reveal delay={100}>
        <div className="mt-10 grid gap-3">
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
    <div className="rounded-2xl border border-line bg-surface px-6">
      <button
        type="button"
        aria-expanded={open}
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between gap-6 py-5 text-left font-heading text-[15.5px] font-bold text-ink"
      >
        {q}
        <span
          aria-hidden
          className={`grid size-7 shrink-0 place-items-center rounded-full transition-all duration-200 ${
            open ? "rotate-45 bg-indigo text-white" : "bg-lilac text-indigo"
          }`}
        >
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path
              d="M6 1.5v9M1.5 6h9"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
            />
          </svg>
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
          <p className="max-w-2xl pb-5 text-[13.5px] leading-relaxed text-graphite">
            <b className="font-semibold text-ink">{lead}</b> {rest}
          </p>
        </div>
      </div>
    </div>
  );
}
