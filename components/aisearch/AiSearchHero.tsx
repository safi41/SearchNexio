import Reveal from "@/components/motion/Reveal";
import { Badge, CtaLink } from "@/components/ui";
import { AISEARCH_HERO } from "@/lib/ai-search-content";
import { GoogleG, ChatGPTMark, GeminiMark, PerplexityMark } from "@/components/brand-icons";

/* Hero: two columns. Left has eyebrow, H1, subtext, dual CTAs and a trust
   strip. Right is a restrained dashboard showing the four platforms, tracked
   prompt groups with citation status, and a faint search-flow line linking
   the platforms. Motion stays subtle and reduced-motion safe. */

function ScopeDashboard() {
  const platforms = [
    { icon: <GoogleG size={16} />, name: "Google AI", cited: true },
    { icon: <ChatGPTMark size={16} />, name: "ChatGPT", cited: true },
    { icon: <GeminiMark size={16} />, name: "Gemini", cited: false },
    { icon: <PerplexityMark size={16} />, name: "Perplexity", cited: true },
  ];
  return (
    <div className="relative">
      {/* faint search-flow rings behind the panel (below 30% opacity) */}
      <div aria-hidden className="pointer-events-none absolute inset-0 grid place-items-center">
        <span className="animate-orbit-slow absolute size-[420px] rounded-full border border-indigo/10" style={{ animationDuration: "44s" }} />
        <span className="absolute size-80 rounded-full border border-indigo/10" />
        <span className="absolute size-64 rounded-full bg-indigo/5 blur-3xl" />
      </div>

      <div className="relative rounded-3xl border border-line bg-surface p-5 shadow-[0_20px_50px_rgba(11,13,18,0.08)]">
        <div className="flex items-center justify-between border-b border-line pb-3.5">
          <div className="flex items-center gap-2">
            <span aria-hidden className="flex items-center">
              <span className="size-3.5 rounded-full bg-ink" />
              <span className="-ml-1.5 size-3.5 rounded-full bg-indigo mix-blend-multiply" />
            </span>
            <span className="font-heading text-[13.5px] font-bold tracking-[-0.01em]">AI search visibility</span>
          </div>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-indigo/10 px-2.5 py-1 text-[10px] font-semibold tracking-[0.04em] text-indigo">
            <span className="size-1.5 rounded-full bg-current" /> 4 PLATFORMS
          </span>
        </div>

        {/* tracked prompt group */}
        <p className="mt-4 rounded-xl border border-line bg-ivory/60 px-3.5 py-2.5 text-[12.5px] text-graphite">
          <span className="font-semibold text-ink">Prompt group:</span> vendor comparison
        </p>

        {/* platform rows with citation status */}
        <div className="mt-3 grid gap-2">
          {platforms.map((p) => (
            <div key={p.name} className="flex items-center gap-3 rounded-xl border border-line bg-surface px-3 py-2.5">
              <span className="grid size-7 shrink-0 place-items-center rounded-lg border border-line bg-ivory">{p.icon}</span>
              <span className="flex-1 text-[12.5px] font-semibold">{p.name}</span>
              {p.cited ? (
                <span className="inline-flex items-center gap-1.5 rounded-full bg-citron/40 px-2 py-0.5 text-[10.5px] font-bold text-ink-solid">
                  <span className="grid size-3 place-items-center rounded-full bg-ink-solid text-citron">
                    <svg width="7" height="7" viewBox="0 0 12 12" fill="none"><path d="m2.5 6.5 2.5 2.5 4.5-5" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  </span>
                  Cited
                </span>
              ) : (
                <span className="rounded-full bg-graphite/10 px-2 py-0.5 text-[10.5px] font-bold text-graphite">Not cited</span>
              )}
            </div>
          ))}
        </div>

        <p className="mt-4 text-[10.5px] text-graphite">Four platforms, one program. Sample view.</p>
      </div>
    </div>
  );
}

export default function AiSearchHero() {
  return (
    <section className="relative overflow-x-clip pt-[136px]">
      <div aria-hidden className="wash-lilac absolute inset-x-0 top-0 h-[680px]" />
      <div
        aria-hidden
        className="grid-pattern absolute left-1/2 top-24 h-[440px] w-[760px] -translate-x-1/2 [mask-image:radial-gradient(ellipse_70%_70%_at_50%_40%,#000_35%,transparent_75%)]"
      />
      <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-6 pb-20 lg:grid-cols-[1.02fr_0.98fr] lg:gap-12 lg:pb-28">
        <div>
          <Reveal>
            <Badge>{AISEARCH_HERO.eyebrow}</Badge>
          </Reveal>
          <Reveal delay={60} duration={600}>
            <h1 className="mt-6 max-w-xl font-heading text-[clamp(2.4rem,4.6vw,3.6rem)] font-bold leading-[1.08] tracking-[-0.025em]">
              {AISEARCH_HERO.title}
            </h1>
          </Reveal>
          <Reveal delay={120} duration={600}>
            <p className="mt-6 max-w-xl text-[16px] leading-relaxed text-graphite">{AISEARCH_HERO.intro}</p>
          </Reveal>
          <Reveal delay={180} duration={600}>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <CtaLink href={AISEARCH_HERO.primaryCta.href}>{AISEARCH_HERO.primaryCta.label}</CtaLink>
              <CtaLink href={AISEARCH_HERO.secondaryCta.href} variant="ghost">{AISEARCH_HERO.secondaryCta.label}</CtaLink>
            </div>
          </Reveal>
          <Reveal delay={240}>
            <div className="mt-10 flex flex-wrap items-center gap-x-3 gap-y-2 border-t border-line pt-7 text-[13px] font-semibold text-graphite">
              {AISEARCH_HERO.trust.map((t, i) => (
                <span key={t} className="inline-flex items-center gap-3">
                  {i > 0 && <span aria-hidden className="text-graphite/40">·</span>}
                  {t}
                </span>
              ))}
            </div>
          </Reveal>
        </div>

        <Reveal variant="right" delay={120}>
          <ScopeDashboard />
        </Reveal>
      </div>
    </section>
  );
}
