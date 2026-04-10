import Link from "next/link";

export default function AboutPreview() {
  return (
    <section className="section-padding bg-white">
      <div className="container-main">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Image Placeholder */}
          <div className="relative">
            <div className="aspect-[4/5] overflow-hidden rounded-2xl bg-gradient-to-br from-primary-100 to-primary-200">
              <div className="flex h-full items-center justify-center">
                <div className="text-center">
                  <div className="mx-auto mb-4 flex h-24 w-24 items-center justify-center rounded-full bg-primary-600/20">
                    <span className="text-4xl font-heading font-bold text-primary-700">
                      N
                    </span>
                  </div>
                  <p className="text-sm text-primary-600">
                    Photo coming soon
                  </p>
                </div>
              </div>
            </div>
            {/* Decorative badge */}
            <div className="absolute -bottom-6 -right-6 rounded-2xl bg-gold-500 p-6 shadow-xl">
              <p className="text-3xl font-bold text-mystic-dark">5+</p>
              <p className="text-sm font-medium text-mystic-dark/80">
                Years of
                <br />
                Experience
              </p>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-6">
            <span className="inline-block text-sm font-semibold uppercase tracking-widest text-primary-600">
              About Niharika
            </span>
            <h2 className="heading-lg text-mystic-dark">
              Your Trusted{" "}
              <span className="gradient-text">Spiritual Guide</span>
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Niharika is a gifted tarot reader, spiritual healer, and energy
              worker who has been helping individuals find clarity and peace for
              over 5 years. With deep expertise in tarot, numerology, crystal
              healing, and ancient remedial sciences, she offers compassionate
              guidance to help you navigate life&apos;s challenges.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Her intuitive approach combines ancient wisdom with modern
              understanding, providing practical insights that empower you to
              make confident decisions and embrace your highest potential.
            </p>

            <ul className="grid grid-cols-2 gap-3">
              {[
                "Certified Tarot Reader",
                "Crystal Healing Expert",
                "Numerology Specialist",
                "Energy Healer",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-2 text-sm text-gray-700"
                >
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-primary-100 text-primary-600">
                    &#10003;
                  </span>
                  {item}
                </li>
              ))}
            </ul>

            <Link href="/about" className="btn-primary">
              Read Full Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
