import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Niharika | NiharikaHealer",
  description:
    "Learn about Niharika — a dedicated tarot reader, spiritual healer, and energy worker with years of experience guiding people towards clarity and peace.",
};

const journey = [
  {
    year: "Early Life",
    title: "Spiritual Awakening",
    description:
      "From a young age, Niharika felt a deep connection to the spiritual realm. Her intuitive abilities began to manifest early, drawing her towards the mystical arts.",
  },
  {
    year: "Training",
    title: "Mastering the Craft",
    description:
      "Years of dedicated study in tarot, numerology, crystal healing, and ancient remedial sciences under renowned spiritual mentors shaped her expertise.",
  },
  {
    year: "Practice",
    title: "Serving Others",
    description:
      "With a growing list of clients, Niharika began offering her healing services professionally, helping hundreds of individuals find clarity and direction.",
  },
  {
    year: "Today",
    title: "Continuing the Mission",
    description:
      "Today, Niharika continues to guide people on their spiritual journeys, combining ancient wisdom with compassionate intuition to transform lives.",
  },
];

const values = [
  {
    title: "Compassion",
    description:
      "Every reading is conducted with empathy, understanding, and genuine care for your wellbeing.",
  },
  {
    title: "Authenticity",
    description:
      "Honest, transparent guidance — no sugar-coating, just the truth delivered with kindness.",
  },
  {
    title: "Empowerment",
    description:
      "Readings are not about creating dependency — they are about empowering you to make your own choices.",
  },
  {
    title: "Confidentiality",
    description:
      "Your sessions and personal information are always kept strictly private and confidential.",
  },
];

export default function AboutPage() {
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
            About
          </span>
          <h1 className="heading-xl mb-4 text-white">
            Meet{" "}
            <span className="bg-gradient-to-r from-gold-400 to-gold-300 bg-clip-text text-transparent">
              Niharika
            </span>
          </h1>
          <p className="mx-auto max-w-xl text-lg text-gray-300">
            A passionate spiritual healer dedicated to guiding you towards
            clarity, balance, and inner peace.
          </p>
        </div>
      </section>

      {/* About Content */}
      <section className="section-padding bg-white">
        <div className="container-main">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            {/* Image Placeholder */}
            <div className="relative">
              <div className="aspect-square overflow-hidden rounded-2xl bg-gradient-to-br from-primary-100 to-primary-200">
                <div className="flex h-full items-center justify-center">
                  <div className="text-center">
                    <div className="mx-auto mb-4 flex h-32 w-32 items-center justify-center rounded-full bg-primary-600/20">
                      <span className="text-6xl font-heading font-bold text-primary-700">
                        N
                      </span>
                    </div>
                    <p className="text-sm text-primary-600">
                      Photo coming soon
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="space-y-6">
              <h2 className="heading-lg text-mystic-dark">
                My <span className="gradient-text">Story</span>
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Niharika is a gifted tarot reader, spiritual healer, and
                intuitive energy worker who has dedicated her life to helping
                others find clarity and peace. With deep expertise in tarot
                reading, numerology, crystal healing, and ancient remedial
                sciences, she brings a unique blend of ancient wisdom and
                compassionate guidance to every session.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Her journey into the spiritual realm began at a young age, and
                over the years, she has honed her skills under the guidance of
                renowned spiritual mentors. Today, she has helped hundreds of
                individuals navigate life&apos;s challenges, find direction, and
                embrace their true potential.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Whether you are seeking answers about your relationships, career,
                health, or spiritual growth, Niharika offers personalized
                readings and healing sessions that are tailored to your unique
                needs and circumstances.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="section-padding bg-mystic-light">
        <div className="container-main">
          <div className="mx-auto mb-16 max-w-2xl text-center">
            <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-widest text-primary-600">
              My Journey
            </span>
            <h2 className="heading-lg text-mystic-dark">
              The Path of{" "}
              <span className="gradient-text">Spiritual Growth</span>
            </h2>
          </div>

          <div className="mx-auto max-w-3xl space-y-8">
            {journey.map((item, i) => (
              <div key={i} className="flex gap-6">
                <div className="flex flex-col items-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary-600 text-sm font-bold text-white shadow-lg">
                    {i + 1}
                  </div>
                  {i < journey.length - 1 && (
                    <div className="w-0.5 flex-1 bg-primary-200" />
                  )}
                </div>
                <div className="pb-8">
                  <span className="text-sm font-semibold text-primary-600">
                    {item.year}
                  </span>
                  <h3 className="mb-2 text-xl font-bold text-mystic-dark">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-white">
        <div className="container-main">
          <div className="mx-auto mb-16 max-w-2xl text-center">
            <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-widest text-primary-600">
              My Values
            </span>
            <h2 className="heading-lg text-mystic-dark">
              What I <span className="gradient-text">Stand For</span>
            </h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => (
              <div key={value.title} className="card-mystic text-center">
                <h3 className="mb-3 text-lg font-bold text-mystic-dark">
                  {value.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-gradient-mystic py-20">
        <div className="absolute inset-0">
          <div className="absolute -right-20 top-0 h-64 w-64 rounded-full bg-primary-600/20 blur-3xl" />
        </div>
        <div className="container-main relative z-10 text-center">
          <h2 className="heading-lg mb-4 text-white">
            Ready for Your{" "}
            <span className="bg-gradient-to-r from-gold-400 to-gold-300 bg-clip-text text-transparent">
              Reading
            </span>
            ?
          </h2>
          <p className="mx-auto mb-8 max-w-xl text-gray-300">
            Book a personalized session and let Niharika guide you towards the
            answers you seek.
          </p>
          <Link href="/contact" className="btn-gold text-base">
            Book a Session
          </Link>
        </div>
      </section>
    </>
  );
}
