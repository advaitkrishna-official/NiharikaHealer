import { groq } from "next-sanity";

// Services
export const servicesQuery = groq`
  *[_type == "service"] | order(order asc) {
    _id,
    title,
    slug,
    shortDescription,
    fullDescription,
    icon,
    features,
    "imageUrl": image.asset->url
  }
`;

export const serviceBySlugQuery = groq`
  *[_type == "service" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    shortDescription,
    fullDescription,
    icon,
    features,
    image
  }
`;

// Testimonials
export const testimonialsQuery = groq`
  *[_type == "testimonial"] | order(_createdAt asc) {
    _id,
    name,
    location,
    rating,
    text,
    "imageUrl": image.asset->url
  }
`;

// Blog Posts
export const blogPostsQuery = groq`
  *[_type == "blogPost"] | order(publishedAt desc) {
    _id,
    title,
    slug,
    excerpt,
    category,
    publishedAt,
    readTime,
    mainImage
  }
`;

export const blogPostBySlugQuery = groq`
  *[_type == "blogPost" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    excerpt,
    category,
    publishedAt,
    readTime,
    mainImage,
    body
  }
`;

// Products
export const productsQuery = groq`
  *[_type == "product"] | order(order asc) {
    _id,
    name,
    slug,
    description,
    price,
    category,
    badge,
    image
  }
`;

// Hero Section
export const heroQuery = groq`
  *[_type == "hero"][0] {
    _id,
    heading,
    highlightText,
    subtitle,
    ctaText,
    ctaLink,
    stats,
    "backgroundImageUrl": backgroundImage.asset->url
  }
`;
