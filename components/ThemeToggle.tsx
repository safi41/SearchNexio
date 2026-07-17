"use client";

import { useEffect, useState } from "react";

/* Floating theme switch pinned to the right edge, riding along with scroll
   like the reference site's moon button. Moon in light mode, sun in dark. */
export default function ThemeToggle() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    setDark(document.documentElement.classList.contains("dark"));
  }, []);

  const toggle = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    try {
      localStorage.setItem("theme", next ? "dark" : "light");
    } catch {
      /* private mode: theme just won't persist */
    }
  };

  return (
    <button
      type="button"
      aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
      onClick={toggle}
      className="fixed right-4 top-1/2 z-50 grid size-11 -translate-y-1/2 place-items-center rounded-full bg-ink-solid text-citron shadow-[0_8px_24px_rgba(11,13,18,0.35)] transition-transform duration-200 hover:scale-110 dark:bg-white dark:text-ink-solid"
    >
      {dark ? (
        /* sun */
        <svg width="18" height="18" viewBox="0 0 20 20" fill="none" aria-hidden>
          <circle cx="10" cy="10" r="4" fill="currentColor" />
          <path
            d="M10 1.5v2M10 16.5v2M18.5 10h-2M3.5 10h-2M16 4l-1.4 1.4M5.4 14.6 4 16M16 16l-1.4-1.4M5.4 5.4 4 4"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
        </svg>
      ) : (
        /* moon */
        <svg width="17" height="17" viewBox="0 0 20 20" fill="none" aria-hidden>
          <path
            d="M17.5 12.5A8 8 0 0 1 7.5 2.5a8 8 0 1 0 10 10Z"
            fill="currentColor"
          />
        </svg>
      )}
    </button>
  );
}
