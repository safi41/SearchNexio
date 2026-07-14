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

/* Palette tokens as literals: GSAP color tweens need concrete values.
   ink #12262b, sage #6e8b6a. */
const INK = "#12262b";
const SAGE = "#6e8b6a";

export default function ProblemSection() {
  const ref = useRef<HTMLElement>(null);

  // eslint-disable-next-line prefer-const -- contextSafe is used only inside
  // deferred scroll callbacks, which run after this hook returns and assigns it.
  let contextSafe: <T extends (...a: never[]) => unknown>(fn: T) => T;

  ({ contextSafe } = useGSAP(
    () => {
      const mm = gsap.matchMedia();

      /* the journeys, pinned side by side. a left accent bar glides down each
         column, lighting one block at a time. the old column (3 blocks) steps
         first and its shorter slice finishes early; then it dims to a done
         state and the new column (5 blocks) takes over. the pin holds until
         both have arrived, then the section below scrolls in. */
      mm.add(`${MOTION_OK} and (min-width: 768px)`, () => {
        const wrap = ref.current!.querySelector<HTMLElement>("[data-journeys]");
        if (!wrap) return;
        const cols = gsap.utils.toArray<HTMLElement>("[data-jcol]", wrap);
        /* order the sequence old-then-live regardless of DOM order */
        cols.sort((a) => (a.dataset.jcol === "muted" ? -1 : 1));

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

        /* one scroll-step per block across both columns, plus a hold at the
           end so the finished state is readable before the pin releases */
        const totalBlocks = cols.reduce(
          (n, col) => n + col.querySelectorAll("[data-jblock]").length,
          0
        );

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: wrap,
            start: "top 12%",
            end: () => `+=${totalBlocks * window.innerHeight * 0.5}`,
            scrub: 0.8,
            pin: true,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
        });

        cols.forEach((col) => {
          const live = col.dataset.jcol === "live";
          const blocks = gsap.utils.toArray<HTMLElement>("[data-jblock]", col);

          blocks.forEach((block, i) => {
            const border = block.querySelector<SVGRectElement>("[data-jborder]");
            const fill = block.querySelector<HTMLElement>("[data-jfill]");

            /* the border draws around all four sides as this block's step
               arrives (stroke offset 1 -> 0), and the fill floods the whole
               rectangle in sync */
            tl.fromTo(
              border,
              { strokeDashoffset: 1 },
              { strokeDashoffset: 0, ease: "none", duration: 0.6 }
            );
            tl.to(block, { color: "#faf7f2", duration: 0.6 }, "<");
            tl.to(fill, { opacity: 1, duration: 0.6 }, "<");

            /* the last live block lands solid sage as the arrival state */
            if (block.dataset.jfinal) {
              tl.to(
                block,
                { backgroundColor: SAGE, color: INK, borderColor: SAGE, duration: 0.4 },
                "<0.2"
              );
            }

            /* as focus moves to the next block, drop this one's fill back so
               only the active block reads as fully lit (drawn border stays) */
            if (i < blocks.length - 1) {
              tl.to(fill, { opacity: 0.35, duration: 0.4 }, ">");
            }
          });

          /* once the old column finishes, dim it whole so attention moves to
             the new column's sequence */
          if (!live) {
            tl.to(col, { opacity: 0.4, duration: 0.5 }, ">0.1");
          }
        });

        /* a beat of hold on the finished layout before the pin releases */
        tl.to({}, { duration: 0.8 });

        /* the center divider fills top->bottom across the whole sequence, so
           it tracks the scroll from the first block to the last */
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
        /* no pin/scrub on mobile: blocks step in on scroll, their borders draw
           and fills flood in sequence, old column first then the new one */
        const trigger = {
          trigger: "[data-journeys]",
          start: "top 80%",
          toggleActions: "play none none reverse" as const,
        };
        const blocks = gsap.utils.toArray<HTMLElement>("[data-jblock]");
        gsap.from(blocks, {
          autoAlpha: 0,
          y: 20,
          duration: 0.8,
          ease: EASE,
          stagger: 0.08,
          scrollTrigger: trigger,
        });
        gsap.fromTo(
          "[data-jborder]",
          { strokeDashoffset: 1 },
          {
            strokeDashoffset: 0,
            duration: 0.6,
            ease: EASE,
            stagger: 0.08,
            scrollTrigger: trigger,
          }
        );
        gsap.to("[data-jfill]", {
          opacity: 1,
          duration: 0.5,
          stagger: 0.08,
          scrollTrigger: trigger,
        });
      });

      mm.add("(prefers-reduced-motion: reduce)", () => {
        /* no motion: present the journeys already resolved to their lit state
           so reduced-motion users don't see blank, unlit blocks */
        gsap.set("[data-jborder]", { strokeDashoffset: 0 });
        gsap.set("[data-jfill]", { opacity: 1 });
        gsap.set("[data-jdivider]", { scaleY: 1 });
        gsap.set("[data-jblock] > span:last-child", { color: "#faf7f2" });
        gsap.set("[data-jblock][data-jfinal]", {
          backgroundColor: SAGE,
          color: INK,
          borderColor: SAGE,
        });
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

      {/* Dark act: the two journeys, pinned. A left accent bar glides down
          each column's blocks; the short old route resolves first, then the
          new route takes over, then the pin releases. */}
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
          <div className="grid gap-12 md:grid-cols-[1fr_auto_1fr] md:gap-10">
            <JourneyColumn
              label="How search used to work"
              nodes={OLD_JOURNEY}
              note="One surface. One path. Rankings were the whole game."
              muted
            />
            <span aria-hidden className="relative hidden w-px self-stretch bg-paper/15 md:block">
              {/* sage fill rides down the divider in sync with the scroll */}
              <span
                data-jdivider
                className="absolute inset-0 origin-top scale-y-0 bg-sage"
                style={{ boxShadow: "0 0 10px 1px rgba(110,139,106,0.5)" }}
              />
            </span>
            <JourneyColumn
              label="How buyers search now"
              nodes={NEW_JOURNEY}
              note="Many surfaces. Answers before clicks. Visibility is the whole game."
            />
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

/* One journey as a vertical column: label, then a rail carrying the
   traveling dot and its trail, with the route's stops as stacked blocks. */
function JourneyColumn({
  label,
  nodes,
  note,
  muted = false,
}: {
  label: string;
  nodes: string[];
  note: string;
  muted?: boolean;
}) {
  return (
    <div data-jcol={muted ? "muted" : "live"}>
      <p data-jlabel className="font-display text-lg italic text-paper/70">
        {label}
      </p>
      <div data-jrail-area className="relative mt-6 grid gap-5">
        {nodes.map((node, i) => (
          <div
            key={node}
            data-jblock
            data-jfinal={!muted && i === nodes.length - 1 ? "true" : undefined}
            className="relative border border-paper/15 px-6 py-5 font-mono text-[11px] uppercase tracking-[0.15em] text-paper/70"
          >
            {/* the border draws around all four sides as the timeline reaches
                this block: an SVG rect stroke drawn from a full dash offset */}
            <svg
              data-jborder-svg
              aria-hidden
              className="pointer-events-none absolute inset-0 h-full w-full"
              preserveAspectRatio="none"
            >
              <rect
                data-jborder
                x="1"
                y="1"
                width="98%"
                height="98%"
                fill="none"
                stroke={muted ? "rgba(250,247,242,0.55)" : SAGE}
                strokeWidth="2"
                pathLength={1}
                strokeDasharray={1}
                strokeDashoffset={1}
                style={muted ? undefined : { filter: "drop-shadow(0 0 4px rgba(110,139,106,0.5))" }}
              />
            </svg>
            {/* whole-block fill that floods in as the border completes */}
            <span
              data-jfill
              aria-hidden
              className={`absolute inset-0 opacity-0 ${
                muted ? "bg-paper/5" : "bg-sage/10"
              }`}
            />
            <span className="relative">{node}</span>
          </div>
        ))}
      </div>
      <p
        data-jnote
        className={`mt-5 text-sm ${muted ? "text-paper/40" : "text-paper/65"}`}
      >
        {note}
      </p>
    </div>
  );
}
