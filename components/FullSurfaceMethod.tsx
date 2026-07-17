import Reveal from "@/components/motion/Reveal";
import { IconTile, SectionHead } from "@/components/ui";
import { MapIcon, WrenchIcon, RocketIcon, ChartIcon } from "@/components/icons";
import { METHOD_STEPS } from "@/lib/content";

const ICONS = [MapIcon, WrenchIcon, RocketIcon, ChartIcon];

/* Sasico's "Easy Steps" band: citron wash, centered head, step cards. */
export default function FullSurfaceMethod() {
  return (
    <section className="relative overflow-x-clip wash-lilac-full py-16 md:py-24">
      <div
        aria-hidden
        className="grid-pattern absolute left-1/2 top-8 h-64 w-[520px] -translate-x-1/2 [mask-image:radial-gradient(ellipse_70%_70%_at_50%_40%,#000_30%,transparent_75%)]"
      />
      <div className="relative mx-auto max-w-6xl px-6">
        <Reveal>
          <SectionHead
            badge="Our Methodology"
            title="The Full-Surface Method"
            sub="Most SEO focuses entirely on traditional web rankings. Our approach treats every platform your buyers use as one connected system, working through them in a set order."
          />
        </Reveal>
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {METHOD_STEPS.map((step, i) => {
            const Icon = ICONS[i];
            return (
              <Reveal
                key={step.name}
                variant={i < 2 ? "left" : "right"}
                delay={(i === 1 || i === 2 ? 0 : 80)}
                className="h-full"
              >
                <article className="group h-full rounded-3xl border border-line bg-surface p-7 text-center transition-all duration-300 ease-soft hover:-translate-y-1 hover:shadow-[0_14px_40px_rgba(11,13,18,0.08)]">
                  <div className="reveal-item flex justify-center [transition-delay:120ms]">
                    <IconTile>
                      <Icon />
                    </IconTile>
                  </div>
                  <p className="reveal-item mt-5 text-[11px] font-semibold uppercase tracking-[0.16em] text-graphite [transition-delay:190ms]">
                    Step {step.index}
                  </p>
                  <h3 className="reveal-item mt-1.5 font-heading text-[19px] font-bold [transition-delay:260ms]">
                    {step.name}
                  </h3>
                  <p className="reveal-item mt-3 text-[13px] leading-relaxed text-graphite [transition-delay:330ms]">
                    {step.body}
                  </p>
                </article>
              </Reveal>
            );
          })}
        </div>
        <Reveal delay={120}>
          <p className="mx-auto mt-10 max-w-xl text-center text-[14px] leading-relaxed text-ink">
            No long-term lock-in contracts. We keep our clients by delivering
            results, not through legal commitments.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
