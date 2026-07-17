import Reveal from "@/components/motion/Reveal";
import { IconTile, SectionHead } from "@/components/ui";
import { MapIcon, WrenchIcon, RocketIcon, ChartIcon } from "@/components/icons";
import { METHOD_STEPS } from "@/lib/content";

const ICONS = [MapIcon, WrenchIcon, RocketIcon, ChartIcon];

/* Sasico's "Easy Steps" band: citron wash, centered head, step cards. */
export default function FullSurfaceMethod() {
  return (
    <section className="relative wash-lilac-full py-16 md:py-24">
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
              <Reveal key={step.name} delay={i * 70}>
                <article className="h-full rounded-3xl border border-line bg-surface p-7 text-center">
                  <div className="flex justify-center">
                    <IconTile>
                      <Icon />
                    </IconTile>
                  </div>
                  <p className="mt-5 text-[11px] font-semibold uppercase tracking-[0.16em] text-graphite">
                    Step {step.index}
                  </p>
                  <h3 className="mt-1.5 font-heading text-[19px] font-bold">
                    {step.name}
                  </h3>
                  <p className="mt-3 text-[13px] leading-relaxed text-graphite">
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
