import Reveal from "@/components/motion/Reveal";
import { Eyebrow } from "@/components/ui";
import { WHY } from "@/lib/content";

/* Light 2x2 grid split by hairlines; the testimonial slot stays a dashed
   pending frame until the sourced quote lands (permission outreach). */
export default function WhySearchNexio() {
  return (
    <section className="py-20 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <Eyebrow>Why Us</Eyebrow>
          <h2 className="mt-4 text-[clamp(1.8rem,3.4vw,2.75rem)] font-[380] leading-[1.1] tracking-[-0.025em]">
            Why SearchNexio
          </h2>
          <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-graphite">
            The short version: we are a search visibility agency that works the
            way high-trust businesses need their partners to work.
          </p>
        </Reveal>

        <Reveal delay={80}>
          <div className="mt-12 grid overflow-hidden rounded-2xl border border-line bg-surface md:grid-cols-2">
            {WHY.map((item, i) => (
              <div
                key={item.title}
                className={`p-7 md:p-9 ${i >= 1 ? "border-t border-line" : ""} ${
                  i % 2 === 1 ? "md:border-l" : ""
                } ${i === 1 ? "md:border-t-0" : ""}`}
              >
                <h3 className="text-[15px] font-semibold tracking-[-0.01em]">
                  {item.title}
                </h3>
                <p className="mt-2.5 max-w-md text-[13.5px] leading-relaxed text-graphite">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </Reveal>

        {/* Testimonial slot: single quote, no carousel; pending permission outreach. */}
        <Reveal delay={140}>
          <figure className="mt-8 rounded-2xl border border-dashed border-graphite/40 p-10 text-center">
            <span aria-hidden className="text-4xl leading-none text-indigo">
              &ldquo;
            </span>
            <figcaption className="mt-2 text-[11px] font-medium uppercase tracking-[0.16em] text-graphite">
              One client quote, one sentence, name, company. Pending permission
              outreach.
            </figcaption>
          </figure>
        </Reveal>
      </div>
    </section>
  );
}
