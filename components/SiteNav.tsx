"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

/* Primary nav links point at the live pages. */
const LINKS = [
  { href: "/", label: "Home" },
  { href: "/ai-search-optimization-services/", label: "AI Search" },
  { href: "/generative-engine-optimization/", label: "GEO" },
  { href: "/services/local-seo-services/", label: "Local SEO" },
  { href: "/seo-recovery-services/", label: "Recovery" },
  { href: "/b2b-saas-seo-agency/", label: "B2B SaaS" },
  { href: "/ecommerce-seo-services/", label: "Ecommerce" },
  { href: "/industries/crypto-seo/", label: "Crypto" },
  { href: "/industries/healthcare/", label: "Healthcare" },
];

/* Sasico chrome: logo left, a floating pill bar carrying the links, and
   pill CTAs right. Transparent so it blends into the hero — the page ground
   is always ivory, so links stay legible without a nav fill. */
export default function SiteNav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  /* Close the panel on navigation and lock the page behind it. */
  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

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

        <nav className="hidden items-center gap-1 lg:flex">
          {LINKS.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={active ? "page" : undefined}
                className={`rounded-full px-3 py-2 text-[14px] font-medium transition-colors duration-200 xl:px-4 ${
                  active ? "bg-ink/5 text-indigo" : "text-ink/80 hover:bg-ink/5"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2.5">
        <Link
          href="/ai-search-optimization-services/#visibility-review"
          className="group hidden items-center gap-2 rounded-full bg-citron py-2 pl-5 pr-2 text-[14px] font-semibold text-ink-solid transition-colors duration-200 hover:bg-citron-deep sm:inline-flex"
        >
          Request a review
          <span
            aria-hidden
            className="grid size-6 place-items-center rounded-full bg-ink-solid text-citron transition-transform duration-200 group-hover:translate-x-0.5"
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
        </Link>

          {/* menu toggle: carries the links wherever the inline bar is hidden */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="site-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            className="grid size-10 place-items-center rounded-full border border-line bg-surface/80 text-ink backdrop-blur-sm transition-colors duration-200 hover:bg-surface lg:hidden"
          >
            <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden>
              {open ? <path d="M6 6l12 12M18 6 6 18" /> : <path d="M3.5 7h17M3.5 12h17M3.5 17h17" />}
            </svg>
          </button>
        </div>
      </div>

      {/* mobile and tablet menu panel */}
      <div
        id="site-menu"
        className={`origin-top overflow-hidden transition-all duration-300 ease-soft lg:hidden ${
          open ? "max-h-[32rem] opacity-100" : "pointer-events-none max-h-0 opacity-0"
        }`}
      >
        <div className="mx-4 rounded-3xl border border-line bg-surface p-3 shadow-[0_24px_60px_rgba(11,13,18,0.14)]">
          <nav className="grid">
            {LINKS.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={active ? "page" : undefined}
                  className={`rounded-2xl px-4 py-3 text-[15px] font-semibold transition-colors duration-200 ${
                    active ? "bg-ink/5 text-indigo" : "text-ink/85 hover:bg-ink/5"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>
          <Link
            href="/ai-search-optimization-services/#visibility-review"
            className="mt-2 flex items-center justify-center gap-2 rounded-full bg-citron px-5 py-3 text-[14.5px] font-bold text-ink-solid sm:hidden"
          >
            Request a review
          </Link>
        </div>
      </div>
    </header>
  );
}
