"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/menu", label: "Menu" },
  { href: "/about", label: "About" },
  { href: "/order", label: "Order" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-cream/95 backdrop-blur-sm border-b border-gold/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <Image
              src="/brand/logo.png"
              alt="Apple Fritter American Eatery"
              width={48}
              height={48}
              className="w-10 h-10 sm:w-12 sm:h-12"
              priority
            />
            <span className="font-[family-name:var(--font-accent)] text-lg sm:text-xl font-bold text-red hidden sm:block">
              Apple Fritter
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-charcoal/80 hover:text-red font-medium text-sm tracking-wide uppercase transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Order CTA */}
          <a
            href="https://www.doordash.com/store/apple-fritter-san-mateo-336498/"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center gap-2 bg-red text-white px-5 py-2.5 rounded-full font-bold text-sm hover:bg-red-dark transition-colors"
          >
            Order on DoorDash
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden w-10 h-10 flex items-center justify-center"
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            <div className="w-6 flex flex-col gap-1.5">
              <span
                className={`block h-0.5 bg-charcoal transition-all duration-300 ${
                  isOpen ? "rotate-45 translate-y-2" : ""
                }`}
              />
              <span
                className={`block h-0.5 bg-charcoal transition-all duration-300 ${
                  isOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block h-0.5 bg-charcoal transition-all duration-300 ${
                  isOpen ? "-rotate-45 -translate-y-2" : ""
                }`}
              />
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-6 pt-2 border-t border-gold/20">
            <nav className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-charcoal/80 hover:text-red hover:bg-gold/10 font-medium text-base py-3 px-4 rounded-lg transition-colors"
                >
                  {link.label}
                </Link>
              ))}
              <a
                href="https://www.doordash.com/store/apple-fritter-san-mateo-336498/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 bg-red text-white px-5 py-3 rounded-full font-bold text-center hover:bg-red-dark transition-colors"
              >
                Order on DoorDash
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
