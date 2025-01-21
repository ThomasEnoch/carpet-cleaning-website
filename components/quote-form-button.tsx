"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import EstimateWizard from "./estimate-wizard"
import { theme } from "@/lib/constants"
import { cn } from "@/lib/utils"

interface QuoteFormButtonProps {
  variant?: "default" | "secondary"
}

export default function QuoteFormButton({ variant = "default" }: QuoteFormButtonProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <Button
        onClick={() => setIsOpen(true)}
        className={cn(
          "px-6 py-3 text-lg shadow-lg transition-all",
          variant === "default" 
            ? "bg-brand-primary hover:bg-brand-primary/90 text-white"
            : "bg-white hover:bg-gray-50 text-brand-primary"
        )}
      >
        Get Your Free Quote
      </Button>

      <EstimateWizard 
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      />
    </>
  )
}
