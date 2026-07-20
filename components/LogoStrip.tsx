import Reveal from "@/components/motion/Reveal";
import { CLIENTS } from "@/lib/content";

/* Per the copy doc: text wordmarks are the approved fallback, so the strip
   is typographic by design. Gentle marquee, paused on hover; reduced-motion
   users get a static centered row. TODO before launch: written permission
   from each client. */

/* Repeat the client list enough times that a single group is wider than any
   viewport, then render the group twice so the -50% loop is seamless with no
   empty gap on ultra-wide screens. */
const GROUP = Array.from({ length: 4 }, () => CLIENTS).flat();

function Group({ hidden = false }: { hidden?: boolean }) {
  return (
    <ul aria-hidden={hidden} className="flex shrink-0 items-baseline">
      {GROUP.map((name, i) => (
        <li
          key={`${name}-${i}`}
          className="shrink-0 pr-16 font-heading text-[17px] font-bold tracking-[-0.01em] text-ink/40"
        >
          {name}
        </li>
      ))}
    </ul>
  );
}

export default function LogoStrip() {
  return (
    <section className="py-14">
      <Reveal className="mx-auto max-w-6xl px-6 text-center">
        <p className="text-[14px] text-graphite">
          Trusted by businesses in healthcare, SaaS, ecommerce, and finance
        </p>
      </Reveal>
      <Reveal delay={80}>
        <div className="marquee relative mt-8 overflow-hidden">
          <div className="animate-marquee flex w-max">
            <Group />
            <Group hidden />
          </div>
          <span
            aria-hidden
            className="pointer-events-none absolute inset-y-0 left-0 w-28 bg-gradient-to-r from-ivory to-transparent"
          />
          <span
            aria-hidden
            className="pointer-events-none absolute inset-y-0 right-0 w-28 bg-gradient-to-l from-ivory to-transparent"
          />
        </div>
      </Reveal>
    </section>
  );
}
