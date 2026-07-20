"use client";

import Link from "next/link";

const LINKS = [
  { href: "/services", label: "Services" },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/industries", label: "Industries" },
  { href: "/about", label: "About" },
];

/* Sasico chrome: logo left, a floating pill bar carrying the links, and
   pill CTAs right. Transparent so it blends into the hero — the page ground
   is always ivory, so links stay legible without a nav fill. */
export default function SiteNav() {
  return (
    <header id="top" className="absolute inset-x-0 top-0 z-40">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-4">
        <Link
          href="/"
          className="flex items-center gap-2 font-heading text-[19px] font-bold tracking-[-0.02em]"
        >
          <span aria-hidden className="flex items-center">
            <span className="size-4.5 rounded-full bg-ink" />
            <span className="-ml-1.5 size-4.5 rounded-full bg-indigo mix-blend-multiply" />
          </span>
          SearchNexio
        </Link>

        {/* nav routing is disabled for the client-review build: the inner
            pages aren't ready, so links render inert (no hrefs, no routing) */}
        <nav className="hidden items-center gap-1 md:flex">
          {LINKS.map((link) => (
            <span
              key={link.href}
              aria-disabled="true"
              className="cursor-default rounded-full px-4 py-2 text-[14px] font-medium text-ink/80 transition-colors duration-200 hover:bg-ink/5"
            >
              {link.label}
            </span>
          ))}
        </nav>

        <span
          aria-disabled="true"
          className="group inline-flex cursor-default items-center gap-2 rounded-full bg-citron py-2 pl-5 pr-2 text-[14px] font-semibold text-ink-solid"
        >
          Request a review
          <span
            aria-hidden
            className="grid size-6 place-items-center rounded-full bg-ink-solid text-citron"
          >
            <svg width="11" height="11" viewBox="0 0 12 12" fill="none">
              <path
                d="M2 6h8m0 0L6.5 2.5M10 6l-3.5 3.5"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </span>
      </div>
    </header>
  );
}
