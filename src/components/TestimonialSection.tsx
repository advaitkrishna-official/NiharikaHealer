import { client } from "@/sanity/lib/client";
import { testimonialsQuery } from "@/sanity/lib/queries";
import TestimonialSlider from "./TestimonialSlider";

interface Testimonial {
  _id: string;
  name: string;
  location?: string;
  rating: number;
  text: string;
  imageUrl?: string;
}

const FALLBACK_TESTIMONIALS: Testimonial[] = [
  { _id: "1", name: "Priya Sharma", location: "Delhi", rating: 5, text: "Niharika's tarot reading was incredibly accurate and insightful. She helped me understand my career path and make important decisions with confidence. Truly a gifted healer!" },
  { _id: "2", name: "Rahul Verma", location: "Mumbai", rating: 5, text: "I was skeptical at first, but Niharika's crystal healing session completely changed my perspective. The energy shift was palpable, and I felt a deep sense of peace afterward." },
  { _id: "3", name: "Anita Gupta", location: "Bangalore", rating: 5, text: "The numerology analysis was spot-on! Niharika explained every aspect of my personality and life path with such clarity. Her remedial solutions have been life-changing." },
  { _id: "4", name: "Sanjay Mehta", location: "Jaipur", rating: 5, text: "I've been consulting Niharika for over a year now, and her guidance has been invaluable. Her yantra remedies have brought positive changes in my business and personal life." },
  { _id: "5", name: "Kavita Singh", location: "Kolkata", rating: 5, text: "Niharika's readings are not just predictions — they are roadmaps for transformation. Her compassionate approach and deep spiritual knowledge make every session meaningful." },
];

export default async function TestimonialSection() {
  const testimonials: Testimonial[] = await client.fetch(testimonialsQuery, {}, { next: { revalidate: 0 } });
  const displayTestimonials = testimonials?.length ? testimonials : FALLBACK_TESTIMONIALS;

  return (
    <section className="section-padding bg-mystic-light">
      <div className="container-main">
        {/* Section Header */}
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-widest text-primary-600">
            Testimonials
          </span>
          <h2 className="heading-lg mb-4 text-mystic-dark">
            What My <span className="gradient-text">Clients Say</span>
          </h2>
          <p className="text-gray-600">
            Hear from those whose lives have been transformed through spiritual
            guidance and healing.
          </p>
        </div>

        <TestimonialSlider testimonials={displayTestimonials} />
      </div>
    </section>
  );
}
