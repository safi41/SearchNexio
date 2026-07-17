import Reveal from "@/components/motion/Reveal";
import { CLIENTS } from "@/lib/content";

/* Per the copy doc: text wordmarks are the approved fallback, so the strip
   is typographic by design. TODO before launch: written permission from
   each client. */
export default function LogoStrip() {
  return (
    <section className="py-14">
      <Reveal className="mx-auto max-w-6xl px-6 text-center">
        <p className="text-[14px] text-graphite">
          Trusted by businesses in healthcare, SaaS, ecommerce, and finance
        </p>
        <div className="mt-8 flex flex-wrap items-baseline justify-center gap-x-14 gap-y-4">
          {CLIENTS.map((name) => (
            <span
              key={name}
              className="font-heading text-[17px] font-bold tracking-[-0.01em] text-ink/40"
            >
              {name}
            </span>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
