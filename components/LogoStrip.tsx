import Reveal from "@/components/motion/Reveal";
import { CLIENTS } from "@/lib/content";

/* Per the copy doc: text wordmarks are the approved fallback, so the strip
   is typographic by design. Static row, no marquee.
   TODO before launch: written permission from each client. */
export default function LogoStrip() {
  return (
    <section className="border-y border-line bg-surface py-12 md:py-14">
      <Reveal className="mx-auto max-w-6xl px-6">
        <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-graphite/80">
          Trusted by businesses in healthcare, SaaS, ecommerce, and finance
        </p>
        <div className="mt-7 flex flex-wrap items-baseline justify-between gap-x-10 gap-y-4">
          {CLIENTS.map((name) => (
            <span
              key={name}
              className="text-[15px] font-medium tracking-[0.01em] text-graphite/70"
            >
              {name}
            </span>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
