"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"
import Navigation from "@/components/navigation"
import { Droplets, SprayCanIcon, Wind, Clock, Shield, Award, DropletIcon } from "lucide-react"
import { theme } from "@/lib/constants"
import QuoteFormButton from "@/components/quote-form-button"
import { cn } from "@/lib/utils"

import { Metadata } from "next"

const metadata = {
  title: "Commercial Cleaning Services in Shawnee, OK | Armstrong Carpet & Tile",
  description: "Expert commercial carpet, tile, and grout cleaning services in Shawnee and surrounding areas. Serving businesses within 60 miles with flexible scheduling and advanced cleaning technology.",
}

const services = [
  {
    id: "grout-tile",
    title: "Commercial Tile & Grout Cleaning",
    icon: DropletIcon,
    description:
      "Professional tile and grout cleaning services using advanced steam cleaning technology to restore your commercial floors to like-new condition.",
    steps: [
      {
        title: "Free On-Site Assessment",
        description:
          "We provide a thorough inspection and discuss your specific needs, offering a detailed quote for your Shawnee area business.",
      },
      {
        title: "Customized Preparation",
        description:
          "Our Shawnee-based team carefully prepares your commercial space, ensuring minimal disruption to your business operations.",
      },
      {
        title: "Professional Treatment",
        description:
          "Using commercial-grade, eco-friendly cleaning solutions that are safe for your employees and customers while delivering optimal results.",
      },
      {
        title: "Advanced Steam Cleaning",
        description:
          "Our state-of-the-art equipment delivers high-pressure, high-temperature cleaning that eliminates dirt, bacteria, and contaminants, exceeding Oklahoma commercial cleaning standards.",
      },
    ],
  },
  {
    id: "low-moisture",
    title: "Low Moisture Carpet Cleaning",
    icon: SprayCanIcon,
    description:
      "Innovative low-moisture carpet cleaning perfect for businesses needing quick-drying solutions. Ideal for high-traffic commercial spaces.",
    steps: [
      {
        title: "Rapid-Dry Technology",
        description:
          "Get back to business faster with our quick-drying system, perfect for Shawnee's busy commercial environments.",
      },
      {
        title: "Advanced Stain Treatment",
        description: 
          "Specialized spot and stain removal techniques developed for Oklahoma's commercial spaces and climate conditions.",
      },
      {
        title: "Preventive Maintenance",
        description:
          "Custom maintenance programs designed for Shawnee businesses, combining low-moisture and steam cleaning for optimal results.",
      },
    ],
  },
  {
    id: "steam-cleaning",
    title: "Deep Steam Carpet Cleaning",
    icon: Droplets,
    description:
      "Our deep steam cleaning method provides thorough cleaning and sanitization, perfect for commercial spaces requiring intensive treatment.",
    steps: [
      {
        title: "Commercial Assessment",
        description:
          "Detailed evaluation of your commercial space, with special attention to high-traffic areas common in Shawnee businesses.",
      },
      {
        title: "Business-First Preparation",
        description:
          "Strategic setup that minimizes disruption to your business operations, ideal for Shawnee's commercial environment.",
      },
      {
        title: "Professional Treatment",
        description:
          "Commercial-grade pre-treatment specifically chosen for Oklahoma's climate and business conditions.",
      },
      {
        title: "Deep Steam Clean",
        description:
          "Industry-leading equipment and techniques that meet and exceed Oklahoma's commercial cleaning standards.",
      },
    ],
  },
]

export default function ServicesPage() {
  const [activeService, setActiveService] = useState(services[0].id)

  return (
    <div className="min-h-screen bg-brand-blue-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-brand-blue-800 via-brand-blue-700 to-brand-blue-600 text-white py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex flex-wrap justify-center gap-2 mb-6">
              <Badge variant="secondary" className="bg-brand-primary/10 text-brand-secondary">
                <Shield className="w-3 h-3 mr-1" />
                Shawnee-Based
              </Badge>
              <Badge variant="secondary" className="bg-brand-primary/10 text-brand-secondary">
                <Clock className="w-3 h-3 mr-1" />
                24/7 Service
              </Badge>
              <Badge variant="secondary" className="bg-brand-primary/10 text-brand-secondary">
                <Award className="w-3 h-3 mr-1" />
                IICRC Certified
              </Badge>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Professional Commercial Cleaning Services in Shawnee, OK
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Serving businesses within 60 miles of Shawnee with expert carpet, tile, and grout cleaning solutions. 
              Trusted by Oklahoma businesses for superior results and exceptional service.
            </p>
            <div className="flex justify-center gap-4">
              <QuoteFormButton />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-brand-blue-800">
              Commercial Cleaning Solutions for Central Oklahoma
            </h2>
            <Card className="mb-12 border-none shadow-lg bg-white/80 backdrop-blur-sm">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl font-bold text-brand-blue-800">Choose Your Service</CardTitle>
                <p className="text-gray-600 mt-2">
                  Select a service below to learn more about our professional cleaning process
                </p>
              </CardHeader>
            </Card>

            {/* Mobile Service Selection Cards */}
            <div className="md:hidden grid gap-4 mb-8">
              {services.map((service) => (
                <button
                  key={service.id}
                  onClick={() => setActiveService(service.id)}
                  className={cn(
                    "p-6 rounded-lg border-2 transition-all duration-200 w-full",
                    activeService === service.id
                      ? "bg-brand-primary text-white border-brand-primary shadow-lg"
                      : "bg-white hover:bg-brand-blue-50 border-brand-blue-200 hover:border-brand-primary/50"
                  )}
                >
                  <div className="flex items-center gap-3">
                    <service.icon className={cn(
                      "w-6 h-6",
                      activeService === service.id ? "text-brand-secondary" : "text-brand-primary"
                    )} />
                    <span className="font-medium text-lg text-left">{service.title}</span>
                  </div>
                </button>
              ))}
            </div>

            {/* Desktop Tabs */}
            <div className="hidden md:block mb-8">
              <Tabs value={activeService} onValueChange={setActiveService} className="w-full">
                <TabsList className="flex w-full mb-8 bg-white shadow-lg rounded-lg overflow-hidden p-2 gap-2">
                  {services.map((service) => (
                    <TabsTrigger 
                      key={service.id} 
                      value={service.id} 
                      className="flex-1 py-6 px-6 data-[state=active]:bg-brand-primary data-[state=active]:text-white data-[state=active]:shadow-lg transition-all duration-200 rounded-md"
                    >
                      <div className="flex items-center justify-center gap-3">
                        <service.icon className="w-5 h-5" />
                        <span className="font-medium">{service.title}</span>
                      </div>
                    </TabsTrigger>
                  ))}
                </TabsList>
              </Tabs>
            </div>

            {/* Service Content - Visible on both mobile and desktop */}
            <AnimatePresence mode="wait">
              {services.map((service) => (
                service.id === activeService && (
                  <motion.div
                    key={service.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Card className="border-none shadow-lg bg-white overflow-hidden">
                      <CardHeader className="bg-gradient-to-r from-brand-blue-800 to-brand-blue-600 text-white">
                        <CardTitle className="flex items-center text-xl sm:text-2xl md:text-3xl">
                          <service.icon className="w-6 h-6 sm:w-8 sm:h-8 mr-3 text-brand-secondary" />
                          {service.title}
                        </CardTitle>
                        <p className="mt-2 text-white/90 text-sm sm:text-base">{service.description}</p>
                      </CardHeader>
                      <CardContent className="pt-6">
                        <h3 className="text-xl font-semibold mb-4 text-brand-blue-800 flex items-center">
                          <span className="w-1 h-6 bg-brand-primary rounded-full mr-3"></span>
                          Our Process:
                        </h3>
                        <Accordion 
                          type="single" 
                          collapsible 
                          className="w-full space-y-3"
                        >
                          {service.steps.map((step, index) => (
                            <AccordionItem 
                              key={index} 
                              value={`step-${index}`} 
                              className="border border-brand-blue-100 rounded-lg px-4 shadow-sm hover:shadow-md transition-shadow"
                            >
                              <AccordionTrigger className="hover:text-brand-primary transition-colors py-4">
                                <div className="flex items-center">
                                  <span className="w-6 h-6 rounded-full bg-brand-blue-50 text-brand-primary text-sm flex items-center justify-center mr-3">
                                    {index + 1}
                                  </span>
                                  {step.title}
                                </div>
                              </AccordionTrigger>
                              <AccordionContent className="text-gray-600 pl-9">
                                {step.description}
                              </AccordionContent>
                            </AccordionItem>
                          ))}
                        </Accordion>
                      </CardContent>
                    </Card>
                  </motion.div>
                )
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        className="py-16"
        style={{ background: `linear-gradient(to bottom right, ${theme.colors.primary}, ${theme.colors.primaryDark})` }}
      >
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Ready to Transform Your Space?</h2>
          <p className="text-xl mb-8 text-white/90">
            Get in touch today for a customized quote and experience the Armstrong difference.
          </p>
          <QuoteFormButton />
        </div>
      </section>

      {/* Service Area Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 text-brand-blue-800">Service Area</h2>
          <p className="text-gray-600 mb-4">
            Based in Shawnee, we proudly serve businesses within a 60-mile radius, including:
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
            <div className="bg-white p-3 rounded-lg shadow-sm">
              <p className="font-medium">Oklahoma City</p>
            </div>
            <div className="bg-white p-3 rounded-lg shadow-sm">
              <p className="font-medium">Norman</p>
            </div>
            <div className="bg-white p-3 rounded-lg shadow-sm">
              <p className="font-medium">Ada</p>
            </div>
            <div className="bg-white p-3 rounded-lg shadow-sm">
              <p className="font-medium">Seminole</p>
            </div>
            <div className="bg-white p-3 rounded-lg shadow-sm">
              <p className="font-medium">Chandler</p>
            </div>
            <div className="bg-white p-3 rounded-lg shadow-sm">
              <p className="font-medium">Prague</p>
            </div>
            <div className="bg-white p-3 rounded-lg shadow-sm">
              <p className="font-medium">Tecumseh</p>
            </div>
            <div className="bg-white p-3 rounded-lg shadow-sm">
              <p className="font-medium">McLoud</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
