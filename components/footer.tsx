"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"

export function Footer() {
  const [openModal, setOpenModal] = useState<string | null>(null)

  useEffect(() => {
    // Listen for cookie consent modal triggers
    const handleOpenModal = (event: CustomEvent<string>) => {
      setOpenModal(event.detail)
    }

    window.addEventListener('openModal', handleOpenModal as EventListener)
    return () => window.removeEventListener('openModal', handleOpenModal as EventListener)
  }, [])

  const supportPages = {
    shipping: {
      title: "Shipping & Exchange",
      sections: [
        {
          heading: "Shipping",
          points: [
            "Products are shipped across India using reliable courier partners",
            "Since items are made to order, production time is required before dispatch",
            "Estimated delivery timelines will be shared at the time of order confirmation",
          ],
        },
        {
          heading: "Exchanges",
          points: [
            "Exchanges are applicable only for defective or damaged items",
            "No exchanges are offered for design approval errors, color or size variations, or change of mind",
            "Any issue must be reported within the defined return window from delivery date",
          ],
        },
      ],
    },
    cancellation: {
      title: "Cancellation & Refund",
      sections: [
        {
          heading: "Cancellations",
          points: [
            "Orders cannot be cancelled once production has started",
            "Cancellation requests before production may be considered on a case-by-case basis",
          ],
        },
        {
          heading: "Refunds & Replacements",
          points: [
            "Refunds or replacements are only applicable if the product is defective, damaged during transit, or significantly differs from the approved design",
            "Customers must notify us within the specified return window after delivery with clear images and details",
            "Approved refunds will be processed to the original payment method within 7–10 working days",
          ],
        },
      ],
    },
    privacy: {
      title: "Privacy Policy",
      sections: [
        {
          heading: "Information We Collect",
          points: [
            "Name, email address, and phone number",
            "Shipping and billing address",
            "Order and payment details (processed securely via payment gateway)",
          ],
        },
        {
          heading: "Use of Information",
          points: [
            "Process and fulfill orders",
            "Communicate order status and support queries",
            "Improve our services and customer experience",
          ],
        },
        {
          heading: "Data Protection",
          points: [
            "We do not sell or share personal information with third parties, except where required for payment processing or legal compliance",
            "Payment information is handled directly by secure payment gateways and is not stored on our servers",
          ],
        },
      ],
    },
    terms: {
      title: "Terms & Conditions",
      sections: [
        {
          heading: "Business Overview",
          points: [
            "We specialize in corporate gifting solutions, offering customized 3D-printed products manufactured on a print-on-demand basis",
          ],
        },
        {
          heading: "Orders & Customization",
          points: [
            "All products are made to order based on customer-approved designs, quantities, and specifications",
            "Once an order is confirmed and moved to production, it cannot be modified or cancelled unless explicitly agreed in writing",
            "Customers are responsible for approving final designs, spellings, logos, and quantities before confirmation",
          ],
        },
        {
          heading: "Pricing & Payments",
          points: [
            "All prices are displayed in Indian Rupees (INR)",
            "Payments are processed securely through authorized payment gateways",
            "We reserve the right to cancel or refuse any order at our discretion",
          ],
        },
        {
          heading: "Intellectual Property",
          points: [
            "All designs, content, and materials displayed on the website are the intellectual property of the business unless provided by the customer",
            "Customer-provided logos and artwork remain the property of their respective owners",
          ],
        },
        {
          heading: "Governing Law",
          points: [
            "These Terms shall be governed by the laws of India, and courts of Hyderabad, Telangana shall have exclusive jurisdiction",
          ],
        },
      ],
    },
  }

  return (
    <footer className="border-t border-border/40 bg-muted/30">
      <div className="container mx-auto px-6 md:px-12 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-24">
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-foreground">Valli 3DX</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Premium 3D printed gifts for corporate and event excellence.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4">Services</h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="#corporate"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Corporate Gifting
                </Link>
              </li>
              <li>
                <Link href="#limited" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Limited Editions
                </Link>
              </li>
              <li>
                <Link href="#events" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Event Agencies
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4">Contact</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://wa.me/918712701185"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  WhatsApp
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/valli3dx/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="mailto:valli3dx@gmail.com"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Email
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4">Support</h4>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => setOpenModal("shipping")}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors text-left"
                >
                  Shipping & Exchange
                </button>
              </li>
              <li>
                <button
                  onClick={() => setOpenModal("cancellation")}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors text-left"
                >
                  Cancellation & Refund
                </button>
              </li>
              <li>
                <button
                  onClick={() => setOpenModal("privacy")}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors text-left"
                >
                  Privacy Policy
                </button>
              </li>
              <li>
                <button
                  onClick={() => setOpenModal("terms")}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors text-left"
                >
                  Terms & Conditions
                </button>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border/40">
          <p className="text-sm text-muted-foreground text-center">© 2026 Valli 3DX. All rights reserved.</p>
        </div>
      </div>

      {openModal && (
        <Dialog open={openModal !== null} onOpenChange={() => setOpenModal(null)}>
          <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle className="text-xl">
                {supportPages[openModal as keyof typeof supportPages]?.title}
              </DialogTitle>
            </DialogHeader>

            <div className="space-y-6">
              {supportPages[openModal as keyof typeof supportPages]?.sections.map((section, idx) => (
                <div key={idx} className="space-y-3">
                  <h3 className="text-sm font-semibold text-foreground">{section.heading}</h3>
                  <ul className="space-y-2">
                    {section.points.map((point, pointIdx) => (
                      <li key={pointIdx} className="text-sm text-muted-foreground leading-relaxed flex gap-3">
                        <span className="text-primary flex-shrink-0 mt-1">•</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </DialogContent>
        </Dialog>
      )}
    </footer>
  )
}
