import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { client } from "@/sanity/lib/client";
import { productsQuery } from "@/sanity/lib/queries";

export const metadata: Metadata = {
  title: "Shop | NiharikaHealer",
  description:
    "Browse spiritual products and services — DOB analysis reports, healing crystals, mantras, and more from NiharikaHealer.",
};

export default async function ShopPage() {
  const products = await client.fetch(productsQuery, {}, { next: { revalidate: 0 } });

  return (
    <>
      {/* Hero Banner */}
      <section className="relative flex items-center bg-gradient-mystic pt-32 pb-20">
        <div className="absolute inset-0">
          <div className="absolute -left-40 top-20 h-80 w-80 rounded-full bg-primary-700/20 blur-3xl" />
          <div className="absolute -right-40 bottom-0 h-64 w-64 rounded-full bg-gold-500/10 blur-3xl" />
        </div>
        <div className="container-main relative z-10 text-center">
          <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-widest text-primary-300">
            Shop
          </span>
          <h1 className="heading-xl mb-4 text-white">
            Spiritual{" "}
            <span className="bg-gradient-to-r from-gold-400 to-gold-300 bg-clip-text text-transparent">
              Shop
            </span>
          </h1>
          <p className="mx-auto max-w-xl text-lg text-gray-300">
            Browse our collection of spiritual products, reports, and healing
            tools curated by Niharika.
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="section-padding bg-white">
        <div className="container-main">
          {products && products.length > 0 ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((product: { _id: string; name: string; description?: string; price: number; category?: string; badge?: string; imageUrl?: string }) => (
              <div
                key={product._id}
                className="card-mystic group flex flex-col"
              >
                {/* Product Image */}
                <div className="relative mb-4 aspect-[4/3] overflow-hidden rounded-xl bg-gradient-to-br from-primary-50 to-primary-100">
                  {product.imageUrl ? (
                    <Image
                      src={product.imageUrl}
                      alt={product.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  ) : (
                    <div className="flex h-full items-center justify-center">
                      <span className="text-4xl font-heading font-bold text-primary-300">
                        {product.category?.charAt(0) ?? "✦"}
                      </span>
                    </div>
                  )}
                  {product.badge && (
                    <span className="absolute left-3 top-3 rounded-full bg-gold-500 px-3 py-1 text-xs font-bold text-mystic-dark">
                      {product.badge}
                    </span>
                  )}
                </div>

                {/* Category */}
                <span className="mb-1 text-xs font-semibold uppercase tracking-wider text-primary-600">
                  {product.category}
                </span>

                {/* Name */}
                <h3 className="mb-2 text-lg font-bold text-mystic-dark group-hover:text-primary-700">
                  {product.name}
                </h3>

                {/* Description */}
                <p className="mb-4 flex-1 text-sm leading-relaxed text-gray-600">
                  {product.description}
                </p>

                {/* Price & CTA */}
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-primary-700">
                    &#8377;{product.price.toLocaleString("en-IN")}
                  </span>
                  <Link
                    href="/contact"
                    className="rounded-full bg-primary-100 px-5 py-2 text-sm font-semibold text-primary-700 transition-all hover:bg-primary-700 hover:text-white"
                  >
                    Buy Now
                  </Link>
                </div>
              </div>
            ))}
          </div>
          ) : (
            <p className="text-center text-gray-500 py-12">No products found. Add some in Sanity Studio!</p>
          )}
        </div>
      </section>

      {/* Custom Order CTA */}
      <section className="relative overflow-hidden bg-gradient-mystic py-20">
        <div className="absolute inset-0">
          <div className="absolute -right-20 top-0 h-64 w-64 rounded-full bg-primary-600/20 blur-3xl" />
        </div>
        <div className="container-main relative z-10 text-center">
          <h2 className="heading-lg mb-4 text-white">
            Looking for Something{" "}
            <span className="bg-gradient-to-r from-gold-400 to-gold-300 bg-clip-text text-transparent">
              Custom
            </span>
            ?
          </h2>
          <p className="mx-auto mb-8 max-w-xl text-gray-300">
            Niharika can create personalized spiritual products and remedies
            tailored to your specific needs. Get in touch to discuss.
          </p>
          <Link href="/contact" className="btn-gold text-base">
            Request Custom Order
          </Link>
        </div>
      </section>
    </>
  );
}
