import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://apple-fritter.treehaus.site"),
  title: "Apple Fritter American Eatery | San Mateo, CA",
  description:
    "Donut burgers, golden apple fritters, fruity pebble shakes, and more. Locally owned since 2014 in San Mateo, CA. Open for breakfast and lunch daily.",
  keywords:
    "apple fritter, donut burger, san mateo restaurant, breakfast san mateo, brunch san mateo, american eatery",
  openGraph: {
    title: "Apple Fritter American Eatery | San Mateo, CA",
    description:
      "Donut burgers, golden apple fritters, fruity pebble shakes, and more. Locally owned since 2014.",
    url: "https://apple-fritter.treehaus.site",
    siteName: "Apple Fritter American Eatery",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Apple Fritter American Eatery - Donut Burgers & More",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Apple Fritter American Eatery | San Mateo, CA",
    description:
      "Donut burgers, golden apple fritters, fruity pebble shakes, and more.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="32x32" />
        <link rel="apple-touch-icon" href="/apple-icon.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;0,900;1,400;1,700&family=DM+Sans:ital,wght@0,400;0,500;0,700&family=Fredoka:wght@400;500;600;700&display=swap" rel="stylesheet" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Restaurant",
              name: "Apple Fritter American Eatery",
              image: "https://apple-fritter.treehaus.site/og-image.png",
              url: "https://apple-fritter.treehaus.site",
              telephone: "+16505259125",
              email: "applefrittereatery@gmail.com",
              address: {
                "@type": "PostalAddress",
                streetAddress: "1901 S. Norfolk Street",
                addressLocality: "San Mateo",
                addressRegion: "CA",
                postalCode: "94403",
                addressCountry: "US",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 37.5485,
                longitude: -122.3132,
              },
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                  ],
                  opens: "07:30",
                  closes: "14:00",
                },
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: ["Saturday", "Sunday"],
                  opens: "08:00",
                  closes: "14:00",
                },
              ],
              servesCuisine: "American",
              priceRange: "$$",
              menu: "https://apple-fritter.treehaus.site/menu",
            }),
          }}
        />
      </head>
      <body className="antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
