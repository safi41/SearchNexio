"use client";

import Reveal from "@/components/motion/Reveal";
import { CtaLink } from "@/components/ui";
import {
  ShopifyMark,
  WooCommerceMark,
  MagentoMark,
  BigCommerceMark,
  HeadlessMark,
  GoogleG,
} from "@/components/brand-icons";
import {
  ECOM_HERO,
  ECOM_REVENUE,
  ECOM_RESULTS,
  ECOM_DIFFERENT,
} from "@/lib/ecommerce-seo-content";

/* Site-wide orbit speed, matching every other hero diagram. */
const ORBIT_SPEED = "48s";

/* Platform marks for the hero orbit. The client asked for the real
   platforms store owners recognise, so each node carries that product's own
   mark, with Shopify at the hub as the most common ecommerce stack. */
const ECOM_MARKS: Record<string, React.ReactNode> = {
  woocommerce: <WooCommerceMark size={44} />,
  magento: <MagentoMark size={44} />,
  bigcommerce: <BigCommerceMark size={44} />,
  headless: <HeadlessMark size={44} />,
  merchant: <GoogleG size={40} />,
};

/* Glyphs for the hero trust chips. Line icons on the house 1.7 stroke. */
const CHIP_ICONS: Record<string, React.ReactNode> = {
  chart: (
    <>
      <path d="M4 19.4h16" />
      <rect x="6.2" y="12" width="3.2" height="6" rx="1" />
      <rect x="11.4" y="8.4" width="3.2" height="9.6" rx="1" />
      <rect x="16.6" y="5" width="3.2" height="13" rx="1" />
    </>
  ),
  target: (
    <>
      <circle cx="12" cy="12" r="8.4" />
      <circle cx="12" cy="12" r="4.4" />
      <circle cx="12" cy="12" r="1" fill="currentColor" stroke="none" />
    </>
  ),
  wrench: (
    <path d="M15.4 4.6a4.6 4.6 0 0 0-5.9 5.6L4 15.7l2.6 2.6 5.5-5.5a4.6 4.6 0 0 0 5.6-5.9l-2.7 2.7-2.2-2.2Z" />
  ),
  grid: (
    <>
      <rect x="4" y="4" width="7" height="7" rx="1.6" />
      <rect x="13" y="4" width="7" height="7" rx="1.6" />
      <rect x="4" y="13" width="7" height="7" rx="1.6" />
      <rect x="13" y="13" width="7" height="7" rx="1.6" />
    </>
  ),
};

/* ---- Hero orbit: the platforms a store actually runs on ----
   Five nodes, 72 degrees apart on the solid ring, with Shopify at the hub.
   Same construction as every other hero: the node layer revolves and each
   chip counter-spins so its mark stays upright. */
function PlatformLoop() {
  const spots = [
    "left-1/2 top-[12%] -translate-x-1/2 -translate-y-1/2",
    "left-[86.1%] top-[38.3%] -translate-x-1/2 -translate-y-1/2",
    "left-[72.3%] top-[80.7%] -translate-x-1/2 -translate-y-1/2",
    "left-[27.7%] top-[80.7%] -translate-x-1/2 -translate-y-1/2",
    "left-[13.9%] top-[38.3%] -translate-x-1/2 -translate-y-1/2",
  ];

  return (
    <div className="relative mx-auto aspect-square w-full max-w-[420px] lg:max-w-[540px]">
      {/* dashed outer ring */}
      <div aria-hidden className="absolute inset-[2%] rounded-full border border-dashed border-indigo/25" />

      {/* solid orbit ring the nodes travel on */}
      <div aria-hidden className="absolute inset-[12%] rounded-full border border-indigo/40" />

      {/* core: Shopify, the platform most of these stores run on */}
      <div className="absolute left-1/2 top-1/2 grid size-[42%] -translate-x-1/2 -translate-y-1/2 place-items-center">
        <span aria-hidden className="absolute inset-[-14%] rounded-full bg-[#95BF47]/18 blur-2xl" />
        <span className="relative grid size-full place-items-center rounded-full bg-surface shadow-[0_24px_60px_rgba(149,191,71,0.24)]">
          <span
            title="Shopify"
            aria-label="Shopify"
            className="grid size-[64%] place-items-center"
          >
            <span aria-hidden className="block w-full [&>svg]:h-auto [&>svg]:w-full">
              <ShopifyMark size={148} />
            </span>
          </span>
        </span>
      </div>

      {/* five platform nodes; names stay as tooltips and accessible labels */}
      <div
        className="animate-orbit absolute inset-0"
        style={{ animationDuration: ORBIT_SPEED }}
      >
        {ECOM_HERO.orbit.map((n, i) => (
          <div key={n.title} className={`absolute ${spots[i]}`}>
            <span
              title={`${n.title} ${n.sub}`}
              aria-label={`${n.title} ${n.sub}`}
              className="animate-orbit grid size-[84px] place-items-center rounded-full bg-surface shadow-[0_14px_36px_rgba(99,91,255,0.18)]"
              style={{ animationDuration: ORBIT_SPEED, animationDirection: "reverse" }}
            >
              {ECOM_MARKS[n.icon]}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* Splits a title so one phrase carries the indigo accent. */
function splitAccent(title: string, accent: string): [string, string, string] {
  const i = title.indexOf(accent);
  if (i < 0) return [title, "", ""];
  return [title.slice(0, i), accent, title.slice(i + accent.length)];
}

export function EcomHero() {
  const [before, accent, after] = splitAccent(ECOM_HERO.title, ECOM_HERO.accent);

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
              {ECOM_HERO.eyebrow}
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
              {ECOM_HERO.intro}
            </p>
          </Reveal>

          <Reveal delay={180} duration={600}>
            <div className="mt-9 flex flex-wrap items-center gap-3.5">
              <CtaLink href={ECOM_HERO.primaryCta.href}>
                {ECOM_HERO.primaryCta.label}
              </CtaLink>
              <CtaLink href={ECOM_HERO.secondaryCta.href} variant="ghost">
                {ECOM_HERO.secondaryCta.label}
              </CtaLink>
            </div>
          </Reveal>

          <Reveal delay={240} duration={600}>
            <p className="mt-7 max-w-lg text-[13.5px] leading-relaxed text-graphite">
              {ECOM_HERO.platformLine}
            </p>
          </Reveal>
        </div>

        <Reveal variant="scale" delay={120} duration={800}>
          <PlatformLoop />
        </Reveal>
      </div>

      {/* trust chips */}
      <div className="relative mx-auto max-w-7xl px-6 pb-16 lg:pb-24">
        <Reveal delay={80}>
          <div className="grid gap-px overflow-hidden rounded-3xl border border-line bg-line/70 sm:grid-cols-2 lg:grid-cols-4">
            {ECOM_HERO.chips.map((c) => (
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
                    {CHIP_ICONS[c.icon]}
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

/* ---- Ecommerce SEO Built Around Revenue ----
   Two-column essay with a diagram showing the copy's own point: a page can
   rank and still contribute nothing. */
export function EcomRevenue() {
  return (
    <section className="relative overflow-x-clip wash-lilac-full border-t border-line py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-16">
          <Reveal variant="left">
            <div>
              <span className="inline-flex rounded-full border border-line bg-surface px-3.5 py-1.5 text-[11.5px] font-bold uppercase tracking-[0.12em] text-indigo">
                {ECOM_REVENUE.badge}
              </span>
              <h2 className="mt-5 font-heading text-[clamp(1.9rem,3.6vw,2.6rem)] font-bold leading-[1.12] tracking-[-0.02em]">
                Ecommerce SEO Built Around{" "}
                <span className="text-indigo">{ECOM_REVENUE.accent}</span>, Not
                Just Rankings
              </h2>
              <div className="mt-6 grid gap-5">
                {ECOM_REVENUE.paras.map((p) => (
                  <p key={p.slice(0, 30)} className="text-[15.5px] leading-relaxed text-graphite">
                    {p}
                  </p>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal variant="right" delay={80}>
            <figure className="rounded-3xl border border-line bg-surface p-8">
              <figcaption className="text-[11.5px] font-bold uppercase tracking-[0.12em] text-graphite">
                Ranking is not the same as contributing
              </figcaption>
              <svg viewBox="0 0 420 208" className="mt-6 w-full" fill="none" aria-hidden>
                <text x="0" y="12" className="fill-graphite" style={{ fontSize: 9.5 }}>Page</text>
                <text x="196" y="12" className="fill-graphite" style={{ fontSize: 9.5 }}>Rank</text>
                <text x="262" y="12" className="fill-graphite" style={{ fontSize: 9.5 }}>Revenue contribution</text>
                {[
                  { p: "Category, right intent", r: "#3", w: 148, on: true },
                  { p: "Category, wrong intent", r: "#2", w: 22, on: false },
                  { p: "Thin, poorly linked page", r: "#8", w: 10, on: false },
                ].map((row, i) => {
                  const y = 34 + i * 52;
                  return (
                    <g key={row.p}>
                      <rect x="0" y={y} width="180" height="30" rx="7" fill="var(--color-surface)" stroke="var(--color-line)" strokeWidth="1.2" />
                      <text x="12" y={y + 19} className="fill-ink" style={{ fontSize: 10.5 }}>{row.p}</text>
                      <text x="196" y={y + 19} className="fill-graphite" style={{ fontSize: 10.5 }}>{row.r}</text>
                      <rect
                        x="262"
                        y={y + 8}
                        width={row.w}
                        height="14"
                        rx="4"
                        fill={row.on ? "var(--color-indigo)" : "var(--color-indigo)"}
                        fillOpacity={row.on ? 0.85 : 0.2}
                      />
                    </g>
                  );
                })}
                <text x="0" y="200" className="fill-graphite" style={{ fontSize: 10 }}>
                  Position alone does not tell you which pages earn revenue. Illustrative.
                </text>
              </svg>
            </figure>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ---- Ecommerce SEO Results ----
   Proof placement the deck asks for, held open until verified figures are
   supplied. Metrics are named as labels only. */
export function EcomResults() {
  return (
    <section id="ecommerce-results" className="relative overflow-x-clip border-t border-line py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:gap-16">
          <Reveal variant="left">
            <div>
              <span className="inline-flex rounded-full border border-line bg-surface px-3.5 py-1.5 text-[11.5px] font-bold uppercase tracking-[0.12em] text-indigo">
                {ECOM_RESULTS.badge}
              </span>
              <h2 className="mt-5 font-heading text-[clamp(1.9rem,3.6vw,2.6rem)] font-bold leading-[1.12] tracking-[-0.02em]">
                Ecommerce SEO{" "}
                <span className="text-indigo">{ECOM_RESULTS.accent}</span>
              </h2>
              <p className="mt-5 text-[15.5px] leading-relaxed text-graphite">
                {ECOM_RESULTS.lead}
              </p>
              <div className="mt-7 flex items-start gap-3 rounded-2xl border border-line bg-ivory/60 px-5 py-4">
                <span className="mt-0.5 grid size-6 shrink-0 place-items-center rounded-full bg-lilac text-indigo">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden>
                    <circle cx="12" cy="12" r="8.6" />
                    <path d="M12 8.2v4.6M12 15.8v.2" />
                  </svg>
                </span>
                <p className="text-[13.5px] leading-relaxed text-graphite">
                  <span className="font-bold text-ink">{ECOM_RESULTS.snapshot.heading}.</span>{" "}
                  {ECOM_RESULTS.snapshot.body}
                </p>
              </div>
            </div>
          </Reveal>

          {/* the store metrics we report on, as a revenue funnel */}
          <Reveal variant="right" delay={80}>
            <figure className="rounded-3xl border border-line bg-surface p-8 shadow-[0_10px_30px_rgba(11,13,18,0.05)]">
              <figcaption className="text-center font-heading text-[13px] font-bold uppercase tracking-[0.16em] text-indigo">
                {ECOM_RESULTS.snapshot.label}
              </figcaption>
              <svg viewBox="0 0 480 320" className="mt-7 w-full" fill="none" aria-hidden>
                {ECOM_RESULTS.measures.map((label, i) => {
                  const n = ECOM_RESULTS.measures.length;
                  const top = 430;
                  const bottom = 280;
                  const wTop = top - ((top - bottom) * i) / n;
                  const wBot = top - ((top - bottom) * (i + 1)) / n;
                  const y = i * 52;
                  const cx = 240;
                  return (
                    <g key={label}>
                      <path
                        d={`M${cx - wTop / 2} ${y} H${cx + wTop / 2} L${cx + wBot / 2} ${y + 44} H${cx - wBot / 2} Z`}
                        fill="var(--color-indigo)"
                        fillOpacity={0.1 + i * 0.13}
                      />
                      <text
                        x={cx}
                        y={y + 28}
                        textAnchor="middle"
                        className={i > 3 ? "fill-white" : "fill-ink"}
                        style={{ fontSize: 12, fontWeight: 600 }}
                      >
                        {label}
                      </text>
                    </g>
                  );
                })}
              </svg>
              <p className="mt-5 border-t border-line pt-5 text-[11.5px] text-graphite">
                What we report on. Figures are supplied per engagement.
              </p>
            </figure>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ---- Why Ecommerce Stores Need a Different SEO Strategy ----
   Essay plus a diagram of the URL explosion the copy describes. */
export function EcomDifferent() {
  return (
    <section className="relative overflow-x-clip bg-ivory border-t border-line py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <span className="inline-flex rounded-full border border-line bg-surface px-3.5 py-1.5 text-[11.5px] font-bold uppercase tracking-[0.12em] text-indigo">
            {ECOM_DIFFERENT.badge}
          </span>
          <h2 className="mt-5 max-w-3xl font-heading text-[clamp(1.9rem,3.6vw,2.6rem)] font-bold leading-[1.12] tracking-[-0.02em]">
            Why Ecommerce Stores Need a{" "}
            <span className="text-indigo">{ECOM_DIFFERENT.accent}</span> SEO
            Strategy
          </h2>
          <p className="mt-5 max-w-2xl font-heading text-[17px] font-bold leading-snug tracking-[-0.01em]">
            {ECOM_DIFFERENT.lead}
          </p>
        </Reveal>

        <div className="mt-12 grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-center lg:gap-16">
          <Reveal variant="left" delay={60}>
            <div className="grid gap-5">
              {ECOM_DIFFERENT.paras.map((p) => (
                <p key={p.slice(0, 30)} className="text-[15.5px] leading-relaxed text-graphite">
                  {p}
                </p>
              ))}
            </div>
          </Reveal>

          <Reveal variant="right" delay={120}>
            <figure className="rounded-3xl border border-line bg-surface p-8">
              <figcaption className="text-[11.5px] font-bold uppercase tracking-[0.12em] text-graphite">
                One product, many generated URLs
              </figcaption>
              <svg viewBox="0 0 420 226" className="mt-6 w-full" fill="none" aria-hidden>
                <rect x="150" y="6" width="120" height="32" rx="8" fill="var(--color-indigo)" fillOpacity="0.14" stroke="var(--color-indigo)" strokeWidth="1.3" />
                <text x="210" y="27" textAnchor="middle" className="fill-ink" style={{ fontSize: 11, fontWeight: 700 }}>Product</text>
                {[
                  "?colour=blue",
                  "?size=m",
                  "?sort=price",
                  "?page=2",
                  "&colour=blue&size=m",
                ].map((t, i) => {
                  const y = 66 + i * 30;
                  return (
                    <g key={t}>
                      <path d={`M210 40 C210 ${52 + i * 3} 118 ${y + 4} 106 ${y + 11}`} stroke="var(--color-indigo)" strokeWidth="1.1" strokeOpacity={0.4 - i * 0.05} />
                      <rect x="12" y={y} width="188" height="22" rx="5" stroke="var(--color-line)" strokeWidth="1.1" strokeDasharray="4 4" />
                      <text x="24" y={y + 15} className="fill-graphite" style={{ fontSize: 10 }}>{t}</text>
                    </g>
                  );
                })}
                {/* the decision */}
                <rect x="240" y="66" width="168" height="112" rx="9" fill="var(--color-ivory)" stroke="var(--color-line)" strokeWidth="1.2" />
                <text x="254" y="86" className="fill-graphite" style={{ fontSize: 9.5 }}>What we decide per URL</text>
                {[
                  ["Index", "var(--color-indigo)"],
                  ["Canonicalize", "var(--color-indigo)"],
                  ["Exclude", "var(--color-warn)"],
                ].map(([t, c], i) => (
                  <g key={String(t)}>
                    <circle cx="262" cy={110 + i * 24} r="4" fill={String(c)} />
                    <text x="276" y={114 + i * 24} className="fill-ink" style={{ fontSize: 10.5 }}>{t}</text>
                  </g>
                ))}
                <text x="12" y="216" className="fill-graphite" style={{ fontSize: 10 }}>
                  Most generated URLs should never be indexed. Illustrative.
                </text>
              </svg>
            </figure>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
