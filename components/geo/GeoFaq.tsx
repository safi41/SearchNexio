"use client";

import { useState } from "react";
import Reveal from "@/components/motion/Reveal";
import { GEO_FAQS } from "@/lib/geo-content";

/* Frequently asked questions: an accessible accordion with all content
   present in the HTML, simple open/close motion, and FAQPage schema mirroring
   the visible copy. */

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: GEO_FAQS.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

function FaqRow({ q, a, defaultOpen }: { q: string; a: string; defaultOpen?: boolean }) {
  const [open, setOpen] = useState(!!defaultOpen);
  return (
    <div className="overflow-hidden rounded-2xl border border-line bg-surface">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
      >
        <span className="font-heading text-[16px] font-bold tracking-[-0.01em]">{q}</span>
        <span className={`grid size-7 shrink-0 place-items-center rounded-full border border-line transition-all duration-300 ${open ? "rotate-45 border-indigo/40 bg-indigo text-white" : "text-graphite"}`}>
          <svg width="13" height="13" viewBox="0 0 14 14" fill="none" aria-hidden><path d="M7 2v10M2 7h10" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" /></svg>
        </span>
      </button>
      <div className={`grid transition-all duration-300 ease-soft ${open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
        <div className="overflow-hidden">
          <p className="px-6 pb-5 text-[14px] leading-relaxed text-graphite">{a}</p>
        </div>
      </div>
    </div>
  );
}

export default function GeoFaq() {
  return (
    <section className="mx-auto max-w-4xl overflow-x-clip px-6 py-16 md:py-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Reveal>
        <h2 className="text-center font-heading text-[clamp(1.9rem,3.6vw,2.6rem)] font-bold leading-[1.12] tracking-[-0.02em]">
          Frequently asked questions
        </h2>
      </Reveal>

      <div className="mt-10 grid gap-3">
        {GEO_FAQS.map((f, i) => (
          <Reveal key={f.q} variant={i % 2 === 0 ? "left" : "right"} delay={Math.min(i * 50, 240)}>
            <FaqRow q={f.q} a={f.a} defaultOpen={i === 0} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
