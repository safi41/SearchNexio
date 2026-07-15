"use client";

import { useRef } from "react";
import { gsap, useGSAP, ScrollTrigger, SplitText, EASE, MOTION_OK } from "@/components/motion/gsap";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/primitives";
import { CtaLink } from "@/components/ui";
import { STATS } from "@/lib/content";

const PARAGRAPHS = [
  "Right now, someone is looking for exactly what you sell. They ask Google. They check the map. They read the AI summary at the top of the screen. Or they ask ChatGPT which vendor to trust.",
  "If you show up in those specific moments, you make the shortlist. If you do not, the choice gets made without you, and you never even know you lost the lead.",
  "This is the gap traditional SEO misses. Some companies are completely invisible on these new platforms. Others rank well for keywords but watch their leads stall out, because ranking on one platform no longer means you are being found on the rest. Both issues come from the same basic mistake: optimizing for a single channel, and focusing on traffic numbers instead of revenue.",
];

const OLD_JOURNEY = ["Google query", "10 blue links", "Click to your site"];
const NEW_JOURNEY = ["Google", "Maps", "AI Overviews", "ChatGPT", "Decision"];

/* Palette token as a literal: SVG strokes need a concrete value. sage #6e8b6a. */
const SAGE = "#6e8b6a";

export default function ProblemSection() {
  const ref = useRef<HTMLElement>(null);

  // eslint-disable-next-line prefer-const -- contextSafe is used only inside
  // deferred scroll callbacks, which run after this hook returns and assigns it.
  let contextSafe: <T extends (...a: never[]) => unknown>(fn: T) => T;

  ({ contextSafe } = useGSAP(
    () => {
      const mm = gsap.matchMedia();

      /* the journeys, pinned side by side as a route map. the old world is a
         single subway line: one stroke drawing down through three stations.
         the new world is a web: four surface branches drawing across to
         converge on one Decision node — the shape itself tells the story.
         old draws first, dims, then the web grows; the pin holds until the
         decision lands, then the section below scrolls in. */
      mm.add(`${MOTION_OK} and (min-width: 768px)`, () => {
        const wrap = ref.current!.querySelector<HTMLElement>("[data-journeys]");
        if (!wrap) return;

        gsap.from(wrap.querySelectorAll("[data-jlabel], [data-jnote]"), {
          autoAlpha: 0,
          y: 24,
          duration: 1,
          ease: EASE,
          stagger: 0.1,
          scrollTrigger: {
            trigger: wrap,
            start: "top 75%",
            toggleActions: "play none none reverse",
          },
        });

        const oldCol = wrap.querySelector<HTMLElement>("[data-old-col]");
        const oldFill = wrap.querySelector<HTMLElement>("[data-old-fill]");
        const oldNodes = gsap.utils.toArray<HTMLElement>("[data-old-node]", wrap);
        const oldLabels = gsap.utils.toArray<HTMLElement>("[data-old-node-label]", wrap);
        const webPaths = gsap.utils.toArray<SVGPathElement>("[data-web-path]", wrap);
        const webNodes = gsap.utils.toArray<HTMLElement>("[data-web-node]", wrap);
        const webLabels = gsap.utils.toArray<HTMLElement>("[data-web-node-label]", wrap);
        const webFinal = wrap.querySelector<HTMLElement>("[data-web-final]");
        const webFinalLabel = wrap.querySelector<HTMLElement>("[data-web-final-label]");

        /* everything ships visible (no-JS and reduced-motion see the finished
           map); only here, where the timeline will redraw it, do we reset */
        gsap.set(oldFill, { scaleY: 0 });
        gsap.set([...oldNodes, ...webNodes, webFinal], { scale: 0 });
        gsap.set([...oldLabels, ...webLabels, webFinalLabel], { autoAlpha: 0 });
        gsap.set(webPaths, { strokeDashoffset: 1 });

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: wrap,
            start: "top 12%",
            end: () => `+=${8 * window.innerHeight * 0.45}`,
            scrub: 0.8,
            pin: true,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
        });

        /* act one — the old line draws top to bottom, stations popping as the
           stroke passes them (3 timeline units) */
        tl.to(oldFill, { scaleY: 1, ease: "none", duration: 3 }, 0);
        oldNodes.forEach((node, i) => {
          const at = 0.15 + i * 1.25;
          tl.to(node, { scale: 1, ease: "back.out(2.5)", duration: 0.4 }, at);
          tl.to(oldLabels[i], { autoAlpha: 1, duration: 0.4 }, at + 0.1);
        });

        /* the old world completes and recedes */
        tl.to(oldCol, { opacity: 0.45, duration: 0.5 }, 3.1);

        /* act two — the web: surfaces pop in, their branches draw across and
           converge, and the decision node lands last (5 units) */
        webNodes.forEach((node, i) => {
          const at = 3.2 + i * 0.5;
          tl.to(node, { scale: 1, ease: "back.out(2.5)", duration: 0.4 }, at);
          tl.to(webLabels[i], { autoAlpha: 1, duration: 0.4 }, at + 0.1);
          tl.to(
            webPaths[i],
            { strokeDashoffset: 0, ease: "none", duration: 1.8 },
            at + 0.25
          );
        });
        tl.to(webFinal, { scale: 1, ease: "back.out(2)", duration: 0.5 }, 7.2);
        tl.to(webFinalLabel, { autoAlpha: 1, duration: 0.4 }, 7.4);

        /* a beat of hold on the finished map before the pin releases */
        tl.to({}, { duration: 0.8 });

        /* the center divider fills top->bottom across the whole sequence */
        const divider = wrap.querySelector<HTMLElement>("[data-jdivider]");
        if (divider) {
          tl.fromTo(
            divider,
            { scaleY: 0 },
            { scaleY: 1, ease: "none", duration: tl.duration() },
            0
          );
        }
      });

      mm.add(`${MOTION_OK} and (max-width: 767px)`, () => {
        /* no pin/scrub on mobile: the old line draws, stations pop, then the
           web branches draw — all on entering the panel, reversing on exit */
        const trigger = {
          trigger: "[data-journeys]",
          start: "top 75%",
          toggleActions: "play none none reverse" as const,
        };
        const tl = gsap.timeline({ scrollTrigger: trigger, defaults: { ease: EASE } });
        tl.from("[data-old-fill]", { scaleY: 0, duration: 0.9, ease: "power2.out" }, 0)
          .from(
            "[data-old-node]",
            { scale: 0, duration: 0.45, ease: "back.out(2.5)", stagger: 0.18 },
            0.1
          )
          .from("[data-old-node-label]", { autoAlpha: 0, duration: 0.4, stagger: 0.18 }, 0.2)
          .from(
            "[data-web-node]",
            { scale: 0, duration: 0.45, ease: "back.out(2.5)", stagger: 0.14 },
            0.7
          )
          .from("[data-web-node-label]", { autoAlpha: 0, duration: 0.4, stagger: 0.14 }, 0.8)
          .fromTo(
            "[data-web-path]",
            { strokeDashoffset: 1 },
            { strokeDashoffset: 0, duration: 1.1, ease: "power1.inOut", stagger: 0.14 },
            0.85
          )
          .from("[data-web-final]", { scale: 0, duration: 0.5, ease: "back.out(2)" }, 2.1)
          .from("[data-web-final-label]", { autoAlpha: 0, duration: 0.4 }, 2.25);
      });

      mm.add("(prefers-reduced-motion: reduce)", () => {
        /* no motion: the route map ships fully drawn in the markup; only the
           divider (CSS-collapsed) needs presenting */
        gsap.set("[data-jdivider]", { scaleY: 1 });
        /* no count-up: show each stat at its final value, no scatter */
        gsap.utils.toArray<HTMLElement>("[data-count]").forEach((el) => {
          el.textContent = el.dataset.count ?? el.textContent;
        });
      });

      mm.add(MOTION_OK, () => {
        /* scroll-masked reading: each word of the closing line resolves on scrub */
        const lead = new SplitText("[data-problem-lead]", { type: "words" });
        gsap.fromTo(
          lead.words,
          { opacity: 0.14 },
          {
            opacity: 1,
            stagger: 0.06,
            ease: "none",
            scrollTrigger: {
              trigger: "[data-problem-lead]",
              start: "top 85%",
              end: "top 45%",
              scrub: true,
            },
          }
        );

        /* stats count up from zero every time they enter view: re-entering
           the section from either direction restarts the count from 0 */
        gsap.utils.toArray<HTMLElement>("[data-count]").forEach((el) => {
          const value = Number(el.dataset.count);
          const proxy = { v: 0 };
          const write = () => {
            el.textContent = String(Math.round(proxy.v));
          };
          ScrollTrigger.create({
            trigger: el,
            start: "top 82%",
            /* count up from 0 on every entry (down or back up); reset to 0 on
               leaving upward so the next entry starts clean */
            onEnter: () => gsap.fromTo(proxy, { v: 0 }, { v: value, duration: 1.8, ease: "power2.out", snap: { v: 1 }, onUpdate: write }),
            onEnterBack: () => gsap.fromTo(proxy, { v: 0 }, { v: value, duration: 1.8, ease: "power2.out", snap: { v: 1 }, onUpdate: write }),
            onLeaveBack: () => {
              proxy.v = 0;
              write();
            },
          });
        });

        /* on exit, the percentage figures detonate into flying characters and
           reassemble on scroll back — the same shatter the hero hook uses.
           each number is split lazily on first entry into the scatter zone and
           reverted on the way back, so the count-up owns the [data-count] node
           whenever the number is being counted.

           the split + tween are created inside a scroll callback (onUpdate),
           i.e. after useGSAP's initial pass. building them through contextSafe
           (below) registers them in the useGSAP context; without it, when the
           context reverts on unmount it force-inits these still-lazy tweens
           against a now-detached ref scope, which logged "Invalid scope". */
        const statsEl = ref.current!.querySelector<HTMLElement>("[data-stats]");
        const nums = gsap.utils.toArray<HTMLElement>("[data-stat-num]", statsEl);
        if (statsEl && nums.length) {
          const splits: (InstanceType<typeof SplitText> | null)[] = nums.map(() => null);
          const scatters: (gsap.core.Tween | null)[] = nums.map(() => null);

          /* build split + scatter tween wrapped in contextSafe so the objects
             register in the useGSAP context even though they're created here,
             inside a scroll callback that runs after the hook's initial pass */
          const build = contextSafe((i: number) => {
            const num = nums[i];
            splits[i] = new SplitText(num, { type: "chars" });
            scatters[i] = gsap.to(splits[i]!.chars, {
              x: () => gsap.utils.random(-420, 420),
              y: () => gsap.utils.random(-220, 380),
              rotation: () => gsap.utils.random(-160, 160),
              autoAlpha: 0,
              ease: "power1.in",
              stagger: { each: 0.02, from: "random" },
              paused: true,
            });
          });

          ScrollTrigger.create({
            trigger: statsEl,
            /* scatter while the numbers are still on screen: begin once they've
               risen to mid-viewport (the count-up at top 82% has finished by
               then) and finish as they approach the top edge, so the whole
               disintegration is visible rather than happening off-screen */
            start: "top 55%",
            end: "top 8%",
            scrub: 1,
            invalidateOnRefresh: true,
            onUpdate: (self) => {
              nums.forEach((_, i) => {
                if (!splits[i]) build(i);
                scatters[i]!.progress(self.progress);
              });
            },
            /* back above the zone: reassemble and hand the DOM back to the
               count-up by reverting each split */
            onLeaveBack: () => {
              nums.forEach((_, i) => {
                scatters[i]?.progress(0);
                scatters[i]?.kill();
                scatters[i] = null;
                splits[i]?.revert();
                splits[i] = null;
              });
            },
          });
        }
      });
    },
    { scope: ref }
  ));

  return (
    <section ref={ref} className="relative overflow-hidden bg-paper text-ink">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(50rem 35rem at 15% 0%, rgba(14,90,90,0.08), transparent 65%)",
        }}
      />
      {/* ghost watermark: the word this section is about, barely there */}
      <span
        aria-hidden
        data-speed="0.9"
        className="pointer-events-none absolute -right-10 top-24 select-none font-display text-[16vw] italic leading-none text-transparent"
        style={{ WebkitTextStroke: "1px rgba(14,90,90,0.1)" }}
      >
        invisible
      </span>

      {/* the section's eyebrow and heading arrive on the horizontal handoff
          panel at the end of the dark act; the body continues here */}
      <div className="relative mx-auto max-w-6xl px-6 pb-28 pt-16 md:pb-40 md:pt-24">
        <Stagger className="grid max-w-3xl gap-6">
          {PARAGRAPHS.map((text, i) => (
            <StaggerItem key={i}>
              <p className="leading-relaxed text-ink/70">{text}</p>
            </StaggerItem>
          ))}
        </Stagger>

      </div>

      {/* Dark act: the two journeys as a route map, pinned. The old world's
          single line draws first and recedes; then the new world's web of
          branches draws across to the Decision node, then the pin releases. */}
      <div data-journeys-panel className="relative bg-ink text-paper">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(55rem 40rem at 85% 100%, rgba(110,139,106,0.1), transparent 60%)",
          }}
        />
        <div data-journeys className="relative mx-auto max-w-6xl px-6 py-24 md:py-32">
          <div className="grid gap-14 md:grid-cols-[1fr_auto_1fr] md:gap-10">
            <OldRoute />
            <span aria-hidden className="relative hidden w-px self-stretch bg-paper/15 md:block">
              {/* sage fill rides down the divider in sync with the scroll */}
              <span
                data-jdivider
                className="absolute inset-0 origin-top scale-y-0 bg-sage"
                style={{ boxShadow: "0 0 10px 1px rgba(110,139,106,0.5)" }}
              />
            </span>
            <NewWeb />
          </div>
        </div>
      </div>

      <div className="relative mx-auto max-w-6xl px-6 pb-28 pt-24 md:pb-40 md:pt-32">
        <div data-stats className="grid gap-10 md:grid-cols-3">
          {STATS.map((stat) => (
            <div key={stat.label}>
              <p
                data-stat-num
                className="font-mono text-6xl tracking-tight text-ink md:text-7xl"
              >
                {stat.prefix && (
                  <span className="font-display text-3xl italic text-ink/60 md:text-4xl">
                    {stat.prefix}
                  </span>
                )}
                <span data-count={stat.value}>0</span>
                <span className="text-copper">{stat.suffix}</span>
              </p>
              <p className="mt-4 max-w-xs text-sm leading-relaxed text-ink/60">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
        <p className="mt-6 font-mono text-[10px] uppercase tracking-[0.2em] text-ink/40">
          Sources verified and linked at launch
        </p>

        <div className="mt-20 max-w-2xl">
          <p
            data-problem-lead
            className="font-display text-3xl italic leading-snug text-ink md:text-4xl"
          >
            You cannot fix what you cannot see.
          </p>
          <Reveal delay={0.1}>
            <p className="mt-5 leading-relaxed text-ink/70">
              The visibility review maps all of it out for you, surface by
              surface, so you know exactly where buyers find your business
              and where they find your competitors instead.
            </p>
            <div className="mt-10">
              <CtaLink href="/#visibility-review">Request a Visibility Review</CtaLink>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* Station y-positions (percent of rail height) for the old line's 3 stops. */
const OLD_STOPS = [4, 50, 96];
/* Surface y-positions for the web's 4 branches; all converge on Decision. */
const WEB_STOPS = [8, 36, 64, 92];

/* The old world: one subway line. A single stroke draws down through three
   stations — one surface, one path. */
function OldRoute() {
  return (
    <div data-old-col>
      <p data-jlabel className="font-display text-lg italic text-paper/70">
        How search used to work
      </p>
      <div className="relative ml-1.5 mt-8 h-72" aria-label={OLD_JOURNEY.join(", ")}>
        {/* the line: faint base, drawn-over by the fill as the scroll passes */}
        <span aria-hidden className="absolute left-0 top-0 h-full w-px bg-paper/15" />
        <span
          data-old-fill
          aria-hidden
          className="absolute left-0 top-0 h-full w-px origin-top bg-paper/50"
        />
        {OLD_JOURNEY.map((stop, i) => (
          <span
            key={stop}
            className="absolute left-0"
            style={{ top: `${OLD_STOPS[i]}%` }}
          >
            <span
              data-old-node
              className="absolute -ml-1.5 -mt-1.5 block h-3 w-3 rounded-full border-2 border-paper/60 bg-ink"
            />
            <span
              data-old-node-label
              className="absolute left-5 -mt-2 whitespace-nowrap font-mono text-[11px] uppercase tracking-[0.15em] text-paper/70"
            >
              {stop}
            </span>
          </span>
        ))}
      </div>
      <p data-jnote className="mt-8 text-sm text-paper/40">
        One surface. One path. Rankings were the whole game.
      </p>
    </div>
  );
}

/* The new world: a web. Four surface branches draw across the panel and
   converge on a single solid-sage Decision node. */
function NewWeb() {
  const surfaces = NEW_JOURNEY.slice(0, 4);
  return (
    <div>
      <p data-jlabel className="font-display text-lg italic text-paper/70">
        How buyers search now
      </p>
      <div className="relative mt-8 h-72" aria-label={NEW_JOURNEY.join(", ")}>
        {/* the branches: faint base curves, drawn over in sage */}
        <svg
          aria-hidden
          className="pointer-events-none absolute inset-0 h-full w-full"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          {WEB_STOPS.map((y) => (
            <path
              key={`base-${y}`}
              d={`M 7 ${y} C 40 ${y}, 58 50, 91 50`}
              fill="none"
              stroke="rgba(250,247,242,0.12)"
              strokeWidth="1.5"
              vectorEffect="non-scaling-stroke"
            />
          ))}
          {WEB_STOPS.map((y) => (
            <path
              key={`draw-${y}`}
              data-web-path
              d={`M 7 ${y} C 40 ${y}, 58 50, 91 50`}
              fill="none"
              stroke={SAGE}
              strokeWidth="1.5"
              pathLength={1}
              strokeDasharray={1}
              vectorEffect="non-scaling-stroke"
              style={{ filter: "drop-shadow(0 0 4px rgba(110,139,106,0.5))" }}
            />
          ))}
        </svg>
        {surfaces.map((surface, i) => (
          <span
            key={surface}
            className="absolute"
            style={{ left: "7%", top: `${WEB_STOPS[i]}%` }}
          >
            <span
              data-web-node
              className="absolute -ml-1.5 -mt-1.5 block h-3 w-3 rounded-full border-2 border-sage bg-ink"
            />
            <span
              data-web-node-label
              className="absolute -left-1.5 -mt-7 whitespace-nowrap font-mono text-[11px] uppercase tracking-[0.15em] text-paper/70"
            >
              {surface}
            </span>
          </span>
        ))}
        {/* the convergence: where every branch lands */}
        <span className="absolute" style={{ left: "91%", top: "50%" }}>
          <span
            data-web-final
            className="absolute -ml-2 -mt-2 block h-4 w-4 rounded-full bg-sage"
            style={{ boxShadow: "0 0 14px 3px rgba(110,139,106,0.55)" }}
          />
          <span
            data-web-final-label
            className="absolute -ml-8 mt-4 whitespace-nowrap font-mono text-[11px] uppercase tracking-[0.15em] text-sage"
          >
            {NEW_JOURNEY[4]}
          </span>
        </span>
      </div>
      <p data-jnote className="mt-8 text-sm text-paper/65">
        Many surfaces. Answers before clicks. Visibility is the whole game.
      </p>
    </div>
  );
}
