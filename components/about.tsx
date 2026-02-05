import { Sparkles, Heart, Award, Zap } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const values = [
  {
    icon: Sparkles,
    title: "Emotion & Creativity",
    description: "Every print carries thoughtful design and artistic vision",
  },
  {
    icon: Award,
    title: "Premium Quality",
    description: "Precision printing with attention to every detail",
  },
  {
    icon: Heart,
    title: "Personal Touch",
    description: "Customization that reflects your unique vision",
  },
  {
    icon: Zap,
    title: "A Little Magic",
    description: "We add that special spark—one print at a time",
  },
]

export function About() {
  return (
    <section className="w-full py-20 md:py-32 bg-background">
      <div className="container mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <div className="inline-block">
            <span className="text-sm font-semibold text-primary/80 tracking-widest uppercase">About Us</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-balance">
            Transforming Ideas into Meaningful 3D Experiences
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
            We are a young team passionate about changing how people interact with the world through 3D printing.
          </p>
        </div>

        {/* Story Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-foreground">Our Story</h3>
              <p className="text-muted-foreground leading-relaxed">
                We create custom 3D-printed products for corporate gifting, parties, and school 
                communities—designed to spark joy and leave a lasting impression.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                As part of the <span className="font-semibold text-foreground">PlanX</span> family, we combine innovation with precision. 
                What started as a passion has evolved into a mission: to prove that every object we create can tell a story and strengthen connections.
              </p>
            </div>

            <div className="pt-4 border-t border-border/40">
              <h4 className="font-semibold text-foreground mb-3">Our Mission</h4>
              <p className="text-muted-foreground italic">
                "Turn ideas into meaningful experiences. We believe thoughtful design and personalization can transform 
                ordinary moments into memorable ones."
              </p>
            </div>
          </div>

          {/* Visual Element - Stats or Quote */}
          <div className="relative">
            <div className="bg-muted/50 rounded-2xl p-12 border border-border/40 space-y-6">
              <div className="text-center space-y-3">
                <p className="text-4xl font-bold text-primary/90">"</p>
                <p className="text-2xl font-bold text-foreground leading-tight">
                  We don't just print objects.
                </p>
                <p className="text-xl text-foreground">
                  We create lasting impressions.
                </p>
                <p className="text-4xl font-bold text-primary/90 pt-2">"</p>
              </div>
            </div>
          </div>
        </div>

        {/* What Sets Us Apart */}
        <div className="space-y-12">
          <div className="text-center space-y-2">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground">What Sets Us Apart</h3>
            <p className="text-muted-foreground">Four pillars that define our approach</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <Card key={index} className="border-border/40 hover:border-primary/40 transition-all duration-300">
                  <CardContent className="pt-8 space-y-4">
                    <div className="inline-flex rounded-lg bg-primary/10 p-3">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-semibold text-foreground leading-tight">{value.title}</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">{value.description}</p>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>

        {/* CTA Insight */}
        <div className="mt-20 text-center">
          <div className="inline-block bg-primary/5 border border-primary/20 rounded-lg px-6 py-4 max-w-2xl">
            <p className="text-foreground font-medium">
              Every project we undertake is an opportunity to exceed expectations and create something truly special.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
