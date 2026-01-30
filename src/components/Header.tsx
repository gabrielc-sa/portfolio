"use client";

import Link from "next/link";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-palette-light-muted bg-palette-light/95 backdrop-blur supports-[backdrop-filter]:bg-palette-light/80">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link
          href="#home"
          className="text-lg font-semibold text-palette-dark-deep transition hover:text-palette-dark"
        >
          Portfolio
        </Link>
        <ul className="flex items-center gap-6">
          {navLinks.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className="text-sm font-medium text-palette-dark-deep transition hover:text-palette-muted"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
