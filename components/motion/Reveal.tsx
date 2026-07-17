"use client";

import { useEffect, useRef, useState } from "react";

/* Entrance transitions: a 550ms fade + rise (or scale-in for cards), fired
   once when the element enters the viewport. Reduced-motion users get the
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
  variant?: "up" | "scale";
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
      : "translate-y-5 opacity-0";

  return (
    <div
      ref={ref}
      className={`transition-all duration-550 ease-soft ${
        shown ? "translate-y-0 scale-100 opacity-100" : hidden
      } ${className}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  );
}
