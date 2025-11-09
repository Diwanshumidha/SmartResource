"use client";

import { Hero } from "@/components/hero";
import { Features } from "@/components/features";
import { CTA } from "@/components/cta";
import { Footer } from "@/components/footer";
import ProductsSection from "@/components/products";
import Testimonials from "@/components/testimonials";
import FAQs from "@/components/faq";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Hero />
      {/* <UseCases /> */}
      <Features />
      <ProductsSection />
      {/* <Pricing /> */}
      <FAQs />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  );
}
