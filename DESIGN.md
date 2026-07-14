# SearchNexio Homepage: UI Design & Motion Spec

Design system for the FINAL v3 copy doc. Copy is locked; this spec maps every
section of that doc to a layout and an animation treatment.

## Design thesis: "The Visibility Scan"

The copy's core idea is visible vs. invisible, surface by surface ("Find out
where you are invisible", "surface-by-surface map", "Full-Surface Method").
The design dramatizes that one idea and nothing else:

- The hero headline's word **"Found"** starts as a ghost outline (an invisible
  business) and is revealed by a copper scan bar (getting found).
- A **surface readout strip** (Google / Maps / AI Overviews / ChatGPT) resolves
  to sage "visible" dots, a live demo of the promise.
- A faint **radar pulse** breathes behind the hero.
- The two **dark ink sections** (Problem, Final CTA) are "where you cannot be
  seen" and bookend the page.

Everything else stays quiet: hairlines, whitespace, one easing curve.

## Tokens

### Color (exact, from brand spec)

| Token         | Hex       | Role                                 |
| ------------- | --------- | ------------------------------------ |
| `paper`       | `#FAF7F2` | Page base (warm paper)               |
| `surface`     | `#FFFFFF` | Cards                                |
| `line`        | `#EFEAE2` | Card borders, hairlines              |
| `ink`         | `#12262B` | Text, dark section backgrounds       |
| `teal`        | `#0E5A5A` | Primary: links, eyebrows, scan fills |
| `copper`      | `#C25E2E` | Accent: CTAs, scan bar, highlights   |
| `copper-deep` | `#9D4A20` | Copper hover state (derived)         |
| `sage`        | `#6E8B6A` | Positive status: "visible" dots      |

### Type

| Role    | Face          | Use                                                          |
| ------- | ------------- | ------------------------------------------------------------ |
| Display | Newsreader    | H1/H2/H3, italic for emphasis words; editorial trust         |
| Body    | Public Sans   | Paragraphs, UI; designed for high-scrutiny clarity           |
| Utility | IBM Plex Mono | Eyebrows, stats, scan readouts, indices; instrument language |

Scale: H1 `clamp(3.1rem, 9vw, 7.75rem)` at 0.98 leading; H2 4xl to 6xl;
eyebrows 12px mono with 0.32em tracking and a copper `+` surveyor's tick.

### Motion grammar (global rules)

- One easing curve everywhere: `cubic-bezier(0.22, 1, 0.36, 1)`.
- Reveals: 24 to 28px rise + fade, 0.7 to 0.9s, staggers of 0.09 to 0.15s.
- Headlines rise out of `overflow-hidden` masks line by line.
- Scroll triggers fire once (`viewport: { once: true }`) at -12% margin.
- Ambient loops (radar, caret) run at 2 to 9% opacity only.
- `prefers-reduced-motion`: all entrances render final state, ambient loops
  stop (`useReducedMotion` in components, `.motion-ambient` kill in CSS).
- Sharp corners throughout; the hairline is the only divider.

## Section-by-section

### 1. Hero (built: `components/Hero.tsx`)

Layout: left-aligned, ~90vh. Slim nav (serif wordmark + mono CTA link).
Eyebrow > two-line H1 > subheading (max-w-xl) > CTA pair > proof line >
surface scan strip on a top hairline. Radar sits off-canvas right, desktop only.

Copy mapping: all of doc section 1; strip labels are the four surfaces named
in the subheading.

Animation (load choreography, seconds):
- 0.2 eyebrow types on character by character, copper caret keeps blinking
- 0.55 H1 lines rise from masks, 0.14 stagger
- 1.1 subheading rises; 1.3 CTAs; 1.5 proof line fades
- 1.5 the scan: copper bar sweeps across ghost-outlined "Found", solid teal
  italic word clip-reveals behind it
- 1.7+ strip fades in, shimmer runs its hairline, sage dots pop and "visible"
  labels appear per surface (0.15 stagger)
- Ambient: 3 radar rings expand on a 9s loop, conic sweep rotates 22s;
  radar parallax-drifts ~90px over the first 700px of scroll

CTA hover: copper fills from below with deep copper; arrow nudges right.
Ghost CTA: copper underline draws left-to-right on hover.

### 2. Logo strip (built: `components/LogoStrip.tsx`)

One quiet row. Mono kicker line, then the five client names as Newsreader
text wordmarks (the copy doc explicitly approves styled text wordmarks).
Staggered fade-up; names warm from 50% ink to teal on hover.
TODO before launch: written permission per client.

### 3. Trust bullets

Layout: three columns separated by vertical hairlines (no cards), each with a
bold sans title and 2-line body from doc section 3.
Animation: columns stagger in 0.12s apart; each hairline draws top-to-bottom
(`scaleY` 0 to 1) as its column lands.

### 4. The Problem (built: `components/ProblemSection.tsx`, dark)

Layout: ink background (the "invisible" world). Eyebrow, two-line H2 with
"hasn't" in italic copper, three body paragraphs, then two journey rows,
then three stats, then closing line + CTA.

Copy mapping: all of doc section 4. Journey rows use the exact journey
comparison lines; stats are the three "reality by the numbers" figures with a
"sources verified and linked at launch" footnote honoring the doc's
verification note.

Animation:
- H2 mask-rises; paragraphs stagger up
- Journey rows: connector lines draw left-to-right (`scaleX`), chips pop in
  along them; the "used to" row is muted at 25 to 45% opacity, the "now" row
  is full-strength with sage connectors and a sage-filled "Decision" chip.
  The visual contrast IS the argument: one thin path vs. many surfaces.
- Stats count up from 0 over 1.8s (mono digits, copper % sign) on first view

### 5. Results

Layout: asymmetric grid: McNulty hero tile spans 2 columns, Astera and
AurumFSG stack beside it. White `surface` cards with `line` borders on paper.
Metric placeholders render as dashed copper chips labeled "metric pending
case study" so nothing unverified ships. "More case studies..." line + link
below. Swap note from the doc lives as a code comment.

Animation: tiles rise with 0.12s stagger; on hover a card lifts 4px, border
warms toward copper, and "Read the case study" arrow slides right. When real
numbers land, they get the same count-up treatment as section 4.

### 6. Full-Surface Method (built: `components/FullSurfaceMethod.tsx`)

Layout: two columns. Left is sticky: eyebrow, H2, intro, and the "no lock-in
contracts" closing line on a copper border. Right is an ordered rail of the
four steps: Map, Fix, Amplify, Prove, each with a mono index, serif step
name, and body copy.

This is the only numbered section on the page, because it is the only true
sequence in the copy ("working through them in a set order").

Animation (the scroll centerpiece):
- A teal progress line draws down the rail, bound directly to scroll position
  (`useScroll` + `scaleY`), so the reader literally scrolls the method into
  order
- Each step activates as the line reaches it: node dot pops, copper index
  fades in, step name rises from a mask, body follows
- Left column pins (`position: sticky`) while the rail scrolls past

### 7. Services

Layout: 2-column asymmetric tile grid honoring the doc's own sizing: Core SEO
large (spans full left column), Local and AI Visibility stacked right,
Recovery and Conversion wide across the bottom. Each tile: H3, italic serif
"The pain point it solves" line, then the bulleted offerings with bold
lead-ins. Section subline above, "Not sure which piece you need?" close below.

Animation: tiles stagger-rise; on hover the pain-point line warms to copper
and bullets indent 4px in a 40ms cascade. No parallax here; density stays calm.

### 8. Industries (slim band)

Layout: single band on paper: eyebrow, H2, one line, then five linked pills
(bordered, sharp-cornered), closing honesty line in italic serif.
Animation: pills stagger in 60ms apart; hover fills teal with paper text.
One-sentence descriptions appear on hover as a quiet mono tooltip, per the
doc's "never paragraphs here" note.

### 9. Why SearchNexio

Layout: intro line, then a 2x2 grid of the four differentiators split by
hairlines (echoes section 3's anatomy). Testimonial slot renders as a single
large serif italic pull-quote block, dashed-bordered until the sourced quote
lands (permission outreach pending).

Animation: grid cells stagger diagonally (top-left first); the pull-quote's
oversized quotation mark draws in as an SVG stroke.

### 10. FAQ

Layout: single column, max-w-3xl. Each of the eight Q&As is an accordion row
split by hairlines. Visible "Last updated" date in mono at the top of the
block. FAQPage JSON-LD required (schema mirrors the visible copy exactly).

Animation: rows fade in on scroll; open/close animates height with
AnimatePresence, the `+` indicator rotates 45deg to become an `x`. First
sentence of each answer is bold, honoring "first sentence answers directly."

### 11. Final CTA (dark bookend)

Layout: ink background, mirrors the hero: H2 "Find out where you are
invisible", body paragraph, CTA pair, footer tagline "Wherever buyers search,
be found." in italic serif beneath a hairline.

Animation: the radar motif returns, but inverted: rings in paper at 4%
opacity. The word "invisible" in the H2 renders at 35% opacity with a ghost
outline, and as the section enters view it resolves to solid paper: the
hero's scan moment, replayed in negative. Anchor `#visibility-review` lands here.

## SEO / structural notes carried from the doc

- Title tag + meta description implemented in `app/layout.tsx` metadata
- Organization schema with the exact entity sentence in `app/layout.tsx`
- FAQPage schema pending FAQ build; visible "Last updated" date required
- No em dashes anywhere in rendered copy
- All `[[ ]]` placeholders render as visibly-pending dashed chips, never as
  fake numbers
