import Link from "next/link";

export default function CTASection() {
  return (
    <section className="relative overflow-hidden bg-gradient-mystic py-20">
      {/* Decorative */}
      <div className="absolute inset-0">
        <div className="absolute -right-20 top-0 h-64 w-64 rounded-full bg-primary-600/20 blur-3xl" />
        <div className="absolute -left-20 bottom-0 h-64 w-64 rounded-full bg-gold-500/15 blur-3xl" />
      </div>

      <div className="container-main relative z-10 text-center">
        <h2 className="heading-lg mb-4 text-white">
          Ready to Begin Your{" "}
          <span className="bg-gradient-to-r from-gold-400 to-gold-300 bg-clip-text text-transparent">
            Healing Journey
          </span>
          ?
        </h2>
        <p className="mx-auto mb-8 max-w-xl text-gray-300">
          Take the first step towards clarity and transformation. Book a
          personalized session with Niharika and discover what the universe has
          in store for you.
        </p>
        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Link href="/contact" className="btn-gold text-base">
            Book a Session Now
          </Link>
          <Link
            href="/about"
            className="inline-flex items-center justify-center rounded-full border-2 border-white/20 px-8 py-3 text-sm font-semibold text-white transition-all duration-300 hover:border-white/40 hover:bg-white/10"
          >
            Know More About Niharika
          </Link>
        </div>
      </div>
    </section>
  );
}
