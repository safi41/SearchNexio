"use client";

import { useState } from "react";
import Reveal from "@/components/motion/Reveal";
import { ArrowChip, Sparkle } from "@/components/ui";
import { DotGrid } from "@/components/decor";

/* The dark closing-form section every page ends on: indigo panel with a
   dot-grid, copy on the left, the form card on the right, and a shared
   received state. Pages supply their own badge, title, intro copy and the
   exact field markup as children, so the copy stays page-specific while the
   skeleton exists once.

   Submission is intentionally inert in this build. */
export default function ClosingForm({
  id,
  scrollMt = false,
  badge,
  title,
  intro,
  submitLabel,
  sentMessage,
  privacy,
  children,
}: {
  id: string;
  scrollMt?: boolean;
  badge: string;
  title: React.ReactNode;
  intro: React.ReactNode;
  submitLabel: React.ReactNode;
  sentMessage: string;
  privacy?: React.ReactNode;
  children: React.ReactNode;
}) {
  const [sent, setSent] = useState(false);

  return (
    <section
      id={id}
      className={`${scrollMt ? "scroll-mt-24 " : ""}relative overflow-x-clip py-16 md:py-24`}
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="cta-indigo relative overflow-hidden rounded-[2rem] p-7 md:p-12">
          <DotGrid />

          <div className="relative grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
            <Reveal variant="left">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-[12px] font-semibold text-white backdrop-blur-sm">
                <Sparkle className="text-citron" />
                {badge}
              </span>
              <h2 className="mt-6 font-heading text-[clamp(1.9rem,3.6vw,2.7rem)] font-bold leading-[1.1] tracking-[-0.02em] text-white">
                {title}
              </h2>
              {intro}
            </Reveal>

            <Reveal variant="right" delay={80}>
              <div className="rounded-3xl bg-surface p-7 shadow-[0_30px_80px_rgba(11,13,18,0.35)] md:p-8">
                {sent ? (
                  <div className="grid min-h-[320px] place-items-center text-center">
                    <div>
                      <span className="mx-auto grid size-14 place-items-center rounded-2xl bg-citron">
                        <svg width="24" height="24" viewBox="0 0 12 12" fill="none" aria-hidden>
                          <path
                            d="m2.5 6.5 2.5 2.5 4.5-5"
                            stroke="#0B0D12"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                      <h3 className="mt-5 font-heading text-[20px] font-bold tracking-[-0.01em]">
                        Request received
                      </h3>
                      <p className="mx-auto mt-2 max-w-sm text-[14px] leading-relaxed text-graphite">
                        {sentMessage}
                      </p>
                    </div>
                  </div>
                ) : (
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      setSent(true);
                    }}
                  >
                    {children}
                    <button
                      type="submit"
                      className="group mt-6 inline-flex w-full items-center justify-center gap-2.5 rounded-full bg-ink-solid px-7 py-3.5 text-[14.5px] font-bold text-white transition-transform duration-200 hover:-translate-y-0.5"
                    >
                      {submitLabel}
                      <ArrowChip tone="citron" />
                    </button>
                    {privacy && (
                      <p className="mt-4 text-[11.5px] leading-relaxed text-graphite">{privacy}</p>
                    )}
                  </form>
                )}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
