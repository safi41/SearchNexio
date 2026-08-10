"use client";

import { useState } from "react";
import Reveal from "@/components/motion/Reveal";
import {
  HC_SERVICES,
  HC_TESTIMONIAL,
  HC_RESULTS,
  HC_AUDIENCES,
  HC_TRUST,
  HC_DELIVERABLES,
} from "@/lib/healthcare-seo-content";

/* ---- What our healthcare SEO includes ----
   Sticky service navigation left, active service copy right. Scrollspy-style
   highlight; all eleven services stay visible rather than hidden behind
   tabs. Accordion on mobile. */

/* The one micro-example: provider architecture, showing how an organization,
   its locations, providers and treatment pages relate. */
function ProviderArchitecture() {
  return (
    <figure className="mt-6 rounded-2xl border border-line bg-ivory/60 p-6">
      <svg viewBox="0 0 420 200" className="w-full" fill="none" aria-hidden>
        {/* organization */}
        <rect x="152" y="8" width="116" height="38" rx="8" fill="var(--color-surface)" stroke="var(--color-indigo)" strokeWidth="1.4" />
        <text x="210" y="32" textAnchor="middle" className="fill-ink" style={{ fontSize: 11, fontWeight: 700 }}>Organization</text>

        {/* locations */}
        <rect x="34" y="84" width="112" height="38" rx="8" fill="var(--color-surface)" stroke="var(--color-line)" strokeWidth="1.4" />
        <text x="90" y="108" textAnchor="middle" className="fill-ink" style={{ fontSize: 11, fontWeight: 700 }}>Location A</text>

        <rect x="274" y="84" width="112" height="38" rx="8" fill="var(--color-surface)" stroke="var(--color-line)" strokeWidth="1.4" />
        <text x="330" y="108" textAnchor="middle" className="fill-ink" style={{ fontSize: 11, fontWeight: 700 }}>Location B</text>

        {/* providers */}
        <rect x="18" y="156" width="94" height="34" rx="8" fill="var(--color-lilac)" stroke="var(--color-indigo)" strokeWidth="1.2" opacity="0.9" />
        <text x="65" y="177" textAnchor="middle" className="fill-ink" style={{ fontSize: 10, fontWeight: 600 }}>Providers</text>

        <rect x="126" y="156" width="94" height="34" rx="8" fill="var(--color-lilac)" stroke="var(--color-indigo)" strokeWidth="1.2" opacity="0.9" />
        <text x="173" y="177" textAnchor="middle" className="fill-ink" style={{ fontSize: 10, fontWeight: 600 }}>Treatments</text>

        {/* the conflict: one provider claimed by both locations */}
        <rect x="286" y="156" width="94" height="34" rx="8" fill="rgba(194,65,12,0.06)" stroke="var(--color-warn)" strokeWidth="1.3" strokeDasharray="5 4" />
        <text x="333" y="171" textAnchor="middle" className="fill-ink" style={{ fontSize: 10, fontWeight: 600 }}>Shared provider</text>
        <text x="333" y="183" textAnchor="middle" style={{ fontSize: 9, fill: "var(--color-warn)" }}>page conflict</text>

        {/* connectors */}
        <path d="M195 46 C160 60 120 62 100 80" stroke="var(--color-indigo)" strokeWidth="1.3" />
        <path d="M225 46 C260 60 300 62 320 80" stroke="var(--color-indigo)" strokeWidth="1.3" />
        <path d="M78 122 V152" stroke="var(--color-indigo)" strokeWidth="1.3" />
        <path d="M105 122 C130 134 150 140 165 152" stroke="var(--color-indigo)" strokeWidth="1.3" />
        <path d="M320 122 V152" stroke="var(--color-warn)" strokeWidth="1.3" strokeDasharray="5 4" />
        <path d="M112 130 C200 146 260 150 292 160" stroke="var(--color-warn)" strokeWidth="1.3" strokeDasharray="5 4" />
      </svg>
      <figcaption className="mt-3 text-[11.5px] text-graphite">
        Illustrative provider architecture. The dashed path shows a provider claimed by two locations.
      </figcaption>
    </figure>
  );
}

export function HealthServices() {
  const [active, setActive] = useState(0);
  const current = HC_SERVICES[active];

  return (
    <section className="overflow-x-clip wash-lilac-full py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <h2 className="max-w-2xl font-heading text-[clamp(1.9rem,3.6vw,2.6rem)] font-bold leading-[1.12] tracking-[-0.02em]">
            What Our Healthcare SEO <span className="text-indigo">Includes</span>
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:gap-14">
          <Reveal variant="left" className="hidden lg:block">
            <nav className="sticky top-28">
              <ul className="grid">
                {HC_SERVICES.map((s, i) => {
                  const on = i === active;
                  return (
                    <li key={s.key}>
                      <button
                        type="button"
                        onClick={() => setActive(i)}
                        aria-current={on ? "true" : undefined}
                        className={`flex w-full items-center gap-3 border-l-2 py-3 pl-5 text-left transition-all duration-300 ease-soft ${
                          on ? "border-indigo text-indigo" : "border-line text-ink/70 hover:border-indigo/40 hover:text-ink"
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
              {current.diagram && <ProviderArchitecture />}

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

          {/* mobile accordion */}
          <div className="lg:hidden">
            {HC_SERVICES.map((s, i) => {
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

/* ---- What our clients say: held until a real approved testimonial with
   the client's own words exists. Nothing is manufactured. ---- */
export function HealthTestimonial() {
  return (
    <section className="overflow-x-clip py-16 md:py-24">
      <div className="mx-auto max-w-4xl px-6">
        <Reveal>
          <div className="rounded-3xl border border-dashed border-indigo/30 bg-lilac/25 p-8 text-center md:p-12">
            <span aria-hidden className="mx-auto grid size-12 place-items-center rounded-full bg-lilac text-indigo">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                <path d="M5 6.5c1.8.3 3 1.7 3 3.7 0 .3 0 .6-.1.8H10v6.5H3.5v-6C3.5 8.6 4 7.3 5 6.5Z" />
                <path d="M14.5 6.5c1.8.3 3 1.7 3 3.7 0 .3 0 .6-.1.8h2.1v6.5H13v-6c0-2.9.5-4.2 1.5-5Z" />
              </svg>
            </span>
            <p className="mt-5 text-[11px] font-bold uppercase tracking-[0.14em] text-indigo">
              {HC_TESTIMONIAL.title}
            </p>
            <h2 className="mt-3 font-heading text-[clamp(1.4rem,2.6vw,1.9rem)] font-bold leading-snug tracking-[-0.02em]">
              {HC_TESTIMONIAL.heading}
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-[14px] leading-relaxed text-graphite">
              {HC_TESTIMONIAL.body}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---- Healthcare SEO results: two cards, held with placeholder styling.
   No numbers, no charts, until verified data exists. ---- */
export function HealthResults() {
  return (
    <section className="overflow-x-clip py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <h2 className="max-w-2xl font-heading text-[clamp(1.9rem,3.6vw,2.6rem)] font-bold leading-[1.12] tracking-[-0.02em]">
            Healthcare SEO <span className="text-indigo">Results</span>
          </h2>
        </Reveal>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {HC_RESULTS.cards.map((c, i) => (
            <Reveal key={i} variant="up" delay={i * 80}>
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

/* ---- Who we help: 2x3 audience grid, hover border only. ---- */
export function HealthAudiences() {
  return (
    <section className="overflow-x-clip wash-lilac-full py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <h2 className="font-heading text-[clamp(1.9rem,3.6vw,2.6rem)] font-bold leading-[1.12] tracking-[-0.02em]">
            Who We <span className="text-indigo">Help</span>
          </h2>
        </Reveal>

        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {HC_AUDIENCES.map((a) => (
            <article
              key={a.name}
              className="group flex h-full flex-col rounded-3xl bg-surface p-7 shadow-[0_10px_30px_rgba(11,13,18,0.05)] transition-all duration-300 ease-soft hover:-translate-y-1.5 hover:scale-[1.015] hover:shadow-[0_24px_56px_rgba(99,91,255,0.14)]"
            >
              <h3 className="font-heading text-[16.5px] font-bold tracking-[-0.01em] transition-colors duration-300 group-hover:text-indigo">
                {a.name}
              </h3>
              <span className="mt-3 block h-0.5 w-7 rounded-full bg-indigo transition-all duration-300 ease-soft group-hover:w-12" />
              <p className="mt-3 text-[13px] leading-relaxed text-graphite">{a.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---- Built for healthcare trust: 2x2 grid. Static. Visual restraint is
   part of the trust signal. ---- */
export function HealthTrust() {
  return (
    <section className="overflow-x-clip py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <h2 className="font-heading text-[clamp(1.9rem,3.6vw,2.6rem)] font-bold leading-[1.12] tracking-[-0.02em]">
            Built for Healthcare <span className="text-indigo">Trust</span>
          </h2>
        </Reveal>

        {/* A review workflow: the four controls run left to right as
            connected steps, showing the order content passes through. */}
        <div className="relative mt-12">
          <span aria-hidden className="absolute left-[10%] right-[10%] top-6 hidden h-px bg-indigo/20 lg:block" />
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {HC_TRUST.map((t, i) => (
              <div key={t.title} className="relative">
                <span className="relative z-10 grid size-12 place-items-center rounded-2xl bg-gradient-to-b from-lilac to-lilac/40 font-heading text-[14px] font-bold tabular-nums text-indigo">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-5 font-heading text-[16px] font-bold leading-snug tracking-[-0.01em]">{t.title}</h3>
                <p className="mt-2.5 text-[13px] leading-relaxed text-graphite">{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---- What you receive: documented scope of work. Plain rows, no icons,
   no color variation, no animation. ---- */
export function HealthDeliverables() {
  return (
    <section className="overflow-x-clip wash-lilac-full py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <div className="max-w-2xl">
            <h2 className="font-heading text-[clamp(1.9rem,3.6vw,2.6rem)] font-bold leading-[1.12] tracking-[-0.02em]">
              What You <span className="text-indigo">Receive</span>
            </h2>
            <p className="mt-6 text-[15px] leading-relaxed text-graphite">
              Every Search Nexio healthcare engagement includes defined outputs. Before work begins, the scope is confirmed so there is no ambiguity about what the engagement includes.
            </p>
          </div>
        </Reveal>

        <div className="mt-10 grid border-t border-line md:grid-cols-2 lg:grid-cols-3">
          {HC_DELIVERABLES.map((d) => (
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
