# SearchNexio Site

Next.js (App Router) + Tailwind CSS v4 + GSAP (ScrollTrigger, ScrollSmoother,
SplitText) implementation of the FINAL v3 copy doc: the full homepage plus the
pages the doc references. `DESIGN.md` holds the original design spec; this
file reflects the build as it stands.

## Run it

```bash
npm install
npm run dev
```

## Routes

```
/               full homepage (all sections from the copy doc)
/case-studies   all four engagements incl. Darussalam (doc's swap candidate)
/services       the four service groups from doc section 7, expanded
/industries     hub page: one approved sentence per industry
/about          entity sentence (exact), method, partnership principles,
                pending founder credentials + address blocks
/contact        visibility review request flow (submit not yet wired to a CRM)
```

## Homepage flow

1. **Hero (paper, full screen)** — radar blooms from a dot at center, travels
   to its resting spot, then the text choreography plays: typewriter eyebrow,
   masked headline lines, the copper scan bar revealing "Found", and the
   surface readout strip resolving Google / Maps / AI Overviews / ChatGPT.
   Scrolling detonates the headline: SplitText letters scatter across the
   screen, scrubbed, and reassemble on the way back up.
2. **Logo marquee (paper)** — infinite text-wordmark loop, paused on hover.
3. **The dark act (ink, pinned)** — horizontal scroll: intro heading, hairline
   divider, then three trust-statement cards that climb from below the
   viewport on a scrubbed diagonal. The act ends with a full-screen paper
   handoff panel carrying the "Why It Matters" opening, its ink curtain bars
   retracting as it slides in from the right; when it owns the screen the pin
   releases into normal vertical scroll.
4. **Why It Matters (paper)** — body paragraphs, the two buyer journeys that
   draw themselves stop by stop (with a traveling pulse that loops forever on
   the living route and runs once on the dead one), count-up stats, and a
   closing line that fills in word by word as a scroll mask.
5. **Results / Method / Services / Industries / Why / FAQ** — tilt cards with
   pending-metric chips, the scroll-scrubbed method rail with pinned intro,
   service tiles, industry pills, the 2x2 why grid, and the animated FAQ
   accordion with FAQPage schema.
6. **Final CTA (ink)** — vertical blinds curtain in, "invisible" resolves from
   ghost outline to solid, inverted radar, magnetic CTAs.

## Structure

```
app/
  layout.tsx        fonts, SEO metadata, Organization schema, global
                    nav / smooth-scroll shell / progress hairline
  globals.css       exact brand tokens as Tailwind v4 @theme, ambient
                    keyframes (radar, blips, caret, marquee), paper grain
lib/
  content.ts        every piece of copy from the doc, typed and centralized
components/
  Hero.tsx               radar bloom + text choreography + scatter-on-scroll
  LogoStrip.tsx          infinite text-wordmark marquee (pause on hover)
  TrustBullets.tsx       pinned horizontal dark act + Why It Matters handoff
  ProblemSection.tsx     journeys with traveling pulse, count-ups, word mask
  Results.tsx            3D-tilt case tiles, pending-metric chips
  FullSurfaceMethod.tsx  scroll-bound progress rail, pinned intro column
  Services.tsx           service tiles with corner-tick + cascade hovers
  Industries.tsx         slim band, teal fill pills (blurbs on hover)
  WhySearchNexio.tsx     2x2 hairline grid + pending testimonial slot
  Faq.tsx                GSAP accordion + FAQPage JSON-LD
  FinalCta.tsx           blinds, ghost "invisible" resolve, inverted radar
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

## Design system

- **Grounds:** the palette owns exactly two grounds, paper `#FAF7F2` and ink
  `#12262B`. Teal `#0E5A5A`, copper `#C25E2E`, and sage `#6E8B6A` are
  instrument colors (links, CTAs, status); never use them as section fields.
- **Type:** Bricolage Grotesque (hero hook only, mixed with Newsreader italic
  on the voice words "Found" and "Search"), Newsreader (display), Public Sans
  (body), IBM Plex Mono (eyebrows, readouts, stats).
- **Radar rings** pulse in three dark tones: teal, ink, deep copper.

## Motion system (GSAP)

- ScrollSmoother drives page scroll; `data-speed` gives radar and watermarks
  parallax. Fixed chrome lives outside `#smooth-wrapper`.
- ScrollTrigger runs every reveal; scrubbed triggers bind the method rail,
  the hero exit + shatter, the trust-card climbs, the handoff curtain, and
  the word masks directly to scroll position, so they reverse on the way up.
- `containerAnimation` triggers fire on horizontal position inside the pinned
  dark act (card climbs, curtain, heading).
- SplitText powers the typewriter eyebrow, the headline shatter, and the
  word-by-word scroll mask on "You cannot fix what you cannot see."
- One easing family (`power4.out` / `power4.inOut`) everywhere; ambient loops
  carry `.motion-ambient`.
- All entrance/scrub work registers under gsap.matchMedia's
  prefers-reduced-motion guard: reduced-motion users get the finished layout
  (the horizontal act folds into a vertical list, curtains removed).

## Conventions

- Every color comes from the tokens in `globals.css`; never hard-code hex in
  components (low-alpha `rgba` values are the palette tokens at low alpha).
- Copy is locked (FINAL v3) and centralized in `lib/content.ts`. No em dashes
  in any rendered text. `[[ ]]` placeholders from the doc must render as
  visibly-pending elements, never as invented numbers.
- The Organization schema entity sentence in `app/layout.tsx` must match the
  About page and every directory listing exactly.

## Before launch (from the doc's checklist)

1. Written permission from all named clients (logos, names, quotes).
2. Fill all `[[ ]]` placeholders with client-confirmed figures.
3. Verify and link sources for the three problem-section statistics.
4. Confirm "Full-Surface Method" is unclaimed before adding the TM mark.
5. About page: founder credentials; business address + privacy policy live.
6. Wire `/contact` form submit to the CRM.
