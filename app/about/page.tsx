import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock, Shield, Award, Building2, Droplets, SprayCan, MapPin } from "lucide-react"
import Navigation from "@/components/navigation"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "About Armstrong Carpet & Tile Cleaning | Shawnee's Trusted Commercial Cleaners",
  description: "Over 30 years of commercial carpet and tile cleaning excellence in Shawnee, OK. Family-owned, IICRC certified, and serving businesses within 60 miles of Shawnee.",
}

export default function AboutPage() {
  const features = [
    {
      icon: Clock,
      title: "Shawnee's Local Experts",
      description: "Family-owned and operated in Shawnee for over 30 years, serving central Oklahoma businesses with pride.",
    },
    {
      icon: Shield,
      title: "Fully Insured & Certified",
      description: "IICRC certified and fully insured, providing peace of mind for Shawnee area businesses.",
    },
    {
      icon: Award,
      title: "Expert Local Team",
      description: "Our Shawnee-based technicians are highly trained, professional, and committed to exceptional service.",
    },
    {
      icon: Building2,
      title: "Oklahoma Business Specialists",
      description:
        "Trusted by Shawnee and central Oklahoma businesses, including casinos, restaurants, offices, and retail spaces.",
    },
  ]

  const cleaningMethods = [
    {
      icon: Droplets,
      title: "Commercial Steam Cleaning",
      description: "Professional-grade hot water extraction perfect for Oklahoma's commercial environments.",
      benefits: ["Deep sanitization", "Allergen elimination", "Professional-grade cleaning"],
    },
    {
      icon: SprayCan,
      title: "Quick-Dry Commercial Cleaning",
      description:
        "Innovative low-moisture cleaning ideal for Shawnee businesses needing minimal downtime.",
      benefits: ["Rapid drying", "Business continuity", "Stain prevention"],
    },
  ]

  const serviceAreas = [
    "Oklahoma City",
    "Norman",
    "Ada",
    "Seminole",
    "Chandler",
    "Prague",
    "Tecumseh",
    "McLoud"
  ]

  return (
    <div className="min-h-screen bg-brand-blue-50">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-brand-blue-800 via-brand-blue-700 to-brand-blue-600 text-white py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex flex-wrap justify-center gap-2 mb-6">
              <Badge
                variant="secondary"
                className="bg-brand-primary/10 text-brand-secondary hover:bg-brand-primary/20 transition-colors"
              >
                <MapPin className="w-3 h-3 mr-1" />
                Shawnee, Oklahoma Based
              </Badge>
              <Badge
                variant="secondary"
                className="bg-brand-primary/10 text-brand-secondary hover:bg-brand-primary/20 transition-colors"
              >
                <Shield className="w-3 h-3 mr-1" />
                IICRC Certified
              </Badge>
              <Badge
                variant="secondary"
                className="bg-brand-primary/10 text-brand-secondary hover:bg-brand-primary/20 transition-colors"
              >
                <Clock className="w-3 h-3 mr-1" />
                30+ Years Experience
              </Badge>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Shawnee's Trusted Commercial Cleaning Experts</h1>
            <div className="h-1 w-20 bg-brand-primary mx-auto mb-8"></div>
            <p className="text-lg md:text-xl text-white/90">
              Family-owned and operated in Shawnee for over three decades, we're central Oklahoma's premier commercial carpet and tile cleaning service.
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-16 md:py-24 bg-brand-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-brand-blue-800 to-brand-primary hidden md:block"></div>
              <div className="space-y-12 relative">
                <div className="md:ml-8">
                  <div className="absolute left-[-8px] top-0 w-4 h-4 rounded-full bg-brand-primary hidden md:block"></div>
                  <h2 className="text-2xl md:text-3xl font-bold text-brand-blue-800 mb-4">Our Shawnee Heritage</h2>
                  <p className="text-brand-blue-600 leading-relaxed">
                    Founded over 30 years ago in Shawnee, Oklahoma, Armstrong Carpet & Tile Cleaning has grown to become 
                    central Oklahoma's trusted commercial cleaning partner. Our deep roots in the Shawnee community, combined 
                    with our commitment to excellence, have earned us the trust of businesses throughout the region.
                  </p>
                </div>

                <div className="md:ml-8">
                  <div className="absolute left-[-8px] top-0 w-4 h-4 rounded-full bg-brand-primary hidden md:block"></div>
                  <h2 className="text-2xl md:text-3xl font-bold text-brand-blue-800 mb-4">Local Expertise</h2>
                  <p className="text-brand-blue-600 leading-relaxed">
                    As a Shawnee-based business, we understand the unique challenges that Oklahoma's climate and commercial 
                    environments present. Our local expertise allows us to provide tailored solutions that meet the specific 
                    needs of businesses in our region.
                  </p>
                </div>

                <div className="md:ml-8">
                  <div className="absolute left-[-8px] top-0 w-4 h-4 rounded-full bg-brand-primary hidden md:block"></div>
                  <h2 className="text-2xl md:text-3xl font-bold text-brand-blue-800 mb-4">Service Area</h2>
                  <p className="text-brand-blue-600 leading-relaxed mb-6">
                    From our base in Shawnee, we proudly serve businesses within a 60-mile radius, including:
                  </p>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {serviceAreas.map((area) => (
                      <div key={area} className="bg-white p-3 rounded-lg shadow-sm text-center hover:shadow-md transition-shadow">
                        <p className="font-medium text-brand-blue-800">{area}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-brand-blue-800">Why Choose Shawnee's Best</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {features.map((feature, index) => (
              <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="pt-6">
                  <feature.icon className="w-12 h-12 text-brand-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-2 text-brand-blue-800">{feature.title}</h3>
                  <p className="text-brand-blue-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Cleaning Methods */}
      <section className="py-16 bg-brand-blue-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-brand-blue-800">Professional Cleaning Methods</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {cleaningMethods.map((method, index) => (
              <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="pt-6">
                  <method.icon className="w-12 h-12 text-brand-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-2 text-brand-blue-800">{method.title}</h3>
                  <p className="text-brand-blue-600 mb-4">{method.description}</p>
                  <ul className="space-y-2">
                    {method.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-center text-brand-blue-600">
                        <span className="w-2 h-2 bg-brand-primary rounded-full mr-2"></span>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
