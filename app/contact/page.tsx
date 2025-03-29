"use client"

import Header from "@/components/header"
import Navigation from "@/components/navigation"
import SectionTitle from "@/components/section-title"
import { useState, useEffect } from "react"
import { Github, Linkedin, Twitter, Instagram } from "lucide-react"

export default function Contact() {
  const [mapLoaded, setMapLoaded] = useState(false)

  useEffect(() => {
    // Simulate map loading
    const timer = setTimeout(() => {
      setMapLoaded(true)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <Header />
      <Navigation />

      <div className="glass-card rounded-lg p-6 mb-6 border-primary/30 shadow-lg">
        <SectionTitle title="Contact" />

        <div className="mb-6">
          <div className="w-full h-[300px] glass-card rounded-lg overflow-hidden relative">
            {!mapLoaded && (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
              </div>
            )}
            {mapLoaded && (
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d113579.66905029092!2d77.89812527009742!3d27.176309458305462!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39740d857c2f41d9%3A0x784aef38a9523b42!2sAgra%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1648126417475!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            )}
          </div>
        </div>

        <div>
          <h3 className="text-xl font-medium mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">
            Social Link
          </h3>

          <div className="flex flex-wrap gap-4">
            <a
              href="https://github.com/shivam"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card p-3 rounded-full text-foreground hover:text-primary transition-colors glow-effect"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com/in/shivam"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card p-3 rounded-full text-foreground hover:text-primary transition-colors glow-effect"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="https://twitter.com/shivam"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card p-3 rounded-full text-foreground hover:text-primary transition-colors glow-effect"
            >
              <Twitter className="w-5 h-5" />
            </a>
            <a
              href="https://instagram.com/shivam"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card p-3 rounded-full text-foreground hover:text-primary transition-colors glow-effect"
            >
              <Instagram className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

