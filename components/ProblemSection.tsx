import Reveal from "@/components/motion/Reveal";
import { CtaLink, SectionHead } from "@/components/ui";
import { STATS } from "@/lib/content";

const PARAGRAPHS = [
  "Right now, someone is looking for exactly what you sell. They ask Google. They check the map. They read the AI summary at the top of the screen. Or they ask ChatGPT which vendor to trust.",
  "If you show up in those specific moments, you make the shortlist. If you do not, the choice gets made without you, and you never even know you lost the lead.",
  "This is the gap traditional SEO misses. Some companies are completely invisible on these new platforms. Others rank well for keywords but watch their leads stall out, because ranking on one platform no longer means you are being found on the rest. Both issues come from the same basic mistake: optimizing for a single channel, and focusing on traffic numbers instead of revenue.",
];

const OLD_JOURNEY = ["Google query", "10 blue links", "Click to your site"];
const NEW_JOURNEY = ["Google", "Maps", "AI Overviews", "ChatGPT", "Decision"];

/* Sasico treatment: a citron-washed band with centered head, the journey
   comparison as pill-chip cards, and the stats as big bold numbers. */
export default function ProblemSection() {
  return (
    <section className="wash-lilac-full py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <SectionHead
            badge="Why it matters"
            title={
              <>
                Search has changed. <br className="hidden md:block" />
                Most SEO hasn&apos;t.
              </>
            }
            sub={PARAGRAPHS[0]}
          />
        </Reveal>

        <Reveal delay={80}>
          <div className="mx-auto mt-8 grid max-w-3xl gap-4 text-center">
            {PARAGRAPHS.slice(1).map((text, i) => (
              <p key={i} className="text-[14.5px] leading-relaxed text-graphite">
                {text}
              </p>
            ))}
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="mt-12 grid gap-5 md:grid-cols-2">
            <JourneyCard
              label="How search used to work"
              note="One surface. One path. Rankings were the whole game."
              stops={OLD_JOURNEY}
              muted
            />
            <JourneyCard
              label="How buyers search now"
              note="Many surfaces. Answers before clicks. Visibility is the whole game."
              stops={NEW_JOURNEY}
            />
          </div>
        </Reveal>

        <Reveal delay={140}>
          <div className="mx-auto mt-14 grid max-w-4xl gap-8 text-center md:grid-cols-3">
            {STATS.map((stat) => (
              <div key={stat.label}>
                <p className="font-heading text-[44px] font-bold tabular-nums leading-none tracking-[-0.02em]">
                  {stat.prefix && (
                    <span className="mr-1.5 text-[24px] text-graphite">
                      {stat.prefix.trim()}
                    </span>
                  )}
                  {stat.value}
                  <span className="text-indigo">{stat.suffix}</span>
                </p>
                <p className="mx-auto mt-3 max-w-[30ch] text-[13px] leading-relaxed text-graphite">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-center text-[11px] font-medium uppercase tracking-[0.14em] text-graphite/70">
            Sources verified and linked at launch
          </p>
        </Reveal>

        <Reveal delay={160}>
          <div className="mx-auto mt-14 max-w-2xl text-center">
            <p className="font-heading text-[24px] font-bold tracking-[-0.01em]">
              You cannot fix what you cannot see.
            </p>
            <p className="mt-3 text-[14.5px] leading-relaxed text-graphite">
              The visibility review maps all of it out for you, surface by
              surface, so you know exactly where buyers find your business and
              where they find your competitors instead.
            </p>
            <div className="mt-7 flex justify-center">
              <CtaLink href="/#visibility-review">Request a Visibility Review</CtaLink>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function JourneyCard({
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
      className={`rounded-3xl border border-line bg-surface p-7 ${
        muted ? "opacity-70" : ""
      }`}
    >
      <p className="font-heading text-[15px] font-bold">{label}</p>
      <div className="mt-4 flex flex-wrap items-center gap-x-2 gap-y-3">
        {stops.map((stop, i) => (
          <span key={stop} className="flex items-center gap-2">
            <span
              className={`rounded-full px-4 py-2 text-[12.5px] font-medium ${
                !muted && i === stops.length - 1
                  ? "bg-indigo text-white"
                  : "border border-line bg-ivory text-ink/80"
              }`}
            >
              {stop}
            </span>
            {i < stops.length - 1 && (
              <span aria-hidden className="h-px w-4 bg-line" />
            )}
          </span>
        ))}
      </div>
      <p className="mt-4 text-[12.5px] text-graphite">{note}</p>
    </div>
  );
}
