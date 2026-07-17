import Reveal from "@/components/motion/Reveal";
import { SectionHead } from "@/components/ui";
import { WHY } from "@/lib/content";

/* 2x2 card grid; the testimonial slot stays a dashed pending frame until
   the sourced quote lands (permission outreach). */
export default function WhySearchNexio() {
  return (
    <section className="overflow-x-clip wash-lilac-full py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <SectionHead
            badge="Why Us"
            title="Why SearchNexio"
            sub="The short version: we are a search visibility agency that works the way high-trust businesses need their partners to work."
          />
        </Reveal>

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {WHY.map((item, i) => (
            <Reveal
              key={item.title}
              variant={i % 2 === 0 ? "left" : "right"}
              className="h-full"
            >
              <div className="h-full rounded-3xl border border-line bg-surface p-8 transition-all duration-300 ease-soft hover:-translate-y-1 hover:shadow-[0_14px_40px_rgba(11,13,18,0.08)]">
                <h3 className="reveal-item font-heading text-[18px] font-bold tracking-[-0.01em] [transition-delay:140ms]">
                  {item.title}
                </h3>
                <p className="reveal-item mt-3 text-[14px] leading-relaxed text-graphite [transition-delay:220ms]">
                  {item.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Testimonial slot: single quote, no carousel; pending permission outreach. */}
        <Reveal delay={140}>
          <figure className="mx-auto mt-8 max-w-3xl rounded-3xl border border-dashed border-graphite/40 bg-surface/60 p-10 text-center">
            <span aria-hidden className="font-heading text-4xl leading-none text-ink">
              &ldquo;
            </span>
            <figcaption className="mt-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-graphite">
              One client quote, one sentence, name, company. Pending permission
              outreach.
            </figcaption>
          </figure>
        </Reveal>
      </div>
    </section>
  );
}
