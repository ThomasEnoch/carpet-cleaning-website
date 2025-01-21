export function isBusinessOpen(): { isOpen: boolean; message: string } {
  const now = new Date()
  const day = now.getDay()
  const hour = now.getHours()
  const minute = now.getMinutes()
  const currentTime = hour + minute / 60

  // Sunday is closed (day 0)
  if (day === 0) {
    return { isOpen: false, message: "Closed - Opens Monday at 9:00 AM" }
  }

  // Monday to Saturday (day 1-6)
  if (day >= 1 && day <= 6) {
    if (currentTime >= 9 && currentTime < 18) {
      const closeTime = new Date()
      closeTime.setHours(18, 0, 0, 0)
      const minutesUntilClose = Math.round((closeTime.getTime() - now.getTime()) / 1000 / 60)
      return {
        isOpen: true,
        message: `Open - Closes in ${minutesUntilClose} minutes`,
      }
    } else if (currentTime < 9) {
      return { isOpen: false, message: "Closed - Opens at 9:00 AM" }
    } else {
      return {
        isOpen: false,
        message: day === 6 ? "Closed - Opens Monday at 9:00 AM" : "Closed - Opens tomorrow at 9:00 AM",
      }
    }
  }

  return { isOpen: false, message: "Closed" }
}

