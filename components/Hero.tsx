import { Badge, CtaLink } from "@/components/ui";
import { SURFACES } from "@/lib/content";

/* Sasico-style hero: centered stack over a faint grid with citron corner
   washes, then the full-width product mockup — our Visibility Report
   dashboard (illustrative UI, not client claims). */

const KPIS = [
  { label: "Visibility Score", value: "68/100", delta: "+12 this quarter", hot: true },
  { label: "Organic Leads", value: "1,284", delta: "+64%" },
  { label: "AI Citations", value: "312", delta: "+9.2×" },
  { label: "Map Views", value: "45.2k", delta: "+38%" },
];

const SURFACE_BARS = [
  { label: "Google", pct: 82 },
  { label: "Maps", pct: 74 },
  { label: "AI Overviews", pct: 31, gap: true },
  { label: "ChatGPT", pct: 18, gap: true },
];

const SIDEBAR = ["Overview", "Surfaces", "Rankings", "AI Citations", "Reports", "Settings"];

/* Sasico's ambient garnish: tiny ink dots, thin arcs, and indigo plus marks
   scattered at the hero edges. Decoration only, hidden on small screens. */
function HeroDecor() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 hidden lg:block">
      <span className="absolute left-[7%] top-[24%] size-1.5 rounded-full bg-ink/40" />
      <span className="absolute left-[13%] top-[48%] size-1 rounded-full bg-ink/25" />
      <span className="absolute left-[18%] top-[16%] size-1 rounded-full bg-indigo/40" />
      <span className="absolute right-[9%] top-[27%] size-1.5 rounded-full bg-ink/40" />
      <span className="absolute right-[15%] top-[50%] size-1 rounded-full bg-ink/25" />
      <span className="absolute right-[19%] top-[14%] size-1 rounded-full bg-indigo/40" />
      <span className="absolute left-[21%] top-[36%] font-heading text-[17px] font-light text-indigo/50">+</span>
      <span className="absolute right-[22%] top-[40%] font-heading text-[13px] font-light text-indigo/40">+</span>
      <span className="absolute -left-28 top-[10%] size-72 rounded-full border border-ink/5" />
      <span className="absolute -right-32 top-[26%] size-80 rounded-full border border-indigo/10" />
    </div>
  );
}

/* Floating proof chips that overlap the dashboard frame, Sasico-style. */
function FloatChips() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 hidden md:block">
      <div className="absolute -top-5 right-6 flex rotate-2 items-center gap-2 rounded-full border border-line bg-surface py-2 pl-2.5 pr-4 shadow-[0_10px_30px_rgba(11,13,18,0.14)]">
        <span className="grid size-6 place-items-center rounded-full bg-lilac text-indigo">
          <svg width="11" height="11" viewBox="0 0 12 12" fill="none">
            <path
              d="M6 10V2m0 0L2.5 5.5M6 2l3.5 3.5"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
        <span className="text-[12px] font-semibold text-ink">+64% organic leads</span>
      </div>
      <div className="absolute -left-4 bottom-10 flex -rotate-2 items-center gap-2 rounded-full border border-line bg-surface py-2 pl-3 pr-4 shadow-[0_10px_30px_rgba(11,13,18,0.14)]">
        <span className="size-2 rounded-full bg-warn" />
        <span className="text-[12px] font-semibold text-ink">2 AI surfaces need attention</span>
      </div>
    </div>
  );
}

function Dashboard() {
  return (
    <div className="rounded-3xl border border-line bg-surface p-2 shadow-[0_30px_80px_rgba(11,13,18,0.12)]">
      <div className="grid overflow-hidden rounded-2xl bg-ivory/60 md:grid-cols-[200px_1fr]">
        {/* sidebar */}
        <aside className="hidden flex-col gap-1 border-r border-line bg-surface p-4 md:flex">
          <p className="mb-3 flex items-center gap-2 font-heading text-[15px] font-bold">
            <span aria-hidden className="flex items-center">
              <span className="size-3.5 rounded-full bg-ink" />
              <span className="-ml-1 size-3.5 rounded-full bg-indigo mix-blend-multiply" />
            </span>
            SearchNexio
          </p>
          {SIDEBAR.map((item, i) => (
            <span
              key={item}
              className={`rounded-lg px-3 py-2 text-[12.5px] font-medium ${
                i === 1 ? "bg-ink text-white" : "text-graphite"
              }`}
            >
              {item}
            </span>
          ))}
          <div className="mt-4 rounded-xl bg-lilac p-3">
            <p className="text-[11.5px] font-semibold">Full-Surface Review</p>
            <p className="mt-1 text-[10.5px] text-graphite">
              Map every surface buyers check
            </p>
          </div>
        </aside>

        {/* main panel */}
        <div className="p-5">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-heading text-[16px] font-bold">Visibility Report</p>
              <p className="text-[11px] text-graphite">Monday, July 2026</p>
            </div>
            <span className="rounded-full bg-lilac px-3 py-1 text-[10.5px] font-semibold tracking-[0.06em] text-indigo">
              LIVE SCAN
            </span>
          </div>

          <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {KPIS.map((kpi) => (
              <div
                key={kpi.label}
                className={`rounded-2xl p-4 ${
                  kpi.hot ? "bg-lilac" : "border border-line bg-surface"
                }`}
              >
                <p className="text-[11px] font-medium text-ink/60">{kpi.label}</p>
                <p className="mt-1.5 font-heading text-[22px] font-bold tabular-nums leading-none">
                  {kpi.value}
                </p>
                <p className="mt-1.5 text-[10.5px] font-medium text-ink/55">{kpi.delta}</p>
              </div>
            ))}
          </div>

          <div className="mt-3 grid gap-3 lg:grid-cols-[1.2fr_1fr]">
            {/* surface coverage bars */}
            <div className="rounded-2xl border border-line bg-surface p-4">
              <p className="text-[12px] font-semibold">Surface coverage</p>
              <ul className="mt-3 grid gap-2.5">
                {SURFACE_BARS.map((row) => (
                  <li key={row.label} className="flex items-center gap-2.5 text-[11.5px]">
                    <span className="w-[86px] font-medium text-ink/70">{row.label}</span>
                    <span className="h-2.5 flex-1 overflow-hidden rounded-full bg-ivory">
                      <span
                        className={`block h-full rounded-full ${
                          row.gap ? "bg-warn/80" : "bg-indigo"
                        }`}
                        style={{ width: `${row.pct}%` }}
                      />
                    </span>
                    <span
                      className={`w-7 text-right tabular-nums ${
                        row.gap ? "font-semibold text-warn" : "text-graphite"
                      }`}
                    >
                      {row.pct}
                    </span>
                  </li>
                ))}
              </ul>
              <p className="mt-3 text-[10.5px] text-graphite">
                Red rows are where buyers cannot find you yet.
              </p>
            </div>

            {/* leads growth area chart */}
            <div className="rounded-2xl border border-line bg-surface p-4">
              <p className="text-[12px] font-semibold">Leads growth</p>
              <svg
                className="mt-3 h-[104px] w-full"
                viewBox="0 0 300 100"
                preserveAspectRatio="none"
                aria-hidden
              >
                <path
                  d="M0,84 C30,80 55,74 85,66 C120,57 150,52 185,40 C220,28 260,20 300,10 L300,100 L0,100 Z"
                  fill="#ECEAFF"
                  opacity="0.55"
                />
                <path
                  d="M0,84 C30,80 55,74 85,66 C120,57 150,52 185,40 C220,28 260,20 300,10"
                  fill="none"
                  stroke="#635BFF"
                  strokeWidth="2.5"
                />
              </svg>
              <div className="mt-1 flex justify-between text-[10px] text-graphite">
                <span>Jan</span>
                <span>Mar</span>
                <span>May</span>
                <span>Jul</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-[104px]">
      {/* backdrop: faint grid behind the headline, citron washes at corners */}
      <div aria-hidden className="absolute inset-x-0 top-0 h-[720px] wash-lilac" />
      <div
        aria-hidden
        className="grid-pattern absolute left-1/2 top-16 h-[440px] w-[680px] -translate-x-1/2 [mask-image:radial-gradient(ellipse_70%_70%_at_50%_40%,#000_35%,transparent_75%)]"
      />

      <HeroDecor />

      <div className="relative mx-auto max-w-5xl px-6 pt-10 text-center">
        <Badge>Search Visibility Agency</Badge>
        <h1 className="mx-auto mt-6 max-w-4xl font-heading text-[clamp(2.8rem,6.4vw,5.1rem)] font-bold leading-[1.06] tracking-[-0.025em]">
          Get Found Everywhere Buyers Search
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-[16.5px] leading-relaxed text-graphite">
          Your buyers now decide on {SURFACES.slice(0, 3).join(", ")}, and{" "}
          {SURFACES[3]} before they ever click. We make sure you show up in
          every one of those moments, then turn that visibility into leads and
          revenue.
        </p>

        <div className="mx-auto mt-9 flex flex-wrap items-center justify-center gap-4">
          <CtaLink href="/#visibility-review">Request a Visibility Review</CtaLink>
          <CtaLink href="/case-studies" variant="ghost" disabled>
            View case studies
          </CtaLink>
        </div>
        <p className="mt-6 text-[13px] text-graphite">
          Built for healthcare, finance, SaaS, and multi-location businesses.
        </p>
      </div>

      <div className="relative mx-auto mt-14 max-w-6xl px-6 pb-6">
        <div className="relative">
          <Dashboard />
          <FloatChips />
        </div>
      </div>
    </section>
  );
}
