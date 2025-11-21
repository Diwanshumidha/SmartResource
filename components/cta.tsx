"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function CTA() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-linear-to-r from-primary/10 via-secondary/10 to-highlight/10 border-t border-b border-border">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto text-center"
      >
        <h2
          id="cta"
          className="text-4xl sm:text-5xl font-bold mb-6 text-balance scroll-mt-16"
        >
          Ready to Transform Your Workflow?
        </h2>
        <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
          Join thousands of users who are already working smarter with Smart
          Resource. Start your free trial today.
        </p>
        <motion.div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            asChild
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg rounded-full"
          >
            <Link href="#products">
              Start Free Trial
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>
          <Button
            size="lg"
            asChild
            variant="outline"
            className="border-border hover:bg-card px-8 py-6 text-lg rounded-full bg-transparent"
          >
            <Link
              href={process.env.NEXT_PUBLIC_APPOINTMENT_URL || "#"}
              target="_blank"
            >
              Schedule Demo
            </Link>
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
}
