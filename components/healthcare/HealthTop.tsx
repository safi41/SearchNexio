"use client";

import { useEffect, useRef, useState } from "react";
import Reveal from "@/components/motion/Reveal";
import { CtaLink } from "@/components/ui";
import {
  HC_HERO,
  HC_BRING_PATIENTS,
  HC_SEARCH_STAGES,
  HC_DIFFERENT,
} from "@/lib/healthcare-seo-content";

/* ---- Hero: copy and trust chips left, the patient-acquisition loop right.
   A search-interface diagram rather than stock photography: the three nodes
   wire in one at a time, then hold. Reduced motion shows it complete. ---- */

/* Chip and node glyphs. */
const HERO_ICONS: Record<string, React.ReactNode> = {
  shield: (
    <g>
      <path d="M12 3.5 5.5 6.2v5c0 3.7 2.6 6.3 6.5 7.6 3.9-1.3 6.5-3.9 6.5-7.6v-5Z" />
      <path d="m9.3 11.7 2 2 3.5-3.9" />
    </g>
  ),
  chart: (
    <g>
      <path d="M4.5 19.5h15" />
      <path d="M7.5 19.5v-5M12 19.5v-9m4.5 9v-6" />
    </g>
  ),
  pin: (
    <g>
      <path d="M12 21s-6.5-6-6.5-10.7a6.5 6.5 0 0 1 13 0C18.5 15 12 21 12 21Z" />
      <circle cx="12" cy="10" r="2.3" />
    </g>
  ),
  check: (
    <g>
      <circle cx="12" cy="12" r="8" />
      <path d="m8.5 12.2 2.4 2.4 4.6-5" />
    </g>
  ),
  search: (
    <g>
      <circle cx="11" cy="11" r="6.2" />
      <path d="M15.6 15.6 20 20" />
    </g>
  ),
  calendar: (
    <g>
      <rect x="4" y="5.5" width="16" height="14" rx="2.5" />
      <path d="M4 9.5h16M8.5 3.5v3.5M15.5 3.5v3.5" />
      <path d="m9.5 14.5 2 2 3.5-3.8" />
    </g>
  ),
  trend: (
    <g>
      <path d="M4 17 9.5 11l3.5 3.5L20 7.5" />
      <path d="M15 7.5h5V12" />
    </g>
  ),
};

/* The patient-acquisition loop: a brand core with three orbit nodes wired
   to it. Nodes and their connector lines draw in one after another when the
   hero enters view, then hold. Reduced motion shows the finished diagram. */
function PatientLoop() {
  const ref = useRef<HTMLDivElement>(null);
  const [lit, setLit] = useState(-1);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setLit(2);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        if (!entries[0].isIntersecting) return;
        io.disconnect();
        [0, 1, 2].forEach((i) => setTimeout(() => setLit(i), 500 + i * 620));
      },
      { rootMargin: "0px 0px -15% 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  /* Node centers as percentages of the square stage. Kept left of 70% so
     each label has room to sit beside its node without clipping. */
  const spots = [
    { left: "62%", top: "15%" },
    { left: "70%", top: "50%" },
    { left: "62%", top: "85%" },
  ];

  return (
    <div ref={ref} className="relative mx-auto aspect-square w-full max-w-[560px]">
      {/* concentric orbit rings */}
      <div aria-hidden className="absolute inset-0 rounded-full border border-indigo/12" />
      <div aria-hidden className="absolute inset-[13%] rounded-full border border-indigo/15" />
      <div aria-hidden className="absolute left-[8%] top-[14%] size-[52%] rounded-full border border-indigo/10" />
      {/* travelling dots on the outer ring */}
      <div aria-hidden className="animate-orbit absolute inset-0" style={{ animationDuration: "54s" }}>
        <span className="absolute left-1/2 top-0 size-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo/60" />
        <span className="absolute bottom-0 left-[30%] size-1.5 translate-y-1/2 rounded-full bg-indigo/40" />
        <span className="absolute left-0 top-[46%] size-1.5 -translate-x-1/2 rounded-full bg-indigo/30" />
      </div>

      {/* connectors from the core out to each node */}
      <svg aria-hidden className="absolute inset-0 size-full" viewBox="0 0 100 100" fill="none">
        {[
          "M40 37 L58 18",
          "M48 47 L66 50",
          "M40 63 L58 82",
        ].map((d, i) => (
          <path
            key={i}
            d={d}
            stroke="var(--color-indigo)"
            strokeWidth="0.55"
            strokeOpacity={lit >= i ? 0.55 : 0}
            className="transition-[stroke-opacity] duration-700 ease-soft"
          />
        ))}
      </svg>

      {/* brand core: a dotted ring around the patients glyph */}
      <div className="absolute left-[8%] top-[32%] grid size-[36%] place-items-center">
        <span aria-hidden className="absolute inset-0 rounded-full bg-indigo/15 blur-2xl" />
        <span
          aria-hidden
          className="absolute inset-0 rounded-full border-2 border-dotted border-indigo/45"
        />
        <span className="relative grid size-[78%] place-items-center rounded-full bg-surface shadow-[0_20px_50px_rgba(99,91,255,0.2)]">
          <svg width="46" height="46" viewBox="0 0 24 24" fill="none" stroke="var(--color-indigo)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
            <circle cx="9.5" cy="8.4" r="2.9" />
            <circle cx="16" cy="9.2" r="2.3" />
            <path d="M4 18.5c.5-3.3 2.6-5.2 5.5-5.2s5 1.9 5.5 5.2" />
            <path d="M15.5 13.6c2.2.2 3.7 1.8 4.1 4.4" />
          </svg>
        </span>
      </div>

      {/* the three journey nodes */}
      {HC_HERO.orbit.map((n, i) => (
        <div
          key={n.title}
          className={`absolute flex -translate-y-1/2 items-center gap-3.5 transition-all duration-700 ease-soft ${
            lit >= i ? "translate-x-0 opacity-100" : "translate-x-3 opacity-0"
          }`}
          style={spots[i]}
        >
          <span className="relative grid size-[62px] shrink-0 place-items-center rounded-full border border-indigo/25 bg-surface shadow-[0_14px_36px_rgba(99,91,255,0.16)]">
            <span aria-hidden className="absolute inset-[-7px] rounded-full border border-dashed border-indigo/25" />
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--color-indigo)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
              {HERO_ICONS[n.icon]}
            </svg>
          </span>
          <span className="whitespace-nowrap">
            <span className="block font-heading text-[14.5px] font-bold tracking-[-0.01em]">{n.title}</span>
            <span className="mt-0.5 block text-[12.5px] leading-snug text-graphite">{n.sub}</span>
          </span>
        </div>
      ))}
    </div>
  );
}

export function HealthHero() {
  return (
    <section className="relative overflow-x-clip pt-[136px]">
      <div aria-hidden className="wash-lilac absolute inset-x-0 top-0 h-[680px]" />
      <div
        aria-hidden
        className="grid-pattern absolute left-1/2 top-24 h-[440px] w-[760px] -translate-x-1/2 [mask-image:radial-gradient(ellipse_70%_70%_at_50%_40%,#000_35%,transparent_75%)]"
      />

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-6 pb-20 lg:grid-cols-[1.02fr_0.98fr] lg:gap-10 lg:pb-28">
        <div>
          <Reveal>
            <span className="inline-flex items-center gap-2.5 rounded-full border border-indigo/20 bg-surface/80 px-4 py-2 text-[12.5px] font-bold uppercase tracking-[0.1em] text-indigo shadow-[0_2px_12px_rgba(99,91,255,0.08)]">
              <span className="grid size-5 place-items-center rounded-full border border-indigo/30">
                <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" aria-hidden>
                  <path d="M12 6.5v11M6.5 12h11" />
                </svg>
              </span>
              {HC_HERO.eyebrow}
            </span>
          </Reveal>

          <Reveal delay={60} duration={600}>
            <h1 className="mt-6 font-heading text-[clamp(2.5rem,5.2vw,4.1rem)] font-bold leading-[1.04] tracking-[-0.03em]">
              Healthcare SEO
              <br />
              <span className="relative inline-block text-indigo">
                Services
                {/* hand-drawn underline sweep */}
                <svg
                  aria-hidden
                  viewBox="0 0 240 14"
                  preserveAspectRatio="none"
                  className="absolute -bottom-2 left-0 h-3 w-full text-indigo/35"
                >
                  <path d="M2 10C52 3 150 2 238 6" stroke="currentColor" strokeWidth="3" strokeLinecap="round" fill="none" />
                </svg>
              </span>
            </h1>
          </Reveal>

          <Reveal delay={120} duration={600}>
            <p className="mt-8 max-w-xl text-[16px] leading-relaxed text-graphite">{HC_HERO.intro}</p>
          </Reveal>

          {/* trust chips, divided by hairlines */}
          <Reveal delay={180}>
            <div className="mt-9 grid gap-x-6 gap-y-5 sm:grid-cols-2">
              {HC_HERO.chips.map((c) => (
                <div key={c.title} className="flex items-center gap-3">
                  <span className="grid size-9 shrink-0 place-items-center rounded-full bg-lilac text-indigo">
                    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                      {HERO_ICONS[c.icon]}
                    </svg>
                  </span>
                  <span className="min-w-0">
                    <span className="block whitespace-nowrap text-[12.5px] font-bold leading-tight">{c.title}</span>
                    <span className="mt-0.5 block text-[11.5px] leading-tight text-graphite">{c.sub}</span>
                  </span>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={240} duration={600}>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <CtaLink href={HC_HERO.primaryCta.href}>{HC_HERO.primaryCta.label}</CtaLink>
              <CtaLink href={HC_HERO.secondaryCta.href} variant="ghost">{HC_HERO.secondaryCta.label}</CtaLink>
            </div>
          </Reveal>
        </div>

        <Reveal variant="right" delay={120}>
          <PatientLoop />
        </Reveal>
      </div>
    </section>
  );
}

/* ---- Trusted by healthcare teams: styled label only. Real approved logos
   are added later with written permission; nothing is invented. ---- */
export function HealthTrustedBy() {
  return (
    <section className="overflow-x-clip border-y border-line py-8">
      <div className="mx-auto max-w-6xl px-6 text-center">
        <p className="text-[11.5px] font-bold uppercase tracking-[0.16em] text-graphite">
          Trusted by healthcare teams
        </p>
        <p className="mt-3 text-[13px] text-graphite/70">
          Client logos are added with written permission.
        </p>
      </div>
    </section>
  );
}

/* ---- Search should bring patients: copy left, results snapshot right.
   Subtle fade only; the snapshot carries the visual weight. ---- */
export function HealthBringPatients() {
  const s = HC_BRING_PATIENTS.snapshot;
  return (
    <section className="overflow-x-clip py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <Reveal variant="left">
            <h2 className="font-heading text-[clamp(1.9rem,3.6vw,2.6rem)] font-bold leading-[1.12] tracking-[-0.02em]">
              Search Should Bring <span className="text-indigo">Patients</span>
            </h2>
            <div className="mt-6 grid gap-4">
              {HC_BRING_PATIENTS.paras.map((p, i) => (
                <p key={i} className="text-[15px] leading-relaxed text-graphite">{p}</p>
              ))}
            </div>
          </Reveal>

          <Reveal variant="right" delay={80}>
            <article className="cta-indigo relative overflow-hidden rounded-3xl p-8 text-white">
              <div aria-hidden className="pointer-events-none absolute -right-16 -top-16 size-48 rounded-full border border-white/10" />
              <p className="relative text-[11px] font-bold uppercase tracking-[0.14em] text-citron">{s.label}</p>
              <p className="relative mt-5 font-heading text-[clamp(1.35rem,2.4vw,1.7rem)] font-bold leading-snug tracking-[-0.015em]">
                {s.heading}
              </p>
              <p className="relative mt-4 text-[13.5px] leading-relaxed text-white/70">{s.body}</p>
              <p className="relative mt-6 border-t border-white/10 pt-4 text-[11.5px] text-white/45">{s.note}</p>
            </article>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ---- How patients search for care: four-stage journey. The brief calls
   this the best animation on the page; each stage activates once on
   scroll with the connecting line drawing across. ---- */
export function HealthSearchStages() {
  return (
    <section className="overflow-x-clip wash-lilac-full py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <div className="max-w-3xl">
            <h2 className="font-heading text-[clamp(1.9rem,3.6vw,2.6rem)] font-bold leading-[1.12] tracking-[-0.02em]">
              How Patients <span className="text-indigo">Search</span> for Care
            </h2>
            <p className="mt-6 text-[15px] leading-relaxed text-graphite">{HC_SEARCH_STAGES.intro}</p>
          </div>
        </Reveal>

        {/* The care-seeking journey reads as a vertical path: each stage is a
            row on a drawn spine, moving from uncertainty toward an
            appointment-ready search. An intent meter shows how close each
            stage sits to a booking. */}
        <Reveal delay={80}>
          <div className="relative mt-12">
            <span aria-hidden className="journey-line absolute bottom-8 left-[27px] top-8 w-px bg-indigo/25" />

            <ol className="grid gap-2">
              {HC_SEARCH_STAGES.stages.map((s, i) => (
                <li
                  key={s.name}
                  className="reveal-item group relative rounded-2xl pl-[76px] pr-6 py-6 transition-colors duration-300 ease-soft hover:bg-surface"
                  style={{ transitionDelay: `${150 + i * 110}ms` }}
                >
                  <span className="absolute left-[6px] top-6 z-10 grid size-11 place-items-center rounded-full border border-indigo/25 bg-surface font-heading text-[14px] font-bold text-indigo transition-all duration-300 ease-soft group-hover:border-indigo group-hover:bg-indigo group-hover:text-white">
                    {i + 1}
                  </span>

                  <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
                    <h3 className="font-heading text-[17px] font-bold tracking-[-0.01em]">{s.name}</h3>
                    {/* intent meter: how close this stage is to an appointment */}
                    <span className="flex items-center gap-2">
                      <span aria-hidden className="flex gap-1">
                        {[0, 1, 2, 3].map((b) => (
                          <span
                            key={b}
                            className={`h-1.5 w-5 rounded-full ${b <= i ? "bg-indigo" : "bg-indigo/15"}`}
                          />
                        ))}
                      </span>
                      <span className="text-[11px] font-semibold text-graphite">
                        {i === 3 ? "Appointment ready" : i === 0 ? "Early research" : "Rising intent"}
                      </span>
                    </span>
                  </div>

                  <div className="mt-3 grid gap-4 lg:grid-cols-[minmax(0,300px)_1fr] lg:items-start lg:gap-8">
                    <div className="flex items-center gap-2.5 rounded-xl border border-line bg-ivory/70 px-3 py-2.5">
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="var(--color-indigo)" strokeWidth="1.9" strokeLinecap="round" aria-hidden className="shrink-0">
                        <circle cx="11" cy="11" r="6.5" />
                        <path d="M15.8 15.8 20 20" />
                      </svg>
                      <span className="min-w-0 flex-1 truncate text-[12px] font-medium text-ink">{s.query}</span>
                      <span aria-hidden className="animate-pulse h-3 w-px shrink-0 bg-ink/40" />
                    </div>
                    <p className="text-[13.5px] leading-relaxed text-graphite">{s.desc}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---- Why healthcare SEO is different: 2x2 text-led cards. No decorative
   animation; the brief asks for this section to stay calm. ---- */
export function HealthDifferent() {
  return (
    <section className="overflow-x-clip py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <div className="max-w-3xl">
            <h2 className="font-heading text-[clamp(1.9rem,3.6vw,2.6rem)] font-bold leading-[1.12] tracking-[-0.02em]">
              Why Healthcare SEO Is <span className="text-indigo">Different</span>
            </h2>
            <p className="mt-6 text-[15px] leading-relaxed text-graphite">{HC_DIFFERENT.intro}</p>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {HC_DIFFERENT.cards.map((c, i) => (
            <article
              key={c.title}
              className="group flex h-full flex-col rounded-3xl bg-surface p-8 shadow-[0_10px_30px_rgba(11,13,18,0.05)] transition-all duration-300 ease-soft hover:-translate-y-1.5 hover:scale-[1.015] hover:shadow-[0_24px_56px_rgba(99,91,255,0.14)]"
            >
              <span className="grid size-12 place-items-center rounded-2xl bg-gradient-to-b from-lilac to-lilac/40 font-heading text-[15px] font-bold tabular-nums text-indigo transition-transform duration-300 ease-soft group-hover:scale-110">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-5 font-heading text-[17px] font-bold tracking-[-0.01em] transition-colors duration-300 group-hover:text-indigo">
                {c.title}
              </h3>
              <p className="mt-3 text-[13.5px] leading-relaxed text-graphite">{c.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
