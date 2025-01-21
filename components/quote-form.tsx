"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { theme } from "@/lib/constants"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { cn } from "@/lib/utils"

interface QuoteFormProps {
  isOpen: boolean
  onClose: () => void
}

export default function QuoteForm({ isOpen, onClose }: QuoteFormProps) {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    businessName: "",
    contactName: "",
    email: "",
    phone: "",
    address: "",
    squareFootage: 1000,
    services: {
      carpetSteam: false,
      carpetLowMoisture: false,
      groutTile: false
    },
    addOns: {
      spotTreatment: false,
      deodorizing: false,
      protectiveCoating: false,
      sanitizing: false,
      furnitureMoving: false
    },
    frequency: "one-time",
    additionalNotes: ""
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    // Calculate estimate
    const estimate = calculateEstimate()
    
    try {
      const response = await fetch('https://formsubmit.co/ajax/toemasenoch@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          _subject: `New Quote Request from ${formData.businessName}`,
          _replyto: formData.email,
          _from: `${formData.contactName} <${formData.email}>`,
          Business_Name: formData.businessName,
          Contact_Name: formData.contactName,
          Email: formData.email,
          Phone: formData.phone,
          Address: formData.address,
          Square_Footage: formData.squareFootage,
          Services: Object.entries(formData.services)
            .filter(([_, selected]) => selected)
            .map(([service]) => service)
            .join(", "),
          Add_Ons: Object.entries(formData.addOns)
            .filter(([_, selected]) => selected)
            .map(([addon]) => addon)
            .join(", "),
          Service_Frequency: formData.frequency,
          Additional_Notes: formData.additionalNotes,
          Estimated_Cost: `$${estimate.toFixed(2)}`,
          _template: "table"
        })
      })

      if (response.ok) {
        alert("Quote request sent successfully! We'll get back to you soon.")
        onClose()
      } else {
        throw new Error('Failed to send quote request')
      }
    } catch (error) {
      alert("Failed to send quote request. Please try again later.")
      console.error('Error sending quote request:', error)
    }
  }

  const calculateEstimate = () => {
    const baseRates = {
      carpetSteam: 0.15,
      carpetLowMoisture: 0.12,
      groutTile: 0.20
    }

    const addOnRates = {
      spotTreatment: 50,
      deodorizing: 75,
      protectiveCoating: 0.10,
      sanitizing: 0.08,
      furnitureMoving: 100
    }

    const frequencyDiscounts = {
      "one-time": 1,
      "monthly": 0.85,
      "quarterly": 0.90,
      "yearly": 0.95
    }

    let total = 0
    
    // Calculate base service costs
    Object.entries(formData.services).forEach(([service, selected]) => {
      if (selected) {
        total += formData.squareFootage * baseRates[service as keyof typeof baseRates]
      }
    })

    // Calculate add-on costs
    Object.entries(formData.addOns).forEach(([addon, selected]) => {
      if (selected) {
        const rate = addOnRates[addon as keyof typeof addOnRates]
        total += typeof rate === 'number' ? 
          (rate > 1 ? rate : rate * formData.squareFootage) : 0
      }
    })

    // Apply frequency discount
    total *= frequencyDiscounts[formData.frequency as keyof typeof frequencyDiscounts]

    return total
  }

  const nextStep = () => setStep(prev => prev + 1)
  const prevStep = () => setStep(prev => prev - 1)

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[600px] p-6">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-gray-900">Get Your Free Quote</DialogTitle>
          <DialogDescription className="text-gray-600 mt-2">
            Tell us about your business, and we'll create a custom cleaning solution that meets your needs.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6 mt-4">
          <div className="space-y-4">
            {step === 1 && (
              <>
                <Input
                  type="text"
                  placeholder="Business Name"
                  value={formData.businessName}
                  onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                  required
                  className="border-gray-300 focus:border-primary focus:ring-primary"
                />
                <Input
                  type="text"
                  placeholder="Contact Name"
                  value={formData.contactName}
                  onChange={(e) => setFormData({ ...formData, contactName: e.target.value })}
                  required
                  className="border-gray-300 focus:border-primary focus:ring-primary"
                />
                <Input
                  type="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="border-gray-300 focus:border-primary focus:ring-primary"
                />
                <Input
                  type="tel"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  required
                  className="border-gray-300 focus:border-primary focus:ring-primary"
                />
                <Input
                  type="text"
                  placeholder="Business Address"
                  value={formData.address}
                  onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                  required
                  className="border-gray-300 focus:border-primary focus:ring-primary"
                />
              </>
            )}

            {step === 2 && (
              <>
                <div className="space-y-4">
                  <Label>Square Footage (approx.)</Label>
                  <Slider
                    value={[formData.squareFootage]}
                    onValueChange={(value) => setFormData({ ...formData, squareFootage: value[0] })}
                    max={10000}
                    min={500}
                    step={100}
                    className="my-4"
                  />
                  <div className="text-sm text-gray-600 text-center">
                    {formData.squareFootage.toLocaleString()} sq ft
                  </div>
                </div>

                <div className="space-y-4">
                  <Label>Select Services</Label>
                  <div className="grid gap-4">
                    <div className="flex items-center justify-between">
                      <Label htmlFor="carpetSteam">Carpet Steam Cleaning</Label>
                      <Switch
                        id="carpetSteam"
                        checked={formData.services.carpetSteam}
                        onCheckedChange={(checked) => 
                          setFormData(prev => ({
                            ...prev,
                            services: { ...prev.services, carpetSteam: checked }
                          }))
                        }
                      />
                    </div>
                    <div className="flex items-center justify-between">
                      <Label htmlFor="carpetLowMoisture">Low Moisture Carpet Cleaning</Label>
                      <Switch
                        id="carpetLowMoisture"
                        checked={formData.services.carpetLowMoisture}
                        onCheckedChange={(checked) => 
                          setFormData(prev => ({
                            ...prev,
                            services: { ...prev.services, carpetLowMoisture: checked }
                          }))
                        }
                      />
                    </div>
                    <div className="flex items-center justify-between">
                      <Label htmlFor="groutTile">Tile & Grout Cleaning</Label>
                      <Switch
                        id="groutTile"
                        checked={formData.services.groutTile}
                        onCheckedChange={(checked) => 
                          setFormData(prev => ({
                            ...prev,
                            services: { ...prev.services, groutTile: checked }
                          }))
                        }
                      />
                    </div>
                  </div>
                </div>
              </>
            )}

            {step === 3 && (
              <>
                <div className="space-y-4">
                  <Label>Add-On Services</Label>
                  <div className="grid gap-4">
                    {Object.entries(formData.addOns).map(([key, value]) => (
                      <div key={key} className="flex items-center justify-between">
                        <Label htmlFor={key}>{key.replace(/([A-Z])/g, ' $1').trim()}</Label>
                        <Switch
                          id={key}
                          checked={value}
                          onCheckedChange={(checked) => 
                            setFormData(prev => ({
                              ...prev,
                              addOns: { ...prev.addOns, [key]: checked }
                            }))
                          }
                        />
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-4">
                  <Label>Service Frequency</Label>
                  <Tabs value={formData.frequency} onValueChange={(value) => setFormData({ ...formData, frequency: value })}>
                    <TabsList className="grid grid-cols-4 gap-2">
                      <TabsTrigger value="one-time">One Time</TabsTrigger>
                      <TabsTrigger value="monthly">Monthly</TabsTrigger>
                      <TabsTrigger value="quarterly">Quarterly</TabsTrigger>
                      <TabsTrigger value="yearly">Yearly</TabsTrigger>
                    </TabsList>
                  </Tabs>
                </div>
              </>
            )}

            {step === 4 && (
              <>
                <div className="space-y-4">
                  <Label>Additional Notes</Label>
                  <Textarea
                    placeholder="Any specific requirements or concerns?"
                    value={formData.additionalNotes}
                    onChange={(e) => setFormData({ ...formData, additionalNotes: e.target.value })}
                    className="min-h-[100px]"
                  />
                </div>

                <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                  <div className="text-lg font-semibold mb-2">Estimated Cost</div>
                  <div className="text-2xl font-bold text-primary">
                    ${calculateEstimate().toFixed(2)}
                  </div>
                  <div className="text-sm text-gray-500 mt-1">
                    Final price may vary based on site inspection
                  </div>
                </div>
              </>
            )}
          </div>

          <div className="flex justify-between gap-4">
            {step > 1 && (
              <Button
                type="button"
                variant="outline"
                onClick={prevStep}
                className="flex-1"
              >
                Previous
              </Button>
            )}
            {step < 4 ? (
              <Button
                type="button"
                onClick={nextStep}
                className="flex-1 bg-primary hover:bg-primaryDark text-white"
                style={{
                  backgroundColor: theme.colors.primary,
                  "--hover-color": theme.colors.primaryDark,
                } as any}
              >
                Next
              </Button>
            ) : (
              <Button
                type="submit"
                className="flex-1 bg-primary hover:bg-primaryDark text-white"
                style={{
                  backgroundColor: theme.colors.primary,
                  "--hover-color": theme.colors.primaryDark,
                } as any}
              >
                Submit Quote Request
              </Button>
            )}
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
}
