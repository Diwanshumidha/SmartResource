"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export const GradientText = ({ children }: { children: string }) => {
  return (
    <>
      <span className="bg-linear-to-r from-[#008fe5] via-[#00a5d0] to-[#00c6a8]  bg-clip-text text-transparent font-bold text-3xl sm:text-5xl">
        {children}
      </span>
    </>
  );
};

export function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  return (
    <section className="relative min-h-screen flex-col  flex items-center justify-center overflow-hidden bg-card/50 pt-20 pb-20">
      {/* Background gradient elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated gradient covering top half */}
        <motion.div
          className="absolute top-[-50px] left-[-50px] right-[-50px] h-[90%] bg-linear-to-r from-primary via-secondary to-accent blur-3xl opacity-30"
          animate={{
            y: [0, 30, 0],
            x: [0, 20, 0],
          }}
          transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY }}
        />

        {/* Soft fade-out at bottom of gradient */}
        {/* <div className="absolute top-1/2 left-0 w-full h-[25%] bg-gradient-to-b from-transparent to-[var(--background)] pointer-events-none" /> */}
      </div>

      <motion.div
        className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Badge */}
        <motion.div className="mb-6">
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/30 text-foreground text-sm font-medium">
            ✨ AI-Powered Intelligence
          </span>
        </motion.div>
        {/* Main headline */}
        <motion.h1 className="text-2xl sm:text-4xl text-balance lg:text-6xl font-bold mb-6 ">
          Smart Resource <GradientText>AI-Powered</GradientText> Precision for
          Every Task
        </motion.h1>
        {/* Subheadline */}
        <motion.p className="text-sm sm:text-lg text-balance text-muted-foreground mb-8 max-w-2xl mx-auto">
          From studying smarter to managing complex workflows, Smart Resource
          adapts to your needs — just upload your files, ask a question, and get
          context-aware guidance in seconds.
        </motion.p>
        {/* CTA Buttons */}
        <motion.div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            asChild
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-6 text-lg rounded-full"
          >
            <Link href="#products">
              Get Started Free
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-border px-8 py-6 text-lg rounded-full"
          >
            <Link
              href={process.env.NEXT_PUBLIC_APPOINTMENT_URL || "#"}
              target="_blank"
            >
              Book a Demo
            </Link>
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
}
