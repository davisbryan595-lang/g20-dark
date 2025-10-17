"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "BMW Owner",
    content:
      "G2O transformed my car! The ceramic coating has kept it looking showroom-new for months. Highly recommend!",
    rating: 5,
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Tesla Owner",
    content: "Professional service, attention to detail, and fair pricing. They really care about their work.",
    rating: 5,
  },
  {
    id: 3,
    name: "Jessica Martinez",
    role: "Audi Owner",
    content: "Best detailing service in Medford. The paint correction work was incredible. Worth every penny!",
    rating: 5,
  },
  {
    id: 4,
    name: "David Thompson",
    role: "Mercedes Owner",
    content: "Exceptional quality and customer service. My car has never looked better. Will definitely return!",
    rating: 5,
  },
]

export default function Testimonials() {
  const [current, setCurrent] = useState(0)
  const [autoplay, setAutoplay] = useState(true)

  useEffect(() => {
    if (!autoplay) return

    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [autoplay])

  const next = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length)
    setAutoplay(false)
  }

  const prev = () => {
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length)
    setAutoplay(false)
  }

  return (
    <section id="testimonials" className="relative py-20 sm:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-balance">
            What Our Clients <span className="text-accent">Say</span>
          </h2>
        </motion.div>

        {/* Testimonial Carousel */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="bg-card/50 backdrop-blur-sm border border-border rounded-lg p-8 sm:p-12"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonials[current].rating }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-lg sm:text-xl text-foreground/90 mb-6 italic">"{testimonials[current].content}"</p>

              {/* Author */}
              <div>
                <p className="font-semibold text-lg">{testimonials[current].name}</p>
                <p className="text-sm text-foreground/70">{testimonials[current].role}</p>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex items-center justify-between mt-8">
            <button
              onClick={prev}
              className="p-2 rounded-full border border-border hover:border-accent/50 hover:bg-card/50 transition-all"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-6 h-6 text-accent" />
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setCurrent(index)
                    setAutoplay(false)
                  }}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === current ? "bg-accent w-8" : "bg-foreground/30 hover:bg-foreground/50"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="p-2 rounded-full border border-border hover:border-accent/50 hover:bg-card/50 transition-all"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-6 h-6 text-accent" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
