import Reveal from "@/components/motion/Reveal";
import { CtaLink } from "@/components/ui";
import { GEO_HERO } from "@/lib/geo-content";
import {
  ChatGPTKnot,
  GeminiMark,
  PerplexityKnot,
  ClaudeSpark,
  AnthropicLogotype,
  CopilotMark,
} from "@/components/brand-icons";

/* Hero: copy + CTAs + platform chips on the left; on the right a glowing
   brand sphere with platform logo bubbles riding two orbit rings. A bundle
   of thin gradient wave lines closes the section along the bottom edge. */

/* Four-point spark used for the badge and the scattered decor stars. */
function MiniSpark({
  size = 14,
  className = "",
}: {
  size?: number;
  className?: string;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      className={className}
      aria-hidden
    >
      <path
        d="M12 2c.4 5 5 9.6 10 10-5 .4-9.6 5-10 10-.4-5-5-9.6-10-10 5-.4 9.6-5 10-10Z"
        fill="currentColor"
      />
    </svg>
  );
}

const PLATFORM_CHIPS = [
  { icon: <ChatGPTKnot size={22} />, label: "ChatGPT" },
  { icon: <GeminiMark size={20} />, label: "Gemini" },
  { icon: <PerplexityKnot size={20} />, label: "Perplexity" },
  { icon: <ClaudeSpark size={18} />, label: "Claude" },
  { icon: <CopilotMark size={20} />, label: "Microsoft Copilot" },
];

/* Logo bubbles riding the orbit. The whole group revolves around the sphere
   while each bubble counter-rotates at the same rate, so the logos stay
   upright as they travel.

   All five share one radius and sit exactly 72 degrees apart, so the gaps
   between them are equal. Positions are 50% + 45% * (cos, sin) of the angle
   noted, starting at -125deg to keep the reference composition. */
const ORBIT_SPEED = "48s";

const ORBIT_BUBBLES = [
  {
    label: "ChatGPT", // -125deg
    icon: <ChatGPTKnot size={44} />,
    left: "24.2%",
    top: "13.1%",
    size: 84,
    bg: "#EAF7F0",
  },
  {
    label: "Gemini", // -53deg
    icon: <GeminiMark size={36} />,
    left: "77.1%",
    top: "14.1%",
    size: 84,
    bg: "#ffffff",
  },
  {
    label: "Perplexity", // 19deg
    icon: <PerplexityKnot size={40} />,
    left: "92.5%",
    top: "64.7%",
    size: 84,
    bg: "#F2FAF8",
  },
  {
    label: "Claude", // 91deg
    icon: <AnthropicLogotype width={44} />,
    left: "49.2%",
    top: "95.0%",
    size: 84,
    bg: "#ffffff",
  },
  {
    label: "Microsoft Copilot", // 163deg
    icon: <CopilotMark size={38} />,
    left: "7.0%",
    top: "63.2%",
    size: 84,
    bg: "#ffffff",
  },
];

function OrbitVisual() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[540px]">
      {/* soft halo behind everything */}
      <div
        aria-hidden
        className="absolute inset-[14%] rounded-full bg-indigo/15 blur-3xl"
      />

      {/* outer dashed orbit — rotates slowly, carrying its small dots */}
      <div
        aria-hidden
        className="animate-orbit-slow absolute inset-[5%] rounded-full border border-dashed border-indigo/30"
        style={{ animationDuration: "56s" }}
      >
        <span className="absolute left-1/2 top-0 size-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-sky-400" />
        <span className="absolute right-[7%] top-[80%] size-1.5 rounded-full bg-indigo/70" />
        <span className="absolute left-[4%] top-[30%] size-1.5 rounded-full bg-indigo/40" />
      </div>

      {/* inner solid orbit hugging the sphere */}
      <div
        aria-hidden
        className="absolute inset-[15%] rounded-full border border-indigo/20"
      />

      {/* glowing brand sphere with the white spark outline */}
      <div className="absolute inset-[24%]">
        <div
          className="absolute inset-0 rounded-full"
          style={{
            background:
              "radial-gradient(circle at 36% 30%, #E7E1FF 0%, #C9BAFF 34%, #A794FE 64%, #9583F8 100%)",
            boxShadow:
              "inset 0 -20px 48px rgba(99,91,255,0.28), inset 0 14px 34px rgba(255,255,255,0.45), 0 30px 90px rgba(99,91,255,0.35)",
            filter: "blur(7px)",
          }}
        />
        <svg
          className="absolute left-1/2 top-1/2 w-[46%] -translate-x-1/2 -translate-y-1/2"
          viewBox="0 0 64 64"
          fill="none"
          aria-hidden
        >
          <path
            d="M32 3 C34.5 19 45 29.5 61 32 C45 34.5 34.5 45 32 61 C29.5 45 19 34.5 3 32 C19 29.5 29.5 19 32 3 Z"
            stroke="#ffffff"
            strokeWidth="2.3"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      {/* platform logo bubbles — the group revolves around the sphere; each
          bubble spins in reverse at the same rate so its logo stays upright */}
      <div
        className="animate-orbit absolute inset-0"
        style={{ animationDuration: ORBIT_SPEED }}
      >
        {ORBIT_BUBBLES.map((b) => (
          <div
            key={b.label}
            className="absolute -translate-x-1/2 -translate-y-1/2"
            style={{ left: b.left, top: b.top }}
          >
            <span
              title={b.label}
              className="animate-orbit grid place-items-center rounded-full shadow-[0_18px_44px_rgba(99,91,255,0.2)]"
              style={{
                width: b.size,
                height: b.size,
                background: b.bg,
                animationDuration: ORBIT_SPEED,
                animationDirection: "reverse",
              }}
            >
              {b.icon}
            </span>
          </div>
        ))}
      </div>

      {/* scattered decor sparks and dots */}
      <MiniSpark
        size={16}
        className="absolute left-[-4%] top-[38%] text-indigo/60"
      />
      <MiniSpark
        size={11}
        className="absolute left-[8%] top-[88%] text-indigo/45"
      />
      <MiniSpark
        size={13}
        className="absolute right-[-2%] top-[8%] text-indigo/50"
      />
      <MiniSpark
        size={10}
        className="absolute right-[16%] top-[76%] text-indigo/40"
      />
      <span className="absolute right-[2%] top-[36%] size-2 rounded-full bg-indigo/30" />
      <span className="absolute left-[30%] top-[2%] size-1.5 rounded-full bg-sky-400/70" />
    </div>
  );
}

/* Bundle of thin gradient lines flowing along the hero's bottom edge. */
function WaveLines() {
  const lines = Array.from({ length: 14 }, (_, i) => i);
  return (
    <svg
      aria-hidden
      className="pointer-events-none absolute inset-x-0 bottom-0 h-[230px] w-full [mask-image:linear-gradient(180deg,transparent,#000_30%)]"
      viewBox="0 0 1440 300"
      preserveAspectRatio="none"
      fill="none"
    >
      <defs>
        <linearGradient
          id="geo-wave"
          x1="0"
          y1="0"
          x2="1440"
          y2="0"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0%" stopColor="#9C92FF" />
          <stop offset="45%" stopColor="#635BFF" />
          <stop offset="100%" stopColor="#B9B0FF" />
        </linearGradient>
      </defs>
      {lines.map((i) => (
        <path
          key={i}
          d={`M-20 ${252 - i * 6} C240 ${205 - i * 8} 480 ${292 - i * 5} 760 ${240 - i * 7} C1020 ${192 - i * 9} 1220 ${150 - i * 7} 1460 ${216 - i * 8}`}
          stroke="url(#geo-wave)"
          strokeWidth="1.4"
          opacity={0.8 - i * 0.038}
        />
      ))}
    </svg>
  );
}

export default function GeoHero() {
  return (
    <section className="relative overflow-hidden pt-[128px]">
      <div aria-hidden className="wash-lilac absolute inset-x-0 top-0 h-[720px]" />
      <div
        aria-hidden
        className="grid-pattern absolute inset-x-0 top-0 h-[640px] [mask-image:radial-gradient(ellipse_75%_80%_at_50%_20%,#000_30%,transparent_78%)]"
      />

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-6 pb-44 lg:grid-cols-[1.08fr_0.92fr] lg:gap-8 lg:pb-52">
        {/* left: copy */}
        <div>
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-indigo/20 bg-surface/80 px-4 py-2 text-[13.5px] font-medium text-indigo shadow-[0_2px_12px_rgba(99,91,255,0.08)]">
              <MiniSpark size={15} className="text-indigo" />
              {GEO_HERO.eyebrow}
            </span>
          </Reveal>

          <Reveal delay={60} duration={600}>
            <h1 className="mt-6 font-heading text-[clamp(2.7rem,5.4vw,4.35rem)] font-bold leading-[1.05] tracking-[-0.03em]">
              Generative Engine
              <br />
              <span className="bg-gradient-to-r from-indigo via-[#7C6BFF] to-[#A292FF] bg-clip-text text-transparent">
                Optimization
              </span>
              <br />
              Agency
            </h1>
          </Reveal>

          <Reveal delay={120} duration={600}>
            <p className="mt-6 max-w-xl text-[16px] leading-relaxed text-graphite">
              {GEO_HERO.intro}
            </p>
          </Reveal>

          <Reveal delay={180} duration={600}>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <CtaLink href={GEO_HERO.primaryCta.href}>
                {GEO_HERO.primaryCta.label}
              </CtaLink>
              <CtaLink href={GEO_HERO.secondaryCta.href} variant="ghost">
                {GEO_HERO.secondaryCta.label}
              </CtaLink>
            </div>
          </Reveal>

          <Reveal delay={240}>
            <p className="mt-11 text-[11.5px] font-semibold uppercase tracking-[0.16em] text-graphite">
              AI platforms we optimize for
            </p>
            <div className="mt-4 flex flex-wrap items-center gap-2">
              {PLATFORM_CHIPS.map((c) => (
                <span
                  key={c.label}
                  className="inline-flex items-center gap-2 rounded-xl border border-line bg-surface px-3 py-2.5 text-[13.5px] font-semibold shadow-[0_2px_10px_rgba(11,13,18,0.04)]"
                >
                  {c.icon}
                  {c.label}
                </span>
              ))}
            </div>
          </Reveal>
        </div>

        {/* right: orbit illustration */}
        <Reveal variant="right" delay={120}>
          <OrbitVisual />
        </Reveal>
      </div>

      <WaveLines />
    </section>
  );
}
