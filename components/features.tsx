"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Zap, Shield, Cpu, BarChart3 } from "lucide-react";
import Image from "next/image";

const features = [
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Get context-aware guidance in seconds, not minutes.",
  },
  {
    icon: Shield,
    title: "Secure & Private",
    description: "Your data is encrypted and never shared with third parties.",
  },
  {
    icon: Cpu,
    title: "AI-Powered",
    description: "Advanced machine learning models for accurate insights.",
  },
  {
    icon: BarChart3,
    title: "Analytics",
    description:
      "Track progress and optimize your workflow with detailed metrics.",
  },
];

export function Features() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card/50">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2  gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-foreground">
              The Ultimate Data Model for Go-to-Market Success
            </h2>
            <p className=" text-muted-foreground mb-12">
              Leverage insights from your business, customer, and product data
              to drive and enhance your teams performance and success.
            </p>

            <div>
              {features.map((feature, index) => {
                const Icon = feature.icon;
                const isLast = index === features.length - 1;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className={cn(
                      !isLast ? "py-5 border-b border-border" : "pt-5"
                    )}
                  >
                    <div className="flex items-center gap-2">
                      <Icon className="w-5 h-5 text-primary " />
                      <h3 className="text-lg font-bold text-foreground">
                        {feature.title}
                      </h3>
                    </div>
                    <p className="text-muted-foreground">
                      {feature.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Right Visual */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative h-full "
          >
            <Image
              src="/teacher-robot.png"
              alt="features"
              className="w-full h-full object-cover"
              width={500}
              height={500}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

//   <div className="max-w-6xl mx-auto">
//     <motion.div
//       initial={{ opacity: 0, y: 20 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.6 }}
//       viewport={{ once: true }}
//       className="text-center mb-16"
//     >
//       <h2 className="text-4xl sm:text-5xl font-bold mb-4">Powerful Features</h2>
//       <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
//         Everything you need to work smarter and faster.
//       </p>
//     </motion.div>

//     <div className="grid md:grid-cols-2 gap-8">
//       {features.map((feature, index) => {
//         const Icon = feature.icon
//         return (
//           <motion.div
//             key={index}
//             initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.6, delay: index * 0.1 }}
//             viewport={{ once: true }}
//             className="flex gap-4 p-6 rounded-xl border border-border hover:border-secondary/50 transition-colors"
//           >
//             <motion.div
//               whileHover={{ scale: 1.1 }}
//               className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center"
//             >
//               <Icon className="w-6 h-6 text-white" />
//             </motion.div>
//             <div>
//               <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
//               <p className="text-muted-foreground">{feature.description}</p>
//             </div>
//           </motion.div>
//         )
//       })}
//     </div>
//   </div>
