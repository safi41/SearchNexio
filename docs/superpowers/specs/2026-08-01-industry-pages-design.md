# Crypto SEO and Healthcare SEO pages — design

Date: 2026-08-01
Source: `searchnexio-crypto-seo-FINAL.pdf`, `SearchNexio_Healthcare_SEO_Services_Final_Copy.pdf`

## Goal

Build two industry pages from client-supplied final copy and section-by-section
visual briefs, matching the quality and animation restraint of the existing
GEO, AI Search and Local SEO pages.

## Routes

| Page | Route | Sections |
| --- | --- | --- |
| Crypto SEO Services | `/industries/crypto-seo/` | 15 |
| Healthcare SEO Services | `/industries/healthcare/` | 17 |

Both canonicals come from the PDFs. Static export, `trailingSlash: true`.

## Decisions (confirmed with the user)

1. **Palette — our indigo/citron.** The PDFs name teal `#0E5A5A` and copper
   `#C25E2E`, but both briefs also say "use the existing SearchNexio design
   system tokens, no new design language." Our tokens are indigo/citron, so
   the named colors map onto them: teal/copper accents become indigo, and
   confirmation/highlight accents become citron.
2. **Placeholders stay, styled honestly.** Every `[INSERT VERIFIED …]` block
   renders as a "available on request" panel. No invented numbers, no fake
   client logos, no fabricated testimonials.
3. **Links: live targets only.** Pages that exist (GEO, AI Search, Local SEO,
   contact, the visibility review anchor) get real links. Pages that do not
   exist yet (technical SEO, AI SEO services, AEO, privacy policy) render as
   inert `#` so the build produces no 404s.

## Architecture

Mirrors the existing page pattern exactly.

```
lib/crypto-seo-content.ts        all crypto copy + ROUTES map
lib/healthcare-seo-content.ts    all healthcare copy + ROUTES map
components/crypto/*.tsx          crypto sections (2-3 files)
components/healthcare/*.tsx      healthcare sections (2-3 files)
app/industries/crypto-seo/page.tsx
app/industries/healthcare/page.tsx
```

Copy lives in `lib/` so the components stay presentational and the client can
edit wording without touching layout. Sections are grouped into a few files
per page rather than one file per section, matching `localseo/LocalTop.tsx`
and `LocalBottom.tsx`.

## Reused primitives

`Reveal` (scroll entrance), `CtaLink` (all four variants), `.cta-indigo`
(dark conversion panels), the scroll-activated process timeline from
`FullSurfaceMethod` / `GeoProcess`, the FAQ accordion with FAQPage JSON-LD,
and `.journey-line` / `.trend-bar` for line-draw effects.

## Animation plan

Both briefs restrict motion to a few places. This matches the site's existing
restraint, so it is followed literally.

**Crypto — animate only:**
- Hero: three-step acquisition flow (query types itself, service page appears,
  form submits). Plays once, no loop.
- How Crypto Customers Search: four columns stagger in at 80ms, connecting
  line draws once, search bar blinks once as if typing.
- Process timeline: steps activate on scroll.

**Healthcare — animate only:**
- Hero: search to treatment page to booking, once.
- How patients search for care: four-stage journey, each stage once on scroll.
- Process timeline: steps activate on scroll.
- Results: simple chart reveal (only once real data exists).

**Everywhere on both pages:** no animated counters. Both pages carry
measurement-honesty copy, and growing numbers would contradict it. Trust,
guarantees, testimonial and final-form sections stay static by instruction.
All motion respects `prefers-reduced-motion`.

## Content compliance rules

Carried from the PDFs and the earlier client pages:

- No em dashes in visible copy.
- No invented statistics, case studies, testimonials or client logos.
- Experience claims limited to what the client can verify; the "10+ years /
  50+ projects" style claims appear only where the PDF places them, with the
  PDF's own qualifying language intact.
- Crypto page: no coins, rockets, moons, blockchain cubes, candlestick charts,
  hacker imagery, or fake portfolio dashboards.
- Healthcare page: no stock photography of doctors, no fake patient reviews,
  no fake dashboards.
- Any sample UI is abstract and labeled illustrative.

## Navigation

Both pages are added to `SiteNav`, giving: Home, AI Search, GEO, Local SEO,
Crypto, Healthcare.

## Build order

Crypto first, reviewed by the user, then Healthcare. Each page ships as its
own commit with a passing production build.
