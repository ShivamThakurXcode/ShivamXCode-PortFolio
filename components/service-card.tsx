import type { ReactNode } from "react"

interface ServiceCardProps {
  title: string
  description: string
  icon: ReactNode
}

export default function ServiceCard({ title, description, icon }: ServiceCardProps) {
  return (
    <div className="glass-card p-4 rounded-lg border-primary/20 hover:border-primary/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg group">
      <div className="flex items-start gap-3">
        <div className="text-primary mt-1 group-hover:scale-110 transition-transform">{icon}</div>
        <div>
          <h3 className="font-medium mb-2 group-hover:text-primary transition-colors">{title}</h3>
          <p className="text-sm text-muted-foreground">{description}</p>
        </div>
      </div>
    </div>
  )
}

