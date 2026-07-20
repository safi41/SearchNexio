import Reveal from "@/components/motion/Reveal";
import { SectionHead } from "@/components/ui";
import { GoogleG, MapsPin, SparkleAI, ChatGPTMark } from "@/components/brand-icons";
import { TRUST_BULLETS } from "@/lib/content";

/* Convergence entrance: the left card slides in from the left, the right
   card from the right, meeting the middle card which scales in place.
   Each card opens with a mini-graphic built from its own claim. */
const VARIANTS = ["left", "scale", "right"] as const;

/* Shared vignette frame: a soft ivory panel above the card copy. */
function Vignette({ children }: { children: React.ReactNode }) {
  return (
    <div className="reveal-item relative mb-6 flex h-24 items-center justify-center overflow-hidden rounded-2xl border border-line/70 bg-ivory/70 [transition-delay:120ms]">
      {children}
    </div>
  );
}

/* 1 — high-trust industries as verified chips */
function IndustriesVignette() {
  const chips = ["Healthcare", "Finance", "Legal", "Tax"];
  return (
    <Vignette>
      <div className="flex max-w-[240px] flex-wrap items-center justify-center gap-1.5">
        {chips.map((chip, i) => (
          <span
            key={chip}
            className={`inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-[10.5px] font-semibold ${
              i === 0
                ? "bg-indigo text-white"
                : "border border-line bg-surface text-ink/80"
            }`}
          >
            <svg width="9" height="9" viewBox="0 0 12 12" fill="none" aria-hidden>
              <path
                d="m2.5 6.5 2.5 2.5 4.5-5"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            {chip}
          </span>
        ))}
      </div>
    </Vignette>
  );
}

/* 2 — the four surfaces in a covered strip */
function CoverageVignette() {
  const marks = [
    <GoogleG key="g" size={15} />,
    <MapsPin key="m" size={15} />,
    <SparkleAI key="s" size={15} />,
    <ChatGPTMark key="c" size={15} />,
  ];
  return (
    <Vignette>
      <span aria-hidden className="absolute h-px w-44 bg-line" />
      <div className="relative flex items-center gap-5">
        {marks.map((mark, i) => (
          <span
            key={i}
            className="relative grid size-10 place-items-center rounded-full border border-line bg-surface shadow-[0_4px_12px_rgba(11,13,18,0.08)]"
          >
            {mark}
            <span
              aria-hidden
              className="absolute -bottom-0.5 -right-0.5 grid size-4 place-items-center rounded-full bg-citron"
            >
              <svg width="8" height="8" viewBox="0 0 12 12" fill="none">
                <path
                  d="m2.5 6.5 2.5 2.5 4.5-5"
                  stroke="#0B0D12"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </span>
        ))}
      </div>
    </Vignette>
  );
}

/* 3 — impact as a rising bar chart with a proof chip */
function ImpactVignette() {
  const bars = [24, 34, 46, 60, 76];
  return (
    <Vignette>
      <div className="flex items-end gap-2">
        {bars.map((height, i) => (
          <span
            key={height}
            className={`w-4 rounded-t-md ${
              i === bars.length - 1 ? "bg-indigo" : "bg-indigo/30"
            }`}
            style={{ height: `${(height / 100) * 72}px` }}
          />
        ))}
      </div>
      <span className="absolute right-4 top-3 inline-flex items-center gap-1 rounded-full border border-line bg-surface px-2 py-0.5 text-[10px] font-semibold shadow-sm">
        <svg width="9" height="9" viewBox="0 0 12 12" fill="none" aria-hidden>
          <path
            d="M6 10V2m0 0L2.5 5.5M6 2l3.5 3.5"
            stroke="#635BFF"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        pipeline
      </span>
    </Vignette>
  );
}

const VIGNETTES = [IndustriesVignette, CoverageVignette, ImpactVignette];

export default function TrustBullets() {
  return (
    <section className="overflow-x-clip py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <SectionHead badge="Why teams choose us" title="What we're built on" />
        </Reveal>
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {TRUST_BULLETS.map((bullet, i) => {
            const CardVignette = VIGNETTES[i];
            return (
              <Reveal key={bullet.title} variant={VARIANTS[i]} className="h-full">
                <article className="group h-full rounded-3xl border border-line bg-surface p-7 transition-all duration-300 ease-soft hover:-translate-y-1 hover:shadow-[0_14px_40px_rgba(11,13,18,0.08)]">
                  <CardVignette />
                  <h3 className="reveal-item font-heading text-[19px] font-bold tracking-[-0.01em] [transition-delay:200ms]">
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
