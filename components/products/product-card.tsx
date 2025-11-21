"use client";

import { cn } from "@/lib/utils";
import { Product } from "@/type/products";
import { motion } from "framer-motion";
import Image from "next/image";

interface ProductCardProps {
  product: Product;
  isSelected: boolean;
  onSelect?: () => void;
}

export default function ProductCard({
  product,
  isSelected,
  onSelect,
}: ProductCardProps) {
  return (
    <motion.button
      onClick={onSelect ? onSelect : undefined}
      aria-label="Select The Card"
      className={cn(
        `border w-full cursor-pointer border-border rounded-2xl p-4 transition-shadow`,
        {
          "border-primary": isSelected,
        }
      )}
    >
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="text-left">
            <div className="relative w-10 mb-1 h-10 rounded-full overflow-hidden">
              <Image
                src={product.avatar || "/placeholder.svg"}
                alt={product.name}
                fill
                className="object-contain"
              />
            </div>
            <h3 className="font-semibold text-slate-900">{product.name}</h3>
            <p className="text-sm text-slate-600">{product.title}</p>
          </div>
        </div>
        <div className="text-2xl">{product.icon}</div>
      </div>
    </motion.button>
  );
}
