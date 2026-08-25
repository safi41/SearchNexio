"use client";

import { useState } from "react";
import Reveal from "@/components/motion/Reveal";
import {
  CRYPTO_SERVICES,
  CRYPTO_RESULTS,
  CRYPTO_AUDIENCES,
  CRYPTO_TRUST,
  CRYPTO_DELIVERABLES,
} from "@/lib/crypto-seo-content";

/* ---- What Our Crypto SEO Includes ----
   Sticky service list on the left, the active service's copy on the right.
   No decorative icons: the brief is explicit that the specificity of the
   copy is the differentiator. Accordion on mobile. */

/* Service diagrams. Each explains a mechanism the copy alone cannot show.
   Services whose copy is already self-explanatory get none, per the brief's
   rule that nothing on this page decorates. */
/* Shared frame so every service diagram sits in the same container. */
function DiagramFrame({ children }: { children: React.ReactNode }) {
  return (
    <figure className="mt-6 rounded-2xl border border-line bg-ivory/50 px-6 py-7">
      {children}
      <figcaption className="mt-4 text-[11.5px] text-graphite">Illustrative example.</figcaption>
    </figure>
  );
}

/* 04 Technical crypto SEO: crawl paths, with the app subdomain unreachable. */
function CrawlDiagram() {
  return (
    <>
      <svg viewBox="0 0 460 208" className="w-full" fill="none" aria-hidden>
        {/* crawl paths drawn first so the boxes sit on top of them */}
        {/* marketing site up to docs portal */}
        <path d="M136 88 C176 88 176 42 200 42" stroke="var(--color-indigo)" strokeWidth="1.3" strokeOpacity="0.75" />
        {/* marketing site down to asset pages */}
        <path d="M136 116 C176 116 176 162 200 162" stroke="var(--color-indigo)" strokeWidth="1.3" strokeOpacity="0.75" />
        {/* marketing site straight across toward the app subdomain */}
        <path d="M136 102 H318" stroke="var(--color-indigo)" strokeWidth="1.3" strokeOpacity="0.75" />

        {/* the break: crawl cannot reach the app subdomain */}
        <path
          d="m330 94 12 16M342 94l-12 16"
          stroke="var(--color-warn)"
          strokeWidth="2"
          strokeLinecap="round"
        />

        {/* marketing site, the crawl entry point */}
        <rect x="20" y="80" width="116" height="44" rx="9" fill="var(--color-surface)" stroke="var(--color-indigo)" strokeWidth="1.5" />
        <text x="78" y="99" textAnchor="middle" className="fill-ink" style={{ fontSize: 11.5, fontWeight: 700 }}>Marketing site</text>
        <text x="78" y="113" textAnchor="middle" className="fill-graphite" style={{ fontSize: 9.5 }}>crawled</text>

        {/* docs portal */}
        <rect x="200" y="20" width="116" height="44" rx="9" fill="var(--color-surface)" stroke="var(--color-line)" strokeWidth="1.5" />
        <text x="258" y="39" textAnchor="middle" className="fill-ink" style={{ fontSize: 11.5, fontWeight: 700 }}>Docs portal</text>
        <text x="258" y="53" textAnchor="middle" className="fill-graphite" style={{ fontSize: 9.5 }}>crawled</text>

        {/* asset pages */}
        <rect x="200" y="140" width="116" height="44" rx="9" fill="var(--color-surface)" stroke="var(--color-line)" strokeWidth="1.5" />
        <text x="258" y="159" textAnchor="middle" className="fill-ink" style={{ fontSize: 11.5, fontWeight: 700 }}>Asset pages</text>
        <text x="258" y="173" textAnchor="middle" className="fill-graphite" style={{ fontSize: 9.5 }}>crawled</text>

        {/* app subdomain: the highlighted problem area */}
        <rect
          x="352" y="80" width="116" height="44" rx="9"
          fill="rgba(194,65,12,0.05)"
          stroke="var(--color-warn)"
          strokeWidth="1.5"
          strokeDasharray="6 4"
        />
        <text x="410" y="99" textAnchor="middle" className="fill-ink" style={{ fontSize: 11.5, fontWeight: 700 }}>App subdomain</text>
        <text x="410" y="113" textAnchor="middle" style={{ fontSize: 9.5, fill: "var(--color-warn)" }}>not reachable</text>
      </svg>
    </>
  );
}

/* 01 Crypto search strategy: queries mapped to pages by intent stage. */
function IntentDiagram() {
  const rows = [
    { q: "problem query", stage: "Problem", page: "Use-case page" },
    { q: "service query", stage: "Service", page: "Service page" },
    { q: "comparison query", stage: "Compare", page: "Comparison page" },
  ];
  return (
    <div className="grid gap-2.5">
      {rows.map((r) => (
        <div key={r.stage} className="flex items-center gap-2.5">
          <span className="flex min-w-0 flex-1 items-center gap-2 rounded-lg border border-line bg-surface px-3 py-2">
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="var(--color-indigo)" strokeWidth="2" strokeLinecap="round" aria-hidden className="shrink-0">
              <circle cx="11" cy="11" r="6.5" />
              <path d="M15.8 15.8 20 20" />
            </svg>
            <span className="truncate text-[11.5px] text-graphite">{r.q}</span>
          </span>
          <span className="shrink-0 rounded-md bg-lilac px-2 py-1 text-[10px] font-bold uppercase tracking-[0.08em] text-indigo">
            {r.stage}
          </span>
          <svg width="16" height="10" viewBox="0 0 16 10" fill="none" aria-hidden className="shrink-0">
            <path d="M0 5h13m0 0-3.5-3.5M13 5l-3.5 3.5" stroke="var(--color-indigo)" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span className="w-[124px] shrink-0 truncate rounded-lg border border-indigo/30 bg-surface px-3 py-2 text-[11.5px] font-semibold text-ink">
            {r.page}
          </span>
        </div>
      ))}
    </div>
  );
}

/* 03 Product and service pages: which commercial pages have coverage. */
function CoverageDiagram() {
  const rows = [
    { page: "Service page", demand: 82, covered: true },
    { page: "Comparison page", demand: 64, covered: true },
    { page: "Use-case page", demand: 47, covered: false },
  ];
  return (
    <div className="grid gap-3">
      {rows.map((r) => (
        <div key={r.page} className="flex items-center gap-3">
          <span className="w-[120px] shrink-0 text-[11.5px] font-semibold text-ink">{r.page}</span>
          <span className="h-2.5 flex-1 overflow-hidden rounded-full bg-ink/8">
            <span
              className={"block h-full rounded-full " + (r.covered ? "bg-indigo" : "bg-warn/45")}
              style={{ width: r.demand + "%" }}
            />
          </span>
          <span
            className={
              "w-[92px] shrink-0 text-right text-[10.5px] font-bold uppercase tracking-[0.06em] " +
              (r.covered ? "text-indigo" : "text-warn")
            }
          >
            {r.covered ? "covered" : "no page"}
          </span>
        </div>
      ))}
    </div>
  );
}

/* 06 Branded search reputation: what occupies a branded results page. */
function SerpDiagram() {
  const rows = [
    { label: "Your site", owned: true },
    { label: "Your docs and profiles", owned: true },
    { label: "Third-party coverage", owned: false },
    { label: "Review and forum threads", owned: false },
  ];
  return (
    <div>
      <div className="mb-3 flex items-center gap-2.5 rounded-lg bg-ink-solid px-3 py-2">
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="var(--color-citron)" strokeWidth="2" strokeLinecap="round" aria-hidden>
          <circle cx="11" cy="11" r="6.5" />
          <path d="M15.8 15.8 20 20" />
        </svg>
        <span className="text-[11.5px] font-medium text-white/90">brand name</span>
      </div>
      <div className="grid gap-2">
        {rows.map((r) => (
          <div key={r.label} className="flex items-center gap-3 rounded-lg border border-line bg-surface px-3 py-2">
            <span className={"size-2 shrink-0 rounded-full " + (r.owned ? "bg-indigo" : "bg-graphite/40")} />
            <span className="flex-1 truncate text-[11.5px] text-ink">{r.label}</span>
            <span className="shrink-0 text-[10px] font-bold uppercase tracking-[0.06em] text-graphite">
              {r.owned ? "owned" : "third party"}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* 07 International crypto SEO: one architecture, per-market branches. */
function MarketsDiagram() {
  return (
    <svg viewBox="0 0 460 176" className="w-full" fill="none" aria-hidden>
      <path d="M136 88 C176 88 176 40 200 40" stroke="var(--color-indigo)" strokeWidth="1.3" strokeOpacity="0.75" />
      <path d="M136 88 H200" stroke="var(--color-indigo)" strokeWidth="1.3" strokeOpacity="0.75" />
      <path d="M136 88 C176 88 176 136 200 136" stroke="var(--color-indigo)" strokeWidth="1.3" strokeOpacity="0.75" />

      <rect x="20" y="66" width="116" height="44" rx="9" fill="var(--color-surface)" stroke="var(--color-indigo)" strokeWidth="1.5" />
      <text x="78" y="85" textAnchor="middle" className="fill-ink" style={{ fontSize: 11.5, fontWeight: 700 }}>Site architecture</text>
      <text x="78" y="99" textAnchor="middle" className="fill-graphite" style={{ fontSize: 9.5 }}>hreflang set</text>

      <rect x="200" y="18" width="116" height="44" rx="9" fill="var(--color-surface)" stroke="var(--color-line)" strokeWidth="1.5" />
      <text x="258" y="37" textAnchor="middle" className="fill-ink" style={{ fontSize: 11.5, fontWeight: 700 }}>Market A</text>
      <text x="258" y="51" textAnchor="middle" className="fill-graphite" style={{ fontSize: 9.5 }}>localized pages</text>

      <rect x="200" y="66" width="116" height="44" rx="9" fill="var(--color-surface)" stroke="var(--color-line)" strokeWidth="1.5" />
      <text x="258" y="85" textAnchor="middle" className="fill-ink" style={{ fontSize: 11.5, fontWeight: 700 }}>Market B</text>
      <text x="258" y="99" textAnchor="middle" className="fill-graphite" style={{ fontSize: 9.5 }}>localized pages</text>

      <rect x="200" y="114" width="116" height="44" rx="9" fill="var(--color-surface)" stroke="var(--color-line)" strokeWidth="1.5" />
      <text x="258" y="133" textAnchor="middle" className="fill-ink" style={{ fontSize: 11.5, fontWeight: 700 }}>Market C</text>
      <text x="258" y="147" textAnchor="middle" className="fill-graphite" style={{ fontSize: 9.5 }}>localized pages</text>

      <path d="M316 40 C340 40 340 88 360 88" stroke="var(--color-indigo)" strokeWidth="1.3" strokeOpacity="0.5" />
      <path d="M316 88 H360" stroke="var(--color-indigo)" strokeWidth="1.3" strokeOpacity="0.5" />
      <path d="M316 136 C340 136 340 88 360 88" stroke="var(--color-indigo)" strokeWidth="1.3" strokeOpacity="0.5" />
      <rect x="360" y="66" width="84" height="44" rx="9" fill="var(--color-lilac)" stroke="var(--color-indigo)" strokeWidth="1.3" strokeOpacity="0.5" />
      <text x="402" y="85" textAnchor="middle" className="fill-ink" style={{ fontSize: 11, fontWeight: 700 }}>Reported</text>
      <text x="402" y="99" textAnchor="middle" className="fill-graphite" style={{ fontSize: 9.5 }}>per market</text>
    </svg>
  );
}

/* 09 Acquisition tracking: session to event, with the attribution gap named. */
function AttributionDiagram() {
  const steps = ["Organic session", "Product or service page", "Conversion event"];
  return (
    <div>
      <div className="flex flex-wrap items-center gap-2.5">
        {steps.map((step, i) => (
          <span key={step} className="flex items-center gap-2.5">
            {i > 0 && (
              <svg width="16" height="10" viewBox="0 0 16 10" fill="none" aria-hidden>
                <path d="M0 5h13m0 0-3.5-3.5M13 5l-3.5 3.5" stroke="var(--color-indigo)" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            )}
            <span
              className={
                "rounded-lg border px-3 py-2 text-[11.5px] font-semibold " +
                (i === 2 ? "border-indigo/40 bg-lilac/50 text-ink" : "border-line bg-surface text-ink")
              }
            >
              {step}
            </span>
          </span>
        ))}
      </div>
      <div className="mt-3 flex items-center gap-2.5 rounded-lg border border-dashed border-warn/45 bg-warn/5 px-3 py-2">
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden className="shrink-0">
          <path d="M6 1.5v5M6 9v.5" stroke="var(--color-warn)" strokeWidth="1.6" strokeLinecap="round" />
        </svg>
        <span className="text-[11px] text-graphite">
          On-chain actions and authenticated product events sit outside this chain. Reported as an attribution gap.
        </span>
      </div>
    </div>
  );
}

/* 10 AI assisted crypto discovery: entity signals feeding representation. */
function EntityDiagram() {
  const signals = [
    "What the company does",
    "What the product offers",
    "Who the founders are",
    "Third-party descriptions",
  ];
  return (
    <div className="grid gap-4 sm:grid-cols-[1fr_auto_auto] sm:items-center">
      <div className="grid gap-2">
        {signals.map((sig) => (
          <span key={sig} className="flex items-center gap-2.5 rounded-lg border border-line bg-surface px-3 py-1.5">
            <span className="size-1.5 shrink-0 rounded-full bg-indigo" />
            <span className="truncate text-[11.5px] text-ink">{sig}</span>
          </span>
        ))}
      </div>
      <svg width="20" height="12" viewBox="0 0 20 12" fill="none" aria-hidden className="hidden justify-self-center sm:block">
        <path d="M0 6h16m0 0-4-4M16 6l-4 4" stroke="var(--color-indigo)" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      <span className="grid gap-1 rounded-xl border border-indigo/30 bg-lilac/40 px-4 py-3 text-center">
        <span className="text-[11px] font-bold uppercase tracking-[0.1em] text-indigo">AI representation</span>
        <span className="text-[10.5px] leading-snug text-graphite">Assessed, not guaranteed</span>
      </span>
    </div>
  );
}

/* 02 High trust content SEO: the publication workflow, with maintenance
   looping back rather than ending at publish. */
function WorkflowDiagram() {
  const steps = [
    { label: "Brief", note: "intent and sourcing" },
    { label: "Draft", note: "named author" },
    { label: "Review", note: "before publication" },
    { label: "Publish", note: "with attribution" },
  ];
  return (
    <div>
      <div className="grid gap-2.5 sm:grid-cols-4">
        {steps.map((s, i) => (
          <div key={s.label} className="relative rounded-lg border border-line bg-surface px-3 py-2.5">
            <span className="block text-[11px] font-bold tabular-nums text-indigo">
              {String(i + 1).padStart(2, "0")}
            </span>
            <span className="mt-1 block text-[12px] font-semibold text-ink">{s.label}</span>
            <span className="mt-0.5 block text-[10.5px] leading-snug text-graphite">{s.note}</span>
          </div>
        ))}
      </div>
      <div className="mt-2.5 flex items-center gap-2.5 rounded-lg border border-indigo/25 bg-lilac/40 px-3 py-2">
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="var(--color-indigo)" strokeWidth="1.8" strokeLinecap="round" aria-hidden className="shrink-0">
          <path d="M19.5 12a7.5 7.5 0 0 1-13 5.1M4.5 12a7.5 7.5 0 0 1 13-5.1" />
          <path d="M17.5 3.5v3.4h-3.4M6.5 20.5v-3.4h3.4" />
        </svg>
        <span className="text-[11px] text-ink">
          Maintenance returns to the brief when tax guidance, fees or product details change.
        </span>
      </div>
    </div>
  );
}

/* 05 Crypto authority building: the source types that carry credibility.
   Deliberately shows categories, never named publications or counts, since
   the copy promises neither placements nor backlink volumes. */
function AuthorityDiagram() {
  const sources = [
    "Editorial coverage",
    "Original research",
    "Founder commentary",
    "Digital PR",
    "Reference sources",
  ];
  return (
    <div className="grid gap-4 sm:grid-cols-[auto_auto_1fr] sm:items-center">
      <span className="grid gap-1 rounded-xl border border-indigo/30 bg-lilac/40 px-4 py-3 text-center">
        <span className="text-[11px] font-bold uppercase tracking-[0.1em] text-indigo">Your brand</span>
        <span className="text-[10.5px] leading-snug text-graphite">in its sub-category</span>
      </span>
      <svg width="20" height="12" viewBox="0 0 20 12" fill="none" aria-hidden className="hidden justify-self-center sm:block">
        <path d="M0 6h16m0 0-4-4M16 6l-4 4" stroke="var(--color-indigo)" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      <div className="flex flex-wrap gap-2">
        {sources.map((src) => (
          <span key={src} className="rounded-lg border border-line bg-surface px-3 py-1.5 text-[11.5px] text-ink">
            {src}
          </span>
        ))}
      </div>
    </div>
  );
}

/* 08 Conversion optimization: the four checks run on a page a user lands
   on from search. */
function FrictionDiagram() {
  const checks = [
    "Page addresses the search intent",
    "Next action is visible",
    "Onboarding path is not longer than it needs to be",
    "Trust signals support the decision",
  ];
  return (
    <div>
      <div className="mb-3 flex items-center gap-2.5 rounded-lg border border-indigo/30 bg-surface px-3 py-2">
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="var(--color-indigo)" strokeWidth="2" strokeLinecap="round" aria-hidden className="shrink-0">
          <circle cx="11" cy="11" r="6.5" />
          <path d="M15.8 15.8 20 20" />
        </svg>
        <span className="text-[11.5px] font-semibold text-ink">User arrives from search</span>
      </div>
      <div className="grid gap-2">
        {checks.map((c) => (
          <div key={c} className="flex items-center gap-3 rounded-lg border border-line bg-surface px-3 py-2">
            <span className="grid size-4 shrink-0 place-items-center rounded-full bg-citron">
              <svg width="8" height="8" viewBox="0 0 12 12" fill="none" aria-hidden>
                <path d="m2.5 6.5 2.5 2.5 4.5-5" stroke="#0B0D12" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
            <span className="text-[11.5px] text-ink">{c}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* Maps a service's diagram key to its visual. */
function ServiceDiagram({ kind }: { kind: string }) {
  const map: Record<string, React.ReactNode> = {
    intent: <IntentDiagram />,
    workflow: <WorkflowDiagram />,
    coverage: <CoverageDiagram />,
    crawl: <CrawlDiagram />,
    authority: <AuthorityDiagram />,
    friction: <FrictionDiagram />,
    serp: <SerpDiagram />,
    markets: <MarketsDiagram />,
    attribution: <AttributionDiagram />,
    entity: <EntityDiagram />,
  };
  const body = map[kind];
  if (!body) return null;
  return <DiagramFrame>{body}</DiagramFrame>;
}

export function CryptoServices() {
  const [active, setActive] = useState(0);
  const current = CRYPTO_SERVICES[active];

  return (
    <section className="overflow-x-clip wash-lilac-full py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <h2 className="max-w-2xl font-heading text-[clamp(1.9rem,3.6vw,2.6rem)] font-bold leading-[1.12] tracking-[-0.02em]">
            What Our Crypto SEO <span className="text-indigo">Includes</span>
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:gap-14">
          {/* desktop: sticky anchor list */}
          <Reveal variant="left" className="hidden lg:block">
            <nav className="sticky top-28">
              <ul className="grid">
                {CRYPTO_SERVICES.map((s, i) => {
                  const on = i === active;
                  return (
                    <li key={s.key}>
                      <button
                        type="button"
                        onClick={() => setActive(i)}
                        aria-current={on ? "true" : undefined}
                        className={`flex w-full items-center gap-3 border-l-2 py-3 pl-5 text-left transition-all duration-300 ease-soft ${
                          on
                            ? "border-indigo text-indigo"
                            : "border-line text-ink/70 hover:border-indigo/40 hover:text-ink"
                        }`}
                      >
                        <span className={`font-heading text-[12px] font-bold tabular-nums ${on ? "text-indigo" : "text-graphite/60"}`}>
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <span className="font-heading text-[14.5px] font-bold tracking-[-0.01em]">{s.title}</span>
                      </button>
                    </li>
                  );
                })}
              </ul>
            </nav>
          </Reveal>

          {/* desktop: active service panel */}
          <Reveal variant="right" delay={80} className="hidden lg:block">
            <div key={active} className="geo-panel-fade">
              <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-indigo">
                Service {String(active + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-3 font-heading text-[clamp(1.3rem,2.2vw,1.75rem)] font-bold tracking-[-0.02em]">
                {current.title}
              </h3>
              <p className="mt-4 text-[15px] leading-relaxed text-graphite">{current.desc}</p>

              {current.bullets && (
                <ul className="mt-5 grid gap-2 sm:grid-cols-2">
                  {current.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2.5 text-[13.5px] leading-relaxed text-ink/80">
                      <span aria-hidden className="mt-[7px] size-1.5 shrink-0 rounded-full bg-indigo" />
                      {b}
                    </li>
                  ))}
                </ul>
              )}
              {current.deliverable && (
                <p className="mt-5 rounded-2xl border border-indigo/20 bg-lilac/40 px-5 py-4 text-[13.5px] leading-relaxed text-ink">
                  <span className="font-semibold">Deliverable.</span> {current.deliverable}
                </p>
              )}
              {current.limit && (
                <p className="mt-4 flex gap-3 text-[13px] leading-relaxed text-graphite">
                  <span aria-hidden className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-warn/10 text-warn">
                    <svg width="11" height="11" viewBox="0 0 12 12" fill="none"><path d="M6 1.5v5M6 9v.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" /></svg>
                  </span>
                  {current.limit}
                </p>
              )}
              {current.diagram && <ServiceDiagram kind={current.diagram} />}

              <div className="mt-5 flex flex-wrap gap-4">
                {current.link && (
                  <a href={current.link.href} className="text-[13.5px] font-semibold text-indigo underline decoration-indigo/30 underline-offset-2">
                    {current.link.label}
                  </a>
                )}
                {current.link2 && (
                  <a href={current.link2.href} className="text-[13.5px] font-semibold text-indigo underline decoration-indigo/30 underline-offset-2">
                    {current.link2.label}
                  </a>
                )}
              </div>
            </div>
          </Reveal>

          {/* mobile: accordion, one open at a time */}
          <div className="lg:hidden">
            {CRYPTO_SERVICES.map((s, i) => {
              const on = i === active;
              return (
                <div key={s.key} className="border-b border-line last:border-b-0">
                  <button
                    type="button"
                    onClick={() => setActive(on ? -1 : i)}
                    aria-expanded={on}
                    className="flex w-full items-center gap-3 py-4 text-left"
                  >
                    <span className={`font-heading text-[12px] font-bold tabular-nums ${on ? "text-indigo" : "text-graphite/60"}`}>
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className={`flex-1 font-heading text-[15px] font-bold tracking-[-0.01em] ${on ? "text-indigo" : ""}`}>{s.title}</span>
                    <span className={`grid size-6 shrink-0 place-items-center rounded-full border border-line transition-transform duration-300 ${on ? "rotate-45 border-indigo/40 bg-indigo text-white" : "text-graphite"}`}>
                      <svg width="12" height="12" viewBox="0 0 14 14" fill="none" aria-hidden><path d="M7 2v10M2 7h10" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" /></svg>
                    </span>
                  </button>
                  <div className={`grid transition-all duration-300 ease-soft ${on ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
                    <div className="overflow-hidden">
                      <div className="pb-5">
                        <p className="text-[13.5px] leading-relaxed text-graphite">{s.desc}</p>
                        {s.bullets && (
                          <ul className="mt-4 grid gap-2">
                            {s.bullets.map((b) => (
                              <li key={b} className="flex items-start gap-2.5 text-[13px] leading-relaxed text-ink/80">
                                <span aria-hidden className="mt-[7px] size-1.5 shrink-0 rounded-full bg-indigo" />
                                {b}
                              </li>
                            ))}
                          </ul>
                        )}
                        {s.deliverable && (
                          <p className="mt-3 rounded-xl border border-indigo/20 bg-lilac/40 px-4 py-3 text-[12.5px] leading-relaxed text-ink">
                            <span className="font-semibold">Deliverable.</span> {s.deliverable}
                          </p>
                        )}
                        {s.limit && <p className="mt-3 text-[12.5px] leading-relaxed text-graphite">{s.limit}</p>}
                        {s.diagram && <ServiceDiagram kind={s.diagram} />}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---- Crypto SEO Results: two cards, held with placeholder styling until
   verified data is confirmed. No numbers are rendered. ---- */
export function CryptoResults() {
  return (
    <section className="overflow-x-clip py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <h2 className="max-w-2xl font-heading text-[clamp(1.9rem,3.6vw,2.6rem)] font-bold leading-[1.12] tracking-[-0.02em]">
            Crypto SEO <span className="text-indigo">Results</span>
          </h2>
        </Reveal>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {CRYPTO_RESULTS.cards.map((c, i) => (
            <Reveal key={c.label} variant="up" delay={i * 80}>
              <article
                className={`flex h-full flex-col rounded-3xl p-8 ${
                  i === 0 ? "cta-indigo text-white" : "border border-line bg-surface"
                }`}
              >
                <span className={`text-[11px] font-bold uppercase tracking-[0.12em] ${i === 0 ? "text-citron" : "text-indigo"}`}>
                  {c.label}
                </span>
                <p className="mt-5 font-heading text-[clamp(1.35rem,2.4vw,1.75rem)] font-bold leading-snug tracking-[-0.015em]">
                  {c.heading}
                </p>
                <p className={`mt-4 text-[13.5px] leading-relaxed ${i === 0 ? "text-white/70" : "text-graphite"}`}>
                  {c.body}
                </p>
                <p className={`mt-auto border-t pt-5 text-[11.5px] ${i === 0 ? "border-white/10 text-white/45" : "border-line text-graphite/70"}`}>
                  Figures are published only once verified with the client.
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---- Who We Help: 2x3 audience grid, hover border only. ---- */
export function CryptoAudiences() {
  return (
    <section className="overflow-x-clip wash-lilac-full py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <h2 className="font-heading text-[clamp(1.9rem,3.6vw,2.6rem)] font-bold leading-[1.12] tracking-[-0.02em]">
            Who We <span className="text-indigo">Help</span>
          </h2>
        </Reveal>

        {/* Crypto audiences read as an index: hairline-divided rows with the
            audience name held left and its detail right, so the section
            scans differently from the healthcare card grid. */}
        <div className="mt-10 grid border-t border-line">
          {CRYPTO_AUDIENCES.map((a, i) => (
            <article
              key={a.name}
              className="group grid gap-3 border-b border-line py-7 transition-colors duration-300 ease-soft hover:bg-surface lg:grid-cols-[56px_0.8fr_1.2fr] lg:items-start lg:gap-8 lg:px-5"
            >
              <span
                aria-hidden
                className="font-heading text-[13px] font-bold tabular-nums text-indigo/40 transition-colors duration-300 group-hover:text-indigo"
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="font-heading text-[17px] font-bold leading-snug tracking-[-0.01em] transition-colors duration-300 group-hover:text-indigo">
                {a.name}
              </h3>
              <div>
                <p className="text-[13.5px] leading-relaxed text-graphite">{a.desc}</p>
                {a.query && (
                  <p className="mt-3 inline-flex w-fit items-center gap-2 rounded-lg bg-ink-solid px-3 py-1.5 text-[11.5px] font-medium text-white/90">
                    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="var(--color-citron)" strokeWidth="2" strokeLinecap="round" aria-hidden>
                      <circle cx="11" cy="11" r="6.5" />
                      <path d="M15.8 15.8 20 20" />
                    </svg>
                    {a.query}
                  </p>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---- Built for Crypto Trust: four numbered cards on a connecting line.
   Static by instruction: motion would undermine the credibility. ---- */
export function CryptoTrust() {
  return (
    <section className="overflow-x-clip py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <h2 className="font-heading text-[clamp(1.9rem,3.6vw,2.6rem)] font-bold leading-[1.12] tracking-[-0.02em]">
            Built for Crypto <span className="text-indigo">Trust</span>
          </h2>
        </Reveal>

        {/* Crypto presents its trust controls as a 2x2 of quiet panels with
            a rule above each title, rather than a connected sequence. */}
        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {CRYPTO_TRUST.map((t, i) => (
            <article key={t.title} className="rounded-3xl bg-surface p-8 shadow-[0_10px_30px_rgba(11,13,18,0.05)]">
              <div className="flex items-center gap-3">
                <span className="h-0.5 w-8 rounded-full bg-indigo" />
                <span className="font-heading text-[12px] font-bold uppercase tracking-[0.14em] text-indigo">
                  Control {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <h3 className="mt-4 font-heading text-[17px] font-bold tracking-[-0.01em]">{t.title}</h3>
              <p className="mt-3 text-[13.5px] leading-relaxed text-graphite">{t.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---- What You Receive: documented scope of work. Plain rows separated by
   hairlines, no icons, no color variation, no animation. ---- */
export function CryptoDeliverables() {
  return (
    <section className="overflow-x-clip wash-lilac-full py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <h2 className="max-w-2xl font-heading text-[clamp(1.9rem,3.6vw,2.6rem)] font-bold leading-[1.12] tracking-[-0.02em]">
            What You <span className="text-indigo">Receive</span>
          </h2>
        </Reveal>

        <div className="mt-10 grid border-t border-line md:grid-cols-2 lg:grid-cols-3">
          {CRYPTO_DELIVERABLES.map((d) => (
            <div key={d.title} className="border-b border-line px-1 py-6 lg:px-5">
              <h3 className="font-heading text-[15px] font-bold tracking-[-0.01em]">{d.title}</h3>
              <p className="mt-2 text-[13px] leading-relaxed text-graphite">{d.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
