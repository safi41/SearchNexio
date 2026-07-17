"use client";

import { useEffect, useRef, useState } from "react";

/* Entrance transitions: a 700ms fade + rise, scale-in, or slide-in from
   either side. Plays every time the element enters the viewport — scrolling
   back up replays the transition. Children carrying the `reveal-item` class
   (see globals.css) stagger in after the wrapper via their own
   transition-delay. Reduced-motion users get the final state immediately. */
export default function Reveal({
  children,
  delay = 0,
  duration,
  className = "",
  variant = "up",
}: {
  children: React.ReactNode;
  delay?: number;
  /** transition duration in ms; defaults to the 700ms house speed */
  duration?: number;
  className?: string;
  variant?: "up" | "scale" | "left" | "right";
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setShown(true);
      return;
    }
    /* no `once`: the state follows visibility, so the transition replays
       on every scroll back into view */
    const io = new IntersectionObserver(
      (entries) => setShown(entries[0].isIntersecting),
      { rootMargin: "0px 0px -8% 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const hidden =
    variant === "scale"
      ? "translate-y-2 scale-[0.96] opacity-0"
      : variant === "left"
        ? "-translate-x-14 opacity-0"
        : variant === "right"
          ? "translate-x-14 opacity-0"
          : "translate-y-5 opacity-0";

  return (
    <div
      ref={ref}
      data-reveal={shown ? "shown" : "hidden"}
      className={`transition-all duration-700 ease-soft ${
        shown ? "translate-x-0 translate-y-0 scale-100 opacity-100" : hidden
      } ${className}`}
      style={
        delay || duration
          ? {
              ...(delay ? { transitionDelay: `${delay}ms` } : {}),
              ...(duration ? { transitionDuration: `${duration}ms` } : {}),
            }
          : undefined
      }
    >
      {children}
    </div>
  );
}
