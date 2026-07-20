import Link from "next/link";
import Reveal from "@/components/motion/Reveal";
import { Badge, CtaLink } from "@/components/ui";
import { GoogleG, MapsPin, SparkleAI, ChatGPTMark } from "@/components/brand-icons";
import { CASE_STUDIES, type CaseStudy } from "@/lib/content";

/* Results section as a product-hero: pitch on the left, a live "Visibility"
   app mockup on the right with floating result cards, mirroring the
   reference's phone + floating-UI composition. */

function ArrowUp({ className = "" }: { className?: string }) {
  return (
    <svg width="10" height="10" viewBox="0 0 12 12" fill="none" aria-hidden className={className}>
      <path
        d="M6 10V2m0 0L2.5 5.5M6 2l3.5 3.5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/* the phone: a Visibility Report app screen */
function PhoneMock() {
  const rows = [
    { icon: <GoogleG size={16} />, label: "Google", score: 82, ok: true },
    { icon: <MapsPin size={16} />, label: "Maps", score: 74, ok: true },
    { icon: <SparkleAI size={16} />, label: "AI Overviews", score: 63, ok: true },
    { icon: <ChatGPTMark size={16} />, label: "ChatGPT", score: 58, ok: true },
  ];
  return (
    <div className="relative w-[268px] rounded-[2.6rem] border border-line bg-surface p-2.5">
      <div className="overflow-hidden rounded-[2.1rem] bg-gradient-to-b from-lilac/50 to-surface">
        {/* status bar */}
        <div className="flex items-center justify-between px-5 pt-3 text-[10px] font-semibold text-ink/70">
          <span>9:41</span>
          <span aria-hidden className="flex items-center gap-1">
            <span className="size-1.5 rounded-full bg-ink/40" />
            <span className="size-1.5 rounded-full bg-ink/40" />
            <span className="h-2 w-4 rounded-sm border border-ink/40" />
          </span>
        </div>
        {/* app content */}
        <div className="px-4 pb-6 pt-3">
          <div className="flex items-center gap-2">
            <span aria-hidden className="flex items-center">
              <span className="size-4 rounded-full bg-ink" />
              <span className="-ml-1.5 size-4 rounded-full bg-indigo mix-blend-multiply" />
            </span>
            <span className="font-heading text-[13px] font-bold">SearchNexio</span>
            <span className="ml-auto rounded-full bg-lilac px-2 py-0.5 text-[8.5px] font-bold tracking-[0.06em] text-indigo">
              LIVE
            </span>
          </div>

          {/* headline score ring */}
          <div className="mt-4 grid place-items-center rounded-2xl bg-gradient-to-br from-indigo to-[#4A43D9] p-5 text-white shadow-[0_10px_24px_rgba(99,91,255,0.4)]">
            <p className="text-[10px] font-medium text-white/70">Visibility score</p>
            <p className="mt-0.5 font-heading text-[34px] font-bold leading-none">82</p>
            <p className="mt-1 inline-flex items-center gap-1 rounded-full bg-white/15 px-2 py-0.5 text-[9.5px] font-semibold">
              <ArrowUp className="size-2" /> +14 this quarter
            </p>
          </div>

          {/* surface list */}
          <div className="mt-3 grid gap-1.5">
            {rows.map((r) => (
              <div key={r.label} className="flex items-center gap-2 rounded-xl border border-line bg-surface px-2.5 py-2">
                <span className="grid size-6 place-items-center rounded-lg border border-line bg-ivory">
                  {r.icon}
                </span>
                <span className="w-[68px] text-[10.5px] font-semibold">{r.label}</span>
                <span className="h-1.5 flex-1 overflow-hidden rounded-full bg-ivory">
                  <span className="block h-full rounded-full bg-indigo" style={{ width: `${r.score}%` }} />
                </span>
                <span className="w-5 text-right text-[10.5px] font-bold tabular-nums text-indigo">
                  {r.score}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/* floating card 1 — a "surface flip" card, styled like the reference's swap */
function FlipCard() {
  return (
    <div className="w-60 rounded-2xl border border-line bg-surface/95 p-4 backdrop-blur">
      <div className="flex items-center justify-between rounded-xl border border-line bg-ivory/70 px-3 py-2.5">
        <span className="flex items-center gap-2">
          <span className="grid size-6 place-items-center rounded-full border border-line bg-surface">
            <span className="size-2 rounded-full bg-warn" />
          </span>
          <span className="text-[11px] font-semibold text-graphite">Was invisible on</span>
        </span>
        <span className="text-[12px] font-bold">AI search</span>
      </div>
      <div className="relative -my-1 flex justify-center">
        <span className="grid size-7 place-items-center rounded-full border border-line bg-surface">
          <ArrowUp className="rotate-180 text-indigo" />
        </span>
      </div>
      <div className="flex items-center justify-between rounded-xl border border-indigo/30 bg-indigo/5 px-3 py-2.5">
        <span className="flex items-center gap-2">
          <span className="grid size-6 place-items-center rounded-full bg-citron">
            <svg width="10" height="10" viewBox="0 0 12 12" fill="none" aria-hidden>
              <path d="m2.5 6.5 2.5 2.5 4.5-5" stroke="#0B0D12" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
          <span className="text-[11px] font-semibold text-graphite">Now cited on</span>
        </span>
        <span className="text-[12px] font-bold text-indigo">ChatGPT</span>
      </div>
    </div>
  );
}

/* floating card 2 — a "total leads" balance-style card */
function TotalCard() {
  return (
    <div className="w-56 rounded-2xl border border-line bg-surface/95 p-4 backdrop-blur">
      <p className="text-[10px] font-medium text-graphite">Leads this quarter</p>
      <p className="mt-1 flex items-end gap-1.5">
        <span className="font-heading text-[26px] font-bold leading-none tabular-nums">1,284</span>
        <span className="inline-flex items-center gap-0.5 pb-0.5 text-[10px] font-bold text-indigo">
          <ArrowUp className="size-2" /> +64%
        </span>
      </p>
      <div className="mt-3 grid grid-cols-3 gap-1.5">
        {["Organic", "Local", "AI"].map((l) => (
          <span key={l} className="rounded-lg border border-line bg-ivory/70 py-1.5 text-center text-[9.5px] font-semibold text-graphite">
            {l}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Results() {
  return (
    <section id="results" className="overflow-x-clip pb-16 pt-12 md:pb-24 md:pt-16">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid items-center gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:gap-8">
          {/* left: the pitch */}
          <div>
            <Reveal>
              <Badge>Results</Badge>
              <h2 className="mt-5 font-heading text-[clamp(2.1rem,4.2vw,3.25rem)] font-bold leading-[1.08] tracking-[-0.02em]">
                What this looks like when it works.
              </h2>
              <p className="mt-5 max-w-md text-[15.5px] leading-relaxed text-graphite">
                Real engagements, real numbers. We map where you are invisible,
                fix it surface by surface, and turn that visibility into leads
                and pipeline you can measure.
              </p>
            </Reveal>
            <Reveal delay={100}>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <CtaLink href="/#visibility-review">Request a Visibility Review</CtaLink>
                <CtaLink href="/case-studies" variant="ghost" disabled>
                  View all case studies
                </CtaLink>
              </div>
            </Reveal>
            {/* proof strip */}
            <Reveal delay={160}>
              <div className="mt-9 flex flex-wrap gap-x-8 gap-y-3">
                {[
                  { v: "+214%", l: "local inquiries" },
                  { v: "3.1×", l: "organic pipeline" },
                  { v: "9.2×", l: "AI citations" },
                ].map((s) => (
                  <div key={s.l}>
                    <p className="font-heading text-[22px] font-bold tabular-nums text-indigo">{s.v}</p>
                    <p className="text-[12px] text-graphite">{s.l}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          {/* right: the app mockup with floating cards */}
          <Reveal variant="right" delay={120}>
            <div className="relative mx-auto flex h-[560px] max-w-lg items-center justify-center">
              {/* phone sits slightly right so cards float off its left/bottom */}
              <div className="relative translate-x-6">
                <PhoneMock />
              </div>
              {/* floating cards, positioned to overlap the device edges like
                  the reference while keeping the screen readable */}
              <div className="absolute left-0 top-6 z-10 hidden animate-bob sm:block">
                <FlipCard />
              </div>
              <div className="absolute -right-2 bottom-4 z-10 hidden animate-bob [animation-delay:1.5s] sm:block">
                <TotalCard />
              </div>
            </div>
          </Reveal>
        </div>

        {/* keep the honesty line, quietly, below */}
        <Reveal delay={140}>
          <p className="mt-12 text-center text-[13.5px] text-graphite">
            More case studies, including the ones where results took longer than
            expected.{" "}
            <span className="font-semibold text-graphite/70">
              Real figures land as each client confirms.
            </span>
          </p>
        </Reveal>
      </div>
    </section>
  );
}

/* Tile shared with the /case-studies grid — unchanged so subpages keep their
   card layout. */
function Metric({ value }: { value: string }) {
  if (value.includes("[[")) {
    return (
      <span className="inline-block self-start rounded-full border border-dashed border-graphite/50 px-3.5 py-1.5 text-[10.5px] font-semibold uppercase tracking-[0.08em] text-graphite">
        metric pending case study
      </span>
    );
  }
  return (
    <span className="font-heading text-[30px] font-bold tabular-nums tracking-[-0.02em]">
      {value}
    </span>
  );
}

export function ResultTile({ study }: { study: CaseStudy }) {
  return (
    <Link
      href="/case-studies"
      className="group flex h-full flex-col gap-4 rounded-3xl border border-line bg-surface p-7 transition-all duration-300 ease-soft hover:-translate-y-1"
    >
      <div className="reveal-item relative -mx-1 h-14 overflow-hidden rounded-xl border border-line/70 bg-ivory/70 [transition-delay:60ms]">
        <svg
          className="absolute inset-x-2 bottom-1 h-10 w-[calc(100%-16px)]"
          viewBox="0 0 200 40"
          preserveAspectRatio="none"
          aria-hidden
        >
          <path
            d="M0,34 C25,32 45,28 70,24 C105,18 140,13 200,5 L200,40 L0,40 Z"
            className="fill-lilac"
            opacity="0.8"
          />
          <path
            d="M0,34 C25,32 45,28 70,24 C105,18 140,13 200,5"
            fill="none"
            stroke="#635BFF"
            strokeWidth="2"
          />
          <circle cx="200" cy="5" r="3" fill="#635BFF" />
        </svg>
      </div>
      <span className="self-start">
        <Badge>{study.industry}</Badge>
      </span>
      <span className="self-start">
        <Metric value={study.metric} />
      </span>
      <p className="font-heading text-[17px] font-bold leading-snug tracking-[-0.01em]">
        {study.summary.split(".")[0]}.
      </p>
      <p className="text-[13.5px] leading-relaxed text-graphite">
        {study.summary.split(".").slice(1).join(".").trim()}
      </p>
      <span className="mt-auto inline-flex items-center gap-2 pt-2 text-[13.5px] font-semibold text-ink">
        Read the case study
        <span
          aria-hidden
          className="grid size-5.5 place-items-center rounded-full bg-indigo text-white transition-transform duration-200 group-hover:translate-x-0.5"
        >
          <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
            <path
              d="M2 6h8m0 0L6.5 2.5M10 6l-3.5 3.5"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </span>
    </Link>
  );
}
