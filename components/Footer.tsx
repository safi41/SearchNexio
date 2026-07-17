import Link from "next/link";

const LINKS = [
  { href: "/services", label: "Services" },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/industries", label: "Industries" },
  { href: "/about", label: "About" },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-ink text-white">
      <div className="mx-auto flex max-w-6xl flex-wrap items-baseline justify-between gap-x-10 gap-y-8 px-6 py-14">
        <div>
          <Link href="/" className="text-lg font-semibold tracking-[-0.02em]">
            SearchNexio<span className="text-citron">.</span>
          </Link>
          <p className="mt-3 text-sm text-white/55">
            Wherever buyers search, be found.
          </p>
        </div>
        {/* client-review mode: footer nav renders inert, no routing */}
        <nav className="flex flex-wrap gap-x-8 gap-y-3">
          {LINKS.map((link) => (
            <span
              key={link.href}
              aria-disabled="true"
              className="cursor-default text-sm text-white/60"
            >
              {link.label}
            </span>
          ))}
        </nav>
        <div className="w-full border-t border-white/10 pt-6">
          <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-white/35">
            Business address and privacy policy live before launch
          </p>
        </div>
      </div>
    </footer>
  );
}
