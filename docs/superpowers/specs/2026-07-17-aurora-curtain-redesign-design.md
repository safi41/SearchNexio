# SearchNexio Homepage Redesign: "Aurora Curtain" Design Spec

Approved 2026-07-17 (client chose Concept 1 of 3; concept presentation lives in
the session artifact "SearchNexio — Homepage Redesign Concepts"). This spec
replaces the visual system in `DESIGN.md` (teal/copper editorial). Copy is
unchanged: everything in `lib/content.ts` and the FINAL v3 copy doc stays.

## Direction

Stripe-family enterprise: an animated indigo-to-citron gradient curtain fills
the top of the page, cut on a diagonal. Below the curtain the page goes quiet:
white and ivory bands, hairline borders, indigo eyebrows, one filled CTA per
section. The client's rules, verbatim: curtain animation only ("bus uske ilawa
animation nahi"), enterprise fonts, professional not creative.

## Tokens

### Color (exact, from client brief)

| Token     | Hex       | Role                                  |
| --------- | --------- | ------------------------------------- |
| `ink`     | `#0B0D12` | Main text, dark section backgrounds   |
| `ivory`   | `#F7F5EF` | Page background                       |
| `indigo`  | `#635BFF` | Brand: links, eyebrows, data viz      |
| `citron`  | `#DFFF52` | Primary CTA fill only                 |
| `lilac`   | `#ECEAFF` | Soft purple backgrounds, tag chips    |
| `graphite`| `#5D6270` | Secondary text                        |
| `surface` | `#FFFFFF` | Cards, nav panel                      |
| `line`    | `#E4E2DC` | Hairline borders                      |

Derived (needed, not in brief): `indigo-deep #4A43D9` (link hover),
`citron-deep #C9E63E` (CTA hover), curtain-only hues `#8F7BFF` (violet),
`#4CC9F0` (sky), warning `#C2410C` (red-flagged AI gaps in report card).
Curtain hues appear nowhere else on the page.

### Type

One family: **Inter Tight** (variable, via `next/font/google`), the Söhne
substitute. No serif anywhere (Newsreader, Public Sans, IBM Plex Mono all
removed).

| Role      | Weight  | Notes                                            |
| --------- | ------- | ------------------------------------------------ |
| Display   | 340     | H1 `clamp(2.6rem, 5.4vw, 4.3rem)`, tracking -0.035em, leading 1.04 |
| H2        | 380     | `clamp(2rem, 3.6vw, 3rem)`, tracking -0.025em    |
| Body      | 400     | 16–17px, leading 1.55                            |
| UI/labels | 500–600 | Buttons 550, eyebrows 650                        |

Eyebrows: 12px, uppercase, 0.2em tracking, indigo (lilac-tinted `#B9B2FF` on
dark sections). Numbers always `tabular-nums`. Hierarchy comes from size and
tracking, never bold display type.

### Shape and depth

- Radius: cards 16px, small chips/inputs 10px, buttons and pills 999px.
- Borders: 1px `line` hairlines carry all structure.
- Shadows: only two: the floating report card
  (`0 18px 44px rgba(11,13,18,.16)`) and the primary CTA
  (`0 2px 8px rgba(11,13,18,.14)`). Cards get no shadow, hover lifts none.

## Motion (the whole policy)

1. **The curtain is the only continuous animation.** Blurred gradient blobs
   (5 layers: indigo, violet, lilac, citron at .85, sky at .5) drifting on
   14–21s alternating ease-in-out loops inside a `skewY(-7deg)`
   `overflow-hidden` container. Pure CSS transforms, GPU-composited: no WebGL
   dependency, matches the approved mockup exactly.
2. Section entrances: single 300ms fade + 12px rise, once, at viewport entry.
   No stagger choreography, no masks, no typewriter, no count-ups, no
   parallax, no pinning, no scroll-jacking, no marquee. GSAP ScrollSmoother,
   ScrollTrigger scenes, SplitText scatter: all removed.
3. Hover: CTA fill darkens to `citron-deep`; links slide their arrow 3px
   right; nav links dim. 150–300ms ease.
4. `prefers-reduced-motion`: curtain blobs freeze (animation: none), fades
   render final state.

## Page anatomy (same skeleton, new skin)

1. **Nav**: transparent over the curtain (white wordmark/links), becomes
   `surface` with hairline on scroll past the hero. Right: pill CTA
   "Request a review" (glass style over curtain, citron after scroll).
2. **Hero**: curtain fills top ~560-640px, diagonal cut at -7deg. Left column:
   white eyebrow, H1 340 weight ("Get Found Everywhere Buyers Search" per
   locked copy; first lines white on gradient, last line ink past the
   curtain edge), graphite subheading, citron pill CTA + indigo ghost link,
   proof line. Right column: the **Visibility Report card**, white, 16px
   radius, rotated 1.5deg, overlapping the diagonal: score 68/100, four
   surface rows (Google 82, Maps 74 indigo bars; AI Overviews 31, ChatGPT 18
   red `#C2410C` bars flagged as gaps), "LIVE SCAN" lilac chip. This card is
   the signature detail; metric values are illustrative UI, not claims.
3. **Logo strip**: quiet single row on `surface`, graphite text wordmarks,
   static (no marquee).
4. **Trust bullets**: three white cards, hairline, on ivory.
5. **Problem** (dark): `ink` band, lilac-tinted eyebrow, white H2, journey
   rows and stats in the same quiet card language; stats static (no
   count-up), indigo accents.
6. **Results**: metric-first case cards, white, 16px radius: indigo industry
   eyebrow, large 420-weight metric, summary, "Read the case study →".
   Pending metrics keep dashed-chip treatment.
7. **Method**: numbered 01-04 in lilac squares (like concept mockup's trust
   cards), two-column, no sticky pinning, no scroll-bound progress line.
8. **Services**: white tile grid, hairline, indigo hover accents.
9. **Industries**: lilac band, pill links (999px, hairline, ink text; invert
   to ink/ivory on hover).
10. **Why SearchNexio**: 2x2 hairline grid on ivory.
11. **FAQ**: accordion rows, hairline dividers, `+` rotates to `x` (kept:
    functional, not decorative).
12. **Final CTA** (dark bookend): `ink` band, white H2, citron CTA. A static
    (non-animated) low-opacity aurora glow may sit behind it: echo of the
    curtain, no motion.
13. **Footer**: on ink, follows Final CTA.

## Implementation notes

- `app/globals.css`: replace token block (@theme) and remove old animation
  utilities (radar, caret, scan, marquee).
- `app/layout.tsx`: swap font imports to Inter Tight; keep metadata/schema.
- `components/motion/`: reduce to one `Reveal` (fade-up, once) helper;
  delete scene/choreography code paths. GSAP dependency can stay installed
  but homepage stops using ScrollSmoother/SplitText.
- Old token names (`teal`, `copper`, `sage`, `paper`) are renamed
  (`indigo`, `citron`, `lilac`, `ivory`); all components including subpages
  (`PageHeader`, `ServiceGrid`, `CaseStudyGrid`, `IndustryList`,
  `AboutContent`, `ContactForm`, `Faq`) get the rename sweep so every route
  stays coherent.
- Copy, routes, JSON-LD schema, "no em dashes", pending-chip convention: all
  unchanged.
- Work happens on branch `redesign/aurora-curtain`; `main` keeps the
  teal/copper build until approval.

## Out of scope

WebGL gradient mesh (CSS blobs approved instead), new copy, new sections,
subpage layout redesigns (they only get the token/type sweep), CRM wiring.
