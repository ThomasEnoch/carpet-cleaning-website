import { Clock, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function BusinessHoursDetails() {
  const hours = [
    { day: "Monday", hours: "9:00 AM - 6:00 PM" },
    { day: "Tuesday", hours: "9:00 AM - 6:00 PM" },
    { day: "Wednesday", hours: "9:00 AM - 6:00 PM" },
    { day: "Thursday", hours: "9:00 AM - 6:00 PM" },
    { day: "Friday", hours: "9:00 AM - 6:00 PM" },
    { day: "Saturday", hours: "9:00 AM - 6:00 PM" },
    { day: "Sunday", hours: "Closed" },
  ]

  return (
    <div className="rounded-lg bg-white p-4 sm:p-6 shadow-lg">
      <div className="mb-4 sm:mb-6 flex items-center gap-2">
        <Clock className="h-5 w-5 text-primary flex-shrink-0" />
        <h3 className="text-base sm:text-lg font-semibold">Business Hours</h3>
      </div>
      <div className="mb-4 sm:mb-6 space-y-2">
        {hours.map((schedule) => (
          <div key={schedule.day} className="flex justify-between text-xs sm:text-sm">
            <span className="font-medium">{schedule.day}</span>
            <span className="text-gray-600">{schedule.hours}</span>
          </div>
        ))}
      </div>
      <div className="flex items-center gap-2">
        <Phone className="h-5 w-5 text-primary flex-shrink-0" />
        <Button variant="link" className="p-0 text-sm sm:text-base text-primary hover:text-primary/80" asChild>
          <a href="tel:+14058780220">(405) 878-0220</a>
        </Button>
      </div>
    </div>
  )
}
