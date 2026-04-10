"use client";

import { useState } from "react";
import { FaStar, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Image from "next/image";

interface Testimonial {
  _id: string;
  name: string;
  location?: string;
  rating: number;
  text: string;
  imageUrl?: string;
}

interface Props {
  testimonials: Testimonial[];
}

export default function TestimonialSlider({ testimonials }: Props) {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prev = () =>
    setCurrent(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );

  const t = testimonials[current];

  return (
    <div className="mx-auto max-w-3xl">
      <div className="relative rounded-2xl bg-white p-8 shadow-lg md:p-12">
        {/* Quote mark */}
        <div className="absolute -top-4 left-8 text-6xl font-heading text-primary-200">
          &ldquo;
        </div>

        {/* Stars */}
        <div className="mb-4 flex gap-1">
          {[...Array(t.rating)].map((_, i) => (
            <FaStar key={i} className="h-5 w-5 text-gold-500" />
          ))}
        </div>

        {/* Text */}
        <p className="mb-6 text-lg leading-relaxed text-gray-700 italic">
          {t.text}
        </p>

        {/* Author */}
        <div className="flex items-center gap-4">
          {t.imageUrl && (
            <Image
              src={t.imageUrl}
              alt={t.name}
              width={48}
              height={48}
              className="h-12 w-12 rounded-full object-cover"
            />
          )}
          <div>
            <p className="font-bold text-mystic-dark">{t.name}</p>
            {t.location && (
              <p className="text-sm text-gray-500">{t.location}</p>
            )}
          </div>
        </div>

        {/* Navigation */}
        <div className="mt-8 flex items-center justify-between">
          <div className="flex gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`h-2 rounded-full transition-all ${
                  i === current
                    ? "w-8 bg-primary-600"
                    : "w-2 bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>
          <div className="flex gap-2">
            <button
              onClick={prev}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 text-gray-600 transition-colors hover:border-primary-300 hover:text-primary-600"
              aria-label="Previous testimonial"
            >
              <FaChevronLeft className="h-4 w-4" />
            </button>
            <button
              onClick={next}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 text-gray-600 transition-colors hover:border-primary-300 hover:text-primary-600"
              aria-label="Next testimonial"
            >
              <FaChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
