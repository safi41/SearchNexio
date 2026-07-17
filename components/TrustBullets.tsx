import Reveal from "@/components/motion/Reveal";
import { TRUST_BULLETS } from "@/lib/content";

/* Three quiet proof cards on ivory. The heading that used to ride the dark
   act ("What we're built on") stays as a simple section intro. */
export default function TrustBullets() {
  return (
    <section className="py-20 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <h2 className="text-[clamp(1.6rem,3vw,2.25rem)] font-[380] tracking-[-0.025em]">
            What we&apos;re built on
          </h2>
        </Reveal>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {TRUST_BULLETS.map((bullet, i) => (
            <Reveal key={bullet.title} delay={i * 60}>
              <article className="h-full rounded-2xl border border-line bg-surface p-6">
                <h3 className="text-[15px] font-semibold tracking-[-0.01em]">
                  {bullet.title}
                </h3>
                <p className="mt-2.5 text-[13.5px] leading-relaxed text-graphite">
                  {bullet.body}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
