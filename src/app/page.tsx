import Image from "next/image";
import Link from "next/link";

const signatureItems = [
  {
    name: "The Donut Burger",
    description:
      "A juicy beef patty with melted cheese, lettuce, tomato, and special sauce between two halves of a golden glazed donut. Yes, really. Yes, it's incredible.",
    image: "/images/donut-burger.png",
  },
  {
    name: "Golden Apple Fritters",
    description:
      "The namesake. Crispy on the outside, soft and loaded with apple chunks on the inside. They sell out fast on weekends, so get here early.",
    image: "/images/apple-fritters.png",
  },
  {
    name: "Churro French Toast",
    description:
      "Thick-cut french toast coated in cinnamon sugar, drizzled with chocolate sauce, topped with whipped cream and fresh strawberries. Breakfast or dessert? Both.",
    image: "/images/churro-french-toast.png",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-end pt-20 overflow-hidden">
        <Image
          src="/images/hero-spread.png"
          alt="A spread of Apple Fritter favorites including donut burgers, fries, and milkshakes"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/40 to-transparent" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 pb-12 sm:pb-20 w-full">
          <div className="max-w-2xl">
            <p className="font-[family-name:var(--font-accent)] text-gold-light text-sm sm:text-base font-semibold tracking-wider uppercase mb-3">
              San Mateo, CA &middot; Since 2014
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-cream leading-[1.1] mb-4">
              Life&apos;s too short
              <br />
              for boring food.
            </h1>
            <p className="text-cream/80 text-lg sm:text-xl max-w-lg mb-8 leading-relaxed">
              Donut burgers. Golden fritters. Fruity pebble shakes. We make
              comfort food worth waking up for.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="https://www.doordash.com/store/apple-fritter-san-mateo-336498/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-red text-white px-7 py-3.5 rounded-full font-bold text-base hover:bg-red-dark transition-colors shadow-lg"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.071 8.409a6.09 6.09 0 00-5.396-3.228H.584A.588.588 0 00.1 6.184l.003.008a15.867 15.867 0 007.122 9.073 15.868 15.868 0 0010.905 2.059c.199-.021.398-.05.596-.083a6.09 6.09 0 004.345-8.832z" />
                </svg>
                Order on DoorDash
              </a>
              <Link
                href="/menu"
                className="inline-flex items-center gap-2 bg-cream/10 backdrop-blur-sm text-cream border border-cream/30 px-7 py-3.5 rounded-full font-bold text-base hover:bg-cream/20 transition-colors"
              >
                View Menu
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Signature Items */}
      <section className="py-16 sm:py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16">
            <p className="font-[family-name:var(--font-accent)] text-red text-sm font-semibold tracking-wider uppercase mb-2">
              The Hits
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal">
              What People Come For
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {signatureItems.map((item) => (
              <div
                key={item.name}
                className="group bg-warm-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
              >
                <div className="relative aspect-[3/2] overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-[family-name:var(--font-accent)] text-xl font-bold text-charcoal mb-2">
                    {item.name}
                  </h3>
                  <p className="text-charcoal/70 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Vibe */}
      <section className="py-16 sm:py-24 bg-green-dark text-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="font-[family-name:var(--font-accent)] text-gold-light text-sm font-semibold tracking-wider uppercase mb-2">
                The Story
              </p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                A tiny cafe with
                <br />a big personality.
              </h2>
              <div className="space-y-4 text-cream/80 leading-relaxed">
                <p>
                  Apple Fritter opened in December 2014 on a quiet street in San
                  Mateo. Since then, locals and visitors from all over have been
                  coming back for the kind of breakfast and lunch that sticks
                  with you.
                </p>
                <p>
                  The interior? Designed by the owners themselves, it reflects
                  the past, present, and future of society in the most satirical
                  way possible. Taco-shaped windows. Classics on the TV. A vibe
                  that says &quot;we don&apos;t take ourselves too seriously, but we take
                  our food very seriously.&quot;
                </p>
                <p className="text-gold-light font-medium italic font-[family-name:var(--font-display)]">
                  &quot;Cooking is like love. It should be entered into with abandon
                  or not at all.&quot; &mdash; Julia Child
                </p>
              </div>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-gold-light font-bold mt-6 hover:text-gold transition-colors"
              >
                Read Our Full Story
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
              </Link>
            </div>
            <div className="relative">
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/fruity-pebble-shake.png"
                  alt="Fruity Pebble milkshake at Apple Fritter"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-gold text-charcoal px-6 py-3 rounded-xl shadow-lg">
                <p className="font-[family-name:var(--font-accent)] font-bold text-lg">
                  FYI
                </p>
                <p className="text-sm font-medium">
                  Fritters sell out fast on weekends!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Loaded Fries Feature */}
      <section className="relative py-16 sm:py-24 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/loaded-fries.png"
            alt="Loaded fries at Apple Fritter"
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-charcoal/60 backdrop-blur-[2px]" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <p className="font-[family-name:var(--font-accent)] text-gold-light text-sm font-semibold tracking-wider uppercase mb-2">
            Not Your Average Fries
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-cream mb-4">
            Fritter Fries. Godzilla Fries.
            <br />
            Fries that need their own zip code.
          </h2>
          <p className="text-cream/80 text-lg max-w-2xl mx-auto mb-8">
            Pulled pork. Chorizo. Bacon cheese. We load our fries the way
            fries deserve to be loaded.
          </p>
          <Link
            href="/menu"
            className="inline-flex items-center gap-2 bg-gold text-charcoal px-7 py-3.5 rounded-full font-bold text-base hover:bg-gold-light transition-colors shadow-lg"
          >
            See the Full Menu
          </Link>
        </div>
      </section>

      {/* Order Section */}
      <section className="py-16 sm:py-24 bg-warm-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <p className="font-[family-name:var(--font-accent)] text-red text-sm font-semibold tracking-wider uppercase mb-2">
            Hungry?
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal mb-4">
            Get Apple Fritter delivered.
          </h2>
          <p className="text-charcoal/70 text-lg max-w-xl mx-auto mb-10">
            Order for pickup or delivery. Catering available for events, offices,
            and parties.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://www.doordash.com/store/apple-fritter-san-mateo-336498/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-red text-white px-8 py-4 rounded-full font-bold text-base hover:bg-red-dark transition-colors shadow-lg"
            >
              DoorDash
            </a>
            <a
              href="https://www.ezcater.com/catering/apple-fritter-3"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-charcoal text-cream px-8 py-4 rounded-full font-bold text-base hover:bg-charcoal/80 transition-colors"
            >
              EZCater (Catering)
            </a>
            <a
              href="https://www.ubereats.com/store/apple-fritter/aeJ5kzFuUoOGXxvIcf-tNA"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-green text-cream px-8 py-4 rounded-full font-bold text-base hover:bg-green-dark transition-colors"
            >
              Uber Eats
            </a>
          </div>
        </div>
      </section>

      {/* Hours & Location */}
      <section className="py-16 sm:py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <p className="font-[family-name:var(--font-accent)] text-red text-sm font-semibold tracking-wider uppercase mb-2">
                Visit Us
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold text-charcoal mb-8">
                Come hungry, leave happy.
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="font-[family-name:var(--font-accent)] text-lg font-bold text-charcoal mb-2">
                    Hours
                  </h3>
                  <div className="space-y-1 text-charcoal/70">
                    <p>Monday through Friday: 7:30 AM to 2:00 PM</p>
                    <p>Saturday and Sunday: 8:00 AM to 2:00 PM</p>
                  </div>
                </div>
                <div>
                  <h3 className="font-[family-name:var(--font-accent)] text-lg font-bold text-charcoal mb-2">
                    Location
                  </h3>
                  <a
                    href="https://maps.google.com/?q=1901+S+Norfolk+Street+San+Mateo+CA+94403"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-charcoal/70 hover:text-red transition-colors"
                  >
                    1901 S. Norfolk Street
                    <br />
                    San Mateo, CA 94403
                  </a>
                </div>
                <div>
                  <h3 className="font-[family-name:var(--font-accent)] text-lg font-bold text-charcoal mb-2">
                    Contact
                  </h3>
                  <div className="space-y-1">
                    <a
                      href="tel:+16505259125"
                      className="block text-charcoal/70 hover:text-red transition-colors"
                    >
                      (650) 525-9125
                    </a>
                    <a
                      href="mailto:applefrittereatery@gmail.com"
                      className="block text-charcoal/70 hover:text-red transition-colors"
                    >
                      applefrittereatery@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
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
    </>
  );
}
