import Image from "next/image"

interface TestimonialCardProps {
  name: string
  testimonial: string
  imageSrc: string
}

export default function TestimonialCard({ name, testimonial, imageSrc }: TestimonialCardProps) {
  return (
    <div className="glass-card p-4 rounded-lg border-primary/20 hover:border-primary/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      <div className="flex items-center gap-3 mb-3">
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-primary/50 flex items-center justify-center p-0.5 animate-pulse">
          <Image src={imageSrc || "/placeholder.svg"} alt={name} width={40} height={40} className="rounded-full" />
        </div>
        <h3 className="font-medium">{name}</h3>
      </div>
      <p className="text-sm text-muted-foreground">{testimonial}</p>
    </div>
  )
}

