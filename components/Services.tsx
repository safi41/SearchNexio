"use client";

import { useRef } from "react";
import { gsap, useGSAP, ScrollTrigger, MOTION_OK } from "@/components/motion/gsap";
import { MaskedHeading, Reveal, Stagger, StaggerItem } from "@/components/motion/primitives";
import { CtaLink, Eyebrow } from "@/components/ui";
import { SERVICES, type Service } from "@/lib/content";

/* Deck geometry: each sticky card rests a little lower than the one before,
   so covered cards peek out above the stack like layered sheets. */
const STACK_TOP_VH = 0.1;
const STACK_STEP_REM = 2.75;

/* Dark act: the services stack as a deck. Each card pins near the top of
   the viewport (ScrollTrigger pin — CSS sticky does not work inside
   ScrollSmoother's transformed content); scrolling slides the next card up
   over it while the covered card recedes — scaling down and dimming — so the
   four services read as one pile the reader leafs through. */
export default function Services() {
  const ref = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add(`${MOTION_OK} and (min-width: 768px)`, () => {
        const deck = ref.current!.querySelector<HTMLElement>("[data-services-deck]");
        const slots = gsap.utils.toArray<HTMLElement>("[data-service-slot]", ref.current!);
        if (!deck || !slots.length) return;

        /* resting offset of card i: a touch below the one before, so covered
           cards peek out above the stack like layered sheets */
        const restTop = (i: number) =>
          window.innerHeight * STACK_TOP_VH + i * STACK_STEP_REM * 16;

        slots.forEach((slot, i) => {
          /* pin each card at its resting offset; pinSpacing off lets the
             following cards ride up and cover it. every pin releases when the
             deck's bottom clears its card, so the stack exits as one. */
          ScrollTrigger.create({
            trigger: slot,
            start: () => `top ${restTop(i)}`,
            endTrigger: deck,
            end: () => `bottom ${restTop(i) + slot.offsetHeight}`,
            pin: true,
            pinSpacing: false,
            invalidateOnRefresh: true,
          });

          /* the recede: as card i+1 travels up to its resting offset, card i
             scales down and dims behind it, scrubbed to the approach */
          if (i < slots.length - 1) {
            const tile = slot.querySelector<HTMLElement>("[data-service-tile]");
            gsap.to(tile, {
              scale: 0.94,
              autoAlpha: 0.45,
              transformOrigin: "center top",
              ease: "none",
              scrollTrigger: {
                trigger: slots[i + 1],
                start: "top bottom",
                end: () => `top ${restTop(i + 1)}`,
                scrub: true,
                invalidateOnRefresh: true,
              },
            });
          }
        });
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
            "radial-gradient(55rem 40rem at 88% 0%, rgba(110,139,106,0.09), transparent 60%)",
        }}
      />

      <div className="relative mx-auto max-w-6xl px-6 pt-28 md:pt-36">
        <Reveal>
          <Eyebrow tone="dark">What We Do</Eyebrow>
        </Reveal>
        <MaskedHeading
          className="mt-8 font-display text-4xl font-medium leading-[1.05] tracking-[-0.01em] md:text-6xl"
          lines={["What We Do"]}
        />
        <Reveal delay={0.15}>
          <p className="mt-6 max-w-3xl leading-relaxed text-paper/65">
            Everything the Full-Surface Method covers. Visibility problems are
            rarely isolated to one channel. A broken technical foundation ruins
            your AI citations. A messy site migration erases your keyword
            rankings. Poor local listings knock you out of the map pack. We fix
            all of it together because that is how your buyers experience it.
          </p>
        </Reveal>
      </div>

      {/* the deck: pinned slots stack the cards as the reader scrolls */}
      <div data-services-deck className="relative mx-auto mt-16 max-w-6xl px-6">
        {SERVICES.map((service, i) => (
          <div
            key={service.slug}
            data-service-slot
            className={i > 0 ? "mt-8 md:mt-[14vh]" : ""}
          >
            <DarkServiceCard service={service} index={i} />
          </div>
        ))}
      </div>

      <div className="relative mx-auto max-w-6xl px-6 pb-28 pt-16 md:pb-36">
        <Reveal>
          <p className="text-paper/65">
            Not sure which piece you need? That is what the visibility review is
            for.
          </p>
          <div className="mt-2">
            <CtaLink href="/#visibility-review" variant="ghost" tone="dark">
              Request a Visibility Review
            </CtaLink>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* One sheet of the deck. Solid ink face (it must fully cover the card
   beneath), drawn border, and a deep up-shadow that sells the layering. */
function DarkServiceCard({ service, index }: { service: Service; index: number }) {
  return (
    <article
      data-service-tile
      className="group relative min-h-[52vh] border border-paper/15 bg-ink p-8 transition-colors duration-500 hover:border-sage/50 md:p-12"
      style={{ boxShadow: "0 -18px 50px rgba(4, 12, 14, 0.55)" }}
    >
      <div className="flex items-start justify-between gap-6">
        <p className="font-mono text-xs tracking-[0.25em] text-copper">
          0{index + 1}
        </p>
        <span
          aria-hidden
          className="font-mono text-lg text-copper/50 transition-transform duration-500 ease-soft group-hover:rotate-90 group-hover:text-copper"
        >
          +
        </span>
      </div>
      <h3 className="mt-6 max-w-xl font-display text-2xl font-medium tracking-tight md:text-4xl">
        {service.title}
      </h3>
      <p className="mt-4 max-w-xl font-display italic text-paper/55 transition-colors duration-500 group-hover:text-copper">
        The pain point it solves: {service.pain}
      </p>
      <Stagger className="mt-8 grid gap-4 md:max-w-2xl">
        {service.items.map((item) => (
          <StaggerItem key={item.lead}>
            <p className="relative pl-5 text-sm leading-relaxed text-paper/70 transition-transform duration-500 ease-soft group-hover:translate-x-1">
              <span
                aria-hidden
                className="absolute left-0 top-[0.5em] h-1.25 w-1.25 bg-sage"
              />
              <b className="font-semibold text-paper">{item.lead}</b> {item.text}
            </p>
          </StaggerItem>
        ))}
      </Stagger>
    </article>
  );
}

/* Light tile used by the /services page grid (a paper page). Kept as the
   named export ServiceGrid depends on; the homepage uses the dark deck above. */
export function ServiceTile({ service }: { service: Service }) {
  return (
    <article className="group relative h-full border border-line bg-surface p-8 transition-colors duration-500 hover:border-teal/40 md:p-10">
      <span
        aria-hidden
        className="absolute right-6 top-6 font-mono text-lg text-copper/50 transition-transform duration-500 ease-soft group-hover:rotate-90 group-hover:text-copper"
      >
        +
      </span>
      <h3 className="max-w-md font-display text-2xl font-medium tracking-tight md:text-3xl">
        {service.title}
      </h3>
      <p className="mt-4 max-w-xl font-display italic text-ink/55 transition-colors duration-500 group-hover:text-copper">
        The pain point it solves: {service.pain}
      </p>
      <Stagger className="mt-6 grid gap-3">
        {service.items.map((item) => (
          <StaggerItem key={item.lead}>
            <p className="relative pl-5 text-sm leading-relaxed text-ink/70 transition-transform duration-500 ease-soft group-hover:translate-x-1">
              <span
                aria-hidden
                className="absolute left-0 top-[0.5em] h-1.25 w-1.25 bg-sage"
              />
              <b className="font-semibold text-ink">{item.lead}</b> {item.text}
            </p>
          </StaggerItem>
        ))}
      </Stagger>
    </article>
  );
}
