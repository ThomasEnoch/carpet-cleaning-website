import { MapPin, Clock, Sparkles } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function ServiceInformation() {
  return (
    <section className="bg-white py-16" aria-labelledby="service-info-title">
      <div className="container mx-auto px-4">
        <h2 id="service-info-title" className="sr-only">Service Information</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Service Area Card */}
          <Card className="border-none shadow-lg">
            <CardHeader className="space-y-1">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-2">
                <MapPin className="w-5 h-5 text-primary" />
              </div>
              <CardTitle className="text-xl">Service Area</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Serving a 60-mile radius from Shawnee, OK including the Oklahoma City metro area. 
                We provide expert commercial cleaning services throughout central Oklahoma.
              </p>
            </CardContent>
          </Card>

          {/* Business Hours Card */}
          <Card className="border-none shadow-lg">
            <CardHeader className="space-y-1">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-2">
                <Clock className="w-5 h-5 text-primary" />
              </div>
              <CardTitle className="text-xl">Business Hours</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Available Monday through Saturday, 9:00 AM - 6:00 PM. 
                Flexible scheduling available 24/7 to accommodate your business needs.
              </p>
            </CardContent>
          </Card>

          {/* Service Types Card */}
          <Card className="border-none shadow-lg">
            <CardHeader className="space-y-1">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-2">
                <Sparkles className="w-5 h-5 text-primary" />
              </div>
              <CardTitle className="text-xl">Service Types</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Specialized in commercial carpet, tile & grout cleaning. 
                Using advanced equipment and techniques for superior results.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
