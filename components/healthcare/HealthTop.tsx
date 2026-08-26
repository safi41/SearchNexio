"use client";

import Reveal from "@/components/motion/Reveal";
import { CtaLink } from "@/components/ui";
import {
  HC_HERO,
  HC_BRING_PATIENTS,
  HC_SEARCH_STAGES,
  HC_DIFFERENT,
} from "@/lib/healthcare-seo-content";
import {
  GoogleG,
  MapsPin,
  HealthgradesMark,
  ZocdocMark,
  WebMDMark,
} from "@/components/brand-icons";

/* Platform marks for the hero orbit. The client asked for the real brands
   patients recognise, so each node carries that service's own mark. */
const HEALTH_MARKS: Record<string, React.ReactNode> = {
  google: <GoogleG size={44} />,
  healthgrades: <HealthgradesMark size={44} />,
  zocdoc: <ZocdocMark size={44} />,
  webmd: <WebMDMark size={44} />,
};

/* ---- Hero: copy and trust chips left, the patient-acquisition loop right.
   A search-interface diagram rather than stock photography. The nodes are
   static; only the rings drift. ---- */

/* Chip and node glyphs. */
const ORBIT_SPEED = "48s";

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
  people: (
    <g>
      <circle cx="9.5" cy="8.4" r="2.9" />
      <circle cx="16" cy="9.2" r="2.3" />
      <path d="M4 18.5c.5-3.3 2.6-5.2 5.5-5.2s5 1.9 5.5 5.2" />
      <path d="M15.5 13.6c2.2.2 3.7 1.8 4.1 4.4" />
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

/* The patient-acquisition loop: a heart core at the centre of a solid
   orbit ring, with four white icon nodes at the cardinal points. */
function PatientLoop() {
  /* Nodes render immediately. The rings keep their slow drift, but the
     nodes themselves do not stagger in on load. */

  /* Node centres sit on the solid ring at the four cardinal points. */
  const spots = [
    "left-1/2 top-[16%] -translate-x-1/2 -translate-y-1/2",
    "left-[84%] top-1/2 -translate-x-1/2 -translate-y-1/2",
    "left-1/2 top-[84%] -translate-x-1/2 -translate-y-1/2",
    "left-[16%] top-1/2 -translate-x-1/2 -translate-y-1/2",
  ];

  return (
    <div className="relative mx-auto aspect-square w-full max-w-[420px] lg:max-w-[540px]">
      {/* dashed outer ring */}
      <div aria-hidden className="absolute inset-0 rounded-full border border-dashed border-indigo/25" />

      {/* solid orbit ring the nodes travel on */}
      <div aria-hidden className="absolute inset-[16%] rounded-full border border-indigo/45" />

      {/* core: the Google Maps pin, the surface a local patient search
          actually lands on. The orbiting marks are where they research
          before booking. */}
      <div className="absolute left-1/2 top-1/2 grid size-[42%] -translate-x-1/2 -translate-y-1/2 place-items-center">
        <span aria-hidden className="absolute inset-[-14%] rounded-full bg-[#EA4335]/12 blur-2xl" />
        <span className="relative grid size-full place-items-center rounded-full bg-surface shadow-[0_24px_60px_rgba(234,67,53,0.2)]">
          <span
            title="Google Maps"
            aria-label="Google Maps"
            className="grid size-[62%] place-items-center"
          >
            <span aria-hidden className="block w-full [&>svg]:h-auto [&>svg]:w-full">
              <MapsPin size={132} />
            </span>
          </span>
        </span>
      </div>

      {/* four journey nodes; each keeps its stage name as a tooltip and an
          accessible label, so the meaning survives without visible text */}
      <div
        className="animate-orbit absolute inset-0"
        style={{ animationDuration: ORBIT_SPEED }}
      >
        {HC_HERO.orbit.map((n, i) => (
          <div key={n.title} className={`absolute ${spots[i]}`}>
            <span
              title={`${n.title} ${n.sub}`}
              aria-label={`${n.title} ${n.sub}`}
              className="animate-orbit grid size-[84px] place-items-center rounded-full bg-surface shadow-[0_14px_36px_rgba(99,91,255,0.18)]"
              style={{ animationDuration: ORBIT_SPEED, animationDirection: "reverse" }}
            >
              {HEALTH_MARKS[n.icon]}
            </span>
          </div>
        ))}
      </div>
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
              Healthcare SEO Services
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
            <p className="mt-8 max-w-xl text-[16px] leading-relaxed text-graphite">
              {HC_HERO.intro.replace(" actual patient growth.", " ")}
              <span className="font-medium text-indigo">actual patient growth</span>.
            </p>
          </Reveal>

          {/* trust chips, divided by hairlines */}
          <Reveal delay={180}>
            <div className="mt-9 grid grid-cols-2 gap-y-6 sm:grid-cols-4">
              {HC_HERO.chips.map((c, i) => (
                <div
                  key={c.title}
                  className={`px-4 first:pl-0 ${i > 0 ? "border-l border-line" : ""}`}
                >
                  <span className="grid size-10 place-items-center rounded-full bg-lilac text-indigo">
                    <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                      {HERO_ICONS[c.icon]}
                    </svg>
                  </span>
                  <span className="mt-3 block text-[13px] font-bold leading-tight">{c.title}</span>
                  <span className="mt-1 block text-[12px] leading-snug text-graphite">{c.sub}</span>
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
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
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
            <span aria-hidden className="journey-line absolute bottom-8 left-[20px] top-8 w-px bg-indigo/25 sm:left-[27px]" />

            <ol className="grid gap-2">
              {HC_SEARCH_STAGES.stages.map((s, i) => (
                <li
                  key={s.name}
                  className="reveal-item group relative rounded-2xl py-6 pl-[58px] pr-4 transition-colors duration-300 ease-soft hover:bg-surface sm:pl-[76px] sm:pr-6"
                  style={{ transitionDelay: `${150 + i * 110}ms` }}
                >
                  <span className="absolute left-0 top-6 z-10 grid size-10 place-items-center rounded-full border border-indigo/25 bg-surface font-heading text-[13.5px] font-bold text-indigo transition-all duration-300 ease-soft group-hover:border-indigo group-hover:bg-indigo group-hover:text-white sm:left-[6px] sm:size-11 sm:text-[14px]">
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
                    <div className="flex min-w-0 items-center gap-2.5 rounded-xl border border-line bg-ivory/70 px-3 py-2.5">
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
