import Reveal from "@/components/motion/Reveal";
import OrbitStage, { OrbitHub } from "@/components/OrbitStage";
import { CtaLink, SectionBadge } from "@/components/ui";
import { splitAccent } from "@/components/shared";
import {
  SAAS_HERO,
  SAAS_RESULTS,
  SAAS_BUILT_FOR,
  SAAS_FAILS,
} from "@/lib/saas-seo-content";
import {
  SalesforceMark,
  HubSpotMark,
  SlackMark,
  StripeMark,
  NotionMark,
  ZoomMark,
} from "@/components/brand-icons";

/* Platform marks for the hero orbit. The client asked for the real SaaS
   brands buyers recognise, so each node carries that product's own mark in
   its own colour rather than a generic glyph. */
const SAAS_MARKS: Record<string, React.ReactNode> = {
  hubspot: <HubSpotMark size={44} />,
  slack: <SlackMark size={44} />,
  stripe: <StripeMark size={44} />,
  notion: <NotionMark size={44} />,
  zoom: <ZoomMark size={44} />,
};


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
};

/* The SaaS platform diagram: the shared orbit stage with Salesforce at the
   hub and the five platforms buyers compare around it. */
const SAAS_NODES = SAAS_HERO.orbit.map((n) => ({
  label: `${n.title} ${n.sub}`,
  mark: SAAS_MARKS[n.icon],
}));

function JourneyLoop() {
  return (
    <OrbitStage
      nodes={SAAS_NODES}
      hub={
        <OrbitHub
          label="Salesforce"
          glowClass="bg-[#00A1E0]/15"
          shadowClass="shadow-[0_24px_60px_rgba(0,161,224,0.22)]"
        >
          <SalesforceMark size={148} />
        </OrbitHub>
      }
    />
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

/* The six commercial measures the copy names, arranged around the reporting
   hub they feed. Proportions follow the supplied reference: hub disc at the
   centre with a ringed halo, three satellites per side, dashed stepped
   connectors. No figures are shown because none were supplied. */
function ResultsHub() {
  /* Reference geometry, normalised to a 760 x 560 canvas.
     Satellites sit at r = 48 on two columns; the hub disc is r = 88 with a
     halo ring at r = 105. */
  const HUB = { x: 380, y: 280, r: 88, halo: 105 };
  const SAT_R = 48;

  const nodes = [
    { x: 152, y: 74,  icon: "audience", label: SAAS_RESULTS.measures[0] },
    { x: 152, y: 280, icon: "keyword",  label: SAAS_RESULTS.measures[1] },
    { x: 152, y: 486, icon: "calendar", label: SAAS_RESULTS.measures[2] },
    { x: 608, y: 74,  icon: "quality",  label: SAAS_RESULTS.measures[3] },
    { x: 608, y: 280, icon: "growth",   label: SAAS_RESULTS.measures[4] },
    { x: 608, y: 486, icon: "revenue",  label: SAAS_RESULTS.measures[5] },
  ];

  /* Stepped dashed connector: out of the satellite horizontally, then an
     elbow into the hub edge, exactly as the reference draws them. */
  function link(n: { x: number; y: number }) {
    const left = n.x < HUB.x;
    const sx = left ? n.x + SAT_R : n.x - SAT_R;
    /* the tick on the hub halo this line terminates at */
    const hx = left ? HUB.x - 100 : HUB.x + 100;
    const hy = n.y === HUB.y ? HUB.y : HUB.y + (n.y < HUB.y ? -46 : 46);
    if (n.y === HUB.y) return `M${sx} ${n.y} H${hx}`;
    /* short level run out of the satellite, then a single diagonal that
       lands on the hub tick, as the reference draws it */
    const turn = left ? sx + 58 : sx - 58;
    return `M${sx} ${n.y} H${turn} L${hx} ${hy}`;
  }

  return (
    <figure>
      <figcaption className="text-center font-heading text-[13px] font-bold uppercase tracking-[0.16em] text-indigo">
        {SAAS_RESULTS.snapshot.label}
      </figcaption>

      <svg viewBox="0 0 760 560" className="mt-7 w-full" fill="none" aria-hidden>
        {/* connectors first so the discs sit on top of them */}
        {nodes.map((n) => (
          <g key={`l-${n.icon}`}>
            <path
              d={link(n)}
              stroke="var(--color-indigo)"
              strokeWidth="1.6"
              strokeOpacity="0.5"
              strokeDasharray="6 6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            {/* the solid tick where the line meets the hub */}
            <circle
              cx={n.x < HUB.x ? HUB.x - 100 : HUB.x + 100}
              cy={n.y === HUB.y ? HUB.y : HUB.y + (n.y < HUB.y ? -46 : 46)}
              r="5"
              fill="var(--color-indigo)"
            />
          </g>
        ))}

        {/* hub halo: soft ring, then the white disc */}
        <circle cx={HUB.x} cy={HUB.y} r={HUB.halo} fill="var(--color-indigo)" fillOpacity="0.07" />
        <circle
          cx={HUB.x}
          cy={HUB.y}
          r={HUB.halo}
          stroke="var(--color-indigo)"
          strokeWidth="1.3"
          strokeOpacity="0.4"
          strokeDasharray="4 6"
        />
        <circle cx={HUB.x} cy={HUB.y} r={HUB.r} className="fill-surface" />
        <circle cx={HUB.x} cy={HUB.y} r={HUB.r} stroke="var(--color-indigo)" strokeWidth="1" strokeOpacity="0.18" />

        {/* hub glyph: the report the whole loop feeds */}
        <g transform={`translate(${HUB.x - 42} ${HUB.y - 42}) scale(1.75)`}>
          <rect x="4" y="3" width="34" height="42" rx="3.4" stroke="var(--color-indigo)" strokeWidth="2.1" />
          <path
            d="M11 15h20M11 22h13M11 29h9"
            stroke="var(--color-indigo)"
            strokeWidth="2.1"
            strokeLinecap="round"
          />
          <circle cx="30" cy="32" r="8.4" className="fill-surface" stroke="var(--color-indigo)" strokeWidth="2.1" />
          <path d="m36.4 38.4 5.2 5.2" stroke="var(--color-indigo)" strokeWidth="2.1" strokeLinecap="round" />
        </g>

        {/* the six satellites */}
        {nodes.map((n) => (
          <g key={n.icon}>
            <circle cx={n.x} cy={n.y} r={SAT_R} className="fill-surface" />
            <circle cx={n.x} cy={n.y} r={SAT_R} stroke="var(--color-indigo)" strokeWidth="1.2" strokeOpacity="0.35" />
            <g transform={`translate(${n.x - 25.5} ${n.y - 25.5}) scale(1.5)`}>
              <g
                stroke="var(--color-indigo)"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
              >
                {SNAPSHOT_ICONS[n.icon]}
              </g>
            </g>
            <title>{n.label}</title>
          </g>
        ))}
      </svg>

    </figure>
  );
}

/* Satellite glyphs, drawn on a 34 x 34 box so each sits centred in its disc. */
const SNAPSHOT_ICONS: Record<string, React.ReactNode> = {
  audience: (
    <>
      <circle cx="12.5" cy="11" r="5" />
      <path d="M3.5 27c0-5 4-8.4 9-8.4s9 3.4 9 8.4" />
      <path d="M23 9.4a4.4 4.4 0 0 1 0 8.2M25 27c0-3.6-1-6.2-2.6-7.8" />
    </>
  ),
  keyword: (
    <>
      <circle cx="23" cy="11" r="6.4" />
      <path d="M18.6 15.6 5 29.2M9.6 24.6l3.4 3.4M13.4 20.8l3.4 3.4" />
    </>
  ),
  calendar: (
    <>
      <rect x="4" y="7" width="26" height="23" rx="3.4" />
      <path d="M4 14h26M11 4v6M23 4v6" />
    </>
  ),
  quality: (
    <>
      <circle cx="17" cy="13" r="9.4" />
      <path d="m11.6 21.4-2.2 9.2 7.6-4 7.6 4-2.2-9.2" />
      <path d="m14.2 13 1.9 2 3.7-3.8" />
    </>
  ),
  growth: (
    <>
      <path d="M4 30h26" />
      <rect x="6.4" y="20" width="5.2" height="8" rx="1.4" />
      <rect x="14.4" y="15" width="5.2" height="13" rx="1.4" />
      <rect x="22.4" y="10" width="5.2" height="18" rx="1.4" />
      <path d="m20 6 8-2-2 8" />
    </>
  ),
  revenue: (
    <>
      <circle cx="17" cy="17" r="13.4" />
      <path d="M17 8.6v16.8" />
      <path d="M21.4 12.6c-.9-1.3-2.6-2-4.4-2-2.5 0-4.4 1.3-4.4 3.2 0 4.4 8.8 2.2 8.8 6.6 0 1.9-1.9 3.2-4.4 3.2-1.8 0-3.5-.7-4.4-2" />
    </>
  ),
};

/* ---- B2B SaaS SEO Results ----
   Proof placement the PDF asks for, held open until verified metrics are
   supplied. The measures are named as labels only: no figures exist yet,
   and none may be invented. */
export function SaasResults() {
  return (
    <section id="saas-results" className="relative overflow-x-clip wash-lilac-full border-t border-line py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:gap-16">
          <Reveal variant="left">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-3.5 py-1.5 text-[11.5px] font-bold uppercase tracking-[0.12em] text-indigo">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                  <circle cx="12" cy="12" r="8.6" />
                  <circle cx="12" cy="12" r="4.2" />
                  <circle cx="12" cy="12" r="1" fill="currentColor" stroke="none" />
                </svg>
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
              <div className="mt-7 flex items-start gap-3 rounded-2xl border border-line bg-surface/70 px-5 py-4">
                <span className="mt-0.5 grid size-6 shrink-0 place-items-center rounded-full bg-lilac text-indigo">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden>
                    <circle cx="12" cy="12" r="8.6" />
                    <path d="M12 8.2v4.6M12 15.8v.2" />
                  </svg>
                </span>
                <p className="text-[13.5px] leading-relaxed text-graphite">
                  <span className="font-bold text-ink">{SAAS_RESULTS.snapshot.heading}.</span>{" "}
                  {SAAS_RESULTS.snapshot.body}
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal variant="right" delay={80}>
            <ResultsHub />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* The copy's argument drawn as search depth: the blog sits at the top of
   results while the pages closest to revenue sink below the fold. Depth is
   illustrative, not measured. */
function OpportunityDepth() {
  const buried = SAAS_BUILT_FOR.pageTypes;

  return (
    <figure className="rounded-3xl border border-line bg-ivory/50 p-8">
      <figcaption className="text-[11.5px] font-bold uppercase tracking-[0.12em] text-graphite">
        Where the opportunity sits
      </figcaption>

      <svg viewBox="0 0 400 300" className="mt-6 w-full" fill="none" aria-hidden>
        {/* what currently ranks */}
        <rect x="60" y="14" width="280" height="30" rx="7" fill="var(--color-indigo)" />
        <text x="200" y="34" textAnchor="middle" className="fill-white" style={{ fontSize: 12.5, fontWeight: 700 }}>
          Blog posts
        </text>
        <text x="0" y="34" className="fill-graphite" style={{ fontSize: 10 }}>
          Ranks
        </text>

        {/* the visibility line everything below fails to cross */}
        <path d="M0 60 H400" stroke="var(--color-warn)" strokeWidth="1.2" strokeDasharray="5 4" strokeOpacity="0.8" />
        <text x="400" y="55" textAnchor="end" className="fill-warn" style={{ fontSize: 10 }}>
          visibility line
        </text>

        {/* the revenue-adjacent pages, sunk below it */}
        {buried.map((t, i) => {
          const y = 76 + i * 36;
          const inset = 60 + i * 6;
          return (
            <g key={t}>
              <rect
                x={inset}
                y={y}
                width={400 - inset * 2}
                height="26"
                rx="6"
                fill="var(--color-indigo)"
                fillOpacity={0.13 - i * 0.014}
                stroke="var(--color-indigo)"
                strokeWidth="1"
                strokeOpacity={0.3 - i * 0.03}
              />
              <text
                x="200"
                y={y + 17.5}
                textAnchor="middle"
                className="fill-ink"
                style={{ fontSize: 11.5, fillOpacity: 1 - i * 0.09 }}
              >
                {t}
              </text>
            </g>
          );
        })}

        <text x="0" y="300" className="fill-graphite" style={{ fontSize: 10 }}>
          Buried
        </text>
      </svg>

      <p className="mt-5 border-t border-line pt-5 text-[13.5px] leading-relaxed text-graphite">
        The blog ranks while the pages closest to a buying decision stay out of
        reach. Illustrative, not measured.
      </p>
    </figure>
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
          <SectionBadge>{SAAS_BUILT_FOR.badge}</SectionBadge>
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
            <OpportunityDepth />
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
          <SectionBadge>{SAAS_FAILS.badge}</SectionBadge>
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
