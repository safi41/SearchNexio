"use client";

import { ORBIT_SPEED } from "@/components/shared";

/* The hero orbit diagram every page renders through. One geometry for the
   whole site: a 540px stage, a dashed ring at 2%, the solid ring the nodes
   travel on at 12%, 84px chips whose marks stay upright by counter-spinning,
   nodes on a 38% radius, and a 42% hub slot at the centre.

   Pages differ only in data: their nodes, their hub, their start angle and
   any page-specific decor passed as children. */

export type OrbitNode = {
  label: string;
  mark: React.ReactNode;
  /** chip fill override for tinted brand bubbles; defaults to the surface */
  bg?: string;
};

/* Positions are computed from the angle, not hand-tuned per page:
   50% + 38% x (cos, sin), equally spaced from startAngle. */
function spots(count: number, startAngle: number) {
  return Array.from({ length: count }, (_, i) => {
    const a = ((startAngle + (360 / count) * i) * Math.PI) / 180;
    return {
      left: `${(50 + 38 * Math.cos(a)).toFixed(1)}%`,
      top: `${(50 + 38 * Math.sin(a)).toFixed(1)}%`,
    };
  });
}

export default function OrbitStage({
  nodes,
  hub,
  startAngle = -90,
  children,
  orbitChildren,
}: {
  nodes: OrbitNode[];
  /** rendered inside the centred 42% hub slot */
  hub: React.ReactNode;
  startAngle?: number;
  /** static page decor, rendered between the rings and the node layer */
  children?: React.ReactNode;
  /** decor that revolves with the nodes (e.g. axis connectors) */
  orbitChildren?: React.ReactNode;
}) {
  const at = spots(nodes.length, startAngle);

  return (
    <div className="relative mx-auto aspect-square w-full max-w-[420px] lg:max-w-[540px]">
      {/* dashed outer ring */}
      <div aria-hidden className="absolute inset-[2%] rounded-full border border-dashed border-indigo/25" />
      {/* solid orbit ring the nodes travel on */}
      <div aria-hidden className="absolute inset-[12%] rounded-full border border-indigo/40" />

      {children}

      {/* hub slot */}
      <div className="absolute left-1/2 top-1/2 grid size-[42%] -translate-x-1/2 -translate-y-1/2 place-items-center">
        {hub}
      </div>

      {/* node layer: revolves as one; each chip counter-spins so its mark
          stays upright */}
      <div className="animate-orbit absolute inset-0" style={{ animationDuration: ORBIT_SPEED }}>
        {orbitChildren}
        {nodes.map((node, i) => (
          <div
            key={node.label}
            className="absolute -translate-x-1/2 -translate-y-1/2"
            style={at[i]}
          >
            <span
              title={node.label}
              aria-label={node.label}
              className={`animate-orbit grid size-[84px] place-items-center rounded-full ${
                node.bg ? "" : "bg-surface"
              } shadow-[0_14px_36px_rgba(99,91,255,0.18)]`}
              style={{
                animationDuration: ORBIT_SPEED,
                animationDirection: "reverse",
                ...(node.bg ? { background: node.bg } : {}),
              }}
            >
              {node.mark}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* The standard hub: a white disc with a soft brand-tinted glow, holding one
   brand mark that scales with the disc. */
export function OrbitHub({
  label,
  glowClass,
  shadowClass,
  children,
}: {
  label: string;
  /** e.g. "bg-[#F7931A]/15" — the halo tint behind the disc */
  glowClass: string;
  /** e.g. "shadow-[0_24px_60px_rgba(247,147,26,0.24)]" */
  shadowClass: string;
  children: React.ReactNode;
}) {
  return (
    <>
      <span aria-hidden className={`absolute inset-[-14%] rounded-full blur-2xl ${glowClass}`} />
      <span className={`relative grid size-full place-items-center rounded-full bg-surface ${shadowClass}`}>
        <span title={label} aria-label={label} className="grid size-[64%] place-items-center">
          <span aria-hidden className="block w-full [&>svg]:h-auto [&>svg]:w-full">
            {children}
          </span>
        </span>
      </span>
    </>
  );
}
