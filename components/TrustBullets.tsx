import Reveal from "@/components/motion/Reveal";
import { IconTile, SectionHead } from "@/components/ui";
import { ShieldIcon, SearchIcon, ChartIcon } from "@/components/icons";
import { TRUST_BULLETS } from "@/lib/content";

const ICONS = [ShieldIcon, SearchIcon, ChartIcon];

/* Convergence entrance: the left card slides in from the left, the right
   card from the right, meeting the middle card which scales in place.
   Text inside each card follows on its own stagger. */
const VARIANTS = ["left", "scale", "right"] as const;

export default function TrustBullets() {
  return (
    <section className="overflow-x-clip py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <SectionHead badge="Why teams choose us" title="What we're built on" />
        </Reveal>
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {TRUST_BULLETS.map((bullet, i) => {
            const Icon = ICONS[i];
            return (
              <Reveal key={bullet.title} variant={VARIANTS[i]} className="h-full">
                <article className="group h-full rounded-3xl border border-line bg-surface p-8 transition-all duration-300 ease-soft hover:-translate-y-1 hover:shadow-[0_14px_40px_rgba(11,13,18,0.08)]">
                  <div className="reveal-item [transition-delay:120ms]">
                    <IconTile>
                      <Icon />
                    </IconTile>
                  </div>
                  <h3 className="reveal-item mt-6 font-heading text-[19px] font-bold tracking-[-0.01em] [transition-delay:200ms]">
                    {bullet.title}
                  </h3>
                  <p className="reveal-item mt-3 text-[14px] leading-relaxed text-graphite [transition-delay:280ms]">
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
