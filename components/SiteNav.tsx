"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const LINKS = [
  { href: "/services", label: "Services" },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/industries", label: "Industries" },
  { href: "/about", label: "About" },
];

/* Transparent glass chrome while the curtain is behind it; solid surface
   with a hairline once the page scrolls past the hero gradient. */
export default function SiteNav() {
  const [pastHero, setPastHero] = useState(false);
  const pathname = usePathname();
  /* only the homepage has the curtain behind the nav; every other route
     gets the solid chrome from the first pixel */
  const scrolled = pathname !== "/" || pastHero;

  useEffect(() => {
    const onScroll = () => setPastHero(window.scrollY > 440);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-colors duration-300 ${
        scrolled
          ? "border-b border-line bg-surface/90 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link
          href="/"
          className={`text-lg font-semibold tracking-[-0.02em] ${
            scrolled ? "text-ink" : "text-white"
          }`}
        >
          SearchNexio<span className="text-citron">.</span>
        </Link>
        {/* nav routing is disabled for the client-review build: the inner
            pages aren't ready, so links render inert (no hrefs, no routing) */}
        <nav className="hidden items-center gap-7 md:flex">
          {LINKS.map((link) => (
            <span
              key={link.href}
              aria-disabled="true"
              className={`cursor-default text-sm font-medium transition-colors duration-300 ${
                scrolled ? "text-ink/70" : "text-white/90"
              }`}
            >
              {link.label}
            </span>
          ))}
        </nav>
        <span
          aria-disabled="true"
          className={`cursor-default rounded-full px-4 py-2 text-sm font-medium transition-colors duration-300 ${
            scrolled
              ? "bg-citron text-ink"
              : "border border-white/35 bg-white/15 text-white backdrop-blur-sm"
          }`}
        >
          Request a review
        </span>
      </div>
    </header>
  );
}
