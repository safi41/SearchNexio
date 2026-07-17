import { CtaLink } from "@/components/ui";

/* The Aurora Curtain: five blurred gradient blobs drifting inside a skewed,
   clipped band. This is the page's single continuous animation; everything
   below the diagonal stays still. */
function Curtain() {
  return (
    <div
      aria-hidden
      className="absolute inset-x-0 top-0 h-[640px] origin-top-left overflow-hidden [transform:skewY(-7deg)] -mt-[80px]"
    >
      <div className="absolute -inset-x-[20%] -inset-y-[40%] blur-[52px] saturate-[1.15]">
        <i className="curtain-blob absolute left-[-8%] top-[-12%] block h-[70%] w-[60%] rounded-full bg-indigo animate-drift-a" />
        <i className="curtain-blob absolute right-[-6%] top-[-8%] block h-[65%] w-[55%] rounded-full bg-violet animate-drift-b" />
        <i className="curtain-blob absolute left-[28%] top-[22%] block h-[60%] w-[50%] rounded-full bg-lilac animate-drift-c" />
        <i className="curtain-blob absolute right-[10%] top-[34%] block h-[48%] w-[38%] rounded-full bg-citron opacity-85 animate-drift-a [animation-direction:alternate-reverse] [animation-duration:21s]" />
        <i className="curtain-blob absolute left-[6%] top-[40%] block h-[44%] w-[34%] rounded-full bg-sky opacity-50 animate-drift-b [animation-direction:alternate-reverse] [animation-duration:17s]" />
      </div>
    </div>
  );
}

/* Illustrative product UI, not client claims: the numbers here are a demo of
   the report we deliver, styled to red-flag the AI surfaces most businesses
   are missing. */
const REPORT_ROWS = [
  { label: "Google", value: 82, gap: false },
  { label: "Maps", value: 74, gap: false },
  { label: "AI Overviews", value: 31, gap: true },
  { label: "ChatGPT", value: 18, gap: true },
];

function ReportCard() {
  return (
    <div className="relative rotate-[1.5deg] rounded-2xl border border-line bg-surface p-5 shadow-[0_18px_44px_rgba(11,13,18,0.16)]">
      <div className="flex items-center justify-between">
        <h2 className="text-[13px] font-semibold tracking-[0.02em]">
          Visibility Report
        </h2>
        <span className="rounded-full bg-lilac px-2.5 py-1 text-[10.5px] font-semibold tracking-[0.08em] text-indigo">
          LIVE SCAN
        </span>
      </div>
      <p className="mt-3 flex items-baseline gap-2">
        <span className="text-[40px] font-[420] leading-none tracking-[-0.03em] tabular-nums">
          68<span className="text-[22px] text-graphite/70">/100</span>
        </span>
        <span className="text-xs text-graphite">overall visibility score</span>
      </p>
      <ul className="mt-4">
        {REPORT_ROWS.map((row) => (
          <li
            key={row.label}
            className="flex items-center gap-2.5 border-t border-line/70 py-2.5 text-[12.5px]"
          >
            <span
              className={`w-[104px] font-medium ${
                row.gap ? "text-ink" : "text-ink/70"
              }`}
            >
              {row.label}
            </span>
            <span className="h-1.5 flex-1 overflow-hidden rounded-full bg-ivory">
              <span
                className={`block h-full rounded-full ${
                  row.gap ? "bg-warn" : "bg-indigo"
                }`}
                style={{ width: `${row.value}%` }}
              />
            </span>
            <span
              className={`w-8 text-right tabular-nums ${
                row.gap ? "font-semibold text-warn" : "text-graphite"
              }`}
            >
              {row.value}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-[80px]">
      <Curtain />
      <div className="relative mx-auto grid max-w-6xl gap-12 px-6 pb-16 pt-14 lg:grid-cols-[1.15fr_0.85fr] lg:gap-12">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/90">
            Search Visibility Agency
          </p>
          <h1 className="mt-6 text-[clamp(2.6rem,5vw,3.875rem)] font-[340] leading-[1.04] tracking-[-0.035em]">
            <span className="text-white">Get found everywhere</span>
            <br />
            buyers search.
          </h1>
          <p className="mt-6 max-w-xl text-[17px] leading-relaxed text-[#3A3F4B]">
            Your buyers now decide on Google, Maps, AI Overviews, and ChatGPT
            before they ever click. We make sure you show up in every one of
            those moments, then turn that visibility into leads and revenue.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-x-7 gap-y-3">
            <CtaLink href="/#visibility-review">Request a Visibility Review</CtaLink>
            <CtaLink href="/case-studies" variant="ghost" disabled>
              View case studies
            </CtaLink>
          </div>
          <p className="mt-8 max-w-md text-[13px] leading-relaxed text-graphite">
            Built for healthcare, finance, SaaS, and multi-location businesses
            that need search visibility they can measure.
          </p>
        </div>
        <div className="hidden pt-6 lg:block">
          <ReportCard />
        </div>
      </div>
    </section>
  );
}
