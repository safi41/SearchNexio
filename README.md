# SearchNexio Site

Next.js (App Router) + Tailwind CSS v4 implementation of the FINAL v3 copy
doc in the client-approved **Aurora Curtain** design system (Stripe-family
enterprise). The governing design spec is
`docs/superpowers/specs/2026-07-17-aurora-curtain-redesign-design.md`;
`DESIGN.md` documents the retired teal/copper system and is kept for history.

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

1. **Hero** — the Aurora Curtain: five blurred gradient blobs (indigo,
   violet, lilac, citron, sky) drifting inside a `skewY(-7deg)` clipped band,
   the page's only continuous animation. Light-weight headline over the
   gradient, citron pill CTA, and the floating Visibility Report card
   (illustrative scores; AI surfaces red-flagged) overlapping the diagonal.
2. **Logo strip** — static typographic wordmark row on white.
3. **Trust bullets** — three white cards on ivory.
4. **Problem (ink)** — dark band: paragraphs, the two journey-comparison
   rows (muted old path vs. full-strength new surfaces with a citron
   Decision chip), static stats, closing line + CTA.
5. **Results / Method / Services / Industries / Why / FAQ** — metric-first
   case cards with pending-metric chips, numbered method rows with lilac
   index squares, white service tiles, lilac industries band with pill
   links, 2x2 hairline why-grid, CSS accordion FAQ with FAQPage schema.
6. **Final CTA (ink)** — dark bookend with a static indigo aurora glow,
   citron CTA. Footer follows on ink.

## Structure

```
app/
  layout.tsx        Inter Tight via next/font, SEO metadata, Organization
                    schema, nav + footer shell
  globals.css       exact brand tokens as Tailwind v4 @theme, curtain
                    drift keyframes, reduced-motion kill for .curtain-blob
lib/
  content.ts        every piece of copy from the doc, typed and centralized
components/
  Hero.tsx               curtain + report card (server component, no JS)
  LogoStrip.tsx          static wordmark row
  TrustBullets.tsx       three proof cards
  ProblemSection.tsx     dark band: journeys, stats, closing CTA
  Results.tsx            metric-first case tiles (+ ResultTile for subpage)
  FullSurfaceMethod.tsx  numbered method rows, no pinning
  Services.tsx           white tile grid (+ ServiceTile for subpage)
  Industries.tsx         lilac band with pill links
  WhySearchNexio.tsx     2x2 hairline grid + pending testimonial slot
  Faq.tsx                CSS grid-rows accordion + FAQPage JSON-LD
  FinalCta.tsx           dark bookend with static aurora glow
  SiteNav.tsx            transparent glass over the curtain (homepage only),
                         solid surface elsewhere / after scroll
  Footer.tsx             dark footer with tagline + launch-pending note
  PageHeader.tsx         shared subpage masthead
  CaseStudyGrid / ServiceGrid / IndustryList / AboutContent / ContactForm
  ui.tsx                 Eyebrow + CtaLink (citron pill / indigo arrow link)
  motion/Reveal.tsx      the only entrance animation: 300ms fade + 12px
                         rise, once, IntersectionObserver, reduced-motion safe
  motion/primitives.tsx  compat shims (Reveal/Stagger/MaskedHeading) built
                         on Reveal for the subpage components
```

## Design system (Aurora Curtain)

- **Colors (client's exact brief):** ink `#0B0D12`, ivory `#F7F5EF`,
  indigo `#635BFF`, citron `#DFFF52` (primary CTA only), lilac `#ECEAFF`,
  graphite `#5D6270`, white surfaces, `#E4E2DC` hairlines. Curtain-only
  hues (violet `#8F7BFF`, sky `#4CC9F0`) never appear elsewhere.
- **Type:** Inter Tight only. Display 340, H2 380, body 400, buttons 550,
  eyebrows 650. Hierarchy by size and negative tracking, never bold display.
- **Shape:** cards 16px, chips 10px, buttons full pill. Hairlines carry
  structure; shadows exist only on the report card and the primary CTA.
- **Motion policy:** the curtain is the only loop. Sections get one 300ms
  fade-up via `Reveal`. Hovers 150-300ms. `prefers-reduced-motion` freezes
  the curtain and renders final states.
- One filled (citron) CTA per band; indigo owns every other accent.

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
