"use client"

import { useEffect, useState } from "react"
import { Quote } from "lucide-react"

interface Testimonial {
  quote: string
  author: string
  role: string
  company: string
}

interface TestimonialsCarouselProps {
  className?: string
}

const testimonials: Testimonial[] = [
  {
    quote:
      "Armstrong transformed our hotel's carpets. Their attention to detail and professional service exceeded our expectations.",
    author: "Sarah Johnson",
    role: "Operations Director",
    company: "Grand Hotel",
  },
  {
    quote:
      "The low moisture cleaning method was perfect for our busy restaurant. We were able to resume service the same day.",
    author: "Michael Chen",
    role: "Owner",
    company: "Pacific Bistro",
  },
  {
    quote:
      "We've been using Armstrong for our office complex for over 5 years. Their consistent quality makes them our go-to service.",
    author: "David Thompson",
    role: "Facility Manager",
    company: "Executive Plaza",
  },
  {
    quote:
      "The team's professionalism and attention to detail are unmatched. They've helped maintain our highest standards.",
    author: "Lisa Rodriguez",
    role: "Housekeeping Manager",
    company: "Golden Gates Casino",
  },
]

export default function TestimonialsCarousel({ className = "" }: TestimonialsCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false)
      setTimeout(() => {
        setCurrentIndex((current) => (current + 1) % testimonials.length)
        setIsVisible(true)
      }, 300)
    }, 6000)

    return () => clearInterval(interval)
  }, [])

  const currentTestimonial = testimonials[currentIndex]

  return (
    <div className={`relative ${className}`}>
      <div
        className={`transition-all duration-300 ${
          isVisible ? "opacity-100 transform-none" : "opacity-0 translate-y-2"
        }`}
      >
        <Quote className="absolute -top-1 -left-1 w-6 h-6 text-white/20" strokeWidth={1.5} />
        <div className="pl-5">
          <blockquote className="text-base sm:text-lg font-medium leading-relaxed mb-3">
            {currentTestimonial.quote}
          </blockquote>
          <div className="flex flex-col text-sm">
            <cite className="not-italic font-semibold">{currentTestimonial.author}</cite>
            <span className="opacity-80">
              {currentTestimonial.role} • {currentTestimonial.company}
            </span>
          </div>
        </div>
      </div>
      
      <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 flex gap-1.5">
        {testimonials.map((_, index) => (
          <button
            key={index}
            className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
              index === currentIndex ? "bg-white/90 w-3" : "bg-white/30 hover:bg-white/50"
            }`}
            onClick={() => {
              setIsVisible(false)
              setTimeout(() => {
                setCurrentIndex(index)
                setIsVisible(true)
              }, 300)
            }}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
