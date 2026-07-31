"use client";

import { useEffect, useRef, useState } from "react";
import Reveal from "@/components/motion/Reveal";
import { Badge, CtaLink } from "@/components/ui";
import {
  LOCAL_DELIVERABLES, LOCAL_PROCESS, LOCAL_METRICS, LOCAL_WHY,
  LOCAL_ENGAGEMENTS, LOCAL_LIMITATIONS, LOCAL_FAQS, L_ROUTES,
} from "@/lib/local-seo-content";

/* ---- What You Receive: 12 deliverables ---- */
export function LocalReceive() {
  return (
    <section className="overflow-x-clip py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <h2 className="max-w-2xl font-heading text-[clamp(1.9rem,3.6vw,2.6rem)] font-bold leading-[1.12] tracking-[-0.02em]">What You Receive</h2>
          <p className="mt-6 max-w-2xl text-[15px] leading-relaxed text-graphite">
            Every SearchNexio local SEO engagement includes a defined set of deliverables. Before work begins, the scope is confirmed in writing.
          </p>
        </Reveal>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {LOCAL_DELIVERABLES.map((d, i) => (
            <Reveal key={d.title} variant="up" delay={Math.min((i % 3) * 60, 120)}>
              <article className="flex h-full gap-3 rounded-2xl border border-line bg-surface p-5">
                <span className="font-heading text-[13px] font-bold tabular-nums text-indigo/60">{String(i + 1).padStart(2, "0")}</span>
                <div>
                  <h3 className="font-heading text-[15px] font-bold tracking-[-0.01em]">{d.title}</h3>
                  <p className="mt-1.5 text-[12.5px] leading-relaxed text-graphite">{d.desc}</p>
                </div>
              </article>
            </Reveal>
          ))}
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
          <h2 className="text-center font-heading text-[clamp(1.9rem,3.6vw,2.6rem)] font-bold leading-[1.12] tracking-[-0.02em]">Our Local SEO Process</h2>
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

/* ---- How We Measure Local Growth: 8 metric cards grouped ---- */
export function LocalMeasure() {
  return (
    <section className="overflow-x-clip py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <div className="max-w-3xl">
            <h2 className="font-heading text-[clamp(1.9rem,3.6vw,2.6rem)] font-bold leading-[1.12] tracking-[-0.02em]">How We Measure Local Growth</h2>
            <p className="mt-6 text-[15px] leading-relaxed text-graphite">
              Local SEO performance cannot be measured by one keyword position. Rankings vary by the searcher's location, device, history and time. We measure across a connected set of metrics, reported monthly at the location level.
            </p>
          </div>
        </Reveal>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {LOCAL_METRICS.map((m, i) => (
            <Reveal key={m.name} variant="up" delay={Math.min((i % 4) * 50, 150)}>
              <article className={`h-full rounded-2xl border border-line bg-surface p-5 ${m.group === "lead" ? "border-l-[3px] border-l-citron-deep" : "border-l-[3px] border-l-indigo"}`}>
                <span className={`text-[10px] font-bold uppercase tracking-[0.1em] ${m.group === "lead" ? "text-citron-deep" : "text-indigo"}`}>{m.group === "lead" ? "Lead metric" : "Visibility metric"}</span>
                <h3 className="mt-2 font-heading text-[14.5px] font-bold tracking-[-0.01em]">{m.name}</h3>
                <p className="mt-1.5 font-heading text-[20px] font-bold tabular-nums text-ink/25">Illustrative</p>
                <p className="mt-1 text-[12px] leading-relaxed text-graphite">{m.desc}</p>
              </article>
            </Reveal>
          ))}
        </div>
        <Reveal delay={80}>
          <p className="mt-8 max-w-3xl rounded-2xl border border-dashed border-graphite/30 bg-surface/50 px-5 py-4 text-[13px] leading-relaxed text-graphite">
            <span className="font-semibold text-ink">Measurement note.</span> Rank-grid tools show sampled positions across geographic points and represent one moment in time, not every searcher's view. Phone call data may include spam before filtering. Revenue reporting requires reliable CRM or booking attribution.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

/* ---- Local SEO Results: two case-study cards, "available on request" ---- */
export function LocalResults() {
  return (
    <section className="overflow-x-clip wash-lilac-full py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <h2 className="max-w-2xl font-heading text-[clamp(1.9rem,3.6vw,2.6rem)] font-bold leading-[1.12] tracking-[-0.02em]">Local SEO Results</h2>
          <p className="mt-6 max-w-2xl text-[15px] leading-relaxed text-graphite">
            Local SEO results are reported at the enquiry level, not the impressions level. The metrics that matter are calls, bookings and qualified leads from local search, and how those numbers change over an engagement period. We add verified case studies as they become available, with the full starting position, work completed, timeframe and measured outcome.
          </p>
        </Reveal>
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {/* primary dark card */}
          <Reveal variant="up">
            <article className="flex h-full flex-col rounded-3xl bg-ink-solid p-8 text-white">
              <span className="text-[11px] font-bold uppercase tracking-[0.12em] text-indigo-300 [color:#A9A2FF]">Case study</span>
              <p className="mt-6 font-heading text-[clamp(1.6rem,3vw,2rem)] font-bold leading-tight tracking-[-0.02em]">Case study available on request</p>
              <p className="mt-4 text-[13.5px] leading-relaxed text-white/70">Verified engagement detail, including industry, location type, starting problem, work completed, timeframe and lead outcome, is shared during scoping.</p>
              <p className="mt-auto pt-6 text-[11.5px] text-white/45">Figures published only when verified with the client.</p>
            </article>
          </Reveal>
          {/* secondary light card */}
          <Reveal variant="up" delay={80}>
            <article className="flex h-full flex-col rounded-3xl border border-line bg-surface p-8">
              <span className="text-[11px] font-bold uppercase tracking-[0.12em] text-indigo">Case study</span>
              <p className="mt-6 font-heading text-[clamp(1.6rem,3vw,2rem)] font-bold leading-tight tracking-[-0.02em]">Case study available on request</p>
              <p className="mt-4 text-[13.5px] leading-relaxed text-graphite">We report at the enquiry level: calls, bookings and qualified leads from local search, with the full starting position and timeframe.</p>
              <p className="mt-auto pt-6 text-[11.5px] text-graphite/70">Figures published only when verified with the client.</p>
            </article>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ---- Why Choose SearchNexio: six proof cards ---- */
export function LocalWhy() {
  return (
    <section className="overflow-x-clip py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <h2 className="font-heading text-[clamp(1.9rem,3.6vw,2.6rem)] font-bold leading-[1.12] tracking-[-0.02em]">Why Choose SearchNexio</h2>
        </Reveal>
        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {LOCAL_WHY.map((w, i) => (
            <Reveal key={w.title} variant="up" delay={Math.min((i % 3) * 60, 120)}>
              <article className="flex h-full gap-3.5 rounded-2xl border border-line bg-surface p-6">
                <span aria-hidden className="mt-0.5 grid size-6 shrink-0 place-items-center rounded-full bg-lilac text-indigo">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="m2.5 6.5 2.5 2.5 4.5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </span>
                <div>
                  <h3 className="font-heading text-[15.5px] font-bold tracking-[-0.01em]">{w.title}</h3>
                  <p className="mt-2 text-[13px] leading-relaxed text-graphite">
                    {w.title === "AI search expertise" ? (
                      <>Accurate business information and credible local authority also shape how AI tools represent your business. Our{" "}
                        <a href={L_ROUTES.aiSearch} className="font-semibold text-indigo underline decoration-indigo/30 underline-offset-2">AI search optimization services</a>{" "}
                        connect this work to a broader visibility strategy.</>
                    ) : w.desc}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---- Local SEO Engagement Options: three tiers, center highlighted ---- */
export function LocalEngagements() {
  return (
    <section className="overflow-x-clip wash-lilac-full py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <h2 className="font-heading text-[clamp(1.9rem,3.6vw,2.6rem)] font-bold leading-[1.12] tracking-[-0.02em]">Local SEO Engagement Options</h2>
        </Reveal>
        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          {LOCAL_ENGAGEMENTS.map((e, i) => (
            <Reveal key={e.title} variant="up" delay={Math.min(i * 60, 120)}>
              <article className={`flex h-full flex-col rounded-2xl border bg-surface p-7 ${e.highlight ? "border-indigo/45" : "border-line"}`}>
                <span className="inline-flex w-fit items-center rounded-full bg-lilac px-2.5 py-1 text-[10.5px] font-bold uppercase tracking-[0.08em] text-indigo">Best for: {e.forWho}</span>
                <h3 className="mt-4 font-heading text-[18px] font-bold tracking-[-0.01em]">{e.title}</h3>
                <p className="mt-3 flex-1 text-[13.5px] leading-relaxed text-graphite">{e.desc}</p>
                <p className="mt-5 text-[12px] font-semibold text-graphite">Contact us for scope</p>
              </article>
            </Reveal>
          ))}
        </div>
        <Reveal delay={80}>
          <div className="mt-8 flex justify-center">
            <a href={L_ROUTES.contact} className="inline-flex items-center gap-1.5 text-[14px] font-semibold text-indigo underline decoration-indigo/30 underline-offset-2">Discuss Your Local SEO Strategy</a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---- What Local SEO Cannot Guarantee: restrained, shield above ---- */
export function LocalLimitations() {
  return (
    <section className="overflow-x-clip py-16 md:py-24">
      <div className="mx-auto max-w-3xl px-6">
        <Reveal>
          <div className="text-center">
            <span aria-hidden className="mx-auto grid size-11 place-items-center rounded-2xl bg-lilac text-indigo">
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M11 3 4 6v5c0 4 3 6.5 7 8 4-1.5 7-4 7-8V6l-7-3Z" /></svg>
            </span>
            <h2 className="mt-6 font-heading text-[clamp(1.9rem,3.6vw,2.6rem)] font-bold leading-[1.12] tracking-[-0.02em]">What Local SEO Cannot Guarantee</h2>
            <p className="mt-4 text-[14px] text-graphite">Every credible local SEO agency should be clear about this.</p>
          </div>
        </Reveal>
        <Reveal delay={80}>
          <ul className="mt-8 grid gap-3">
            {LOCAL_LIMITATIONS.map((l) => (
              <li key={l} className="flex gap-3 rounded-2xl border border-line bg-surface px-5 py-4 text-[13.5px] leading-relaxed text-ink">
                <span aria-hidden className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-warn/10 text-warn">
                  <svg width="11" height="11" viewBox="0 0 12 12" fill="none"><path d="M6 1.5v5M6 9v.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" /></svg>
                </span>
                {l}
              </li>
            ))}
          </ul>
        </Reveal>
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
