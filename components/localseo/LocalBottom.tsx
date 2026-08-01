"use client";

import { useEffect, useRef, useState } from "react";
import Reveal from "@/components/motion/Reveal";
import { Badge, CtaLink } from "@/components/ui";
import {
  LOCAL_DELIVERABLES, LOCAL_PROCESS, LOCAL_METRICS, LOCAL_WHY,
  LOCAL_ENGAGEMENTS, LOCAL_LIMITATIONS, LOCAL_FAQS, L_ROUTES,
} from "@/lib/local-seo-content";

/* ---- What You Receive: a bento of product-UI feature cards for the most
   visual deliverables, plus a documented-scope checklist for the rest ---- */

/* Feature-card indexes into LOCAL_DELIVERABLES, with an abstract UI graphic
   each (no sample data, just shapes). */
const FEATURED = [0, 11, 2, 1, 10];
const LISTED = [3, 4, 5, 6, 7, 8, 9];

function BenchmarkArt() {
  return (
    <div className="relative h-32 overflow-hidden rounded-2xl border border-line bg-ivory/60 p-4">
      <div aria-hidden className="grid-pattern absolute inset-0 opacity-60 [background-size:20px_20px]" />
      <div className="relative grid gap-2.5">
        {[82, 58, 40].map((w, i) => (
          <div key={i} className="flex items-center gap-2">
            <span className={`h-3.5 rounded-full ${i === 0 ? "bg-indigo" : "bg-indigo/20"}`} style={{ width: `${w}%` }} />
            {i === 0 && (
              <svg width="14" height="14" viewBox="0 0 24 24" aria-hidden>
                <path d="M12 21s-7-6.4-7-11.5a7 7 0 0 1 14 0C19 14.6 12 21 12 21Z" fill="var(--color-indigo)" />
                <circle cx="12" cy="9.3" r="2.4" fill="#fff" />
              </svg>
            )}
          </div>
        ))}
      </div>
      <span className="relative mt-3 inline-block rounded-full bg-indigo px-2.5 py-1 text-[10px] font-bold text-white">Your position</span>
    </div>
  );
}

function ReportArt() {
  return (
    <div className="relative h-32 overflow-hidden rounded-2xl border border-line bg-ivory/60 p-4">
      <div className="flex h-14 items-end gap-1.5">
        {[34, 52, 42, 66, 58, 82, 74, 96].map((h, i) => (
          <span key={i} className={`flex-1 rounded-t-md ${i >= 5 ? "bg-indigo" : "bg-indigo/25"}`} style={{ height: `${h}%` }} />
        ))}
      </div>
      <div className="mt-3 flex flex-wrap gap-1.5">
        {["Calls", "Forms", "Bookings"].map((m) => (
          <span key={m} className="rounded-full border border-line bg-surface px-2 py-0.5 text-[10px] font-semibold text-ink">{m}</span>
        ))}
      </div>
    </div>
  );
}

function ProfileArt() {
  const checks = ["Business information", "Categories and services", "Photos and posts"];
  return (
    <div className="relative overflow-hidden rounded-2xl border border-line bg-ivory/60 p-3.5">
      <div className="flex items-center gap-2.5">
        <span className="grid size-9 shrink-0 place-items-center rounded-full bg-gradient-to-br from-indigo to-indigo-deep text-white">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
            <path d="M5 5h14v3.2c0 1.2-.8 2.1-2 2.1s-1.9-.9-1.9-2.1c0 1.2-.9 2.1-2.1 2.1s-2.1-.9-2.1-2.1c0 1.2-.7 2.1-1.9 2.1s-2-.9-2-2.1Z" />
            <path d="M6 11.8V19h12v-7.2c-.6.3-1.3.5-2 .5-.8 0-1.5-.2-2.1-.7-.5.5-1.2.7-1.9.7s-1.4-.2-1.9-.7c-.6.5-1.3.7-2.1.7-.7 0-1.4-.2-2-.5Zm7 6.2v-3.5h3V18Z" />
          </svg>
        </span>
        <div className="min-w-0">
          <p className="text-[11px] font-bold text-ink">Business Profile</p>
          <span className="mt-0.5 flex gap-0.5">
            {[...Array(5)].map((_, s) => (
              <svg key={s} width="8" height="8" viewBox="0 0 24 24" aria-hidden>
                <path d="m12 4 2.3 4.7 5.2.8-3.8 3.7.9 5.2L12 15.9l-4.6 2.5.9-5.2-3.8-3.7 5.2-.8Z" fill="var(--color-indigo)" />
              </svg>
            ))}
          </span>
        </div>
        <span className="ml-auto rounded-full bg-lilac px-2 py-0.5 text-[9px] font-bold uppercase tracking-[0.06em] text-indigo">Audit</span>
      </div>
      <div className="mt-3 grid gap-1.5">
        {checks.map((c) => (
          <div key={c} className="flex items-center gap-2 rounded-lg border border-line bg-surface px-2.5 py-1">
            <span className="grid size-4 shrink-0 place-items-center rounded-full bg-citron">
              <svg width="8" height="8" viewBox="0 0 12 12" fill="none" aria-hidden><path d="m2.5 6.5 2.5 2.5 4.5-5" stroke="#0B0D12" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </span>
            <span className="truncate text-[10.5px] font-semibold text-ink/80">{c}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function MapArt() {
  return (
    <div className="relative h-32 overflow-hidden rounded-2xl border border-line bg-ivory/60">
      <div aria-hidden className="grid-pattern absolute inset-0 opacity-70 [background-size:20px_20px]" />
      <svg aria-hidden className="absolute inset-0 size-full" viewBox="0 0 200 128" fill="none">
        <path d="M-4 96C40 70 70 108 108 84s52-42 100-38" stroke="var(--color-indigo)" strokeOpacity="0.35" strokeWidth="2" strokeDasharray="5 6" />
      </svg>
      <span aria-hidden className="absolute left-[30%] top-[26%]">
        <svg width="26" height="26" viewBox="0 0 24 24"><path d="M12 21s-7-6.4-7-11.5a7 7 0 0 1 14 0C19 14.6 12 21 12 21Z" fill="var(--color-indigo)" /><circle cx="12" cy="9.3" r="2.4" fill="#fff" /></svg>
      </span>
      <span aria-hidden className="absolute right-[24%] top-[48%] size-3 rounded-full border-2 border-graphite/40 bg-surface" />
      <span aria-hidden className="absolute left-[52%] bottom-[18%] size-3 rounded-full border-2 border-graphite/40 bg-surface" />
    </div>
  );
}

function TrackingArt() {
  const tiles = [
    <path key="a" d="M7.5 4.5 9.7 4a1 1 0 0 1 1.1.6l1.1 2.6a1 1 0 0 1-.3 1.2l-1.4 1a11 11 0 0 0 4.4 4.4l1-1.4a1 1 0 0 1 1.2-.3l2.6 1.1a1 1 0 0 1 .6 1.1l-.5 2.2a1.6 1.6 0 0 1-1.6 1.2C11.3 18 6 12.7 6.3 6.1a1.6 1.6 0 0 1 1.2-1.6Z" />,
    <g key="b"><rect x="4.5" y="4.5" width="15" height="15" rx="2.5" /><path d="M8 9h8M8 12.5h8M8 16h4.5" /></g>,
    <g key="c"><rect x="4" y="5.5" width="16" height="14" rx="2.5" /><path d="M4 9.5h16M8.5 3.5v3.5M15.5 3.5v3.5" /><path d="m9.5 14.5 2 2 3.5-3.8" /></g>,
  ];
  return (
    <div className="relative grid h-32 grid-cols-3 gap-2 rounded-2xl border border-line bg-ivory/60 p-3.5">
      {tiles.map((t, i) => (
        <span key={i} className="grid place-items-center rounded-xl border border-line bg-surface text-indigo">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>{t}</svg>
        </span>
      ))}
    </div>
  );
}

const FEATURE_ART = [<BenchmarkArt key="f0" />, <ReportArt key="f1" />, <ProfileArt key="f2" />, <MapArt key="f3" />, <TrackingArt key="f4" />];

export function LocalReceive() {
  return (
    <section className="overflow-x-clip py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <h2 className="max-w-2xl font-heading text-[clamp(1.9rem,3.6vw,2.6rem)] font-bold leading-[1.12] tracking-[-0.02em]">
            What You <span className="text-indigo">Receive</span>
          </h2>
          <p className="mt-6 max-w-2xl text-[15px] leading-relaxed text-graphite">
            Every SearchNexio local SEO engagement includes a defined set of deliverables. Before work begins, the scope is confirmed in writing.
          </p>
        </Reveal>

        {/* bento: two wide feature cards, then three across */}
        <div className="mt-12 grid gap-4 lg:grid-cols-6">
          {FEATURED.map((idx, i) => {
            const d = LOCAL_DELIVERABLES[idx];
            return (
              <Reveal
                key={d.title}
                variant="up"
                delay={Math.min(i * 70, 280)}
                className={i < 2 ? "lg:col-span-3" : "lg:col-span-2"}
              >
                <article className="group flex h-full flex-col rounded-3xl border border-line bg-surface p-6 transition-all duration-300 ease-soft hover:-translate-y-1 hover:border-indigo/40 hover:shadow-[0_18px_44px_rgba(99,91,255,0.12)]">
                  {FEATURE_ART[i]}
                  <h3 className="mt-5 font-heading text-[17px] font-bold tracking-[-0.01em] transition-colors group-hover:text-indigo">{d.title}</h3>
                  <p className="mt-2 text-[13px] leading-relaxed text-graphite">{d.desc}</p>
                </article>
              </Reveal>
            );
          })}

          {/* documented-scope checklist for the remaining deliverables */}
          <Reveal delay={120} className="lg:col-span-6">
            <div className="grid overflow-hidden rounded-3xl border border-line bg-surface sm:grid-cols-2">
              {LISTED.map((idx, i) => {
                const d = LOCAL_DELIVERABLES[idx];
                return (
                  <div
                    key={d.title}
                    className={`flex gap-4 border-line p-6 ${i > 0 ? "border-t sm:border-t-0" : ""} ${i >= 2 ? "sm:border-t" : ""} ${i % 2 === 1 ? "sm:border-l" : ""}`}
                  >
                    <span className="mt-0.5 grid size-6 shrink-0 place-items-center rounded-full bg-citron">
                      <svg width="11" height="11" viewBox="0 0 12 12" fill="none" aria-hidden><path d="m2.5 6.5 2.5 2.5 4.5-5" stroke="#0B0D12" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                    </span>
                    <div>
                      <h3 className="font-heading text-[15px] font-bold tracking-[-0.01em]">{d.title}</h3>
                      <p className="mt-1.5 text-[12.5px] leading-relaxed text-graphite">{d.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ---- Our Local SEO Process: 4-step scroll timeline + dark banner ---- */
export function LocalProcess() {
  const [active, setActive] = useState(0);
  const stepRefs = useRef<(HTMLLIElement | null)[]>([]);
  useEffect(() => {
    const observers = stepRefs.current.map((el, i) => {
      if (!el) return null;
      const io = new IntersectionObserver((entries) => { if (entries[0].isIntersecting) setActive(i); }, { rootMargin: "-40% 0px -50% 0px" });
      io.observe(el);
      return io;
    });
    return () => observers.forEach((io) => io?.disconnect());
  }, []);
  return (
    <section id="local-process" className="scroll-mt-24 overflow-x-clip wash-lilac-full py-16 md:py-24">
      <div className="mx-auto max-w-4xl px-6">
        <Reveal>
          <h2 className="text-center font-heading text-[clamp(1.9rem,3.6vw,2.6rem)] font-bold leading-[1.12] tracking-[-0.02em]">Our Local <span className="text-indigo">SEO Process</span></h2>
          <p className="mx-auto mt-5 max-w-2xl text-center text-[15px] leading-relaxed text-graphite">
            Every engagement follows the same four-phase sequence. Each phase depends on the one before it, which is why we do not skip the audit to get to implementation faster.
          </p>
        </Reveal>
        <ol className="relative mt-12">
          <span aria-hidden className="absolute bottom-6 left-[21px] top-6 w-px bg-line" />
          <span aria-hidden className="absolute left-[21px] top-6 w-px bg-gradient-to-b from-indigo to-indigo/70 transition-all duration-700 ease-soft" style={{ height: `calc((100% - 48px) * ${active / (LOCAL_PROCESS.length - 1)})` }} />
          {LOCAL_PROCESS.map((step, i) => {
            const state = i < active ? "done" : i === active ? "active" : "next";
            return (
              <li key={step.name} ref={(el) => { stepRefs.current[i] = el; }} className={`relative flex gap-5 ${i < LOCAL_PROCESS.length - 1 ? "pb-12" : ""}`}>
                <span className={`relative z-10 grid size-11 shrink-0 place-items-center rounded-2xl font-heading text-[14px] font-bold tabular-nums transition-all duration-500 ease-soft ${state === "active" ? "bg-indigo text-white shadow-[0_0_0_5px_var(--c-lilac)]" : state === "done" ? "bg-indigo text-white" : "border border-line bg-surface text-graphite"}`}>
                  {state === "done" ? <svg width="14" height="14" viewBox="0 0 12 12" fill="none" aria-hidden><path d="m2.5 6.5 2.5 2.5 4.5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg> : step.index}
                </span>
                <div className={`pt-1.5 transition-opacity duration-500 ${state === "next" ? "opacity-45" : "opacity-100"}`}>
                  <h3 className={`font-heading text-[20px] font-bold tracking-[-0.01em] transition-colors duration-500 ${state === "active" ? "text-indigo" : "text-ink"}`}>{step.name}</h3>
                  <p className="mt-2 max-w-xl text-[14px] leading-relaxed text-graphite">{step.body}</p>
                </div>
              </li>
            );
          })}
        </ol>
      </div>

      <Reveal delay={80}>
        <div className="mx-auto mt-16 max-w-6xl px-6">
          <div className="cta-indigo relative overflow-hidden rounded-[2rem] px-8 py-12 text-center md:px-12">
            <div className="relative">
              <h3 className="mx-auto max-w-2xl font-heading text-[clamp(1.5rem,2.8vw,2rem)] font-bold leading-[1.14] tracking-[-0.02em] text-white">
                Is your local presence turning visibility into enquiries right now?
              </h3>
              <p className="mx-auto mt-4 max-w-xl text-[15px] leading-relaxed text-white/70">
                The local visibility audit maps your Maps position, Business Profile condition, review performance and lead tracking, then identifies where competitors are outperforming you and why.
              </p>
              <div className="mt-8 flex justify-center">
                <CtaLink href={L_ROUTES.audit}>Request a Local Visibility Audit</CtaLink>
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

/* ---- How We Measure Local Growth: a two-panel reporting board — lead
   metrics and visibility metrics as grouped report cards ---- */

const METRIC_ICONS: Record<string, React.ReactNode> = {
  "Calls from Profile": (
    <path d="M7.5 4.5 9.7 4a1 1 0 0 1 1.1.6l1.1 2.6a1 1 0 0 1-.3 1.2l-1.4 1a11 11 0 0 0 4.4 4.4l1-1.4a1 1 0 0 1 1.2-.3l2.6 1.1a1 1 0 0 1 .6 1.1l-.5 2.2a1.6 1.6 0 0 1-1.6 1.2C11.3 18 6 12.7 6.3 6.1a1.6 1.6 0 0 1 1.2-1.6Z" />
  ),
  "Website Calls": (
    <g>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M3.5 12h17M12 3.5c2.6 2.4 4 5.3 4 8.5s-1.4 6.1-4 8.5c-2.6-2.4-4-5.3-4-8.5s1.4-6.1 4-8.5Z" />
    </g>
  ),
  "Form Submissions": (
    <g>
      <rect x="4.5" y="3.5" width="15" height="17" rx="2.5" />
      <path d="M8 8h8M8 11.5h8M8 15h4.5" />
    </g>
  ),
  "Qualified Leads": (
    <g>
      <path d="M4 5h16l-6 7v6l-4 2v-8Z" />
    </g>
  ),
  "Maps Visibility": (
    <g>
      <path d="M12 21s-7-6.4-7-11.5a7 7 0 0 1 14 0C19 14.6 12 21 12 21Z" />
      <circle cx="12" cy="9.3" r="2.4" />
    </g>
  ),
  "Local Organic Visibility": (
    <g>
      <circle cx="11" cy="11" r="6.5" />
      <path d="M15.8 15.8 20 20" />
    </g>
  ),
  "Direction Requests": (
    <g>
      <path d="m12 2.5 9.5 9.5-9.5 9.5L2.5 12Z" />
      <path d="M8.5 13.5v-1.6a1.4 1.4 0 0 1 1.4-1.4h4.3M12.5 8.5l2.3 2-2.3 2" />
    </g>
  ),
  "Performance by Location": (
    <g>
      <path d="M4 20h16" />
      <path d="M6 20v-8h4v8M14 20V6h4v14" />
    </g>
  ),
};

function MetricPanel({ group }: { group: "lead" | "visibility" }) {
  const items = LOCAL_METRICS.filter((m) => m.group === group);
  const lead = group === "lead";
  return (
    <div className="h-full overflow-hidden rounded-3xl border border-line bg-surface">
      <div className={`flex items-center gap-3.5 border-b border-line px-6 py-5 ${lead ? "bg-citron/15" : "bg-lilac/50"}`}>
        <span className={`grid size-10 shrink-0 place-items-center rounded-xl ${lead ? "bg-citron text-ink-solid" : "bg-indigo text-white"}`}>
          {lead ? (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
              <path d="M7.5 4.5 9.7 4a1 1 0 0 1 1.1.6l1.1 2.6a1 1 0 0 1-.3 1.2l-1.4 1a11 11 0 0 0 4.4 4.4l1-1.4a1 1 0 0 1 1.2-.3l2.6 1.1a1 1 0 0 1 .6 1.1l-.5 2.2a1.6 1.6 0 0 1-1.6 1.2C11.3 18 6 12.7 6.3 6.1a1.6 1.6 0 0 1 1.2-1.6Z" />
            </svg>
          ) : (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
              <path d="M2.5 12S6 5.5 12 5.5 21.5 12 21.5 12 18 18.5 12 18.5 2.5 12 2.5 12Z" />
              <circle cx="12" cy="12" r="2.8" />
            </svg>
          )}
        </span>
        <div className="flex-1">
          <h3 className="font-heading text-[16px] font-bold tracking-[-0.01em]">
            {lead ? "Lead metrics" : "Visibility metrics"}
          </h3>
          <p className="text-[11.5px] font-medium text-graphite">{items.length} metrics</p>
        </div>
        <span className={`size-2.5 rounded-full ${lead ? "bg-citron-deep" : "bg-indigo"}`} />
      </div>

      <div>
        {items.map((m, i) => (
          <div key={m.name} className={`flex items-start gap-4 px-6 py-4.5 ${i > 0 ? "border-t border-line" : ""}`}>
            <span className={`mt-0.5 grid size-9 shrink-0 place-items-center rounded-lg ${lead ? "bg-citron/25 text-ink" : "bg-lilac/70 text-indigo"}`}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                {METRIC_ICONS[m.name]}
              </svg>
            </span>
            <div>
              <h4 className="font-heading text-[14.5px] font-bold tracking-[-0.01em]">{m.name}</h4>
              <p className="mt-1 text-[12.5px] leading-relaxed text-graphite">{m.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function LocalMeasure() {
  return (
    <section className="overflow-x-clip py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <div className="max-w-3xl">
            <h2 className="font-heading text-[clamp(1.9rem,3.6vw,2.6rem)] font-bold leading-[1.12] tracking-[-0.02em]">
              How We <span className="text-indigo">Measure</span> Local Growth
            </h2>
            <p className="mt-6 text-[15px] leading-relaxed text-graphite">
              Local SEO performance cannot be measured by one keyword position. Rankings vary by the searcher's location, device, history and time. We measure across a connected set of metrics, reported monthly at the location level.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-4 lg:grid-cols-2">
          <Reveal variant="left">
            <MetricPanel group="lead" />
          </Reveal>
          <Reveal variant="right" delay={80}>
            <MetricPanel group="visibility" />
          </Reveal>
        </div>

        <Reveal delay={120}>
          <div className="mt-8 flex items-center gap-5 rounded-2xl bg-lilac/40 px-6 py-5">
            <span aria-hidden className="grid size-11 shrink-0 place-items-center rounded-full border border-indigo/30 text-indigo">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M8 7.2v4M8 4.6v.2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
              </svg>
            </span>
            <span aria-hidden className="hidden h-10 w-px bg-indigo/15 sm:block" />
            <p className="text-[13px] leading-relaxed text-graphite">
              <span className="font-semibold text-ink">Measurement note.</span> Rank-grid tools show sampled positions across geographic points and represent one moment in time, not every searcher's view. Phone call data may include spam before filtering. Revenue reporting requires reliable CRM or booking attribution.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---- Local SEO Results: intro left, a stacked case-study dossier right ---- */
export function LocalResults() {
  return (
    <section className="overflow-x-clip wash-lilac-full py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid items-center gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
          {/* copy column */}
          <Reveal variant="left">
            <h2 className="font-heading text-[clamp(1.9rem,3.6vw,2.6rem)] font-bold leading-[1.12] tracking-[-0.02em]">
              Local SEO <span className="text-indigo">Results</span>
            </h2>
            <p className="mt-6 text-[15px] leading-relaxed text-graphite">
              Local SEO results are reported at the enquiry level, not the impressions level. The metrics that matter are calls, bookings and qualified leads from local search, and how those numbers change over an engagement period. We add verified case studies as they become available, with the full starting position, work completed, timeframe and measured outcome.
            </p>
            <div className="mt-8 flex items-center gap-3 text-[13px] font-semibold text-ink">
              <span aria-hidden className="grid size-9 place-items-center rounded-full bg-lilac text-indigo">
                <svg width="17" height="17" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M11 3 4 6v5c0 4 3 6.5 7 8 4-1.5 7-4 7-8V6l-7-3Z" /><path d="m8 11 2.2 2.2 3.8-4.2" /></svg>
              </span>
              Figures published only when verified with the client.
            </div>
          </Reveal>

          {/* stacked dossier */}
          <Reveal variant="right" delay={80}>
            <div className="relative pb-10 pr-6 pt-4 lg:pr-10">
              {/* back document (light) */}
              <article className="ml-auto w-[88%] rotate-2 rounded-3xl border border-line bg-surface p-7 shadow-[0_16px_44px_rgba(11,13,18,0.08)] transition-transform duration-500 ease-soft hover:rotate-1">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-bold uppercase tracking-[0.12em] text-indigo">Case study</span>
                  <span aria-hidden className="flex gap-1"><span className="size-1.5 rounded-full bg-indigo/30" /><span className="size-1.5 rounded-full bg-indigo/20" /><span className="size-1.5 rounded-full bg-indigo/10" /></span>
                </div>
                <p className="mt-4 font-heading text-[19px] font-bold leading-snug tracking-[-0.015em]">Case study available on request</p>
                <p className="mt-3 text-[13px] leading-relaxed text-graphite">We report at the enquiry level: calls, bookings and qualified leads from local search, with the full starting position and timeframe.</p>
                <p className="mt-5 border-t border-line pt-4 text-[11.5px] text-graphite/70">Figures published only when verified with the client.</p>
              </article>

              {/* front document (dark), overlapping */}
              <article className="relative -mt-24 w-[88%] -rotate-1 rounded-3xl bg-ink-solid p-7 text-white shadow-[0_30px_70px_rgba(11,13,18,0.3)] transition-transform duration-500 ease-soft hover:rotate-0">
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.12em] [color:#A9A2FF]">
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden><rect x="5" y="10" width="14" height="10" rx="2" /><path d="M8.5 10V7.5a3.5 3.5 0 0 1 7 0V10" /></svg>
                    Case study
                  </span>
                  <span aria-hidden className="rounded-full bg-white/10 px-2.5 py-1 text-[9.5px] font-bold uppercase tracking-[0.08em] text-white/70">On request</span>
                </div>
                <p className="mt-4 font-heading text-[clamp(1.35rem,2.4vw,1.7rem)] font-bold leading-snug tracking-[-0.015em]">Case study available on request</p>
                <p className="mt-3 text-[13.5px] leading-relaxed text-white/70">Verified engagement detail, including industry, location type, starting problem, work completed, timeframe and lead outcome, is shared during scoping.</p>
                <p className="mt-5 border-t border-white/10 pt-4 text-[11.5px] text-white/45">Figures published only when verified with the client.</p>
              </article>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ---- Why Choose SearchNexio: sticky heading + a two-column ledger of
   proof points with icons and accent bars ---- */

const LOCAL_WHY_ICONS = [
  /* rosette */
  <g key="lw1"><circle cx="12" cy="9" r="5.5" /><path d="m12 6.6.9 1.8 2 .3-1.5 1.4.4 2-1.8-1-1.8 1 .4-2L9.1 8.7l2-.3Z" /><path d="m8.8 13.5-1.6 6 4.8-2.7 4.8 2.7-1.6-6" /></g>,
  /* folder */
  <g key="lw2"><path d="M3.5 7.5v10A2.5 2.5 0 0 0 6 20h12a2.5 2.5 0 0 0 2.5-2.5v-8A2.5 2.5 0 0 0 18 7h-6L9.8 4.8A2 2 0 0 0 8.4 4H6a2.5 2.5 0 0 0-2.5 2.5Z" /><path d="M3.5 11h17" /></g>,
  /* trend */
  <g key="lw3"><path d="M4 17.5 10 11l3.5 3.5L20 8" /><path d="M15 7.5h5V12.5" /></g>,
  /* person check */
  <g key="lw4"><circle cx="10" cy="8.4" r="3.2" /><path d="M4 19.5c.5-3.6 2.8-5.7 6-5.7 1.2 0 2.3.3 3.2.9" /><path d="m14.5 16.5 2.2 2.2 3.8-4.2" /></g>,
  /* people */
  <g key="lw5"><circle cx="9.5" cy="8.5" r="2.4" /><circle cx="15.5" cy="8.5" r="2.4" /><path d="M4.5 18c.4-2.6 2.2-4.2 5-4.2 1 0 1.9.2 2.5.6M13 18c.4-2.6 2.2-4.2 5-4.2" /></g>,
  /* AI spark */
  <g key="lw6"><path d="M12 3.5c.3 3.8 3.7 7.2 7.5 7.5-3.8.3-7.2 3.7-7.5 7.5-.3-3.8-3.7-7.2-7.5-7.5 3.8-.3 7.2-3.7 7.5-7.5Z" /><path d="M18.5 15.5c.15 1.6 1.4 2.85 3 3-1.6.15-2.85 1.4-3 3-.15-1.6-1.4-2.85-3-3 1.6-.15 2.85-1.4 3-3Z" /></g>,
];

export function LocalWhy() {
  return (
    <section className="overflow-x-clip py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-12 lg:grid-cols-[0.65fr_1.35fr] lg:gap-20">
          {/* sticky heading column */}
          <Reveal variant="left" className="lg:sticky lg:top-28 lg:self-start">
            <h2 className="font-heading text-[clamp(1.9rem,3.6vw,2.8rem)] font-bold leading-[1.1] tracking-[-0.02em]">
              Why Choose
              <br />
              <span className="text-indigo">SearchNexio</span>
            </h2>
            <span className="mt-6 block h-1 w-12 rounded-full bg-indigo" />
          </Reveal>

          {/* proof-point ledger */}
          <div className="grid gap-x-10 gap-y-10 sm:grid-cols-2">
            {LOCAL_WHY.map((w, i) => (
              <Reveal key={w.title} variant="up" delay={Math.min((i % 2) * 80, 160)}>
                <div className="group border-l-2 border-line pl-6 transition-colors duration-300 ease-soft hover:border-indigo">
                  <span aria-hidden className="grid size-11 place-items-center rounded-xl bg-lilac text-indigo transition-all duration-300 ease-soft group-hover:bg-indigo group-hover:text-white">
                    <svg width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">{LOCAL_WHY_ICONS[i]}</svg>
                  </span>
                  <h3 className="mt-4 font-heading text-[16px] font-bold tracking-[-0.01em]">{w.title}</h3>
                  <p className="mt-2 text-[13px] leading-relaxed text-graphite">
                    {w.title === "AI search expertise" ? (
                      <>Accurate business information and credible local authority also shape how AI tools represent your business. Our{" "}
                        <a href={L_ROUTES.aiSearch} className="font-semibold text-indigo underline decoration-indigo/30 underline-offset-2">AI search optimization services</a>{" "}
                        connect this work to a broader visibility strategy.</>
                    ) : w.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---- Local SEO Engagement Options: one connected plan board, three
   columns divided by hairlines, the highlighted tier on a lilac field ---- */
export function LocalEngagements() {
  return (
    <section className="overflow-x-clip wash-lilac-full py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <h2 className="text-center font-heading text-[clamp(1.9rem,3.6vw,2.6rem)] font-bold leading-[1.12] tracking-[-0.02em]">
            Local SEO <span className="text-indigo">Engagement</span> Options
          </h2>
        </Reveal>

        <Reveal delay={80}>
          <div className="mt-12 grid overflow-hidden rounded-3xl border border-line bg-surface shadow-[0_18px_50px_rgba(11,13,18,0.06)] lg:grid-cols-3">
            {LOCAL_ENGAGEMENTS.map((e, i) => (
              <div
                key={e.title}
                className={`reveal-item relative flex flex-col p-8 ${i > 0 ? "border-t border-line lg:border-l lg:border-t-0" : ""} ${e.highlight ? "bg-lilac/40" : ""}`}
                style={{ transitionDelay: `${120 + i * 100}ms` }}
              >
                {e.highlight && <span aria-hidden className="absolute inset-x-0 top-0 h-1 bg-indigo" />}
                <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-indigo">
                  Best for · {e.forWho}
                </p>
                <h3 className="mt-3 font-heading text-[19px] font-bold tracking-[-0.01em]">{e.title}</h3>
                <p className="mt-3 flex-1 text-[13.5px] leading-relaxed text-graphite">{e.desc}</p>
                <p className="mt-7 flex items-center gap-2.5 border-t border-line pt-5 text-[13px] font-semibold text-indigo">
                  Contact us for scope
                  <span aria-hidden className="grid size-5 place-items-center rounded-full bg-indigo/10">
                    <svg width="10" height="10" viewBox="0 0 12 12" fill="none"><path d="M2 6h8m0 0L6.5 2.5M10 6l-3.5 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  </span>
                </p>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="mt-10 flex justify-center">
            <CtaLink href={L_ROUTES.contact} variant="ghost">Discuss Your Local SEO Strategy</CtaLink>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---- What Local SEO Cannot Guarantee: sticky heading + a numbered
   straight-answers ledger, lead sentence emphasized ---- */
export function LocalLimitations() {
  return (
    <section className="overflow-x-clip py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
          {/* sticky intro */}
          <Reveal variant="left" className="lg:sticky lg:top-28 lg:self-start">
            <span aria-hidden className="grid size-14 place-items-center rounded-2xl bg-lilac text-indigo">
              <svg width="28" height="28" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M11 3 4 6v5c0 4 3 6.5 7 8 4-1.5 7-4 7-8V6l-7-3Z" /></svg>
            </span>
            <h2 className="mt-6 font-heading text-[clamp(1.9rem,3.6vw,2.8rem)] font-bold leading-[1.1] tracking-[-0.02em]">
              What Local SEO
              <br />
              Cannot <span className="text-indigo">Guarantee</span>
            </h2>
            <p className="mt-5 max-w-sm text-[14.5px] leading-relaxed text-graphite">
              Every credible local SEO agency should be clear about this.
            </p>
          </Reveal>

          {/* numbered ledger, lead sentence bold */}
          <div>
            {LOCAL_LIMITATIONS.map((l, i) => {
              const dot = l.indexOf(". ");
              const lead = dot === -1 ? l : l.slice(0, dot + 1);
              const rest = dot === -1 ? "" : l.slice(dot + 2);
              return (
                <Reveal key={l} variant="up" delay={Math.min(i * 60, 300)}>
                  <div className={`flex gap-5 py-6 ${i > 0 ? "border-t border-line" : "lg:pt-2"}`}>
                    <span aria-hidden className="mt-0.5 grid size-8 shrink-0 place-items-center rounded-lg bg-warn/10 font-heading text-[12.5px] font-bold tabular-nums text-warn">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <p className="text-[14px] leading-relaxed text-graphite">
                      <span className="font-semibold text-ink">{lead}</span>
                      {rest && <> {rest}</>}
                    </p>
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

/* ---- FAQ accordion ---- */
function FaqRow({ q, a, defaultOpen }: { q: string; a: React.ReactNode; defaultOpen?: boolean }) {
  const [open, setOpen] = useState(!!defaultOpen);
  return (
    <div className="overflow-hidden rounded-2xl border border-line bg-surface">
      <button type="button" onClick={() => setOpen((v) => !v)} aria-expanded={open} className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left">
        <span className="font-heading text-[16px] font-bold tracking-[-0.01em]">{q}</span>
        <span className={`grid size-7 shrink-0 place-items-center rounded-full border border-line transition-all duration-300 ${open ? "rotate-45 border-indigo/40 bg-indigo text-white" : "text-graphite"}`}>
          <svg width="13" height="13" viewBox="0 0 14 14" fill="none" aria-hidden><path d="M7 2v10M2 7h10" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" /></svg>
        </span>
      </button>
      <div className={`grid transition-all duration-300 ease-soft ${open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
        <div className="overflow-hidden"><p className="px-6 pb-5 text-[14px] leading-relaxed text-graphite">{a}</p></div>
      </div>
    </div>
  );
}

export function LocalFaq() {
  const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: LOCAL_FAQS.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) };
  return (
    <section className="mx-auto max-w-4xl overflow-x-clip px-6 py-16 md:py-24">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Reveal>
        <h2 className="text-center font-heading text-[clamp(1.9rem,3.6vw,2.6rem)] font-bold leading-[1.12] tracking-[-0.02em]">Frequently Asked Questions</h2>
      </Reveal>
      <div className="mt-10 grid gap-3">
        {LOCAL_FAQS.map((f, i) => (
          <Reveal key={f.q} variant={i % 2 === 0 ? "left" : "right"} delay={Math.min(i * 50, 240)}>
            <FaqRow q={f.q} a={f.a} defaultOpen={i === 0} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* ---- Start Your Local SEO Review: dark two-column, abbreviated form ---- */
export function LocalFinalCta() {
  const [sent, setSent] = useState(false);
  return (
    <section id="visibility-review" className="scroll-mt-24 overflow-x-clip py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="cta-indigo overflow-hidden rounded-[2rem] p-8 md:p-12">
          <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:gap-12">
            {/* left copy */}
            <Reveal variant="left">
              <Badge>Local Visibility Review</Badge>
              <h2 className="mt-5 font-heading text-[clamp(1.9rem,3.6vw,2.6rem)] font-bold leading-[1.12] tracking-[-0.02em] text-white">Start Your Local SEO Review</h2>
              <p className="mt-5 max-w-md text-[15px] leading-relaxed text-white/70">
                The initial review covers your position in Google Maps and local organic results, your Business Profile condition, review performance by location, citation consistency, and whether lead tracking is accurate.
              </p>
              <p className="mt-5 max-w-md text-[14px] leading-relaxed text-white/60">
                At the end, you know what is limiting your local visibility and where competitors are outperforming you. That information is yours whether you work with SearchNexio or not.
              </p>
              <p className="mt-6 text-[14px] text-white/70">
                Prefer to talk first?{" "}
                <a href={L_ROUTES.book} className="font-semibold text-white underline decoration-white/40 underline-offset-2">Book a Call</a>
              </p>
            </Reveal>

            {/* right form (abbreviated: 4 fields) */}
            <Reveal variant="right" delay={80}>
              <div className="rounded-3xl bg-surface p-7 md:p-8">
                {sent ? (
                  <div className="grid min-h-[300px] place-items-center text-center">
                    <div>
                      <span className="mx-auto grid size-14 place-items-center rounded-2xl bg-citron">
                        <svg width="24" height="24" viewBox="0 0 12 12" fill="none" aria-hidden><path d="m2.5 6.5 2.5 2.5 4.5-5" stroke="#0B0D12" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                      </span>
                      <h3 className="mt-5 font-heading text-[20px] font-bold tracking-[-0.01em]">Request received</h3>
                      <p className="mx-auto mt-2 max-w-xs text-[14px] leading-relaxed text-graphite">Thank you. We will review your details and follow up about your Local Visibility Audit.</p>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={(e) => { e.preventDefault(); setSent(true); }}>
                    <div className="grid gap-4">
                      <label className="block">
                        <span className="text-[12.5px] font-semibold text-ink">First name <span className="text-indigo">*</span></span>
                        <input required className="mt-1.5 w-full rounded-xl border border-line bg-ivory/60 px-3.5 py-2.5 text-[14px] outline-none transition-colors focus:border-indigo/50 focus:bg-surface" />
                      </label>
                      <label className="block">
                        <span className="text-[12.5px] font-semibold text-ink">Work email <span className="text-indigo">*</span></span>
                        <input type="email" required className="mt-1.5 w-full rounded-xl border border-line bg-ivory/60 px-3.5 py-2.5 text-[14px] outline-none transition-colors focus:border-indigo/50 focus:bg-surface" />
                      </label>
                      <label className="block">
                        <span className="text-[12.5px] font-semibold text-ink">Website <span className="text-indigo">*</span></span>
                        <input type="url" required className="mt-1.5 w-full rounded-xl border border-line bg-ivory/60 px-3.5 py-2.5 text-[14px] outline-none transition-colors focus:border-indigo/50 focus:bg-surface" />
                      </label>
                      <label className="block">
                        <span className="text-[12.5px] font-semibold text-ink">Number of locations <span className="text-indigo">*</span></span>
                        <select required defaultValue="" className="mt-1.5 w-full rounded-xl border border-line bg-ivory/60 px-3.5 py-2.5 text-[14px] outline-none transition-colors focus:border-indigo/50 focus:bg-surface">
                          <option value="" disabled>Select</option>
                          <option>1</option>
                          <option>2 to 5</option>
                          <option>6 to 20</option>
                          <option>20+</option>
                        </select>
                      </label>
                    </div>
                    <button type="submit" className="group mt-6 inline-flex w-full items-center justify-center gap-2.5 rounded-full bg-citron py-3 text-[14.5px] font-semibold text-ink-solid transition-colors duration-200 hover:bg-citron-deep">
                      Request a Local Visibility Audit
                      <span aria-hidden className="grid size-6 place-items-center rounded-full bg-ink-solid text-citron transition-transform duration-200 group-hover:translate-x-0.5">
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2 6h8m0 0L6.5 2.5M10 6l-3.5 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                      </span>
                    </button>
                    <p className="mt-4 text-[11.5px] leading-relaxed text-graphite">We use your details only to respond to your enquiry in accordance with our Privacy Policy.</p>
                  </form>
                )}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
