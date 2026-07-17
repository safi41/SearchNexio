# Aurora Curtain Homepage Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Reskin the SearchNexio site from the teal/copper editorial system to the client-approved "Aurora Curtain" Stripe-family enterprise system, copy unchanged.

**Architecture:** Token swap in Tailwind v4 `@theme` (globals.css) + font swap in layout.tsx, then component-by-component rebuild of the homepage sections and a mechanical token sweep across subpage components. One `Reveal` fade-up helper replaces all GSAP choreography on the homepage.

**Tech Stack:** Next.js 16 App Router, Tailwind CSS v4, `next/font/google` (Inter Tight). GSAP stays installed but the homepage stops importing ScrollSmoother/ScrollTrigger/SplitText scenes.

## Global Constraints

- Colors, exact: ink `#0B0D12`, ivory `#F7F5EF`, indigo `#635BFF`, citron `#DFFF52`, lilac `#ECEAFF`, graphite `#5D6270`, surface `#FFFFFF`, line `#E4E2DC`; derived: indigo-deep `#4A43D9`, citron-deep `#C9E63E`, warn `#C2410C`; curtain-only: violet `#8F7BFF`, sky `#4CC9F0`.
- One family: Inter Tight variable. Display weight 340, H2 380, body 400, buttons 550, eyebrows 650. No serif, no mono.
- Motion policy: curtain blob drift is the only loop; sections get a single 300ms fade + 12px rise once; hovers 150–300ms; `prefers-reduced-motion` freezes everything.
- Radii: cards 16px, chips/inputs 10px, pills 999px. Hairline borders `line`; shadows only on hero report card and primary CTA.
- Copy from `lib/content.ts` unchanged; no em dashes; `[[ ]]` placeholders stay dashed pending chips.
- All work on branch `redesign/aurora-curtain`; commit after every task; verification is `npm run build` + headless-Chrome screenshots (no test suite exists in this repo).

---

### Task 1: Design system foundation

**Files:**
- Modify: `app/globals.css` (replace `@theme` tokens + animation utilities)
- Modify: `app/layout.tsx` (fonts)
- Modify: `components/motion/` (add `Reveal.tsx`)

**Interfaces:**
- Produces: Tailwind utilities `bg-ivory bg-surface bg-ink bg-lilac bg-citron text-ink text-graphite text-indigo border-line` etc. from `@theme` vars `--color-ink|ivory|indigo|indigo-deep|citron|citron-deep|lilac|graphite|surface|line|warn|violet|sky`; CSS vars `--font-sans`; component `<Reveal delay?>` (client) that fade-rises its children once on viewport entry and renders final state under reduced motion.

- [ ] Replace the `@theme` color/font block in `globals.css` with the palette above; delete radar/caret/scan/marquee keyframes and `.motion-ambient`; add `.curtain-blob` keyframes:

```css
@keyframes drift-a { from { transform: translate(0,0) scale(1); } to { transform: translate(9%,7%) scale(1.14); } }
@keyframes drift-b { from { transform: translate(0,0) scale(1.08); } to { transform: translate(-8%,6%) scale(.95); } }
@keyframes drift-c { from { transform: translate(0,0); } to { transform: translate(7%,-6%); } }
@media (prefers-reduced-motion: reduce) { .curtain-blob { animation: none !important; } }
```

- [ ] `layout.tsx`: replace Newsreader/Public Sans/IBM Plex Mono with `Inter_Tight({ subsets:["latin"], axes/weights variable })`, expose as `--font-sans`; body class `bg-ivory text-ink antialiased`.
- [ ] Add `components/motion/Reveal.tsx`: IntersectionObserver (or framer-less CSS + `useEffect`) toggling `opacity-0 translate-y-3` → `opacity-100 translate-y-0` with `transition duration-300`, `once`, reduced-motion renders final state.
- [ ] `npm run build` passes. Commit "feat: aurora-curtain design tokens, Inter Tight, Reveal helper".

### Task 2: ui.tsx primitives

**Files:**
- Modify: `components/ui.tsx`

**Interfaces:**
- Produces: `Eyebrow({children, onDark?})` 12px/650/0.2em uppercase, indigo or `#B9B2FF`; `CtaButton({href, children})` citron pill 999px, ink text, weight 550, shadow `0 2px 8px rgba(11,13,18,.14)`, hover `citron-deep`; `ArrowLink({href, children, onDark?})` indigo 550 with `→` that translates 3px right on hover; `SectionShell` spacing helpers. Old exports that other components import (`CtaLink`, `Magnetic`, etc.) are replaced; every importer is updated in Tasks 3–7.

- [ ] Rewrite primitives per spec (no Magnetic, no underline-draw effects). Build. Commit "feat: aurora-curtain UI primitives".

### Task 3: Nav + Hero (the centerpiece)

**Files:**
- Modify: `components/SiteNav.tsx`, `components/Hero.tsx`

**Interfaces:**
- Consumes: `Reveal`, `Eyebrow`, `CtaButton`, `ArrowLink`, `SURFACES` from `lib/content.ts`.

- [ ] `SiteNav`: fixed, transparent over curtain (white wordmark "SearchNexio." with citron dot, white/90 links, glass pill CTA `bg-white/15 border-white/35`); after `scrollY > heroHeight-80` switch to `bg-surface border-b border-line` ink links + citron pill CTA. Links: Services, Case Studies, Industries, About.
- [ ] `Hero`: structure per spec §Page anatomy 2. Curtain markup:

```tsx
<div className="absolute inset-x-0 top-0 h-[620px] overflow-hidden [transform:skewY(-7deg)] origin-top-left">
  <div className="absolute -inset-x-[20%] -inset-y-[40%] blur-[52px] saturate-[1.15]">
    {/* 5 blobs: indigo drift-a 16s, violet drift-b 19s, lilac drift-c 14s,
        citron/85 drift-a 21s reverse, sky/50 drift-b 17s reverse; all
        rounded-full absolute, class curtain-blob */}
  </div>
</div>
```

  Grid `lg:grid-cols-[1.15fr_.85fr]`; H1 `text-[clamp(2.6rem,5.4vw,4.3rem)] font-[340] leading-[1.04] tracking-[-0.035em]`, first two lines `text-white`, last line `text-ink`; sub `text-graphite max-w-xl`; CTAs `CtaButton` "Request a Visibility Review" + `ArrowLink` "View case studies"; proof line 13px graphite. Report card: white, `rounded-2xl`, `rotate-[1.5deg]`, shadow `0 18px 44px rgba(11,13,18,.16)`, "Visibility Report" + lilac "LIVE SCAN" chip, score `68/100` tabular, rows Google 82 / Maps 74 (indigo bars) and AI Overviews 31 / ChatGPT 18 (warn bars + warn %), hairline row dividers. Delete: radar, typewriter, SplitText scatter, scan strip, GSAP imports.
- [ ] Build; screenshot hero; check headline contrast on gradient and diagonal cut lands between hero and next band. Commit "feat: aurora curtain hero + adaptive nav".

### Task 4: Light homepage sections

**Files:**
- Modify: `components/LogoStrip.tsx`, `TrustBullets.tsx`, `Results.tsx`, `FullSurfaceMethod.tsx`, `Services.tsx`, `Industries.tsx`, `WhySearchNexio.tsx`, `Faq.tsx`

- [ ] `LogoStrip`: static flex row on `bg-surface`, graphite 550 15px names, kicker line 12px; no marquee.
- [ ] `TrustBullets`: 3 white cards `rounded-2xl border border-line p-6` on ivory; title 15px/600, body 13px graphite.
- [ ] `Results`: cards per spec §6: `Eyebrow` industry, metric `text-[26px] font-[420] tabular-nums` (dashed warn-free pending chips for `[[ ]]`), summary 13px graphite, `ArrowLink`.
- [ ] `FullSurfaceMethod`: two-col, left intro sticky removed; right: 4 rows each with `01` in `size-8 rounded-lg bg-lilac text-indigo font-600 grid place-items-center`, name 16px/550, body graphite. No progress line.
- [ ] `Services`: white tiles, hairline, H3 17px/550, pain line graphite italic removed → regular graphite; bullets 13.5px; hover: border-indigo/40 only.
- [ ] `Industries`: `bg-lilac` band; pills `rounded-full border border-ink/20 px-5 py-2.5` hover `bg-ink text-ivory`.
- [ ] `WhySearchNexio`: 2x2 grid split by `divide-x divide-y divide-line`; quote block plain white card.
- [ ] `Faq`: keep accordion behavior; rows `border-t border-line`, question 15px/550, `+`→`x` rotate kept; strip serif/mono classes.
- [ ] Wrap each section's container in `<Reveal>`. Build. Commit "feat: reskin light homepage sections".

### Task 5: Dark sections + footer

**Files:**
- Modify: `components/ProblemSection.tsx`, `FinalCta.tsx`, `Footer.tsx`

- [ ] `ProblemSection`: `bg-ink text-white`; eyebrow `#B9B2FF`; H2 380 white (drop italic-copper word treatment); body `text-white/65`; journey rows as simple chip rows `bg-white/5 border-white/15 rounded-xl` (muted vs full-strength kept via opacity); stats static `text-4xl font-[420] tabular-nums` with indigo suffix; remove count-up + connector-draw GSAP.
- [ ] `FinalCta`: `bg-ink`, static aurora: absolutely-positioned indigo/violet radial-gradient divs `blur-[70px] opacity-40` (no animation class); white H2 (drop ghost-outline "invisible" effect), `CtaButton`, tagline `text-white/55`.
- [ ] `Footer`: on ink, `border-t border-white/10`, links `text-white/60 hover:text-white`.
- [ ] Build. Commit "feat: reskin dark sections and footer".

### Task 6: Subpage token sweep

**Files:**
- Modify: `components/PageHeader.tsx`, `ServiceGrid.tsx`, `CaseStudyGrid.tsx`, `IndustryList.tsx`, `AboutContent.tsx`, `ContactForm.tsx`, `app/*/page.tsx` as needed

- [ ] Grep for old tokens `teal|copper|copper-deep|sage|paper|font-display|font-hook|font-mono` across `components/` and `app/`; replace with new equivalents (teal→indigo, copper→indigo-deep for links / citron for CTA fills, sage→indigo, paper→ivory, serif/mono→sans weights per type scale). Remove dead GSAP scene imports (`ScrollSmoother` wrapper if in layout).
- [ ] Build; click through all six routes in headless chrome (200s, no unstyled text). Commit "feat: token sweep across subpages".

### Task 7: Verify + docs

- [ ] `npm run build` clean; `npm run dev` + headless-Chrome screenshots: full homepage (3 slices), plus /services and /case-studies; check: curtain animates, nav switches at scroll, one filled CTA per band, no leftover teal/copper hues, reduced-motion media query present in served CSS.
- [ ] Update `README.md` homepage-flow section and point `DESIGN.md` readers at the new spec (one-paragraph note atop DESIGN.md; keep old spec for history).
- [ ] Commit "docs: aurora curtain build notes".

## Self-review

Spec coverage: tokens→T1, type→T1, primitives→T2, nav/hero/curtain/report card→T3, sections 3–11→T4/T5, footer→T5, subpage sweep→T6, motion policy→T1/T3 (Reveal + curtain) with removals named per component, verification→T7. No TBDs. Interface names (`Reveal`, `Eyebrow`, `CtaButton`, `ArrowLink`) used consistently across tasks.
