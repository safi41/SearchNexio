import Reveal from "@/components/motion/Reveal";
import { Badge, CtaLink } from "@/components/ui";
import { GEO_HERO } from "@/lib/geo-content";
import { GoogleG, SparkleAI, ChatGPTMark, GeminiMark, PerplexityMark } from "@/components/brand-icons";

/* Hero: two columns — copy + CTAs + trust stats on the left, a GEO
   visibility dashboard on the right with slow broadcast signal lines behind
   it (low opacity, reduced-motion safe). */

function DashboardVisual() {
  const rows = [
    { icon: <ChatGPTMark size={16} />, label: "ChatGPT", val: 74, ok: true },
    { icon: <GeminiMark size={16} />, label: "Gemini", val: 61, ok: true },
    { icon: <PerplexityMark size={16} />, label: "Perplexity", val: 48, ok: true },
    { icon: <SparkleAI size={16} />, label: "AI Overviews", val: 39, ok: false },
    { icon: <GoogleG size={16} />, label: "Google AI", val: 33, ok: false },
  ];
  return (
    <div className="relative">
      {/* slow broadcast signal rings behind the panel */}
      <div aria-hidden className="pointer-events-none absolute inset-0 grid place-items-center">
        <span className="animate-orbit-slow absolute size-[420px] rounded-full border border-indigo/10" style={{ animationDuration: "40s" }} />
        <span className="absolute size-80 rounded-full border border-indigo/10" />
        <span className="absolute size-56 rounded-full border border-indigo/10" />
        <span className="absolute size-72 rounded-full bg-indigo/5 blur-3xl" />
      </div>

      <div className="relative rounded-3xl border border-line bg-surface p-5 shadow-[0_20px_50px_rgba(11,13,18,0.08)]">
        {/* header */}
        <div className="flex items-center justify-between border-b border-line pb-3.5">
          <div className="flex items-center gap-2">
            <span aria-hidden className="flex items-center">
              <span className="size-3.5 rounded-full bg-ink" />
              <span className="-ml-1.5 size-3.5 rounded-full bg-indigo mix-blend-multiply" />
            </span>
            <span className="font-heading text-[13.5px] font-bold tracking-[-0.01em]">Generative visibility</span>
          </div>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-indigo/10 px-2.5 py-1 text-[10px] font-semibold tracking-[0.04em] text-indigo">
            <span className="size-1.5 rounded-full bg-current" /> ILLUSTRATIVE
          </span>
        </div>

        {/* prompt line */}
        <p className="mt-4 rounded-xl border border-line bg-ivory/60 px-3.5 py-2.5 text-[12.5px] text-graphite">
          <span className="font-semibold text-ink">Prompt:</span> best providers for [category]?
        </p>

        {/* platform rows */}
        <div className="mt-3 grid gap-2">
          {rows.map((r) => (
            <div key={r.label} className="flex items-center gap-3">
              <span className="grid size-7 shrink-0 place-items-center rounded-lg border border-line bg-ivory">{r.icon}</span>
              <span className="w-24 shrink-0 text-[12px] font-semibold">{r.label}</span>
              <span className="h-1.5 flex-1 overflow-hidden rounded-full bg-ivory">
                <span className={`block h-full rounded-full ${r.ok ? "bg-indigo" : "bg-graphite/40"}`} style={{ width: `${r.val}%` }} />
              </span>
              <span className={`w-8 shrink-0 text-right text-[11.5px] font-bold tabular-nums ${r.ok ? "text-indigo" : "text-graphite"}`}>{r.val}</span>
            </div>
          ))}
        </div>

        <p className="mt-4 text-[10.5px] text-graphite">Sample data shown for illustration.</p>
      </div>
    </div>
  );
}

export default function GeoHero() {
  return (
    <section className="relative overflow-x-clip pt-[136px]">
      <div aria-hidden className="wash-lilac absolute inset-x-0 top-0 h-[680px]" />
      <div
        aria-hidden
        className="grid-pattern absolute left-1/2 top-24 h-[440px] w-[760px] -translate-x-1/2 [mask-image:radial-gradient(ellipse_70%_70%_at_50%_40%,#000_35%,transparent_75%)]"
      />
      <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-6 pb-20 lg:grid-cols-[1.02fr_0.98fr] lg:gap-12 lg:pb-28">
        {/* left: copy */}
        <div>
          <Reveal>
            <Badge>{GEO_HERO.eyebrow}</Badge>
          </Reveal>
          <Reveal delay={60} duration={600}>
            <h1 className="mt-6 max-w-xl font-heading text-[clamp(2.4rem,4.6vw,3.6rem)] font-bold leading-[1.08] tracking-[-0.025em]">
              {GEO_HERO.title}
            </h1>
          </Reveal>
          <Reveal delay={120} duration={600}>
            <p className="mt-6 max-w-xl text-[16px] leading-relaxed text-graphite">
              {GEO_HERO.intro}
            </p>
          </Reveal>
          <Reveal delay={180} duration={600}>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <CtaLink href={GEO_HERO.primaryCta.href}>{GEO_HERO.primaryCta.label}</CtaLink>
              <CtaLink href={GEO_HERO.secondaryCta.href} variant="ghost">{GEO_HERO.secondaryCta.label}</CtaLink>
            </div>
          </Reveal>

          {/* trust stats */}
          <Reveal delay={240}>
            <div className="mt-12 grid gap-6 border-t border-line pt-8 sm:grid-cols-3">
              {GEO_HERO.stats.map((s) => (
                <div key={s.value}>
                  <p className="font-heading text-[15px] font-bold leading-snug tracking-[-0.01em] text-indigo">{s.value}</p>
                  <p className="mt-1.5 text-[12.5px] leading-relaxed text-graphite">{s.note}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        {/* right: dashboard */}
        <Reveal variant="right" delay={120}>
          <DashboardVisual />
        </Reveal>
      </div>
    </section>
  );
}
