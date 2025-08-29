"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems: Array<{ href: string; label: string }> = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-black/40 bg-white/70 dark:bg-black/30 border-b border-zinc-200/60 dark:border-zinc-800/60">
      <nav className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="font-semibold text-zinc-900 dark:text-zinc-100 text-3xl">
            Kamlesh
          </Link>
        </div>

        <ul className="hidden md:flex items-center gap-8 text-lg">
          {navItems.map((item) => {
            const isActive = item.href === "/" ? pathname === "/" : pathname?.startsWith(item.href);
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="relative group inline-flex items-center text-zinc-700 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white transition-colors"
                >
                  <span className={"" + (isActive ? " font-medium" : "")}>{item.label}</span>
                  <span className="pointer-events-none absolute -bottom-1 left-0 right-0 h-px bg-current origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out" />
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="md:hidden" />
      </nav>
    </header>
  );
}


