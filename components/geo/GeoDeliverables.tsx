import Reveal from "@/components/motion/Reveal";
import { CtaLink } from "@/components/ui";
import { DELIVERABLES } from "@/lib/geo-content";

/* What you receive: a deliverables grid with short titles and one supporting
   sentence each. Minimal hover state, no decorative icons per card. */

export default function GeoDeliverables() {
  return (
    <section className="overflow-x-clip py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <h2 className="max-w-2xl font-heading text-[clamp(1.9rem,3.6vw,2.6rem)] font-bold leading-[1.12] tracking-[-0.02em]">
            What you receive
          </h2>
          <p className="mt-6 max-w-2xl text-[15px] leading-relaxed text-graphite">
            Every engagement is built around defined outputs rather than broad activity descriptions.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-2">
          {DELIVERABLES.map((d, i) => (
            <Reveal key={d.title} variant="up" delay={Math.min((i % 2) * 60, 120)}>
              <article className="group flex h-full gap-4 rounded-2xl border border-line bg-surface p-6 transition-colors duration-300 ease-soft hover:border-indigo/30">
                <span className="font-heading text-[14px] font-bold tabular-nums text-indigo/70">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="font-heading text-[16px] font-bold tracking-[-0.01em] transition-colors group-hover:text-indigo">
                    {d.title}
                  </h3>
                  <p className="mt-2 text-[13.5px] leading-relaxed text-graphite">{d.desc}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        {/* contextual link to the audit (in-page anchor) */}
        <Reveal delay={80}>
          <div className="mt-10 flex justify-center">
            <CtaLink href="#visibility-audit">Start with an AI Visibility Audit</CtaLink>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
