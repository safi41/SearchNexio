# SearchNexio Site

Next.js (App Router) + Tailwind CSS v4 implementation of the FINAL v3 copy
doc in the **Sasico-style** system (client reference: sasico-saas.vercel.app)
rendered in the exact brand palette. The prior Aurora Curtain build lives on
branch `redesign/aurora-curtain`;
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

1. **Hero** — centered stack over a faint square grid with citron corner
   washes: badge pill, huge Jakarta-bold headline, citron pill CTA with the
   circle-arrow chip, then the full-width Visibility Report dashboard
   mockup (sidebar, KPI cards, surface-coverage bars with red-flagged AI
   rows, leads-growth chart; illustrative UI, not client claims).
2. **Logo strip** — centered "Trusted by" line + bold muted wordmarks.
3. **Trust bullets** — three rounded cards with citron icon tiles.
4. **Problem** — citron-washed band: centered head, the two
   journey-comparison cards (pill chips; black "Decision" chip), indigo
   stats, closing line + CTA.
5. **Results / Method / Services / Industries / Why / FAQ** — badge +
   centered bold H2 opens every section; case cards with badge pills and
   pending-metric chips, four step cards with icon tiles on a citron wash,
   service feature cards with check bullets, centered industry pills, 2x2
   why cards, rounded-card FAQ accordion with FAQPage schema.
6. **Final CTA** — full-width rounded citron banner with dotted texture and
   a dark pill CTA. Footer on ivory with the giant outlined wordmark
   watermark and citron glow.

## Structure

```
app/
  layout.tsx        Plus Jakarta Sans + Inter via next/font, SEO metadata,
                    Organization schema, nav + footer shell
  globals.css       exact brand tokens as Tailwind v4 @theme, grid-pattern
                    and citron-wash utilities
lib/
  content.ts        every piece of copy from the doc, typed and centralized
components/
  Hero.tsx               centered hero + Visibility Report dashboard mockup
  LogoStrip.tsx          centered trusted-by wordmark row
  TrustBullets.tsx       three icon-tile proof cards
  ProblemSection.tsx     citron-wash band: journeys, stats, closing CTA
  Results.tsx            case cards with badges (+ ResultTile for subpage)
  FullSurfaceMethod.tsx  four step cards on citron wash
  Services.tsx           feature cards with check bullets (+ ServiceTile)
  Industries.tsx         centered pill row
  WhySearchNexio.tsx     2x2 cards + pending testimonial slot
  Faq.tsx                rounded-card accordion + FAQPage JSON-LD
  FinalCta.tsx           citron banner card with dotted texture
  SiteNav.tsx            logo left, floating pill link bar, pill CTA
  Footer.tsx             link row + outlined wordmark watermark + glow
  PageHeader.tsx         centered subpage masthead over grid pattern
  CaseStudyGrid / ServiceGrid / IndustryList / AboutContent / ContactForm
  ui.tsx                 Badge, CtaLink (pill + circle-arrow), SectionHead,
                         IconTile
  icons.tsx              small stroke glyphs for feature/step tiles
  motion/Reveal.tsx      the only entrance animation: 300ms fade + 12px
                         rise, once, IntersectionObserver, reduced-motion safe
  motion/primitives.tsx  compat shims (Reveal/Stagger/MaskedHeading) built
                         on Reveal for the subpage components
```

## Design system (Sasico-style)

- **Colors (client's exact brief):** ink `#0B0D12`, ivory `#F7F5EF` page
  base, citron `#DFFF52` (CTAs, badges, icon tiles, washes), indigo
  `#635BFF` (stat accents, LIVE SCAN chip), lilac `#ECEAFF`, graphite
  `#5D6270`, white cards, `#E4E2DC` borders.
- **Type:** Plus Jakarta Sans 700 for every heading (`font-heading`),
  Inter for body and UI. Section pattern: badge pill, centered bold H2,
  gray centered subtext.
- **Shape:** everything rounds — cards `rounded-3xl`, buttons/badges/chips
  full pills. Every CTA carries the circle-arrow chip (`ArrowChip`).
- **Backdrops:** `.grid-pattern` faint square grid behind hero/page heads;
  `.wash-citron` corner washes; `.wash-citron-full` tinted section bands.
- **Motion:** one 300ms fade-up per section via `Reveal`; hover
  shadow-lifts on cards; reduced-motion renders final states.

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
