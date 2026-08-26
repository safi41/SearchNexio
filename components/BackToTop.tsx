"use client";

import { useEffect, useState } from "react";

/* Back-to-top control. Standard behaviour: hidden at the top of the page,
   fades in once the reader is a screen or more down, and returns them to
   the top in one action. The ring around it fills with scroll progress, so
   it doubles as a position indicator through the long industry pages.

   Pinned below the theme switch on the same right rail so the two never
   overlap. */
export default function BackToTop() {
  const [shown, setShown] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    /* rAF-throttled so scrolling stays smooth on long pages */
    let frame = 0;
    const read = () => {
      frame = 0;
      const y = window.scrollY;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setShown(y > window.innerHeight * 0.9);
      setProgress(max > 0 ? Math.min(1, y / max) : 0);
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(read);
    };
    read();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      if (frame) cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  const toTop = () => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: 0, behavior: reduced ? "auto" : "smooth" });
  };

  /* progress ring geometry */
  const r = 20;
  const circumference = 2 * Math.PI * r;

  return (
    <button
      type="button"
      onClick={toTop}
      aria-label="Back to top"
      /* hidden from tab order and assistive tech until it is actually
         available, so it is never a focus trap at the top of the page */
      aria-hidden={!shown}
      tabIndex={shown ? 0 : -1}
      /* Colours come straight from the theme tokens: --c-ink is near-black
         in light mode and near-white in dark, so the button always contrasts
         against the page without needing a dark: variant. */
      style={{ backgroundColor: "var(--c-ink)", color: "var(--c-page)" }}
      className={`group fixed right-4 top-1/2 z-50 mt-16 grid size-11 place-items-center rounded-full shadow-[0_8px_24px_rgba(11,13,18,0.35)] transition-all duration-300 ease-soft ${
        shown
          ? "pointer-events-auto translate-y-0 opacity-100 hover:scale-110"
          : "pointer-events-none translate-y-2 opacity-0"
      }`}
    >
      {/* scroll progress ring */}
      <svg
        aria-hidden
        viewBox="0 0 44 44"
        className="pointer-events-none absolute inset-0 size-full -rotate-90"
      >
        <circle
          cx="22"
          cy="22"
          r={r}
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeOpacity="0.22"
        />
        <circle
          cx="22"
          cy="22"
          r={r}
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={circumference * (1 - progress)}
          className="transition-[stroke-dashoffset] duration-150 ease-linear"
        />
      </svg>

      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden
        className="relative transition-transform duration-200 group-hover:-translate-y-0.5"
      >
        <path d="M12 19V5M5 12l7-7 7 7" />
      </svg>
    </button>
  );
}
