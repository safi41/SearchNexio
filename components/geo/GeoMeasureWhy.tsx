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
export function GeoEngagements() {
  return (
    <section className="overflow-x-clip py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <h2 className="max-w-2xl font-heading text-[clamp(1.9rem,3.6vw,2.6rem)] font-bold leading-[1.12] tracking-[-0.02em]">
            GEO engagement options
          </h2>
          <p className="mt-6 max-w-2xl text-[15px] leading-relaxed text-graphite">
            An AI Visibility Audit is the recommended starting point when no reliable benchmark exists.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          {ENGAGEMENTS.map((e, i) => (
            <Reveal key={e.title} variant="up" delay={Math.min(i * 60, 120)}>
              <article className="flex h-full flex-col rounded-2xl border border-line bg-surface p-7">
                <span className="font-heading text-[13px] font-bold tabular-nums text-indigo/70">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="mt-3 font-heading text-[18px] font-bold tracking-[-0.01em]">{e.title}</h3>
                <p className="mt-3 text-[13.5px] leading-relaxed text-graphite">{e.desc}</p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={80}>
          <div className="mt-10 flex justify-center">
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
