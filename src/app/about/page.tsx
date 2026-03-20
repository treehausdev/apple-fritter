import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About | Apple Fritter American Eatery",
  description:
    "The story of Apple Fritter: a tiny San Mateo cafe with taco-shaped windows, satirical decor, and food that makes people drive across town.",
};

export default function AboutPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative py-16 sm:py-24 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/churro-french-toast.png"
            alt="Churro french toast at Apple Fritter"
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-charcoal/70" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <p className="font-[family-name:var(--font-accent)] text-gold-light text-sm font-semibold tracking-wider uppercase mb-2">
            Since 2014
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-cream mb-4">
            Our Story
          </h1>
          <p className="text-cream/80 text-lg max-w-xl mx-auto">
            How a little cafe on Norfolk Street became San Mateo&apos;s favorite
            place to eat dangerously.
          </p>
        </div>
      </section>

      {/* The Story */}
      <section className="py-16 sm:py-24 bg-cream">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="prose prose-lg max-w-none">
            <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl font-bold text-charcoal mb-8">
              It started with a fritter.
            </h2>
            <div className="space-y-6 text-charcoal/80 text-lg leading-relaxed">
              <p>
                Apple Fritter opened in December 2014 on a quiet stretch of
                South Norfolk Street in San Mateo, California. No investors. No
                franchise playbook. Just two owners with a deep love for comfort
                food and a complete disregard for the idea that breakfast should
                be boring.
              </p>
              <p>
                The concept was simple: take the classics everybody loves and
                turn them up. Way up. French toast became churro french toast.
                Burgers got donut buns. Milkshakes got Fruity Pebbles. And the
                apple fritter? That became the thing that put the cafe on the
                map. Golden, crispy, stuffed with real apple chunks, dusted in
                cinnamon sugar. They sell out before noon most weekends.
              </p>
              <p>
                Since then, locals and visitors from across the Bay Area have
                been coming back again and again. Not just for the food (though
                the food is the reason), but for the feeling. Apple Fritter
                isn&apos;t a chain. It&apos;s not trying to be anything other than what
                it is: a tiny, locally owned cafe where the food is ridiculous
                in the best way and nobody takes themselves too seriously.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Space */}
      <section className="py-16 sm:py-24 bg-warm-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/images/loaded-fries.png"
                alt="Loaded fries at Apple Fritter"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div>
              <p className="font-[family-name:var(--font-accent)] text-red text-sm font-semibold tracking-wider uppercase mb-2">
                The Space
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold text-charcoal mb-6">
                Taco-shaped windows
                <br />
                and satirical walls.
              </h2>
              <div className="space-y-4 text-charcoal/80 leading-relaxed">
                <p>
                  The owners designed the interior themselves. No interior
                  designer. No mood board from Pinterest. Just a vision that
                  reflects the past, present, and future of society in the most
                  satirical way possible.
                </p>
                <p>
                  Sit by the taco-shaped windows and watch cars roll by. Or grab
                  a seat facing the TV playing classics while you wait for your
                  food. The decor is eclectic, playful, and a little bit weird.
                  Just like the menu.
                </p>
                <p>
                  It&apos;s the kind of place where you walk in a stranger and walk
                  out feeling like a regular. No judgment. Just good food and
                  good vibes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-16 sm:py-24 bg-green-dark text-cream">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <p className="font-[family-name:var(--font-accent)] text-gold-light text-sm font-semibold tracking-wider uppercase mb-2">
            The Philosophy
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-8">
            We believe breakfast should be an event.
          </h2>
          <div className="space-y-6 text-cream/80 text-lg leading-relaxed">
            <p>
              Are you going to be living dangerously and try out the
              mouthwatering donut burger? Or will you live to see another day
              with something simpler like a hipsterito vegetarian breakfast
              burrito?
            </p>
            <p>You make the choice. No one is here to judge you.</p>
            <p className="text-gold-light font-[family-name:var(--font-display)] text-xl italic">
              Let&apos;s all just be friends.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-24 bg-cream text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-charcoal mb-4">
            Come see for yourself.
          </h2>
          <p className="text-charcoal/70 text-lg max-w-md mx-auto mb-8">
            1901 S. Norfolk Street, San Mateo. Open daily for breakfast and
            lunch.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/menu"
              className="inline-flex items-center gap-2 bg-red text-white px-7 py-3.5 rounded-full font-bold text-base hover:bg-red-dark transition-colors shadow-lg"
            >
              View the Menu
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-charcoal text-cream px-7 py-3.5 rounded-full font-bold text-base hover:bg-charcoal/80 transition-colors"
            >
              Get Directions
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
