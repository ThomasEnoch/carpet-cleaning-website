import Image from "next/image"
import Link from "next/link"
import { Phone, Mail, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-[#1a2942] to-[#0f172a] text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-zgCuPluPf7v0zmJbMeLGJ6rQeJZlXx.png"
              alt="Carpet Cleaning Logo"
              width={150}
              height={60}
              className="h-12 w-auto mb-4"
            />
            <p className="text-gray-400">Professional carpet and tile cleaning services for commercial spaces.</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-400 hover:text-white">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-gray-400 hover:text-white">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li className="text-gray-400">Carpet Cleaning</li>
              <li className="text-gray-400">Tile & Grout Cleaning</li>
              <li className="text-gray-400">Commercial Cleaning</li>
              <li className="text-gray-400">Emergency Services</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-2">
              <li className="flex items-center text-gray-400">
                <Phone className="h-5 w-5 mr-2" />
                (555) 123-4567
              </li>
              <li className="flex items-center text-gray-400">
                <Mail className="h-5 w-5 mr-2" />
                info@carpetcleaning.com
              </li>
              <li className="flex items-center text-gray-400">
                <MapPin className="h-5 w-5 mr-2" />
                123 Cleaning Street, City, ST 12345
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Professional Carpet Cleaning. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

