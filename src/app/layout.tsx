import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { SanityLive } from "@/sanity/lib/live";

export const metadata: Metadata = {
  title: "Niharika Healer | Tarot Reader, Healer & Spiritual Guide",
  description:
    "Discover clarity and healing with Niharika — an experienced tarot reader, spiritual healer, and energy worker. Book your personalized reading today.",
  keywords: [
    "tarot reading",
    "spiritual healing",
    "crystal healing",
    "numerology",
    "energy healing",
    "Niharika Healer",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Playfair+Display:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <SanityLive />
      </body>
    </html>
  );
}
