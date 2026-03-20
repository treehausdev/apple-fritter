import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Menu | Apple Fritter American Eatery",
  description:
    "Donut burgers, golden fritters, loaded fries, fruity pebble shakes, and more. View the full Apple Fritter menu.",
};

interface MenuItem {
  name: string;
  description?: string;
  price?: string;
  badge?: string;
}

interface MenuCategory {
  name: string;
  description?: string;
  items: MenuItem[];
}

const menuCategories: MenuCategory[] = [
  {
    name: "Signature Items",
    description: "The reason people drive across town.",
    items: [
      {
        name: "Donut Burger",
        description:
          "Juicy beef patty, melted cheese, lettuce, tomato, special sauce on a glazed donut bun.",
        badge: "Fan Favorite",
      },
      {
        name: "Apple Fritters",
        description:
          "Golden fried, loaded with real apple chunks, dusted with cinnamon sugar. Sell out fast on weekends.",
        badge: "Get Here Early",
      },
      {
        name: "Fruity Pebble Shake",
        description:
          "Thick milkshake blended with Fruity Pebbles cereal, topped with whipped cream.",
        badge: "Instagram Famous",
      },
    ],
  },
  {
    name: "Burgers",
    description: "All burgers served with your choice of side.",
    items: [
      {
        name: "Donut Burger",
        description: "Beef patty, cheese, lettuce, tomato, special sauce on a glazed donut.",
      },
      {
        name: "Hawaiian Burger",
        description: "Beef patty with grilled pineapple, teriyaki glaze, and swiss cheese.",
      },
      {
        name: "Gilroy Burger",
        description: "Loaded with roasted garlic, garlic aioli, pepper jack cheese.",
      },
      {
        name: "Classic Burger",
        description: "Beef patty, American cheese, lettuce, tomato, onion, pickles.",
      },
      {
        name: "Specialty Burgers",
        description: "Rotating selection. Ask your server about today's specials.",
      },
    ],
  },
  {
    name: "Breakfast Plates",
    description: "Served all day because breakfast doesn't have a bedtime.",
    items: [
      {
        name: "Churro French Toast",
        description:
          "Thick-cut french toast coated in cinnamon sugar, chocolate drizzle, whipped cream, fresh strawberries.",
      },
      {
        name: "Pancake Stack",
        description: "Fluffy buttermilk pancakes with butter and maple syrup.",
      },
      {
        name: "Scrambles",
        description: "Eggs scrambled with your choice of fillings. Served with hash browns and toast.",
      },
      {
        name: "Breakfast Burrito",
        description: "Eggs, cheese, potatoes, and your choice of meat in a flour tortilla.",
      },
      {
        name: "Hipsterito Veggie Burrito",
        description:
          "The vegetarian option that isn't boring. Eggs, cheese, potatoes, peppers, onions, avocado.",
      },
      {
        name: "Hash Browns",
        description: "Golden, crispy, the way hash browns should be.",
      },
    ],
  },
  {
    name: "Loaded Fries",
    description: "Fries that need their own zip code.",
    items: [
      {
        name: "Fritter Fries",
        description:
          "Golden fries loaded with slow-cooked pulled pork, melted cheese, green onions, BBQ drizzle.",
        badge: "Legendary",
      },
      {
        name: "Godzilla Fries",
        description: "Fries piled high with chorizo, nacho cheese, jalapenos, sour cream.",
      },
      {
        name: "Bacon Cheese Fries",
        description: "Classic. Crispy bacon, melted cheddar, ranch on the side.",
      },
      {
        name: "Sweet Potato Fries",
        description: "Crispy sweet potato fries with a side of chipotle aioli.",
      },
      {
        name: "Tater Tots",
        description: "Perfectly golden and crispy. Simple. Perfect.",
      },
    ],
  },
  {
    name: "Donuts & Sweets",
    description: "Made fresh. Gone fast.",
    items: [
      {
        name: "Apple Fritter",
        description: "Our namesake. Crispy, golden, loaded with apple chunks, cinnamon sugar.",
      },
      {
        name: "Blueberry Pie Donut",
        description: "Filled with real blueberry pie filling. Glazed and gorgeous.",
      },
      {
        name: "Fresh Donuts",
        description: "Rotating selection of classic and creative flavors. Ask what's fresh.",
      },
      {
        name: "Crepes",
        description: "Thin and delicate with your choice of sweet fillings.",
      },
      {
        name: "Churros",
        description: "Crispy, cinnamon sugar coated, with chocolate dipping sauce.",
      },
    ],
  },
  {
    name: "Drinks",
    description: "From boba to shakes to good old coffee.",
    items: [
      {
        name: "Fruity Pebble Shake",
        description: "The one you saw on Instagram. Thick, colorful, delicious.",
      },
      {
        name: "Milkshakes",
        description: "Classic flavors: vanilla, chocolate, strawberry, cookies & cream, and more.",
      },
      {
        name: "Iced Milk Teas",
        description: "Smooth, creamy, refreshing. Multiple flavors available.",
      },
      {
        name: "Boba Drinks",
        description: "Add chewy tapioca pearls to any milk tea or smoothie.",
      },
      {
        name: "Coffee",
        description: "Hot or iced. The fuel you need before tackling a donut burger.",
      },
    ],
  },
];

export default function MenuPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative py-16 sm:py-24 bg-red overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div
            className="w-full h-full"
            style={{
              backgroundImage:
                "repeating-linear-gradient(45deg, transparent, transparent 20px, rgba(255,255,255,0.1) 20px, rgba(255,255,255,0.1) 22px)",
            }}
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-cream mb-4">
            The Menu
          </h1>
          <p className="text-cream/80 text-lg max-w-xl mx-auto">
            Everything is made fresh. Prices may vary. If something sounds
            weird, it probably tastes amazing.
          </p>
        </div>
      </section>

      {/* Feature Image Bar */}
      <section className="grid grid-cols-2 sm:grid-cols-4 gap-1">
        {[
          { src: "/images/donut-burger.png", alt: "Donut Burger" },
          { src: "/images/apple-fritters.png", alt: "Apple Fritters" },
          { src: "/images/loaded-fries.png", alt: "Loaded Fries" },
          { src: "/images/fruity-pebble-shake.png", alt: "Fruity Pebble Shake" },
        ].map((img) => (
          <div key={img.alt} className="relative aspect-square overflow-hidden">
            <Image
              src={img.src}
              alt={img.alt}
              fill
              className="object-cover hover:scale-105 transition-transform duration-500"
              sizes="(max-width: 640px) 50vw, 25vw"
            />
          </div>
        ))}
      </section>

      {/* Menu Categories */}
      <section className="py-16 sm:py-24 bg-cream">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          {menuCategories.map((category, catIndex) => (
            <div
              key={category.name}
              className={`${catIndex > 0 ? "mt-16" : ""}`}
            >
              <div className="mb-8 pb-4 border-b-2 border-red/20">
                <h2 className="font-[family-name:var(--font-accent)] text-2xl sm:text-3xl font-bold text-charcoal">
                  {category.name}
                </h2>
                {category.description && (
                  <p className="text-charcoal/60 mt-1">{category.description}</p>
                )}
              </div>
              <div className="space-y-6">
                {category.items.map((item) => (
                  <div
                    key={item.name}
                    className="flex items-start justify-between gap-4"
                  >
                    <div className="flex-1">
                      <div className="flex items-center gap-2 flex-wrap">
                        <h3 className="font-bold text-charcoal text-lg">
                          {item.name}
                        </h3>
                        {item.badge && (
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-gold/20 text-brown">
                            {item.badge}
                          </span>
                        )}
                      </div>
                      {item.description && (
                        <p className="text-charcoal/60 text-sm mt-1 leading-relaxed">
                          {item.description}
                        </p>
                      )}
                    </div>
                    {item.price && (
                      <span className="text-red font-bold text-lg shrink-0">
                        {item.price}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}

          {/* Note */}
          <div className="mt-16 p-6 bg-gold/10 rounded-2xl border border-gold/20 text-center">
            <p className="font-[family-name:var(--font-accent)] text-lg font-bold text-charcoal mb-1">
              Prices not listed?
            </p>
            <p className="text-charcoal/70 text-sm">
              Prices change seasonally. Call us at{" "}
              <a href="tel:+16505259125" className="text-red font-semibold hover:underline">
                (650) 525-9125
              </a>{" "}
              or check DoorDash for current prices and ordering.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-green-dark text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-cream mb-4">
            Hungry yet?
          </h2>
          <p className="text-cream/70 mb-8">Order for pickup or delivery. We won&apos;t judge.</p>
          <a
            href="https://www.doordash.com/store/apple-fritter-san-mateo-336498/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-red text-white px-8 py-4 rounded-full font-bold text-base hover:bg-red-dark transition-colors shadow-lg"
          >
            Order on DoorDash
          </a>
        </div>
      </section>
    </div>
  );
}
