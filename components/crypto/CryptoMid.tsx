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

/* The one allowed visual: a flat crawl-path diagram for the technical
   service, with a disconnected subdomain highlighted as the problem area. */
function ArchitectureDiagram() {
  return (
    <figure className="mt-6 rounded-2xl border border-line bg-ivory/60 p-6">
      <svg viewBox="0 0 420 190" className="w-full" fill="none" aria-hidden>
        {/* marketing site */}
        <rect x="14" y="70" width="104" height="46" rx="8" fill="var(--color-surface)" stroke="var(--color-indigo)" strokeWidth="1.4" />
        <text x="66" y="90" textAnchor="middle" className="fill-ink" style={{ fontSize: 11, fontWeight: 700 }}>Marketing site</text>
        <text x="66" y="105" textAnchor="middle" className="fill-graphite" style={{ fontSize: 9.5 }}>crawled</text>

        {/* docs portal */}
        <rect x="158" y="12" width="104" height="46" rx="8" fill="var(--color-surface)" stroke="var(--color-line)" strokeWidth="1.4" />
        <text x="210" y="32" textAnchor="middle" className="fill-ink" style={{ fontSize: 11, fontWeight: 700 }}>Docs portal</text>
        <text x="210" y="47" textAnchor="middle" className="fill-graphite" style={{ fontSize: 9.5 }}>crawled</text>

        {/* asset pages */}
        <rect x="158" y="128" width="104" height="46" rx="8" fill="var(--color-surface)" stroke="var(--color-line)" strokeWidth="1.4" />
        <text x="210" y="148" textAnchor="middle" className="fill-ink" style={{ fontSize: 11, fontWeight: 700 }}>Asset pages</text>
        <text x="210" y="163" textAnchor="middle" className="fill-graphite" style={{ fontSize: 9.5 }}>crawled</text>

        {/* app subdomain, the problem area */}
        <rect x="302" y="70" width="104" height="46" rx="8" fill="rgba(194,65,12,0.06)" stroke="var(--color-warn)" strokeWidth="1.4" strokeDasharray="5 4" />
        <text x="354" y="90" textAnchor="middle" className="fill-ink" style={{ fontSize: 11, fontWeight: 700 }}>App subdomain</text>
        <text x="354" y="105" textAnchor="middle" style={{ fontSize: 9.5, fill: "var(--color-warn)" }}>not reachable</text>

        {/* crawl paths */}
        <path d="M118 88 H150" stroke="var(--color-indigo)" strokeWidth="1.4" />
        <path d="M118 84 C138 84 140 40 154 36" stroke="var(--color-indigo)" strokeWidth="1.4" />
        <path d="M118 100 C138 100 140 148 154 152" stroke="var(--color-indigo)" strokeWidth="1.4" />
        <path d="M266 93 H296" stroke="var(--color-warn)" strokeWidth="1.4" strokeDasharray="5 4" />
        <path d="M275 86 l10 14M285 86 l-10 14" stroke="var(--color-warn)" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
      <figcaption className="mt-3 text-[11.5px] text-graphite">Illustrative architecture example.</figcaption>
    </figure>
  );
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
              {current.diagram && <ArchitectureDiagram />}

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
                        {s.deliverable && (
                          <p className="mt-3 rounded-xl border border-indigo/20 bg-lilac/40 px-4 py-3 text-[12.5px] leading-relaxed text-ink">
                            <span className="font-semibold">Deliverable.</span> {s.deliverable}
                          </p>
                        )}
                        {s.limit && <p className="mt-3 text-[12.5px] leading-relaxed text-graphite">{s.limit}</p>}
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

        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {CRYPTO_AUDIENCES.map((a) => (
            <article
              key={a.name}
              className="group flex h-full flex-col rounded-2xl border border-line border-l-2 border-l-transparent bg-surface p-6 transition-colors duration-150 hover:border-l-indigo"
            >
              <h3 className="font-heading text-[16px] font-bold tracking-[-0.01em]">{a.name}</h3>
              <p className="mt-2.5 flex-1 text-[13px] leading-relaxed text-graphite">{a.desc}</p>
              {a.query && (
                <p className="mt-4 inline-flex w-fit items-center gap-2 rounded-lg border border-line bg-ivory/70 px-3 py-1.5 text-[11.5px] font-medium text-ink">
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="var(--color-indigo)" strokeWidth="2" strokeLinecap="round" aria-hidden>
                    <circle cx="11" cy="11" r="6.5" />
                    <path d="M15.8 15.8 20 20" />
                  </svg>
                  {a.query}
                </p>
              )}
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

        <div className="relative mt-12">
          <span aria-hidden className="absolute left-[10%] right-[10%] top-5 hidden h-px bg-line lg:block" />
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {CRYPTO_TRUST.map((t, i) => (
              <div key={t.title} className="relative">
                <span className="relative z-10 grid size-10 place-items-center rounded-full border border-indigo/25 bg-surface font-heading text-[13px] font-bold tabular-nums text-indigo">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-5 font-heading text-[16px] font-bold tracking-[-0.01em]">{t.title}</h3>
                <p className="mt-2.5 text-[13px] leading-relaxed text-graphite">{t.desc}</p>
              </div>
            ))}
          </div>
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
