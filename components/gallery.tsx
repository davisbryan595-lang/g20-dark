"use client"

import type React from "react"

import { useCallback, useRef, useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { ChevronLeft, ChevronRight, ZoomIn } from "lucide-react"

const galleryImages = [
  {
    id: 1,
    title: "Ceramic Coating",
    category: "exterior",
    src: "https://images.pexels.com/photos/13805638/pexels-photo-13805638.jpeg",
    alt: "Water beading on coated hood",
  },
  {
    id: 2,
    title: "Paint Correction",
    category: "exterior",
    src: "https://images.pexels.com/photos/5233261/pexels-photo-5233261.jpeg",
    alt: "Polishing paint with a dual-action polisher",
  },
  {
    id: 3,
    title: "Interior Detail",
    category: "interior",
    src: "https://images.pexels.com/photos/6873119/pexels-photo-6873119.jpeg",
    alt: "Thorough vacuuming and interior cleaning",
  },
  {
    id: 4,
    title: "Full Detail",
    category: "full",
    src: "https://images.pexels.com/photos/3354648/pexels-photo-3354648.jpeg",
    alt: "Full exterior foam wash",
  },
  {
    id: 5,
    title: "Wheel Shine",
    category: "exterior",
    src: "https://images.pexels.com/photos/4870674/pexels-photo-4870674.jpeg",
    alt: "Deep clean of wheels and tires",
  },
  {
    id: 6,
    title: "Leather Care",
    category: "interior",
    src: "https://images.pexels.com/photos/8096271/pexels-photo-8096271.jpeg",
    alt: "Leather cleaning and conditioning",
  },
]

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  // Before/After slider state
  const containerRef = useRef<HTMLDivElement | null>(null)
  const [pos, setPos] = useState(50)
  const [hovering, setHovering] = useState(false)

  const beforeUrl = "https://images.pexels.com/photos/18077901/pexels-photo-18077901.jpeg"
  const afterUrl = "https://images.pexels.com/photos/27993133/pexels-photo-27993133.jpeg"

  const updatePosition = useCallback((clientX: number) => {
    const el = containerRef.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const x = Math.max(rect.left, Math.min(clientX, rect.right))
    const pct = ((x - rect.left) / rect.width) * 100
    setPos(pct)
  }, [])

  const onMouseMove = (e: React.MouseEvent) => {
    if (!hovering) return
    updatePosition(e.clientX)
  }

  const onTouchMove = (e: React.TouchEvent) => {
    if (!hovering) return
    updatePosition(e.touches[0].clientX)
  }

  return (
    <section id="gallery" className="relative py-20 sm:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-balance">
            Our <span className="text-accent">Work</span>
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            See the transformation we deliver for every vehicle
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {galleryImages.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative h-64 bg-card/50 backdrop-blur-sm border border-border rounded-lg overflow-hidden cursor-pointer hover:border-accent/50 transition-all"
              onClick={() => setSelectedImage(image.id)}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

              {/* Content */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4">
                <ZoomIn className="w-8 h-8 text-accent/70 group-hover:text-accent group-hover:scale-110 transition-all mb-2" />
                <h3 className="text-lg font-semibold">{image.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Before/After Slider */}
        <motion.div
          ref={containerRef}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative h-96 bg-card/50 backdrop-blur-sm border border-border rounded-lg overflow-hidden group cursor-col-resize select-none"
          onMouseEnter={() => setHovering(true)}
          onMouseLeave={() => {
            setHovering(false)
            setPos(50)
          }}
          onMouseMove={onMouseMove}
          onTouchStart={() => setHovering(true)}
          onTouchEnd={() => {
            setHovering(false)
            setPos(50)
          }}
          onTouchMove={onTouchMove}
          aria-label="Before and after car detailing comparison slider"
        >
          {/* Before (dirty) */}
          <Image src={beforeUrl} alt="Before - dirty car" fill className="object-cover" />

          {/* After (clean) clipped to position */}
          <div className="absolute inset-y-0 left-0 overflow-hidden" style={{ width: `${pos}%` }}>
            <Image src={afterUrl} alt="After - clean car" fill className="object-cover" />
          </div>

          {/* Handle */}
          <div
            className="absolute top-0 bottom-0"
            style={{ left: `calc(${pos}% - 1px)` }}
          >
            <div className="relative h-full w-0.5 bg-accent/80">
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-accent shadow-[0_0_20px_var(--ring)] flex items-center justify-center">
                <ChevronLeft className="w-5 h-5 text-accent-foreground" />
                <ChevronRight className="w-5 h-5 text-accent-foreground" />
              </div>
            </div>
          </div>

          {/* Helper text */}
          <div className="absolute inset-x-0 bottom-4 text-center text-sm text-foreground/80">
            Drag to compare the transformation
          </div>
        </motion.div>
      </div>
    </section>
  )
}
