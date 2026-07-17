import Reveal from "@/components/motion/Reveal";
import { Eyebrow } from "@/components/ui";
import { INDUSTRIES } from "@/lib/content";

/* Slim lilac band. Doc rule: one sentence per industry maximum, shown on
   hover here and in full on the /industries hub page. */
export default function Industries() {
  return (
    <section className="border-y border-line bg-lilac">
      <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
        <Reveal>
          <Eyebrow>Who We Serve</Eyebrow>
          <h2 className="mt-4 text-[clamp(1.6rem,3vw,2.25rem)] font-[380] tracking-[-0.025em]">
            Industries We Work With
          </h2>
          <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-graphite">
            We focus on businesses where trust decides the sale, and buyers
            research everything before choosing.
          </p>
        </Reveal>
        <Reveal delay={80}>
          <div className="mt-8 flex flex-wrap gap-3">
            {INDUSTRIES.map((industry) => (
              // client-review mode: pills keep their face and hover blurb
              // but no longer route to the industries hub
              <span
                key={industry.name}
                aria-disabled="true"
                title={industry.blurb}
                className="inline-block cursor-default rounded-full border border-ink/20 bg-surface/60 px-5 py-2.5 text-sm font-medium text-ink transition-colors duration-200 hover:bg-ink hover:text-ivory"
              >
                {industry.name}
              </span>
            ))}
          </div>
        </Reveal>
        <Reveal delay={140}>
          <p className="mt-8 text-[14px] text-graphite">
            Not sure if you fit? The visibility review will tell you honestly.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
