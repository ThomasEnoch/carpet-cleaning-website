import { Button } from "@/components/ui/button"
import { QuoteFormButton } from "@/components/quote-form-button"

export default function Hero() {
  return (
    <div className="relative bg-navy-900 py-24">
      <div className="absolute inset-0 bg-gradient-to-r from-navy-900/90 to-navy-900/70" />
      <div className="container mx-auto px-4 relative">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Do you want quality carpet and tile cleaning for your business? Then you've come to the right place!
          </h1>
          <p className="text-xl text-blue-100 mb-8">
            Top-tier cleaning services tailored to the unique needs of businesses in the hospitality sector
          </p>
          <QuoteFormButton className="bg-blue-500 hover:bg-blue-600 text-white" size="lg" />
        </div>
      </div>
    </div>
  )
}
