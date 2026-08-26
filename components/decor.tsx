/* One decorative ring: a static circle outline whose dots all rotate
   together as a unit, so the whole circle reads as spinning — the
   reference site's corner animation. Shared by the hero and footer. */
export function Ring({
  className,
  border,
  spin,
  duration,
  dots,
}: {
  className: string;
  border: string;
  spin: "animate-orbit" | "animate-orbit-slow";
  duration: string;
  dots: { angle: number; cls: string }[];
}) {
  return (
    <span className={`absolute rounded-full border ${border} ${className}`}>
      <span className={`${spin} absolute inset-0`} style={{ animationDuration: duration }}>
        {dots.map((dot) => (
          <span
            key={dot.angle}
            className="absolute inset-0"
            style={{ transform: `rotate(${dot.angle}deg)` }}
          >
            <span
              className={`absolute left-1/2 top-0 -ml-1 -mt-1 rounded-full ${dot.cls}`}
            />
          </span>
        ))}
      </span>
    </span>
  );
}

/* The faint white dot-grid overlay used on the dark indigo panels. */
export function DotGrid({ className = "opacity-25" }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={`absolute inset-0 ${className}`}
      style={{
        backgroundImage:
          "radial-gradient(rgba(255,255,255,0.25) 1.5px, transparent 1.5px)",
        backgroundSize: "14px 14px",
      }}
    />
  );
}
