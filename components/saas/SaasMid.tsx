"use client";

import { useState } from "react";
import Link from "next/link";
import Reveal from "@/components/motion/Reveal";
import { SectionBadge } from "@/components/ui";
import {
  SAAS_SERVICES,
  SAAS_PROCESS,
  SAAS_JOURNEY,
  SAAS_PRODUCT_LED,
} from "@/lib/saas-seo-content";

/* Shared frame so every service diagram sits in the same container. */
function DiagramFrame({ children }: { children: React.ReactNode }) {
  return (
    <figure className="mt-6 rounded-2xl border border-line bg-ivory/50 px-6 py-7">
      {children}
      <figcaption className="mt-4 text-[11.5px] text-graphite">
        Illustrative example.
      </figcaption>
    </figure>
  );
}

/* 01 Keyword strategy: the same head term scored on five axes, so effort
   lands on the search that can actually move a buyer. */
function IntentDiagram() {
  const rows = [
    { label: "Broad category term", bars: [3, 1, 1, 2, 1] },
    { label: "Use-case query", bars: [4, 4, 3, 4, 3] },
    { label: "Competitor alternative", bars: [4, 5, 5, 5, 4] },
  ];
  return (
    <svg viewBox="0 0 460 190" className="w-full" fill="none" aria-hidden>
      {["ICP fit", "Intent", "Funnel", "Product", "Winnable"].map((h, i) => (
        <text
          key={h}
          x={196 + i * 54}
          y="18"
          textAnchor="middle"
          className="fill-graphite"
          style={{ fontSize: 9.5 }}
        >
          {h}
        </text>
      ))}
      {rows.map((r, ri) => {
        const y = 46 + ri * 46;
        return (
          <g key={r.label}>
            <text x="0" y={y + 4} className="fill-ink" style={{ fontSize: 11 }}>
              {r.label}
            </text>
            {r.bars.map((v, bi) => (
              <rect
                key={bi}
                x={196 + bi * 54 - 18}
                y={y - 10}
                width="36"
                height="15"
                rx="3.5"
                fill="var(--color-indigo)"
                fillOpacity={0.14 + v * 0.15}
              />
            ))}
          </g>
        );
      })}
      <text x="0" y="178" className="fill-graphite" style={{ fontSize: 10 }}>
        Effort follows the rows that score highest, not the highest volume.
      </text>
    </svg>
  );
}

/* 02 Product-led SEO: the blog carrying rankings alone, versus product
   pages each holding their own search role. */
function PagesDiagram() {
  const owned = ["Feature", "Use case", "Integration", "Comparison", "Alternative"];
  return (
    <svg viewBox="0 0 460 200" className="w-full" fill="none" aria-hidden>
      <text x="0" y="14" className="fill-graphite" style={{ fontSize: 10 }}>
        Blog only
      </text>
      <rect x="0" y="26" width="150" height="40" rx="8" fill="var(--color-indigo)" fillOpacity="0.12" />
      <text x="75" y="51" textAnchor="middle" className="fill-ink" style={{ fontSize: 11 }}>
        Blog ranks
      </text>
      {[0, 1, 2].map((i) => (
        <g key={i}>
          <rect
            x="0"
            y={78 + i * 26}
            width="150"
            height="18"
            rx="5"
            stroke="var(--color-line)"
            strokeWidth="1.2"
            strokeDasharray="3 3"
          />
          <text x="75" y={91 + i * 26} textAnchor="middle" className="fill-graphite" style={{ fontSize: 9.5 }}>
            product page buried
          </text>
        </g>
      ))}

      {/* the shift */}
      <path
        d="M172 100h34m0 0-8-6m8 6-8 6"
        stroke="var(--color-indigo)"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <text x="228" y="14" className="fill-graphite" style={{ fontSize: 10 }}>
        Product-led
      </text>
      {owned.map((p, i) => (
        <g key={p}>
          <rect
            x="228"
            y={26 + i * 32}
            width="188"
            height="24"
            rx="6"
            fill="var(--color-indigo)"
            fillOpacity="0.1"
            stroke="var(--color-indigo)"
            strokeWidth="1.1"
            strokeOpacity="0.4"
          />
          <text x="240" y={42 + i * 32} className="fill-ink" style={{ fontSize: 10.5 }}>
            {p} page
          </text>
          <circle cx="404" cy={38 + i * 32} r="4.6" fill="var(--color-indigo)" />
        </g>
      ))}
    </svg>
  );
}

/* 03 Technical SEO: a client-rendered route the crawler cannot resolve,
   next to the same route served with its content already in the HTML. */
function RenderDiagram() {
  return (
    <svg viewBox="0 0 460 186" className="w-full" fill="none" aria-hidden>
      {/* unresolved */}
      <text x="0" y="14" className="fill-graphite" style={{ fontSize: 10 }}>
        Content rendered client-side
      </text>
      <rect x="0" y="26" width="96" height="34" rx="7" stroke="var(--color-line)" strokeWidth="1.3" />
      <text x="48" y="47" textAnchor="middle" className="fill-ink" style={{ fontSize: 10 }}>
        Crawler
      </text>
      <path d="M100 43h44" stroke="var(--color-indigo)" strokeWidth="1.3" strokeOpacity="0.7" />
      <rect x="148" y="26" width="104" height="34" rx="7" stroke="var(--color-line)" strokeWidth="1.3" />
      <text x="200" y="47" textAnchor="middle" className="fill-ink" style={{ fontSize: 10 }}>
        Empty shell
      </text>
      <path
        d="m270 36 12 16m0-16-12 16"
        stroke="var(--color-warn)"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <text x="296" y="48" className="fill-warn" style={{ fontSize: 10 }}>
        nothing to index
      </text>

      {/* resolved */}
      <text x="0" y="104" className="fill-graphite" style={{ fontSize: 10 }}>
        Content served in the HTML
      </text>
      <rect x="0" y="116" width="96" height="34" rx="7" stroke="var(--color-line)" strokeWidth="1.3" />
      <text x="48" y="137" textAnchor="middle" className="fill-ink" style={{ fontSize: 10 }}>
        Crawler
      </text>
      <path d="M100 133h44" stroke="var(--color-indigo)" strokeWidth="1.3" strokeOpacity="0.7" />
      <rect
        x="148"
        y="116"
        width="104"
        height="34"
        rx="7"
        fill="var(--color-indigo)"
        fillOpacity="0.1"
        stroke="var(--color-indigo)"
        strokeWidth="1.2"
        strokeOpacity="0.5"
      />
      <text x="200" y="137" textAnchor="middle" className="fill-ink" style={{ fontSize: 10 }}>
        Full page
      </text>
      <path
        d="M270 133h30m0 0-7-5m7 5-7 5"
        stroke="var(--color-indigo)"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <text x="308" y="137" className="fill-ink" style={{ fontSize: 10 }}>
        indexed
      </text>
    </svg>
  );
}

/* 04 Content strategy: decision-stage work sequenced first, educational
   topics expanding out from it rather than the other way round. */
function SequenceDiagram() {
  const phases = [
    { label: "Decision stage", note: "comparisons, alternatives", w: 132 },
    { label: "Product adjacent", note: "use cases, integrations", w: 132 },
    { label: "Educational", note: "supporting the same journey", w: 132 },
  ];
  return (
    <svg viewBox="0 0 460 168" className="w-full" fill="none" aria-hidden>
      <path d="M6 84h448" stroke="var(--color-line)" strokeWidth="1.2" />
      {phases.map((p, i) => {
        const x = 6 + i * 152;
        return (
          <g key={p.label}>
            <rect
              x={x}
              y="52"
              width={p.w}
              height="46"
              rx="8"
              fill="var(--color-indigo)"
              fillOpacity={0.16 - i * 0.045}
              stroke="var(--color-indigo)"
              strokeWidth="1.1"
              strokeOpacity={0.5 - i * 0.13}
            />
            <text x={x + p.w / 2} y="72" textAnchor="middle" className="fill-ink" style={{ fontSize: 11 }}>
              {p.label}
            </text>
            <text
              x={x + p.w / 2}
              y="88"
              textAnchor="middle"
              className="fill-graphite"
              style={{ fontSize: 9.5 }}
            >
              {p.note}
            </text>
            <circle cx={x + p.w / 2} cy="34" r="9" fill="var(--color-indigo)" fillOpacity="0.12" />
            <text
              x={x + p.w / 2}
              y="38"
              textAnchor="middle"
              className="fill-indigo"
              style={{ fontSize: 10, fontWeight: 700 }}
            >
              {i + 1}
            </text>
            {i < 2 && (
              <path
                d={`M${x + p.w + 4} 75h12m0 0-5-4m5 4-5 4`}
                stroke="var(--color-indigo)"
                strokeWidth="1.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            )}
          </g>
        );
      })}
      <text x="6" y="140" className="fill-graphite" style={{ fontSize: 10 }}>
        Sequence runs left to right. Nothing publishes to fill a quota.
      </text>
    </svg>
  );
}

/* 05 Authority: relevant sources inside the market carry weight that an
   unrelated backlink count does not. */
function AuthorityDiagram() {
  const sources = [
    { label: "Industry publication", r: 15 },
    { label: "Original data", r: 13 },
    { label: "Digital PR", r: 12 },
    { label: "Partnership", r: 11 },
  ];
  return (
    <svg viewBox="0 0 460 190" className="w-full" fill="none" aria-hidden>
      <circle cx="300" cy="95" r="36" fill="var(--color-indigo)" fillOpacity="0.12" />
      <circle cx="300" cy="95" r="36" stroke="var(--color-indigo)" strokeWidth="1.3" strokeOpacity="0.5" />
      <text x="300" y="92" textAnchor="middle" className="fill-ink" style={{ fontSize: 10.5 }}>
        Priority
      </text>
      <text x="300" y="105" textAnchor="middle" className="fill-ink" style={{ fontSize: 10.5 }}>
        page
      </text>
      {sources.map((s, i) => {
        const y = 30 + i * 44;
        return (
          <g key={s.label}>
            <circle cx="60" cy={y} r={s.r} fill="var(--color-indigo)" fillOpacity="0.16" />
            <text x="84" y={y + 4} className="fill-ink" style={{ fontSize: 10.5 }}>
              {s.label}
            </text>
            <path
              d={`M212 ${y} C248 ${y} 244 95 262 95`}
              stroke="var(--color-indigo)"
              strokeWidth="1.3"
              strokeOpacity="0.6"
            />
          </g>
        );
      })}
      <text x="0" y="182" className="fill-graphite" style={{ fontSize: 10 }}>
        Relevance to your market decides the weight, not the total count.
      </text>
    </svg>
  );
}

/* 06 AI search: one page, read by several surfaces. The same signals feed
   each, which is why they are planned together. */
function SurfacesDiagram() {
  const surfaces = ["Google", "AI Overviews", "ChatGPT", "Gemini", "Perplexity"];
  return (
    <svg viewBox="0 0 460 176" className="w-full" fill="none" aria-hidden>
      <rect
        x="0"
        y="58"
        width="118"
        height="56"
        rx="9"
        fill="var(--color-indigo)"
        fillOpacity="0.1"
        stroke="var(--color-indigo)"
        strokeWidth="1.2"
        strokeOpacity="0.45"
      />
      <text x="59" y="82" textAnchor="middle" className="fill-ink" style={{ fontSize: 11 }}>
        Your product
      </text>
      <text x="59" y="97" textAnchor="middle" className="fill-ink" style={{ fontSize: 11 }}>
        page
      </text>
      {surfaces.map((s, i) => {
        const y = 20 + i * 32;
        return (
          <g key={s}>
            <path
              d={`M122 86 C170 86 168 ${y + 9} 208 ${y + 9}`}
              stroke="var(--color-indigo)"
              strokeWidth="1.25"
              strokeOpacity="0.55"
            />
            <rect
              x="212"
              y={y}
              width="150"
              height="19"
              rx="5"
              stroke="var(--color-line)"
              strokeWidth="1.1"
            />
            <text x="224" y={y + 13} className="fill-ink" style={{ fontSize: 10 }}>
              {s}
            </text>
          </g>
        );
      })}
      <text x="0" y="150" className="fill-graphite" style={{ fontSize: 10 }}>
        One set of signals. We do not write a separate page per surface.
      </text>
    </svg>
  );
}

/* Built once at module load so element identity stays stable across
   re-renders; React can then skip reconciling unchanged diagram subtrees. */
const DIAGRAMS: Record<string, React.ReactNode> = {
    intent: <IntentDiagram />,
    pages: <PagesDiagram />,
    render: <RenderDiagram />,
    sequence: <SequenceDiagram />,
    authority: <AuthorityDiagram />,
    surfaces: <SurfacesDiagram />,
};

function ServiceDiagram({ kind }: { kind: string }) {
  const body = DIAGRAMS[kind];
  if (!body) return null;
  return <DiagramFrame>{body}</DiagramFrame>;
}

/* ---- Our B2B SaaS SEO Services ----
   Tabbed panel: the service list stays visible on the left while the
   active service and its diagram render on the right. Accordion on mobile.
   Distinct from the Crypto sticky-rail and the Healthcare card grid. */
export function SaasServices() {
  const [active, setActive] = useState(0);
  const current = SAAS_SERVICES.items[active];

  return (
    <section id="saas-services" className="relative overflow-x-clip border-t border-line py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <SectionBadge>{SAAS_SERVICES.badge}</SectionBadge>
          <h2 className="mt-5 max-w-2xl font-heading text-[clamp(1.9rem,3.6vw,2.6rem)] font-bold leading-[1.12] tracking-[-0.02em]">
            Our B2B SaaS SEO{" "}
            <span className="text-indigo">{SAAS_SERVICES.accent}</span>
          </h2>
        </Reveal>

        {/* desktop: list + panel */}
        <div className="mt-12 hidden gap-10 lg:grid lg:grid-cols-[0.42fr_0.58fr]">
          <Reveal variant="left" delay={60}>
            <div className="overflow-hidden rounded-3xl border border-line bg-surface">
              {SAAS_SERVICES.items.map((s, i) => {
                const on = i === active;
                return (
                  <button
                    key={s.title}
                    type="button"
                    onClick={() => setActive(i)}
                    aria-pressed={on}
                    className={`group flex w-full items-center gap-4 border-b border-line px-6 py-5 text-left transition-colors duration-300 ease-soft last:border-b-0 ${
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
                      className={`font-heading text-[15.5px] font-bold tracking-[-0.01em] transition-colors duration-300 ${
                        on ? "text-indigo" : "group-hover:text-indigo"
                      }`}
                    >
                      {s.title}
                    </span>
                    <span
                      className={`ml-auto h-0.5 rounded-full transition-all duration-300 ease-soft ${
                        on ? "w-9 bg-indigo" : "w-5 bg-indigo/30 group-hover:w-9 group-hover:bg-indigo"
                      }`}
                    />
                  </button>
                );
              })}
            </div>
          </Reveal>

          <Reveal variant="right" delay={120}>
            <div className="rounded-3xl border border-line bg-surface p-8">
              <h3 className="font-heading text-[21px] font-bold leading-snug tracking-[-0.015em]">
                {current.title}
              </h3>
              <p className="mt-4 text-[15px] leading-relaxed text-graphite">
                {current.body}
              </p>
              {current.linkLabel && current.href && current.href !== "#" && (
                <Link
                  href={current.href}
                  className="group mt-4 inline-flex items-center gap-1.5 text-[14.5px] font-bold text-indigo"
                >
                  {current.linkLabel}
                  <span className="transition-transform duration-200 group-hover:translate-x-0.5">
                    &rarr;
                  </span>
                </Link>
              )}
              {current.linkLabel && (!current.href || current.href === "#") && (
                <p className="mt-4 text-[14.5px] font-bold text-indigo">
                  {current.linkLabel}
                </p>
              )}
              {current.diagram && <ServiceDiagram kind={current.diagram} />}
            </div>
          </Reveal>
        </div>

        {/* mobile: accordion */}
        <div className="mt-10 grid gap-px overflow-hidden rounded-3xl border border-line bg-line/70 lg:hidden">
          {SAAS_SERVICES.items.map((s, i) => (
            <details key={s.title} className="group bg-surface" open={i === 0}>
              <summary className="flex cursor-pointer items-center gap-4 px-6 py-5">
                <span className="font-heading text-[12.5px] font-bold tabular-nums text-indigo/50">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="font-heading text-[15.5px] font-bold tracking-[-0.01em]">
                  {s.title}
                </span>
              </summary>
              <div className="px-6 pb-7">
                <p className="text-[14.5px] leading-relaxed text-graphite">{s.body}</p>
                {s.linkLabel && (
                  <p className="mt-3 text-[14px] font-bold text-indigo">{s.linkLabel}</p>
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

/* ---- Our B2B SaaS SEO Process ----
   Six steps on a connected vertical spine, alternating sides on desktop.
   Different shape from the Crypto row-ledger and the Healthcare timeline. */
export function SaasProcess() {
  return (
    <section id="saas-process" className="relative overflow-x-clip wash-lilac-full border-t border-line py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <SectionBadge>{SAAS_PROCESS.badge}</SectionBadge>
          <h2 className="mt-5 max-w-2xl font-heading text-[clamp(1.9rem,3.6vw,2.6rem)] font-bold leading-[1.12] tracking-[-0.02em]">
            Our B2B SaaS SEO{" "}
            <span className="text-indigo">{SAAS_PROCESS.accent}</span>
          </h2>
        </Reveal>

        <div className="relative mt-14">
          {/* the spine */}
          <span
            aria-hidden
            className="absolute left-[27px] top-2 hidden h-[calc(100%-1rem)] w-px bg-line lg:left-1/2 lg:block"
          />
          <div className="grid gap-8 lg:gap-0">
            {SAAS_PROCESS.steps.map((s, i) => {
              const right = i % 2 === 1;
              return (
                <Reveal key={s.n} variant={right ? "right" : "left"} delay={i * 60}>
                  <div className="relative lg:grid lg:grid-cols-2 lg:gap-16">
                    <div
                      className={`${
                        right ? "lg:col-start-2" : ""
                      } ${i > 0 ? "lg:-mt-16" : ""}`}
                    >
                      <div className="group rounded-3xl bg-surface p-7 shadow-[0_10px_30px_rgba(11,13,18,0.05)] transition-all duration-300 ease-soft hover:-translate-y-1.5 hover:scale-[1.015] hover:shadow-[0_24px_56px_rgba(99,91,255,0.14)]">
                        <span className="font-heading text-[13px] font-bold tabular-nums text-indigo/50 transition-colors duration-300 group-hover:text-indigo">
                          {s.n}
                        </span>
                        <h3 className="mt-2 font-heading text-[17.5px] font-bold tracking-[-0.01em] transition-colors duration-300 group-hover:text-indigo">
                          {s.title}
                        </h3>
                        <span className="mt-3 block h-0.5 w-7 rounded-full bg-indigo transition-all duration-300 ease-soft group-hover:w-12" />
                        <p className="mt-4 text-[14.5px] leading-relaxed text-graphite">
                          {s.body}
                        </p>
                      </div>
                    </div>
                    {/* spine node */}
                    <span
                      aria-hidden
                      className={`absolute left-1/2 hidden size-3 -translate-x-1/2 rounded-full border-2 border-indigo bg-surface lg:block ${i > 0 ? "top-[-2.25rem]" : "top-9"}`}
                    />
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---- SEO Across the SaaS Buyer Journey ----
   Five stages as a horizontal progression, each deepening in tone as the
   buyer nears a decision. */
export function SaasJourney() {
  return (
    <section className="relative overflow-x-clip border-t border-line py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <SectionBadge>{SAAS_JOURNEY.badge}</SectionBadge>
          <h2 className="mt-5 max-w-2xl font-heading text-[clamp(1.9rem,3.6vw,2.6rem)] font-bold leading-[1.12] tracking-[-0.02em]">
            SEO Across the SaaS{" "}
            <span className="text-indigo">{SAAS_JOURNEY.accent}</span>
          </h2>
          <p className="mt-5 max-w-2xl text-[15.5px] leading-relaxed text-graphite">
            {SAAS_JOURNEY.intro}
          </p>
        </Reveal>

        {/* progression rail */}
        <Reveal delay={80}>
          <div className="mt-12 flex items-center gap-3">
            <span className="text-[11.5px] font-bold uppercase tracking-[0.12em] text-graphite">
              Early
            </span>
            <span
              aria-hidden
              className="h-px flex-1 bg-gradient-to-r from-indigo/20 to-indigo"
            />
            <span className="text-[11.5px] font-bold uppercase tracking-[0.12em] text-indigo">
              Decision
            </span>
          </div>
        </Reveal>

        <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {SAAS_JOURNEY.stages.map((s, i) => (
            <Reveal key={s.title} delay={i * 70}>
              <div
                className="group flex h-full flex-col rounded-3xl border border-line bg-surface p-6 transition-all duration-300 ease-soft hover:-translate-y-1.5 hover:border-indigo/40 hover:shadow-[0_24px_56px_rgba(99,91,255,0.14)]"
                style={{ background: `color-mix(in srgb, var(--color-indigo) ${(i * 2.2).toFixed(1)}%, var(--c-surface))` }}
              >
                <span className="font-heading text-[12.5px] font-bold tabular-nums text-indigo/50 transition-colors duration-300 group-hover:text-indigo">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-2 font-heading text-[15.5px] font-bold leading-snug tracking-[-0.01em] transition-colors duration-300 group-hover:text-indigo">
                  {s.title}
                </h3>
                <span className="mt-3 block h-0.5 w-6 rounded-full bg-indigo transition-all duration-300 ease-soft group-hover:w-11" />
                <p className="mt-3 text-[13.5px] leading-relaxed text-graphite">
                  {s.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* The seven page roles drawn as the connected structure the copy describes:
   each one answers a distinct question and links back to the product, rather
   than competing for the same search intent. */
function ProductStructure() {
  const cx = 300;
  const cy = 152;
  const rx = 132;
  const ry = 118;
  const roles = SAAS_PRODUCT_LED.roles;

  return (
    <figure className="rounded-3xl border border-line bg-surface p-8">
      <figcaption className="text-[11.5px] font-bold uppercase tracking-[0.12em] text-graphite">
        Each page, one distinct question
      </figcaption>

      <svg viewBox="0 0 600 304" className="mt-6 w-full" fill="none" aria-hidden>
        {roles.map((r, i) => {
          const a = (-90 + (360 / roles.length) * i) * (Math.PI / 180);
          const x = cx + rx * Math.cos(a);
          const y = cy + ry * Math.sin(a);
          const right = Math.cos(a) > 0.15;
          const left = Math.cos(a) < -0.15;
          return (
            <g key={r}>
              {/* spoke back to the product hub */}
              <path
                d={`M${cx + 46 * Math.cos(a)} ${cy + 40 * Math.sin(a)} L${x - 12 * Math.cos(a)} ${y - 10 * Math.sin(a)}`}
                stroke="var(--color-indigo)"
                strokeWidth="1.15"
                strokeOpacity="0.35"
              />
              <circle cx={x} cy={y} r="5.2" fill="var(--color-indigo)" fillOpacity="0.9" />
              <text
                x={right ? x + 11 : left ? x - 11 : x}
                y={y + (Math.abs(Math.cos(a)) < 0.15 ? (Math.sin(a) > 0 ? 19 : -12) : 4)}
                textAnchor={right ? "start" : left ? "end" : "middle"}
                className="fill-ink"
                style={{ fontSize: 11, fontWeight: 600 }}
              >
                {r}
              </text>
            </g>
          );
        })}

        {/* the product at the centre */}
        <ellipse cx={cx} cy={cy} rx="52" ry="38" fill="var(--color-indigo)" fillOpacity="0.1" />
        <ellipse
          cx={cx}
          cy={cy}
          rx="52"
          ry="38"
          stroke="var(--color-indigo)"
          strokeWidth="1.3"
          strokeOpacity="0.5"
        />
        <text x={cx} y={cy - 2} textAnchor="middle" className="fill-ink" style={{ fontSize: 12, fontWeight: 700 }}>
          Product
        </text>
        <text x={cx} y={cy + 14} textAnchor="middle" className="fill-graphite" style={{ fontSize: 10.5 }}>
          trial or demo
        </text>
      </svg>

      <p className="mt-5 border-t border-line pt-5 text-[13.5px] leading-relaxed text-graphite">
        Connected into one structure, so the pages support discovery and
        conversion without competing for the same search intent.
      </p>
    </figure>
  );
}

/* ---- Product-Led SEO for SaaS ----
   Essay plus the page roles arranged as a connected structure, since the
   copy's own point is that these pages work as one system. */
export function SaasProductLed() {
  return (
    <section className="relative overflow-x-clip wash-lilac-full border-t border-line py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-center lg:gap-16">
          <Reveal variant="left">
            <div>
              <SectionBadge>{SAAS_PRODUCT_LED.badge}</SectionBadge>
              <h2 className="mt-5 font-heading text-[clamp(1.9rem,3.6vw,2.6rem)] font-bold leading-[1.12] tracking-[-0.02em]">
                <span className="text-indigo">{SAAS_PRODUCT_LED.accent}</span> SEO
                for SaaS
              </h2>
              <div className="mt-6 grid gap-5">
                {SAAS_PRODUCT_LED.paras.map((p) => (
                  <p key={p.slice(0, 30)} className="text-[15.5px] leading-relaxed text-graphite">
                    {p}
                  </p>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal variant="right" delay={80}>
            <ProductStructure />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
