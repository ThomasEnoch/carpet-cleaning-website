"use client"

import { useState, useMemo } from "react"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Slider } from "@/components/ui/slider"
import { Switch } from "@/components/ui/switch"
import { Textarea } from "@/components/ui/textarea"
import { cn } from "@/lib/utils"
import { ChevronDown, ChevronUp } from "lucide-react"

interface EstimateWizardProps {
  isOpen: boolean
  onClose: () => void
}

export default function EstimateWizard({ isOpen, onClose }: EstimateWizardProps) {
  const [step, setStep] = useState(1)
  const [showAddOns, setShowAddOns] = useState(false)
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
      groutTile: false,
    },
    frequency: "one-time",
    addOns: {
      spotTreatment: false,
      deodorizing: false,
      protectiveCoating: false,
      sanitizing: false,
      furnitureMoving: false,
    },
    additionalNotes: "",
  })

  // Calculate number of selected add-ons
  const selectedAddOns = Object.values(formData.addOns).filter(Boolean).length

  // Calculate estimate in real-time using useMemo
  const estimate = useMemo(() => {
    // Check if any services are selected
    const hasSelectedServices = Object.values(formData.services).some(isSelected => isSelected);
    
    // If no services selected, return 0
    if (!hasSelectedServices) {
      return 0;
    }

    // Base rates per square foot
    const serviceRates = {
      carpetSteam: 0.35,
      carpetLowMoisture: 0.30,
      groutTile: 0.45,
    }

    // Add-on rates per square foot
    const addOnRates = {
      spotTreatment: 0.10,
      deodorizing: 0.08,
      protectiveCoating: 0.15,
      sanitizing: 0.12,
      furnitureMoving: 75, // Flat rate
    }

    // Calculate base service cost
    let totalCost = 0
    Object.entries(formData.services).forEach(([service, isSelected]) => {
      if (isSelected) {
        totalCost += formData.squareFootage * serviceRates[service as keyof typeof serviceRates]
      }
    })

    // Add costs for per-square-foot add-ons
    Object.entries(formData.addOns).forEach(([addon, isSelected]) => {
      if (isSelected) {
        if (addon === 'furnitureMoving') {
          totalCost += addOnRates.furnitureMoving
        } else {
          totalCost += formData.squareFootage * addOnRates[addon as keyof typeof addOnRates]
        }
      }
    })

    // Apply frequency discounts
    const frequencyDiscounts = {
      'monthly': 0.15,
      'quarterly': 0.10,
      'yearly': 0.05,
      'one-time': 0
    }
    
    const discount = frequencyDiscounts[formData.frequency as keyof typeof frequencyDiscounts]
    totalCost = totalCost * (1 - discount)

    // Enforce minimum charge only if services are selected
    return Math.max(totalCost, 150)
  }, [formData])

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto bg-white">
        <div className="space-y-6">
          <div>
            <h2 className="text-2xl font-semibold text-gray-900">Get Your Free Estimate</h2>
            <p className="text-gray-500 mt-2">
              Tell us about your business, and we'll create a custom cleaning solution that meets your needs.
            </p>
          </div>
          
          <form 
            onSubmit={(e) => {
              e.preventDefault()
              if (step === 1) {
                setStep(2)
              }
            }}
            className="space-y-4"
          >
            <Tabs value={String(step)} onValueChange={(value) => setStep(Number(value))}>
              <TabsList className="grid w-full grid-cols-2 bg-white shadow-sm">
                <TabsTrigger 
                  value="1" 
                  className={cn(
                    "text-gray-600 data-[state=active]:bg-brand-primary",
                    "data-[state=active]:text-white"
                  )}
                >
                  Business Info
                </TabsTrigger>
                <TabsTrigger 
                  value="2"
                  className={cn(
                    "text-gray-600 data-[state=active]:bg-brand-primary",
                    "data-[state=active]:text-white"
                  )}
                >
                  Service Details
                </TabsTrigger>
              </TabsList>

              <TabsContent value="1" className="space-y-4 mt-6">
                <div className="grid gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="businessName" className="text-gray-700">Business Name</Label>
                    <Input
                      id="businessName"
                      name="businessName"
                      type="text"
                      inputMode="text"
                      autoComplete="organization"
                      placeholder="Enter your business name"
                      value={formData.businessName}
                      onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                      className="bg-white border-gray-200"
                      onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                          e.preventDefault()
                          document.getElementById('contactName')?.focus()
                        }
                      }}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="contactName" className="text-gray-700">Contact Name</Label>
                    <Input
                      id="contactName"
                      name="contactName"
                      type="text"
                      inputMode="text"
                      autoComplete="name"
                      placeholder="Enter contact person's name"
                      value={formData.contactName}
                      onChange={(e) => setFormData({ ...formData, contactName: e.target.value })}
                      className="bg-white border-gray-200"
                      onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                          e.preventDefault()
                          document.getElementById('email')?.focus()
                        }
                      }}
                    />
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-gray-700">Email</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        inputMode="email"
                        autoComplete="email"
                        placeholder="Enter email address"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="bg-white border-gray-200"
                        onKeyDown={(e) => {
                          if (e.key === 'Enter') {
                            e.preventDefault()
                            document.getElementById('phone')?.focus()
                          }
                        }}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-gray-700">Phone</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        inputMode="tel"
                        autoComplete="tel"
                        placeholder="Enter phone number"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="bg-white border-gray-200"
                        onKeyDown={(e) => {
                          if (e.key === 'Enter') {
                            e.preventDefault()
                            document.getElementById('address')?.focus()
                          }
                        }}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="address" className="text-gray-700">Business Address</Label>
                    <Textarea
                      id="address"
                      name="address"
                      placeholder="Enter your business address"
                      value={formData.address}
                      onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                      className="bg-white border-gray-200 min-h-[80px]"
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' && !e.shiftKey) {
                          e.preventDefault()
                          setStep(2)
                        }
                      }}
                    />
                  </div>
                </div>

                <div className="flex justify-end gap-4 mt-6 sticky bottom-0 bg-white py-4 border-t">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={onClose}
                    className="border-gray-200 text-gray-700 hover:bg-gray-50"
                  >
                    Contact
                  </Button>
                  <Button
                    type="submit"
                    className="bg-brand-primary hover:bg-brand-primary/90 text-white"
                  >
                    Create Estimate
                  </Button>
                </div>
              </TabsContent>

              <TabsContent value="2" className="mt-6">
                <div className="space-y-6">
                  <div>
                    <Label className="text-gray-700 mb-2 block">Square Footage: {formData.squareFootage} sq ft</Label>
                    <div className="px-2 py-6 bg-gray-50 rounded-lg">
                      <Slider
                        value={[formData.squareFootage]}
                        onValueChange={(value) => setFormData({ ...formData, squareFootage: value[0] })}
                        max={10000}
                        min={500}
                        step={100}
                        className="my-4"
                      />
                      <div className="flex justify-between text-sm text-gray-500 mt-2">
                        <span>500 sq ft</span>
                        <span>10,000 sq ft</span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <Label className="text-gray-700">Core Services</Label>
                    <div className="grid gap-4">
                      <div className={cn(
                        "flex items-center justify-between p-4 bg-white rounded-lg border hover:bg-gray-50",
                        formData.services.carpetSteam ? "border-brand-primary ring-1 ring-brand-primary/20" : "border-gray-200"
                      )}>
                        <Label htmlFor="carpetSteam" className="cursor-pointer">
                          <div className="font-medium text-gray-900">Carpet Steam Cleaning</div>
                          <div className="text-sm text-gray-600">Deep cleaning with hot water extraction</div>
                        </Label>
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

                      <div className={cn(
                        "flex items-center justify-between p-4 bg-white rounded-lg border hover:bg-gray-50",
                        formData.services.carpetLowMoisture ? "border-brand-primary ring-1 ring-brand-primary/20" : "border-gray-200"
                      )}>
                        <Label htmlFor="carpetLowMoisture" className="cursor-pointer">
                          <div className="font-medium text-gray-900">Low-Moisture Cleaning</div>
                          <div className="text-sm text-gray-600">Quick-dry solution for regular maintenance</div>
                        </Label>
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

                      <div className={cn(
                        "flex items-center justify-between p-4 bg-white rounded-lg border hover:bg-gray-50",
                        formData.services.groutTile ? "border-brand-primary ring-1 ring-brand-primary/20" : "border-gray-200"
                      )}>
                        <Label htmlFor="groutTile" className="cursor-pointer">
                          <div className="font-medium text-gray-900">Tile & Grout Cleaning</div>
                          <div className="text-sm text-gray-600">Professional restoration for hard surfaces</div>
                        </Label>
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

                  <div className="space-y-4">
                    <Label className="text-gray-700">Service Frequency</Label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      {[
                        { value: "one-time", label: "One Time" },
                        { value: "monthly", label: "Monthly", discount: "15%" },
                        { value: "quarterly", label: "Quarterly", discount: "10%" },
                        { value: "yearly", label: "Yearly", discount: "5%" }
                      ].map(({ value, label, discount }) => (
                        <Button
                          key={value}
                          type="button"
                          variant="outline"
                          className={cn(
                            "border-gray-200 text-gray-700 hover:bg-brand-blue-50 flex flex-col items-center p-3 h-auto",
                            formData.frequency === value && "bg-brand-primary text-white hover:bg-brand-primary/90"
                          )}
                          onClick={() => setFormData({ ...formData, frequency: value })}
                        >
                          <span>{label}</span>
                          {discount && (
                            <span className={cn(
                              "text-xs mt-1",
                              formData.frequency === value ? "text-white/90" : "text-brand-primary"
                            )}>
                              Save {discount}
                            </span>
                          )}
                        </Button>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-4">
                    <button
                      type="button"
                      onClick={() => setShowAddOns(!showAddOns)}
                      className="w-full flex items-center justify-between p-4 bg-white rounded-lg border border-gray-200 hover:bg-gray-50"
                    >
                      <div>
                        <h3 className="font-medium text-gray-900">Additional Services</h3>
                        <p className="text-sm text-gray-600">
                          {selectedAddOns} service{selectedAddOns !== 1 ? 's' : ''} selected
                        </p>
                      </div>
                      {showAddOns ? (
                        <ChevronUp className="h-5 w-5 text-gray-500" />
                      ) : (
                        <ChevronDown className="h-5 w-5 text-gray-500" />
                      )}
                    </button>

                    {showAddOns && (
                      <div className="space-y-3 pl-4">
                        <div className={cn(
                          "flex items-center justify-between p-4 bg-white rounded-lg border hover:bg-gray-50",
                          formData.addOns.spotTreatment ? "border-brand-primary ring-1 ring-brand-primary/20" : "border-gray-200"
                        )}>
                          <Label htmlFor="spotTreatment" className="cursor-pointer">
                            <div className="font-medium text-gray-900">Spot Treatment</div>
                            <div className="text-sm text-gray-600">Treatment for stubborn stains</div>
                          </Label>
                          <Switch
                            id="spotTreatment"
                            checked={formData.addOns.spotTreatment}
                            onCheckedChange={(checked) => 
                              setFormData(prev => ({
                                ...prev,
                                addOns: { ...prev.addOns, spotTreatment: checked }
                              }))
                            }
                          />
                        </div>

                        <div className={cn(
                          "flex items-center justify-between p-4 bg-white rounded-lg border hover:bg-gray-50",
                          formData.addOns.deodorizing ? "border-brand-primary ring-1 ring-brand-primary/20" : "border-gray-200"
                        )}>
                          <Label htmlFor="deodorizing" className="cursor-pointer">
                            <div className="font-medium text-gray-900">Deodorizing</div>
                            <div className="text-sm text-gray-600">Eliminate odors at their source</div>
                          </Label>
                          <Switch
                            id="deodorizing"
                            checked={formData.addOns.deodorizing}
                            onCheckedChange={(checked) => 
                              setFormData(prev => ({
                                ...prev,
                                addOns: { ...prev.addOns, deodorizing: checked }
                              }))
                            }
                          />
                        </div>

                        <div className={cn(
                          "flex items-center justify-between p-4 bg-white rounded-lg border hover:bg-gray-50",
                          formData.addOns.protectiveCoating ? "border-brand-primary ring-1 ring-brand-primary/20" : "border-gray-200"
                        )}>
                          <Label htmlFor="protectiveCoating" className="cursor-pointer">
                            <div className="font-medium text-gray-900">Protective Coating</div>
                            <div className="text-sm text-gray-600">Shield against future stains</div>
                          </Label>
                          <Switch
                            id="protectiveCoating"
                            checked={formData.addOns.protectiveCoating}
                            onCheckedChange={(checked) => 
                              setFormData(prev => ({
                                ...prev,
                                addOns: { ...prev.addOns, protectiveCoating: checked }
                              }))
                            }
                          />
                        </div>

                        <div className={cn(
                          "flex items-center justify-between p-4 bg-white rounded-lg border hover:bg-gray-50",
                          formData.addOns.sanitizing ? "border-brand-primary ring-1 ring-brand-primary/20" : "border-gray-200"
                        )}>
                          <Label htmlFor="sanitizing" className="cursor-pointer">
                            <div className="font-medium text-gray-900">Sanitizing</div>
                            <div className="text-sm text-gray-600">Eliminate bacteria and allergens</div>
                          </Label>
                          <Switch
                            id="sanitizing"
                            checked={formData.addOns.sanitizing}
                            onCheckedChange={(checked) => 
                              setFormData(prev => ({
                                ...prev,
                                addOns: { ...prev.addOns, sanitizing: checked }
                              }))
                            }
                          />
                        </div>

                        <div className={cn(
                          "flex items-center justify-between p-4 bg-white rounded-lg border hover:bg-gray-50",
                          formData.addOns.furnitureMoving ? "border-brand-primary ring-1 ring-brand-primary/20" : "border-gray-200"
                        )}>
                          <Label htmlFor="furnitureMoving" className="cursor-pointer">
                            <div className="font-medium text-gray-900">Furniture Moving</div>
                            <div className="text-sm text-gray-600">We'll move and replace furniture</div>
                          </Label>
                          <Switch
                            id="furnitureMoving"
                            checked={formData.addOns.furnitureMoving}
                            onCheckedChange={(checked) => 
                              setFormData(prev => ({
                                ...prev,
                                addOns: { ...prev.addOns, furnitureMoving: checked }
                              }))
                            }
                          />
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="additionalNotes" className="text-gray-700">Additional Notes</Label>
                    <Textarea
                      id="additionalNotes"
                      placeholder="Any special instructions or requirements?"
                      value={formData.additionalNotes}
                      onChange={(e) => setFormData({ ...formData, additionalNotes: e.target.value })}
                      className="bg-white border-gray-200 min-h-[100px]"
                    />
                  </div>

                  {/* Estimate display - only shown when services are selected */}
                  {Object.values(formData.services).some(isSelected => isSelected) && (
                    <div className="bg-white border-t border-gray-200 sticky bottom-0 pt-4">
                      <div className="flex flex-wrap items-center gap-4 justify-between">
                        <div className="flex items-center gap-3">
                          <div className="text-2xl font-bold text-gray-900">
                            ${Math.round(estimate).toLocaleString()}
                          </div>
                          {formData.frequency !== 'one-time' && (
                            <span className="inline-flex items-center rounded-full bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
                              {formData.frequency === 'monthly' ? '15%' :
                               formData.frequency === 'quarterly' ? '10%' :
                               '5%'} Savings
                            </span>
                          )}
                        </div>
                        <div className="flex items-center gap-4 text-sm text-gray-600">
                          <span>{formData.squareFootage.toLocaleString()} sq ft</span>
                          <span>•</span>
                          <span>
                            {Object.entries(formData.services).filter(([_, isSelected]) => isSelected).length} services
                          </span>
                          <span>•</span>
                          <span>{selectedAddOns} add-ons</span>
                        </div>
                      </div>
                      <div className="mt-2 text-sm text-gray-600 flex items-center gap-2">
                        <svg 
                          xmlns="http://www.w3.org/2000/svg" 
                          className="h-4 w-4 text-gray-400" 
                          fill="none" 
                          viewBox="0 0 24 24" 
                          stroke="currentColor"
                        >
                          <path 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            strokeWidth={2} 
                            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" 
                          />
                        </svg>
                        Travel fees may apply based on location. We'll confirm during follow-up.
                      </div>
                    </div>
                  )}

                  <div className="flex justify-end gap-4 pt-4">
                    <Button
                      type="submit"
                      className="bg-brand-primary hover:bg-brand-primary/90 text-white"
                    >
                      Create Estimate
                    </Button>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </form>
          
        </div>
      </DialogContent>
    </Dialog>
  )
}
