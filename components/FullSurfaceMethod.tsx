import Reveal from "@/components/motion/Reveal";
import { SectionHead } from "@/components/ui";
import { METHOD_STEPS } from "@/lib/content";

/* Sasico's "Easy Steps" band: lilac wash, centered head, step cards. Each
   step opens with a mini-graphic acting out the step itself. */

function Vignette({ children }: { children: React.ReactNode }) {
  return (
    <div className="reveal-item relative mb-5 flex h-24 items-center justify-center overflow-hidden rounded-2xl border border-line/70 bg-ivory/70 [transition-delay:120ms]">
      {children}
    </div>
  );
}

/* 01 Map — a surface grid being scanned, pins marking what's found */
function MapVignette() {
  return (
    <Vignette>
      <div aria-hidden className="grid-pattern absolute inset-0 opacity-70 [background-size:26px_26px]" />
      <span aria-hidden className="absolute size-16 rounded-full border border-dashed border-indigo/50" />
      <span aria-hidden className="absolute size-9 rounded-full border border-indigo/30" />
      <span className="relative size-2.5 rounded-full bg-indigo shadow-[0_0_10px_rgba(99,91,255,0.7)]" />
      <span aria-hidden className="absolute left-[30%] top-[30%] size-2 rounded-full bg-ink/50" />
      <span aria-hidden className="absolute right-[28%] top-[58%] size-2 rounded-full bg-warn/80" />
      <span aria-hidden className="absolute right-[38%] top-[24%] size-1.5 rounded-full bg-ink/35" />
    </Vignette>
  );
}

/* 02 Fix — a prioritized checklist, the last item still flagged */
function FixVignette() {
  const rows = [
    { done: true, width: "w-24" },
    { done: true, width: "w-20" },
    { done: false, width: "w-16" },
  ];
  return (
    <Vignette>
      <div className="grid gap-2">
        {rows.map((row, i) => (
          <div key={i} className="flex items-center gap-2">
            <span
              className={`grid size-4.5 place-items-center rounded-full ${
                row.done ? "bg-citron" : "border border-warn/60 bg-surface"
              }`}
            >
              {row.done ? (
                <svg width="9" height="9" viewBox="0 0 12 12" fill="none" aria-hidden>
                  <path
                    d="m2.5 6.5 2.5 2.5 4.5-5"
                    stroke="#0B0D12"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              ) : (
                <span className="size-1.5 rounded-full bg-warn" />
              )}
            </span>
            <span className={`h-1.5 rounded-full bg-line ${row.width}`} />
          </div>
        ))}
      </div>
    </Vignette>
  );
}

/* 03 Amplify — rings radiating from a source dot */
function AmplifyVignette() {
  return (
    <Vignette>
      <span aria-hidden className="absolute size-20 rounded-full border border-indigo/20" />
      <span aria-hidden className="absolute size-14 rounded-full border border-indigo/35" />
      <span aria-hidden className="absolute size-8 rounded-full border border-indigo/50" />
      <span className="relative grid size-5 place-items-center rounded-full bg-indigo">
        <svg width="10" height="10" viewBox="0 0 12 12" fill="none" aria-hidden>
          <path
            d="M6 10V2m0 0L2.5 5.5M6 2l3.5 3.5"
            stroke="#ffffff"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
      <span aria-hidden className="absolute right-[22%] top-[26%] size-1.5 rounded-full bg-citron-deep" />
      <span aria-hidden className="absolute left-[24%] bottom-[28%] size-1.5 rounded-full bg-indigo/60" />
    </Vignette>
  );
}

/* 04 Prove — a reporting curve with the score moving up */
function ProveVignette() {
  return (
    <Vignette>
      <svg
        className="absolute inset-x-3 bottom-2 h-14 w-[calc(100%-24px)]"
        viewBox="0 0 200 56"
        preserveAspectRatio="none"
        aria-hidden
      >
        <path
          d="M0,48 C30,46 50,40 80,34 C115,27 150,18 200,8 L200,56 L0,56 Z"
          className="fill-lilac"
          opacity="0.8"
        />
        <path
          d="M0,48 C30,46 50,40 80,34 C115,27 150,18 200,8"
          fill="none"
          stroke="#635BFF"
          strokeWidth="2.5"
        />
      </svg>
      <span className="absolute left-4 top-3 inline-flex items-center gap-1 rounded-full border border-line bg-surface px-2 py-0.5 text-[10px] font-semibold shadow-sm">
        68 <span aria-hidden className="text-graphite">&rarr;</span>{" "}
        <span className="text-indigo">82</span>
      </span>
    </Vignette>
  );
}

const VIGNETTES = [MapVignette, FixVignette, AmplifyVignette, ProveVignette];

export default function FullSurfaceMethod() {
  return (
    <section className="relative overflow-x-clip wash-lilac-full py-16 md:py-24">
      <div
        aria-hidden
        className="grid-pattern absolute left-1/2 top-8 h-64 w-[520px] -translate-x-1/2 [mask-image:radial-gradient(ellipse_70%_70%_at_50%_40%,#000_30%,transparent_75%)]"
      />
      <div className="relative mx-auto max-w-6xl px-6">
        <Reveal>
          <SectionHead
            badge="Our Methodology"
            title="The Full-Surface Method"
            sub="Most SEO focuses entirely on traditional web rankings. Our approach treats every platform your buyers use as one connected system, working through them in a set order."
          />
        </Reveal>
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {METHOD_STEPS.map((step, i) => {
            const StepVignette = VIGNETTES[i];
            return (
              <Reveal
                key={step.name}
                variant={i < 2 ? "left" : "right"}
                delay={i === 1 || i === 2 ? 0 : 80}
                className="h-full"
              >
                <article className="group h-full rounded-3xl border border-line bg-surface p-6 transition-all duration-300 ease-soft hover:-translate-y-1 hover:shadow-[0_14px_40px_rgba(11,13,18,0.08)]">
                  <StepVignette />
                  <p className="reveal-item text-[11px] font-semibold uppercase tracking-[0.16em] text-graphite [transition-delay:190ms]">
                    Step {step.index}
                  </p>
                  <h3 className="reveal-item mt-1.5 font-heading text-[19px] font-bold [transition-delay:260ms]">
                    {step.name}
                  </h3>
                  <p className="reveal-item mt-3 text-[13px] leading-relaxed text-graphite [transition-delay:330ms]">
                    {step.body}
                  </p>
                </article>
              </Reveal>
            );
          })}
        </div>
        <Reveal delay={120}>
          <p className="mx-auto mt-10 max-w-xl text-center text-[14px] leading-relaxed text-ink">
            No long-term lock-in contracts. We keep our clients by delivering
            results, not through legal commitments.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
