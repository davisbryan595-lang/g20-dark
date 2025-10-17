"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"

const pricingTiers = [
  {
    name: "Essential",
    description: "Perfect for regular maintenance",
    price: "$89",
    period: "per wash",
    features: ["Hand wash & dry", "Wheel cleaning", "Tire shine", "Spot-free rinse"],
  },
  {
    name: "Premium",
    description: "Most popular choice",
    price: "$399",
    period: "one-time",
    features: [
      "Everything in Essential",
      "Paint correction",
      "Interior vacuum & wipe",
      "Glass treatment",
      "Tire dressing",
    ],
    highlighted: true,
  },
  {
    name: "Luxury",
    description: "Complete transformation",
    price: "$899",
    period: "one-time",
    features: [
      "Everything in Premium",
      "Ceramic coating (5-year)",
      "Deep interior clean",
      "Leather conditioning",
      "Engine bay detailing",
      "Warranty included",
    ],
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className="relative py-20 sm:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-balance">
            Transparent <span className="text-accent">Pricing</span>
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">Choose the perfect package for your vehicle</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {pricingTiers.map((tier, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative rounded-lg border transition-all ${
                tier.highlighted
                  ? "border-accent bg-card/80 backdrop-blur-sm scale-105 md:scale-100 lg:scale-105"
                  : "border-border bg-card/50 backdrop-blur-sm hover:border-accent/50 hover:bg-card/80"
              }`}
            >
              {tier.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent text-accent-foreground px-4 py-1 rounded-full text-sm font-semibold">
                  Most Popular
                </div>
              )}

              <div className="p-8">
                <h3 className="text-2xl font-bold mb-2">{tier.name}</h3>
                <p className="text-foreground/70 text-sm mb-6">{tier.description}</p>

                <div className="mb-6">
                  <span className="text-4xl font-bold text-accent">{tier.price}</span>
                  <span className="text-foreground/70 ml-2">{tier.period}</span>
                </div>

                <Button
                  className={`w-full rounded-full mb-8 font-semibold ${
                    tier.highlighted
                      ? "bg-accent hover:bg-accent/90 text-accent-foreground"
                      : "border-accent text-accent hover:bg-accent/10"
                  }`}
                  variant={tier.highlighted ? "default" : "outline"}
                  onClick={() => document.getElementById("booking")?.scrollIntoView({ behavior: "smooth" })}
                >
                  Get Started
                </Button>

                <div className="space-y-4">
                  {tier.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-foreground/80">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
