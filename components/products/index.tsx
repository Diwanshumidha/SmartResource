"use client";

import { useState } from "react";
import { AnimatePresence, motion, Variants } from "framer-motion";
import ProductCard from "./product-card";
import ProductDetail from "./product-detail";
import { products } from "@/constant/products";

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

export default function ProductsSection() {
  const [selectedId, setSelectedId] = useState<number>(products[0].id);

  const selectedProduct = products.find((t) => t.id === selectedId)!;

  return (
    <div className="bg-background py-20">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.p
            className="text-sm font-medium text-slate-600 mb-4 scroll-mt-16"
            variants={itemVariants}
            id="products"
          >
            Products
          </motion.p>

          <motion.h1
            className="text-5xl font-bold text-slate-900 mb-4 "
            variants={itemVariants}
          >
            What we offer
          </motion.h1>

          <motion.p
            className="text-lg text-slate-600 max-w-2xl mx-auto"
            variants={itemVariants}
          >
            Explore our diverse range of products designed to elevate your
            business operations and drive success.
          </motion.p>
        </motion.div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Selectable Cards */}
          <motion.div
            className="space-y-7"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {products.map((testimonial) => {
              const isSelected = testimonial.id === selectedId;
              return (
                <ProductCard
                  key={testimonial.id}
                  product={testimonial}
                  isSelected={isSelected}
                  onSelect={() => setSelectedId(testimonial.id)}
                />
              );
            })}
          </motion.div>

          {/* Right Column - Animated Detail */}
          <div className="lg:col-span-2 relative h-full">
            <AnimatePresence>
              <motion.div
                key={selectedProduct.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.01, ease: "easeOut" }}
                className="h-full"
              >
                <ProductDetail product={selectedProduct} />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}
