"use client";

import { useState } from "react";
import Link from "next/link";
import Reveal from "@/components/motion/Reveal";
import CtaBanner from "@/components/CtaBanner";
import {
  ShopifyMark,
  WooCommerceMark,
  MagentoMark,
  BigCommerceMark,
  HeadlessMark,
} from "@/components/brand-icons";
import {
  ECOM_SERVICES,
  ECOM_PROBLEMS,
  ECOM_MID_CTA,
  ECOM_PLATFORMS,
  ECOM_PROCESS,
} from "@/lib/ecommerce-seo-content";
import { SectionBadge } from "@/components/ui";

/* Shared frame so every service diagram sits in the same container. */
function Frame({ children }: { children: React.ReactNode }) {
  return (
    <figure className="mt-6 rounded-2xl border border-line bg-ivory/50 px-6 py-7">
      {children}
      <figcaption className="mt-4 text-[11.5px] text-graphite">
        Illustrative example.
      </figcaption>
    </figure>
  );
}

const T = { fontSize: 10.5 } as const;
const TB = { fontSize: 11, fontWeight: 700 } as const;
const TS = { fontSize: 9.5 } as const;

/* 01 Strategy: search demand routed to the page type that can answer it. */
function DPageType() {
  const rows = [
    { q: "running shoes", kind: "Broad buying", page: "Category" },
    { q: "trail running shoes mens", kind: "Narrower", page: "Subcategory" },
    { q: "brand model gtx size 10", kind: "Specific", page: "Product" },
    { q: "trail vs road running shoes", kind: "Research", page: "Guide" },
  ];
  return (
    <svg viewBox="0 0 440 200" className="w-full" fill="none" aria-hidden>
      <text x="0" y="12" className="fill-graphite" style={TS}>Search</text>
      <text x="212" y="12" className="fill-graphite" style={TS}>Intent</text>
      <text x="320" y="12" className="fill-graphite" style={TS}>Page that answers it</text>
      {rows.map((r, i) => {
        const y = 28 + i * 40;
        return (
          <g key={r.q}>
            <rect x="0" y={y} width="196" height="28" rx="7" fill="var(--color-surface)" stroke="var(--color-line)" strokeWidth="1.2" />
            <text x="12" y={y + 18} className="fill-ink" style={T}>{r.q}</text>
            <text x="212" y={y + 18} className="fill-graphite" style={T}>{r.kind}</text>
            <path d={`M300 ${y + 14} h12m0 0-4-4m4 4-4 4`} stroke="var(--color-indigo)" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
            <rect x="320" y={y} width="120" height="28" rx="7" fill="var(--color-indigo)" fillOpacity={0.2 - i * 0.035} stroke="var(--color-indigo)" strokeWidth="1.2" strokeOpacity="0.4" />
            <text x="380" y={y + 18} textAnchor="middle" className="fill-ink" style={T}>{r.page}</text>
          </g>
        );
      })}
      <text x="0" y="194" className="fill-graphite" style={TS}>Commercial value falls as the search narrows, so effort follows the top rows.</text>
    </svg>
  );
}

/* 02 Category SEO: several pages competing for one search, then resolved. */
function DCannibalization() {
  return (
    <svg viewBox="0 0 440 208" className="w-full" fill="none" aria-hidden>
      <text x="0" y="12" className="fill-graphite" style={TS}>Before</text>
      <ellipse cx="98" cy="104" rx="52" ry="26" fill="var(--color-warn)" fillOpacity="0.09" stroke="var(--color-warn)" strokeWidth="1.1" strokeDasharray="4 4" />
      <text x="98" y="152" textAnchor="middle" className="fill-warn" style={TS}>one search, three pages</text>
      {["/mens-boots", "/boots-mens", "/footwear/boots"].map((t, i) => (
        <g key={t}>
          <rect x="8" y={28 + i * 26} width="180" height="21" rx="5" fill="var(--color-surface)" stroke="var(--color-line)" strokeWidth="1.1" />
          <text x="20" y={43 + i * 26} className="fill-ink" style={T}>{t}</text>
        </g>
      ))}
      <path d="M204 100 h26m0 0-7-5m7 5-7 5" stroke="var(--color-indigo)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <text x="252" y="12" className="fill-graphite" style={TS}>After</text>
      <rect x="252" y="52" width="188" height="34" rx="8" fill="var(--color-indigo)" fillOpacity="0.14" stroke="var(--color-indigo)" strokeWidth="1.3" />
      <text x="346" y="74" textAnchor="middle" className="fill-ink" style={TB}>/mens-boots</text>
      {["/boots-mens", "/footwear/boots"].map((t, i) => (
        <g key={t}>
          <rect x="272" y={104 + i * 26} width="148" height="20" rx="5" stroke="var(--color-line)" strokeWidth="1.1" strokeDasharray="4 4" />
          <text x="284" y={118 + i * 26} className="fill-graphite" style={TS}>{t}</text>
          <path d={`M346 ${104 + i * 26} L346 90`} stroke="var(--color-indigo)" strokeWidth="1.1" strokeOpacity="0.5" />
        </g>
      ))}
      <text x="0" y="190" className="fill-graphite" style={TS}>Duplicates canonicalize into the page that should rank.</text>
    </svg>
  );
}

/* 03 Product page: what a shopper needs to decide, beyond the description. */
function DProduct() {
  const needs = ["Search intent match", "Information depth", "Variants handled", "Reviews", "Internal links in", "Structured data"];
  return (
    <svg viewBox="0 0 440 190" className="w-full" fill="none" aria-hidden>
      <rect x="0" y="30" width="128" height="122" rx="9" fill="var(--color-surface)" stroke="var(--color-line)" strokeWidth="1.2" />
      <text x="64" y="18" textAnchor="middle" className="fill-graphite" style={TS}>Product page</text>
      <rect x="16" y="46" width="96" height="42" rx="6" fill="var(--color-indigo)" fillOpacity="0.12" />
      <path d="M16 102 h96M16 116 h72M16 130 h84" stroke="var(--color-line)" strokeWidth="2.4" strokeLinecap="round" />
      {needs.map((t, i) => {
        const y = 22 + i * 27;
        return (
          <g key={t}>
            <path d={`M132 ${Math.min(150, 60 + i * 12)} C176 ${y + 8} 180 ${y + 8} 202 ${y + 8}`} stroke="var(--color-indigo)" strokeWidth="1.1" strokeOpacity="0.4" />
            <rect x="206" y={y - 4} width="234" height="22" rx="6" fill="var(--color-indigo)" fillOpacity="0.08" stroke="var(--color-indigo)" strokeWidth="1" strokeOpacity="0.3" />
            <text x="218" y={y + 11} className="fill-ink" style={T}>{t}</text>
          </g>
        );
      })}
    </svg>
  );
}

/* 04 Technical: crawl budget spent on facets instead of priority pages. */
function DCrawl() {
  return (
    <svg viewBox="0 0 440 196" className="w-full" fill="none" aria-hidden>
      <text x="0" y="12" className="fill-graphite" style={TS}>Crawl budget spent</text>
      <rect x="0" y="24" width="300" height="26" rx="6" fill="var(--color-warn)" fillOpacity="0.16" />
      <text x="12" y="41" className="fill-ink" style={T}>Filter and parameter URLs</text>
      <rect x="0" y="58" width="64" height="26" rx="6" fill="var(--color-indigo)" fillOpacity="0.5" />
      <text x="76" y="75" className="fill-ink" style={T}>Priority categories and products</text>

      <path d="M0 108 H440" stroke="var(--color-line)" strokeWidth="1.2" strokeDasharray="4 4" />

      <text x="0" y="130" className="fill-graphite" style={TS}>After indexation rules</text>
      <rect x="0" y="142" width="70" height="26" rx="6" fill="var(--color-warn)" fillOpacity="0.16" />
      <text x="82" y="159" className="fill-graphite" style={T}>facets excluded</text>
      <rect x="196" y="142" width="244" height="26" rx="6" fill="var(--color-indigo)" fillOpacity="0.5" />
      <text x="208" y="159" className="fill-white" style={T}>Priority categories and products</text>
      <text x="0" y="190" className="fill-graphite" style={TS}>Bar widths are illustrative, not measured crawl data.</text>
    </svg>
  );
}

/* 05 Architecture: authority flowing to revenue pages, not spread evenly. */
function DArchitecture() {
  return (
    <svg viewBox="0 0 440 190" className="w-full" fill="none" aria-hidden>
      <rect x="176" y="6" width="88" height="30" rx="8" fill="var(--color-indigo)" fillOpacity="0.14" stroke="var(--color-indigo)" strokeWidth="1.3" />
      <text x="220" y="26" textAnchor="middle" className="fill-ink" style={TB}>Homepage</text>
      {[0, 1, 2].map((i) => {
        const x = 34 + i * 138;
        const strong = i === 1;
        return (
          <g key={i}>
            <path d={`M220 38 C220 56 ${x + 46} 56 ${x + 46} 74`} stroke="var(--color-indigo)" strokeWidth={strong ? 2.6 : 1.1} strokeOpacity={strong ? 0.8 : 0.3} />
            <rect x={x} y="74" width="92" height="30" rx="7" fill="var(--color-surface)" stroke={strong ? "var(--color-indigo)" : "var(--color-line)"} strokeWidth={strong ? 1.5 : 1.2} />
            <text x={x + 46} y="94" textAnchor="middle" className="fill-ink" style={T}>{`Category ${i + 1}`}</text>
            <path d={`M${x + 46} 106 V128`} stroke="var(--color-indigo)" strokeWidth={strong ? 2.2 : 1} strokeOpacity={strong ? 0.7 : 0.25} />
            <rect x={x + 10} y="128" width="72" height="26" rx="6" fill="var(--color-indigo)" fillOpacity={strong ? 0.18 : 0.06} stroke="var(--color-line)" strokeWidth="1" />
            <text x={x + 46} y="145" textAnchor="middle" className="fill-ink" style={TS}>Products</text>
          </g>
        );
      })}
      <text x="0" y="182" className="fill-graphite" style={TS}>Thicker links carry more authority. Revenue pages get the strongest paths.</text>
    </svg>
  );
}

/* 06 Content strategy: every supporting page links into a commercial one. */
function DContent() {
  const supports = ["Buying guide", "Product comparison", "Use-case page", "FAQ"];
  return (
    <svg viewBox="0 0 440 186" className="w-full" fill="none" aria-hidden>
      {supports.map((t, i) => {
        const y = 14 + i * 38;
        return (
          <g key={t}>
            <rect x="0" y={y} width="152" height="28" rx="7" fill="var(--color-surface)" stroke="var(--color-line)" strokeWidth="1.2" />
            <text x="12" y={y + 18} className="fill-ink" style={T}>{t}</text>
            <path d={`M156 ${y + 14} C206 ${y + 14} 214 84 246 84`} stroke="var(--color-indigo)" strokeWidth="1.2" strokeOpacity="0.5" />
          </g>
        );
      })}
      <rect x="250" y="58" width="190" height="52" rx="9" fill="var(--color-indigo)" fillOpacity="0.12" stroke="var(--color-indigo)" strokeWidth="1.3" strokeOpacity="0.5" />
      <text x="345" y="80" textAnchor="middle" className="fill-ink" style={TB}>Category and product</text>
      <text x="345" y="96" textAnchor="middle" className="fill-graphite" style={TS}>somewhere commercial to go</text>
      <text x="0" y="178" className="fill-graphite" style={TS}>Content with no path to a commercial page is not doing ecommerce SEO work.</text>
    </svg>
  );
}

/* 07 Authority: links aimed at commercial pages, not spread evenly. */
function DAuthority() {
  return (
    <svg viewBox="0 0 440 186" className="w-full" fill="none" aria-hidden>
      <text x="0" y="12" className="fill-graphite" style={TS}>Spread evenly</text>
      {[0, 1, 2, 3, 4].map((i) => (
        <g key={i}>
          <circle cx={22 + i * 34} cy="46" r="8" fill="var(--color-indigo)" fillOpacity="0.16" />
        </g>
      ))}
      <text x="0" y="74" className="fill-graphite" style={TS}>Every page gets a little. Nothing moves.</text>

      <path d="M0 100 H440" stroke="var(--color-line)" strokeWidth="1.2" strokeDasharray="4 4" />

      <text x="0" y="124" className="fill-graphite" style={TS}>Aimed at commercial pages</text>
      <circle cx="40" cy="158" r="18" fill="var(--color-indigo)" fillOpacity="0.65" />
      <circle cx="96" cy="158" r="13" fill="var(--color-indigo)" fillOpacity="0.4" />
      <circle cx="140" cy="158" r="7" fill="var(--color-indigo)" fillOpacity="0.2" />
      <text x="176" y="150" className="fill-ink" style={T}>Priority category</text>
      <text x="176" y="166" className="fill-graphite" style={TS}>gets the most authority</text>
    </svg>
  );
}

/* 08 Schema: site and feed must agree, or the product is misunderstood. */
function DSchema() {
  const rows = [
    { f: "Price", a: "£89.00", b: "£89.00", ok: true },
    { f: "Availability", a: "In stock", b: "Out of stock", ok: false },
    { f: "Variant", a: "Blue / M", b: "Blue / M", ok: true },
  ];
  return (
    <svg viewBox="0 0 440 176" className="w-full" fill="none" aria-hidden>
      <text x="132" y="14" className="fill-graphite" style={TS}>Product page</text>
      <text x="268" y="14" className="fill-graphite" style={TS}>Merchant Center feed</text>
      {rows.map((r, i) => {
        const y = 30 + i * 40;
        return (
          <g key={r.f}>
            <text x="0" y={y + 19} className="fill-ink" style={T}>{r.f}</text>
            <rect x="120" y={y} width="120" height="28" rx="6" fill="var(--color-surface)" stroke="var(--color-line)" strokeWidth="1.2" />
            <text x="180" y={y + 18} textAnchor="middle" className="fill-ink" style={T}>{r.a}</text>
            <rect x="264" y={y} width="120" height="28" rx="6" fill="var(--color-surface)" stroke={r.ok ? "var(--color-line)" : "var(--color-warn)"} strokeWidth={r.ok ? 1.2 : 1.5} />
            <text x="324" y={y + 18} textAnchor="middle" className={r.ok ? "fill-ink" : "fill-warn"} style={T}>{r.b}</text>
            {r.ok ? (
              <path d={`M400 ${y + 14} l5 5 9-10`} stroke="var(--color-indigo)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            ) : (
              <path d={`M400 ${y + 8} l12 12m0-12-12 12`} stroke="var(--color-warn)" strokeWidth="2" strokeLinecap="round" />
            )}
          </g>
        );
      })}
      <text x="0" y="168" className="fill-graphite" style={TS}>A mismatch changes how the product is understood and shown across search.</text>
    </svg>
  );
}

/* 09 AI search: the same product data feeding both surfaces. */
function DAiSearch() {
  return (
    <svg viewBox="0 0 440 170" className="w-full" fill="none" aria-hidden>
      <rect x="0" y="52" width="140" height="62" rx="9" fill="var(--color-indigo)" fillOpacity="0.1" stroke="var(--color-indigo)" strokeWidth="1.2" strokeOpacity="0.45" />
      <text x="70" y="76" textAnchor="middle" className="fill-ink" style={TB}>Product data</text>
      <text x="70" y="92" textAnchor="middle" className="fill-graphite" style={TS}>schema, category content</text>
      {["Traditional results", "AI-assisted answers"].map((t, i) => {
        const y = 44 + i * 52;
        return (
          <g key={t}>
            <path d={`M144 83 C196 83 200 ${y + 15} 236 ${y + 15}`} stroke="var(--color-indigo)" strokeWidth="1.3" strokeOpacity="0.55" />
            <rect x="240" y={y} width="200" height="30" rx="7" stroke="var(--color-line)" strokeWidth="1.2" />
            <text x="254" y={y + 19} className="fill-ink" style={T}>{t}</text>
          </g>
        );
      })}
      <text x="0" y="162" className="fill-graphite" style={TS}>One set of product data. We do not maintain a separate feed per surface.</text>
    </svg>
  );
}

/* Built once at module load so element identity stays stable across
   re-renders; React can then skip reconciling unchanged diagram subtrees. */
const DIAGRAMS: Record<string, React.ReactNode> = {
    pagetype: <DPageType />,
    cannibalization: <DCannibalization />,
    product: <DProduct />,
    crawl: <DCrawl />,
    architecture: <DArchitecture />,
    content: <DContent />,
    authority: <DAuthority />,
    schema: <DSchema />,
    aisearch: <DAiSearch />,
};

function ServiceDiagram({ kind }: { kind: string }) {
  const body = DIAGRAMS[kind];
  if (!body) return null;
  return <Frame>{body}</Frame>;
}

/* ---- Our Ecommerce SEO Services ----
   Numbered rail on the left, active service and its diagram on the right.
   Accordion on mobile. */
export function EcomServices() {
  const [active, setActive] = useState(0);
  const current = ECOM_SERVICES.items[active];

  return (
    <section id="ecommerce-services" className="relative overflow-x-clip border-t border-line py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <SectionBadge>{ECOM_SERVICES.badge}</SectionBadge>
          <h2 className="mt-5 max-w-2xl font-heading text-[clamp(1.9rem,3.6vw,2.6rem)] font-bold leading-[1.12] tracking-[-0.02em]">
            Our Ecommerce SEO{" "}
            <span className="text-indigo">{ECOM_SERVICES.accent}</span>
          </h2>
          <p className="mt-5 max-w-2xl text-[15.5px] leading-relaxed text-graphite">
            {ECOM_SERVICES.intro}
          </p>
        </Reveal>

        {/* desktop */}
        <div className="mt-12 hidden gap-10 lg:grid lg:grid-cols-[0.4fr_0.6fr]">
          <Reveal variant="left" delay={60}>
            <nav className="overflow-hidden rounded-3xl border border-line bg-surface">
              {ECOM_SERVICES.items.map((s, i) => {
                const on = i === active;
                return (
                  <button
                    key={s.key}
                    type="button"
                    onClick={() => setActive(i)}
                    aria-pressed={on}
                    className={`group flex w-full items-center gap-4 border-b border-line px-6 py-4 text-left transition-colors duration-300 ease-soft last:border-b-0 ${
                      on ? "bg-ivory/70" : "hover:bg-ivory/50"
                    }`}
                  >
                    <span
                      className={`font-heading text-[12.5px] font-bold tabular-nums transition-colors duration-300 ${
                        on ? "text-indigo" : "text-indigo/40 group-hover:text-indigo"
                      }`}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span
                      className={`font-heading text-[14.5px] font-bold leading-snug tracking-[-0.01em] transition-colors duration-300 ${
                        on ? "text-indigo" : "group-hover:text-indigo"
                      }`}
                    >
                      {s.title}
                    </span>
                  </button>
                );
              })}
            </nav>
          </Reveal>

          <Reveal variant="right" delay={120}>
            <div key={active} className="geo-panel-fade rounded-3xl border border-line bg-surface p-8">
              <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-indigo">
                Service {String(active + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-3 font-heading text-[clamp(1.25rem,2.1vw,1.6rem)] font-bold leading-snug tracking-[-0.015em]">
                {current.title}
              </h3>
              <p className="mt-4 text-[15px] leading-relaxed text-graphite">
                {current.desc}
              </p>
              {current.close && (
                <p className="mt-4 text-[15px] leading-relaxed text-graphite">
                  {current.close}
                </p>
              )}
              {current.link && (
                <Link
                  href={current.link.href}
                  className="group mt-4 inline-flex items-center gap-1.5 text-[14.5px] font-bold text-indigo"
                >
                  {current.link.label}
                  <span className="transition-transform duration-200 group-hover:translate-x-0.5">
                    &rarr;
                  </span>
                </Link>
              )}
              {current.diagram && <ServiceDiagram kind={current.diagram} />}
            </div>
          </Reveal>
        </div>

        {/* mobile accordion */}
        <div className="mt-10 grid gap-px overflow-hidden rounded-3xl border border-line bg-line/70 lg:hidden">
          {ECOM_SERVICES.items.map((s, i) => (
            <details key={s.key} className="group bg-surface" open={i === 0}>
              <summary className="flex cursor-pointer items-center gap-4 px-6 py-5">
                <span className="font-heading text-[12.5px] font-bold tabular-nums text-indigo/50">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="font-heading text-[15px] font-bold leading-snug tracking-[-0.01em]">
                  {s.title}
                </span>
              </summary>
              <div className="px-6 pb-7">
                <p className="text-[14.5px] leading-relaxed text-graphite">{s.desc}</p>
                {s.close && (
                  <p className="mt-3 text-[14.5px] leading-relaxed text-graphite">{s.close}</p>
                )}
                {s.link && (
                  <p className="mt-3 text-[14px] font-bold text-indigo">{s.link.label}</p>
                )}
                {s.diagram && <ServiceDiagram kind={s.diagram} />}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---- Ecommerce SEO Problems We Solve ----
   Six problems as a numbered ledger, so the section reads as diagnosis. */
export function EcomProblems() {
  return (
    <section className="relative overflow-x-clip wash-lilac-full border-t border-line py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <SectionBadge>{ECOM_PROBLEMS.badge}</SectionBadge>
          <h2 className="mt-5 max-w-2xl font-heading text-[clamp(1.9rem,3.6vw,2.6rem)] font-bold leading-[1.12] tracking-[-0.02em]">
            Ecommerce SEO{" "}
            <span className="text-indigo">{ECOM_PROBLEMS.accent}</span> We Solve
          </h2>
        </Reveal>

        <div className="mt-12 overflow-hidden rounded-3xl border border-line bg-surface">
          {ECOM_PROBLEMS.items.map((it, i) => (
            <Reveal key={it.title} delay={i * 50}>
              <div className="group grid gap-3 border-b border-line px-6 py-7 transition-colors duration-300 ease-soft last:border-b-0 hover:bg-ivory/60 lg:grid-cols-[56px_0.85fr_1.15fr] lg:items-start lg:gap-8 lg:px-8">
                <span className="font-heading text-[13px] font-bold tabular-nums text-indigo/40 transition-colors duration-300 group-hover:text-indigo">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-heading text-[16.5px] font-bold leading-snug tracking-[-0.01em] transition-colors duration-300 group-hover:text-indigo">
                  {it.title}
                </h3>
                <p className="text-[14.5px] leading-relaxed text-graphite">{it.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---- Mid-page CTA banner on the indigo ground. ---- */
export function EcomMidCta() {
  return <CtaBanner title={ECOM_MID_CTA.title} body={ECOM_MID_CTA.body} cta={ECOM_MID_CTA.cta} bodyWide />;
}

/* ---- Ecommerce SEO for Your Platform ----
   Five platform cards, each carrying its own brand mark. */
const PLATFORM_MARKS: Record<string, React.ReactNode> = {
  shopify: <ShopifyMark size={38} />,
  woocommerce: <WooCommerceMark size={38} />,
  magento: <MagentoMark size={38} />,
  bigcommerce: <BigCommerceMark size={38} />,
  headless: <HeadlessMark size={38} />,
};

export function EcomPlatforms() {
  return (
    <section className="relative overflow-x-clip border-t border-line py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <SectionBadge>{ECOM_PLATFORMS.badge}</SectionBadge>
          <h2 className="mt-5 max-w-2xl font-heading text-[clamp(1.9rem,3.6vw,2.6rem)] font-bold leading-[1.12] tracking-[-0.02em]">
            Ecommerce SEO for Your{" "}
            <span className="text-indigo">{ECOM_PLATFORMS.accent}</span>
          </h2>
          <p className="mt-5 max-w-2xl text-[15.5px] leading-relaxed text-graphite">
            {ECOM_PLATFORMS.intro}
          </p>
        </Reveal>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-6">
          {ECOM_PLATFORMS.items.map((it, i) => (
            <Reveal
              key={it.title}
              delay={i * 60}
              className={i < 3 ? "lg:col-span-2" : "md:col-span-1 lg:col-span-3"}
            >
              <div className="group flex h-full flex-col rounded-3xl bg-surface p-7 shadow-[0_10px_30px_rgba(11,13,18,0.05)] transition-all duration-300 ease-soft hover:-translate-y-1.5 hover:scale-[1.015] hover:shadow-[0_24px_56px_rgba(99,91,255,0.14)]">
                <span className="grid size-12 place-items-center rounded-2xl bg-ivory transition-transform duration-300 ease-soft group-hover:scale-110">
                  {PLATFORM_MARKS[it.icon]}
                </span>
                <h3 className="mt-5 font-heading text-[16.5px] font-bold tracking-[-0.01em] transition-colors duration-300 group-hover:text-indigo">
                  {it.title}
                </h3>
                <span className="mt-3 block h-0.5 w-7 rounded-full bg-indigo transition-all duration-300 ease-soft group-hover:w-12" />
                <p className="mt-4 text-[14.5px] leading-relaxed text-graphite">{it.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---- How Our Ecommerce SEO Process Works ----
   Five steps on a horizontal rail, deepening toward measurement. */
export function EcomProcess() {
  return (
    <section id="ecommerce-process" className="relative overflow-x-clip bg-ivory border-t border-line py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <SectionBadge>{ECOM_PROCESS.badge}</SectionBadge>
          <h2 className="mt-5 max-w-2xl font-heading text-[clamp(1.9rem,3.6vw,2.6rem)] font-bold leading-[1.12] tracking-[-0.02em]">
            How Our Ecommerce SEO{" "}
            <span className="text-indigo">{ECOM_PROCESS.accent}</span> Works
          </h2>
        </Reveal>

        <Reveal delay={80}>
          <div className="mt-12 flex items-center gap-3">
            <span className="text-[11.5px] font-bold uppercase tracking-[0.12em] text-graphite">
              Audit
            </span>
            <span aria-hidden className="h-px flex-1 bg-gradient-to-r from-indigo/20 to-indigo" />
            <span className="text-[11.5px] font-bold uppercase tracking-[0.12em] text-indigo">
              Revenue
            </span>
          </div>
        </Reveal>

        <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {ECOM_PROCESS.steps.map((s, i) => (
            <Reveal key={s.n} delay={i * 70}>
              <div
                className="group flex h-full flex-col rounded-3xl border border-line bg-surface p-6 transition-all duration-300 ease-soft hover:-translate-y-1.5 hover:border-indigo/40 hover:shadow-[0_24px_56px_rgba(99,91,255,0.14)]"
                style={{ background: `color-mix(in srgb, var(--color-indigo) ${(i * 2.2).toFixed(1)}%, var(--c-surface))` }}
              >
                <span className="font-heading text-[12.5px] font-bold tabular-nums text-indigo/50 transition-colors duration-300 group-hover:text-indigo">
                  {s.n}
                </span>
                <h3 className="mt-2 font-heading text-[15px] font-bold leading-snug tracking-[-0.01em] transition-colors duration-300 group-hover:text-indigo">
                  {s.title}
                </h3>
                <span className="mt-3 block h-0.5 w-6 rounded-full bg-indigo transition-all duration-300 ease-soft group-hover:w-11" />
                <p className="mt-3 text-[13.5px] leading-relaxed text-graphite">{s.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
