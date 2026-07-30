import Reveal from "@/components/motion/Reveal";
import { TRENDS } from "@/lib/geo-content";

/* Why GEO matters now + the Google Trends analysis. The chart is a light,
   labelled reveal of the average relative interest scores from the client's
   analysis, with the required attribution caption. No animated counters. */

const paras = [
  "Generative platforms combine information from several sources and respond to the specific question being asked. Buyers can use those answers to identify vendors, compare capabilities, explore alternatives and validate claims before contacting a company.",
  "This adds another visibility layer to the customer journey. Traditional rankings remain important, but they do not automatically translate into brand mentions, citations or recommendations within generative responses.",
];

function TrendsChart() {
  const max = Math.max(...TRENDS.series.map((s) => s.avg));
  return (
    <figure className="rounded-3xl border border-line bg-surface p-6 md:p-8">
      <figcaption className="flex items-center justify-between">
        <div>
          <p className="font-heading text-[15px] font-bold tracking-[-0.01em]">Search interest over time</p>
          <p className="mt-1 text-[12px] text-graphite">Average relative interest, United States</p>
        </div>
        <span className="inline-flex items-center gap-1.5 rounded-full bg-lilac px-2.5 py-1 text-[10px] font-semibold tracking-[0.04em] text-indigo">
          Google Trends
        </span>
      </figcaption>

      {/* horizontal bars, one per term */}
      <div className="mt-6 grid gap-3.5">
        {TRENDS.series.map((s) => (
          <div key={s.name} className="flex items-center gap-3">
            <span className="w-20 shrink-0 text-[12.5px] font-semibold">{s.name}</span>
            <span className="relative h-6 flex-1 overflow-hidden rounded-lg bg-ivory">
              <span
                className="flex h-full items-center justify-end rounded-lg px-2 text-[11px] font-bold tabular-nums text-white"
                style={{ width: `${Math.max((s.avg / max) * 100, 8)}%`, backgroundColor: s.color }}
              >
                {s.avg}
              </span>
            </span>
          </div>
        ))}
      </div>

      <p className="mt-6 border-t border-line pt-4 text-[11.5px] leading-relaxed text-graphite">
        {TRENDS.caption}
      </p>
    </figure>
  );
}

export default function GeoWhyMatters() {
  return (
    <section className="overflow-x-clip wash-lilac-full py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid items-start gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <Reveal variant="left">
            <h2 className="font-heading text-[clamp(1.9rem,3.6vw,2.6rem)] font-bold leading-[1.12] tracking-[-0.02em]">
              Why GEO matters now
            </h2>
            <div className="mt-6 grid gap-4">
              {paras.map((p, i) => (
                <p key={i} className="text-[15px] leading-relaxed text-graphite">{p}</p>
              ))}
            </div>
          </Reveal>

          <Reveal variant="right" delay={80}>
            <TrendsChart />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
