import Reveal from "@/components/motion/Reveal";
import { SectionHead } from "@/components/ui";
import { WHY } from "@/lib/content";

/* Reference-style 2x2 grid: each card gets a glowing gradient icon tile, a
   soft per-card accent tint, and a floating corner mini-badge. Background
   stays the site's lilac wash. */

/* ---- icon tiles (drawn glyphs on gradient tiles, like the reference) ---- */

function TileFrame({
  gradient,
  children,
}: {
  gradient: string;
  children: React.ReactNode;
}) {
  return (
    <span
      className={`relative grid size-14 shrink-0 place-items-center rounded-2xl text-white shadow-[0_10px_26px_rgba(99,91,255,0.35)] ${gradient}`}
    >
      {children}
    </span>
  );
}

/* AI-native — chip with sparkle */
function AiTile() {
  return (
    <TileFrame gradient="bg-gradient-to-br from-indigo to-violet-500">
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" aria-hidden>
        <rect x="5" y="5" width="14" height="14" rx="3" stroke="#fff" strokeWidth="1.6" />
        <path d="M9 2.5v2M15 2.5v2M9 19.5v2M15 19.5v2M2.5 9h2M2.5 15h2M19.5 9h2M19.5 15h2" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" />
        <path d="M12 8.2l1 2.6 2.6 1-2.6 1-1 2.6-1-2.6-2.6-1 2.6-1 1-2.6Z" fill="#DFFF52" />
      </svg>
    </TileFrame>
  );
}

/* Senior strategists — person with strategy path */
function StrategistTile() {
  return (
    <TileFrame gradient="bg-gradient-to-br from-[#8F7BFF] to-indigo">
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" aria-hidden>
        <circle cx="9.5" cy="8" r="3" stroke="#fff" strokeWidth="1.6" />
        <path d="M4.5 19.5c.6-3 2.6-4.7 5-4.7s4.4 1.7 5 4.7" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" />
        <path d="M15.5 5.5h3.2c.7 0 .9.9.3 1.3l-2.8 1.9c-.6.4-.4 1.3.3 1.3h3" stroke="#DFFF52" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="2.5 2" />
      </svg>
    </TileFrame>
  );
}

/* Close scrutiny — report with magnifier */
function ScrutinyTile() {
  return (
    <TileFrame gradient="bg-gradient-to-br from-[#4CC9F0] to-indigo">
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" aria-hidden>
        <rect x="4" y="3.5" width="12" height="15" rx="2" stroke="#fff" strokeWidth="1.6" />
        <path d="M7 7.5h6M7 10.5h4" stroke="#fff" strokeWidth="1.4" strokeLinecap="round" />
        <circle cx="15.5" cy="15.5" r="3.4" stroke="#DFFF52" strokeWidth="1.6" />
        <path d="m18 18 2.5 2.5" stroke="#DFFF52" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    </TileFrame>
  );
}

/* No rigid contracts — calendar with open lock */
function ContractTile() {
  return (
    <TileFrame gradient="bg-gradient-to-br from-indigo to-[#4A43D9]">
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" aria-hidden>
        <rect x="3.5" y="5" width="14" height="14" rx="2.5" stroke="#fff" strokeWidth="1.6" />
        <path d="M3.5 9.5h14M7.5 3v3.5M13.5 3v3.5" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" />
        <rect x="15" y="13.5" width="6.5" height="5.5" rx="1.4" fill="#DFFF52" />
        <path d="M16.6 13.5v-1.6a1.7 1.7 0 0 1 3.2-.8" stroke="#DFFF52" strokeWidth="1.5" strokeLinecap="round" fill="none" />
      </svg>
    </TileFrame>
  );
}

/* ---- floating corner mini-badges, like the reference's small tiles ------ */

function MiniBadge({
  className,
  children,
}: {
  className: string;
  children: React.ReactNode;
}) {
  return (
    <span
      aria-hidden
      className={`absolute z-10 hidden items-center gap-1 rounded-xl border border-line bg-surface px-2.5 py-1.5 shadow-[0_8px_20px_rgba(11,13,18,0.12)] lg:flex ${className}`}
    >
      {children}
    </span>
  );
}

function MiniBars() {
  return (
    <span className="flex items-end gap-0.5">
      {[5, 8, 11, 14].map((h, i) => (
        <span
          key={i}
          className={`w-1 rounded-sm ${i === 3 ? "bg-indigo" : "bg-indigo/40"}`}
          style={{ height: `${h}px` }}
        />
      ))}
    </span>
  );
}

function MiniSpark() {
  return (
    <svg width="34" height="14" viewBox="0 0 34 14" fill="none" aria-hidden>
      <path d="M1 12c5-1 7-4 10-5s6 1 9-2 8-3 13-4" stroke="#635BFF" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

/* ------------------------------------------------------------------------ */

const CARDS = [
  {
    tile: <AiTile />,
    accent: "from-indigo/12",
    edge: "hover:border-indigo/40",
  },
  {
    tile: <StrategistTile />,
    accent: "from-[#8F7BFF]/15",
    edge: "hover:border-[#8F7BFF]/50",
  },
  {
    tile: <ScrutinyTile />,
    accent: "from-[#4CC9F0]/15",
    edge: "hover:border-[#4CC9F0]/50",
  },
  {
    tile: <ContractTile />,
    accent: "from-citron/25",
    edge: "hover:border-citron-deep/60",
  },
];

export default function WhySearchNexio() {
  return (
    <section className="overflow-x-clip wash-lilac-full py-16 md:py-24">
      <div className="relative mx-auto max-w-6xl px-6">
        <Reveal>
          <SectionHead
            badge="Why Us"
            title="Why SearchNexio"
            sub="The short version: we are a search visibility agency that works the way high-trust businesses need their partners to work."
          />
        </Reveal>

        <div className="relative mt-12">
          {/* floating mini-badges around the grid, reference-style garnish */}
          <MiniBadge className="-left-6 -top-5 -rotate-6">
            <MiniBars />
          </MiniBadge>
          <MiniBadge className="-right-7 top-24 rotate-6">
            <MiniSpark />
          </MiniBadge>
          <MiniBadge className="-left-8 bottom-16 rotate-3">
            <span className="text-[10px] font-bold text-indigo">30</span>
            <span className="text-[9px] font-semibold uppercase text-graphite">days</span>
          </MiniBadge>
          <MiniBadge className="-right-6 -bottom-5 -rotate-3">
            <span className="grid size-4 place-items-center rounded-full bg-citron">
              <svg width="9" height="9" viewBox="0 0 12 12" fill="none" aria-hidden>
                <path d="m2.5 6.5 2.5 2.5 4.5-5" stroke="#0B0D12" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
            <span className="text-[9.5px] font-bold text-ink">verified</span>
          </MiniBadge>

          <div className="grid gap-5 md:grid-cols-2">
            {WHY.map((item, i) => {
              const card = CARDS[i];
              return (
                <Reveal
                  key={item.title}
                  variant={i % 2 === 0 ? "left" : "right"}
                  className="h-full"
                >
                  <div
                    className={`group relative h-full overflow-hidden rounded-3xl border border-line bg-surface p-7 transition-all duration-300 ease-soft hover:-translate-y-1 hover:shadow-[0_18px_46px_rgba(11,13,18,0.1)] ${card.edge}`}
                  >
                    {/* per-card accent tint falling from the top corner */}
                    <span
                      aria-hidden
                      className={`pointer-events-none absolute -left-10 -top-10 size-48 rounded-full bg-gradient-to-br ${card.accent} to-transparent blur-2xl`}
                    />
                    <div className="relative flex items-start gap-5">
                      <span className="reveal-item [transition-delay:120ms]">
                        {card.tile}
                      </span>
                      <div>
                        <h3 className="reveal-item font-heading text-[18px] font-bold tracking-[-0.01em] [transition-delay:180ms]">
                          {item.title}
                        </h3>
                        <p className="reveal-item mt-2.5 text-[13.5px] leading-relaxed text-graphite [transition-delay:250ms]">
                          {item.body}
                        </p>
                      </div>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
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
