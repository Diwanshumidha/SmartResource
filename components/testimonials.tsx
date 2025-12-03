import React from "react";
import { motion, Variants } from "framer-motion";
import Script from "next/script";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
} satisfies Variants;

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
} satisfies Variants;

const getIdFromUrl = (url: string) => {
  const urlObj = new URL(url);

  // pathname is: "/widget/f1fffcf6-156d-4eeas-a119-80d7abf801bc/platform.js"
  const pathParts = urlObj.pathname.split('/');

  // The ID is usually at index 2 because the path starts with a /
  const id = pathParts[2];

  return id
}

const Testimonials = () => {
  return (
    <div className="bg-card/50 pt-20">
      {/* Header */}
      <motion.div
        className="text-center mb-16"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.p
          className="text-sm font-medium text-slate-600 mb-4"
          variants={itemVariants}
        >
          Testimonials
        </motion.p>

        <motion.h1
          className="text-5xl font-bold text-slate-900 mb-4"
          variants={itemVariants}
        >
          Their Favorite Feature
        </motion.h1>

        <motion.p
          className="text-lg text-slate-600 max-w-2xl mx-auto"
          variants={itemVariants}
        >
          Leverage insights from your business, customer, and product data to
          enhance your team’s performance and success.
        </motion.p>
      </motion.div>

      <Script
        src={process.env.NEXT_PUBLIC_TESTIMONIALS_SCRIPT_URL}
        type="text/javascript"
        async
        onLoad={() => {
          const watermark = document.getElementsByClassName("sj-powered-by")[0];
          if (watermark) {
            watermark.classList.add("sr-only");
          }
        }}
      ></Script>


      <div
        className="senja-embed w-full py-10 px-5 mx-auto"
        data-id={getIdFromUrl(process.env.NEXT_PUBLIC_TESTIMONIALS_SCRIPT_URL || "")}
        // data-mode="shadow"
        data-lazyload="false"
        style={{ width: "100%" }}
      ></div>
    </div>
  );
};

export default Testimonials;
