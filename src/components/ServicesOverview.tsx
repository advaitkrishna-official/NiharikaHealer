import Link from "next/link";
import {
  GiCrystalBall,
  GiCrystalGrowth,
  GiMagicSwirl,
  GiSunRadiations,
  GiYinYang,
} from "react-icons/gi";

const services = [
  {
    icon: GiCrystalBall,
    title: "Tarot Card Reading",
    description:
      "Gain profound insights into your life path, relationships, career, and more through personalized tarot readings.",
    href: "/services#tarot",
    color: "from-purple-500 to-indigo-600",
  },
  {
    icon: GiSunRadiations,
    title: "Numerology",
    description:
      "Discover the hidden power of numbers in your life. Get a complete analysis of your date of birth and name vibrations.",
    href: "/services#numerology",
    color: "from-amber-500 to-orange-600",
  },
  {
    icon: GiCrystalGrowth,
    title: "Crystal Healing",
    description:
      "Experience the transformative power of crystals to balance your energy, heal emotional wounds, and promote wellness.",
    href: "/services#crystal",
    color: "from-emerald-500 to-teal-600",
  },
  {
    icon: GiMagicSwirl,
    title: "Remedial Solutions",
    description:
      "Powerful remedial solutions for challenges related to negative energies, obstacles, and life blockages.",
    href: "/services#remedial",
    color: "from-rose-500 to-pink-600",
  },
  {
    icon: GiYinYang,
    title: "Yantra Remedies",
    description:
      "Custom yantra remedies tailored to your specific astrological chart for attracting abundance and protection.",
    href: "/services#yantra",
    color: "from-sky-500 to-blue-600",
  },
];

export default function ServicesOverview() {
  return (
    <section className="section-padding bg-white">
      <div className="container-main">
        {/* Section Header */}
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-widest text-primary-600">
            What I Offer
          </span>
          <h2 className="heading-lg mb-4 text-mystic-dark">
            Healing Services for Your{" "}
            <span className="gradient-text">Mind, Body & Soul</span>
          </h2>
          <p className="text-gray-600">
            Explore a range of spiritual services designed to bring clarity,
            balance, and positive transformation into your life.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <Link
              key={service.title}
              href={service.href}
              className="card-mystic group flex flex-col"
            >
              {/* Icon */}
              <div
                className={`mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br ${service.color} text-white shadow-lg`}
              >
                <service.icon className="h-7 w-7" />
              </div>

              {/* Content */}
              <h3 className="mb-2 text-lg font-bold text-mystic-dark group-hover:text-primary-700">
                {service.title}
              </h3>
              <p className="mb-4 flex-1 text-sm leading-relaxed text-gray-600">
                {service.description}
              </p>
              <span className="text-sm font-semibold text-primary-600 transition-colors group-hover:text-primary-800">
                Learn More &rarr;
              </span>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <Link href="/services" className="btn-primary">
            View All Services
          </Link>
        </div>
      </div>
    </section>
  );
}
