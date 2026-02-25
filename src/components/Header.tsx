"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

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
      aria-current={isActive ? "page" : undefined}
      className={`relative px-4 py-2 text-sm font-medium tracking-wide uppercase transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-[var(--color-primary)] focus-visible:outline-none rounded ${
        isActive
          ? "text-[var(--color-primary)]"
          : "text-[var(--color-muted)] hover:text-[var(--color-foreground)]"
      }`}
    >
      {label}
      {isActive && (
        <span className="absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 w-6 bg-[var(--color-primary)] rounded-full" />
      )}
    </Link>
  );
}

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-30 transition-all duration-300 ${
        scrolled
          ? "border-b border-[var(--color-accent)]/20 bg-[var(--color-background)]/95 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-3 focus-visible:ring-2 focus-visible:ring-[var(--color-primary)] focus-visible:outline-none rounded-lg">
          <Image
            src="/images/logo.jpg"
            alt=""
            width={44}
            height={44}
            className="rounded-full border-2 border-[var(--color-accent)]/40"
            priority
          />
          <div className="flex flex-col">
            <span className="font-[family-name:var(--font-display)] text-lg font-bold text-[var(--color-primary)] leading-tight tracking-tight">
              Warung Taburai
            </span>
            <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-[var(--color-muted)]">
              by Praz Teguh
            </span>
          </div>
        </Link>

        <nav aria-label="Navigasi utama" className="hidden items-center gap-0 md:flex">
          {navItems.map((item) => (
            <NavLink key={item.href} href={item.href} label={item.label} />
          ))}
        </nav>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-lg border border-[var(--color-accent)]/30 p-2.5 text-[var(--color-foreground)] md:hidden focus-visible:ring-2 focus-visible:ring-[var(--color-primary)] focus-visible:outline-none"
          aria-expanded={isOpen}
          aria-controls="mobile-nav"
          aria-label={isOpen ? "Tutup menu navigasi" : "Buka menu navigasi"}
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
            {isOpen ? (
              <>
                <line x1="4" y1="4" x2="16" y2="16" />
                <line x1="16" y1="4" x2="4" y2="16" />
              </>
            ) : (
              <>
                <line x1="3" y1="5" x2="17" y2="5" />
                <line x1="3" y1="10" x2="17" y2="10" />
                <line x1="3" y1="15" x2="17" y2="15" />
              </>
            )}
          </svg>
        </button>
      </div>

      {isOpen && (
        <nav id="mobile-nav" aria-label="Navigasi mobile" className="border-t border-[var(--color-accent)]/20 bg-[var(--color-background)] px-6 py-5 md:hidden">
          <div className="flex flex-col gap-1">
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
