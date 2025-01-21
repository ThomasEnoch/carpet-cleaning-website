import { Shield, Droplets, Clock, Award } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function Services() {
  const services = [
    {
      title: "Specialized Commercial Services",
      description:
        "We bring outstanding cleaning services to businesses of all sizes, with specialized packages for commercial spaces.",
      icon: Shield,
    },
    {
      title: "Experienced Professionals",
      description:
        "Our team is highly trained and experienced in handling all types of carpet and tile cleaning needs.",
      icon: Award,
    },
    {
      title: "Commercial Cleaning Solutions",
      description:
        "We have advanced equipment and eco-friendly cleaning solutions designed specifically for commercial spaces.",
      icon: Droplets,
    },
    {
      title: "Efficient & Safe Cleaning",
      description:
        "Our process ensures quick drying times and safe cleaning methods that won't disrupt your business operations.",
      icon: Clock,
    },
  ]

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose Our Carpet & Tile Cleaning?</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card key={index}>
              <CardHeader>
                <service.icon className="h-12 w-12 text-blue-500 mb-4" />
                <CardTitle>{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

