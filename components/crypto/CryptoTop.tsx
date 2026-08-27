import Reveal from "@/components/motion/Reveal";
import OrbitStage, { OrbitHub } from "@/components/OrbitStage";
import { CtaLink } from "@/components/ui";
import {
  CRYPTO_HERO,
  QUALIFIED_DEMAND,
  AURUM_PROOF,
  PROOF_BANNER,
  CRYPTO_DIFFERENT,
  CRYPTO_DIFFERENT_INTRO,
  FOUNDER_INSIGHT,
} from "@/lib/crypto-seo-content";
import {
  BitcoinMark,
  EthereumMark,
  CoinbaseMark,
  BinanceMark,
  TetherMark,
  SolanaMark,
  LedgerMark,
} from "@/components/brand-icons";

/* Platform marks for the hero orbit. The client asked for the real crypto
   brands buyers recognise, so each node carries that project's own mark in
   its own colour rather than a generic glyph. */
const CRYPTO_MARKS: Record<string, React.ReactNode> = {
  coinbase: <CoinbaseMark size={44} />,
  ethereum: <EthereumMark size={44} />,
  binance: <BinanceMark size={44} />,
  tether: <TetherMark size={44} />,
  solana: <SolanaMark size={44} />,
  ledger: <LedgerMark size={44} />,
};

/* ---- Hero: copy and trust chips left, the acquisition loop right ----
   Same ring construction as the healthcare hero, but the core and nodes
   carry this page's own story. */

/* Chip glyphs. Crypto-native subject matter drawn from this page's own
   copy: wallets, ledgers, transaction records, key custody and branded
   verification. The hero orbit carries real platform marks instead, at the
   client's direction. */

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
  /* bar chart with arrow: acquisition tracked as events */
  chart: (
    <g>
      <path d="M4 19.5h16" />
      <path d="M7 19.5v-5.2M11.4 19.5v-8.4M15.8 19.5v-6.2" />
      <path d="m6.6 10.8 4.8-4 3.4 2.8 4.6-4.6" />
      <path d="M15.6 4.8h3.8v3.8" />
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

/* The acquisition-loop diagram: the shared orbit stage with the Bitcoin
   mark at the hub and the six platform nodes around it. */
const CRYPTO_NODES = CRYPTO_HERO.orbit.map((n) => ({
  label: `${n.title} ${n.sub}`,
  mark: CRYPTO_MARKS[n.icon],
}));

function CryptoLoop() {
  return (
    <OrbitStage
      nodes={CRYPTO_NODES}
      hub={
        <OrbitHub
          label="Bitcoin"
          glowClass="bg-[#F7931A]/15"
          shadowClass="shadow-[0_24px_60px_rgba(247,147,26,0.22)]"
        >
          <BitcoinMark size={148} />
        </OrbitHub>
      }
    />
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
              {CRYPTO_HERO.eyebrow}
            </span>
          </Reveal>
          <Reveal delay={60} duration={600}>
            <h1 className="mt-6 font-heading text-[clamp(2.5rem,5.2vw,4.1rem)] font-bold leading-[1.04] tracking-[-0.03em]">
              Crypto SEO
              {" "}
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

/* ---- Crypto SEO That Drives Qualified Growth, then the AurumFSG proof.
   The brief places a dark stat card immediately below the growth copy,
   showing 10x, 2x and 2 months as large figures. Client has confirmed
   permission to name AurumFSG.de and publish these verified results. ---- */
export function CryptoQualifiedDemand() {
  return (
    <section className="overflow-x-clip py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <h2 className="max-w-2xl font-heading text-[clamp(1.9rem,3.6vw,2.6rem)] font-bold leading-[1.12] tracking-[-0.02em]">
            Crypto SEO That Drives <span className="text-indigo">Qualified</span> Growth
          </h2>
          <div className="mt-6 grid max-w-3xl gap-4">
            {QUALIFIED_DEMAND.paras.map((p, i) => (
              <p key={i} className="text-[15.5px] leading-relaxed text-graphite">{p}</p>
            ))}
          </div>
        </Reveal>

        {/* AurumFSG.de verified result */}
        <Reveal variant="scale" delay={80}>
          <article className="cta-indigo relative mt-12 overflow-hidden rounded-3xl p-8 text-white md:p-10">
            <div aria-hidden className="pointer-events-none absolute -right-20 -top-20 size-56 rounded-full border border-white/10" />
            <p className="relative text-[11px] font-bold uppercase tracking-[0.14em] text-citron">
              {AURUM_PROOF.meta}
            </p>
            <h3 className="relative mt-4 max-w-2xl font-heading text-[clamp(1.35rem,2.6vw,1.9rem)] font-bold leading-snug tracking-[-0.015em]">
              {AURUM_PROOF.title}
            </h3>

            <dl className="relative mt-8 grid gap-6 border-y border-white/15 py-7 sm:grid-cols-3">
              {AURUM_PROOF.stats.map((st) => (
                <div key={st.label}>
                  <dt className="font-heading text-[clamp(2rem,4vw,2.9rem)] font-extrabold leading-none tracking-[-0.03em] text-citron">
                    {st.value}
                  </dt>
                  <dd className="mt-2 text-[13px] text-white/70">{st.label}</dd>
                </div>
              ))}
            </dl>

            <p className="relative mt-7 max-w-3xl text-[14px] leading-relaxed text-white/75">
              {AURUM_PROOF.body}
            </p>
            <p className="relative mt-5 text-[11.5px] leading-relaxed text-white/45">
              {AURUM_PROOF.graphPending}
            </p>
          </article>
        </Reveal>

        {/* proof-before-promises banner */}
        <Reveal delay={60}>
          <div className="mt-8 flex flex-col gap-5 rounded-3xl border border-line bg-surface px-8 py-7 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-indigo">
                {PROOF_BANNER.eyebrow}
              </p>
              <h3 className="mt-2 font-heading text-[19px] font-bold tracking-[-0.01em]">
                {PROOF_BANNER.title}
              </h3>
              <p className="mt-2 max-w-xl text-[14px] leading-relaxed text-graphite">
                {PROOF_BANNER.body}
              </p>
            </div>
            <div className="flex shrink-0 flex-wrap items-center gap-3">
              <CtaLink href={PROOF_BANNER.primaryCta.href}>
                {PROOF_BANNER.primaryCta.label}
              </CtaLink>
              <CtaLink href={PROOF_BANNER.secondaryCta.href} variant="ghost">
                {PROOF_BANNER.secondaryCta.label}
              </CtaLink>
            </div>
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
            Why Crypto Companies Need <span className="text-indigo">Specialized</span> SEO
          </h2>
          <p className="mt-5 max-w-2xl text-[15.5px] leading-relaxed text-graphite">
            {CRYPTO_DIFFERENT_INTRO}
          </p>
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

              {c.bullets && (
                <ul className="relative mt-4 grid gap-2">
                  {c.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2.5 text-[13px] leading-relaxed text-ink/80">
                      <span aria-hidden className="mt-[7px] size-1.5 shrink-0 rounded-full bg-indigo" />
                      {b}
                    </li>
                  ))}
                </ul>
              )}

              <p className="relative mt-4 text-[13.5px] leading-relaxed text-graphite">{c.close}</p>

              {c.note && (
                <p className="relative mt-4 border-t border-line pt-3 text-[11.5px] leading-relaxed text-graphite">
                  <span className="font-bold text-ink">Policy note:</span> {c.note}
                </p>
              )}
            </article>
          ))}
        </div>

        {/* founder insight. Editorial commentary, so it is set as a quote
            with a typographic mark and an author rule rather than a plain
            coloured bar. */}
        <Reveal delay={80}>
          <figure className="relative mt-12 overflow-hidden rounded-3xl bg-ink-solid px-8 py-10 md:px-14 md:py-12">
            {/* soft indigo wash so the panel is not a flat black slab */}
            <span
              aria-hidden
              className="pointer-events-none absolute -left-24 -top-24 size-72 rounded-full bg-indigo/25 blur-3xl"
            />
            <span
              aria-hidden
              className="pointer-events-none absolute -bottom-28 right-0 size-72 rounded-full bg-indigo/15 blur-3xl"
            />
            {/* oversized quote mark, set as decoration behind the text */}
            <span
              aria-hidden
              className="pointer-events-none absolute right-8 top-2 font-heading text-[140px] leading-none text-white/[0.07] md:right-14 md:text-[190px]"
            >
              &rdquo;
            </span>

            <div className="relative">
              <figcaption className="inline-flex items-center gap-2.5 text-[11px] font-bold uppercase tracking-[0.16em] text-citron">
                <span aria-hidden className="h-px w-7 bg-citron/60" />
                {FOUNDER_INSIGHT.eyebrow}
              </figcaption>

              <blockquote className="mt-6 max-w-3xl font-heading text-[clamp(1.15rem,2.2vw,1.6rem)] font-bold leading-[1.4] tracking-[-0.015em] text-white">
                {FOUNDER_INSIGHT.quote}
              </blockquote>

              <div className="mt-8 flex items-center gap-4">
                <span
                  aria-hidden
                  className="grid size-11 shrink-0 place-items-center rounded-full bg-white/10 font-heading text-[15px] font-bold text-white ring-1 ring-white/15"
                >
                  HL
                </span>
                <p className="text-[13.5px] leading-tight">
                  <span className="block font-bold text-white">{FOUNDER_INSIGHT.name}</span>
                  <span className="mt-0.5 block text-white/55">{FOUNDER_INSIGHT.role}</span>
                </p>
              </div>
            </div>
          </figure>
        </Reveal>
      </div>
    </section>
  );
}
