import Reveal from "@/components/motion/Reveal";
import { PLATFORMS } from "@/lib/geo-content";
import { ChatGPTMark, GoogleG, GeminiMark, PerplexityMark, SparkleAI } from "@/components/brand-icons";

/* Platforms we optimize for: five cards with a one-line commercial use case.
   Static cards with subtle hover only, no unsupported "Optimized" badges. */

const ICONS = [
  <ChatGPTMark key="c" size={22} />,
  <GoogleG key="g" size={22} />,
  <GeminiMark key="ge" size={22} />,
  <PerplexityMark key="p" size={22} />,
  <SparkleAI key="s" size={22} />,
];

export default function GeoPlatforms() {
  return (
    <section className="overflow-x-clip py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <h2 className="font-heading text-[clamp(1.9rem,3.6vw,2.6rem)] font-bold leading-[1.12] tracking-[-0.02em]">
            Platforms we optimize for
          </h2>
        </Reveal>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {PLATFORMS.map((p, i) => (
            <Reveal key={p.name} variant="up" delay={Math.min((i % 3) * 60, 120)}>
              <article className="group flex h-full flex-col rounded-2xl border border-line bg-surface p-6 transition-colors duration-300 ease-soft hover:border-indigo/30">
                <span className="grid size-11 place-items-center rounded-xl border border-line bg-ivory">
                  {ICONS[i]}
                </span>
                <h3 className="mt-5 font-heading text-[17px] font-bold tracking-[-0.01em]">{p.name}</h3>
                <p className="mt-2 text-[13.5px] leading-relaxed text-graphite">{p.desc}</p>
              </article>
            </Reveal>
          ))}
        </div>

        {/* AEO contextual link (placeholder) */}
        <Reveal delay={60}>
          <p className="mt-8 max-w-2xl text-[14px] leading-relaxed text-graphite">
            For direct-answer strategy, buyer-question architecture and Google answer surfaces, see our{" "}
            <span className="font-semibold text-indigo underline decoration-indigo/30 underline-offset-2">Answer Engine Optimization Services</span>.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
