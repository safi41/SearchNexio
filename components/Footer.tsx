import Link from "next/link";

const LINKS = [
  { href: "/case-studies", label: "Case Studies" },
  { href: "/services", label: "Services" },
  { href: "/industries", label: "Industries" },
  { href: "/about", label: "About" },
];

export default function Footer() {
  return (
    <footer className="border-t border-paper/10 bg-ink text-paper">
      <div className="mx-auto flex max-w-6xl flex-wrap items-baseline justify-between gap-x-10 gap-y-8 px-6 py-14">
        <div>
          <Link href="/" className="font-display text-xl tracking-tight">
            SearchNexio<span className="text-copper">.</span>
          </Link>
          <p className="mt-3 font-display italic text-paper/60">
            Wherever buyers search, be found.
          </p>
        </div>
        <nav className="flex flex-wrap gap-x-8 gap-y-3">
          {LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-paper/60 transition-colors duration-300 hover:text-paper"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="w-full border-t border-paper/10 pt-6">
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-paper/35">
            Business address and privacy policy live before launch
          </p>
        </div>
      </div>
    </footer>
  );
}
