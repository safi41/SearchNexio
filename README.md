# SearchNexio Site

Next.js (App Router) + Tailwind CSS v4 + GSAP (ScrollTrigger, ScrollSmoother,
SplitText) implementation of the FINAL v3 copy doc: the full homepage plus the
pages the doc references. See `DESIGN.md` for the section-by-section UI and
motion spec.

## Run it

```bash
npm install
npm run dev
```

## Routes

```
/               full homepage (all 11 sections from the copy doc)
/case-studies   all four engagements incl. Darussalam (doc's swap candidate)
/services       the four service groups from doc section 7, expanded
/industries     hub page: one approved sentence per industry
/about          entity sentence (exact), method, partnership principles,
                pending founder credentials + address blocks
/contact        visibility review request flow (submit not yet wired to a CRM)
```

## Structure

```
app/
  layout.tsx        fonts (Newsreader / Public Sans / IBM Plex Mono), SEO
                    metadata, Organization schema, global nav/footer/progress
  globals.css       exact brand tokens as Tailwind v4 @theme, ambient keyframes
lib/
  content.ts        every piece of copy from the doc, typed and centralized
components/
  Hero.tsx               scan-reveal headline, radar + contact blips, scan strip
  LogoStrip.tsx          infinite text-wordmark marquee (pause on hover)
  TrustBullets.tsx       hairline columns that draw themselves in
  ProblemSection.tsx     dark section, journey draw, stat count-ups, teal glow
  Results.tsx            3D-tilt case tiles, pending-metric chips
  FullSurfaceMethod.tsx  scroll-bound progress rail, sticky intro
  Services.tsx           service tiles with corner-tick + cascade hovers
  Industries.tsx         slim band, teal fill pills (blurbs on hover)
  WhySearchNexio.tsx     2x2 hairline grid + pending testimonial slot
  Faq.tsx                AnimatePresence accordion + FAQPage JSON-LD
  FinalCta.tsx           ghost "invisible" resolve, inverted radar, glow
  SiteNav.tsx            fixed nav, backdrop blur after scroll
  Footer.tsx             dark footer with tagline + launch-pending note
  PageHeader.tsx         shared subpage masthead
  CaseStudyGrid / ServiceGrid / IndustryList / AboutContent / ContactForm
  ui.tsx                 Eyebrow + CtaLink (copper fill-sweep hover)
  motion/gsap.ts         plugin registration, shared eases, reduced-motion query
  motion/SmoothScroll.tsx ScrollSmoother shell + hash links + route resets
  motion/ScanTracker.tsx copper read-progress hairline across the top
  motion/primitives.tsx  Reveal, Stagger, MaskedHeading, BlindsReveal
  motion/interactive.tsx Magnetic, TiltCard (gsap quick tweens)
```

## Motion system (GSAP)

- ScrollSmoother drives buttery page scroll; `data-speed` attributes give
  radar and watermarks parallax. Fixed chrome lives outside `#smooth-wrapper`.
- ScrollTrigger runs every reveal; scrubbed triggers bind the method rail,
  the hero exit, and the Problem section's word-mask directly to scroll.
- SplitText powers the hero typewriter eyebrow and the word-by-word scroll
  mask on "You cannot fix what you cannot see."
- BlindsReveal masks staggered vertical slats away bottom-to-top with
  clip-path at every background change (paper to ink and back), scrubbed
  directly by scroll so the reader wipes each section open.
- All entrance/scrub work registers under gsap.matchMedia's
  prefers-reduced-motion guard, so reduced-motion users get the finished
  layout with zero movement.

## Conventions

- Every color comes from the tokens in `globals.css`; never hard-code hex in
  components (low-alpha `rgba` values are the teal/paper tokens at low alpha).
- One easing curve: `EASE` from `components/motion/primitives.tsx`.
- All scroll reveals fire once; all ambient loops carry `.motion-ambient` so
  reduced-motion kills them. New components must respect `useReducedMotion`.
- Copy is locked (FINAL v3) and centralized in `lib/content.ts`. No em dashes
  in any rendered text. `[[ ]]` placeholders from the doc must render as
  visibly-pending elements, never as invented numbers.

## Before launch (from the doc's checklist)

1. Written permission from all named clients (logos, names, quotes).
2. Fill all `[[ ]]` placeholders with client-confirmed figures.
3. Verify and link sources for the three problem-section statistics.
4. Confirm "Full-Surface Method" is unclaimed before adding the TM mark.
5. About page: founder credentials; business address + privacy policy live.
6. Wire `/contact` form submit to the CRM.
