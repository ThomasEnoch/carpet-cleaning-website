import Image from "next/image"
import QuoteFormButton from "./quote-form-button"
import TestimonialsCarousel from "./testimonials-carousel"
import Particles from "./particles"
import { theme } from "@/lib/constants"

export default function HeroSection() {
  return (
    <section
      className="relative overflow-hidden min-h-screen"
      style={{ 
        background: `linear-gradient(135deg, ${theme.colors.primary}, ${theme.colors.primaryDark})`,
      }}
      aria-labelledby="hero-title"
    >
      {/* Dark gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/10 to-black/30 pointer-events-none" />

      {/* Subtle texture overlay */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%23ffffff' fill-opacity='0.4' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
        }}
      />

      {/* Interactive Bubble Background */}
      <Particles />

      {/* Main Content */}
      <div className="container mx-auto px-4 relative z-10 min-h-screen flex flex-col items-center justify-between py-12">
        {/* Top Content */}
        <div className="w-full max-w-4xl mx-auto flex-1 flex flex-col items-center justify-center">
          {/* Logo Section */}
          <div className="relative mb-8">
            <div className="relative w-28 h-28 sm:w-32 sm:h-32 lg:w-40 lg:h-40 mx-auto animate-float">
              <div className="absolute inset-0 bg-white rounded-full opacity-20 blur-2xl"></div>
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-W65BeuAVY1LKpwLLmdLiTyxmerFTxW.png"
                alt="Armstrong Carpet & Tile Cleaning"
                width={200}
                height={200}
                className="w-full h-full object-contain relative z-10 drop-shadow-[0_0_25px_rgba(255,255,255,0.6)]"
                priority
              />
            </div>
          </div>

          {/* Text Content */}
          <div className="text-center space-y-4 mb-8">
            <h1
              id="hero-title"
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-wide"
              style={{ textShadow: "0 2px 10px rgba(0,0,0,0.3)" }}
            >
              Transform Your Commercial Space
            </h1>
            <p 
              className="text-lg sm:text-xl text-white/90 font-medium max-w-2xl mx-auto"
              style={{ textShadow: "0 1px 8px rgba(0,0,0,0.2)" }}
            >
              Expert carpet and tile cleaning for businesses in Shawnee and surrounding areas
            </p>
          </div>

          {/* CTA Button */}
          <div className="text-center mb-12">
            <QuoteFormButton 
              className="shadow-xl hover:shadow-2xl transition-all duration-300 text-lg" 
              size="lg"
              variant="default"
            />
          </div>

          {/* Featured Testimonial */}
          <div className="max-w-2xl mx-auto">
            <div 
              className="backdrop-blur-sm rounded-2xl p-6"
              style={{ 
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
              }}
            >
              <TestimonialsCarousel className="text-white" />
            </div>
          </div>
        </div>

        {/* Location Badge - Moved to bottom */}
        <div className="text-center mt-8">
          <div 
            className="inline-block backdrop-blur-md rounded-full px-6 py-2 text-white font-medium shadow-lg"
            style={{ backgroundColor: 'rgba(255, 255, 255, 0.15)' }}
          >
            Serving Oklahoma City, Norman, Ada, and beyond
          </div>
        </div>
      </div>
    </section>
  )
}
