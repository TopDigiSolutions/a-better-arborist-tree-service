import { site } from "@/lib/site";

const nav = [
  { href: "#services", label: "Services" },
  { href: "#why-us", label: "Why Us" },
  { href: "#areas", label: "Service Areas" },
  { href: "#reviews", label: "Reviews" },
  { href: "#faq", label: "FAQ" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-emerald-900/10 bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/75">
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <a href="#top" className="flex items-center gap-2.5">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-800 text-white shadow-md shadow-emerald-900/20">
            <TreeIcon />
          </span>
          <span className="leading-tight">
            <span className="block text-base font-extrabold tracking-tight text-emerald-950 sm:text-lg">
              {site.shortName}<sup className="text-[0.55em]">®</sup>
            </span>
            <span className="block text-[11px] font-semibold uppercase tracking-wider text-emerald-700">
              Tree Service · Dallas, TX
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-7 text-sm font-semibold text-slate-700 lg:flex">
          {nav.map((n) => (
            <a key={n.href} href={n.href} className="transition hover:text-emerald-800">
              {n.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <a
            href={`tel:${site.phone}`}
            className="hidden items-center gap-2 rounded-xl border border-emerald-800/20 px-4 py-2.5 text-sm font-bold text-emerald-900 transition hover:bg-emerald-50 md:inline-flex"
          >
            <PhoneIcon />
            {site.phoneDisplay}
          </a>
          <a
            href="#quote"
            className="inline-flex items-center gap-2 rounded-xl bg-amber-500 px-4 py-2.5 text-sm font-extrabold text-emerald-950 shadow-md shadow-amber-500/30 transition hover:bg-amber-400"
          >
            Free Estimate
          </a>
        </div>
      </div>
    </header>
  );
}

export function TreeIcon({ className = "" }: { className?: string }) {
  return (
    <svg className={className} width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M12 22v-7" />
      <path d="M8 15h8l-2-4h1.5L13 7h1l-2-4-2 4h1l-2.5 4H10l-2 4z" />
    </svg>
  );
}

export function PhoneIcon({ className = "" }: { className?: string }) {
  return (
    <svg className={className} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}
