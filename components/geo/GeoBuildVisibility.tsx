import Reveal from "@/components/motion/Reveal";
import { BUYER_JOURNEY } from "@/lib/geo-content";

/* Build visibility in AI answers: intro copy + the buyer journey
   (Ask, Compare, Validate, Shortlist) with a connecting line that reveals
   once on scroll. */

const paras = [
  "A brand can perform well in traditional search and still be absent from the generated answers its buyers use for research. Competitors with clearer positioning, stronger evidence or broader third-party coverage may appear earlier in the decision process.",
  "Search Nexio identifies where your brand appears, where competitors receive stronger visibility and which content, entity, technical or authority gaps may be limiting your presence.",
  "The objective is not to chase one isolated mention. It is to build a more consistent and measurable presence across the generative platforms that influence discovery, comparison and vendor evaluation.",
];

export default function GeoBuildVisibility() {
  return (
    <section className="overflow-x-clip py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <Reveal variant="left">
            <h2 className="font-heading text-[clamp(1.9rem,3.6vw,2.6rem)] font-bold leading-[1.12] tracking-[-0.02em]">
              Build visibility in AI answers
            </h2>
            <div className="mt-6 grid gap-4">
              {paras.map((p, i) => (
                <p key={i} className="text-[15px] leading-relaxed text-graphite">{p}</p>
              ))}
            </div>
          </Reveal>

          {/* the buyer journey */}
          <Reveal variant="right" delay={80}>
            <div className="relative rounded-3xl border border-line bg-surface p-7">
              <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-graphite">The buyer journey</p>
              <ol className="relative mt-6 grid gap-5">
                {/* connecting line */}
                <span aria-hidden className="absolute bottom-4 left-[15px] top-4 w-px bg-line" />
                <span aria-hidden className="journey-line absolute left-[15px] top-4 w-px bg-gradient-to-b from-indigo to-indigo/60" />
                {BUYER_JOURNEY.map((s, i) => (
                  <li key={s.step} className="reveal-item relative flex gap-4" style={{ transitionDelay: `${120 + i * 120}ms` }}>
                    <span className="relative z-10 grid size-8 shrink-0 place-items-center rounded-full bg-indigo text-[12px] font-bold text-white">
                      {i + 1}
                    </span>
                    <div className="pt-0.5">
                      <p className="font-heading text-[16px] font-bold tracking-[-0.01em]">{s.step}</p>
                      <p className="mt-1 text-[13.5px] leading-relaxed text-graphite">{s.desc}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
