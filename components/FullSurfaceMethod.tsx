import Reveal from "@/components/motion/Reveal";
import { Eyebrow } from "@/components/ui";
import { METHOD_STEPS } from "@/lib/content";

/* The only numbered section on the page, because it is the only true
   sequence in the copy ("working through them in a set order"). Two quiet
   columns; no pinning, no progress line. */
export default function FullSurfaceMethod() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20 md:py-24">
      <div className="grid gap-14 md:grid-cols-[5fr_7fr] md:gap-20">
        <Reveal>
          <Eyebrow>Our Methodology</Eyebrow>
          <h2 className="mt-4 text-[clamp(1.8rem,3.4vw,2.75rem)] font-[380] leading-[1.1] tracking-[-0.025em]">
            The Full-Surface Method
          </h2>
          <p className="mt-5 text-[15px] leading-relaxed text-graphite">
            Most SEO focuses entirely on traditional web rankings. Our approach
            treats every platform your buyers use as one connected system,
            working through them in a set order.
          </p>
          <div className="mt-8 rounded-2xl border border-line bg-lilac/60 p-5">
            <p className="text-[14px] leading-relaxed text-ink">
              No long-term lock-in contracts. We keep our clients by delivering
              results, not through legal commitments.
            </p>
          </div>
        </Reveal>

        <ol className="grid gap-4">
          {METHOD_STEPS.map((step, i) => (
            <Reveal key={step.name} delay={i * 60}>
              <li className="flex gap-5 rounded-2xl border border-line bg-surface p-6">
                <span
                  aria-hidden
                  className="grid size-8 shrink-0 place-items-center rounded-lg bg-lilac text-[13px] font-semibold text-indigo"
                >
                  {step.index}
                </span>
                <div>
                  <h3 className="text-base font-semibold tracking-[-0.01em]">
                    {step.name}
                  </h3>
                  <p className="mt-2 max-w-lg text-[13.5px] leading-relaxed text-graphite">
                    {step.body}
                  </p>
                </div>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
