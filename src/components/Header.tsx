"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navItems = [
  { href: "/", label: "Beranda" },
  { href: "/about", label: "Tentang" },
  { href: "/menu", label: "Menu" },
  { href: "/gallery", label: "Galeri" },
  { href: "/contact", label: "Kontak" },
];

function NavLink({ href, label, onSelect }: {
  href: string;
  label: string;
  onSelect?: () => void;
}) {
  const pathname = usePathname();
  const isActive = pathname === href || (href !== "/" && pathname?.startsWith(href));

  return (
    <Link
      href={href}
      onClick={onSelect}
      className={`rounded-full px-4 py-2 text-sm font-medium transition-colors duration-200 ${
        isActive
          ? "bg-[var(--color-primary)] text-white shadow-lg shadow-[var(--color-primary)]/40"
          : "text-[var(--color-foreground)] hover:bg-[var(--color-accent)]/60 hover:text-[var(--color-primary)]"
      }`}
    >
      {label}
    </Link>
  );
}

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-30 border-b border-[var(--color-primary)]/15 bg-[var(--color-background)]/90 backdrop-blur-sm">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-3 font-semibold text-lg text-[var(--color-primary)]">
          <Image
            src="/images/logo.jpg"
            alt="Warung Taburai"
            width={40}
            height={40}
            className="rounded-full border border-[var(--color-primary)]/12"
            priority
          />
          Warung Taburai
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <NavLink key={item.href} href={item.href} label={item.label} />
          ))}
        </nav>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-full border border-[var(--color-primary)]/20 px-4 py-2 text-sm font-medium text-[var(--color-foreground)] md:hidden"
          aria-expanded={isOpen}
          aria-controls="mobile-nav"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          {isOpen ? "Tutup" : "Menu"}
        </button>
      </div>

      {isOpen && (
        <nav id="mobile-nav" className="border-t border-[var(--color-primary)]/15 bg-[var(--color-background)] px-6 py-4 md:hidden">
          <div className="flex flex-col gap-2">
            {navItems.map((item) => (
              <NavLink
                key={item.href}
                href={item.href}
                label={item.label}
                onSelect={() => setIsOpen(false)}
              />
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
