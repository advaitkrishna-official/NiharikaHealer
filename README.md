# NiharikaHealer

_**Overview**_
Niharika Healer is a modern, enterprise-grade, highly scalable web application designed for a spiritual healing and tarot reading business. It serves as a unified digital ecosystem, featuring a dynamic marketing site, an integrated e-commerce shop, an SEO-optimized blog, and an interactive CMS-driven portfolio of services and testimonials.

_**Architecture & Core Technology Stack**_
The project follows a modern, headless architecture separating the frontend presentation layer from the content management and data layers.

Frontend Framework: Built entirely on Next.js 14 utilizing the modern App Router (src/app) for server-side rendering (SSR), static site generation (SSG), and optimized client-side routing.
Language: Strictly typed with TypeScript to ensure robust type-safety across components, API routes, and CMS data fetching.
Styling & UI: Utilizes a hybrid styling approach. Tailwind CSS handles atomic utility classes for rapid UI construction, while styled-components is used for complex, dynamic component-level state and interactive UI elements.
Headless CMS: Deeply integrated with Sanity CMS. The backend data structure is completely headless, allowing content editors to modify the site dynamically without deployment cycles.

_**Headless CMS Integration (Sanity)**_
The application avoids hardcoded static data by fetching content in real-time from Sanity.

Embedded Studio: The Sanity Studio is embedded directly into the Next.js application at the /studio route. Content managers can log in and manage the site directly from the same domain.
Abstracted Data Models (sanity/schemas/*):
hero.ts: Manages dynamic promotional banners and CTA buttons on the landing page.
service.ts: Defines the schema for various spiritual offerings (e.g., Reiki, Tarot readings) including pricing, rich text descriptions, and booking links.
product.ts: Powers the eCommerce side of the application, managing inventory items, prices, and high-quality images.
testimonial.ts & blogPost.ts: Modulate social proof and SEO-focused article content.
