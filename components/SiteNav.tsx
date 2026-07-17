"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { gsap, useGSAP, MOTION_OK } from "@/components/motion/gsap";

const LINKS = [
  { href: "/case-studies", label: "Case Studies" },
  { href: "/services", label: "Services" },
  { href: "/industries", label: "Industries" },
  { href: "/about", label: "About" },
];

export default function SiteNav() {
  const ref = useRef<HTMLElement>(null);
  const [scrolled, setScrolled] = useState(false);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add(MOTION_OK, () => {
        gsap.from(ref.current, { y: -60, autoAlpha: 0, duration: 0.8, ease: "power4.out" });
      });
    },
    { scope: ref }
  );

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      ref={ref}
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-500 ${
        scrolled
          ? "border-b border-line bg-paper/85 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="font-display text-xl tracking-tight">
          SearchNexio<span className="text-copper">.</span>
        </Link>
        {/* nav routing is disabled for the client-review build: the inner
            pages aren't ready, so links render inert (no hrefs, no routing) */}
        <nav className="hidden items-center gap-8 md:flex">
          {LINKS.map((link) => (
            <span
              key={link.href}
              aria-disabled="true"
              className="cursor-default text-sm font-medium text-ink/70"
            >
              {link.label}
            </span>
          ))}
        </nav>
        <span
          aria-disabled="true"
          className="cursor-default border border-teal px-4 py-2 text-xs font-medium uppercase tracking-[0.15em] text-teal"
        >
          Visibility Review
        </span>
      </div>
    </header>
  );
}
