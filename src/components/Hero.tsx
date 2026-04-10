import Link from "next/link";
import { client } from "@/sanity/lib/client";
import { heroQuery } from "@/sanity/lib/queries";

interface HeroStat {
  value: string;
  label: string;
}

interface HeroData {
  heading?: string;
  highlightText?: string;
  subtitle?: string;
  ctaText?: string;
  ctaLink?: string;
  stats?: HeroStat[];
  backgroundImageUrl?: string;
}

const FALLBACK: HeroData = {
  heading: "Discover Your Path to",
  highlightText: "Spiritual Clarity",
  subtitle:
    "Let Niharika guide you through the mysteries of tarot, numerology, and energy healing. Unlock the answers you've been seeking and embrace your true potential.",
  ctaText: "Book Your Reading",
  ctaLink: "/contact",
  stats: [
    { value: "500+", label: "Happy Clients" },
    { value: "5+", label: "Years Experience" },
    { value: "4.9", label: "Client Rating" },
  ],
};

export default async function Hero() {
  const data: HeroData = (await client.fetch(heroQuery, {}, { next: { revalidate: 0 } })) ?? FALLBACK;

  const heading = data.heading ?? FALLBACK.heading;
  const highlightText = data.highlightText ?? FALLBACK.highlightText;
  const subtitle = data.subtitle ?? FALLBACK.subtitle;
  const ctaText = data.ctaText ?? FALLBACK.ctaText;
  const ctaLink = data.ctaLink ?? FALLBACK.ctaLink;
  const stats = data.stats?.length ? data.stats : FALLBACK.stats!;

  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-gradient-mystic">
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -left-40 -top-40 h-80 w-80 rounded-full bg-primary-700/20 blur-3xl" />
        <div className="absolute -right-40 top-1/3 h-96 w-96 rounded-full bg-primary-600/10 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 h-64 w-64 rounded-full bg-gold-500/10 blur-3xl" />
        {/* Stars effect */}
        <div className="absolute inset-0 opacity-30">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute h-0.5 w-0.5 rounded-full bg-white"
              style={{
                left: `${(i * 7.3) % 100}%`,
                top: `${(i * 13.7) % 100}%`,
                animationDelay: `${(i * 0.06) % 3}s`,
              }}
            />
          ))}
        </div>
      </div>

      <div className="container-main relative z-10 py-32">
        <div className="mx-auto max-w-3xl text-center">
          {/* Badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary-500/30 bg-primary-900/50 px-4 py-2 text-sm text-primary-300">
            <span className="h-2 w-2 rounded-full bg-primary-400 animate-pulse" />
            Tarot Reader &bull; Healer &bull; Spiritual Guide
          </div>

          {/* Heading */}
          <h1 className="heading-xl mb-6 text-white">
            {heading}{" "}
            <span className="bg-gradient-to-r from-gold-400 to-gold-300 bg-clip-text text-transparent">
              {highlightText}
            </span>
          </h1>

          {/* Subtitle */}
          <p className="mx-auto mb-10 max-w-xl text-lg leading-relaxed text-gray-300">
            {subtitle}
          </p>

          {/* CTAs */}
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link href={ctaLink!} className="btn-gold text-base">
              {ctaText}
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center justify-center rounded-full border-2 border-white/20 px-8 py-3 text-sm font-semibold text-white transition-all duration-300 hover:border-white/40 hover:bg-white/10"
            >
              Explore Services
            </Link>
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 flex flex-wrap items-center justify-center gap-8 text-sm text-gray-400">
            {stats.map((stat, i) => (
              <>
                {i > 0 && <div key={`divider-${i}`} className="h-8 w-px bg-gray-700" />}
                <div key={stat.label} className="flex items-center gap-2">
                  <span className="text-2xl font-bold text-white">{stat.value}</span>
                  <span>{stat.label}</span>
                </div>
              </>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}
