"use client";

import { useState } from "react";
import Reveal from "@/components/motion/Reveal";
import { PLATFORMS } from "@/lib/geo-content";
import {
  ChatGPTKnot,
  GoogleG,
  GeminiMark,
  PerplexityMark,
  ClaudeSpark,
  CopilotMark,
} from "@/components/brand-icons";

/* Platforms we optimize for: an app-tile fan. Five platform tiles ride an
   arc above the SearchNexio tile, over a lilac glow and concentric rings.
   Selecting a tile swaps the pill + description below the heading, so every
   platform's one-line use case stays on the page. */

const TILE_ICONS = [
  <ChatGPTKnot key="c" size={36} />,
  <GoogleG key="g" size={32} />,
  <GeminiMark key="ge" size={36} />,
  <PerplexityMark key="p" size={36} />,
  <span key="cc" className="flex items-center gap-1.5">
    <ClaudeSpark size={22} />
    <CopilotMark size={24} />
  </span>,
];

/* Tile centers as percentages of the desktop stage. */
const SPOTS = [
  { left: "20%", top: "34%" },
  { left: "32.5%", top: "16%" },
  { left: "50%", top: "9%" },
  { left: "67.5%", top: "16%" },
  { left: "80%", top: "34%" },
];

function BrandTile() {
  return (
    <div className="flex flex-col items-center justify-center gap-3 rounded-[26px] border border-line bg-surface shadow-[0_24px_60px_rgba(11,13,18,0.12)]" style={{ width: 124, height: 124 }}>
      <span aria-hidden className="flex items-center">
        <span className="size-8 rounded-full bg-ink" />
        <span className="-ml-3 size-8 rounded-full bg-indigo mix-blend-multiply" />
      </span>
      <span className="text-[10px] font-bold tracking-[0.18em] text-graphite">
        SEARCHNEXIO
      </span>
    </div>
  );
}

function PlatformTile({
  icon,
  name,
  active,
  onSelect,
  bob,
}: {
  icon: React.ReactNode;
  name: string;
  active: boolean;
  onSelect: () => void;
  bob?: string;
}) {
  return (
    <button
      type="button"
      onClick={onSelect}
      aria-pressed={active}
      className={`animate-bob group flex flex-col items-center gap-2.5 `}
      style={bob ? { animationDelay: bob } : undefined}
    >
      <span
        className={`grid size-[84px] place-items-center rounded-[22px] border bg-surface shadow-[0_18px_44px_rgba(11,13,18,0.1)] transition-all duration-300 ease-soft group-hover:-translate-y-1 ${
          active ? "border-indigo ring-2 ring-indigo/25" : "border-line"
        }`}
      >
        {icon}
      </span>
      <span
        className={`text-[13px] font-semibold transition-colors duration-200 ${
          active ? "text-indigo" : "text-ink/80"
        }`}
      >
        {name}
      </span>
    </button>
  );
}

export default function GeoPlatforms() {
  const [active, setActive] = useState(0);

  const textBlock = (
    <div className="mx-auto max-w-md text-center">
      <span
        key={`pill-${active}`}
        className="geo-panel-fade inline-block rounded-full bg-ink-solid px-4 py-1.5 text-[10.5px] font-bold uppercase tracking-[0.14em] text-white"
      >
        {PLATFORMS[active].name}
      </span>
      <h2 className="mt-4 font-heading text-[clamp(1.8rem,3.4vw,2.4rem)] leading-[1.15] tracking-[-0.02em]">
        <span className="font-medium italic">Platforms we</span>
        <br />
        <span className="font-bold">optimize for</span>
      </h2>
      <p
        key={`desc-${active}`}
        className="geo-panel-fade mt-4 min-h-16 text-[13.5px] leading-relaxed text-graphite"
      >
        {PLATFORMS[active].desc}
      </p>
    </div>
  );

  return (
    <section className="relative overflow-hidden py-16 md:py-20">
      {/* lilac glow + concentric rings rising behind the fan */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div
          className="absolute left-1/2 top-[62%] size-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full"
          style={{
            background:
              "radial-gradient(closest-side, rgba(99,91,255,0.16), transparent 72%)",
          }}
        />
        <div className="absolute left-1/2 top-[58%] size-[460px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-indigo/15" />
        <div className="absolute left-1/2 top-[58%] size-[680px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-indigo/10" />
        <div className="absolute left-1/2 top-[58%] size-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-indigo/[0.07]" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6">
        {/* desktop: the arc stage with the text block inside the glow */}
        <div className="relative hidden h-[680px] md:block">
          {PLATFORMS.map((p, i) => (
            <div
              key={p.name}
              className="absolute -translate-x-1/2 -translate-y-1/2"
              style={SPOTS[i]}
            >
              <Reveal variant="scale" delay={i * 80}>
                <PlatformTile
                  icon={TILE_ICONS[i]}
                  name={p.name}
                  active={active === i}
                  onSelect={() => setActive(i)}
                  bob={`${i * 0.7}s`}
                />
              </Reveal>
            </div>
          ))}

          <div className="absolute left-1/2 top-[44%] -translate-x-1/2 -translate-y-1/2">
            <Reveal variant="scale" delay={120}>
              <BrandTile />
            </Reveal>
          </div>

          <div className="absolute inset-x-0 bottom-2">
            <Reveal delay={160}>{textBlock}</Reveal>
          </div>
        </div>

        {/* mobile: tiles wrap around the brand tile, text follows */}
        <div className="md:hidden">
          <div className="flex justify-center">
            <Reveal variant="scale">
              <BrandTile />
            </Reveal>
          </div>
          <div className="mt-8 flex flex-wrap items-start justify-center gap-x-6 gap-y-7">
            {PLATFORMS.map((p, i) => (
              <Reveal key={p.name} variant="up" delay={i * 60}>
                <PlatformTile
                  icon={TILE_ICONS[i]}
                  name={p.name}
                  active={active === i}
                  onSelect={() => setActive(i)}
                />
              </Reveal>
            ))}
          </div>
          <div className="mt-10">
            <Reveal>{textBlock}</Reveal>
          </div>
        </div>

        {/* AEO contextual link (placeholder) */}
        <Reveal delay={60}>
          <p className="mx-auto mt-8 max-w-2xl text-center text-[14px] leading-relaxed text-graphite">
            For direct-answer strategy, buyer-question architecture and Google
            answer surfaces, see our{" "}
            <span className="font-semibold text-indigo underline decoration-indigo/30 underline-offset-2">
              Answer Engine Optimization Services
            </span>
            .
          </p>
        </Reveal>
      </div>
    </section>
  );
}
