import { Metadata } from "next";
import ContactForm from "./contact-form";
import { Navbar } from "@/components/navbar";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Let's talk about your professional needs",
  alternates: {
    canonical: `${process.env.SITE_URL}/contact`,
  },
};

export default function ContactPage() {
  return (
    <div className="relative isolate bg-background px-6 py-24 sm:py-32 lg:px-8">
      <div className="mx-auto max-w-xl lg:max-w-4xl">
        <h2 className="text-pretty text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
          Let&apos;s talk about your professional goals and needs!
        </h2>
        <p className="mt-2 text-lg/8 text-foreground/40">
          We help you achieve your professional goals and improve your
          productivity. Whether you need help with your project, or just want to
        </p>
        <div className="mt-16 flex flex-col gap-16 sm:gap-y-20 lg:flex-row">
          <ContactForm />
          <div className="lg:mt-6 lg:w-80 lg:flex-none">
            <div className="flex items-start flex-col">
              <span className="sr-only">Smart</span>
              {/* <LogoIcon className="h-8 w-auto" aria-hidden="true" /> */}
              <span className="mt-1 text-[12px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                Powered by Smart Resource
              </span>
            </div>

            <figure className="mt-10">
              <blockquote className="text-lg/8 font-semibold text-foreground">
                <p>
                  “The premiere software when it comes to enhancing student
                  learning.”
                </p>
              </blockquote>
              <figcaption className="mt-10 flex gap-x-6">
                <img
                  alt=""
                  src="/mike.jpg"
                  className="size-12 flex-none rounded-full bg-gray-50"
                />
                <div>
                  <div className="text-base font-semibold text-foreground">
                    Mike Samhoury
                  </div>
                  <div className="text-sm/6 text-gray-600">
                    CEO of Smart Resource
                  </div>
                </div>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </div>
  );
}
