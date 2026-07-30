import Reveal from "@/components/motion/Reveal";

/* How GEO builds authority: intro copy + a citation source map connecting the
   brand to publications, reviews, experts and directories. The connections
   animate in gently as the section enters view (drawn via .journey-line
   style stroke reveal on the Reveal wrapper). */

const paras = [
  "Generative platforms can draw information from many parts of the web. A strong GEO program therefore improves both owned content and the external evidence supporting the brand.",
  "Relevant sources can include editorial publications, review platforms, comparison pages, expert profiles, associations, partner websites, research reports, podcasts, directories and selected communities.",
  "Search Nexio compares these sources with monitored prompts and competitors. This helps determine whether the opportunity requires stronger website content, clearer entity information, broader third-party validation or a combination of all three.",
];

const NODES = [
  { label: "Publications", x: 88, y: 40 },
  { label: "Reviews", x: 300, y: 26 },
  { label: "Experts", x: 60, y: 150 },
  { label: "Directories", x: 320, y: 158 },
  { label: "Comparisons", x: 96, y: 250 },
  { label: "Communities", x: 300, y: 262 },
];
const CX = 200;
const CY = 150;

export default function GeoAuthority() {
  return (
    <section className="overflow-x-clip wash-lilac-full py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <Reveal variant="left">
            <h2 className="font-heading text-[clamp(1.9rem,3.6vw,2.6rem)] font-bold leading-[1.12] tracking-[-0.02em]">
              How GEO builds authority
            </h2>
            <div className="mt-6 grid gap-4">
              {paras.map((p, i) => (
                <p key={i} className="text-[15px] leading-relaxed text-graphite">{p}</p>
              ))}
            </div>
          </Reveal>

          {/* citation source map */}
          <Reveal variant="right" delay={80}>
            <div className="relative mx-auto aspect-square w-full max-w-md rounded-3xl border border-line bg-surface p-4">
              <svg viewBox="0 0 400 320" className="size-full" fill="none" aria-hidden>
                {/* connections from the brand core to each source node */}
                {NODES.map((n, i) => (
                  <path
                    key={n.label}
                    d={`M${CX},${CY} L${n.x},${n.y}`}
                    stroke="var(--color-indigo)"
                    strokeWidth="1.5"
                    className="geo-conn opacity-40"
                    style={{ transitionDelay: `${i * 120}ms` }}
                    pathLength={1}
                  />
                ))}
              </svg>

              {/* the source nodes */}
              {NODES.map((n) => (
                <span
                  key={n.label}
                  className="absolute inline-flex -translate-x-1/2 -translate-y-1/2 items-center gap-1.5 rounded-full border border-line bg-ivory px-2.5 py-1 text-[11.5px] font-semibold shadow-[0_4px_12px_rgba(11,13,18,0.06)]"
                  style={{ left: `${(n.x / 400) * 100}%`, top: `${(n.y / 320) * 100}%` }}
                >
                  <span className="size-1.5 rounded-full bg-indigo" />
                  {n.label}
                </span>
              ))}

              {/* the brand core */}
              <span
                className="absolute grid size-16 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-2xl bg-gradient-to-br from-indigo to-[#4A43D9] text-center text-[10px] font-bold leading-tight text-white shadow-[0_12px_28px_rgba(99,91,255,0.4)]"
                style={{ left: `${(CX / 400) * 100}%`, top: `${(CY / 320) * 100}%` }}
              >
                Your<br />brand
              </span>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
