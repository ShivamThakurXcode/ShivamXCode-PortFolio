"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

export default function Navigation() {
  const pathname = usePathname()

  const isActive = (path: string) => {
    return pathname === path
  }

  return (
    <div className="glass-card rounded-lg overflow-hidden mb-6 border-primary/30 shadow-lg">
      <div className="flex justify-end">
        <Link
          href="/"
          className={`px-4 py-2 text-sm transition-all ${isActive("/") ? "bg-primary text-primary-foreground" : "text-foreground hover:bg-secondary/40"}`}
        >
          About
        </Link>
        <Link
          href="/resume"
          className={`px-4 py-2 text-sm transition-all ${isActive("/resume") ? "bg-primary text-primary-foreground" : "text-foreground hover:bg-secondary/40"}`}
        >
          Resume
        </Link>
        <Link
          href="/portfolio"
          className={`px-4 py-2 text-sm transition-all ${isActive("/portfolio") ? "bg-primary text-primary-foreground" : "text-foreground hover:bg-secondary/40"}`}
        >
          Portfolio
        </Link>
        <Link
          href="/contact"
          className={`px-4 py-2 text-sm transition-all ${isActive("/contact") ? "bg-primary text-primary-foreground" : "text-foreground hover:bg-secondary/40"}`}
        >
          Contact
        </Link>
      </div>
    </div>
  )
}

