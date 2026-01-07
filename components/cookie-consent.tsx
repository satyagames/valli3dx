'use client'

import { useEffect, useState } from 'react'
import { X } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function CookieConsent() {
  const [showConsent, setShowConsent] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    
    // Check if user has already accepted cookies
    const consentAccepted = localStorage.getItem('valli3dx-cookie-consent')
    if (!consentAccepted) {
      setShowConsent(true)
    }
  }, [])

  const handleAcceptAll = () => {
    localStorage.setItem('valli3dx-cookie-consent', 'accepted-all')
    localStorage.setItem('valli3dx-analytics-consent', 'true')
    setShowConsent(false)
  }

  const handleAcceptEssential = () => {
    localStorage.setItem('valli3dx-cookie-consent', 'accepted-essential')
    localStorage.setItem('valli3dx-analytics-consent', 'false')
    setShowConsent(false)
  }

  if (!mounted || !showConsent) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-background border-t border-border/40 p-6 shadow-2xl">
      <div className="container mx-auto max-w-5xl">
        <div className="flex items-start justify-between gap-6">
          <div className="flex-1">
            <h3 className="text-lg font-semibold mb-2">🍪 Cookie Consent</h3>
            <p className="text-sm text-muted-foreground mb-4">
              We use cookies to enhance your experience, analyze site traffic, and show personalized content. 
              Essential cookies are always active. You can choose to accept analytics cookies for better insights.
            </p>
            <p className="text-xs text-muted-foreground">
              Read our <a onClick={(e) => {
                e.preventDefault()
                window.dispatchEvent(new CustomEvent('openModal', { detail: 'privacy' }))
              }} className="underline hover:text-foreground cursor-pointer">
                Privacy Policy
              </a> and <a onClick={(e) => {
                e.preventDefault()
                window.dispatchEvent(new CustomEvent('openModal', { detail: 'terms' }))
              }} className="underline hover:text-foreground cursor-pointer">
                Terms & Conditions
              </a>
            </p>
          </div>

          <div className="flex flex-col gap-2 shrink-0">
            <Button
              onClick={handleAcceptAll}
              className="bg-accent hover:bg-accent/90 text-accent-foreground whitespace-nowrap"
              size="sm"
            >
              Accept All
            </Button>
            <Button
              onClick={handleAcceptEssential}
              variant="outline"
              className="whitespace-nowrap"
              size="sm"
            >
              Essential Only
            </Button>
          </div>

          <button
            onClick={() => setShowConsent(false)}
            className="text-muted-foreground hover:text-foreground transition-colors shrink-0"
            aria-label="Close"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  )
}
