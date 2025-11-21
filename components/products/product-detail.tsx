"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, Star } from "lucide-react";
import { Product } from "@/type/products";
import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import Link from "next/link";

interface ProductDetailProp {
  product: Product;
}

export default function ProductDetail({ product }: ProductDetailProp) {
  return (
    <motion.div className="h-full">
      <Card
        className="relative h-full flex flex-col overflow-hidden border border-border/50
        bg-linear-to-br from-background to-muted/20 backdrop-blur-sm gap-2
        hover:shadow-md hover:border-primary/30 transition-all duration-300 rounded-xl"
      >
        {/* Badge */}
        <div className="absolute top-2 right-2 bg-primary/10 text-primary text-xs font-semibold px-2 py-1 rounded-md">
          Trending
        </div>

        <CardHeader>
          <div className="flex items-center gap-3">
            {product.avatar && (
              <Image
                src={product.avatar || "/placeholder.svg"}
                alt={`${product.name} logo`}
                width={36}
                height={36}
                className="object-contain rounded-md"
              />
            )}
            <div>
              <CardTitle className="text-base font-semibold leading-tight">
                {product.name}
              </CardTitle>
              <CardDescription className="text-sm text-muted-foreground leading-snug">
                {product.title}
              </CardDescription>
            </div>
          </div>

          {/* Tags */}
          {product.tags && (
            <div className="flex flex-wrap gap-1 mt-2">
              {product.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-0.5 text-xs bg-primary/10 text-primary rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </CardHeader>

        <CardContent className="flex-1 flex flex-col justify-between py-2">
          <div className="space-y-3">
            {/* Description */}
            <p className="text-sm text-muted-foreground leading-relaxed line-clamp-4">
              {product.description?.trim()}
            </p>

            {/* Divider */}
            <div className="border-t border-border/30 my-2" />

            {/* Features */}
            <div>
              <h4 className="text-sm font-semibold text-foreground mb-1.5">
                Key Features
              </h4>
              <ul className="space-y-1.5">
                {product.features.slice(0, 2).map((feature, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-2 text-sm text-muted-foreground"
                  >
                    <Star className="h-3.5 w-3.5 mt-0.5 shrink-0 text-primary/80" />
                    <span>{feature}</span>
                  </li>
                ))}
                {product.features.length > 2 && (
                  <li className="text-xs text-primary font-medium">
                    +{product.features.length - 2} more features
                  </li>
                )}
              </ul>
            </div>

            {/* Testimonial */}
            {product.testimonial && (
              <motion.div
                initial={{ opacity: 0, y: 4 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="mt-4 p-3 bg-muted/40 rounded-lg border border-border/30"
              >
                <p className="text-sm text-muted-foreground italic leading-relaxed">
                  “{product.testimonial.quote}”
                </p>
                <div className="mt-2 flex items-center gap-2">
                  {product.testimonial.avatar && (
                    <Image
                      src={product.testimonial.avatar}
                      alt={product.testimonial.author}
                      width={24}
                      height={24}
                      className="rounded-full object-cover"
                    />
                  )}
                  <span className="text-xs font-medium text-foreground">
                    {product.testimonial.author}
                  </span>
                  {product.testimonial.role && (
                    <span className="text-xs text-muted-foreground">
                      · {product.testimonial.role}
                    </span>
                  )}
                </div>
              </motion.div>
            )}
          </div>

          {/* CTA */}
          <div className="mt-4">
            <Button asChild className="w-full group relative bg-primary hover:bg-primary/90 text-white font-medium">
              <Link href={product.url}>
                Get Started
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
