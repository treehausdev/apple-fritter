import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-charcoal text-cream/90">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-4">
              <Image
                src="/brand/logo.png"
                alt="Apple Fritter"
                width={40}
                height={40}
                className="w-10 h-10"
              />
              <span className="font-[family-name:var(--font-accent)] text-xl font-bold text-gold-light">
                Apple Fritter
              </span>
            </Link>
            <p className="text-cream/60 text-sm leading-relaxed">
              Locally owned and operated in San Mateo since 2014. Come for the
              fritters, stay for the donut burgers.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-[family-name:var(--font-accent)] text-gold font-semibold mb-4">
              Quick Links
            </h3>
            <nav className="flex flex-col gap-2">
              {[
                { href: "/menu", label: "Menu" },
                { href: "/about", label: "About Us" },
                { href: "/order", label: "Order Online" },
                { href: "/contact", label: "Contact" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-cream/60 hover:text-gold-light text-sm transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Hours */}
          <div>
            <h3 className="font-[family-name:var(--font-accent)] text-gold font-semibold mb-4">
              Hours
            </h3>
            <div className="space-y-2 text-sm text-cream/60">
              <div className="flex justify-between">
                <span>Mon - Fri</span>
                <span className="text-cream/80">7:30 AM - 2:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span>Sat - Sun</span>
                <span className="text-cream/80">8:00 AM - 2:00 PM</span>
              </div>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-[family-name:var(--font-accent)] text-gold font-semibold mb-4">
              Find Us
            </h3>
            <div className="space-y-2 text-sm text-cream/60">
              <a
                href="https://maps.google.com/?q=1901+S+Norfolk+Street+San+Mateo+CA+94403"
                target="_blank"
                rel="noopener noreferrer"
                className="block hover:text-gold-light transition-colors"
              >
                1901 S. Norfolk Street
                <br />
                San Mateo, CA 94403
              </a>
              <a
                href="tel:+16505259125"
                className="block hover:text-gold-light transition-colors"
              >
                (650) 525-9125
              </a>
              <a
                href="mailto:applefrittereatery@gmail.com"
                className="block hover:text-gold-light transition-colors"
              >
                applefrittereatery@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-cream/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-cream/40">
          <span>
            &copy; {new Date().getFullYear()} Apple Fritter American Eatery.
            All rights reserved.
          </span>
          <span>
            Designed by{" "}
            <a
              href="https://treehaus.site"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cream/60 hover:text-gold-light transition-colors"
            >
              Treehaus
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}
