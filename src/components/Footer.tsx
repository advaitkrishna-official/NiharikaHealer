import Link from "next/link";
import {
  FaInstagram,
  FaFacebookF,
  FaYoutube,
  FaWhatsapp,
} from "react-icons/fa";

const quickLinks = [
  { href: "/about", label: "About Niharika" },
  { href: "/services", label: "Services" },
  { href: "/shop", label: "Shop" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

const services = [
  { href: "/services#tarot", label: "Tarot Card Reading" },
  { href: "/services#numerology", label: "Numerology" },
  { href: "/services#crystal", label: "Crystal Healing" },
  { href: "/services#remedial", label: "Remedial Solutions" },
  { href: "/services#yantra", label: "Yantra Remedies" },
];

const socialLinks = [
  { href: "https://instagram.com", icon: FaInstagram, label: "Instagram" },
  { href: "https://facebook.com", icon: FaFacebookF, label: "Facebook" },
  { href: "https://youtube.com", icon: FaYoutube, label: "YouTube" },
  { href: "https://wa.me/", icon: FaWhatsapp, label: "WhatsApp" },
];

export default function Footer() {
  return (
    <footer className="bg-mystic-dark text-gray-300">
      {/* Main Footer */}
      <div className="container-main py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-primary-600 to-primary-800">
                <span className="text-lg font-bold text-white font-heading">
                  N
                </span>
              </div>
              <span className="text-xl font-bold font-heading text-white">
                Niharika<span className="text-primary-400">Healer</span>
              </span>
            </Link>
            <p className="text-sm leading-relaxed text-gray-400">
              Guiding you towards clarity, healing, and spiritual awakening
              through ancient wisdom and intuitive readings.
            </p>
            {/* Social Icons */}
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-mystic-medium text-gray-400 transition-all hover:bg-primary-700 hover:text-white"
                  aria-label={social.label}
                >
                  <social.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 transition-colors hover:text-primary-400"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
              Services
            </h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.href}>
                  <Link
                    href={service.href}
                    className="text-sm text-gray-400 transition-colors hover:text-primary-400"
                  >
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
              Get in Touch
            </h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li>
                <span className="block font-medium text-gray-300">Email</span>
                niharika@niharikahealer.com
              </li>
              <li>
                <span className="block font-medium text-gray-300">Phone</span>
                +91 XXXXX XXXXX
              </li>
              <li>
                <span className="block font-medium text-gray-300">
                  Location
                </span>
                India
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-mystic-medium">
        <div className="container-main flex flex-col items-center justify-between gap-4 py-6 text-sm text-gray-500 sm:flex-row">
          <p>&copy; {new Date().getFullYear()} NiharikaHealer. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-primary-400">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-primary-400">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
