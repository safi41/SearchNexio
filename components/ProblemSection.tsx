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

/* Back into the light after the dark trust act: ink curtain bars retract
   alternately left and right, revealing this section on the hero's paper.
   The journeys draw themselves, stats count up, and the closing line fills
   in word by word as a scroll mask. */
export default function ProblemSection() {
  const ref = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
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

        /* journeys, told slowly: each path draws stop by stop, every chip
           ignites as it appears, then a pulse (a buyer) travels the route.
           The old route gets one pass and goes quiet; the new route stays
           alive, looping, with the Decision chip breathing at the end. */
        gsap.utils.toArray<HTMLElement>("[data-journey]").forEach((row) => {
          const muted = row.dataset.journey === "muted";
          const tl = gsap.timeline({
            scrollTrigger: { trigger: row, start: "top 78%", once: true },
          });

          tl.from(row.querySelector("[data-journey-label]"), {
            autoAlpha: 0,
            x: -24,
            duration: 1,
            ease: EASE,
          });

          row
            .querySelectorAll<HTMLElement>("[data-journey-chip], [data-journey-line]")
            .forEach((el) => {
              if (el.hasAttribute("data-journey-line")) {
                tl.fromTo(
                  el,
                  { scaleX: 0 },
                  { scaleX: 1, transformOrigin: "left center", duration: 1, ease: "power1.inOut" },
                  "-=0.15"
                );
                return;
              }
              tl.fromTo(
                el,
                { autoAlpha: 0, y: 16, scale: 0.95 },
                { autoAlpha: 1, y: 0, scale: 1, duration: 0.9, ease: "power2.out" },
                "-=0.25"
              );
              if (el.classList.contains("bg-sage")) {
                /* the endpoint lands with a heartbeat pop instead of a glow */
                tl.to(el, { scale: 1.08, duration: 0.45, yoyo: true, repeat: 1, ease: "sine.inOut" }, "-=0.2");
              } else {
                tl.fromTo(
                  el,
                  { backgroundColor: muted ? "rgba(18,38,43,0.08)" : "rgba(110,139,106,0.22)" },
                  { backgroundColor: "rgba(0,0,0,0)", duration: 1.4, ease: "power2.out" },
                  "-=0.6"
                );
              }
            });

          tl.from(
            row.querySelector("[data-journey-note]"),
            { autoAlpha: 0, y: 12, duration: 1.1, ease: EASE },
            "-=0.3"
          );

          /* the traveling buyer: single-line chains only (they wrap on mobile) */
          const chain = row.querySelector<HTMLElement>("[data-journey-chain]");
          const pulse = row.querySelector<HTMLElement>("[data-journey-pulse]");
          if (chain && pulse && window.matchMedia("(min-width: 768px)").matches) {
            const chips = chain.querySelectorAll<HTMLElement>("[data-journey-chip]");
            const last = chips[chips.length - 1];
            const loop = gsap.timeline({ paused: true, repeat: muted ? 0 : -1, repeatDelay: 2.6 });
            loop
              .set(pulse, { x: 0, autoAlpha: 0 })
              .to(pulse, { autoAlpha: 1, duration: 0.5 })
              .to(pulse, {
                x: () => last.offsetLeft + last.offsetWidth - 10,
                duration: 5.5,
                ease: "power1.inOut",
              }, 0)
              .to(pulse, { autoAlpha: 0, duration: 0.6 }, "-=0.6");
            const solid = chain.querySelector<HTMLElement>(".bg-sage");
            tl.add(() => {
              loop.play();
              if (!muted && solid) {
                gsap.to(solid, { scale: 1.04, duration: 2.4, yoyo: true, repeat: -1, ease: "sine.inOut" });
              }
            }, "-=0.5");
          }
        });

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

          <div className="mt-20 grid gap-12 border-t border-line pt-16">
            <JourneyRow
              label="How search used to work"
              nodes={["Google query", "10 blue links", "Click to your site"]}
              note="One surface. One path. Rankings were the whole game."
              muted
            />
            <JourneyRow
              label="How buyers search now"
              nodes={["Google", "Maps", "AI Overviews", "ChatGPT", "Decision"]}
              note="Many surfaces. Answers before clicks. Visibility is the whole game."
            />
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

function JourneyRow({
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
    <div data-journey={muted ? "muted" : "live"}>
      <p data-journey-label className="font-display text-lg italic text-ink/60">
        {label}
      </p>
      <div data-journey-chain className="relative mt-5 flex flex-wrap items-center gap-y-4">
        <span
          data-journey-pulse
          aria-hidden
          className={`pointer-events-none absolute left-0 top-1/2 h-2 w-2 -mt-1 rounded-full opacity-0 ${
            muted ? "bg-ink/40" : "bg-sage"
          }`}
          style={{ boxShadow: muted ? "none" : "0 0 12px 2px rgba(110,139,106,0.55)" }}
        />
        {nodes.map((node, i) => (
          <div key={node} className="flex items-center">
            {i > 0 && (
              <span
                data-journey-line
                aria-hidden
                className={`mx-2 h-px w-6 md:w-12 ${muted ? "bg-ink/25" : "bg-sage/70"}`}
              />
            )}
            <span
              data-journey-chip
              className={`border px-3 py-2 font-mono text-[11px] uppercase tracking-[0.15em] ${
                muted
                  ? "border-ink/20 text-ink/45"
                  : i === nodes.length - 1
                    ? "border-sage bg-sage text-ink"
                    : "border-ink/35 text-ink/80"
              }`}
            >
              {node}
            </span>
          </div>
        ))}
      </div>
      <p
        data-journey-note
        className={`mt-4 text-sm ${muted ? "text-ink/45" : "text-ink/65"}`}
      >
        {note}
      </p>
    </div>
  );
}
