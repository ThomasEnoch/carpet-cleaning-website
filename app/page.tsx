'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"
import HeroSection from "@/components/hero-section"
import Navigation from "@/components/navigation"
import ServiceInformation from "@/components/service-information"
import { Shield, Droplets, Clock, Award, CheckCircle } from "lucide-react"
import QuoteFormButton from "@/components/quote-form-button"
import ClientWrapper from "@/components/client-wrapper"
import { theme } from "@/lib/constants"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { useIntersectionObserver } from "@/hooks/use-intersection"
import { cn } from "@/lib/utils"

export default function Home() {
  const [whyChooseRef, isWhyChooseVisible] = useIntersectionObserver()
  const [advantageRef, isAdvantageVisible] = useIntersectionObserver()
  
  const benefits = [
    {
      icon: Shield,
      title: "Local Commercial Expertise",
      description: "Over a decade of experience serving Oklahoma businesses with specialized cleaning solutions",
    },
    {
      icon: Award,
      title: "Certified Excellence",
      description: "IICRC certified technicians using industry-leading techniques and best practices",
    },
    {
      icon: Droplets,
      title: "Advanced Technology",
      description: "Low-moisture cleaning systems that minimize disruption to your business operations",
    },
    {
      icon: Clock,
      title: "Flexible Service",
      description: "Available 24/7 with scheduling options that work around your business hours",
    },
  ]

  return (
    <ClientWrapper>
      <style jsx global>{`
        @keyframes float-up {
          0% {
            opacity: 0;
            transform: translateY(40px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes bubble-in {
          0% {
            opacity: 0;
            transform: scale(0.8) translateY(40px);
          }
          50% {
            transform: scale(1.05) translateY(-5px);
          }
          100% {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }

        .float-animation {
          opacity: 0;
          transform: translateY(40px);
        }

        .float-animation.visible {
          animation: float-up 0.8s ease-out forwards;
          animation-play-state: paused;
        }

        .float-animation.visible[data-animated="true"] {
          animation-play-state: running;
        }

        .bubble-animation {
          opacity: 0;
          transform: scale(0.8) translateY(40px);
        }

        .bubble-animation.visible {
          animation: bubble-in 1s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
          animation-play-state: paused;
        }

        .bubble-animation.visible[data-animated="true"] {
          animation-play-state: running;
        }
      `}</style>

      <div className="min-h-screen bg-gray-50">
        <Navigation />
        <HeroSection />

        {/* Why Choose Armstrong Section */}
        <section className="py-16 bg-white" ref={whyChooseRef}>
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
              <div className={cn(
                "bg-gray-100 rounded-lg aspect-video flex flex-col items-center justify-center relative",
                "bubble-animation",
                isWhyChooseVisible && "visible"
              )}
              data-animated={isWhyChooseVisible ? "true" : undefined}>
                <div className="w-16 h-16 text-gray-300">
                  <Image 
                    src="/placeholder-image.jpg" 
                    alt="Commercial Cleaning" 
                    width={600}
                    height={400}
                    className="rounded-lg"
                  />
                </div>
                <div 
                  className="absolute -right-4 bottom-8 bg-accent text-white px-6 py-2 rounded-lg shadow-lg font-semibold"
                  style={{ backgroundColor: theme.colors.accent }}
                >
                  20+ Years Experience
                </div>
              </div>
              <div>
                <h2 className={cn(
                  "text-3xl md:text-4xl font-bold mb-6 text-gray-800",
                  "float-animation",
                  isWhyChooseVisible && "visible"
                )}
                data-animated={isWhyChooseVisible ? "true" : undefined}>
                  Why Choose Armstrong?
                </h2>
                <ul className="space-y-4">
                  {["Industry-leading equipment and techniques",
                    "Eco-friendly cleaning solutions",
                    "Flexible scheduling for minimal disruption",
                    "Comprehensive service guarantee",
                    "Expert stain removal and maintenance"].map((item, index) => (
                    <li 
                      key={index}
                      className={cn(
                        "flex items-center space-x-3 float-animation",
                        isWhyChooseVisible && "visible"
                      )}
                      data-animated={isWhyChooseVisible ? "true" : undefined}
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <div className="w-5 h-5 text-primary">
                        <CheckCircle className="w-5 h-5" />
                      </div>
                      <span className="text-gray-600">{item}</span>
                    </li>
                  ))}
                </ul>
                <div className={cn(
                  "mt-8 float-animation",
                  isWhyChooseVisible && "visible"
                  )}
                  data-animated={isWhyChooseVisible ? "true" : undefined}
                  style={{ animationDelay: "0.5s" }}
                >
                  <QuoteFormButton 
                    variant="default"
                    size="lg"
                    className="shadow-lg hover:shadow-xl transition-shadow"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* The Armstrong Advantage Section */}
        <section className="py-16 bg-gray-50" ref={advantageRef}>
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className={cn(
                "text-3xl md:text-4xl font-bold mb-4 text-gray-800",
                "float-animation",
                isAdvantageVisible && "visible"
              )}
              data-animated={isAdvantageVisible ? "true" : undefined}>
                The Armstrong Advantage
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className={cn(
                    "bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow bubble-animation",
                    isAdvantageVisible && "visible"
                  )}
                  data-animated={isAdvantageVisible ? "true" : undefined}
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  <div className="w-12 h-12 mb-4 text-primary">
                    {<benefit.icon className="w-12 h-12" />}
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-800">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Service Information Section */}
        <section className="py-16 bg-gray-50" style={{ backgroundColor: theme.colors.gray[50] }}>
          <ServiceInformation />
        </section>

        {/* CTA Section */}
        <section 
          className="py-16 relative overflow-hidden"
          style={{ 
            background: `linear-gradient(135deg, ${theme.colors.primary}, ${theme.colors.primaryDark})`,
          }}
        >
          {/* Subtle overlay pattern */}
          <div 
            className="absolute inset-0 opacity-5"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%23ffffff' fill-opacity='0.4' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E")`,
              backgroundRepeat: "repeat",
            }}
          />
          
          <div className="container mx-auto px-4 text-center relative">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                Ready to Get Started?
              </h2>
              <p className="text-xl mb-8 text-white/90">
                Schedule your professional cleaning service today
              </p>
              <QuoteFormButton 
                variant="secondary" 
                size="lg" 
                className="shadow-lg hover:shadow-xl transition-shadow !bg-white !text-primary hover:!bg-gray-50" 
              />
            </div>
          </div>
        </section>
      </div>
    </ClientWrapper>
  )
}
