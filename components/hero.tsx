"use client"

import { Button } from "@/components/ui/button"
import { Instagram } from "lucide-react"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
import * as React from "react"

const carouselItems = [
  {
    src: "/images/nfc-20keychain-02.jpeg",
    alt: "NFC Keychain - Corporate Gift",
  },
  {
    src: "/images/img-1397.jpeg",
    alt: "Puzzle Heart Keychains - Limited Edition",
  },
  {
    src: "/images/hanuman-04.jpeg",
    alt: "Hanuman Statue - Limited Edition Collectible",
  },
  {
    src: "/images/whatsapp-20image-202026-01-05-20at-2011.jpeg",
    alt: "RC Car Model Kit - Specialized Product",
  },
  {
    src: "/images/img-1409.jpeg",
    alt: "Circular Tool Organizer - Corporate Gift",
  },
  {
    src: "/images/img-1401.jpeg",
    alt: "Concentric Heart Keychain - Corporate Gift",
  },
  {
    src: "/images/img-1408.jpeg",
    alt: "Personalized Branded Keychains - Custom Gift",
  },
  {
    src: "/images/datekeeper-03.jpeg",
    alt: "Date Keeper Desk Organizer - Premium Gift",
  },
  {
    src: "/images/organizer-20with-20phone-20stand-01.jpeg",
    alt: "Phone Stand Organizer - Multi-functional Gift",
  },
]

export function Hero() {
  const plugin = React.useMemo(
    () =>
      Autoplay({
        delay: 4000,
        stopOnInteraction: false,
      }),
    [],
  )

  return (
    <section className="relative w-full">
      <div className="container mx-auto px-6 md:px-12 py-20 md:py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          <div className="space-y-10">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-balance">
                Premium 3D Printed Gifts That Leave a Lasting Impression
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed text-pretty max-w-xl">
                Elevate your corporate gifting with exclusive, customized 3D printed pieces crafted for discerning
                brands and agencies.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                asChild
                className="bg-accent hover:bg-accent/90 text-accent-foreground text-base h-12 px-8"
              >
                <a href="https://wa.me/8712701185" target="_blank" rel="noopener noreferrer">
                  Start Now
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild className="text-base h-12 px-8 bg-transparent">
                <a
                  href="https://www.instagram.com/valli3dx/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2"
                >
                  <Instagram className="h-5 w-5" />
                  View Gallery
                </a>
              </Button>
            </div>

            <div className="flex items-center gap-8 pt-4">
              <div>
                <p className="text-2xl font-semibold text-foreground">50+</p>
                <p className="text-sm text-muted-foreground">Projects Delivered</p>
              </div>
              <div className="h-12 w-px bg-border" />
              <div>
                <p className="text-2xl font-semibold text-foreground">20+</p>
                <p className="text-sm text-muted-foreground">Corporate Clients</p>
              </div>
              <div className="h-12 w-px bg-border" />
              <div>
                <p className="text-2xl font-semibold text-foreground">10+</p>
                <p className="text-sm text-muted-foreground">Limited Editions</p>
              </div>
            </div>
          </div>

          <div className="relative aspect-square lg:aspect-auto lg:h-[600px] rounded-lg overflow-hidden bg-secondary">
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              plugins={[plugin]}
              className="w-full h-full"
            >
              <CarouselContent className="h-full ml-0">
                {carouselItems.map((item, index) => (
                  <CarouselItem key={index} className="h-full pl-0">
                    <img src={item.src || "/placeholder.svg"} alt={item.alt} className="w-full h-full object-contain" />
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="absolute bottom-4 right-12 flex gap-2">
                <CarouselPrevious className="static translate-y-0 bg-white/20 hover:bg-white/40 border-none text-white h-10 w-10" />
                <CarouselNext className="static translate-y-0 bg-white/20 hover:bg-white/40 border-none text-white h-10 w-10" />
              </div>
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  )
}
