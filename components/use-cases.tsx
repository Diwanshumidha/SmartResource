"use client"

import { motion } from "framer-motion"
import { BookOpen, Briefcase, Building2 } from "lucide-react"

const useCases = [
  {
    icon: BookOpen,
    title: "For Students",
    description: "Study smarter with AI-powered summaries, explanations, and personalized learning paths.",
    color: "from-primary to-primary/50",
  },
  {
    icon: Briefcase,
    title: "For Professionals",
    description: "Streamline workflows with intelligent document analysis and instant insights.",
    color: "from-secondary to-secondary/50",
  },
  {
    icon: Building2,
    title: "For Businesses",
    description: "Scale operations with context-aware guidance and automated resource management.",
    color: "from-highlight to-highlight/50",
  },
]

export function UseCases() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-balance">
            Built for Students, Professionals, and Businesses Alike
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Smart Resource is designed to solve real problems in real time — no matter your goal.
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {useCases.map((useCase, index) => {
            const Icon = useCase.icon
            return (
              <motion.div key={index} variants={itemVariants} className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative bg-card border border-border rounded-2xl p-8 hover:border-primary/50 transition-colors duration-300">
                  <motion.div
                    className={`w-12 h-12 rounded-lg bg-gradient-to-br ${useCase.color} flex items-center justify-center mb-4`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <Icon className="w-6 h-6 text-white" />
                  </motion.div>
                  <h3 className="text-xl font-bold mb-3">{useCase.title}</h3>
                  <p className="text-muted-foreground">{useCase.description}</p>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
