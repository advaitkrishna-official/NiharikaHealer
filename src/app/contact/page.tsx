"use client";

import { useState } from "react";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaWhatsapp,
  FaInstagram,
} from "react-icons/fa";

const contactInfo = [
  {
    icon: FaEnvelope,
    label: "Email",
    value: "niharika@niharikahealer.com",
    href: "mailto:niharika@niharikahealer.com",
  },
  {
    icon: FaPhone,
    label: "Phone",
    value: "+91 XXXXX XXXXX",
    href: "tel:+91XXXXXXXXXX",
  },
  {
    icon: FaWhatsapp,
    label: "WhatsApp",
    value: "Message on WhatsApp",
    href: "https://wa.me/",
  },
  {
    icon: FaInstagram,
    label: "Instagram",
    value: "@niharikahealer",
    href: "https://instagram.com/niharikahealer",
  },
  {
    icon: FaMapMarkerAlt,
    label: "Location",
    value: "India",
    href: null,
  },
];

const serviceOptions = [
  "Tarot Card Reading",
  "Numerology / DOB Analysis",
  "Crystal Healing",
  "Remedial Solutions",
  "Yantra Remedies",
  "Other",
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In production, this would send to an API endpoint
    setSubmitted(true);
  };

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
            Contact
          </span>
          <h1 className="heading-xl mb-4 text-white">
            Book Your{" "}
            <span className="bg-gradient-to-r from-gold-400 to-gold-300 bg-clip-text text-transparent">
              Session
            </span>
          </h1>
          <p className="mx-auto max-w-xl text-lg text-gray-300">
            Ready to begin your healing journey? Reach out and let&apos;s
            schedule your personalized session.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="section-padding bg-white">
        <div className="container-main">
          <div className="grid gap-12 lg:grid-cols-5">
            {/* Contact Info */}
            <div className="space-y-8 lg:col-span-2">
              <div>
                <h2 className="heading-md mb-4 text-mystic-dark">
                  Get in <span className="gradient-text">Touch</span>
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  Have questions or ready to book? Reach out through any of the
                  channels below, or fill out the form and I&apos;ll get back to
                  you within 24 hours.
                </p>
              </div>

              <div className="space-y-4">
                {contactInfo.map((item) => (
                  <div key={item.label} className="flex items-start gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-100 text-primary-600">
                      <item.icon className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-500">
                        {item.label}
                      </p>
                      {item.href ? (
                        <a
                          href={item.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-mystic-dark hover:text-primary-600"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-mystic-dark">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Booking Process */}
              <div className="rounded-2xl bg-mystic-light p-6">
                <h3 className="mb-4 text-lg font-bold text-mystic-dark">
                  How Booking Works
                </h3>
                <ol className="space-y-3 text-sm text-gray-600">
                  <li className="flex gap-3">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary-600 text-xs font-bold text-white">
                      1
                    </span>
                    Fill out the form with your details and preferred service.
                  </li>
                  <li className="flex gap-3">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary-600 text-xs font-bold text-white">
                      2
                    </span>
                    Receive a confirmation and payment details via email.
                  </li>
                  <li className="flex gap-3">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary-600 text-xs font-bold text-white">
                      3
                    </span>
                    Upon payment, get a calendar link to book your slot.
                  </li>
                  <li className="flex gap-3">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary-600 text-xs font-bold text-white">
                      4
                    </span>
                    Attend your session and receive your recording.
                  </li>
                </ol>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3">
              <div className="rounded-2xl bg-white p-8 shadow-lg ring-1 ring-gray-100">
                {submitted ? (
                  <div className="flex min-h-[400px] flex-col items-center justify-center text-center">
                    <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                      <span className="text-3xl text-green-600">&#10003;</span>
                    </div>
                    <h3 className="mb-2 text-2xl font-bold text-mystic-dark">
                      Thank You!
                    </h3>
                    <p className="mb-6 text-gray-600">
                      Your message has been sent successfully. Niharika will get
                      back to you within 24 hours.
                    </p>
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({
                          name: "",
                          email: "",
                          phone: "",
                          service: "",
                          message: "",
                        });
                      }}
                      className="btn-primary"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid gap-6 sm:grid-cols-2">
                      <div>
                        <label
                          htmlFor="name"
                          className="mb-2 block text-sm font-medium text-gray-700"
                        >
                          Full Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          required
                          value={formData.name}
                          onChange={(e) =>
                            setFormData({ ...formData, name: e.target.value })
                          }
                          className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm transition-all focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20"
                          placeholder="Your name"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="email"
                          className="mb-2 block text-sm font-medium text-gray-700"
                        >
                          Email *
                        </label>
                        <input
                          type="email"
                          id="email"
                          required
                          value={formData.email}
                          onChange={(e) =>
                            setFormData({ ...formData, email: e.target.value })
                          }
                          className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm transition-all focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20"
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>

                    <div className="grid gap-6 sm:grid-cols-2">
                      <div>
                        <label
                          htmlFor="phone"
                          className="mb-2 block text-sm font-medium text-gray-700"
                        >
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          value={formData.phone}
                          onChange={(e) =>
                            setFormData({ ...formData, phone: e.target.value })
                          }
                          className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm transition-all focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20"
                          placeholder="+91 XXXXX XXXXX"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="service"
                          className="mb-2 block text-sm font-medium text-gray-700"
                        >
                          Service Interested In *
                        </label>
                        <select
                          id="service"
                          required
                          value={formData.service}
                          onChange={(e) =>
                            setFormData({ ...formData, service: e.target.value })
                          }
                          className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm transition-all focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20"
                        >
                          <option value="">Select a service</option>
                          {serviceOptions.map((opt) => (
                            <option key={opt} value={opt}>
                              {opt}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="mb-2 block text-sm font-medium text-gray-700"
                      >
                        Your Message *
                      </label>
                      <textarea
                        id="message"
                        required
                        rows={5}
                        value={formData.message}
                        onChange={(e) =>
                          setFormData({ ...formData, message: e.target.value })
                        }
                        className="w-full resize-none rounded-xl border border-gray-200 px-4 py-3 text-sm transition-all focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20"
                        placeholder="Tell me about what you're looking for..."
                      />
                    </div>

                    <button type="submit" className="btn-primary w-full">
                      Send Message
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
