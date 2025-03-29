import Image from "next/image"
import Link from "next/link"
import { ThemeToggle } from "./theme-toggle"

interface HeaderProps {
  showContactInfo?: boolean
}

export default function Header({ showContactInfo = false }: HeaderProps) {
  return (
    <div className="glass-card rounded-lg p-6 mb-6 relative border-primary/30 shadow-lg glow-border">
      <div className="flex items-center gap-4">
        <div className="relative w-20 h-20 rounded-lg overflow-hidden border border-primary/50 animate-float shadow-lg">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-03-29%20222110-ZUBRBe8aH7wEHd5zd7vySFwM9OkFZM.png"
            alt="Shivam"
            width={80}
            height={80}
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent"></div>
        </div>
        <div>
          <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">
            Shivam
          </h1>
          <div className="glass-card inline-block rounded-full px-3 py-1 text-sm mt-1 border border-primary/30">
            <span>MERN Developer | JavaScript Programmer</span>
          </div>
        </div>
      </div>

      {showContactInfo && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 pt-6 border-t border-primary/20">
          <div>
            <div className="mb-4">
              <h3 className="text-xs text-muted-foreground mb-1">EMAIL</h3>
              <p className="text-sm">shivam.1337@gmail.com</p>
            </div>
            <div>
              <h3 className="text-xs text-muted-foreground mb-1">BIRTHDAY</h3>
              <p className="text-sm">November 13, 1995</p>
            </div>
          </div>
          <div>
            <div className="mb-4">
              <h3 className="text-xs text-muted-foreground mb-1">PHONE</h3>
              <p className="text-sm">+91 99999-51172</p>
            </div>
            <div>
              <h3 className="text-xs text-muted-foreground mb-1">LOCATION</h3>
              <p className="text-sm">Agra, Uttar Pradesh/India</p>
            </div>
          </div>
        </div>
      )}

      <div className="absolute top-4 right-4 flex items-center gap-2">
        <ThemeToggle />
        <Link
          href="/contact"
          className="bg-primary/80 text-primary-foreground text-xs px-3 py-1 rounded-md hover:bg-primary transition-all glow-effect"
        >
          Show Contacts
        </Link>
      </div>
    </div>
  )
}

