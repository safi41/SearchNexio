"use client";

import { useRef } from "react";
import { gsap, useGSAP, EASE, MOTION_OK } from "@/components/motion/gsap";
import { MaskedHeading, Reveal } from "@/components/motion/primitives";
import { Eyebrow } from "@/components/ui";
import { WHY } from "@/lib/content";

/* Dark act: the four reasons sit in a 2x2 grid whose dividing cross draws
   itself in sage as the reader scrolls in — the same drawn-line signature as
   the journeys act — then each quadrant assembles in reading order: index,
   title rising out of its mask, body. No pinning; this section breathes
   between the deck above and the FAQ below. */
export default function WhySearchNexio() {
  const ref = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add(MOTION_OK, () => {
        /* the cross draws with the scroll: vertical stroke first rides in,
           horizontal follows, both scrubbed so the reader wipes them on */
        gsap.fromTo(
          "[data-why-vline]",
          { scaleY: 0 },
          {
            scaleY: 1,
            ease: "none",
            scrollTrigger: {
              trigger: "[data-why-grid]",
              start: "top 80%",
              end: "top 30%",
              scrub: 0.8,
            },
          }
        );
        gsap.fromTo(
          "[data-why-hline]",
          { scaleX: 0 },
          {
            scaleX: 1,
            ease: "none",
            scrollTrigger: {
              trigger: "[data-why-grid]",
              start: "top 70%",
              end: "top 25%",
              scrub: 0.8,
            },
          }
        );

        /* quadrants assemble in reading order once the grid arrives */
        gsap.utils.toArray<HTMLElement>("[data-why-item]").forEach((item, i) => {
          const tl = gsap.timeline({
            scrollTrigger: { trigger: "[data-why-grid]", start: "top 70%", once: true },
            defaults: { ease: EASE },
            delay: i * 0.16,
          });
          tl.from(item.querySelector("[data-why-idx]"), { autoAlpha: 0, duration: 0.5 })
            .from(
              item.querySelector("[data-why-title]"),
              { yPercent: 112, duration: 0.8 },
              0.08
            )
            .from(
              item.querySelector("[data-why-body]"),
              { autoAlpha: 0, y: 14, duration: 0.7 },
              0.22
            );
        });

        /* the testimonial frame arrives last; the quote mark pops like the
           hero's scan dots */
        const qtl = gsap.timeline({
          scrollTrigger: { trigger: "[data-why-quote]", start: "top 85%", once: true },
        });
        qtl
          .from("[data-why-quote]", { autoAlpha: 0, y: 24, duration: 0.9, ease: EASE })
          .from(
            "[data-why-mark]",
            { scale: 0, duration: 0.5, ease: "back.out(2.5)" },
            0.35
          );
      });

      mm.add("(prefers-reduced-motion: reduce)", () => {
        /* no motion: present the cross fully drawn */
        gsap.set("[data-why-vline]", { scaleY: 1 });
        gsap.set("[data-why-hline]", { scaleX: 1 });
      });
    },
    { scope: ref }
  );

  return (
    <section ref={ref} className="relative overflow-hidden bg-ink text-paper">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(55rem 40rem at 10% 100%, rgba(110,139,106,0.09), transparent 60%)",
        }}
      />

      <div className="relative mx-auto max-w-6xl px-6 py-28 md:py-36">
        <Reveal>
          <Eyebrow tone="dark">Why Us</Eyebrow>
        </Reveal>
        <MaskedHeading
          className="mt-8 font-display text-4xl font-medium leading-[1.05] tracking-[-0.01em] md:text-6xl"
          lines={["Why SearchNexio"]}
        />
        <Reveal delay={0.15}>
          <p className="mt-6 max-w-2xl leading-relaxed text-paper/65">
            The short version: we are a search visibility agency that works the
            way high-trust businesses need their partners to work.
          </p>
        </Reveal>

        {/* the 2x2 grid with its drawn dividing cross */}
        <div data-why-grid className="relative mt-16 grid md:grid-cols-2">
          {/* vertical stroke of the cross */}
          <span
            aria-hidden
            className="absolute left-1/2 top-0 hidden h-full w-px bg-paper/10 md:block"
          >
            <span
              data-why-vline
              className="block h-full w-full origin-top scale-y-0 bg-sage"
              style={{ boxShadow: "0 0 10px 1px rgba(110,139,106,0.45)" }}
            />
          </span>
          {/* horizontal stroke of the cross */}
          <span
            aria-hidden
            className="absolute left-0 top-1/2 hidden h-px w-full bg-paper/10 md:block"
          >
            <span
              data-why-hline
              className="block h-full w-full origin-left scale-x-0 bg-sage"
              style={{ boxShadow: "0 0 10px 1px rgba(110,139,106,0.45)" }}
            />
          </span>

          {WHY.map((item, i) => (
            <div
              key={item.title}
              data-why-item
              className={`border-t border-paper/10 py-8 first:border-t-0 md:border-t-0 md:p-10 ${
                i % 2 === 0 ? "md:pl-0" : "md:pr-0"
              } ${i < 2 ? "" : "md:pt-10"}`}
            >
              <p data-why-idx className="font-mono text-xs tracking-[0.25em] text-copper">
                0{i + 1}
              </p>
              <span className="mt-4 block overflow-hidden">
                <span data-why-title className="block text-base font-semibold text-paper">
                  {item.title}
                </span>
              </span>
              <p
                data-why-body
                className="mt-3 max-w-md text-sm leading-relaxed text-paper/60"
              >
                {item.body}
              </p>
            </div>
          ))}
        </div>

        {/* Testimonial slot: single quote, no carousel; pending permission outreach. */}
        <figure
          data-why-quote
          className="mt-16 border border-dashed border-copper/50 p-10 text-center"
        >
          <span
            data-why-mark
            aria-hidden
            className="inline-block font-display text-5xl leading-none text-copper"
          >
            &ldquo;
          </span>
          <figcaption className="mt-3 font-mono text-[10px] uppercase tracking-[0.2em] text-paper/45">
            One client quote, one sentence, name, company. Pending permission outreach.
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
