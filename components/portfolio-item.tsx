import Image from "next/image"

interface PortfolioItemProps {
  title: string
  imageSrc: string
}

export default function PortfolioItem({ title, imageSrc }: PortfolioItemProps) {
  return (
    <div className="portfolio-item group">
      <Image src={imageSrc || "/placeholder.svg"} alt={title} width={300} height={200} className="object-cover" />
      <div className="portfolio-item-title">
        <h3 className="text-sm group-hover:text-primary transition-colors">{title}</h3>
      </div>
      <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity z-0"></div>
    </div>
  )
}

