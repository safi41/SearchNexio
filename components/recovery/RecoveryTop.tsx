import Reveal from "@/components/motion/Reveal";
import OrbitStage, { OrbitHub } from "@/components/OrbitStage";
import { CtaLink } from "@/components/ui";
import { splitAccent } from "@/components/shared";
import {
  GoogleG,
  SparkleAI,
  ChatGPTMark,
  GeminiMark,
  PerplexityMark,
  BingMark,
  MapsPin,
} from "@/components/brand-icons";
import {
  RECOVERY_HERO,
  RECOVERY_DROPPED,
  RECOVERY_FIT,
  R_ROUTES,
} from "@/lib/recovery-content";

/* Marks for the hero orbit: Google at the hub, and around it the surfaces
   that now absorb or redistribute the clicks a site can lose — AI Overviews,
   assistant search, Bing and local results. */
const RECOVERY_MARKS: Record<string, React.ReactNode> = {
  overview: <SparkleAI size={40} />,
  chatgpt: <ChatGPTMark size={40} />,
  gemini: <GeminiMark size={40} />,
  perplexity: <PerplexityMark size={40} />,
  bing: <BingMark size={40} />,
  maps: <MapsPin size={40} />,
};

const RECOVERY_NODES = RECOVERY_HERO.orbit.map((n) => ({
  label: `${n.title}: ${n.sub}`,
  mark: RECOVERY_MARKS[n.icon],
}));

function SearchLoop() {
  return (
    <OrbitStage
      nodes={RECOVERY_NODES}
      hub={
        <OrbitHub
          label="Google Search"
          glowClass="bg-[#4285F4]/15"
          shadowClass="shadow-[0_24px_60px_rgba(66,133,244,0.22)]"
        >
          <GoogleG size={148} />
        </OrbitHub>
      }
    />
  );
}

export function RecoveryHero() {
  const [before, accent, after] = splitAccent(
    RECOVERY_HERO.title,
    RECOVERY_HERO.accent
  );

  return (
    <section className="relative overflow-x-clip pt-[136px]">
      <div aria-hidden className="wash-lilac absolute inset-x-0 top-0 h-[680px]" />
      <div
        aria-hidden
        className="grid-pattern absolute left-1/2 top-24 h-[440px] w-[760px] -translate-x-1/2 [mask-image:radial-gradient(ellipse_70%_70%_at_50%_40%,#000_35%,transparent_75%)]"
      />

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-6 pb-16 lg:grid-cols-[1.02fr_0.98fr] lg:gap-10 lg:pb-24">
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
              {RECOVERY_HERO.eyebrow}
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
              {RECOVERY_HERO.intro}
            </p>
          </Reveal>

          {/* The brief caps this page at four CTA placements, so the hero
              carries the single primary action. */}
          <Reveal delay={180} duration={600}>
            <div className="mt-9 flex flex-wrap items-center gap-3.5">
              <CtaLink href={R_ROUTES.assessment}>
                Request an SEO Recovery Assessment
              </CtaLink>
            </div>
          </Reveal>
        </div>

        <Reveal variant="scale" delay={120} duration={800}>
          <SearchLoop />
        </Reveal>
      </div>
    </section>
  );
}

/* ---- Your Organic Traffic Dropped ----
   Copy left, and a diagnosis chart right that draws the section's own
   argument: one identical decline, three different candidate causes. ---- */

function DeclineChart() {
  return (
    <div className="relative rounded-3xl border border-line bg-surface p-6 shadow-[0_24px_64px_rgba(11,13,18,0.07)] md:p-8">
      <div className="flex items-center justify-between">
        <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-graphite/70">
          Organic clicks
        </p>
        <span className="inline-flex items-center gap-1.5 rounded-full bg-warn/10 px-3 py-1 text-[11px] font-bold text-warn">
          <span aria-hidden className="size-1.5 rounded-full bg-warn" />
          Decline detected
        </span>
      </div>

      <svg viewBox="0 0 420 190" className="mt-4 w-full" role="img" aria-label="A traffic chart holding steady, then dropping at a marked point in time">
        {/* gridlines */}
        {[40, 80, 120, 160].map((y) => (
          <line key={y} x1="0" y1={y} x2="420" y2={y} stroke="var(--c-line)" strokeWidth="1" />
        ))}

        {/* healthy area before the drop */}
        <path
          d="M0 78 C40 70 70 66 105 62 C140 58 175 64 210 56 L210 190 L0 190 Z"
          fill="#635BFF"
          opacity="0.08"
        />
        {/* declined area after the drop */}
        <path
          d="M210 56 C225 100 240 128 265 138 C300 152 350 148 420 156 L420 190 L210 190 Z"
          fill="#C2410C"
          opacity="0.07"
        />

        {/* traffic line: steady, then the drop */}
        <path
          d="M0 78 C40 70 70 66 105 62 C140 58 175 64 210 56"
          fill="none"
          stroke="#635BFF"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <path
          d="M210 56 C225 100 240 128 265 138 C300 152 350 148 420 156"
          fill="none"
          stroke="#C2410C"
          strokeWidth="2.5"
          strokeLinecap="round"
        />

        {/* the decline marker */}
        <line x1="210" y1="20" x2="210" y2="176" stroke="var(--c-ink)" strokeWidth="1.4" strokeDasharray="4 4" opacity="0.5" />
        <circle cx="210" cy="56" r="5" fill="#C2410C" />
        <circle cx="210" cy="56" r="10" fill="#C2410C" opacity="0.18" />
      </svg>

      <div className="mt-2 flex items-center justify-between text-[11px] text-graphite/70">
        <span>Jan</span>
        <span className="font-bold text-ink">Decline starts</span>
        <span>Jun</span>
      </div>

      {/* the same symptom, three candidate causes */}
      <div className="mt-6 border-t border-line pt-5">
        <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-graphite/70">
          Same symptom, different causes
        </p>
        <div className="mt-3 flex flex-wrap gap-2">
          {["Google update", "Migration loss", "Search results changed"].map((c) => (
            <span
              key={c}
              className="rounded-full border border-indigo/20 bg-lilac/50 px-3.5 py-1.5 text-[12px] font-semibold text-ink"
            >
              {c}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export function RecoveryDropped() {
  return (
    <section className="overflow-x-clip py-16 md:py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
        <Reveal variant="left">
          <h2 className="max-w-xl font-heading text-[clamp(1.9rem,3.6vw,2.6rem)] font-bold leading-[1.12] tracking-[-0.02em]">
            Your Organic Traffic Dropped.{" "}
            <span className="text-indigo">Find Out Why</span> Before You Fix It.
          </h2>
          {RECOVERY_DROPPED.paras.map((p) => (
            <p key={p.slice(0, 24)} className="mt-6 max-w-xl text-[15px] leading-relaxed text-graphite">
              {p}
            </p>
          ))}
        </Reveal>

        <Reveal variant="right" delay={100}>
          <DeclineChart />
        </Reveal>
      </div>
    </section>
  );
}

/* ---- SEO recovery may be right for you if ----
   Six signals as a hairline grid rather than another card wall: one
   bordered block, warn-tinted markers, hover tint only. ---- */

export function RecoveryFit() {
  return (
    <section className="overflow-x-clip wash-lilac-full py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <p className="inline-flex items-center gap-2.5 text-[11.5px] font-bold uppercase tracking-[0.16em] text-indigo">
            <span aria-hidden className="h-px w-7 bg-indigo/50" />
            {RECOVERY_FIT.eyebrow}
          </p>
        </Reveal>

        <Reveal delay={80}>
          <div className="mt-8 grid gap-px overflow-hidden rounded-3xl border border-line bg-line/70 sm:grid-cols-2 lg:grid-cols-3">
            {RECOVERY_FIT.items.map((f, i) => (
              <div
                key={f.title}
                className="reveal-item group bg-surface p-6 transition-colors duration-300 ease-soft hover:bg-ivory/60 md:p-7"
                style={{ transitionDelay: `${120 + i * 60}ms` }}
              >
                <span className="grid size-9 place-items-center rounded-xl bg-warn/10 text-warn transition-transform duration-300 ease-soft group-hover:scale-110">
                  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                    <path d="M4 6l5 6-5 6M12 6l5 6-5 6" transform="rotate(90 12 12)" />
                  </svg>
                </span>
                <h3 className="mt-4 font-heading text-[16px] font-bold tracking-[-0.01em] transition-colors duration-300 group-hover:text-indigo">
                  {f.title}
                </h3>
                <p className="mt-2 text-[13.5px] leading-relaxed text-graphite">{f.desc}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
