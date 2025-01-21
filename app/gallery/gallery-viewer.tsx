"use client"

import { useState } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronLeft, ChevronRight, X } from "lucide-react"

type GalleryViewerProps = {
  cleaningTypes: Array<{
    id: string
    title: string
    description: string
    thumbnail: string
    images: Array<{
      src: string
      alt: string
    }>
    steps: string[]
  }>
}

export default function GalleryViewer({ cleaningTypes }: GalleryViewerProps) {
  const [activeType, setActiveType] = useState(cleaningTypes[0])
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isZoomed, setIsZoomed] = useState(false)

  const handlePrevImage = () => {
    setCurrentImageIndex((prev) => (prev === 0 ? activeType.images.length - 1 : prev - 1))
  }

  const handleNextImage = () => {
    setCurrentImageIndex((prev) => (prev === activeType.images.length - 1 ? 0 : prev + 1))
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Gallery Navigation */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        {cleaningTypes.map((type) => (
          <Card
            key={type.id}
            className={`cursor-pointer transition-all ${
              activeType.id === type.id ? "ring-2 ring-brand-primary" : ""
            }`}
            onClick={() => {
              setActiveType(type)
              setCurrentImageIndex(0)
            }}
          >
            <CardContent className="p-4">
              <div className="aspect-video relative mb-3">
                <Image
                  src={type.thumbnail}
                  alt={type.title}
                  fill
                  className="object-cover rounded-md"
                />
              </div>
              <h3 className="text-sm font-medium text-gray-900">{type.title}</h3>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Main Image Display */}
      <div className="relative aspect-video mb-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentImageIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="relative w-full h-full"
          >
            <Image
              src={activeType.images[currentImageIndex].src}
              alt={activeType.images[currentImageIndex].alt}
              fill
              className={`object-cover rounded-lg cursor-pointer ${
                isZoomed ? "object-contain" : "object-cover"
              }`}
              onClick={() => setIsZoomed(!isZoomed)}
            />
          </motion.div>
        </AnimatePresence>

        {/* Navigation Buttons */}
        <Button
          variant="outline"
          size="icon"
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white"
          onClick={handlePrevImage}
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>
        <Button
          variant="outline"
          size="icon"
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white"
          onClick={handleNextImage}
        >
          <ChevronRight className="h-4 w-4" />
        </Button>

        {/* Close Zoom Button */}
        {isZoomed && (
          <Button
            variant="outline"
            size="icon"
            className="absolute top-4 right-4 bg-white/80 hover:bg-white"
            onClick={() => setIsZoomed(false)}
          >
            <X className="h-4 w-4" />
          </Button>
        )}
      </div>

      {/* Image Description */}
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">{activeType.title}</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">{activeType.description}</p>
      </div>

      {/* Process Steps */}
      <div className="max-w-2xl mx-auto">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">Our Process</h3>
        <ol className="space-y-4">
          {activeType.steps.map((step, index) => (
            <li key={index} className="flex gap-4 items-start">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-primary text-sm font-medium text-white">
                {index + 1}
              </span>
              <span className="text-gray-600">{step}</span>
            </li>
          ))}
        </ol>
      </div>
    </div>
  )
}
