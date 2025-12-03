import { Metadata } from "next";
import ContactForm from "./contact-form";
import { Navbar } from "@/components/navbar";
import FullLogoIcon from "@/components/logos/full_logo";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Let's talk about your needs",
  alternates: {
    canonical: `${process.env.SITE_URL}/contact`,
  },
};

export default function ContactPage() {
  return (
    <div className="relative isolate bg-background px-6 py-24 sm:py-32 lg:px-8">
      <div className="mx-auto max-w-xl lg:max-w-4xl">
        <h2 className="text-pretty text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
          Let&apos;s talk about your goals and needs!
        </h2>
        <p className="mt-2 text-lg/8 text-foreground/40">
          We help you achieve your goals and improve your
          productivity. Whether you need help with your project, or just want to
          chat, we&apos;re here for you.
        </p>
        <div className="mt-16 flex flex-col gap-16 sm:gap-y-20 lg:flex-row">
          <ContactForm />
          <div className="lg:mt-6 lg:w-80 lg:flex-none">
            <div className="flex items-start flex-col">
              <span className="sr-only">Smart</span>
              <FullLogoIcon className="w-40" />
            </div>

            <figure className="mt-4">
              <blockquote className="text-lg/8 font-semibold text-foreground">
                <p>
                  “The AI platform that adapts to you streamlining work, learning, and collaboration with precision and ease.”
                </p>
              </blockquote>
            </figure>
          </div>
        </div>
      </div>
    </div>
  );
}
