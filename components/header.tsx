"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { href: "#services", label: "Services" },
    { href: "#pricing", label: "Pricing" },
    { href: "#gallery", label: "Gallery" },
    { href: "#testimonials", label: "Testimonials" },
    { href: "#contact", label: "Contact" },
  ]

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-background/80 border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group" aria-label="Go to home">
            <div className="relative w-12 h-12 brand-logo">
              <Image
                src="https://cdn.builder.io/api/v1/image/assets%2F5c758e804cba4fa3a488e9088887877b%2F7e0659a1448142469160bc2e1941f920?format=webp&width=800"
                alt="G2O Auto Detailing logo"
                fill
                sizes="48px"
                className="object-contain"
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="nav-liquid text-sm font-medium text-foreground/80"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="tel:+15415551234"
              className="text-sm font-medium text-accent hover:text-accent/80 transition-colors"
            >
              (541) 555-1234
            </a>
            <Button
              className="bg-accent hover:bg-accent/90 text-accent-foreground rounded-full px-6"
              onClick={() => document.getElementById("booking")?.scrollIntoView({ behavior: "smooth" })}
            >
              Book Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2 text-foreground" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="md:hidden pb-4 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="nav-liquid block px-4 py-2 text-sm font-medium text-foreground/80"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="px-4 py-2 space-y-2">
              <a href="tel:+15415551234" className="block text-sm font-medium text-accent">
                (541) 555-1234
              </a>
              <Button
                className="w-full bg-accent hover:bg-accent/90 text-accent-foreground rounded-full"
                onClick={() => {
                  setIsOpen(false)
                  document.getElementById("booking")?.scrollIntoView({ behavior: "smooth" })
                }}
              >
                Book Now
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
