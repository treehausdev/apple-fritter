import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Order | Apple Fritter American Eatery",
  description:
    "Order Apple Fritter for pickup or delivery via DoorDash, Uber Eats, or Postmates. Catering available through EZCater.",
};

const orderPlatforms = [
  {
    name: "DoorDash",
    description: "Delivery and pickup. Our most popular ordering option.",
    url: "https://www.doordash.com/store/apple-fritter-san-mateo-336498/",
    color: "bg-red",
    hoverColor: "hover:bg-red-dark",
    featured: true,
  },
  {
    name: "EZCater",
    description:
      "Catering for offices, events, and parties. Feed the whole crew.",
    url: "https://www.ezcater.com/catering/apple-fritter-3",
    color: "bg-charcoal",
    hoverColor: "hover:bg-charcoal/80",
    featured: false,
  },
  {
    name: "Uber Eats",
    description: "Delivery straight to your door.",
    url: "https://www.ubereats.com/store/apple-fritter/aeJ5kzFuUoOGXxvIcf-tNA",
    color: "bg-green",
    hoverColor: "hover:bg-green-dark",
    featured: false,
  },
  {
    name: "Postmates",
    description: "Another great delivery option.",
    url: "https://postmates.com/store/apple-fritter/aeJ5kzFuUoOGXxvIcf-tNA",
    color: "bg-brown",
    hoverColor: "hover:bg-brown/80",
    featured: false,
  },
];

export default function OrderPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative py-16 sm:py-24 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/donut-burger.png"
            alt="Donut burger ready for delivery"
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-charcoal/70" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-cream mb-4">
            Order Now
          </h1>
          <p className="text-cream/80 text-lg max-w-xl mx-auto">
            Pickup, delivery, or catering. Getting Apple Fritter food into your
            face has never been easier.
          </p>
        </div>
      </section>

      {/* Order Options */}
      <section className="py-16 sm:py-24 bg-cream">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="space-y-6">
            {orderPlatforms.map((platform) => (
              <a
                key={platform.name}
                href={platform.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`block p-6 sm:p-8 rounded-2xl text-cream transition-all duration-300 hover:shadow-xl hover:scale-[1.02] ${platform.color} ${platform.hoverColor} ${
                  platform.featured
                    ? "ring-4 ring-gold/40 shadow-lg"
                    : "shadow-sm"
                }`}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <h2 className="font-[family-name:var(--font-accent)] text-2xl font-bold">
                        {platform.name}
                      </h2>
                      {platform.featured && (
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-gold text-charcoal">
                          Most Popular
                        </span>
                      )}
                    </div>
                    <p className="text-cream/80">{platform.description}</p>
                  </div>
                  <svg
                    className="w-8 h-8 shrink-0 text-cream/60"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                    />
                  </svg>
                </div>
              </a>
            ))}
          </div>

          {/* Pickup Note */}
          <div className="mt-12 p-6 bg-gold/10 rounded-2xl border border-gold/20 text-center">
            <p className="font-[family-name:var(--font-accent)] text-lg font-bold text-charcoal mb-2">
              Walk-ins welcome!
            </p>
            <p className="text-charcoal/70">
              You can always just show up. We&apos;re at{" "}
              <a
                href="https://maps.google.com/?q=1901+S+Norfolk+Street+San+Mateo+CA+94403"
                target="_blank"
                rel="noopener noreferrer"
                className="text-red font-semibold hover:underline"
              >
                1901 S. Norfolk Street, San Mateo
              </a>
              . Open Monday through Friday 7:30 AM to 2:00 PM, weekends 8:00 AM
              to 2:00 PM.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
