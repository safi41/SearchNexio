"use client";

import { useRef } from "react";
import { gsap, useGSAP, SplitText, EASE, MOTION_OK } from "@/components/motion/gsap";
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
   teal #0e5a5a, ink #12262b, sage #6e8b6a. */
const TEAL = "#0e5a5a";
const INK = "#12262b";
const SAGE = "#6e8b6a";

export default function ProblemSection() {
  const ref = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      /* the journeys, pinned side by side: a dot rides down each column at
         the same speed, so the short old route finishes early while the new
         route keeps traveling; the pin holds until both dots arrive, then
         the rest of the section scrolls in below */
      mm.add(`${MOTION_OK} and (min-width: 768px)`, () => {
        const wrap = ref.current!.querySelector<HTMLElement>("[data-journeys]");
        if (!wrap) return;
        const cols = gsap.utils.toArray<HTMLElement>("[data-jcol]", wrap);
        const areas = cols.map(
          (col) => col.querySelector<HTMLElement>("[data-jrail-area]")!
        );
        const heights = areas.map((area) => area.offsetHeight);
        const maxH = Math.max(...heights);

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

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: wrap,
            start: "top 15%",
            end: () => `+=${maxH + window.innerHeight * 0.35}`,
            scrub: 0.8,
            pin: true,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
        });

        cols.forEach((col, i) => {
          const h = heights[i];
          /* same px-per-scroll speed for both dots: the shorter rail's
             timeline slice simply ends earlier */
          const dur = h / maxH;
          const live = col.dataset.jcol === "live";
          const dot = col.querySelector<HTMLElement>("[data-jdot]");
          const trail = col.querySelector<HTMLElement>("[data-jtrail]");
          const blocks = col.querySelectorAll<HTMLElement>("[data-jblock]");

          gsap.set(blocks, { opacity: 0.4 });
          tl.to(dot, { y: h - 12, ease: "none", duration: dur }, 0);
          tl.fromTo(trail, { scaleY: 0 }, { scaleY: 1, ease: "none", duration: dur }, 0);

          blocks.forEach((block) => {
            const t = Math.min(
              ((block.offsetTop + block.offsetHeight / 2) / h) * dur,
              dur - 0.02
            );
            tl.to(
              block,
              {
                opacity: 1,
                borderColor: live ? TEAL : "rgba(18,38,43,0.45)",
                duration: 0.05,
              },
              Math.max(0, t - 0.025)
            );
            if (block.dataset.jfinal) {
              tl.to(
                block,
                { backgroundColor: SAGE, color: INK, borderColor: SAGE, duration: 0.05 },
                Math.max(0, t - 0.025)
              );
            }
          });
        });
      });

      mm.add(`${MOTION_OK} and (max-width: 767px)`, () => {
        gsap.from("[data-jblock]", {
          autoAlpha: 0,
          y: 20,
          duration: 0.8,
          ease: EASE,
          stagger: 0.08,
          scrollTrigger: {
            trigger: "[data-journeys]",
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
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

        /* stats count up from zero on first view */
        gsap.utils.toArray<HTMLElement>("[data-count]").forEach((el) => {
          const value = Number(el.dataset.count);
          const proxy = { v: 0 };
          gsap.to(proxy, {
            v: value,
            duration: 1.8,
            ease: "power2.out",
            snap: { v: 1 },
            onUpdate: () => {
              el.textContent = String(Math.round(proxy.v));
            },
            scrollTrigger: { trigger: el, start: "top 82%", once: true },
          });
        });
      });
    },
    { scope: ref }
  );

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

        <div data-journeys className="mt-20 border-t border-line pt-16">
          <div className="grid gap-12 md:grid-cols-[1fr_auto_1fr] md:gap-10">
            <JourneyColumn
              label="How search used to work"
              nodes={OLD_JOURNEY}
              note="One surface. One path. Rankings were the whole game."
              muted
            />
            <span aria-hidden className="hidden w-px self-stretch bg-line md:block" />
            <JourneyColumn
              label="How buyers search now"
              nodes={NEW_JOURNEY}
              note="Many surfaces. Answers before clicks. Visibility is the whole game."
            />
          </div>
        </div>

        <div className="mt-20 grid gap-10 border-t border-line pt-16 md:grid-cols-3">
          {STATS.map((stat) => (
            <div key={stat.label}>
              <p className="font-mono text-6xl tracking-tight text-ink md:text-7xl">
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
      <p data-jlabel className="font-display text-lg italic text-ink/60">
        {label}
      </p>
      <div data-jrail-area className="relative ml-1 mt-6 pl-8">
        <span aria-hidden className="absolute left-0 top-0 h-full w-px bg-ink/15" />
        <span
          data-jtrail
          aria-hidden
          className={`absolute left-0 top-0 h-full w-px origin-top scale-y-0 ${
            muted ? "bg-ink/40" : "bg-sage"
          }`}
        />
        <span
          data-jdot
          aria-hidden
          className={`absolute -left-[5px] top-0 hidden h-3 w-3 rounded-full md:block ${
            muted ? "bg-ink/60" : "bg-sage"
          }`}
          style={muted ? undefined : { boxShadow: "0 0 12px 2px rgba(110,139,106,0.55)" }}
        />
        <div className="grid gap-5">
          {nodes.map((node, i) => (
            <div
              key={node}
              data-jblock
              data-jfinal={!muted && i === nodes.length - 1 ? "true" : undefined}
              className={`border px-5 py-5 font-mono text-[11px] uppercase tracking-[0.15em] ${
                muted
                  ? "border-ink/20 text-ink/60"
                  : i === nodes.length - 1
                    ? "border-sage/60 text-ink/80"
                    : "border-ink/20 text-ink/80"
              }`}
            >
              {node}
            </div>
          ))}
        </div>
      </div>
      <p
        data-jnote
        className={`mt-5 text-sm ${muted ? "text-ink/45" : "text-ink/65"}`}
      >
        {note}
      </p>
    </div>
  );
}
