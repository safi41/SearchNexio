"use client";

import { useState } from "react";
import Reveal from "@/components/motion/Reveal";
import { Badge, CtaLink } from "@/components/ui";
import { MapsPin, GoogleG } from "@/components/brand-icons";
import { LOCAL_HERO, LOCAL_JOURNEY, LOCAL_PROBLEMS, LOCAL_SERVICES, WHO_WE_HELP } from "@/lib/local-seo-content";

/* ---- Hero: copy left, an orbiting map-pin illustration right, and an
   icon trust bar across the bottom ---- */

/* Trust bar icons, one per LOCAL_HERO.trust item. */
const TRUST_ICONS = [
  /* rosette — years of experience */
  <g key="tr1">
    <circle cx="12" cy="9" r="5.5" />
    <path d="m12 6.6.9 1.8 2 .3-1.5 1.4.4 2-1.8-1-1.8 1 .4-2L9.1 8.7l2-.3Z" />
    <path d="m8.8 13.5-1.6 6 4.8-2.7 4.8 2.7-1.6-6" />
  </g>,
  /* folder — projects */
  <g key="tr2">
    <path d="M3.5 7.5v10A2.5 2.5 0 0 0 6 20h12a2.5 2.5 0 0 0 2.5-2.5v-8A2.5 2.5 0 0 0 18 7h-6L9.8 4.8A2 2 0 0 0 8.4 4H6a2.5 2.5 0 0 0-2.5 2.5Z" />
    <path d="M3.5 11h17" />
  </g>,
  /* trend — lead-focused reporting */
  <g key="tr3">
    <path d="M4 17.5 10 11l3.5 3.5L20 8" />
    <path d="M15 7.5h5V12.5" />
  </g>,
  /* people — multi-location support */
  <g key="tr4">
    <circle cx="9.5" cy="8.5" r="2.4" />
    <circle cx="15.5" cy="8.5" r="2.4" />
    <path d="M4.5 18c.4-2.6 2.2-4.2 5-4.2 1 0 1.9.2 2.5.6M13 18c.4-2.6 2.2-4.2 5-4.2" />
  </g>,
  /* shield check — human-reviewed implementation */
  <g key="tr5">
    <path d="M12 3.5c2.4 1.4 4.9 2.1 7 2.2v6.1c0 4-2.8 7-7 8.7-4.2-1.7-7-4.7-7-8.7V5.7c2.1-.1 4.6-.8 7-2.2Z" />
    <path d="m8.8 11.8 2.3 2.3 4.2-4.6" />
  </g>,
];

/* Bubbles pinned on the orbit ring around the pin. */
const ORBIT_BUBBLES = [
  {
    label: "Calls",
    left: "64%",
    top: "7%",
    icon: (
      <path d="M7.5 4.5 9.7 4a1 1 0 0 1 1.1.6l1.1 2.6a1 1 0 0 1-.3 1.2l-1.4 1a11 11 0 0 0 4.4 4.4l1-1.4a1 1 0 0 1 1.2-.3l2.6 1.1a1 1 0 0 1 .6 1.1l-.5 2.2a1.6 1.6 0 0 1-1.6 1.2C11.3 18 6 12.7 6.3 6.1a1.6 1.6 0 0 1 1.2-1.6Z" fill="var(--color-indigo)" stroke="none" />
    ),
  },
  {
    label: "Business profile",
    left: "4%",
    top: "46%",
    icon: (
      <g fill="var(--color-indigo)" stroke="none">
        <path d="M5 5h14v3.2c0 1.2-.8 2.1-2 2.1s-1.9-.9-1.9-2.1c0 1.2-.9 2.1-2.1 2.1s-2.1-.9-2.1-2.1c0 1.2-.7 2.1-1.9 2.1s-2-.9-2-2.1Z" />
        <path d="M6 11.8V19h12v-7.2c-.6.3-1.3.5-2 .5-.8 0-1.5-.2-2.1-.7-.5.5-1.2.7-1.9.7s-1.4-.2-1.9-.7c-.6.5-1.3.7-2.1.7-.7 0-1.4-.2-2-.5Zm7 6.2v-3.5h3V18Z" />
      </g>
    ),
  },
  {
    label: "Reviews",
    left: "96%",
    top: "46%",
    icon: (
      <path d="m12 4 2.3 4.7 5.2.8-3.8 3.7.9 5.2L12 15.9l-4.6 2.5.9-5.2-3.8-3.7 5.2-.8Z" fill="var(--color-indigo)" stroke="none" />
    ),
  },
  {
    label: "Growth",
    left: "36%",
    top: "92%",
    icon: (
      <g fill="var(--color-indigo)" stroke="none">
        <rect x="5" y="13" width="2.8" height="6" rx="0.9" />
        <rect x="10.6" y="10" width="2.8" height="9" rx="0.9" />
        <rect x="16.2" y="6.5" width="2.8" height="12.5" rx="0.9" />
        <path d="m5.5 9.5 4.6-3.4 3 1.8L18 4.5l.9 1.2-5.6 3.9-3-1.8-4 3Z" />
      </g>
    ),
  },
];

function PinOrbitVisual() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[540px]">
      {/* dashed orbit rings + crosshair axes */}
      <div aria-hidden className="absolute inset-[2%] rounded-full border border-dashed border-indigo/25" />
      <div aria-hidden className="absolute inset-[19%] rounded-full border border-dotted border-indigo/20" />
      <span aria-hidden className="absolute inset-x-0 top-1/2 border-t border-dashed border-indigo/15" />
      <span aria-hidden className="absolute inset-y-0 left-1/2 border-l border-dashed border-indigo/15" />

      {/* dot grid accent */}
      <div
        aria-hidden
        className="absolute right-[-4%] top-[16%] h-16 w-28"
        style={{
          backgroundImage: "radial-gradient(var(--wm-stroke) 1.6px, transparent 1.6px)",
          backgroundSize: "13px 13px",
        }}
      />

      {/* layered ripple base + the 3D pin */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <svg width="240" height="250" viewBox="0 0 240 250" fill="none" aria-hidden>
          <defs>
            <radialGradient id="pin-body" cx="0.35" cy="0.25" r="0.9">
              <stop offset="0%" stopColor="#8F84FF" />
              <stop offset="55%" stopColor="#635BFF" />
              <stop offset="100%" stopColor="#4A43D9" />
            </radialGradient>
          </defs>
          {/* ripple layers */}
          <ellipse cx="120" cy="200" rx="100" ry="30" fill="var(--c-lilac)" opacity="0.55" />
          <ellipse cx="120" cy="198" rx="72" ry="21" fill="#C9C2FF" opacity="0.5" />
          <ellipse cx="120" cy="196" rx="46" ry="13" fill="#A99EFF" opacity="0.55" />
          <ellipse cx="120" cy="195" rx="24" ry="7" fill="#635BFF" opacity="0.5" />
          {/* pin */}
          <path
            d="M120 30c-31 0-56 24.5-56 55 0 41 56 110 56 110s56-69 56-110c0-30.5-25-55-56-55Z"
            fill="url(#pin-body)"
          />
          <circle cx="120" cy="84" r="22" fill="#ffffff" />
        </svg>
      </div>

      {/* icon bubbles on the ring */}
      {ORBIT_BUBBLES.map((b) => (
        <span
          key={b.label}
          title={b.label}
          className="absolute grid size-[72px] -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-surface shadow-[0_16px_40px_rgba(99,91,255,0.18)]"
          style={{ left: b.left, top: b.top }}
        >
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden>
            {b.icon}
          </svg>
        </span>
      ))}
    </div>
  );
}

export function LocalHero() {
  return (
    <section className="relative overflow-x-clip pt-[136px]">
      <div aria-hidden className="wash-lilac absolute inset-x-0 top-0 h-[720px]" />
      <div aria-hidden className="grid-pattern absolute left-1/2 top-24 h-[440px] w-[760px] -translate-x-1/2 [mask-image:radial-gradient(ellipse_70%_70%_at_50%_40%,#000_35%,transparent_75%)]" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-6 lg:grid-cols-[1.02fr_0.98fr] lg:gap-10">
        <div>
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full bg-lilac px-4 py-2 text-[12.5px] font-bold uppercase tracking-[0.1em] text-indigo">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                <path d="M12 21s-7-6.4-7-11.5a7 7 0 0 1 14 0C19 14.6 12 21 12 21Z" />
                <circle cx="12" cy="9.3" r="2.4" />
              </svg>
              {LOCAL_HERO.eyebrow}
            </span>
          </Reveal>
          <Reveal delay={60} duration={600}>
            <h1 className="mt-6 font-heading text-[clamp(2.5rem,5vw,4rem)] font-bold leading-[1.06] tracking-[-0.03em]">
              Local SEO that
              <br />
              brings you <span className="text-indigo">closer</span>
              <br />
              <span className="text-indigo">to more customers.</span>
            </h1>
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
        </div>

        <Reveal variant="right" delay={120}>
          <PinOrbitVisual />
        </Reveal>
      </div>

      {/* icon trust bar */}
      <Reveal delay={240}>
        <div className="relative mx-auto mt-14 max-w-7xl px-6 pb-20 lg:pb-24">
          <div className="grid gap-6 rounded-3xl border border-line bg-surface/70 px-6 py-7 backdrop-blur-sm sm:grid-cols-2 lg:grid-cols-5 lg:gap-0">
            {LOCAL_HERO.trust.map((t, i) => (
              <div key={t} className={`flex items-center gap-3.5 lg:justify-center ${i > 0 ? "lg:border-l lg:border-line" : ""}`}>
                <span className="grid size-12 shrink-0 place-items-center rounded-full bg-lilac/80 text-indigo">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                    {TRUST_ICONS[i]}
                  </svg>
                </span>
                <span className="text-[13px] font-semibold leading-snug text-ink">{t}</span>
              </div>
            ))}
          </div>
        </div>
      </Reveal>
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
