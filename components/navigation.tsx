"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, Phone, X, Clock } from "lucide-react"
import { theme } from "@/lib/constants"

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div>
      {/* Top Bar */}
      <div className="bg-[#003a61] py-2 text-white">
        <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between px-4 gap-2 sm:gap-0">
          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4" />
            <span className="text-sm">Monday to Saturday 9:00AM - 6:00PM</span>
          </div>
          <a href="tel:+14058780220" className="flex items-center gap-2 hover:text-cyan-200">
            <Phone className="h-4 w-4" />
            <span className="text-sm">(405) 878-0220</span>
          </a>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm" role="navigation" aria-label="Main">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-16 relative">
            <Link href="/" className="flex items-center">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-W65BeuAVY1LKpwLLmdLiTyxmerFTxW.png"
                alt="Armstrong Carpet & Tile Cleaning"
                width={180}
                height={50}
                className="h-10 sm:h-12 w-auto"
              />
            </Link>

            <div className="md:hidden">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                className="text-gray-600 hover:bg-gray-100"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>

            <div className="hidden md:flex items-center space-x-4 lg:space-x-8">
              <Link href="/" className="text-gray-600 hover:text-primary transition-colors">
                Home
              </Link>
              <Link href="/about" className="text-gray-600 hover:text-primary transition-colors">
                About
              </Link>
              <Link href="/services" className="text-gray-600 hover:text-primary transition-colors">
                Services
              </Link>
              <Link href="/gallery" className="text-gray-600 hover:text-primary transition-colors">
                Gallery
              </Link>
              <Link href="/contact" className="text-gray-600 hover:text-primary transition-colors">
                Contact
              </Link>
              <Button
                className="bg-primary hover:bg-primaryDark text-white shadow-md transition-all"
                style={
                  {
                    backgroundColor: theme.colors.primary,
                    "--hover-color": theme.colors.primaryDark,
                  } as any
                }
              >
                Get a Quote
              </Button>
            </div>
          </div>

          {/* Mobile Menu */}
          <div
            className={`${
              isMenuOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
            } md:hidden overflow-hidden transition-all duration-300 ease-in-out absolute top-full left-0 right-0 bg-white border-b border-gray-200 shadow-lg`}
          >
            <div className="py-4 px-4 space-y-4">
              <Link 
                href="/" 
                className="block text-gray-600 hover:text-primary hover:bg-gray-50 transition-colors rounded-lg px-4 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                href="/about" 
                className="block text-gray-600 hover:text-primary hover:bg-gray-50 transition-colors rounded-lg px-4 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link 
                href="/services" 
                className="block text-gray-600 hover:text-primary hover:bg-gray-50 transition-colors rounded-lg px-4 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </Link>
              <Link 
                href="/gallery" 
                className="block text-gray-600 hover:text-primary hover:bg-gray-50 transition-colors rounded-lg px-4 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Gallery
              </Link>
              <Link 
                href="/contact" 
                className="block text-gray-600 hover:text-primary hover:bg-gray-50 transition-colors rounded-lg px-4 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <div className="pt-2">
                <Button
                  className="w-full bg-primary hover:bg-primaryDark text-white shadow-md transition-all"
                  style={
                    {
                      backgroundColor: theme.colors.primary,
                      "--hover-color": theme.colors.primaryDark,
                    } as any
                  }
                  onClick={() => setIsMenuOpen(false)}
                >
                  Get a Quote
                </Button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}
