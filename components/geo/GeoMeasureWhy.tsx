import Reveal from "@/components/motion/Reveal";
import { METRICS, WHY_GEO, GEO_INDUSTRIES, ENGAGEMENTS, LIMITATIONS } from "@/lib/geo-content";
import { CtaLink } from "@/components/ui";

/* Measurement, why-choose, industries, engagement options and limitations —
   the card-grid sections between the process and the FAQ. */

/* ---- How we measure GEO ---- */
export function GeoMeasure() {
  return (
    <section className="overflow-x-clip wash-lilac-full py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <h2 className="max-w-2xl font-heading text-[clamp(1.9rem,3.6vw,2.6rem)] font-bold leading-[1.12] tracking-[-0.02em]">
            How we measure GEO
          </h2>
          <p className="mt-6 max-w-2xl text-[15px] leading-relaxed text-graphite">
            GEO performance cannot be represented by one permanent ranking. Search Nexio uses structured prompt groups, repeated testing and platform-specific reporting to measure directional performance.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {METRICS.map((m, i) => (
            <Reveal key={m.title} variant="up" delay={Math.min((i % 3) * 60, 120)}>
              <article className="flex h-full flex-col rounded-2xl border border-line bg-surface p-6">
                <span className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.12em] text-indigo">
                  <span className="size-1.5 rounded-full bg-indigo" /> Metric
                </span>
                <h3 className="mt-3 font-heading text-[16.5px] font-bold tracking-[-0.01em]">{m.title}</h3>
                <p className="mt-2 text-[13.5px] leading-relaxed text-graphite">{m.desc}</p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={80}>
          <p className="mt-8 rounded-2xl border border-dashed border-graphite/30 bg-surface/50 px-5 py-4 text-[13px] leading-relaxed text-graphite">
            <span className="font-semibold text-ink">Measurement note.</span> Reports document the prompt sample, platform mix, testing frequency and attribution limits. A single AI response is never presented as a permanent result.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

/* ---- Why choose Search Nexio ---- */
export function GeoWhyChoose() {
  return (
    <section className="overflow-x-clip py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <h2 className="font-heading text-[clamp(1.9rem,3.6vw,2.6rem)] font-bold leading-[1.12] tracking-[-0.02em]">
            Why choose Search Nexio
          </h2>
        </Reveal>

        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {WHY_GEO.map((w, i) => (
            <Reveal key={w.title} variant="up" delay={Math.min((i % 3) * 60, 120)} className={i === 4 ? "lg:col-span-1" : ""}>
              <article className="flex h-full flex-col rounded-2xl border border-line bg-surface p-6">
                <h3 className="font-heading text-[16.5px] font-bold tracking-[-0.01em]">{w.title}</h3>
                <p className="mt-2.5 text-[13.5px] leading-relaxed text-graphite">{w.desc}</p>
              </article>
            </Reveal>
          ))}
          {/* collaboration diagram card */}
          <Reveal variant="up" delay={120}>
            <article className="flex h-full flex-col justify-center rounded-2xl border border-indigo/25 bg-lilac/40 p-6">
              <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-indigo">Collaboration</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {["SEO", "Content", "Development", "PR", "Analytics", "Compliance"].map((t) => (
                  <span key={t} className="rounded-full border border-line bg-surface px-2.5 py-1 text-[11.5px] font-semibold text-ink">{t}</span>
                ))}
              </div>
              <p className="mt-4 text-[13px] leading-relaxed text-graphite">
                Review the company background and search experience on{" "}
                <span className="font-semibold text-indigo underline decoration-indigo/30 underline-offset-2">About Search Nexio</span>.
              </p>
            </article>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ---- Built for complex buying journeys (industries) ---- */
export function GeoIndustries() {
  return (
    <section className="overflow-x-clip wash-lilac-full py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <h2 className="font-heading text-[clamp(1.9rem,3.6vw,2.6rem)] font-bold leading-[1.12] tracking-[-0.02em]">
            Built for complex buying journeys
          </h2>
        </Reveal>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {GEO_INDUSTRIES.map((ind, i) => (
            <Reveal key={ind.name} variant="up" delay={Math.min((i % 3) * 60, 120)}>
              <article className="group flex h-full flex-col rounded-2xl border border-line bg-surface p-6 transition-colors duration-300 ease-soft hover:border-indigo/30">
                <h3 className="font-heading text-[17px] font-bold tracking-[-0.01em]">{ind.name}</h3>
                <p className="mt-2 flex-1 text-[13.5px] leading-relaxed text-graphite">{ind.desc}</p>
                {/* the example prompt reveals on hover/tap */}
                <div className="mt-4 overflow-hidden rounded-xl border border-line bg-ivory/50 px-3 py-2.5 opacity-70 transition-opacity duration-300 group-hover:opacity-100">
                  <p className="text-[10.5px] font-semibold uppercase tracking-[0.1em] text-graphite">Example prompt</p>
                  <p className="mt-1 text-[12.5px] font-medium text-indigo">&ldquo;{ind.prompt}&rdquo;</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---- Engagement options ---- */

/* Node icons for the three engagement milestones. */
const ENGAGE_ICONS = [
  /* clipboard check */
  <g key="e1">
    <rect x="5" y="4.5" width="14" height="16.5" rx="2.5" />
    <path d="M9.5 4.5V3h5v1.5" />
    <path d="M8.7 13.6l2.3 2.3 4.3-4.8" />
  </g>,
  /* growth chart */
  <g key="e2">
    <path d="M4.5 20h15" />
    <path d="M6.5 20v-5M11 20V11m4.5 9v-6.5" />
    <path d="M6.5 11.5 12 6.5l2.5 2.5 4-4" />
    <path d="M15 5h3.5V8.5" />
  </g>,
  /* stakeholder team */
  <g key="e3">
    <circle cx="12" cy="7.2" r="2.6" />
    <circle cx="5.8" cy="9.4" r="2.1" />
    <circle cx="18.2" cy="9.4" r="2.1" />
    <path d="M7.5 19.5c.4-3 2.2-4.8 4.5-4.8s4.1 1.8 4.5 4.8" />
    <path d="M2.5 16.8c.3-2.2 1.6-3.6 3.3-3.6.7 0 1.4.2 1.9.7M21.5 16.8c-.3-2.2-1.6-3.6-3.3-3.6-.7 0-1.4.2-1.9.7" />
  </g>,
];

/* Right-hand decor: dotted map suggestion, orbit rings and floating tiles. */
function EngageDecor() {
  return (
    <div aria-hidden className="relative hidden h-[290px] select-none lg:block">
      {/* dotted continents suggestion */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(var(--wm-stroke) 1.6px, transparent 1.6px)",
          backgroundSize: "13px 13px",
          maskImage:
            "radial-gradient(150px 95px at 18% 38%, #000 55%, transparent 78%), radial-gradient(120px 70px at 48% 22%, #000 55%, transparent 78%), radial-gradient(95px 120px at 40% 72%, #000 50%, transparent 78%), radial-gradient(150px 100px at 78% 42%, #000 55%, transparent 78%), radial-gradient(80px 60px at 92% 78%, #000 50%, transparent 78%)",
          WebkitMaskImage:
            "radial-gradient(150px 95px at 18% 38%, #000 55%, transparent 78%), radial-gradient(120px 70px at 48% 22%, #000 55%, transparent 78%), radial-gradient(95px 120px at 40% 72%, #000 50%, transparent 78%), radial-gradient(150px 100px at 78% 42%, #000 55%, transparent 78%), radial-gradient(80px 60px at 92% 78%, #000 50%, transparent 78%)",
        }}
      />
      {/* orbit rings with a glowing citron core */}
      <div className="absolute right-[22%] top-[34%] size-44 rounded-full border border-citron-deep/40" />
      <div className="absolute right-[16%] top-[22%] size-64 rounded-full border border-citron-deep/25" />
      <div className="absolute right-[33%] top-[52%] grid size-16 place-items-center rounded-full bg-citron/30">
        <span className="size-3.5 rounded-full bg-citron-deep" />
      </div>
      {/* floating icon tiles */}
      <div className="animate-bob absolute right-[8%] top-0 grid size-16 place-items-center rounded-2xl bg-surface shadow-[0_16px_40px_rgba(11,13,18,0.12)]">
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="var(--color-citron-deep)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4.5 20h15" />
          <path d="M6.5 20v-4M10.5 20v-7M14.5 20v-4.5M18.5 20V9" />
          <path d="M6.5 12 12 7.5l2.5 2L18.5 6" />
        </svg>
      </div>
      <div className="animate-bob absolute left-[30%] top-[30%] grid size-14 place-items-center rounded-2xl bg-surface shadow-[0_16px_40px_rgba(11,13,18,0.12)]" style={{ animationDelay: "1.4s" }}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
          <circle cx="12" cy="12" r="8" />
          <path d="M4 12h16M12 4c2.5 2.3 3.8 5 3.8 8S14.5 17.7 12 20c-2.5-2.3-3.8-5-3.8-8S9.5 6.3 12 4Z" />
        </svg>
      </div>
      <div className="animate-bob absolute bottom-2 right-[4%] grid size-14 place-items-center rounded-2xl bg-surface shadow-[0_16px_40px_rgba(11,13,18,0.12)]" style={{ animationDelay: "2.6s" }}>
        <svg width="23" height="23" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
          <circle cx="11" cy="11" r="6.5" />
          <path d="M15.8 15.8 20 20" />
        </svg>
      </div>
      {/* scattered accent dots */}
      <span className="absolute left-[18%] top-[8%] size-1.5 rounded-full bg-citron-deep" />
      <span className="absolute left-[48%] bottom-[16%] size-1.5 rounded-full bg-citron-deep" />
      <span className="absolute right-[2%] top-[38%] size-1.5 rounded-full bg-citron-deep/70" />
    </div>
  );
}

export function GeoEngagements() {
  return (
    <section className="overflow-x-clip py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        {/* header: copy left, dotted-map decor right */}
        <div className="grid items-center gap-10 lg:grid-cols-[1fr_0.9fr]">
          <Reveal variant="left">
            <span className="inline-flex items-center gap-2 rounded-full bg-citron px-4 py-2 text-[12px] font-bold uppercase tracking-[0.08em] text-ink-solid">
              <svg width="13" height="13" viewBox="0 0 24 24" aria-hidden>
                <path d="M12 2c.4 5 5 9.6 10 10-5 .4-9.6 5-10 10-.4-5-5-9.6-10-10 5-.4 9.6-5 10-10Z" fill="currentColor" />
              </svg>
              GEO engagement options
            </span>
            <h2 className="mt-6 font-heading text-[clamp(2.4rem,5vw,4rem)] font-bold leading-[1.02] tracking-[-0.03em]">
              GEO engagement
              <br />
              <span className="text-citron-deep">options.</span>
            </h2>
            <p className="mt-6 max-w-md text-[16px] leading-relaxed text-graphite">
              An AI Visibility Audit is the recommended starting point when no reliable benchmark exists.
            </p>
          </Reveal>
          <EngageDecor />
        </div>

        {/* timeline: three milestone nodes on a drawn connector line */}
        <div className="relative mt-14">
          <Reveal className="absolute inset-x-8 top-11 hidden lg:block" duration={500}>
            <div className="relative">
              <span className="trend-bar block h-0.5 bg-citron-deep/60" style={{ "--bar-delay": "200ms" } as React.CSSProperties} />
              <span className="absolute left-1/3 top-1/2 size-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-citron-deep" />
              <span className="absolute left-2/3 top-1/2 grid size-3.5 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-ink">
                <span className="size-1.5 rounded-full bg-citron" />
              </span>
            </div>
          </Reveal>

          <div className="grid gap-12 lg:grid-cols-3 lg:gap-10">
            {ENGAGEMENTS.map((e, i) => (
              <Reveal key={e.title} variant="up" delay={Math.min(i * 100, 200)}>
                <div className="relative flex justify-center lg:justify-center">
                  <span className="grid size-[88px] place-items-center rounded-full border border-citron-deep/30 bg-surface text-ink shadow-[0_14px_34px_rgba(11,13,18,0.08)]">
                    <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                      {ENGAGE_ICONS[i]}
                    </svg>
                  </span>
                </div>
                <p className="mt-6 font-heading text-[46px] font-extrabold leading-none tracking-[-0.02em]">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <span className="mt-3 block h-1 w-10 rounded-full bg-citron-deep" />
                <h3 className="mt-4 font-heading text-[19px] font-bold tracking-[-0.01em]">{e.title}</h3>
                <p className="mt-3 text-[14px] leading-relaxed text-graphite">{e.desc}</p>
              </Reveal>
            ))}
          </div>
        </div>

        {/* script note + arrow pointing at the CTA */}
        <Reveal delay={80}>
          <div className="mt-14 flex flex-wrap items-center justify-center gap-5">
            <span
              className="rotate-[-6deg] text-center text-[24px] leading-[1.05] text-ink"
              style={{ fontFamily: "var(--font-script)" }}
            >
              Let&apos;s build your
              <br />
              GEO strategy
            </span>
            <svg width="52" height="34" viewBox="0 0 52 34" fill="none" aria-hidden className="-mt-4">
              <path d="M3 6c14-6 32-4 42 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              <path d="M38 22l7 4 1-8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <CtaLink href="#visibility-audit">Discuss your GEO strategy</CtaLink>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---- What GEO cannot guarantee (limitations) ---- */
export function GeoLimitations() {
  return (
    <section className="overflow-x-clip wash-lilac-full py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <Reveal variant="left">
            <h2 className="font-heading text-[clamp(1.9rem,3.6vw,2.6rem)] font-bold leading-[1.12] tracking-[-0.02em]">
              What GEO cannot guarantee
            </h2>
            <p className="mt-6 text-[15px] leading-relaxed text-graphite">
              No agency controls the answers generated by ChatGPT, Gemini, Perplexity, Claude, Copilot or Google. GEO can improve the content, technical and authority conditions supporting visibility, but it cannot guarantee a citation, recommendation or permanent position for a specific prompt.
            </p>
            <p className="mt-4 text-[15px] leading-relaxed text-graphite">
              Search Nexio reports what changed, what can be measured and where uncertainty remains.
            </p>
          </Reveal>

          <Reveal variant="right" delay={80}>
            <ul className="grid gap-3">
              {LIMITATIONS.map((l) => (
                <li key={l} className="flex gap-3 rounded-2xl border border-line bg-surface px-5 py-4 text-[13.5px] leading-relaxed text-ink">
                  <span aria-hidden className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-warn/10 text-warn">
                    <svg width="11" height="11" viewBox="0 0 12 12" fill="none"><path d="M6 1.5v5M6 9v.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" /></svg>
                  </span>
                  {l}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
