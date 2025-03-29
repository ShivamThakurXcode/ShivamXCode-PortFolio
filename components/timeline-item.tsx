import type { ReactNode } from "react"

interface TimelineItemProps {
  title: string
  subtitle: string
  period: string
  children: ReactNode
}

export default function TimelineItem({ title, subtitle, period, children }: TimelineItemProps) {
  return (
    <div className="relative pl-6 pb-8 border-l border-primary/30">
      <div className="timeline-dot"></div>
      <div className="mb-1 text-xs text-muted-foreground">{period}</div>
      <h3 className="text-lg font-medium bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/90">
        {title}
      </h3>
      <div className="text-sm text-primary mb-2">{subtitle}</div>
      <div className="text-sm text-muted-foreground">{children}</div>
    </div>
  )
}

