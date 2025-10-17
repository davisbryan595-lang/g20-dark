"use client"

import { motion } from "framer-motion"

const stats = [
  { label: "Years Experience", value: "15+" },
  { label: "Vehicles Detailed", value: "5000+" },
  { label: "Satisfied Clients", value: "98%" },
  { label: "Premium Products", value: "100%" },
]

const pillars = [
  { icon: "✓", title: "Licensed & Insured", description: "Fully certified professionals with comprehensive coverage" },
  { icon: "⭐", title: "Premium Products", description: "Only the finest ceramic coatings and detailing solutions" },
  { icon: "🛡️", title: "Warranty Backed", description: "5-year warranty on all ceramic coating services" },
  { icon: "🎯", title: "Precision Focused", description: "Meticulous attention to every detail of your vehicle" },
]

export default function About() {
  return (
    <section id="about" className="relative py-20 sm:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-balance">
            Why Choose <span className="text-accent">G2O</span>
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            With over 15 years of expertise, we deliver exceptional results using premium products and proven
            techniques.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-card/50 backdrop-blur-sm border border-border rounded-lg p-6 text-center hover:bg-card/80 transition-colors"
            >
              <div className="text-3xl sm:text-4xl font-bold text-accent mb-2">{stat.value}</div>
              <div className="text-sm text-foreground/70">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Pillars */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-card/50 backdrop-blur-sm border border-border rounded-lg p-6 hover:border-accent/50 hover:bg-card/80 transition-all group"
            >
              <div className="text-3xl mb-3 group-hover:scale-110 transition-transform">{pillar.icon}</div>
              <h3 className="font-semibold text-lg mb-2">{pillar.title}</h3>
              <p className="text-sm text-foreground/70">{pillar.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
