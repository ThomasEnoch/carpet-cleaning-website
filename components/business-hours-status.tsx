"use client"

import { useEffect, useState } from "react"
import { Clock } from "lucide-react"
import { isBusinessOpen } from "@/utils/business-hours"

export default function BusinessHoursStatus() {
  const [status, setStatus] = useState(isBusinessOpen())

  useEffect(() => {
    const timer = setInterval(() => {
      setStatus(isBusinessOpen())
    }, 60000) // Update every minute

    return () => clearInterval(timer)
  }, [])

  return (
    <div
      className={`fixed bottom-4 right-4 z-50 rounded-full shadow-lg transition-all duration-300 ${
        status.isOpen ? "bg-green-500" : "bg-gray-600"
      }`}
    >
      <div className="flex items-center gap-2 px-4 py-2">
        <Clock className="h-4 w-4 text-white" />
        <span className="text-sm font-medium text-white">{status.message}</span>
      </div>
    </div>
  )
}

