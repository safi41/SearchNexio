import Reveal from "@/components/motion/Reveal";
import { CtaLink, Eyebrow } from "@/components/ui";
import { STATS } from "@/lib/content";

const PARAGRAPHS = [
  "Right now, someone is looking for exactly what you sell. They ask Google. They check the map. They read the AI summary at the top of the screen. Or they ask ChatGPT which vendor to trust.",
  "If you show up in those specific moments, you make the shortlist. If you do not, the choice gets made without you, and you never even know you lost the lead.",
  "This is the gap traditional SEO misses. Some companies are completely invisible on these new platforms. Others rank well for keywords but watch their leads stall out, because ranking on one platform no longer means you are being found on the rest. Both issues come from the same basic mistake: optimizing for a single channel, and focusing on traffic numbers instead of revenue.",
];

const OLD_JOURNEY = ["Google query", "10 blue links", "Click to your site"];
const NEW_JOURNEY = ["Google", "Maps", "AI Overviews", "ChatGPT", "Decision"];

/* The dark band: where you cannot be seen. Quiet card language, static
   journey rows (the contrast between one thin path and many surfaces IS the
   argument), static stats. */
export default function ProblemSection() {
  return (
    <section className="bg-ink text-white">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <Reveal>
          <Eyebrow tone="dark">Why It Matters</Eyebrow>
          <h2 className="mt-4 max-w-2xl text-[clamp(1.8rem,3.4vw,2.75rem)] font-[380] leading-[1.1] tracking-[-0.025em]">
            Search has changed. Most SEO hasn&apos;t.
          </h2>
        </Reveal>

        <Reveal delay={80}>
          <div className="mt-8 grid max-w-3xl gap-5">
            {PARAGRAPHS.map((text, i) => (
              <p key={i} className="text-[15px] leading-relaxed text-white/65">
                {text}
              </p>
            ))}
          </div>
        </Reveal>

        {/* the journey comparison: one thin path vs. many surfaces */}
        <Reveal delay={120}>
          <div className="mt-14 grid gap-4">
            <JourneyRow
              label="How search used to work"
              note="One surface. One path. Rankings were the whole game."
              stops={OLD_JOURNEY}
              muted
            />
            <JourneyRow
              label="How buyers search now"
              note="Many surfaces. Answers before clicks. Visibility is the whole game."
              stops={NEW_JOURNEY}
            />
          </div>
        </Reveal>

        {/* reality by the numbers; static values, no count-up */}
        <Reveal delay={140}>
          <div className="mt-16 grid gap-10 md:grid-cols-3">
            {STATS.map((stat) => (
              <div key={stat.label}>
                <p className="text-5xl font-[420] tracking-[-0.02em] tabular-nums md:text-6xl">
                  {stat.prefix && (
                    <span className="text-2xl text-white/60 md:text-3xl">
                      {stat.prefix}
                    </span>
                  )}
                  {stat.value}
                  <span className="text-[#B9B2FF]">{stat.suffix}</span>
                </p>
                <p className="mt-3 max-w-xs text-sm leading-relaxed text-white/55">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-[11px] font-medium uppercase tracking-[0.16em] text-white/35">
            Sources verified and linked at launch
          </p>
        </Reveal>

        <Reveal delay={160}>
          <div className="mt-16 max-w-2xl">
            <p className="text-[clamp(1.4rem,2.4vw,1.9rem)] font-[380] tracking-[-0.02em]">
              You cannot fix what you cannot see.
            </p>
            <p className="mt-4 text-[15px] leading-relaxed text-white/65">
              The visibility review maps all of it out for you, surface by
              surface, so you know exactly where buyers find your business and
              where they find your competitors instead.
            </p>
            <div className="mt-8">
              <CtaLink href="/#visibility-review">Request a Visibility Review</CtaLink>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function JourneyRow({
  label,
  note,
  stops,
  muted = false,
}: {
  label: string;
  note: string;
  stops: string[];
  muted?: boolean;
}) {
  return (
    <div
      className={`rounded-2xl border p-6 ${
        muted ? "border-white/10 opacity-60" : "border-white/15 bg-white/[0.04]"
      }`}
    >
      <p className="text-sm font-medium text-white/80">{label}</p>
      <div className="mt-4 flex flex-wrap items-center gap-x-2 gap-y-3">
        {stops.map((stop, i) => (
          <span key={stop} className="flex items-center gap-2">
            <span
              className={`rounded-full border px-4 py-2 text-[13px] font-medium ${
                !muted && i === stops.length - 1
                  ? "border-citron bg-citron text-ink"
                  : "border-white/20 text-white/85"
              }`}
            >
              {stop}
            </span>
            {i < stops.length - 1 && (
              <span aria-hidden className="h-px w-5 bg-white/25" />
            )}
          </span>
        ))}
      </div>
      <p className="mt-4 text-[13px] text-white/45">{note}</p>
    </div>
  );
}
