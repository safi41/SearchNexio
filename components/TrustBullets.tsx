import Reveal from "@/components/motion/Reveal";
import { GoogleG, MapsPin, SparkleAI, ChatGPTMark } from "@/components/brand-icons";
import { TRUST_BULLETS } from "@/lib/content";

/* Reference layout: open three-column composition (no card boxes) separated
   by hairline dividers. Each column: a large illustration, a numbered
   marker, then title + body. Below, a full-width mini-feature strip. */

/* ---------- tiny glyphs -------------------------------------------------- */

const stroke = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.7,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

function HeartGlyph() {
  return (
    <svg width="15" height="15" viewBox="0 0 20 20" {...stroke}>
      <path d="M10 17S3 12.5 3 7.8A3.8 3.8 0 0 1 10 5.6a3.8 3.8 0 0 1 7 2.2C17 12.5 10 17 10 17Z" />
      <path d="M5.5 10h2.4l1-1.8 1.6 3.2 1-1.4h2.4" strokeWidth={1.4} />
    </svg>
  );
}

function BankGlyph() {
  return (
    <svg width="15" height="15" viewBox="0 0 20 20" {...stroke}>
      <path d="M3 8h14L10 3 3 8ZM4.5 8v6M9 8v6M13.5 8v6M17.5 16.5h-15M15.5 8v6" />
    </svg>
  );
}

function ScalesGlyph() {
  return (
    <svg width="15" height="15" viewBox="0 0 20 20" {...stroke}>
      <path d="M10 3v13M6.5 16h7M4.5 5.5h11M5 5.5 3 10a2.2 2.2 0 0 0 4.4 0L5 5.5ZM15 5.5 13 10a2.2 2.2 0 0 0 4.4 0L15 5.5Z" />
    </svg>
  );
}

function DocGlyph() {
  return (
    <svg width="15" height="15" viewBox="0 0 20 20" {...stroke}>
      <path d="M5 3h7l3 3v11H5V3ZM12 3v3h3M7.5 10h5M7.5 13h4" />
    </svg>
  );
}

function ShieldGlyph() {
  return (
    <svg width="18" height="18" viewBox="0 0 20 20" {...stroke}>
      <path d="M10 2.5 4 5v4.5c0 3.6 2.6 5.9 6 7.5 3.4-1.6 6-3.9 6-7.5V5l-6-2.5Z" />
      <path d="m7.5 9.8 1.8 1.8 3.2-3.4" />
    </svg>
  );
}

function TargetGlyph() {
  return (
    <svg width="18" height="18" viewBox="0 0 20 20" {...stroke}>
      <circle cx="10" cy="10" r="7" />
      <circle cx="10" cy="10" r="3.6" />
      <circle cx="10" cy="10" r="0.8" fill="currentColor" />
    </svg>
  );
}

function ZapGlyph() {
  return (
    <svg width="18" height="18" viewBox="0 0 20 20" {...stroke}>
      <path d="M11 2.5 4.5 11h4l-1 6.5L14.5 9h-4l.5-6.5Z" />
    </svg>
  );
}

function BarsGlyph() {
  return (
    <svg width="18" height="18" viewBox="0 0 20 20" {...stroke}>
      <path d="M4 16.5V11M8 16.5V7M12 16.5v-3.5M16 16.5V4" />
    </svg>
  );
}

function CitronCheck({ size = 16 }: { size?: number }) {
  return (
    <span
      aria-hidden
      className="absolute -bottom-0.5 -right-0.5 grid place-items-center rounded-full bg-citron"
      style={{ width: size, height: size }}
    >
      <svg width={size * 0.55} height={size * 0.55} viewBox="0 0 12 12" fill="none">
        <path
          d="m2.5 6.5 2.5 2.5 4.5-5"
          stroke="#0B0D12"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}

/* ---------- column illustrations ---------------------------------------- */

function IndustryChip({
  icon,
  label,
  className,
  delay,
}: {
  icon: React.ReactNode;
  label: string;
  className: string;
  delay: number;
}) {
  return (
    <span
      className={`reveal-item absolute z-10 inline-flex items-center gap-1.5 rounded-xl border border-line bg-surface px-3 py-1.5 text-[12px] font-semibold shadow-[0_8px_20px_rgba(11,13,18,0.1)] ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <span className="text-indigo">{icon}</span>
      {label}
    </span>
  );
}

/* 01 — gradient shield inside a soft circle, industry chips orbiting */
function ShieldArt() {
  return (
    <div className="relative mx-auto flex h-60 max-w-[320px] items-center justify-center">
      <span aria-hidden className="absolute size-40 rounded-full bg-lilac" />
      <span aria-hidden className="absolute size-52 rounded-full border border-dashed border-indigo/35" />
      <span aria-hidden className="absolute right-[14%] top-[16%] size-1.5 rounded-full bg-indigo/50" />
      <span aria-hidden className="absolute bottom-[18%] right-[24%] size-1.5 rounded-full bg-indigo/40" />
      {/* the shield */}
      <svg width="92" height="100" viewBox="0 0 92 100" fill="none" aria-hidden className="relative drop-shadow-[0_14px_28px_rgba(99,91,255,0.4)]">
        <defs>
          <linearGradient id="shield-grad" x1="10" y1="6" x2="84" y2="94">
            <stop offset="0%" stopColor="#8F7BFF" />
            <stop offset="100%" stopColor="#4A43D9" />
          </linearGradient>
        </defs>
        <path
          d="M46 4 84 17v29c0 24.5-15.5 38.5-38 46C23.5 84.5 8 70.5 8 46V17L46 4Z"
          fill="url(#shield-grad)"
        />
        <path
          d="m31 49 11 11 20-23"
          stroke="#fff"
          strokeWidth="7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <IndustryChip icon={<HeartGlyph />} label="Healthcare" className="left-1/2 top-1 -translate-x-[64%]" delay={150} />
      <IndustryChip icon={<BankGlyph />} label="Finance" className="left-0 top-[38%]" delay={220} />
      <IndustryChip icon={<ScalesGlyph />} label="Legal" className="right-0 top-[44%]" delay={290} />
      <IndustryChip icon={<DocGlyph />} label="Tax" className="bottom-1 left-1/2 -translate-x-[46%]" delay={360} />
    </div>
  );
}

/* 02 — the four platforms on a pedestal beneath signal arcs */
function CoverageArt() {
  const marks = [
    <GoogleG key="g" size={22} />,
    <MapsPin key="m" size={22} />,
    <SparkleAI key="s" size={22} />,
    <ChatGPTMark key="c" size={22} />,
  ];
  return (
    <div className="relative mx-auto flex h-60 max-w-[320px] items-end justify-center pb-10">
      {/* signal arcs */}
      <svg
        aria-hidden
        className="absolute inset-x-0 top-2 mx-auto h-36 w-[280px]"
        viewBox="0 0 280 140"
        fill="none"
      >
        {[120, 96, 72, 48].map((r, i) => (
          <path
            key={r}
            d={`M${140 - r},140 A${r},${r} 0 0 1 ${140 + r},140`}
            stroke="var(--color-indigo)"
            strokeWidth="1.5"
            opacity={0.14 + i * 0.08}
          />
        ))}
      </svg>
      {/* pedestal */}
      <span aria-hidden className="absolute bottom-6 h-9 w-64 rounded-[50%] bg-lilac" />
      <span aria-hidden className="absolute bottom-5 h-9 w-72 rounded-[50%] bg-lilac/50" />
      {/* platform circles */}
      <div className="relative z-10 flex items-end gap-3">
        {marks.map((mark, i) => (
          <span
            key={i}
            className={`reveal-item relative grid size-14 place-items-center rounded-full bg-surface shadow-[0_10px_24px_rgba(11,13,18,0.14)] ${
              i === 0 || i === 3 ? "-translate-y-2" : ""
            }`}
            style={{ transitionDelay: `${150 + i * 80}ms` }}
          >
            {mark}
            <CitronCheck />
          </span>
        ))}
      </div>
    </div>
  );
}

/* 03 — the growth curve with waypoints, arrowhead, and pipeline card */
function ImpactArt() {
  return (
    <div className="relative mx-auto flex h-60 max-w-[320px] items-center justify-center">
      <svg
        aria-hidden
        className="absolute inset-x-0 top-6 h-44 w-full"
        viewBox="0 0 320 176"
        fill="none"
      >
        <defs>
          <linearGradient id="impact-fill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#635BFF" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#635BFF" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path
          d="M8,160 C70,152 130,132 190,96 C240,66 275,40 302,14 L302,176 L8,176 Z"
          fill="url(#impact-fill)"
        />
        <path
          d="M8,160 C70,152 130,132 190,96 C240,66 275,40 302,14"
          stroke="#635BFF"
          strokeWidth="3"
          strokeLinecap="round"
        />
        {/* arrowhead */}
        <path d="M302 14 289 16.5M302 14l-4.5 12" stroke="#635BFF" strokeWidth="3" strokeLinecap="round" />
        {/* waypoints */}
        {[
          [84, 148],
          [172, 106],
          [246, 58],
        ].map(([x, y]) => (
          <circle key={x} cx={x} cy={y} r="5.5" fill="#635BFF" stroke="var(--color-surface)" strokeWidth="2.5" />
        ))}
      </svg>
      {/* pipeline impact card */}
      <div
        className="reveal-item absolute bottom-8 right-0 w-40 rounded-2xl border border-line bg-surface p-3.5 shadow-[0_16px_36px_rgba(11,13,18,0.14)]"
        style={{ transitionDelay: "220ms" }}
      >
        <p className="flex items-center gap-1 text-[11px] font-bold">
          <svg width="11" height="11" viewBox="0 0 12 12" fill="none" aria-hidden>
            <path d="M2 10 10 2m0 0H4.5M10 2v5.5" stroke="#635BFF" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          Pipeline Impact
        </p>
        <div className="mt-2.5 flex items-end gap-1.5">
          {[10, 16, 24, 34].map((h, i) => (
            <span
              key={h}
              className={`w-5 rounded-md ${i === 3 ? "bg-indigo" : "bg-lilac"}`}
              style={{ height: `${h}px` }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

const ARTS = [ShieldArt, CoverageArt, ImpactArt];
const VARIANTS = ["left", "up", "right"] as const;

/* ---------- bottom mini-feature strip ------------------------------------ */

const STRIP = [
  {
    icon: <ShieldGlyph />,
    title: "Compliance-first",
    desc: "Built with security and regulatory standards in mind.",
  },
  {
    icon: <TargetGlyph />,
    title: "End-to-end ownership",
    desc: "One partner for strategy, execution, and growth.",
  },
  {
    icon: <ZapGlyph />,
    title: "AI-ready approach",
    desc: "Optimized for traditional search and AI discovery.",
  },
  {
    icon: <BarsGlyph />,
    title: "Results that matter",
    desc: "Focused on pipeline growth, not just rankings.",
  },
];

/* ------------------------------------------------------------------------ */

export default function TrustBullets() {
  return (
    <section className="overflow-x-clip py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        {/* header: badge with glyph, two-tone heading with scribble */}
        <Reveal>
          <div className="text-center">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-lilac px-4 py-1.5 text-[13px] font-medium text-indigo">
              <svg width="14" height="14" viewBox="0 0 20 20" fill="none" aria-hidden>
                <circle cx="7" cy="7.5" r="2.6" stroke="currentColor" strokeWidth="1.6" />
                <circle cx="13.5" cy="8" r="2.1" stroke="currentColor" strokeWidth="1.6" />
                <path d="M2.5 16c.6-2.6 2.3-4 4.5-4s3.9 1.4 4.5 4M12 12.6c1.9.2 3.3 1.5 3.8 3.4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
              </svg>
              Why teams choose us
            </span>
            <h2 className="mx-auto mt-5 font-heading text-[clamp(2rem,4vw,3rem)] font-bold leading-[1.12] tracking-[-0.02em]">
              What we&apos;re{" "}
              <span className="relative inline-block text-indigo">
                built on
                <svg
                  aria-hidden
                  className="absolute -bottom-3 left-0 w-full"
                  viewBox="0 0 190 14"
                  fill="none"
                  preserveAspectRatio="none"
                >
                  <path d="M4 9C48 3 132 2 186 5" stroke="#635BFF" strokeWidth="3.2" strokeLinecap="round" />
                  <path d="M96 12c32-3 62-3 78-2" stroke="#635BFF" strokeWidth="3.2" strokeLinecap="round" />
                </svg>
              </span>
            </h2>
            <p className="mx-auto mt-7 max-w-md text-[15.5px] leading-relaxed text-graphite">
              Everything we build is designed to solve real problems, deliver
              accurate results, and drive measurable growth.
            </p>
          </div>
        </Reveal>

        {/* the three columns, split by hairlines */}
        <div className="mt-12 grid gap-12 lg:grid-cols-3 lg:gap-0 lg:divide-x lg:divide-line">
          {TRUST_BULLETS.map((bullet, i) => {
            const Art = ARTS[i];
            return (
              <Reveal key={bullet.title} variant={VARIANTS[i]} className="lg:px-8 lg:first:pl-0 lg:last:pr-0">
                <Art />
                {/* numbered marker */}
                <div
                  className="reveal-item mt-6 flex items-center gap-2.5"
                  style={{ transitionDelay: "120ms" }}
                >
                  <span className="text-[14px] font-bold tabular-nums text-indigo">
                    0{i + 1}
                  </span>
                  <span aria-hidden className="h-px w-14 bg-indigo/50" />
                  <span aria-hidden className="size-1.5 rounded-full bg-indigo" />
                </div>
                <h3
                  className="reveal-item mt-3 font-heading text-[21px] font-bold tracking-[-0.01em]"
                  style={{ transitionDelay: "180ms" }}
                >
                  {bullet.title}
                </h3>
                <p
                  className="reveal-item mt-3 max-w-sm text-[14.5px] leading-relaxed text-graphite"
                  style={{ transitionDelay: "250ms" }}
                >
                  {bullet.body}
                </p>
              </Reveal>
            );
          })}
        </div>

        {/* bottom mini-feature strip */}
        <Reveal delay={120}>
          <div className="mt-14 rounded-2xl border border-line/70 bg-lilac/40 px-7 py-6">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-0 lg:divide-x lg:divide-line">
              {STRIP.map((item, i) => (
                <div
                  key={item.title}
                  className="reveal-item flex items-start gap-3 lg:px-6 lg:first:pl-0 lg:last:pr-0"
                  style={{ transitionDelay: `${120 + i * 70}ms` }}
                >
                  <span className="mt-0.5 shrink-0 text-indigo">{item.icon}</span>
                  <div>
                    <p className="text-[13.5px] font-bold">{item.title}</p>
                    <p className="mt-1 text-[12.5px] leading-relaxed text-graphite">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
