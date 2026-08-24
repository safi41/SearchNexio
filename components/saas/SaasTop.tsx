"use client";

import Reveal from "@/components/motion/Reveal";
import { CtaLink } from "@/components/ui";
import {
  SAAS_HERO,
  SAAS_RESULTS,
  SAAS_BUILT_FOR,
  SAAS_FAILS,
} from "@/lib/saas-seo-content";

/* Site-wide orbit speed, matching every other hero diagram. */
const ORBIT_SPEED = "48s";

/* Glyphs for the hero chips and the orbit nodes. Line icons on the house
   1.7 stroke, so they read the same weight as the other industry pages. */
const HERO_ICONS: Record<string, React.ReactNode> = {
  target: (
    <>
      <circle cx="12" cy="12" r="8.4" />
      <circle cx="12" cy="12" r="4.4" />
      <circle cx="12" cy="12" r="1" fill="currentColor" stroke="none" />
    </>
  ),
  layers: (
    <>
      <path d="m12 3.6 8 4.2-8 4.2-8-4.2Z" />
      <path d="m4.4 12.4 7.6 4 7.6-4" />
      <path d="m4.4 16.6 7.6 4 7.6-4" />
    </>
  ),
  sparkle: (
    <path d="M12 3.2c.5 4.6 4.2 8.3 8.8 8.8-4.6.5-8.3 4.2-8.8 8.8-.5-4.6-4.2-8.3-8.8-8.8 4.6-.5 8.3-4.2 8.8-8.8Z" />
  ),
  funnel: (
    <>
      <path d="M3.8 4.6h16.4l-6.4 7.6v6.2l-3.6 2.2v-8.4Z" />
    </>
  ),
  search: (
    <>
      <circle cx="10.8" cy="10.8" r="6.4" />
      <path d="m15.6 15.6 4 4" />
    </>
  ),
  cube: (
    <>
      <path d="M12 3.4 20 7.6v8.8L12 20.6 4 16.4V7.6Z" />
      <path d="M4 7.6l8 4.2 8-4.2M12 11.8v8.8" />
    </>
  ),
  scale: (
    <>
      <path d="M12 4.2v15.6M6 7.2h12" />
      <path d="M6 7.2 3.4 13h5.2Z" />
      <path d="M18 7.2 15.4 13h5.2Z" />
    </>
  ),
  check: (
    <>
      <circle cx="12" cy="12" r="8.4" />
      <path d="m8.4 12.2 2.6 2.6 4.8-5" />
    </>
  ),
};

/* ---- Hero orbit: the SaaS buyer journey ----
   Five nodes, 72 degrees apart on the solid ring. Positions are
   50% + 38% * (cos, sin) of the angle, starting at the top. The whole
   node layer revolves; each chip counter-spins so its icon stays upright,
   which is the same construction used on every other hero. */
function JourneyLoop() {
  const spots = [
    "left-1/2 top-[12%] -translate-x-1/2 -translate-y-1/2",
    "left-[86.1%] top-[38.3%] -translate-x-1/2 -translate-y-1/2",
    "left-[72.3%] top-[80.7%] -translate-x-1/2 -translate-y-1/2",
    "left-[27.7%] top-[80.7%] -translate-x-1/2 -translate-y-1/2",
    "left-[13.9%] top-[38.3%] -translate-x-1/2 -translate-y-1/2",
  ];

  return (
    <div className="relative mx-auto aspect-square w-full max-w-[420px] lg:max-w-[540px]">
      {/* dashed outer ring */}
      <div aria-hidden className="absolute inset-[2%] rounded-full border border-dashed border-indigo/25" />

      {/* solid orbit ring the nodes travel on */}
      <div aria-hidden className="absolute inset-[12%] rounded-full border border-indigo/40" />

      {/* core: the pipeline funnel every stage of the journey feeds */}
      <div className="absolute left-1/2 top-1/2 grid size-[42%] -translate-x-1/2 -translate-y-1/2 place-items-center">
        <span aria-hidden className="absolute inset-[-14%] rounded-full bg-indigo/10 blur-2xl" />
        <span className="relative grid size-full place-items-center rounded-full bg-surface shadow-[0_24px_60px_rgba(99,91,255,0.18)]">
          <svg width="46%" height="46%" viewBox="0 0 48 46" fill="none" aria-hidden>
            {/* the funnel: broad search demand narrowing to qualified pipeline */}
            <path
              d="M4 5.4h40L28.2 24v13.4L19.8 42.4V24Z"
              stroke="var(--color-indigo)"
              strokeWidth="2.6"
              strokeLinejoin="round"
              fill="none"
            />
            {/* intake marks across the mouth: many searches enter */}
            <path
              d="M13 12.6h22M18 18.4h12"
              stroke="var(--color-indigo)"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeOpacity="0.45"
            />
            {/* the qualified outcome leaving the stem */}
            <circle cx="24" cy="30" r="3.4" fill="var(--color-indigo)" />
          </svg>
        </span>
      </div>

      {/* five journey nodes; the layer revolves, each chip counter-spins so
          its icon stays upright. Names stay as tooltips and labels. */}
      <div
        className="animate-orbit absolute inset-0"
        style={{ animationDuration: ORBIT_SPEED }}
      >
        {SAAS_HERO.orbit.map((n, i) => (
          <div key={n.title} className={`absolute ${spots[i]}`}>
            <span
              title={`${n.title} ${n.sub}`}
              aria-label={`${n.title} ${n.sub}`}
              className="animate-orbit grid size-[84px] place-items-center rounded-full bg-surface shadow-[0_14px_36px_rgba(99,91,255,0.18)]"
              style={{ animationDuration: ORBIT_SPEED, animationDirection: "reverse" }}
            >
              <svg
                width="34"
                height="34"
                viewBox="0 0 24 24"
                fill="none"
                stroke="var(--color-indigo)"
                strokeWidth="1.7"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden
              >
                {HERO_ICONS[n.icon]}
              </svg>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function SaasHero() {
  const [before, accent, after] = splitAccent(SAAS_HERO.title, SAAS_HERO.accent);

  return (
    <section className="relative overflow-x-clip pt-[136px]">
      <div aria-hidden className="wash-lilac absolute inset-x-0 top-0 h-[680px]" />
      <div
        aria-hidden
        className="grid-pattern absolute left-1/2 top-24 h-[440px] w-[760px] -translate-x-1/2 [mask-image:radial-gradient(ellipse_70%_70%_at_50%_40%,#000_35%,transparent_75%)]"
      />

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-6 pb-20 lg:grid-cols-[1.02fr_0.98fr] lg:gap-10 lg:pb-28">
        <div>
          <Reveal>
            <span className="inline-flex items-center gap-2.5 rounded-full border border-indigo/20 bg-surface/80 px-4 py-2 text-[12.5px] font-bold uppercase tracking-[0.1em] text-indigo shadow-[0_2px_12px_rgba(99,91,255,0.08)]">
              <span className="grid size-5 place-items-center rounded-full border border-indigo/30">
                <svg width="10" height="10" viewBox="0 0 24 24" aria-hidden>
                  <path
                    d="M12 2c.4 5 5 9.6 10 10-5 .4-9.6 5-10 10-.4-5-5-9.6-10-10 5-.4 9.6-5 10-10Z"
                    fill="currentColor"
                  />
                </svg>
              </span>
              {SAAS_HERO.eyebrow}
            </span>
          </Reveal>

          <Reveal delay={60} duration={600}>
            <h1 className="mt-6 font-heading text-[clamp(2.4rem,5vw,3.7rem)] font-bold leading-[1.06] tracking-[-0.03em]">
              {before}
              <span className="text-indigo">{accent}</span>
              {after}
            </h1>
          </Reveal>

          <Reveal delay={120} duration={600}>
            <p className="mt-6 max-w-xl text-[16px] leading-relaxed text-graphite">
              {SAAS_HERO.intro}
            </p>
          </Reveal>

          <Reveal delay={180} duration={600}>
            <div className="mt-9 flex flex-wrap items-center gap-3.5">
              <CtaLink href={SAAS_HERO.primaryCta.href}>
                {SAAS_HERO.primaryCta.label}
              </CtaLink>
              <CtaLink href={SAAS_HERO.secondaryCta.href} variant="ghost">
                {SAAS_HERO.secondaryCta.label}
              </CtaLink>
            </div>
          </Reveal>
        </div>

        <Reveal variant="scale" delay={120} duration={800}>
          <JourneyLoop />
        </Reveal>
      </div>

      {/* hero chips: the four commitments the page copy stands behind */}
      <div className="relative mx-auto max-w-7xl px-6 pb-16 lg:pb-24">
        <Reveal delay={80}>
          <div className="grid gap-px overflow-hidden rounded-3xl border border-line bg-line/70 sm:grid-cols-2 lg:grid-cols-4">
            {SAAS_HERO.chips.map((c) => (
              <div
                key={c.title}
                className="group flex items-center gap-4 bg-surface px-6 py-6 transition-colors duration-300 ease-soft hover:bg-ivory/60"
              >
                <span className="grid size-11 shrink-0 place-items-center rounded-2xl bg-gradient-to-b from-lilac to-lilac/40 text-indigo transition-transform duration-300 ease-soft group-hover:scale-110">
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
                  >
                    {HERO_ICONS[c.icon]}
                  </svg>
                </span>
                <span className="min-w-0">
                  <span className="block font-heading text-[14.5px] font-bold leading-tight tracking-[-0.01em] transition-colors duration-300 group-hover:text-indigo">
                    {c.title}
                  </span>
                  <span className="mt-1 block text-[13px] text-graphite">{c.sub}</span>
                </span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* Splits a title so one phrase can carry the indigo accent, matching the
   heading treatment used across the site. */
function splitAccent(title: string, accent: string): [string, string, string] {
  const i = title.indexOf(accent);
  if (i < 0) return [title, "", ""];
  return [title.slice(0, i), accent, title.slice(i + accent.length)];
}

/* ---- B2B SaaS SEO Results ----
   Proof placement the PDF asks for, held open until verified metrics are
   supplied. The measures are named as labels only: no figures exist yet,
   and none may be invented. */
export function SaasResults() {
  return (
    <section id="saas-results" className="relative overflow-x-clip wash-lilac-full border-t border-line py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
          <Reveal variant="left">
            <div>
              <span className="inline-flex rounded-full border border-line bg-surface px-3.5 py-1.5 text-[11.5px] font-bold uppercase tracking-[0.12em] text-indigo">
                {SAAS_RESULTS.badge}
              </span>
              <h2 className="mt-5 font-heading text-[clamp(1.9rem,3.6vw,2.6rem)] font-bold leading-[1.12] tracking-[-0.02em]">
                B2B SaaS SEO{" "}
                <span className="text-indigo">{SAAS_RESULTS.accent}</span>
              </h2>
              <p className="mt-5 text-[15.5px] leading-relaxed text-graphite">
                {SAAS_RESULTS.lead}
              </p>
              <p className="mt-4 text-[15.5px] leading-relaxed text-graphite">
                {SAAS_RESULTS.body}
              </p>
            </div>
          </Reveal>

          <Reveal variant="right" delay={80}>
            <div className="rounded-3xl border border-line bg-surface p-8 shadow-[0_10px_30px_rgba(11,13,18,0.05)]">
              <span className="text-[11.5px] font-bold uppercase tracking-[0.12em] text-graphite">
                {SAAS_RESULTS.snapshot.label}
              </span>
              <p className="mt-4 font-heading text-[19px] font-bold leading-snug tracking-[-0.01em]">
                {SAAS_RESULTS.snapshot.heading}
              </p>
              <p className="mt-3 text-[14.5px] leading-relaxed text-graphite">
                {SAAS_RESULTS.snapshot.body}
              </p>

              <div className="mt-7 border-t border-line pt-6">
                <span className="text-[11.5px] font-bold uppercase tracking-[0.12em] text-graphite">
                  What we report on
                </span>
                <ul className="mt-4 grid gap-2.5 sm:grid-cols-2">
                  {SAAS_RESULTS.measures.map((m) => (
                    <li key={m} className="flex items-start gap-2.5 text-[14px] text-ink/80">
                      <span className="mt-[7px] size-1.5 shrink-0 rounded-full bg-indigo" />
                      {m}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ---- SEO Built for B2B SaaS Growth ----
   Two-column essay with the named page types pulled out as a visual list,
   so the section reads as an argument rather than a wall of prose. */
export function SaasBuiltFor() {
  return (
    <section className="relative overflow-x-clip border-t border-line py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <span className="inline-flex rounded-full border border-line bg-surface px-3.5 py-1.5 text-[11.5px] font-bold uppercase tracking-[0.12em] text-indigo">
            {SAAS_BUILT_FOR.badge}
          </span>
          <h2 className="mt-5 max-w-2xl font-heading text-[clamp(1.9rem,3.6vw,2.6rem)] font-bold leading-[1.12] tracking-[-0.02em]">
            SEO Built for B2B{" "}
            <span className="text-indigo">{SAAS_BUILT_FOR.accent}</span>
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <Reveal variant="left" delay={60}>
            <div className="grid gap-5">
              {SAAS_BUILT_FOR.paras.map((p) => (
                <p key={p.slice(0, 30)} className="text-[15.5px] leading-relaxed text-graphite">
                  {p}
                </p>
              ))}
            </div>
          </Reveal>

          <Reveal variant="right" delay={120}>
            <div className="rounded-3xl border border-line bg-ivory/50 p-8">
              <span className="text-[11.5px] font-bold uppercase tracking-[0.12em] text-graphite">
                Where the opportunity sits
              </span>
              <ul className="mt-5 grid gap-px overflow-hidden rounded-2xl border border-line bg-line/70">
                {SAAS_BUILT_FOR.pageTypes.map((t, i) => (
                  <li
                    key={t}
                    className="group flex items-center gap-4 bg-surface px-5 py-4 transition-colors duration-300 ease-soft hover:bg-ivory/70"
                  >
                    <span className="font-heading text-[12px] font-bold tabular-nums text-indigo/40 transition-colors duration-300 group-hover:text-indigo">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="font-heading text-[15px] font-bold tracking-[-0.01em] transition-colors duration-300 group-hover:text-indigo">
                      {t}
                    </span>
                    <span className="ml-auto h-0.5 w-5 rounded-full bg-indigo/30 transition-all duration-300 ease-soft group-hover:w-9 group-hover:bg-indigo" />
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ---- Why SaaS SEO Fails to Generate Pipeline ----
   Five failure modes as a numbered ledger. Borderless rows that fill on
   hover, so the section reads as diagnosis rather than a card grid. */
export function SaasFails() {
  return (
    <section className="relative overflow-x-clip bg-ivory border-t border-line py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <span className="inline-flex rounded-full border border-line bg-surface px-3.5 py-1.5 text-[11.5px] font-bold uppercase tracking-[0.12em] text-indigo">
            {SAAS_FAILS.badge}
          </span>
          <h2 className="mt-5 max-w-2xl font-heading text-[clamp(1.9rem,3.6vw,2.6rem)] font-bold leading-[1.12] tracking-[-0.02em]">
            Why SaaS SEO{" "}
            <span className="text-indigo">{SAAS_FAILS.accent}</span> to Generate
            Pipeline
          </h2>
          <p className="mt-5 max-w-2xl text-[15.5px] leading-relaxed text-graphite">
            {SAAS_FAILS.intro}
          </p>
        </Reveal>

        <div className="mt-12 overflow-hidden rounded-3xl border border-line bg-surface">
          {SAAS_FAILS.items.map((it, i) => (
            <Reveal key={it.title} delay={i * 60}>
              <div className="group grid gap-3 border-b border-line px-6 py-7 transition-colors duration-300 ease-soft last:border-b-0 hover:bg-ivory/60 lg:grid-cols-[56px_0.8fr_1.2fr] lg:items-start lg:gap-8 lg:px-8">
                <span className="font-heading text-[13px] font-bold tabular-nums text-indigo/40 transition-colors duration-300 group-hover:text-indigo">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-heading text-[17px] font-bold leading-snug tracking-[-0.01em] transition-colors duration-300 group-hover:text-indigo">
                  {it.title}
                </h3>
                <p className="text-[14.5px] leading-relaxed text-graphite">
                  {it.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
