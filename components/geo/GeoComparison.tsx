import Reveal from "@/components/motion/Reveal";
import { COMPARISON } from "@/lib/geo-content";

/* What a GEO agency does: intro copy + a three-column SEO / AEO / GEO
   comparison table with row highlight on hover. */

const intro = [
  "Generative Engine Optimization improves the conditions that support accurate brand mentions, citations and recommendations across generative platforms.",
  "A credible GEO agency connects commercial prompt research, technical search foundations, content, entity clarity, external authority and ongoing measurement. GEO is one specialist layer within a broader AI Search Optimization Services strategy rather than a replacement for SEO or Answer Engine Optimization.",
];

export default function GeoComparison() {
  return (
    <section className="overflow-x-clip py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <h2 className="max-w-2xl font-heading text-[clamp(1.9rem,3.6vw,2.6rem)] font-bold leading-[1.12] tracking-[-0.02em]">
            What a GEO agency does
          </h2>
          <div className="mt-6 grid max-w-3xl gap-4">
            {intro.map((p, i) => (
              <p key={i} className="text-[15px] leading-relaxed text-graphite">
                {/* AI Search Optimization Services internal link (placeholder) */}
                {i === 1 ? (
                  <>
                    A credible GEO agency connects commercial prompt research, technical search foundations, content, entity clarity, external authority and ongoing measurement. GEO is one specialist layer within a broader{" "}
                    <span className="font-semibold text-indigo underline decoration-indigo/30 underline-offset-2">AI Search Optimization Services</span>{" "}
                    strategy rather than a replacement for SEO or Answer Engine Optimization.
                  </>
                ) : (
                  p
                )}
              </p>
            ))}
          </div>
        </Reveal>

        {/* the comparison table */}
        <Reveal delay={80}>
          <div className="mt-10 overflow-hidden rounded-3xl border border-line bg-surface">
            {/* header row */}
            <div className="grid grid-cols-3 border-b border-line bg-lilac/40">
              {COMPARISON.cols.map((c, i) => (
                <div
                  key={c}
                  className={`px-5 py-4 font-heading text-[15px] font-bold tracking-[-0.01em] ${i === 2 ? "text-indigo" : ""} ${i > 0 ? "border-l border-line" : ""}`}
                >
                  {c}
                </div>
              ))}
            </div>
            {/* body rows */}
            {COMPARISON.rows.map((row, ri) => (
              <div
                key={ri}
                className="group grid grid-cols-3 border-b border-line transition-colors duration-200 last:border-b-0 hover:bg-ivory/70"
              >
                {row.map((cell, ci) => (
                  <div
                    key={ci}
                    className={`px-5 py-4 text-[13.5px] leading-relaxed ${ci === 2 ? "font-medium text-ink" : "text-graphite"} ${ci > 0 ? "border-l border-line" : ""}`}
                  >
                    {cell}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
