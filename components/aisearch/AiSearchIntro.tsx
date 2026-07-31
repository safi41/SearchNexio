import Reveal from "@/components/motion/Reveal";
import { CtaLink } from "@/components/ui";
import { AI_JOURNEY, AI_COMPARISON, AI_SERVICES, ROUTES } from "@/lib/ai-search-content";
import { GoogleG, GeminiMark, PerplexityKnot } from "@/components/brand-icons";

/* Platform logos for the journey chips. ChatGPT is the ink knot, Website a
   small indigo globe. */
const PLATFORM_ICONS: Record<string, React.ReactNode> = {
  "Google AI": <GoogleG size={15} />,
  Gemini: <GeminiMark size={15} />,
  Perplexity: <PerplexityKnot size={15} />,
  ChatGPT: (
    <svg width="15" height="15" viewBox="0 0 24 24" aria-hidden>
      <g stroke="#0B0D12" strokeWidth="1.9" strokeLinecap="round" fill="none">
        <path d="M12 4.2v15.6" />
        <path d="M5.2 8.1l13.6 7.8" />
        <path d="M18.8 8.1 5.2 15.9" />
        <circle cx="12" cy="12" r="7.8" />
      </g>
    </svg>
  ),
  Website: (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="var(--color-indigo)" strokeWidth="1.7" strokeLinecap="round" aria-hidden>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M3.5 12h17M12 3.5c2.6 2.4 4 5.3 4 8.5s-1.4 6.1-4 8.5c-2.6-2.4-4-5.3-4-8.5s1.4-6.1 4-8.5Z" />
    </svg>
  ),
};

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
                      <span
                        key={p}
                        title={p}
                        aria-label={p}
                        className="grid size-7 place-items-center rounded-full border border-line bg-surface"
                      >
                        {PLATFORM_ICONS[p] ?? (
                          <span className="text-[10.5px] font-semibold text-indigo">{p}</span>
                        )}
                      </span>
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

/* Our AI Search Services: an editorial index list. Each service is a
   full-width hairline row — oversized ghost number, title + link, outcome
   with dash-led capabilities, and a circular arrow that fills on hover. */
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

        <div className="mt-12">
          {AI_SERVICES.map((s, i) => (
            <Reveal key={s.key} variant="up" delay={Math.min(i * 80, 160)}>
              <a
                href={s.link.href}
                className="group grid gap-5 border-t border-line py-9 transition-colors duration-300 ease-soft last:border-b hover:bg-lilac/20 lg:grid-cols-[110px_1.05fr_1fr_72px] lg:items-start lg:gap-8"
              >
                <span
                  aria-hidden
                  className="font-heading text-[42px] font-bold leading-none tracking-[-0.02em] text-indigo/20 transition-colors duration-300 group-hover:text-indigo/50"
                >
                  {String(i + 1).padStart(2, "0")}
                </span>

                <div>
                  <h3 className="font-heading text-[clamp(1.25rem,2.1vw,1.6rem)] font-bold leading-snug tracking-[-0.015em] transition-colors duration-300 group-hover:text-indigo">
                    {s.name}
                  </h3>
                  <span className="mt-3 inline-flex items-center gap-1.5 text-[13.5px] font-semibold text-indigo">
                    {s.link.label}
                    <svg width="14" height="14" viewBox="0 0 12 12" fill="none" aria-hidden className="transition-transform duration-200 group-hover:translate-x-0.5">
                      <path d="M2 6h8m0 0L6.5 2.5M10 6l-3.5 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </div>

                <div>
                  <p className="text-[14px] leading-relaxed text-graphite">{s.outcome}</p>
                  <ul className="mt-4 grid gap-2">
                    {s.bullets.map((b) => (
                      <li key={b} className="flex items-center gap-3 text-[13px] leading-relaxed text-ink">
                        <span aria-hidden className="h-px w-5 shrink-0 bg-indigo/50" />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>

                <span
                  aria-hidden
                  className="hidden size-12 place-items-center justify-self-end rounded-full border border-line text-ink transition-all duration-300 ease-soft group-hover:border-indigo group-hover:bg-indigo group-hover:text-white lg:grid"
                >
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M4 12 12 4m0 0H5.5M12 4v6.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </a>
            </Reveal>
          ))}
        </div>

        {/* shared CTA strip */}
        <Reveal delay={100}>
          <div className="mt-10 flex flex-wrap items-center justify-between gap-6">
            <p className="text-[14.5px] text-graphite">
              Not sure where to start? The AI Visibility Audit gives you the baseline before any implementation begins.
            </p>
            <CtaLink href={ROUTES.audit}>Request an AI Visibility Review</CtaLink>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
