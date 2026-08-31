import Reveal from "@/components/motion/Reveal";
import CtaBanner from "@/components/CtaBanner";
import {
  SEO_PROBLEMS,
  SEO_SERVICES,
  SEO_RESULTS,
  SEO_NEEDS,
  SEO_BANNER,
  SEO_CTA,
  SEO_ROUTES,
} from "@/lib/seo-services-content";

function Glyph({ children }: { children: React.ReactNode }) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      {children}
    </svg>
  );
}

/* Line glyphs for problems, services and business-needs cards. */
const GLYPHS: Record<string, React.ReactNode> = {
  /* problems */
  competition: (
    <>
      <path d="M4 19.4h16" />
      <rect x="5.6" y="9" width="3.4" height="9" rx="1" />
      <rect x="10.6" y="4.6" width="3.4" height="13.4" rx="1" />
      <rect x="15.6" y="12" width="3.4" height="6" rx="1" />
      <path d="m10.8 3 1.5-1.5L13.8 3" />
    </>
  ),
  stalled: <path d="M3 14h4l2.5-5 3 8 2.5-5h6" />,
  leads: (
    <>
      <circle cx="9" cy="8.5" r="3.2" />
      <path d="M3.4 19.6a5.9 5.9 0 0 1 11.2 0" />
      <path d="M16.2 8.2h5M18.7 5.7v5" />
    </>
  ),
  reporting: (
    <>
      <rect x="3.8" y="4.4" width="16.4" height="15.2" rx="2.4" />
      <path d="M8 15.4v-3.2M12 15.4V9M16 15.4v-4.8" />
    </>
  ),
  technical: (
    <path d="M15.4 4.6a4.6 4.6 0 0 0-5.9 5.6L4 15.7l2.6 2.6 5.5-5.5a4.6 4.6 0 0 0 5.6-5.9l-2.7 2.7-2.2-2.2Z" />
  ),
  content: (
    <>
      <path d="M13.6 3.2H7.4a2.2 2.2 0 0 0-2.2 2.2v13.2a2.2 2.2 0 0 0 2.2 2.2h9.2a2.2 2.2 0 0 0 2.2-2.2V8.4Z" />
      <path d="M13.6 3.2v5.2h5.2M8.6 12.6h6.8M8.6 16.2h4.4" />
    </>
  ),
  /* services */
  strategy: (
    <>
      <circle cx="12" cy="12" r="8.4" />
      <circle cx="12" cy="12" r="4.4" />
      <circle cx="12" cy="12" r="1" fill="currentColor" stroke="none" />
    </>
  ),
  onpage: (
    <>
      <rect x="4" y="3.6" width="16" height="16.8" rx="2.4" />
      <path d="M4 8.4h16M8.4 12h7.2M8.4 15.6h4.8" />
    </>
  ),
  contentstrategy: (
    <>
      <path d="M12 5.4c-2-1.7-4.8-2-7.6-1v14.2c2.8-1 5.6-.7 7.6 1 2-1.7 4.8-2 7.6-1V4.4c-2.8-1-5.6-.7-7.6 1Z" />
      <path d="M12 5.4v14.2" />
    </>
  ),
  linking: (
    <>
      <path d="M10 14a4.5 4.5 0 0 0 6.4.4l2.4-2.4a4.5 4.5 0 0 0-6.4-6.4l-1.3 1.3" />
      <path d="M14 10a4.5 4.5 0 0 0-6.4-.4l-2.4 2.4a4.5 4.5 0 0 0 6.4 6.4l1.3-1.3" />
    </>
  ),
  authority: (
    <>
      <path d="M12 3.4 14.2 8l5 .6-3.7 3.4.9 4.9L12 14.6 7.6 17l.9-5L4.8 8.6l5-.6Z" />
    </>
  ),
  conversion: (
    <>
      <path d="M6 4.6h12l-4.4 6.2v6.6l-3.2 2V10.8Z" />
    </>
  ),
  ai: (
    <path d="M12 3c.35 4.4 4.4 8.45 8.8 8.8-4.4.35-8.45 4.4-8.8 8.8-.35-4.4-4.4-8.45-8.8-8.8 4.4-.35 8.45-4.4 8.8-8.8Z" />
  ),
  /* business needs */
  ecommerce: (
    <>
      <path d="M4 5h2.2l1.8 10.4h9.6L20 8H7" />
      <circle cx="9.4" cy="19" r="1.4" />
      <circle cx="16.2" cy="19" r="1.4" />
    </>
  ),
  saas: (
    <>
      <path d="m12 3.6 8 4.4-8 4.4-8-4.4Z" />
      <path d="m4 12.4 8 4.4 8-4.4M4 16.4l8 4.4 8-4.4" />
    </>
  ),
  local: (
    <>
      <path d="M12 21s-6.6-5.4-6.6-10.4a6.6 6.6 0 1 1 13.2 0C18.6 15.6 12 21 12 21Z" />
      <circle cx="12" cy="10.4" r="2.4" />
    </>
  ),
  healthcare: (
    <>
      <rect x="3.8" y="3.8" width="16.4" height="16.4" rx="3.4" />
      <path d="M12 8v8M8 12h8" />
    </>
  ),
  crypto: (
    <>
      <circle cx="12" cy="12" r="8.4" />
      <path d="M9.6 7.6h3.6a2.1 2.1 0 0 1 0 4.2H9.6h4.2a2.1 2.1 0 0 1 0 4.2H9.6M10.8 6v1.6M10.8 16v1.6" />
    </>
  ),
};

/* The small inline pill the deck asks for after the problems grid and the
   why-choose section: quieter than the main CTA buttons. */
export function InlineCta({ label = SEO_CTA }: { label?: string }) {
  return (
    <a
      href={SEO_ROUTES.review}
      className="group inline-flex items-center gap-2 rounded-full border border-indigo/30 bg-surface px-5 py-2.5 text-[13.5px] font-semibold text-indigo transition-all duration-200 hover:border-indigo hover:bg-indigo hover:text-white"
    >
      {label}
      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden className="transition-transform duration-200 group-hover:translate-x-0.5">
        <path d="M2 6h8m0 0L6.5 2.5M10 6l-3.5 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </a>
  );
}

/* ---- SEO Problems We Solve: the deck's 2x3 grid with line icons and one
   small inline button after it. ---- */

export function SeoProblems() {
  return (
    <section className="overflow-x-clip wash-lilac-full py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <h2 className="max-w-2xl font-heading text-[clamp(1.9rem,3.6vw,2.6rem)] font-bold leading-[1.12] tracking-[-0.02em]">
            SEO Problems We <span className="text-indigo">Solve</span>
          </h2>
        </Reveal>

        <Reveal delay={80}>
          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {SEO_PROBLEMS.items.map((p, i) => (
              <article
                key={p.title}
                className="reveal-item group flex h-full flex-col rounded-3xl border border-line bg-surface p-7 transition-all duration-300 ease-soft hover:-translate-y-1.5 hover:shadow-[0_24px_56px_rgba(99,91,255,0.12)]"
                style={{ transitionDelay: `${120 + i * 60}ms` }}
              >
                <span className="grid size-11 place-items-center rounded-2xl bg-gradient-to-b from-lilac to-lilac/40 text-indigo transition-transform duration-300 ease-soft group-hover:scale-110">
                  <Glyph>{GLYPHS[p.icon]}</Glyph>
                </span>
                <h3 className="mt-5 font-heading text-[16.5px] font-bold leading-snug tracking-[-0.01em] transition-colors duration-300 group-hover:text-indigo">
                  {p.title}
                </h3>
                <p className="mt-3 text-[13.5px] leading-relaxed text-graphite">{p.desc}</p>
              </article>
            ))}
          </div>
        </Reveal>

        <Reveal delay={140}>
          <div className="mt-10 flex justify-center">
            <InlineCta />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---- Our Professional SEO Services ----
   Two-column rows on hairlines rather than another card wall: icon, title
   and copy per service, light hover only, no CTAs inside, per the deck. ---- */

export function SeoServices() {
  return (
    <section className="overflow-x-clip py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <h2 className="max-w-2xl font-heading text-[clamp(1.9rem,3.6vw,2.6rem)] font-bold leading-[1.12] tracking-[-0.02em]">
            Our Professional <span className="text-indigo">SEO Services</span>
          </h2>
          <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-graphite">
            {SEO_SERVICES.intro}
          </p>
        </Reveal>

        <div className="mt-10 grid gap-x-14 lg:grid-cols-2">
          {SEO_SERVICES.services.map((s, i) => {
            const linked = s.linkAnchor ? s.desc.split(s.linkAnchor) : null;
            return (
              <Reveal key={s.title} delay={(i % 2) * 60}>
                <div className="group flex gap-5 border-t border-line py-8">
                  <span className="grid size-11 shrink-0 place-items-center rounded-2xl bg-gradient-to-b from-lilac to-lilac/40 text-indigo transition-transform duration-300 ease-soft group-hover:scale-110">
                    <Glyph>{GLYPHS[s.icon]}</Glyph>
                  </span>
                  <div>
                    <h3 className="font-heading text-[17px] font-bold tracking-[-0.01em] transition-colors duration-300 group-hover:text-indigo">
                      {s.title}
                    </h3>
                    <p className="mt-2.5 text-[13.5px] leading-relaxed text-graphite">
                      {linked ? (
                        <>
                          {linked[0]}
                          <a
                            href={s.linkHref}
                            className="font-semibold text-indigo underline decoration-indigo/30 underline-offset-2 transition-colors hover:decoration-indigo"
                          >
                            {s.linkAnchor}
                          </a>
                          {linked[1]}
                        </>
                      ) : (
                        s.desc
                      )}
                    </p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ---- SEO Results That Connect to Business Performance ----
   Both slots hold until verified case studies exist; the deck forbids
   another sales CTA here, so the proof section carries none. The hero's
   See Our Results button lands on this anchor. ---- */

export function SeoResults() {
  return (
    <section id="seo-results" className="scroll-mt-24 overflow-x-clip wash-lilac-full py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <h2 className="max-w-2xl font-heading text-[clamp(1.9rem,3.6vw,2.6rem)] font-bold leading-[1.12] tracking-[-0.02em]">
            SEO Results That Connect to{" "}
            <span className="text-indigo">Business Performance</span>
          </h2>
          <p className="mt-5 max-w-3xl text-[15px] leading-relaxed text-graphite">
            {SEO_RESULTS.intro}
          </p>
        </Reveal>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {SEO_RESULTS.cards.map((c, i) => (
            <Reveal key={i} variant="up" delay={i * 80}>
              <article
                className={`flex h-full flex-col rounded-3xl p-8 ${
                  i === 0 ? "cta-indigo text-white" : "border border-line bg-surface"
                }`}
              >
                <span className={`text-[11px] font-bold uppercase tracking-[0.12em] ${i === 0 ? "text-citron" : "text-indigo"}`}>
                  {c.label}
                </span>
                <p className="mt-5 font-heading text-[clamp(1.3rem,2.3vw,1.7rem)] font-bold leading-snug tracking-[-0.015em]">
                  {c.heading}
                </p>
                <p className={`mt-4 text-[13.5px] leading-relaxed ${i === 0 ? "text-white/70" : "text-graphite"}`}>
                  {c.body}
                </p>
                <p className={`mt-auto border-t pt-5 text-[11.5px] ${i === 0 ? "border-white/10 text-white/45" : "border-line text-graphite/70"}`}>
                  Published only once verified with the client.
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---- SEO Services for Different Business Needs ----
   The deck's 3x2 linked grid: category symbol, copy, and the link to each
   child service page. ---- */

export function SeoNeeds() {
  return (
    <section className="overflow-x-clip py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <h2 className="max-w-2xl font-heading text-[clamp(1.9rem,3.6vw,2.6rem)] font-bold leading-[1.12] tracking-[-0.02em]">
            SEO Services for{" "}
            <span className="text-indigo">Different Business Needs</span>
          </h2>
          <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-graphite">
            {SEO_NEEDS.intro}
          </p>
        </Reveal>

        <Reveal delay={80}>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {SEO_NEEDS.cards.map((c, i) => (
              <a
                key={c.title}
                href={c.href}
                className="reveal-item group flex h-full flex-col rounded-3xl border border-line bg-surface p-7 transition-all duration-300 ease-soft hover:-translate-y-1.5 hover:border-indigo/30 hover:shadow-[0_24px_56px_rgba(99,91,255,0.12)]"
                style={{ transitionDelay: `${120 + i * 60}ms` }}
              >
                <span className="grid size-11 place-items-center rounded-2xl bg-gradient-to-b from-lilac to-lilac/40 text-indigo transition-transform duration-300 ease-soft group-hover:scale-110">
                  <Glyph>{GLYPHS[c.icon]}</Glyph>
                </span>
                <h3 className="mt-5 font-heading text-[17px] font-bold tracking-[-0.01em] transition-colors duration-300 group-hover:text-indigo">
                  {c.title}
                </h3>
                <p className="mt-2.5 text-[13.5px] leading-relaxed text-graphite">{c.desc}</p>
                <span className="mt-5 inline-flex items-center gap-1.5 border-t border-line pt-4 text-[13px] font-semibold text-indigo">
                  {c.linkLabel}
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden className="transition-transform duration-200 group-hover:translate-x-0.5">
                    <path d="M2 6h8m0 0L6.5 2.5M10 6l-3.5 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </a>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---- The main CTA banner, between the needs grid and the process, per
   the deck: one headline, one short sentence, one button. ---- */

export function SeoBanner() {
  return (
    <CtaBanner
      title={SEO_BANNER.title}
      body={SEO_BANNER.body}
      bodyWide
      cta={{ label: SEO_CTA, href: SEO_ROUTES.review }}
    />
  );
}
