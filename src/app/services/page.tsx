import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  GiCrystalBall,
  GiCrystalGrowth,
  GiMagicSwirl,
  GiSunRadiations,
  GiYinYang,
} from "react-icons/gi";
import { client } from "@/sanity/lib/client";
import { servicesQuery } from "@/sanity/lib/queries";

export const metadata: Metadata = {
  title: "Services | NiharikaHealer",
  description:
    "Explore Niharika's range of spiritual services including tarot card reading, numerology, crystal healing, remedial solutions, and yantra remedies.",
};

// Deterministic colour themes — cycle through with index % themes.length
const THEMES = [
  {
    icon: GiCrystalBall,
    color: "from-purple-500 to-indigo-600",
    bgColor: "bg-purple-50",
  },
  {
    icon: GiSunRadiations,
    color: "from-amber-500 to-orange-600",
    bgColor: "bg-amber-50",
  },
  {
    icon: GiCrystalGrowth,
    color: "from-emerald-500 to-teal-600",
    bgColor: "bg-emerald-50",
  },
  {
    icon: GiMagicSwirl,
    color: "from-rose-500 to-pink-600",
    bgColor: "bg-rose-50",
  },
  {
    icon: GiYinYang,
    color: "from-sky-500 to-blue-600",
    bgColor: "bg-sky-50",
  },
];

type SanityService = {
  _id: string;
  title: string;
  slug?: { current: string };
  shortDescription?: string;
  fullDescription?: string;
  icon?: string;
  features?: string[];
  imageUrl?: string;
};

export default async function ServicesPage() {
  const fetchedServices: SanityService[] = await client.fetch(
    servicesQuery,
    {},
    { next: { revalidate: 0 } }
  );

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
            Services
          </span>
          <h1 className="heading-xl mb-4 text-white">
            Healing{" "}
            <span className="bg-gradient-to-r from-gold-400 to-gold-300 bg-clip-text text-transparent">
              Services
            </span>
          </h1>
          <p className="mx-auto max-w-xl text-lg text-gray-300">
            Explore a comprehensive range of spiritual services designed to
            bring clarity, healing, and transformation into your life.
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="section-padding bg-white">
        <div className="container-main space-y-20">
          {fetchedServices && fetchedServices.length > 0 ? (
            fetchedServices.map((service, i) => {
              const theme = THEMES[i % THEMES.length];
              const Icon = theme.icon;
              return (
                <div key={service._id} id={service.slug?.current ?? service._id} className="scroll-mt-24">
                  <div className={`grid items-center gap-12 lg:grid-cols-2`}>
                    {/* Image / Visual Side */}
                    <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                      <div
                        className={`aspect-[4/3] overflow-hidden rounded-2xl ${theme.bgColor} flex items-center justify-center`}
                      >
                        {service.imageUrl ? (
                          <Image
                            src={service.imageUrl}
                            alt={service.title}
                            width={600}
                            height={450}
                            className="h-full w-full object-cover"
                          />
                        ) : (
                          <div className="text-center">
                            <div
                              className={`mx-auto mb-4 flex h-24 w-24 items-center justify-center rounded-2xl bg-gradient-to-br ${theme.color} text-white shadow-xl`}
                            >
                              <Icon className="h-12 w-12" />
                            </div>
                            <p className="text-lg font-heading font-bold text-gray-700">
                              {service.title}
                            </p>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Content Side */}
                    <div className={`space-y-6 ${i % 2 === 1 ? "lg:order-1" : ""}`}>
                      <div
                        className={`inline-flex items-center gap-2 rounded-full bg-gradient-to-r ${theme.color} px-4 py-1.5 text-xs font-semibold text-white`}
                      >
                        <Icon className="h-3.5 w-3.5" />
                        {service.shortDescription ?? service.title}
                      </div>
                      <h2 className="heading-md text-mystic-dark">{service.title}</h2>
                      {service.fullDescription && (
                        <p className="text-gray-600 leading-relaxed">
                          {service.fullDescription}
                        </p>
                      )}
                      {service.features && service.features.length > 0 && (
                        <ul className="space-y-3">
                          {service.features.map((feature) => (
                            <li
                              key={feature}
                              className="flex items-center gap-3 text-sm text-gray-700"
                            >
                              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-primary-100 text-xs text-primary-600">
                                &#10003;
                              </span>
                              {feature}
                            </li>
                          ))}
                        </ul>
                      )}
                      <Link href="/contact" className="btn-primary">
                        Book This Service
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <p className="text-center text-gray-500 py-12">
              No services found. Add some in Sanity Studio!
            </p>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-gradient-mystic py-20">
        <div className="absolute inset-0">
          <div className="absolute -right-20 top-0 h-64 w-64 rounded-full bg-primary-600/20 blur-3xl" />
          <div className="absolute -left-20 bottom-0 h-64 w-64 rounded-full bg-gold-500/15 blur-3xl" />
        </div>
        <div className="container-main relative z-10 text-center">
          <h2 className="heading-lg mb-4 text-white">
            Not Sure Which Service is{" "}
            <span className="bg-gradient-to-r from-gold-400 to-gold-300 bg-clip-text text-transparent">
              Right for You
            </span>
            ?
          </h2>
          <p className="mx-auto mb-8 max-w-xl text-gray-300">
            Get in touch and Niharika will help you choose the perfect service
            based on your needs and concerns.
          </p>
          <Link href="/contact" className="btn-gold text-base">
            Get in Touch
          </Link>
        </div>
      </section>
    </>
  );
}
