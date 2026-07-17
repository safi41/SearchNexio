import Reveal from "@/components/motion/Reveal";
import { IconTile, SectionHead } from "@/components/ui";
import { ShieldIcon, SearchIcon, ChartIcon } from "@/components/icons";
import { TRUST_BULLETS } from "@/lib/content";

const ICONS = [ShieldIcon, SearchIcon, ChartIcon];

export default function TrustBullets() {
  return (
    <section className="py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <SectionHead badge="Why teams choose us" title="What we're built on" />
        </Reveal>
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {TRUST_BULLETS.map((bullet, i) => {
            const Icon = ICONS[i];
            return (
              <Reveal key={bullet.title} delay={i * 70} variant="scale">
                <article className="group h-full rounded-3xl border border-line bg-surface p-8 transition-all duration-300 ease-soft hover:-translate-y-1 hover:shadow-[0_14px_40px_rgba(11,13,18,0.08)]">
                  <IconTile>
                    <Icon />
                  </IconTile>
                  <h3 className="mt-6 font-heading text-[19px] font-bold tracking-[-0.01em]">
                    {bullet.title}
                  </h3>
                  <p className="mt-3 text-[14px] leading-relaxed text-graphite">
                    {bullet.body}
                  </p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
