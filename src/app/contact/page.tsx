import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Apple Fritter American Eatery",
  description:
    "Find Apple Fritter at 1901 S. Norfolk Street, San Mateo, CA. Call (650) 525-9125. Open daily for breakfast and lunch.",
};

export default function ContactPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-16 sm:py-24 bg-red">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-cream mb-4">
            Find Us
          </h1>
          <p className="text-cream/80 text-lg max-w-xl mx-auto">
            We&apos;re a tiny cafe. You&apos;ll know you&apos;re in the right place when you
            see the taco-shaped windows.
          </p>
        </div>
      </section>

      {/* Contact Info + Map */}
      <section className="py-16 sm:py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Info */}
            <div className="space-y-10">
              {/* Address */}
              <div>
                <h2 className="font-[family-name:var(--font-accent)] text-xl font-bold text-charcoal mb-3">
                  Location
                </h2>
                <a
                  href="https://maps.google.com/?q=1901+S+Norfolk+Street+San+Mateo+CA+94403"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-charcoal/70 hover:text-red transition-colors text-lg leading-relaxed"
                >
                  1901 S. Norfolk Street
                  <br />
                  San Mateo, CA 94403
                </a>
                <a
                  href="https://maps.google.com/maps/dir//1901+S+Norfolk+Street+San+Mateo+CA+94403"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-red font-bold mt-3 hover:text-red-dark transition-colors"
                >
                  Get Directions
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                    />
                  </svg>
                </a>
              </div>

              {/* Phone */}
              <div>
                <h2 className="font-[family-name:var(--font-accent)] text-xl font-bold text-charcoal mb-3">
                  Phone
                </h2>
                <a
                  href="tel:+16505259125"
                  className="text-charcoal/70 hover:text-red transition-colors text-lg"
                >
                  (650) 525-9125
                </a>
              </div>

              {/* Email */}
              <div>
                <h2 className="font-[family-name:var(--font-accent)] text-xl font-bold text-charcoal mb-3">
                  Email
                </h2>
                <a
                  href="mailto:applefrittereatery@gmail.com"
                  className="text-charcoal/70 hover:text-red transition-colors text-lg"
                >
                  applefrittereatery@gmail.com
                </a>
              </div>

              {/* Hours */}
              <div>
                <h2 className="font-[family-name:var(--font-accent)] text-xl font-bold text-charcoal mb-3">
                  Hours
                </h2>
                <div className="space-y-3">
                  <div className="flex items-start gap-4">
                    <span className="text-charcoal/50 w-24 shrink-0">
                      Mon - Fri
                    </span>
                    <span className="text-charcoal font-medium">
                      7:30 AM - 2:00 PM
                    </span>
                  </div>
                  <div className="flex items-start gap-4">
                    <span className="text-charcoal/50 w-24 shrink-0">
                      Sat - Sun
                    </span>
                    <span className="text-charcoal font-medium">
                      8:00 AM - 2:00 PM
                    </span>
                  </div>
                </div>
                <div className="mt-4 p-4 bg-gold/10 rounded-xl border border-gold/20">
                  <p className="text-sm text-charcoal/70">
                    <span className="font-bold text-charcoal">Pro tip:</span>{" "}
                    Fritters sell out fast on weekends. Get here early if you want
                    one!
                  </p>
                </div>
              </div>

              {/* Catering */}
              <div>
                <h2 className="font-[family-name:var(--font-accent)] text-xl font-bold text-charcoal mb-3">
                  Catering
                </h2>
                <p className="text-charcoal/70 mb-3">
                  Hosting an event, office lunch, or party? We cater through
                  EZCater.
                </p>
                <a
                  href="https://www.ezcater.com/catering/apple-fritter-3"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-charcoal text-cream px-6 py-3 rounded-full font-bold text-sm hover:bg-charcoal/80 transition-colors"
                >
                  Order Catering on EZCater
                </a>
              </div>
            </div>

            {/* Map */}
            <div className="relative aspect-square lg:aspect-auto rounded-2xl overflow-hidden shadow-xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3166.5!2d-122.315!3d37.548!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808f9e9b9b9b9b9b%3A0x0!2s1901+S+Norfolk+St%2C+San+Mateo%2C+CA+94403!5e0!3m2!1sen!2sus!4v1"
                className="absolute inset-0 w-full h-full"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Apple Fritter location on Google Maps"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
