"use client";

import { Reveal, Stagger, StaggerItem } from "@/components/motion/primitives";
import { CtaLink, Eyebrow } from "@/components/ui";
import { METHOD_STEPS, WHY } from "@/lib/content";

export default function AboutContent() {
  return (
    <div className="mx-auto max-w-6xl px-6 pb-24">
      <section className="border-t border-line py-16 md:py-20">
        <Reveal>
          <Eyebrow>How We Work</Eyebrow>
        </Reveal>
        <Stagger className="mt-10 grid gap-8 md:grid-cols-4">
          {METHOD_STEPS.map((step) => (
            <StaggerItem key={step.name}>
              <p className="text-xs font-semibold tracking-[0.2em] text-indigo">{step.index}</p>
              <h2 className="mt-2 font-heading text-2xl font-bold tracking-[-0.01em]">
                {step.name}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-graphite">{step.body}</p>
            </StaggerItem>
          ))}
        </Stagger>
        <Reveal delay={0.3}>
          <p className="mt-10 max-w-xl rounded-2xl border border-line bg-lilac/60 p-5 text-ink">
            No long-term lock-in contracts. We keep our clients by delivering
            results, not through legal commitments.
          </p>
        </Reveal>
      </section>

      <section className="border-t border-line py-16 md:py-20">
        <Reveal>
          <Eyebrow>How We Partner</Eyebrow>
        </Reveal>
        <Stagger className="mt-10 grid gap-8 md:grid-cols-2">
          {WHY.map((item) => (
            <StaggerItem key={item.title}>
              <h2 className="text-base font-semibold">{item.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-graphite">{item.body}</p>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      {/* Pre-launch checklist item 7: founder credentials, address, privacy policy. */}
      <section className="border-t border-line py-16">
        <div className="grid gap-5 md:grid-cols-2">
          <Reveal>
            <div className="h-full rounded-2xl border border-dashed border-graphite/40 p-8">
              <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-graphite">
                Pending before launch
              </p>
              <p className="mt-3 text-sm text-graphite">
                Founder credentials: who runs the work, their background, and
                why they built an AI-native search practice.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.12}>
            <div className="h-full rounded-2xl border border-dashed border-graphite/40 p-8">
              <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-graphite">
                Pending before launch
              </p>
              <p className="mt-3 text-sm text-graphite">
                Business address and privacy policy, live and linked from every
                page footer.
              </p>
            </div>
          </Reveal>
        </div>
        <Reveal delay={0.2}>
          <div className="mt-14">
            <CtaLink href="/#visibility-review">Request a Visibility Review</CtaLink>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
