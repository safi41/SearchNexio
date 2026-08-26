import Reveal from "@/components/motion/Reveal";
import { CtaLink, ORBIT_SPEED } from "@/components/ui";
import { AISEARCH_HERO } from "@/lib/ai-search-content";
import { GoogleG, GeminiMark, PerplexityKnot } from "@/components/brand-icons";

/* Hero: two columns. Left has the badge, three-line H1 with an indigo accent
   line, subtext and dual CTAs. Right is a hub diagram — the brand scope at
   the center with the four AI platforms on an orbit, each carrying its
   cited / not-cited status. A soft lilac wave band closes the section. */

/* The ChatGPT (OpenAI) hexagonal knot mark. */
function ChatGPTInk({ size = 40 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden>
      <path
        fill="#0B0D12"
        d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.073zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 7.8956zm16.5963 3.8558L13.1038 8.364 15.1192 7.2a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.407-.667zm2.0107-3.0231-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L9.409 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.6802 4.66zM8.3065 12.863l-2.02-1.1638a.0804.0804 0 0 1-.038-.0567V6.0742a4.4992 4.4992 0 0 1 7.3757-3.4537l-.142.0805L8.704 5.459a.7948.7948 0 0 0-.3927.6813zm1.0976-2.3654 2.602-1.4998 2.6069 1.4998v2.9994l-2.5974 1.4997-2.6067-1.4997Z"
      />
    </svg>
  );
}

/* Nodes orbit as a group (one revolution per ORBIT_SPEED); each node
   counter-rotates so its logo stays upright. */

const NODES = [
  { name: "Google AI", icon: <GoogleG size={42} />, node: { left: "50%", top: "12%" } },
  { name: "ChatGPT", icon: <ChatGPTInk size={44} />, node: { left: "12%", top: "50%" } },
  { name: "Gemini", icon: <GeminiMark size={42} />, node: { left: "88%", top: "50%" } },
  { name: "Perplexity", icon: <PerplexityKnot size={44} />, node: { left: "50%", top: "88%" } },
];

function HubDiagram() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[540px]">
      {/* dashed orbit rings, slowly rotating in opposite directions */}
      <div aria-hidden className="animate-orbit absolute inset-[12%] rounded-full border border-dashed border-indigo/25" style={{ animationDuration: "52s" }} />
      <div aria-hidden className="animate-orbit-slow absolute inset-[27%] rounded-full border border-dashed border-indigo/15" style={{ animationDuration: "38s" }} />

      {/* connectors + nodes revolve together around the hub */}
      <div className="animate-orbit absolute inset-0" style={{ animationDuration: ORBIT_SPEED }}>
        {/* axis connectors with endpoint dots */}
        <svg aria-hidden className="absolute inset-0 size-full" viewBox="0 0 100 100">
          {[
            [50, 23, 50, 34.5],
            [23, 50, 34.5, 50],
            [77, 50, 65.5, 50],
            [50, 77, 50, 65.5],
          ].map(([x1, y1, x2, y2], i) => (
            <g key={i} stroke="var(--color-indigo)" opacity="0.55">
              <line x1={x1} y1={y1} x2={x2} y2={y2} strokeWidth="0.5" />
              <circle cx={x1} cy={y1} r="0.9" fill="var(--color-indigo)" stroke="none" />
              <circle cx={x2} cy={y2} r="0.9" fill="var(--color-indigo)" stroke="none" />
            </g>
          ))}
        </svg>

        {/* platform nodes, counter-rotating to stay upright */}
        {NODES.map((n) => (
          <div
            key={n.name}
            className="absolute -translate-x-1/2 -translate-y-1/2"
            style={n.node}
          >
            <span
              title={n.name}
              className="animate-orbit grid size-[84px] place-items-center rounded-full bg-surface shadow-[0_16px_40px_rgba(11,13,18,0.1)]"
              style={{ animationDuration: ORBIT_SPEED, animationDirection: "reverse" }}
            >
              {n.icon}
            </span>
          </div>
        ))}
      </div>

      {/* center: brand scope on a white disc */}
      <div className="absolute left-1/2 top-1/2 grid size-[30%] -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-surface shadow-[0_24px_60px_rgba(99,91,255,0.22)]">
        <div
          className="grid size-[74%] place-items-center rounded-full"
          style={{
            background: "radial-gradient(circle at 35% 30%, #8F84FF 0%, #635BFF 60%, #5049E0 100%)",
            boxShadow: "inset 0 10px 22px rgba(255,255,255,0.35), inset 0 -12px 26px rgba(40,34,150,0.35)",
          }}
        >
          <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
            <circle cx="10.5" cy="10.5" r="6.2" />
            <path d="M15.3 15.3 20 20" />
            <path d="M10.5 7.6c.2 1.6 1.5 2.9 3.1 3.1-1.6.2-2.9 1.5-3.1 3.1-.2-1.6-1.5-2.9-3.1-3.1 1.6-.2 2.9-1.5 3.1-3.1Z" fill="#ffffff" stroke="none" />
          </svg>
        </div>
      </div>

    </div>
  );
}

/* Soft lilac wave band with dot grids along the hero's bottom edge. */
function WaveBand() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-x-0 bottom-0">
      <svg className="block h-[170px] w-full" viewBox="0 0 1440 220" preserveAspectRatio="none" fill="none">
        <path d="M0 130C240 40 480 160 760 96 1020 38 1240 90 1440 60v160H0Z" fill="var(--c-lilac)" opacity="0.55" />
        <path d="M0 178C300 100 560 200 840 150 1100 104 1300 150 1440 122v98H0Z" fill="var(--c-lilac)" opacity="0.8" />
      </svg>
      <div
        className="absolute bottom-8 left-[6%] h-20 w-28"
        style={{
          backgroundImage: "radial-gradient(var(--wm-stroke) 1.6px, transparent 1.6px)",
          backgroundSize: "14px 14px",
        }}
      />
      <div
        className="absolute bottom-6 right-[5%] h-16 w-24"
        style={{
          backgroundImage: "radial-gradient(var(--wm-stroke) 1.6px, transparent 1.6px)",
          backgroundSize: "14px 14px",
        }}
      />
    </div>
  );
}

export default function AiSearchHero() {
  return (
    <section className="relative overflow-x-clip pt-[136px]">
      <div aria-hidden className="wash-lilac absolute inset-x-0 top-0 h-[720px]" />
      <div
        aria-hidden
        className="grid-pattern absolute left-1/2 top-24 h-[440px] w-[760px] -translate-x-1/2 [mask-image:radial-gradient(ellipse_70%_70%_at_50%_40%,#000_35%,transparent_75%)]"
      />

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-6 pb-40 lg:grid-cols-[1fr_1fr] lg:gap-10 lg:pb-48">
        {/* left: copy */}
        <div>
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full bg-lilac px-4 py-2 text-[12.5px] font-bold uppercase tracking-[0.08em] text-indigo">
              <svg width="14" height="14" viewBox="0 0 24 24" aria-hidden>
                <path d="M12 2c.4 5 5 9.6 10 10-5 .4-9.6 5-10 10-.4-5-5-9.6-10-10 5-.4 9.6-5 10-10Z" fill="currentColor" />
              </svg>
              {AISEARCH_HERO.eyebrow}
            </span>
          </Reveal>
          <Reveal delay={60} duration={600}>
            <h1 className="mt-6 font-heading text-[clamp(2.6rem,5.2vw,4.2rem)] font-bold leading-[1.05] tracking-[-0.03em]">
              AI Search
              <br />
              <span className="text-indigo">Optimization</span>
              <br />
              Services
            </h1>
          </Reveal>
          <Reveal delay={120} duration={600}>
            <p className="mt-6 max-w-xl text-[16px] leading-relaxed text-graphite">{AISEARCH_HERO.intro}</p>
          </Reveal>
          <Reveal delay={180} duration={600}>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <CtaLink href={AISEARCH_HERO.primaryCta.href}>{AISEARCH_HERO.primaryCta.label}</CtaLink>
              <CtaLink href={AISEARCH_HERO.secondaryCta.href} variant="ghost">{AISEARCH_HERO.secondaryCta.label}</CtaLink>
            </div>
          </Reveal>
        </div>

        {/* right: heading + hub diagram */}
        <Reveal variant="right" delay={120}>
          <div className="mx-auto max-w-[560px]">
            <HubDiagram />
          </div>
        </Reveal>
      </div>

      <WaveBand />
    </section>
  );
}
