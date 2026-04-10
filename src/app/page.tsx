import Hero from "@/components/Hero";
import AboutPreview from "@/components/AboutPreview";
import ServicesOverview from "@/components/ServicesOverview";
import TestimonialSection from "@/components/TestimonialSection";
import CTASection from "@/components/CTASection";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutPreview />
      <ServicesOverview />
      <TestimonialSection />
      <CTASection />
    </>
  );
}
