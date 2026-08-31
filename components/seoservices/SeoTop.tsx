import Reveal from "@/components/motion/Reveal";
import { CtaLink } from "@/components/ui";
import { splitAccent } from "@/components/shared";
import {
  SEO_HERO,
  SEO_TRUST_SLOTS,
  SEO_FOCUSED,
  SEO_CTA,
  SEO_ROUTES,
} from "@/lib/seo-services-content";

/* Line glyphs for the hero flow stations, on the house 1.7 stroke. */
const FLOW_ICONS: Record<string, React.ReactNode> = {
  search: (
    <>
      <circle cx="11" cy="11" r="6.5" />
      <path d="m15.8 15.8 4.2 4.2" />
    </>
  ),
  page: (
    <>
      <path d="M13.6 3.2H7.4a2.2 2.2 0 0 0-2.2 2.2v13.2a2.2 2.2 0 0 0 2.2 2.2h9.2a2.2 2.2 0 0 0 2.2-2.2V8.4Z" />
      <path d="M13.6 3.2v5.2h5.2M8.6 12.6h6.8M8.6 16.2h4.4" />
    </>
  ),
  visitor: (
    <>
      <circle cx="12" cy="8" r="3.6" />
      <path d="M5.2 20a6.8 6.8 0 0 1 13.6 0" />
    </>
  ),
  revenue: (
    <>
      <path d="M4 19.4h16" />
      <rect x="6.2" y="12" width="3.2" height="6" rx="1" />
      <rect x="11.4" y="8.4" width="3.2" height="9.6" rx="1" />
      <rect x="16.6" y="5" width="3.2" height="13" rx="1" />
    </>
  ),
};

/* The hero visual, per the deck: Search Demand -> Priority Pages ->
   Qualified Visitor -> Lead / Revenue on a slow 8s pulse, in the same
   stage footprint every other hero uses. The deck rules out floating
   logos and generic icon loops, so this is a pipeline, not an orbit. */
function FlowStage() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[420px] lg:max-w-[540px]">
      {/* stations, evenly spaced down the stage */}
      <div className="flex h-full flex-col justify-between py-2">
        {SEO_HERO.flow.map((f, i) => (
          <div key={f.label} className="relative flex items-center gap-5">
            {/* the spine segment behind this row's bubble */}
            {i < SEO_HERO.flow.length - 1 && (
              <span
                aria-hidden
                className="absolute left-[31px] top-[52px] h-[calc(100%+44px)] w-px bg-gradient-to-b from-indigo/40 to-indigo/15"
              />
            )}

            {/* each station lifts as the pulse reaches it; delays follow the
                pulse's linear travel down the spine */}
            <span
              className="flow-station relative z-10 grid size-[62px] shrink-0 place-items-center rounded-2xl bg-surface text-indigo shadow-[0_14px_36px_rgba(99,91,255,0.18)]"
              style={{ animationDelay: `${[0.1, 2.7, 5.3, 7.5][i]}s` }}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                {FLOW_ICONS[f.icon]}
              </svg>
            </span>

            <div className="rounded-2xl bg-surface/85 px-5 py-3.5 shadow-[0_10px_30px_rgba(11,13,18,0.07)] backdrop-blur-sm">
              <p className="font-heading text-[15.5px] font-bold tracking-[-0.01em]">
                {f.label}
              </p>
              <p className="mt-0.5 text-[12px] leading-snug text-graphite">{f.sub}</p>
            </div>
          </div>
        ))}
      </div>

      {/* one pulse travelling the whole spine on the slow loop */}
      <div
        aria-hidden
        className="absolute bottom-[36px] left-[31px] top-[36px] w-px"
      >
        <span className="flow-pulse left-1/2 size-2.5 -translate-x-1/2 rounded-full bg-indigo shadow-[0_0_14px_rgba(99,91,255,0.65)]" />
      </div>
    </div>
  );
}

export function SeoHero() {
  const [before, accent, after] = splitAccent(SEO_HERO.title, SEO_HERO.accent);

  return (
    <section className="relative overflow-x-clip pt-[136px]">
      <div aria-hidden className="wash-lilac absolute inset-x-0 top-0 h-[680px]" />
      <div
        aria-hidden
        className="grid-pattern absolute left-1/2 top-24 h-[440px] w-[760px] -translate-x-1/2 [mask-image:radial-gradient(ellipse_70%_70%_at_50%_40%,#000_35%,transparent_75%)]"
      />

      {/* 55/45 split per the deck: copy and CTAs left, the flow right */}
      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-6 pb-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12 lg:pb-20">
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
              {SEO_HERO.eyebrow}
            </span>
          </Reveal>

          <Reveal delay={60} duration={600}>
            <h1 className="mt-6 font-heading text-[clamp(2.2rem,4.4vw,3.4rem)] font-bold leading-[1.08] tracking-[-0.03em]">
              {before}
              <span className="text-indigo">{accent}</span>
              {after}
            </h1>
          </Reveal>

          <Reveal delay={120} duration={600}>
            <p className="mt-6 max-w-xl text-[16px] leading-relaxed text-graphite">
              {SEO_HERO.intro}
            </p>
          </Reveal>

          <Reveal delay={180} duration={600}>
            <div className="mt-9 flex flex-wrap items-center gap-3.5">
              <CtaLink href={SEO_ROUTES.review}>{SEO_CTA}</CtaLink>
              <CtaLink href={SEO_ROUTES.results} variant="ghost">
                {SEO_HERO.secondaryCta}
              </CtaLink>
            </div>
          </Reveal>
        </div>

        <Reveal variant="scale" delay={120} duration={800}>
          <FlowStage />
        </Reveal>
      </div>

      {/* Trust strip: the deck's four proof slots are all verified-proof
          placeholders, so the strip names them and states they are pending
          rather than showing invented metrics or logos. */}
      <div className="relative mx-auto max-w-7xl px-6 pb-14 lg:pb-20">
        <Reveal delay={80}>
          <div className="rounded-3xl border border-line bg-surface/80 px-6 py-5 backdrop-blur-sm md:px-8">
            <div className="flex flex-wrap items-center gap-x-8 gap-y-2.5">
              {SEO_TRUST_SLOTS.map((slot) => (
                <span key={slot} className="inline-flex items-center gap-2.5 text-[12.5px] font-semibold text-graphite">
                  <span aria-hidden className="size-1.5 rounded-full bg-indigo/50" />
                  {slot}
                </span>
              ))}
            </div>
            <p className="mt-3 border-t border-line pt-3 text-[11.5px] text-graphite/70">
              Verified metrics, client logos and certifications are added here before go-live. Nothing on this page is invented.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---- SEO Focused on Leads, Sales and Revenue ----
   Copy beside the deck's four-step chain: Visibility -> Qualified
   Traffic -> Conversion -> Revenue as a descending staircase. Light
   scroll reveal only, and no CTA, as the deck directs. ---- */

export function SeoFocused() {
  return (
    <section className="overflow-x-clip py-16 md:py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
        <Reveal variant="left">
          <h2 className="max-w-xl font-heading text-[clamp(1.9rem,3.6vw,2.6rem)] font-bold leading-[1.12] tracking-[-0.02em]">
            SEO Focused on{" "}
            <span className="text-indigo">Leads, Sales and Revenue</span>
          </h2>
          {SEO_FOCUSED.paras.map((p) => (
            <p key={p.slice(0, 24)} className="mt-6 max-w-xl text-[15px] leading-relaxed text-graphite">
              {p}
            </p>
          ))}
        </Reveal>

        <Reveal variant="right" delay={100}>
          <div className="rounded-3xl border border-line bg-surface p-7 shadow-[0_24px_64px_rgba(11,13,18,0.07)] md:p-9">
            <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-graphite/70">
              Worked backward from revenue
            </p>
            <div className="mt-6 space-y-0">
              {SEO_FOCUSED.chain.map((step, i) => (
                <div
                  key={step}
                  className="reveal-item relative"
                  style={{
                    transitionDelay: `${150 + i * 90}ms`,
                    marginLeft: `${i * 9}%`,
                  }}
                >
                  {i > 0 && (
                    <span aria-hidden className="absolute -top-[18px] left-6 h-[18px] w-px bg-indigo/30" />
                  )}
                  <div
                    className={`mb-[18px] inline-flex items-center gap-3 rounded-2xl px-5 py-3.5 ${
                      i === SEO_FOCUSED.chain.length - 1
                        ? "cta-indigo text-white shadow-[0_16px_40px_rgba(99,91,255,0.3)]"
                        : "border border-line bg-ivory/60"
                    }`}
                  >
                    <span
                      className={`text-[11px] font-bold tabular-nums ${
                        i === SEO_FOCUSED.chain.length - 1 ? "text-citron" : "text-indigo/70"
                      }`}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="font-heading text-[15px] font-bold tracking-[-0.01em]">
                      {step}
                    </span>
                  </div>
                </div>
              ))}
            </div>
            <p className="border-t border-line pt-5 text-[12.5px] leading-relaxed text-graphite/80">
              Visibility is the means. Business outcomes are the point.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
