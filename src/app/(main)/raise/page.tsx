"use client"

import { CTASection } from "@/components/ui/hero-dithering-card"
import { HowItWorks } from "@/components/ui/how-it-works"

export default function RaisePage() {
  return (
    <main className="min-h-screen bg-background">
      <div className="flex items-center justify-center">
        <CTASection />
      </div>
      <HowItWorks />
    </main>
  )
}
