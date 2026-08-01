"use client";

import Reveal from "@/components/motion/Reveal";
import { Badge, CtaLink } from "@/components/ui";
import {
  GoogleG,
  MapsPin,
  SparkleAI,
  ChatGPTMark,
  BingMark,
  GeminiMark,
  PerplexityMark,
  RedditMark,
  YouTubeMark,
} from "@/components/brand-icons";

/* The search surfaces we make you visible on, arranged on a U-curve that the
   logo bubbles drift along — every place a buyer might look, connected. */
const SURFACE_LOGOS = [
  { mark: <GoogleG size={22} />, name: "Google" },
  { mark: <RedditMark size={22} />, name: "Reddit" },
  { mark: <MapsPin size={22} />, name: "Maps" },
  { mark: <PerplexityMark size={22} />, name: "Perplexity" },
  { mark: <ChatGPTMark size={22} />, name: "ChatGPT" },
  { mark: <GeminiMark size={22} />, name: "Gemini" },
  { mark: <SparkleAI size={22} />, name: "AI Overviews" },
  { mark: <RedditMark size={22} />, name: "Reddit" },
  { mark: <BingMark size={22} />, name: "Bing" },
  { mark: <YouTubeMark size={22} />, name: "YouTube" },
];

/* Each bubble is placed at a fixed point on the curve; the whole set drifts
   left→right along the curve on a loop, wrapping around, so it reads like the
   reference's flowing conveyor of logos. Bubbles are evenly spaced by their
   animation-delay across one loop. */
export default function Industries() {
  const count = SURFACE_LOGOS.length;
  return (
    <section className="overflow-x-clip py-16 md:py-24">
      <div className="relative mx-auto max-w-5xl px-6">
        {/* the curve + drifting bubbles (desktop). Fixed 1000x420 stage so the
            offset-path px coords line up with the drawn curve; the stage is
            centered and clipped to the section width. */}
        <div
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-20 hidden h-[460px] w-[1080px] -translate-x-1/2 md:block"
        >
          {/* faint guide curve: a wide, shallow catenary-style U. Sides start
              high near the top corners and sweep gently inward to a broad
              shallow bottom bowl that the CTA sits inside. */}
          <svg
            className="absolute inset-0 h-full w-full"
            viewBox="0 0 1080 460"
            fill="none"
          >
            <path
              d="M30,70 C120,340 380,410 540,410 C700,410 960,340 1050,70"
              stroke="var(--c-line)"
              strokeWidth="1.5"
              className="opacity-80"
            />
          </svg>
          {/* drifting bubbles riding the curve */}
          <div className="motion-curve absolute inset-0">
            {SURFACE_LOGOS.map((logo, i) => (
              <span
                key={i}
                className="curve-bubble absolute left-0 top-0 grid size-11 place-items-center rounded-full border border-line bg-surface shadow-[0_8px_20px_rgba(11,13,18,0.1)]"
                style={{ animationDelay: `${-(i / count) * 26}s` }}
              >
                {logo.mark}
              </span>
            ))}
          </div>
        </div>

        {/* centered content sitting inside the arc */}
        <div className="relative z-10 mx-auto max-w-2xl pt-6 text-center md:pt-14">
          <Reveal>
            <Badge>Everywhere Buyers Search</Badge>
            <h2 className="mx-auto mt-5 max-w-xl font-heading text-[clamp(2rem,4vw,3rem)] font-bold leading-[1.1] tracking-[-0.02em]">
              Your entire search <span className="text-indigo">presence</span> &mdash; fully covered
            </h2>
            <p className="mx-auto mt-5 max-w-md text-[15.5px] leading-relaxed text-graphite">
              Google, Maps, AI Overviews, ChatGPT, and every surface your buyers
              check. We make you visible across all of them, and keep it that
              way.
            </p>
          </Reveal>
          <Reveal delay={100}>
            <div className="mt-8 flex justify-center">
              {/* opaque halo masks any bubble drifting behind the button */}
              <span className="rounded-full bg-ivory px-3 py-2 shadow-[0_0_0_10px_var(--c-page)]">
                <CtaLink href="/#visibility-review">Request a Visibility Review</CtaLink>
              </span>
            </div>
          </Reveal>
        </div>

        {/* mobile: a simple wrapped logo grid instead of the curve */}
        <Reveal delay={120} className="md:hidden">
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {SURFACE_LOGOS.slice(0, 8).map((logo, i) => (
              <span
                key={i}
                className="grid size-11 place-items-center rounded-full border border-line bg-surface shadow-[0_8px_20px_rgba(11,13,18,0.1)]"
              >
                {logo.mark}
              </span>
            ))}
          </div>
        </Reveal>

        <Reveal delay={160}>
          <p className="relative z-10 mt-10 text-center text-[13.5px] text-graphite md:mt-40">
            Not sure where you&apos;re missing? The visibility review maps every
            surface.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
