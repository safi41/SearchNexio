"use client";

import { useMemo, useState } from "react";
import Reveal from "@/components/motion/Reveal";

/* The FAQ accordion shared by the industry and service pages: FAQPage
   schema mirroring the visible copy, a centered heading, and rows that
   slide in from alternating sides. Single-open behaviour; the full answer
   text always ships in the HTML. */

export type FaqItem = {
  q: string;
  a: string;
  /** optional rich answer for display; `a` stays the schema text */
  aNode?: React.ReactNode;
};

function FaqRow({
  q,
  a,
  open,
  onToggle,
}: {
  q: string;
  a: string;
  open: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="border-b border-line last:border-b-0">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={open}
        className="flex w-full items-center justify-between gap-4 py-5 text-left"
      >
        <span className="font-heading text-[16px] font-bold tracking-[-0.01em]">{q}</span>
        <span
          className={`grid size-7 shrink-0 place-items-center rounded-full border border-line transition-all duration-300 ${
            open ? "rotate-45 border-indigo/40 bg-indigo text-white" : "text-graphite"
          }`}
        >
          <svg width="13" height="13" viewBox="0 0 14 14" fill="none" aria-hidden>
            <path d="M7 2v10M2 7h10" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          </svg>
        </span>
      </button>
      <div
        className={`grid transition-all duration-300 ease-soft ${
          open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <p className="pb-5 pr-10 text-[14px] leading-relaxed text-graphite">{a}</p>
        </div>
      </div>
    </div>
  );
}

function CardRow({ q, a, defaultOpen }: { q: string; a: React.ReactNode; defaultOpen?: boolean }) {
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
        <span
          className={`grid size-7 shrink-0 place-items-center rounded-full border border-line transition-all duration-300 ${
            open ? "rotate-45 border-indigo/40 bg-indigo text-white" : "text-graphite"
          }`}
        >
          <svg width="13" height="13" viewBox="0 0 14 14" fill="none" aria-hidden>
            <path d="M7 2v10M2 7h10" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          </svg>
        </span>
      </button>
      <div
        className={`grid transition-all duration-300 ease-soft ${
          open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <p className="px-6 pb-5 text-[14px] leading-relaxed text-graphite">{a}</p>
        </div>
      </div>
    </div>
  );
}

export default function FaqSection({
  title,
  faqs,
  bordered = false,
  variant = "rows",
  maxWidthClass = "max-w-[800px]",
}: {
  title: React.ReactNode;
  faqs: FaqItem[];
  bordered?: boolean;
  /** "rows": hairline single-open list. "cards": bordered multi-open cards. */
  variant?: "rows" | "cards";
  maxWidthClass?: string;
}) {
  const [open, setOpen] = useState(0);

  /* faqs is a module constant on every page, so this serializes once per
     mount instead of on every accordion toggle */
  const schemaJson = useMemo(
    () =>
      JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqs.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      }),
    [faqs]
  );

  return (
    <section
      className={`overflow-x-clip py-16 md:py-24 ${bordered ? "border-t border-line" : ""}`}
    >
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: schemaJson }} />
      <div className={`mx-auto ${maxWidthClass} px-6`}>
        <Reveal>
          <h2 className="text-center font-heading text-[clamp(1.9rem,3.6vw,2.6rem)] font-bold leading-[1.12] tracking-[-0.02em]">
            {title}
          </h2>
        </Reveal>
        <div className={variant === "cards" ? "mt-10 grid gap-3" : "mt-10"}>
          {faqs.map((f, i) => (
            <Reveal
              key={f.q}
              variant={i % 2 === 0 ? "left" : "right"}
              delay={Math.min(i * 50, 240)}
            >
              {variant === "cards" ? (
                <CardRow q={f.q} a={f.aNode ?? f.a} defaultOpen={i === 0} />
              ) : (
                <FaqRow
                  q={f.q}
                  a={f.a}
                  open={open === i}
                  onToggle={() => setOpen(open === i ? -1 : i)}
                />
              )}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
