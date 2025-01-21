import Navigation from "@/components/navigation"
import { Metadata } from "next"
import GalleryViewer from "./gallery-viewer"

export const metadata: Metadata = {
  title: "Commercial Cleaning Gallery | Armstrong Carpet & Tile Cleaning Shawnee",
  description: "View our commercial cleaning transformations in Shawnee and central Oklahoma. Before and after photos of restaurant floors, carpets, and tile cleaning projects.",
}

const cleaningTypes = [
  {
    id: "restaurant-concrete",
    title: "Shawnee Restaurant Concrete Floor Cleaning",
    description: "Professional concrete floor cleaning for Shawnee restaurants and commercial spaces.",
    thumbnail: "/placeholder.svg?height=100&width=150",
    images: [
      { src: "/placeholder.svg?height=600&width=800", alt: "Restaurant concrete floor cleaning in Shawnee - Before" },
      { src: "/placeholder.svg?height=600&width=800", alt: "Commercial concrete cleaning process in Oklahoma" },
      { src: "/placeholder.svg?height=600&width=800", alt: "Professional concrete floor cleaning results in Shawnee - After" },
    ],
    steps: [
      "Free on-site assessment in Shawnee area",
      "Commercial-grade concrete cleaning solution application",
      "Industrial equipment cleaning process",
      "Professional rinsing and drying",
      "Optional commercial-grade sealing",
    ],
  },
  {
    id: "restaurant-tile",
    title: "Commercial Tile & Grout Cleaning Shawnee",
    description: "Expert tile and grout cleaning for Shawnee restaurants and commercial properties.",
    thumbnail: "/placeholder.svg?height=100&width=150",
    images: [
      { src: "/placeholder.svg?height=600&width=800", alt: "Commercial tile cleaning in Shawnee - Before" },
      { src: "/placeholder.svg?height=600&width=800", alt: "Professional tile cleaning process in Oklahoma" },
      { src: "/placeholder.svg?height=600&width=800", alt: "Restaurant tile cleaning in Shawnee - After" },
    ],
    steps: [
      "Commercial pre-treatment process",
      "Professional-grade cleaning solution",
      "High-temperature steam cleaning",
      "Deep grout line restoration",
      "Quality assurance inspection",
    ],
  },
  {
    id: "restaurant-carpets",
    title: "Commercial Carpet Cleaning Shawnee",
    description: "Professional carpet cleaning for Shawnee restaurants and businesses.",
    thumbnail: "/placeholder.svg?height=100&width=150",
    images: [
      { src: "/placeholder.svg?height=600&width=800", alt: "Commercial carpet cleaning in Shawnee - Before" },
      { src: "/placeholder.svg?height=600&width=800", alt: "Professional carpet cleaning process in Oklahoma" },
      { src: "/placeholder.svg?height=600&width=800", alt: "Restaurant carpet cleaning in Shawnee - After" },
    ],
    steps: [
      "Commercial-grade vacuum preparation",
      "Professional stain pre-treatment",
      "Hot water extraction cleaning",
      "Advanced spot treatment",
      "Final inspection and grooming",
    ],
  },
  {
    id: "painted-concrete",
    title: "Painted Concrete Cleaning Shawnee",
    description: "Specialized painted concrete cleaning for Shawnee commercial properties.",
    thumbnail: "/placeholder.svg?height=100&width=150",
    images: [
      { src: "/placeholder.svg?height=600&width=800", alt: "Commercial painted concrete cleaning in Shawnee - Before" },
      { src: "/placeholder.svg?height=600&width=800", alt: "Professional concrete cleaning process in Oklahoma" },
      { src: "/placeholder.svg?height=600&width=800", alt: "Painted concrete floor cleaning in Shawnee - After" },
    ],
    steps: [
      "Careful surface preparation",
      "pH-balanced cleaning solution",
      "Specialized equipment cleaning",
      "Professional rinsing process",
      "Quality control inspection",
    ],
  },
]

export default function GalleryPage() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navigation />
      <GalleryViewer cleaningTypes={cleaningTypes} />
    </div>
  )
}
