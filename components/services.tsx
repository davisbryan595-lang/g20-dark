"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Sparkles, Droplet, Zap, Shield, Wind, Wrench } from "lucide-react"

const services = [
  {
    icon: Sparkles,
    title: "Ceramic Coating",
    description: "Professional-grade ceramic coating for long-lasting protection and brilliant shine",
    price: "$599",
  },
  {
    icon: Droplet,
    title: "Paint Correction",
    description: "Remove swirls, scratches, and oxidation for a flawless finish",
    price: "$399",
  },
  {
    icon: Wind,
    title: "Exterior Wash",
    description: "Premium hand wash with foam cannon and spot-free rinse",
    price: "$89",
  },
  {
    icon: Zap,
    title: "Interior Deep Clean",
    description: "Complete interior detailing including steam cleaning and conditioning",
    price: "$199",
  },
  {
    icon: Shield,
    title: "Full Detail Package",
    description: "Complete exterior and interior detailing with ceramic coating",
    price: "$899",
  },
  {
    icon: Wrench,
    title: "Maintenance Plan",
    description: "Monthly maintenance to keep your vehicle in pristine condition",
    price: "$149/mo",
  },
]

export default function Services() {
  return (
    <section id="services" className="relative py-20 sm:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-balance">
            Our <span className="text-accent">Services</span>
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Comprehensive detailing solutions tailored to your vehicle's needs
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative bg-card/50 backdrop-blur-sm border border-border rounded-lg p-6 hover:border-accent/50 hover:bg-card/80 transition-all overflow-hidden"
              >
                {/* Glow effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-accent/0 to-accent/0 group-hover:from-accent/10 group-hover:to-accent/5 transition-all duration-300" />

                <div className="relative z-10">
                  <Icon className="w-8 h-8 text-accent mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-sm text-foreground/70 mb-4">{service.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-accent">{service.price}</span>
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-accent text-accent hover:bg-accent/10 rounded-full bg-transparent"
                      onClick={() => document.getElementById("booking")?.scrollIntoView({ behavior: "smooth" })}
                    >
                      Book
                    </Button>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
