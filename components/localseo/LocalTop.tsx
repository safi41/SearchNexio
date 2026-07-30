"use client";

import { useState } from "react";
import Reveal from "@/components/motion/Reveal";
import { Badge, CtaLink } from "@/components/ui";
import { MapsPin, GoogleG } from "@/components/brand-icons";
import { LOCAL_HERO, LOCAL_JOURNEY, LOCAL_PROBLEMS, LOCAL_SERVICES, WHO_WE_HELP } from "@/lib/local-seo-content";

/* ---- Hero: copy + a Maps/Local-Pack dashboard visual ---- */
function MapsVisual() {
  const results = [
    { name: "Your business", rating: "4.9", reviews: 128, you: true },
    { name: "Competitor A", rating: "4.6", reviews: 74, you: false },
    { name: "Competitor B", rating: "4.4", reviews: 52, you: false },
  ];
  return (
    <div className="relative">
      <div aria-hidden className="pointer-events-none absolute inset-0 grid place-items-center">
        <span className="animate-orbit-slow absolute size-[420px] rounded-full border border-indigo/10" style={{ animationDuration: "44s" }} />
        <span className="absolute size-72 rounded-full bg-indigo/5 blur-3xl" />
      </div>
      <div className="relative rounded-3xl border border-line bg-surface p-5 shadow-[0_20px_50px_rgba(11,13,18,0.08)]">
        <div className="flex items-center justify-between border-b border-line pb-3.5">
          <div className="flex items-center gap-2">
            <GoogleG size={17} />
            <span className="font-heading text-[13.5px] font-bold tracking-[-0.01em]">plumber near me</span>
          </div>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-indigo/10 px-2.5 py-1 text-[10px] font-semibold tracking-[0.04em] text-indigo">
            <span className="size-1.5 rounded-full bg-current" /> LOCAL PACK
          </span>
        </div>
        {/* map strip with pins */}
        <div className="relative mt-4 h-24 overflow-hidden rounded-xl border border-line bg-ivory/60">
          <div aria-hidden className="grid-pattern absolute inset-0 opacity-70 [background-size:22px_22px]" />
          <span aria-hidden className="absolute left-[26%] top-[30%]"><MapsPin size={22} /></span>
          <span aria-hidden className="absolute right-[30%] top-[50%]"><MapsPin size={16} /></span>
          <span aria-hidden className="absolute left-[52%] bottom-[22%] size-2 rounded-full bg-indigo/60" />
        </div>
        {/* the three results */}
        <div className="mt-3 grid gap-2">
          {results.map((r) => (
            <div key={r.name} className={`flex items-center gap-3 rounded-xl border px-3 py-2.5 ${r.you ? "border-indigo/40 bg-indigo/5" : "border-line bg-surface"}`}>
              <span className={`grid size-6 shrink-0 place-items-center rounded-full text-[11px] font-bold ${r.you ? "bg-citron text-ink-solid" : "bg-lilac text-indigo"}`}>{r.you ? "1" : ""}</span>
              <span className="flex-1 text-[12.5px] font-semibold">{r.name}</span>
              <span className="text-[11px] font-bold text-indigo">{r.rating}</span>
              <span className="text-[10.5px] text-graphite">{r.reviews} reviews</span>
            </div>
          ))}
        </div>
        <p className="mt-4 text-[10.5px] text-graphite">Illustrative example.</p>
      </div>
    </div>
  );
}

export function LocalHero() {
  return (
    <section className="relative overflow-x-clip pt-[136px]">
      <div aria-hidden className="wash-lilac absolute inset-x-0 top-0 h-[680px]" />
      <div aria-hidden className="grid-pattern absolute left-1/2 top-24 h-[440px] w-[760px] -translate-x-1/2 [mask-image:radial-gradient(ellipse_70%_70%_at_50%_40%,#000_35%,transparent_75%)]" />
      <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-6 pb-20 lg:grid-cols-[1.02fr_0.98fr] lg:gap-12 lg:pb-28">
        <div>
          <Reveal><Badge>{LOCAL_HERO.eyebrow}</Badge></Reveal>
          <Reveal delay={60} duration={600}>
            <h1 className="mt-6 max-w-xl font-heading text-[clamp(2.4rem,4.6vw,3.6rem)] font-bold leading-[1.08] tracking-[-0.025em]">{LOCAL_HERO.title}</h1>
          </Reveal>
          <Reveal delay={120} duration={600}>
            <p className="mt-6 max-w-xl text-[16px] leading-relaxed text-graphite">{LOCAL_HERO.intro}</p>
          </Reveal>
          <Reveal delay={180} duration={600}>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <CtaLink href={LOCAL_HERO.primaryCta.href}>{LOCAL_HERO.primaryCta.label}</CtaLink>
              <CtaLink href={LOCAL_HERO.secondaryCta.href} variant="ghost">{LOCAL_HERO.secondaryCta.label}</CtaLink>
            </div>
          </Reveal>
          <Reveal delay={240}>
            <div className="mt-10 flex flex-wrap items-center gap-x-3 gap-y-2 border-t border-line pt-7 text-[12.5px] font-semibold text-graphite">
              {LOCAL_HERO.trust.map((t, i) => (
                <span key={t} className="inline-flex items-center gap-3">
                  {i > 0 && <span aria-hidden className="text-graphite/40">·</span>}
                  {t}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
        <Reveal variant="right" delay={120}><MapsVisual /></Reveal>
      </div>
    </section>
  );
}

/* ---- Local Visibility Should Drive Business: mini 3-step journey ---- */
export function LocalDriveBusiness() {
  const paras = [
    "Appearing in Google Maps and local search results is not the end goal. It is the beginning of a customer's evaluation process. When a buyer searches for a service near them, they do not click the first listing and call immediately. They compare profiles, read reviews, check the website, look at photos, and assess whether the business looks like a credible choice before making contact.",
    "A business can rank in the top three map positions and still receive fewer calls than a competitor ranked fourth, because the fourth business has more reviews, better photos, clearer service information, and a website that makes contacting them easier.",
    "SearchNexio treats local visibility as the start of a commercial process, not the end of an SEO task. The strategy connects what appears in Google Maps with what buyers find when they investigate further.",
  ];
  return (
    <section className="overflow-x-clip py-16 md:py-24">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <Reveal>
          <h2 className="font-heading text-[clamp(1.9rem,3.6vw,2.6rem)] font-bold leading-[1.12] tracking-[-0.02em]">
            Local Visibility Should Drive Business
          </h2>
          <div className="mt-6 grid gap-4">
            {paras.map((p, i) => (<p key={i} className="text-[15px] leading-relaxed text-graphite">{p}</p>))}
          </div>
        </Reveal>

        <Reveal delay={80}>
          <div className="relative mt-12">
            <span aria-hidden className="absolute left-[16%] right-[16%] top-5 hidden h-px bg-line sm:block" />
            <span aria-hidden className="journey-line absolute left-[16%] top-5 hidden h-px w-[68%] origin-left bg-gradient-to-r from-indigo to-indigo/50 sm:block" />
            <ol className="grid gap-8 sm:grid-cols-3 sm:gap-4">
              {LOCAL_JOURNEY.map((s, i) => (
                <li key={s.step} className="reveal-item relative" style={{ transitionDelay: `${i * 120}ms` }}>
                  <span className="relative z-10 mx-auto grid size-10 place-items-center rounded-full bg-indigo text-[13px] font-bold text-white">{i + 1}</span>
                  <p className="mt-4 font-heading text-[15px] font-bold tracking-[-0.01em]">{s.step}</p>
                  <p className="mx-auto mt-1.5 max-w-[15rem] text-[13px] leading-relaxed text-graphite">{s.desc}</p>
                </li>
              ))}
            </ol>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---- Local Problems We Solve: seven diagnostic cards, sequential reveal ---- */
export function LocalProblems() {
  return (
    <section className="overflow-x-clip wash-lilac-full py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <h2 className="font-heading text-[clamp(1.9rem,3.6vw,2.6rem)] font-bold leading-[1.12] tracking-[-0.02em]">
            Local Problems We Solve
          </h2>
        </Reveal>
        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {LOCAL_PROBLEMS.map((p, i) => (
            <Reveal key={p.title} variant="up" delay={Math.min(i * 80, 320)} className={i === 6 ? "sm:col-span-2 sm:mx-auto sm:max-w-[calc(50%-0.5rem)]" : ""}>
              <article className="flex h-full gap-4 rounded-2xl border border-line bg-surface p-6">
                <span aria-hidden className="mt-0.5 grid size-9 shrink-0 place-items-center rounded-xl bg-lilac text-indigo">
                  <svg width="18" height="18" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M11 20s6-6.2 6-10.5a6 6 0 1 0-12 0C5 13.8 11 20 11 20Z" /><circle cx="11" cy="9.5" r="2" /></svg>
                </span>
                <div>
                  <h3 className="font-heading text-[15.5px] font-bold tracking-[-0.01em]">{p.title}</h3>
                  <p className="mt-2 text-[13px] leading-relaxed text-graphite">{p.desc}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---- What Our Local SEO Services Include: sticky-nav list + GBP mockup ---- */
function GbpMockup() {
  return (
    <div className="rounded-2xl border border-line bg-ivory/60 p-4">
      <div className="rounded-xl border border-line bg-surface p-4">
        <div className="flex items-start justify-between">
          <div>
            <p className="font-heading text-[14px] font-bold tracking-[-0.01em]">Northside Plumbing Co.</p>
            <p className="mt-0.5 text-[11.5px] text-graphite">Plumber · Emergency service</p>
          </div>
          <span className="inline-flex items-center gap-1 rounded-full bg-citron/40 px-2 py-0.5 text-[10px] font-bold text-ink-solid">Open</span>
        </div>
        <div className="mt-2 flex items-center gap-1.5">
          <span className="text-[13px] font-bold text-indigo">4.9</span>
          <span aria-hidden className="text-citron-deep">★★★★★</span>
          <span className="text-[11px] text-graphite">(128 reviews)</span>
        </div>
        {/* photo thumbnails */}
        <div className="mt-3 grid grid-cols-4 gap-1.5">
          {[0, 1, 2, 3].map((i) => (<span key={i} className="aspect-square rounded-md bg-lilac" />))}
        </div>
        {/* services */}
        <div className="mt-3 flex flex-wrap gap-1.5">
          {["Leak repair", "Water heaters", "Drain cleaning", "24/7 callout"].map((s) => (
            <span key={s} className="rounded-full border border-line bg-ivory px-2 py-0.5 text-[10.5px] text-graphite">{s}</span>
          ))}
        </div>
      </div>
      <p className="mt-2.5 text-center text-[10.5px] text-graphite">Illustrative example.</p>
    </div>
  );
}

export function LocalServices() {
  const [active, setActive] = useState(0);
  const current = LOCAL_SERVICES[active];
  return (
    <section className="overflow-x-clip py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <h2 className="font-heading text-[clamp(1.9rem,3.6vw,2.6rem)] font-bold leading-[1.12] tracking-[-0.02em]">
            What Our Local SEO Services Include
          </h2>
        </Reveal>

        <div className="mt-10 grid gap-4 lg:grid-cols-[0.9fr_1.1fr] lg:gap-8">
          {/* sidebar nav (desktop) / accordion (mobile) */}
          <Reveal variant="left">
            <div className="grid gap-2">
              {LOCAL_SERVICES.map((s, i) => {
                const on = i === active;
                return (
                  <div key={s.key}>
                    <button
                      type="button"
                      onClick={() => setActive(i)}
                      aria-expanded={on}
                      className={`flex w-full items-center gap-3 rounded-xl border px-4 py-3 text-left transition-all duration-300 ease-soft ${on ? "border-indigo/40 bg-surface" : "border-line bg-surface/60 hover:border-indigo/25 hover:bg-surface"}`}
                    >
                      <span className={`grid size-7 shrink-0 place-items-center rounded-lg font-heading text-[12px] font-bold tabular-nums ${on ? "bg-indigo text-white" : "bg-lilac text-indigo"}`}>{String(i + 1).padStart(2, "0")}</span>
                      <span className={`flex-1 text-[14px] font-bold tracking-[-0.01em] ${on ? "text-indigo" : "text-ink"}`}>{s.title}</span>
                    </button>
                    {/* mobile body */}
                    <div className={`overflow-hidden lg:hidden ${on ? "max-h-[600px]" : "max-h-0"} transition-[max-height] duration-500 ease-soft`}>
                      <div className="rounded-b-xl border-x border-b border-line bg-surface px-4 pb-4 pt-2">
                        <p className="text-[13px] leading-relaxed text-graphite">{s.desc}</p>
                        {s.mockup && <div className="mt-4"><GbpMockup /></div>}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </Reveal>

          {/* sticky detail (desktop) */}
          <Reveal variant="right" delay={80} className="hidden lg:block">
            <div className="sticky top-28">
              <div className="rounded-3xl border border-line bg-surface p-7">
                <div key={active} className="geo-panel-fade">
                  <h3 className="font-heading text-[20px] font-bold tracking-[-0.01em]">{current.title}</h3>
                  <p className="mt-3 text-[14px] leading-relaxed text-graphite">{current.desc}</p>
                  {current.mockup && <div className="mt-6"><GbpMockup /></div>}
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        {/* contextual CTA */}
        <Reveal delay={100}>
          <div className="mt-10 flex justify-center">
            <CtaLink href="#visibility-review">Start With a Local Visibility Audit</CtaLink>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---- Who We Help: four business-type cards ---- */
const WHO_ICONS: Record<string, React.ReactNode> = {
  single: <path d="M4 20V9l7-5 7 5v11M9 20v-6h4v6" />,
  service: <><circle cx="11" cy="11" r="2" /><circle cx="11" cy="11" r="6" opacity="0.6" /><circle cx="11" cy="11" r="9" opacity="0.3" /></>,
  multi: <><path d="M6 9a3 3 0 1 1 6 0c0 2-3 5-3 5s-3-3-3-5Z" /><path d="M13 12a2.5 2.5 0 1 1 5 0c0 1.7-2.5 4-2.5 4s-2.5-2.3-2.5-4Z" /></>,
  franchise: <><circle cx="6" cy="7" r="2" /><circle cx="16" cy="7" r="2" /><circle cx="11" cy="16" r="2" /><path d="M8 7h6M7 9l3 5M15 9l-3 5" /></>,
};

export function LocalWhoWeHelp() {
  return (
    <section className="overflow-x-clip wash-lilac-full py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <h2 className="font-heading text-[clamp(1.9rem,3.6vw,2.6rem)] font-bold leading-[1.12] tracking-[-0.02em]">
            Who We Help
          </h2>
        </Reveal>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {WHO_WE_HELP.map((w, i) => (
            <Reveal key={w.key} variant="up" delay={Math.min(i * 60, 180)}>
              <article className="flex h-full flex-col rounded-2xl border border-line bg-surface p-6">
                <span aria-hidden className="grid size-11 place-items-center rounded-xl bg-lilac text-indigo">
                  <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">{WHO_ICONS[w.key]}</svg>
                </span>
                <h3 className="mt-4 font-heading text-[16px] font-bold tracking-[-0.01em]">{w.name}</h3>
                <p className="mt-2 text-[13px] leading-relaxed text-graphite">{w.desc}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
