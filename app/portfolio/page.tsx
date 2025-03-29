import Header from "@/components/header"
import Navigation from "@/components/navigation"
import SectionTitle from "@/components/section-title"
import PortfolioItem from "@/components/portfolio-item"

export default function Portfolio() {
  const portfolioItems = [
    { title: "DevCollege", imageSrc: "/placeholder.svg?height=200&width=300" },
    { title: "NFT Web", imageSrc: "/placeholder.svg?height=200&width=300" },
    { title: "SpaceX Web", imageSrc: "/placeholder.svg?height=200&width=300" },
    { title: "UTC Movers", imageSrc: "/placeholder.svg?height=200&width=300" },
    { title: "Indian Samman", imageSrc: "/placeholder.svg?height=200&width=300" },
    { title: "Titan", imageSrc: "/placeholder.svg?height=200&width=300" },
    { title: "Portfolio", imageSrc: "/placeholder.svg?height=200&width=300" },
    { title: "TVS Apache", imageSrc: "/placeholder.svg?height=200&width=300" },
    { title: "Food Web", imageSrc: "/placeholder.svg?height=200&width=300" },
    { title: "Spectacles Web", imageSrc: "/placeholder.svg?height=200&width=300" },
    { title: "Portfolio", imageSrc: "/placeholder.svg?height=200&width=300" },
    { title: "UTC_CARGO", imageSrc: "/placeholder.svg?height=200&width=300" },
  ]

  return (
    <>
      <Header />
      <Navigation />

      <div className="glass-card rounded-lg p-6 mb-6 border-primary/30 shadow-lg">
        <SectionTitle title="Portfolio" />

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {portfolioItems.map((item, index) => (
            <PortfolioItem key={index} title={item.title} imageSrc={item.imageSrc} />
          ))}
        </div>
      </div>
    </>
  )
}

