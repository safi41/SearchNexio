import Reveal from "@/components/motion/Reveal";
import { SectionHead } from "@/components/ui";
import { WHY } from "@/lib/content";

/* Reference layout: four feature cards arranged around a central glowing
   "connected system" hub, with connector lines linking each card to the
   core. Two cards left, two right; the hub sits between them. Background
   stays the site's lilac wash. */

/* ---- gradient icon tiles ------------------------------------------------ */

function TileFrame({
  gradient,
  children,
}: {
  gradient: string;
  children: React.ReactNode;
}) {
  return (
    <span
      className={`relative grid size-12 shrink-0 place-items-center rounded-2xl text-white shadow-[0_10px_26px_rgba(99,91,255,0.35)] ${gradient}`}
    >
      {children}
    </span>
  );
}

function AiTile() {
  return (
    <TileFrame gradient="bg-gradient-to-br from-indigo to-violet-500">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
        <rect x="5" y="5" width="14" height="14" rx="3" stroke="#fff" strokeWidth="1.6" />
        <path d="M9 2.5v2M15 2.5v2M9 19.5v2M15 19.5v2M2.5 9h2M2.5 15h2M19.5 9h2M19.5 15h2" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" />
        <path d="M12 8.2l1 2.6 2.6 1-2.6 1-1 2.6-1-2.6-2.6-1 2.6-1 1-2.6Z" fill="#DFFF52" />
      </svg>
    </TileFrame>
  );
}

function StrategistTile() {
  return (
    <TileFrame gradient="bg-gradient-to-br from-[#8F7BFF] to-indigo">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
        <circle cx="9.5" cy="8" r="3" stroke="#fff" strokeWidth="1.6" />
        <path d="M4.5 19.5c.6-3 2.6-4.7 5-4.7s4.4 1.7 5 4.7" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" />
        <path d="M15.5 5.5h3.2c.7 0 .9.9.3 1.3l-2.8 1.9c-.6.4-.4 1.3.3 1.3h3" stroke="#DFFF52" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="2.5 2" />
      </svg>
    </TileFrame>
  );
}

function ScrutinyTile() {
  return (
    <TileFrame gradient="bg-gradient-to-br from-[#4CC9F0] to-indigo">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
        <rect x="4" y="3.5" width="12" height="15" rx="2" stroke="#fff" strokeWidth="1.6" />
        <path d="M7 7.5h6M7 10.5h4" stroke="#fff" strokeWidth="1.4" strokeLinecap="round" />
        <circle cx="15.5" cy="15.5" r="3.4" stroke="#DFFF52" strokeWidth="1.6" />
        <path d="m18 18 2.5 2.5" stroke="#DFFF52" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    </TileFrame>
  );
}

function ContractTile() {
  return (
    <TileFrame gradient="bg-gradient-to-br from-indigo to-[#4A43D9]">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
        <rect x="3.5" y="5" width="14" height="14" rx="2.5" stroke="#fff" strokeWidth="1.6" />
        <path d="M3.5 9.5h14M7.5 3v3.5M13.5 3v3.5" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" />
        <rect x="15" y="13.5" width="6.5" height="5.5" rx="1.4" fill="#DFFF52" />
        <path d="M16.6 13.5v-1.6a1.7 1.7 0 0 1 3.2-.8" stroke="#DFFF52" strokeWidth="1.5" strokeLinecap="round" fill="none" />
      </svg>
    </TileFrame>
  );
}

const TILES = [<AiTile key="0" />, <StrategistTile key="1" />, <ScrutinyTile key="2" />, <ContractTile key="3" />];
const EDGES = [
  "hover:border-indigo/40",
  "hover:border-[#8F7BFF]/50",
  "hover:border-[#4CC9F0]/50",
  "hover:border-citron-deep/60",
];
const ACCENTS = ["from-indigo/12", "from-[#8F7BFF]/15", "from-[#4CC9F0]/15", "from-citron/25"];

/* ---- the central connected-system hub ---------------------------------- */

function CoreHub() {
  return (
    <div className="relative grid size-full place-items-center">
      {/* soft glow behind the core */}
      <span aria-hidden className="absolute size-44 rounded-full bg-indigo/25 blur-3xl" />
      <span aria-hidden className="absolute size-28 rounded-full bg-violet-500/25 blur-2xl" />
      {/* orbit rings */}
      <span aria-hidden className="absolute size-40 rounded-full border border-indigo/20" />
      <span aria-hidden className="absolute size-28 rounded-full border border-indigo/30" />
      {/* the chip core */}
      <span className="relative grid size-20 place-items-center rounded-[1.4rem] bg-gradient-to-br from-indigo to-[#4A43D9] shadow-[0_16px_40px_rgba(99,91,255,0.5)]">
        <span aria-hidden className="absolute inset-1.5 rounded-[1.1rem] border border-white/25" />
        <span className="flex items-center">
          <span className="size-4 rounded-full bg-white" />
          <span className="-ml-1.5 size-4 rounded-full bg-citron mix-blend-screen" />
        </span>
        {/* corner pins, like a processor */}
        {["-top-1 left-1/2 -translate-x-1/2 h-2 w-0.5", "-bottom-1 left-1/2 -translate-x-1/2 h-2 w-0.5", "top-1/2 -left-1 -translate-y-1/2 w-2 h-0.5", "top-1/2 -right-1 -translate-y-1/2 w-2 h-0.5"].map((p) => (
          <span key={p} aria-hidden className={`absolute rounded bg-indigo/60 ${p}`} />
        ))}
      </span>
    </div>
  );
}

/* ---- a single feature card --------------------------------------------- */

function WhyCard({
  title,
  body,
  index,
  align,
}: {
  title: string;
  body: string;
  index: number;
  align: "left" | "right";
}) {
  return (
    <div
      className={`group relative h-full overflow-hidden rounded-3xl border border-line bg-surface p-6 transition-all duration-300 ease-soft hover:-translate-y-1 hover:shadow-[0_18px_46px_rgba(11,13,18,0.1)] ${EDGES[index]}`}
    >
      <span
        aria-hidden
        className={`pointer-events-none absolute -top-10 size-44 rounded-full bg-gradient-to-br ${ACCENTS[index]} to-transparent blur-2xl ${
          align === "left" ? "-right-10" : "-left-10"
        }`}
      />
      <div className="relative flex items-start gap-4">
        <span className="reveal-item [transition-delay:120ms]">{TILES[index]}</span>
        <div>
          <h3 className="reveal-item font-heading text-[17px] font-bold leading-snug tracking-[-0.01em] [transition-delay:180ms]">
            {title}
          </h3>
          <p className="reveal-item mt-2 text-[13px] leading-relaxed text-graphite [transition-delay:250ms]">
            {body}
          </p>
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------------ */

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

        {/* desktop: cards flank a central hub with connector lines drawn
            behind them; mobile: a simple stacked grid */}
        <div className="relative mt-14">
          {/* connector lines behind everything (desktop only) */}
          <svg
            aria-hidden
            className="pointer-events-none absolute inset-0 hidden h-full w-full lg:block"
            preserveAspectRatio="none"
            viewBox="0 0 1000 420"
            fill="none"
          >
            {/* from hub center (500,210) to each card's inner edge */}
            {[
              "M500,210 C440,150 400,120 360,120",
              "M500,210 C560,150 600,120 640,120",
              "M500,210 C440,270 400,300 360,300",
              "M500,210 C560,270 600,300 640,300",
            ].map((d) => (
              <path key={d} d={d} stroke="var(--color-indigo)" strokeWidth="1.5" className="opacity-30" />
            ))}
          </svg>

          <div className="relative grid items-center gap-5 lg:grid-cols-[1fr_auto_1fr] lg:gap-8">
            {/* left column: cards 0 and 2 */}
            <div className="grid gap-5 lg:gap-24">
              <Reveal variant="left" className="h-full">
                <WhyCard title={WHY[0].title} body={WHY[0].body} index={0} align="left" />
              </Reveal>
              <Reveal variant="left" delay={80} className="h-full">
                <WhyCard title={WHY[2].title} body={WHY[2].body} index={2} align="left" />
              </Reveal>
            </div>

            {/* center hub (desktop) */}
            <Reveal delay={120} variant="scale" className="hidden lg:block">
              <div className="h-56 w-40">
                <CoreHub />
              </div>
            </Reveal>

            {/* right column: cards 1 and 3 */}
            <div className="grid gap-5 lg:gap-24">
              <Reveal variant="right" className="h-full">
                <WhyCard title={WHY[1].title} body={WHY[1].body} index={1} align="right" />
              </Reveal>
              <Reveal variant="right" delay={80} className="h-full">
                <WhyCard title={WHY[3].title} body={WHY[3].body} index={3} align="right" />
              </Reveal>
            </div>
          </div>
        </div>

        {/* Testimonial slot: single quote, no carousel; pending permission outreach. */}
        <Reveal delay={140}>
          <figure className="mx-auto mt-10 max-w-3xl rounded-3xl border border-dashed border-graphite/40 bg-surface/60 p-10 text-center">
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
