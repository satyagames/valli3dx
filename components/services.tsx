import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Briefcase, Sparkles, Users } from "lucide-react"

const services = [
  {
    id: "corporate",
    icon: Briefcase,
    title: "Corporate Gifting",
    description:
      "Impress clients and reward teams with bespoke 3D printed gifts. From branded desk accessories to executive trophies, each piece reflects your company's excellence.",
    features: ["Custom branding", "Bulk orders", "Premium packaging", "Fast turnaround"],
    image: "/Premium_Desk_pen_holder.png",
  },
  {
    id: "limited",
    icon: Sparkles,
    title: "Limited Editions",
    description:
      "Exclusive collectible pieces designed in collaboration with artists and designers. Own a piece of functional art that stands out in any collection.",
    features: ["Artist collaborations", "Numbered editions", "Certificate of authenticity", "Unique designs"],
    image: "/miniature_architecture.png",
  },
  {
    id: "events",
    icon: Users,
    title: "Event Agencies",
    description:
      "Create unforgettable experiences with custom event merchandise and installations. From product launches to gala gifts, we bring your vision to life.",
    features: ["Event installations", "Branded merchandise", "On-demand production", "Design consultation"],
    image: "/Custom_name_keychains.png",
  },
]

export function Services() {
  return (
    <section className="w-full py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-balance">
            Crafted for Every Occasion
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Whether it's corporate excellence, collectible art, or memorable events, we deliver premium 3D printed
            solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 xl:gap-12">
          {services.map((service) => {
            const Icon = service.icon
            return (
              <Card
                key={service.id}
                id={service.id}
                className="group hover:shadow-lg transition-shadow border-border/60"
              >
                <CardContent className="p-0">
                  <div className="aspect-[3/2] overflow-hidden rounded-t-lg bg-secondary">
                    <img
                      src={service.image || "/placeholder.svg"}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6 space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-accent/10">
                        <Icon className="h-5 w-5 text-accent" />
                      </div>
                      <h3 className="text-xl font-semibold text-foreground">{service.title}</h3>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
                    <ul className="space-y-2">
                      {service.features.map((feature, index) => (
                        <li key={index} className="text-sm text-muted-foreground flex items-center gap-2">
                          <div className="h-1.5 w-1.5 rounded-full bg-accent" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Button variant="outline" className="w-full mt-4 bg-transparent" asChild>
                      <a href="https://wa.me/918712701185" target="_blank" rel="noopener noreferrer">
                        Inquire Now
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
