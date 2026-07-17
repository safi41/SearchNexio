"use client";

import { useEffect, useRef, useState } from "react";

/* Entrance transitions: a 550ms fade + rise, scale-in, or slide-in from
   either side, fired once when the element enters the viewport. Children
   carrying the `reveal-item` class (see globals.css) stagger in after the
   wrapper via their own transition-delay. Reduced-motion users get the
   final state immediately. */
export default function Reveal({
  children,
  delay = 0,
  className = "",
  variant = "up",
}: {
  children: React.ReactNode;
  delay?: number;
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
    /* already on screen at mount (first paint, anchor jump, resize-to-tall
       viewports): reveal on the next frame so the transition still plays */
    if (el.getBoundingClientRect().top < window.innerHeight * 0.95) {
      const raf = requestAnimationFrame(() => setShown(true));
      return () => cancelAnimationFrame(raf);
    }
    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setShown(true);
          io.disconnect();
        }
      },
      { rootMargin: "0px 0px -10% 0px" }
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
      className={`transition-all duration-550 ease-soft ${
        shown ? "translate-x-0 translate-y-0 scale-100 opacity-100" : hidden
      } ${className}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  );
}
