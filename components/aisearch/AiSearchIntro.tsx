import Reveal from "@/components/motion/Reveal";
import { CtaLink } from "@/components/ui";
import { AI_JOURNEY, AI_COMPARISON, AI_SERVICES, ROUTES } from "@/lib/ai-search-content";

/* Build Visibility Across AI Search: full-width text + a horizontal buyer
   journey (Research, Compare, Validate, Contact) with platforms below each
   stage. Stages reveal left-to-right on scroll. */

const buildParas = [
  "Search no longer happens within one results page. A buyer may use an AI assistant to build an initial shortlist, read a Google AI Overview for context, return to search to validate the companies they are considering, and visit two or three websites before making contact.",
  "Search Nexio identifies where your brand appears across that journey, where competitors are gaining stronger visibility, and which technical, content or authority gaps are limiting your presence in the moments that shape buying decisions.",
  "The objective is to build measurable visibility across the search and AI experiences that influence discovery, evaluation and demand, not to optimize for one platform in isolation.",
];

export function AiSearchBuildVisibility() {
  return (
    <section className="overflow-x-clip py-16 md:py-24">
      <div className="mx-auto max-w-5xl px-6">
        <Reveal>
          <h2 className="mx-auto max-w-3xl text-center font-heading text-[clamp(1.9rem,3.6vw,2.6rem)] font-bold leading-[1.12] tracking-[-0.02em]">
            Build Visibility Across AI Search
          </h2>
          <div className="mx-auto mt-6 grid max-w-3xl gap-4 text-center">
            {buildParas.map((p, i) => (
              <p key={i} className="text-[15px] leading-relaxed text-graphite">{p}</p>
            ))}
          </div>
        </Reveal>

        {/* horizontal buyer journey */}
        <Reveal delay={80}>
          <div className="relative mt-14">
            {/* connecting line */}
            <span aria-hidden className="absolute left-[8%] right-[8%] top-5 hidden h-px bg-line md:block" />
            <span aria-hidden className="journey-line absolute left-[8%] top-5 hidden h-px w-[84%] origin-left bg-gradient-to-r from-indigo to-indigo/50 md:block" />
            <ol className="grid gap-8 md:grid-cols-4 md:gap-4">
              {AI_JOURNEY.map((s, i) => (
                <li key={s.step} className="reveal-item relative text-center" style={{ transitionDelay: `${i * 100}ms` }}>
                  <span className="relative z-10 mx-auto grid size-10 place-items-center rounded-full bg-indigo text-[13px] font-bold text-white">
                    {i + 1}
                  </span>
                  <p className="mt-4 font-heading text-[16px] font-bold tracking-[-0.01em]">{s.step}</p>
                  <p className="mx-auto mt-2 max-w-[15rem] text-[13px] leading-relaxed text-graphite">{s.desc}</p>
                  <div className="mt-3 flex flex-wrap justify-center gap-1.5">
                    {s.platforms.map((p) => (
                      <span key={p} className="rounded-full border border-line bg-surface px-2 py-0.5 text-[10.5px] font-semibold text-indigo">{p}</span>
                    ))}
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* What AI Search Optimization Means: tight copy + two-column comparison. */
export function AiSearchMeaning() {
  return (
    <section className="overflow-x-clip wash-lilac-full py-16 md:py-24">
      <div className="mx-auto max-w-5xl px-6">
        <Reveal>
          <h2 className="max-w-2xl font-heading text-[clamp(1.9rem,3.6vw,2.6rem)] font-bold leading-[1.12] tracking-[-0.02em]">
            What AI Search Optimization Means
          </h2>
          <p className="mt-6 max-w-2xl text-[15px] leading-relaxed text-graphite">
            AI search optimization improves how search engines and generative platforms discover, interpret, retrieve and reference your brand. It builds on established SEO foundations and extends them to the surfaces where AI systems generate answers, cite sources and recommend providers.
          </p>
        </Reveal>

        <Reveal delay={80}>
          <div className="mt-10 overflow-hidden rounded-3xl border border-line bg-surface">
            <div className="grid grid-cols-2 border-b border-line bg-lilac/40">
              {AI_COMPARISON.cols.map((c, i) => (
                <div key={c} className={`px-5 py-4 font-heading text-[15px] font-bold tracking-[-0.01em] ${i === 1 ? "border-l border-line text-indigo" : ""}`}>{c}</div>
              ))}
            </div>
            {AI_COMPARISON.rows.map((row, ri) => (
              <div key={ri} className="group grid grid-cols-2 border-b border-line transition-colors duration-200 last:border-b-0 hover:bg-ivory/70">
                {row.map((cell, ci) => (
                  <div key={ci} className={`px-5 py-4 text-[13.5px] leading-relaxed ${ci === 1 ? "border-l border-line font-medium text-ink" : "text-graphite"}`}>{cell}</div>
                ))}
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={120}>
          <p className="mt-8 max-w-3xl text-[15px] leading-relaxed text-graphite">
            AI search optimization does not replace SEO. Strong technical foundations, useful content and credible authority remain essential across both traditional and AI-powered search. Our{" "}
            <a href={ROUTES.seo} className="font-semibold text-indigo underline decoration-indigo/30 underline-offset-2">SEO services</a>{" "}
            provide the underlying foundation that makes AI visibility work.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

/* Our AI Search Services: three large cards + one shared CTA below. */
export function AiSearchServices() {
  return (
    <section className="overflow-x-clip py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <div className="max-w-3xl">
            <h2 className="font-heading text-[clamp(1.9rem,3.6vw,2.6rem)] font-bold leading-[1.12] tracking-[-0.02em]">
              Our AI Search Services
            </h2>
            <p className="mt-6 text-[15px] leading-relaxed text-graphite">
              Search Nexio currently offers three focused AI search services. Each addresses a different stage of the visibility journey, from diagnosis to implementation. Together they form a connected program. Separately they address specific gaps.
            </p>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          {AI_SERVICES.map((s, i) => (
            <Reveal key={s.key} variant="up" delay={Math.min(i * 70, 140)}>
              <article className="group flex h-full flex-col rounded-3xl border border-line bg-surface p-7 transition-colors duration-300 ease-soft hover:border-indigo/30">
                <span className="font-heading text-[13px] font-bold tabular-nums text-indigo/70">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="mt-3 font-heading text-[19px] font-bold leading-snug tracking-[-0.01em]">{s.name}</h3>
                <p className="mt-3 text-[13.5px] leading-relaxed text-graphite">{s.outcome}</p>
                <ul className="mt-5 grid flex-1 gap-2.5">
                  {s.bullets.map((b) => (
                    <li key={b} className="flex gap-2.5 text-[13px] leading-relaxed text-ink">
                      <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-indigo" /> {b}
                    </li>
                  ))}
                </ul>
                <a href={s.link.href} className="mt-6 inline-flex items-center gap-1.5 text-[13.5px] font-semibold text-indigo">
                  {s.link.label}
                  <svg width="14" height="14" viewBox="0 0 12 12" fill="none" aria-hidden className="transition-transform duration-200 group-hover:translate-x-0.5"><path d="M2 6h8m0 0L6.5 2.5M10 6l-3.5 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </a>
              </article>
            </Reveal>
          ))}
        </div>

        {/* one shared CTA + small contextual line */}
        <Reveal delay={100}>
          <div className="mt-10 rounded-2xl border border-dashed border-indigo/25 bg-lilac/30 px-6 py-5 text-center">
            <p className="text-[14px] text-graphite">
              Not sure where to start? The AI Visibility Audit gives you the baseline before any implementation begins.
            </p>
            <div className="mt-4 flex justify-center">
              <CtaLink href={ROUTES.audit}>Request an AI Visibility Review</CtaLink>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
