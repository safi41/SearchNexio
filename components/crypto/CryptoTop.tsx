"use client";

import Reveal from "@/components/motion/Reveal";
import { CtaLink } from "@/components/ui";
import {
  CRYPTO_HERO,
  QUALIFIED_DEMAND,
  CRYPTO_SEARCH_STAGES,
  CRYPTO_DIFFERENT,
} from "@/lib/crypto-seo-content";

/* ---- Hero: copy and trust chips left, the acquisition loop right ----
   Same ring construction as the healthcare hero, but the core and nodes
   carry this page's own story. The nodes are static; only the rings
   drift. */

/* Chip and node glyphs. Crypto-native subject matter drawn from this page's
   own copy: wallets, ledgers, transaction records, key custody and branded
   verification. Deliberately no coins, token logos, blockchain cubes,
   rockets or candlestick charts, per the client's visual brief. */
const HERO_ICONS: Record<string, React.ReactNode> = {
  /* --- chip glyphs --- */
  /* document: high trust content, sourced and reviewed */
  shield: (
    <g>
      <path d="M13.6 3.2H7.4a2.2 2.2 0 0 0-2.2 2.2v13.2a2.2 2.2 0 0 0 2.2 2.2h9.2a2.2 2.2 0 0 0 2.2-2.2V8.4Z" />
      <path d="M13.6 3.2v5.2h5.2" />
      <path d="M8.6 12.6h6.8M8.6 16.2h4.4" />
    </g>
  ),
  /* target: commercial intent, not volume alone */
  target: (
    <g>
      <circle cx="12" cy="12" r="7.5" />
      <circle cx="12" cy="12" r="3.4" />
      <circle cx="12" cy="12" r="0.6" />
    </g>
  ),
  /* magnifier: technical depth across dApps and docs portals */
  code: (
    <g>
      <circle cx="10.8" cy="10.8" r="6.4" />
      <path d="m15.6 15.6 4.4 4.4" />
    </g>
  ),
  /* bar chart with arrow: acquisition tracked as events */
  chart: (
    <g>
      <path d="M4 19.5h16" />
      <path d="M7 19.5v-5.2M11.4 19.5v-8.4M15.8 19.5v-6.2" />
      <path d="m6.6 10.8 4.8-4 3.4 2.8 4.6-4.6" />
      <path d="M15.6 4.8h3.8v3.8" />
    </g>
  ),

  /* --- orbit node glyphs --- */
  /* rising bar chart: visibility growth on priority searches */
  trend: (
    <g>
      <path d="M4 19.5h16" />
      <path d="M7 19.5v-5.5M11.4 19.5v-9M15.8 19.5v-6.5M20 19.5V8" />
      <path d="m6.5 10.5 5-4 3.4 3 4.6-4.8" />
      <path d="M15.4 4.4h4.2v4.2" />
    </g>
  ),
  /* document with pen: content briefs, sourced and reviewed */
  doc: (
    <g>
      <path d="M13.4 3.2H7a2.3 2.3 0 0 0-2.3 2.3v13a2.3 2.3 0 0 0 2.3 2.3h7.2" />
      <path d="M8.3 8h5.6M8.3 11.6h4" />
      <path d="m14.8 16.6 5.1-5.1 2.1 2.1-5.1 5.1-2.7.6Z" />
    </g>
  ),
  /* globe: international markets */
  globe: (
    <g>
      <circle cx="12" cy="12" r="8.4" />
      <path d="M3.6 12h16.8" />
      <path d="M12 3.6c2.6 2.4 4 5.3 4 8.4s-1.4 6-4 8.4c-2.6-2.4-4-5.3-4-8.4s1.4-6 4-8.4Z" />
    </g>
  ),
  /* chain link: authority and third-party references */
  link: (
    <g>
      <path d="M10.2 13.8a3.9 3.9 0 0 0 5.7.3l2.6-2.6a3.9 3.9 0 1 0-5.5-5.5l-1.5 1.5" />
      <path d="M13.8 10.2a3.9 3.9 0 0 0-5.7-.3l-2.6 2.6a3.9 3.9 0 1 0 5.5 5.5l1.5-1.5" />
    </g>
  ),
  /* magnifier: search research */
  search: (
    <g>
      <circle cx="10.8" cy="10.8" r="6.4" />
      <path d="m15.6 15.6 4.4 4.4" />
    </g>
  ),
};

function CryptoLoop() {
  /* Nodes render immediately. The rings keep their slow drift, but the
     nodes themselves do not stagger in on load. */

  /* Five nodes, 72 degrees apart on the solid ring. Positions are
     50% + 38% * (cos, sin) of the angle, starting at the top. */
  const spots = [
    "left-1/2 top-[12%] -translate-x-1/2 -translate-y-1/2",
    "left-[86.1%] top-[38.3%] -translate-x-1/2 -translate-y-1/2",
    "left-[72.3%] top-[80.7%] -translate-x-1/2 -translate-y-1/2",
    "left-[27.7%] top-[80.7%] -translate-x-1/2 -translate-y-1/2",
    "left-[13.9%] top-[38.3%] -translate-x-1/2 -translate-y-1/2",
  ];

  return (
    <div className="relative mx-auto aspect-square w-full max-w-[420px] lg:max-w-[500px]">
      {/* dashed outer ring with slowly travelling dots */}
      <div aria-hidden className="absolute inset-[2%] rounded-full border border-dashed border-indigo/25" />
      <div aria-hidden className="animate-orbit absolute inset-0" style={{ animationDuration: "58s" }}>
        <span className="absolute left-[82%] top-[10%] size-1.5 rounded-full bg-indigo/60" />
        <span className="absolute left-[10%] top-[74%] size-1.5 rounded-full bg-indigo/45" />
        <span className="absolute left-[74%] top-[88%] size-1.5 rounded-full bg-citron-deep/70" />
      </div>

      {/* solid orbit ring the nodes sit on */}
      <div aria-hidden className="absolute inset-[12%] rounded-full border border-indigo/40" />
      <div aria-hidden className="animate-orbit-slow absolute inset-[12%]" style={{ animationDuration: "44s" }}>
        <span className="absolute left-[6%] top-[24%] size-2 rounded-full bg-indigo" />
        <span className="absolute left-[92%] top-[68%] size-2 rounded-full bg-indigo" />
      </div>

      {/* core: a verified-trust shield, the argument this page is built on */}
      <div className="absolute left-1/2 top-1/2 grid size-[42%] -translate-x-1/2 -translate-y-1/2 place-items-center">
        <span aria-hidden className="absolute inset-[-14%] rounded-full bg-indigo/10 blur-2xl" />
        <span className="relative grid size-full place-items-center rounded-full bg-surface shadow-[0_24px_60px_rgba(99,91,255,0.18)]">
          <svg width="46%" height="46%" viewBox="0 0 48 44" fill="none" aria-hidden>
            {/* outlined monitor: the reporting surface the loop feeds */}
            <rect
              x="2" y="2" width="44" height="32" rx="4"
              stroke="var(--color-indigo)" strokeWidth="2.6" fill="none"
            />
            <path
              d="M18 41.4h12M24 34v7.4"
              stroke="var(--color-indigo)" strokeWidth="2.6" strokeLinecap="round"
            />
            {/* trend line climbing across the screen */}
            <path
              d="m9 24.6 7.4-7.6 5 4.8 9.4-9.6"
              stroke="var(--color-indigo)" strokeWidth="2.6"
              strokeLinecap="round" strokeLinejoin="round" fill="none"
            />
            <path
              d="M25.4 12.2h5.8V18"
              stroke="var(--color-indigo)" strokeWidth="2.6"
              strokeLinecap="round" strokeLinejoin="round" fill="none"
            />
            {/* magnifier reading the trend */}
            <circle cx="30.6" cy="24.4" r="5.6" stroke="var(--color-indigo)" strokeWidth="2.6" fill="var(--color-surface)" />
            <path d="m34.8 28.6 4.4 4.4" stroke="var(--color-indigo)" strokeWidth="2.6" strokeLinecap="round" />
          </svg>
        </span>
      </div>

      {/* four loop nodes; names stay as tooltips and accessible labels */}
      {CRYPTO_HERO.orbit.map((n, i) => (
        <div key={n.title} className={`absolute ${spots[i]}`}>
          <span
            title={`${n.title} ${n.sub}`}
            aria-label={`${n.title} ${n.sub}`}
            className="grid size-[68px] place-items-center rounded-full bg-surface shadow-[0_14px_36px_rgba(99,91,255,0.18)]"
          >
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="var(--color-indigo)" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
              {HERO_ICONS[n.icon]}
            </svg>
          </span>
        </div>
      ))}
    </div>
  );
}

export function CryptoHero() {
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
                  <path d="M12 2c.4 5 5 9.6 10 10-5 .4-9.6 5-10 10-.4-5-5-9.6-10-10 5-.4 9.6-5 10-10Z" fill="currentColor" />
                </svg>
              </span>
              Crypto SEO Services
            </span>
          </Reveal>
          <Reveal delay={60} duration={600}>
            <h1 className="mt-6 font-heading text-[clamp(2.5rem,5.2vw,4.1rem)] font-bold leading-[1.04] tracking-[-0.03em]">
              Crypto SEO
              <br />
              <span className="relative inline-block text-indigo">
                Services
                <svg
                  aria-hidden
                  viewBox="0 0 240 14"
                  preserveAspectRatio="none"
                  className="absolute -bottom-2 left-0 h-3 w-full text-indigo/35"
                >
                  <path d="M2 10C52 3 150 2 238 6" stroke="currentColor" strokeWidth="3" strokeLinecap="round" fill="none" />
                </svg>
              </span>
            </h1>
          </Reveal>
          <Reveal delay={120} duration={600}>
            <p className="mt-8 max-w-xl text-[16px] leading-relaxed text-graphite">{CRYPTO_HERO.intro}</p>
          </Reveal>
          {/* trust chips, divided by hairlines */}
          <Reveal delay={180}>
            <div className="mt-9 grid grid-cols-2 gap-y-6 sm:grid-cols-4">
              {CRYPTO_HERO.chips.map((c, i) => (
                <div key={c.title} className={`px-4 first:pl-0 ${i > 0 ? "border-l border-line" : ""}`}>
                  <span className="grid size-10 place-items-center rounded-full bg-lilac text-indigo">
                    <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                      {HERO_ICONS[c.icon]}
                    </svg>
                  </span>
                  <span className="mt-3 block text-[13px] font-bold leading-tight">{c.title}</span>
                  <span className="mt-1 block text-[12px] leading-snug text-graphite">{c.sub}</span>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={240} duration={600}>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <CtaLink href={CRYPTO_HERO.primaryCta.href}>{CRYPTO_HERO.primaryCta.label}</CtaLink>
              <CtaLink href={CRYPTO_HERO.secondaryCta.href} variant="ghost">{CRYPTO_HERO.secondaryCta.label}</CtaLink>
            </div>
          </Reveal>

          <Reveal delay={300}>
            <p className="mt-9 flex max-w-lg items-start gap-3 border-t border-line pt-7 text-[13px] leading-relaxed text-graphite">
              <span aria-hidden className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-lilac text-indigo">
                <svg width="11" height="11" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11 3 4 6v5c0 4 3 6.5 7 8 4-1.5 7-4 7-8V6l-7-3Z" /></svg>
              </span>
              {CRYPTO_HERO.trust}
            </p>
          </Reveal>
        </div>

        <Reveal variant="right" delay={120}>
          <CryptoLoop />
        </Reveal>
      </div>
    </section>
  );
}

/* ---- Trusted by crypto teams: styled label only. Real approved logos are
   added later; nothing is invented here. ---- */
export function CryptoTrustedBy() {
  return (
    <section className="overflow-x-clip border-y border-line py-8">
      <div className="mx-auto max-w-6xl px-6 text-center">
        <p className="text-[11.5px] font-bold uppercase tracking-[0.16em] text-graphite">
          Trusted by crypto teams
        </p>
        <p className="mt-3 text-[13px] text-graphite/70">
          Client logos are added with written permission.
        </p>
      </div>
    </section>
  );
}

/* ---- Search Should Drive Qualified Demand: copy left, the results
   snapshot card right. No animation; the card is the visual anchor. ---- */
export function CryptoQualifiedDemand() {
  const s = QUALIFIED_DEMAND.snapshot;
  return (
    <section className="overflow-x-clip py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <Reveal variant="left">
            <h2 className="font-heading text-[clamp(1.9rem,3.6vw,2.6rem)] font-bold leading-[1.12] tracking-[-0.02em]">
              Search Should Drive <span className="text-indigo">Qualified</span> Demand
            </h2>
            <div className="mt-6 grid gap-4">
              {QUALIFIED_DEMAND.paras.map((p, i) => (
                <p key={i} className="text-[15px] leading-relaxed text-graphite">{p}</p>
              ))}
            </div>
          </Reveal>

          <Reveal variant="right" delay={80}>
            <article className="cta-indigo relative overflow-hidden rounded-3xl p-8 text-white">
              <div aria-hidden className="pointer-events-none absolute -right-16 -top-16 size-48 rounded-full border border-white/10" />
              <p className="relative text-[11px] font-bold uppercase tracking-[0.14em] text-citron">{s.label}</p>
              <p className="relative mt-5 font-heading text-[clamp(1.35rem,2.4vw,1.7rem)] font-bold leading-snug tracking-[-0.015em]">
                {s.heading}
              </p>
              <p className="relative mt-4 text-[13.5px] leading-relaxed text-white/70">{s.body}</p>
              <p className="relative mt-6 border-t border-white/10 pt-4 text-[11.5px] text-white/45">{s.note}</p>
            </article>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ---- How Crypto Customers Search: four-stage journey. Columns appear
   left to right on scroll with an 80ms stagger, the connecting line draws
   once, and each search bar blinks once as if typed. ---- */
export function CryptoSearchStages() {
  return (
    <section className="overflow-x-clip wash-lilac-full py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <div className="max-w-3xl">
            <h2 className="font-heading text-[clamp(1.9rem,3.6vw,2.6rem)] font-bold leading-[1.12] tracking-[-0.02em]">
              How Crypto Customers <span className="text-indigo">Search</span>
            </h2>
            <p className="mt-6 text-[15px] leading-relaxed text-graphite">{CRYPTO_SEARCH_STAGES.intro}</p>
          </div>
        </Reveal>

        {/* Crypto reads as a query board: each stage is a card whose header
            is the real user query in a terminal-style bar, with the stage
            name as a label above it. Cards step down progressively to show
            movement toward the buying decision. */}
        <Reveal delay={80}>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
            {CRYPTO_SEARCH_STAGES.stages.map((s, i) => (
              <article
                key={s.name}
                className="reveal-item group flex h-full flex-col rounded-3xl bg-surface p-6 shadow-[0_10px_30px_rgba(11,13,18,0.05)] transition-all duration-300 ease-soft hover:-translate-y-1.5 hover:shadow-[0_24px_56px_rgba(99,91,255,0.14)] lg:mt-[var(--step)]"
                style={
                  {
                    transitionDelay: `${150 + i * 80}ms`,
                    "--step": `${i * 18}px`,
                  } as React.CSSProperties
                }
              >
                <div className="flex items-center justify-between">
                  <span className="text-[10.5px] font-bold uppercase tracking-[0.14em] text-indigo">
                    Stage {String(i + 1).padStart(2, "0")}
                  </span>
                  <span aria-hidden className="flex gap-1">
                    {[0, 1, 2, 3].map((b) => (
                      <span key={b} className={`size-1.5 rounded-full ${b <= i ? "bg-indigo" : "bg-indigo/15"}`} />
                    ))}
                  </span>
                </div>

                {/* the real user query, in a dark query bar */}
                <div className="mt-4 flex items-center gap-2.5 rounded-xl bg-ink-solid px-3 py-2.5 transition-shadow duration-300 group-hover:shadow-[0_0_0_3px_rgba(99,91,255,0.25)]">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="var(--color-citron)" strokeWidth="2" strokeLinecap="round" aria-hidden className="shrink-0">
                    <circle cx="11" cy="11" r="6.5" />
                    <path d="M15.8 15.8 20 20" />
                  </svg>
                  <span className="min-w-0 flex-1 truncate text-[12px] font-medium text-white/90">{s.query}</span>
                  <span aria-hidden className="animate-pulse h-3 w-px shrink-0 bg-white/60" />
                </div>

                <h3 className="mt-4 font-heading text-[15.5px] font-bold leading-snug tracking-[-0.01em] transition-colors duration-300 group-hover:text-indigo">
                  {s.name}
                </h3>
                <p className="mt-2 text-[13px] leading-relaxed text-graphite">{s.desc}</p>
              </article>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---- Why Crypto SEO Is Different: 2x2 text-led cards, static by
   instruction. The copy carries the section. ---- */
export function CryptoDifferent() {
  return (
    <section className="overflow-x-clip py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <h2 className="max-w-2xl font-heading text-[clamp(1.9rem,3.6vw,2.6rem)] font-bold leading-[1.12] tracking-[-0.02em]">
            Why Crypto SEO Is <span className="text-indigo">Different</span>
          </h2>
        </Reveal>

        {/* Crypto uses a wide 2x2 of dark-accent panels: each card carries a
            large ghost keyword in the corner rather than a number chip. */}
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {CRYPTO_DIFFERENT.map((c, i) => (
            <article
              key={c.title}
              className="group relative flex h-full flex-col overflow-hidden rounded-3xl bg-surface p-8 shadow-[0_10px_30px_rgba(11,13,18,0.05)] transition-all duration-300 ease-soft hover:-translate-y-1.5 hover:scale-[1.015] hover:shadow-[0_24px_56px_rgba(99,91,255,0.14)]"
            >
              <span
                aria-hidden
                className="pointer-events-none absolute right-7 top-6 font-heading text-[42px] font-extrabold leading-none tracking-[-0.03em] text-indigo/[0.12] transition-colors duration-300 group-hover:text-indigo/25"
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="relative max-w-[75%] font-heading text-[17px] font-bold tracking-[-0.01em] transition-colors duration-300 group-hover:text-indigo">
                {c.title}
              </h3>
              <p className="relative mt-3 text-[13.5px] leading-relaxed text-graphite">{c.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
