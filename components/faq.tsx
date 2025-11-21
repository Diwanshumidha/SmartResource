"use client";

import type React from "react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";
import { faqs } from "@/constant/faq";

export default function FAQs() {
  return (
    <section className="bg-card/50 py-20">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="flex flex-col gap-10 md:flex-row md:gap-16">
          <div className="md:w-1/3">
            <div className="sticky top-20">
              <h2 className="mt-4 text-3xl font-bold">
                Frequently Asked Questions
              </h2>
              <p className="text-muted-foreground mt-4">
                Can't find what you're looking for? Contact our{" "}
                <Link
                  href="/contact"
                  className="text-primary font-medium hover:underline"
                >
                  customer support team
                </Link>
              </p>
              <Link
                href="/faqs"
                className="inline-block mt-6 px-4 py-2 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 transition-opacity"
              >
                See All FAQs
              </Link>
            </div>
          </div>
          <div className="md:w-2/3">
            <Accordion type="single" collapsible className="w-full space-y-2">
              {faqs
                .filter((item) => item.showInHomepage)
                .map((item) => (
                  <AccordionItem
                    key={item.id}
                    value={item.id}
                    className="bg-background shadow-xs rounded-lg border px-4 last:border-b"
                  >
                    <AccordionTrigger className="cursor-pointer items-center py-5 hover:no-underline">
                      <div className="flex items-center gap-3">
                        <div className="flex size-6">{item.icon}</div>
                        <span className="text-base">{item.question}</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="pb-5">
                      <div className="px-9">
                        <p className="text-base">{item.answer}</p>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
}
