import Reveal from "@/components/motion/Reveal";
import { SectionHead } from "@/components/ui";
import { INDUSTRIES } from "@/lib/content";

/* Centered pill row. Doc rule: one sentence per industry maximum, shown on
   hover here and in full on the /industries hub page. */
export default function Industries() {
  return (
    <section className="py-16 md:py-20">
      <div className="mx-auto max-w-5xl px-6">
        <Reveal>
          <SectionHead
            badge="Who We Serve"
            title="Industries We Work With"
            sub="We focus on businesses where trust decides the sale, and buyers research everything before choosing."
          />
        </Reveal>
        <Reveal delay={80}>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {INDUSTRIES.map((industry) => (
              // client-review mode: pills keep their face and hover blurb
              // but no longer route to the industries hub
              <span
                key={industry.name}
                aria-disabled="true"
                title={industry.blurb}
                className="inline-block cursor-default rounded-full border border-line bg-surface px-6 py-3 text-[14px] font-medium text-ink transition-colors duration-200 hover:bg-indigo hover:text-white"
              >
                {industry.name}
              </span>
            ))}
          </div>
        </Reveal>
        <Reveal delay={140}>
          <p className="mt-9 text-center text-[13.5px] text-graphite">
            Not sure if you fit? The visibility review will tell you honestly.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
