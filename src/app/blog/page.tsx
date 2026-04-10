import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { client } from "@/sanity/lib/client";
import { blogPostsQuery } from "@/sanity/lib/queries";

export const metadata: Metadata = {
  title: "Blog | NiharikaHealer",
  description:
    "Read insightful articles on tarot, numerology, crystal healing, spirituality, and personal growth by Niharika.",
};

type BlogPost = {
  _id: string;
  title: string;
  slug: { current: string };
  excerpt?: string;
  category?: string;
  publishedAt?: string;
  readTime?: string;
  mainImageUrl?: string;
};

function formatDate(dateStr?: string) {
  if (!dateStr) return null;
  return new Date(dateStr).toLocaleDateString("en-IN", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default async function BlogPage() {
  const posts: BlogPost[] = await client.fetch(blogPostsQuery, {}, { next: { revalidate: 0 } });

  // Derive unique categories from fetched posts
  const categories = [
    "All",
    ...Array.from(new Set(posts.map((p) => p.category).filter(Boolean))),
  ];

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
            Blog
          </span>
          <h1 className="heading-xl mb-4 text-white">
            Insights &{" "}
            <span className="bg-gradient-to-r from-gold-400 to-gold-300 bg-clip-text text-transparent">
              Wisdom
            </span>
          </h1>
          <p className="mx-auto max-w-xl text-lg text-gray-300">
            Explore articles on tarot, healing, numerology, and spiritual growth
            to deepen your understanding.
          </p>
        </div>
      </section>

      {/* Blog Content */}
      <section className="section-padding bg-white">
        <div className="container-main">
          {/* Categories */}
          <div className="mb-12 flex flex-wrap gap-2 justify-center">
            {categories.map((cat) => (
              <span
                key={cat}
                className={`rounded-full px-5 py-2 text-sm font-medium ${
                  cat === "All"
                    ? "bg-primary-700 text-white"
                    : "bg-primary-50 text-primary-700"
                }`}
              >
                {cat}
              </span>
            ))}
          </div>

          {/* Blog Grid */}
          {posts && posts.length > 0 ? (
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {posts.map((post) => (
                <article key={post._id} className="card-mystic group flex flex-col">
                  {/* Image */}
                  <div className="relative mb-4 aspect-video overflow-hidden rounded-xl bg-gradient-to-br from-primary-50 to-primary-100">
                    {post.mainImageUrl ? (
                      <Image
                        src={post.mainImageUrl}
                        alt={post.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                    ) : (
                      <div className="flex h-full items-center justify-center">
                        <span className="text-3xl font-heading font-bold text-primary-300">
                          {post.category?.charAt(0) ?? "✦"}
                        </span>
                      </div>
                    )}
                    {post.category && (
                      <span className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-primary-700">
                        {post.category}
                      </span>
                    )}
                  </div>

                  {/* Meta */}
                  <div className="mb-2 flex items-center gap-3 text-xs text-gray-500">
                    {post.publishedAt && <span>{formatDate(post.publishedAt)}</span>}
                    {post.publishedAt && post.readTime && <span>&bull;</span>}
                    {post.readTime && <span>{post.readTime}</span>}
                  </div>

                  {/* Title */}
                  <h3 className="mb-2 text-lg font-bold text-mystic-dark group-hover:text-primary-700">
                    <Link href={`/blog/${post.slug?.current}`}>{post.title}</Link>
                  </h3>

                  {/* Excerpt */}
                  {post.excerpt && (
                    <p className="mb-4 flex-1 text-sm leading-relaxed text-gray-600">
                      {post.excerpt}
                    </p>
                  )}

                  {/* Read More */}
                  <Link
                    href={`/blog/${post.slug?.current}`}
                    className="text-sm font-semibold text-primary-600 transition-colors group-hover:text-primary-800"
                  >
                    Read More &rarr;
                  </Link>
                </article>
              ))}
            </div>
          ) : (
            <p className="text-center text-gray-500 py-12">
              No blog posts yet. Add some in Sanity Studio!
            </p>
          )}
        </div>
      </section>
    </>
  );
}
