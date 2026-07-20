import Reveal from "@/components/motion/Reveal";
import { CtaLink, SectionHead } from "@/components/ui";
import { SearchIcon, ListIcon, CursorIcon } from "@/components/icons";
import { GoogleG, MapsPin, SparkleAI, ChatGPTMark } from "@/components/brand-icons";
import { STATS } from "@/lib/content";

const PARAGRAPHS = [
  "Right now, someone is looking for exactly what you sell. They ask Google. They check the map. They read the AI summary at the top of the screen. Or they ask ChatGPT which vendor to trust.",
  "If you show up in those specific moments, you make the shortlist. If you do not, the choice gets made without you, and you never even know you lost the lead.",
  "This is the gap traditional SEO misses. Some companies are completely invisible on these new platforms. Others rank well for keywords but watch their leads stall out, because ranking on one platform no longer means you are being found on the rest. Both issues come from the same basic mistake: optimizing for a single channel, and focusing on traffic numbers instead of revenue.",
];

/* Sasico treatment: a lilac-washed band with centered head, the journey
   comparison as hub-diagram cards, and the stats as big bold numbers. */
export default function ProblemSection() {
  return (
    <section className="wash-lilac-full overflow-x-clip pt-16 pb-10 md:pb-12 md:pt-24">
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

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          <Reveal variant="left" className="h-full">
            <JourneyOld />
          </Reveal>
          <Reveal variant="right" className="h-full">
            <JourneyNew />
          </Reveal>
        </div>

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

/* Shared shell for the two journey diagram cards: white card with a soft
   lilac tint falling from the top, heading + note, then the hub-and-pills
   tree diagram. */
function JourneyShell({
  label,
  note,
  children,
}: {
  label: string;
  note: string;
  children: React.ReactNode;
}) {
  return (
    <div className="relative h-full overflow-hidden rounded-[2rem] border border-line bg-surface p-8 shadow-[0_20px_50px_rgba(11,13,18,0.06)]">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-lilac/60 to-transparent"
      />
      <div className="relative">
        <h3 className="reveal-item font-heading text-[21px] font-bold tracking-[-0.01em] [transition-delay:100ms]">
          {label}
        </h3>
        <p className="reveal-item mt-2 text-[13.5px] text-graphite [transition-delay:170ms]">
          {note}
        </p>
        {children}
      </div>
    </div>
  );
}

/* Hub circle floating above the connector tree. */
function Hub({ tone, children }: { tone: "white" | "indigo"; children: React.ReactNode }) {
  return (
    <div className="relative z-10 mx-auto w-fit">
      <span
        aria-hidden
        className="absolute -inset-2.5 rounded-full bg-lilac/70"
      />
      <span
        className={`relative grid size-16 place-items-center rounded-full shadow-[0_10px_26px_rgba(11,13,18,0.14)] ${
          tone === "indigo" ? "bg-indigo text-white" : "bg-white"
        }`}
      >
        {children}
      </span>
    </div>
  );
}

/* Rounded-elbow connector lines from the hub down to each pill. */
function Connectors({ paths, width }: { paths: string[]; width: number }) {
  return (
    <svg
      aria-hidden
      className="mx-auto -mt-1 hidden h-14 w-full md:block"
      viewBox={`0 0 ${width} 56`}
      preserveAspectRatio="none"
      fill="none"
    >
      {paths.map((d) => (
        <path
          key={d}
          d={d}
          stroke="rgba(99,91,255,0.5)"
          strokeWidth="2"
          strokeLinecap="round"
        />
      ))}
    </svg>
  );
}

function Pill({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <span className="inline-flex items-center gap-2 whitespace-nowrap rounded-full border border-line bg-surface px-4 py-2.5 text-[13px] font-semibold shadow-[0_6px_18px_rgba(11,13,18,0.07)]">
      {icon}
      {label}
    </span>
  );
}

function JourneyOld() {
  return (
    <JourneyShell
      label="How search used to work"
      note="One surface. One path. Rankings were the whole game."
    >
      <div className="reveal-item mt-8 [transition-delay:240ms]">
        <Hub tone="white">
          <GoogleG size={26} />
        </Hub>
        <Connectors
          width={560}
          paths={[
            "M280,0 V4 Q280,16 264,16 H112 Q96,16 96,28 V56",
            "M280,0 V56",
            "M280,0 V4 Q280,16 296,16 H448 Q464,16 464,28 V56",
          ]}
        />
        <div className="mt-4 flex flex-wrap items-center justify-center gap-x-3 gap-y-3 md:mt-0 md:flex-nowrap md:justify-between">
          <Pill icon={<span className="text-indigo"><SearchIcon /></span>} label="Google query" />
          <span aria-hidden className="hidden text-graphite/60 md:inline">&rarr;</span>
          <Pill icon={<span className="text-indigo"><ListIcon /></span>} label="10 blue links" />
          <span aria-hidden className="hidden text-graphite/60 md:inline">&rarr;</span>
          <Pill icon={<span className="text-indigo"><CursorIcon /></span>} label="Click to your site" />
        </div>
      </div>
    </JourneyShell>
  );
}

function JourneyNew() {
  return (
    <JourneyShell
      label="How buyers search now"
      note="Many surfaces. Answers before clicks. Visibility is the whole game."
    >
      <div className="reveal-item mt-8 [transition-delay:240ms]">
        <Hub tone="indigo">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
            <path
              d="M5 12h14m0 0-6-6m6 6-6 6"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Hub>
        <Connectors
          width={640}
          paths={[
            "M320,0 V4 Q320,16 304,16 H92 Q76,16 76,28 V56",
            "M320,0 V4 Q320,16 312,16 H254 Q238,16 238,28 V56",
            "M320,0 V4 Q320,16 328,16 H386 Q402,16 402,28 V56",
            "M320,0 V4 Q320,16 336,16 H548 Q564,16 564,28 V56",
          ]}
        />
        <div className="mt-4 flex flex-wrap items-center justify-center gap-x-3 gap-y-3 md:mt-0 md:flex-nowrap md:justify-between">
          <Pill icon={<GoogleG />} label="Google" />
          <Pill icon={<MapsPin />} label="Maps" />
          <Pill icon={<SparkleAI />} label="AI Overviews" />
          <Pill icon={<ChatGPTMark />} label="ChatGPT" />
        </div>
        <div className="mt-7 flex justify-center">
          <a
            href="/#visibility-review"
            className="group inline-flex items-center gap-2 rounded-full bg-citron px-6 py-3 text-[14px] font-semibold text-ink-solid transition-colors duration-200 hover:bg-citron-deep"
          >
            Be visible everywhere
            <span
              aria-hidden
              className="transition-transform duration-200 group-hover:translate-x-0.5"
            >
              &rarr;
            </span>
          </a>
        </div>
      </div>
    </JourneyShell>
  );
}
