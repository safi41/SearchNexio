"use client";

import { useState } from "react";
import Reveal from "@/components/motion/Reveal";
import { CtaLink } from "@/components/ui";
import {
  RECOVERY_CAUSES,
  RECOVERY_DIAGNOSE,
  RECOVERY_MID_CTA,
  RECOVERY_LEVELS,
  RECOVERY_PROCESS,
  RECOVERY_CTA,
  R_ROUTES,
} from "@/lib/recovery-content";

/* Line glyphs for the seven causes, on the house 1.7 stroke. */
const CAUSE_ICONS: Record<string, React.ReactNode> = {
  /* pulse: an update rolling through */
  pulse: <path d="M3 12h4l2.5-6 4 12 2.5-6H21" />,
  /* route: a migration path with a break */
  route: (
    <>
      <circle cx="5.5" cy="18.5" r="2.2" />
      <circle cx="18.5" cy="5.5" r="2.2" />
      <path d="M7.5 17c4-1 4-3.5 4-5.5M12.5 8c0-1 1.5-2 4-2" strokeDasharray="0" />
      <path d="M11.5 11.5l1-3" strokeDasharray="2 2.4" />
    </>
  ),
  wrench: (
    <path d="M15.4 4.6a4.6 4.6 0 0 0-5.9 5.6L4 15.7l2.6 2.6 5.5-5.5a4.6 4.6 0 0 0 5.6-5.9l-2.7 2.7-2.2-2.2Z" />
  ),
  doc: (
    <>
      <path d="M13.6 3.2H7.4a2.2 2.2 0 0 0-2.2 2.2v13.2a2.2 2.2 0 0 0 2.2 2.2h9.2a2.2 2.2 0 0 0 2.2-2.2V8.4Z" />
      <path d="M13.6 3.2v5.2h5.2M8.6 12.6h6.8M8.6 16.2h4.4" />
    </>
  ),
  link: (
    <>
      <path d="M10 14a4.5 4.5 0 0 0 6.4.4l2.4-2.4a4.5 4.5 0 0 0-6.4-6.4l-1.3 1.3" />
      <path d="M14 10a4.5 4.5 0 0 0-6.4-.4l-2.4 2.4a4.5 4.5 0 0 0 6.4 6.4l1.3-1.3" />
    </>
  ),
  flag: (
    <>
      <path d="M5.5 21V4" />
      <path d="M5.5 4.8c2.2-1.4 4.4-1.4 6.6 0s4.4 1.4 6.6 0v8.4c-2.2 1.4-4.4 1.4-6.6 0s-4.4-1.4-6.6 0" />
    </>
  ),
  layout: (
    <>
      <rect x="3.5" y="4" width="17" height="16" rx="2.2" />
      <path d="M3.5 9h17M9.5 9v11" />
    </>
  ),
};

function CauseIcon({ icon, className }: { icon: string; className?: string }) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      className={className}
    >
      {CAUSE_ICONS[icon]}
    </svg>
  );
}

/* The cause body, with the PDF's AI SEO internal link woven into the last
   cause's copy. */
function CauseBody({
  cause,
  className,
}: {
  cause: (typeof RECOVERY_CAUSES.causes)[number];
  className?: string;
}) {
  if (!cause.linkAnchor) {
    return <p className={className}>{cause.desc}</p>;
  }
  const [pre, post] = cause.desc.split(cause.linkAnchor);
  return (
    <p className={className}>
      {pre}
      <a
        href={cause.linkHref}
        className="font-semibold text-indigo underline decoration-indigo/30 underline-offset-2 transition-colors hover:decoration-indigo"
      >
        {cause.linkAnchor}
      </a>
      {post}
    </p>
  );
}

/* ---- What Causes Organic Traffic and Rankings to Drop? ----
   A diagnosis board instead of a seven-card wall: cause list left, one
   detail panel right on desktop; an accordion on mobile. ---- */

export function RecoveryCauses() {
  const [active, setActive] = useState(0);
  const [openMobile, setOpenMobile] = useState(0);
  const current = RECOVERY_CAUSES.causes[active];

  return (
    <section className="overflow-x-clip py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <h2 className="max-w-2xl font-heading text-[clamp(1.9rem,3.6vw,2.6rem)] font-bold leading-[1.12] tracking-[-0.02em]">
            What Causes Organic Traffic and Rankings to{" "}
            <span className="text-indigo">Drop?</span>
          </h2>
        </Reveal>

        {/* desktop: selector rail + detail panel */}
        <div className="mt-12 hidden gap-8 lg:grid lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal variant="left">
            <div className="flex flex-col gap-1.5">
              {RECOVERY_CAUSES.causes.map((c, i) => (
                <button
                  key={c.key}
                  type="button"
                  onClick={() => setActive(i)}
                  aria-pressed={active === i}
                  className={`group flex items-center gap-4 rounded-2xl px-5 py-4 text-left transition-all duration-300 ease-soft ${
                    active === i
                      ? "bg-ink text-white shadow-[0_16px_40px_rgba(11,13,18,0.18)]"
                      : "hover:bg-lilac/50"
                  }`}
                >
                  <span
                    className={`text-[11.5px] font-bold tabular-nums ${
                      active === i ? "text-citron" : "text-indigo/70"
                    }`}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="font-heading text-[15px] font-bold tracking-[-0.01em]">
                    {c.title}
                  </span>
                  <span
                    aria-hidden
                    className={`ml-auto transition-transform duration-300 ${
                      active === i ? "translate-x-0 text-citron" : "-translate-x-1 text-graphite/40 group-hover:translate-x-0"
                    }`}
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14M13 6l6 6-6 6" />
                    </svg>
                  </span>
                </button>
              ))}
            </div>
          </Reveal>

          <Reveal variant="right" delay={100}>
            <div className="sticky top-28 rounded-3xl border border-line bg-surface p-9 shadow-[0_24px_64px_rgba(11,13,18,0.06)]">
              <div key={current.key} className="geo-panel-fade">
                <span className="grid size-12 place-items-center rounded-2xl bg-gradient-to-b from-lilac to-lilac/40 text-indigo">
                  <CauseIcon icon={current.icon} />
                </span>
                <h3 className="mt-6 font-heading text-[clamp(1.25rem,2.2vw,1.6rem)] font-bold leading-snug tracking-[-0.015em]">
                  {current.title}
                </h3>
                <CauseBody
                  cause={current}
                  className="mt-4 text-[14.5px] leading-relaxed text-graphite"
                />
              </div>
              <p className="mt-8 border-t border-line pt-5 text-[11.5px] font-semibold uppercase tracking-[0.12em] text-graphite/60">
                Cause {String(active + 1).padStart(2, "0")} of{" "}
                {String(RECOVERY_CAUSES.causes.length).padStart(2, "0")}
              </p>
            </div>
          </Reveal>
        </div>

        {/* mobile: accordion */}
        <Reveal delay={60}>
          <div className="mt-10 overflow-hidden rounded-3xl border border-line bg-surface lg:hidden">
            {RECOVERY_CAUSES.causes.map((c, i) => {
              const open = openMobile === i;
              return (
                <div key={c.key} className="border-b border-line last:border-b-0">
                  <button
                    type="button"
                    onClick={() => setOpenMobile(open ? -1 : i)}
                    aria-expanded={open}
                    className="flex w-full items-center gap-4 px-5 py-4 text-left"
                  >
                    <span className={`transition-colors ${open ? "text-indigo" : "text-graphite"}`}>
                      <CauseIcon icon={c.icon} />
                    </span>
                    <span className="font-heading text-[15px] font-bold tracking-[-0.01em]">
                      {c.title}
                    </span>
                    <span
                      aria-hidden
                      className={`ml-auto grid size-7 shrink-0 place-items-center rounded-full border border-line transition-all duration-300 ${
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
                      <CauseBody
                        cause={c}
                        className="px-5 pb-5 text-[13.5px] leading-relaxed text-graphite"
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---- How We Diagnose an SEO Traffic Drop ----
   Five steps down a drawn spine: number dots on a vertical line, copy
   beside each. ---- */

export function RecoveryDiagnose() {
  return (
    <section className="overflow-x-clip wash-lilac-full py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <h2 className="max-w-2xl font-heading text-[clamp(1.9rem,3.6vw,2.6rem)] font-bold leading-[1.12] tracking-[-0.02em]">
            How We Diagnose an{" "}
            <span className="text-indigo">SEO Traffic Drop</span>
          </h2>
        </Reveal>

        <div className="relative mt-12 max-w-3xl">
          {/* the spine */}
          <span
            aria-hidden
            className="absolute bottom-5 left-[21px] top-5 w-px bg-gradient-to-b from-indigo/40 via-indigo/25 to-transparent"
          />
          {RECOVERY_DIAGNOSE.steps.map((s, i) => (
            <Reveal key={s.title} delay={i * 70}>
              <div className="relative flex gap-6 pb-10 last:pb-0">
                <span className="relative z-10 grid size-11 shrink-0 place-items-center rounded-full border border-indigo/25 bg-surface font-heading text-[14px] font-bold text-indigo shadow-[0_8px_20px_rgba(99,91,255,0.12)]">
                  {i + 1}
                </span>
                <div className="pt-1.5">
                  <h3 className="font-heading text-[17px] font-bold tracking-[-0.01em]">
                    {s.title}
                  </h3>
                  <p className="mt-2.5 max-w-2xl text-[14.5px] leading-relaxed text-graphite">
                    {s.desc}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---- Post-diagnosis CTA: the second of the brief's four placements. ---- */

export function RecoveryMidCta() {
  return (
    <section className="relative overflow-x-clip py-6">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal variant="scale">
          <div className="cta-indigo relative overflow-hidden rounded-[2rem] px-8 py-12 md:px-12">
            <div aria-hidden className="pointer-events-none absolute inset-0">
              <div className="absolute -right-28 -top-28 size-96 rounded-full border border-white/10" />
              <div className="absolute -bottom-24 -left-24 size-80 rounded-full border border-white/10" />
            </div>
            <div className="relative">
              <h2 className="text-[13px] font-bold uppercase tracking-[0.14em] text-citron">
                {RECOVERY_MID_CTA.eyebrow}
              </h2>
              <p className="mt-4 max-w-2xl text-[16px] leading-relaxed text-white/80">
                {RECOVERY_MID_CTA.body}
              </p>
              <div className="mt-8">
                <CtaLink href={R_ROUTES.assessment} variant="glass">
                  {RECOVERY_CTA}
                </CtaLink>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---- Choose the Level of Recovery Support You Need ----
   Three tiers, the middle one highlighted, matching the pricing-tier
   treatment used site-wide. ---- */

export function RecoveryLevels() {
  return (
    <section className="overflow-x-clip py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <h2 className="max-w-2xl font-heading text-[clamp(1.9rem,3.6vw,2.6rem)] font-bold leading-[1.12] tracking-[-0.02em]">
            Choose the Level of{" "}
            <span className="text-indigo">Recovery Support</span> You Need
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {RECOVERY_LEVELS.tiers.map((tier, i) => (
            <Reveal key={tier.title} variant="up" delay={i * 80}>
              <article
                className={`flex h-full flex-col rounded-3xl p-8 transition-all duration-300 ease-soft hover:-translate-y-1.5 ${
                  i === 1
                    ? "cta-indigo text-white shadow-[0_24px_60px_rgba(99,91,255,0.28)]"
                    : "border border-line bg-surface hover:shadow-[0_24px_56px_rgba(99,91,255,0.12)]"
                }`}
              >
                <span
                  className={`text-[11.5px] font-bold tabular-nums ${
                    i === 1 ? "text-citron" : "text-indigo/70"
                  }`}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-4 font-heading text-[19px] font-bold leading-snug tracking-[-0.015em]">
                  {tier.title}
                </h3>
                <p
                  className={`mt-4 text-[14px] leading-relaxed ${
                    i === 1 ? "text-white/75" : "text-graphite"
                  }`}
                >
                  {tier.desc}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---- Our SEO Recovery Process ----
   Four stations on a horizontal connector, stacking on mobile. ---- */

export function RecoveryProcess() {
  return (
    <section className="overflow-x-clip wash-lilac-full py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <h2 className="max-w-2xl font-heading text-[clamp(1.9rem,3.6vw,2.6rem)] font-bold leading-[1.12] tracking-[-0.02em]">
            Our SEO Recovery <span className="text-indigo">Process</span>
          </h2>
        </Reveal>

        <div className="relative mt-12">
          {/* connector across the four stations on desktop */}
          <span
            aria-hidden
            className="absolute left-[12.5%] right-[12.5%] top-[22px] hidden h-px bg-gradient-to-r from-indigo/15 via-indigo/40 to-indigo/15 lg:block"
          />
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {RECOVERY_PROCESS.steps.map((s, i) => (
              <Reveal key={s.title} delay={i * 90}>
                <div className="group lg:text-center">
                  <span className="relative z-10 inline-grid size-11 place-items-center rounded-full bg-ink font-heading text-[14px] font-bold text-citron shadow-[0_10px_26px_rgba(11,13,18,0.22)] transition-transform duration-300 ease-soft group-hover:scale-110">
                    {i + 1}
                  </span>
                  <h3 className="mt-5 font-heading text-[17px] font-bold tracking-[-0.01em]">
                    {s.title}
                  </h3>
                  <p className="mt-2.5 text-[13.5px] leading-relaxed text-graphite lg:mx-auto lg:max-w-[260px]">
                    {s.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
