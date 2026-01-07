import { Button } from "@/components/ui/button"
import { Instagram, MessageCircle } from "lucide-react"

export function CTASection() {
  return (
    <>
      {/* Process Section */}
      <section className="w-full py-20 md:py-32">
        <div className="container mx-auto px-6 md:px-12">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-balance">From Concept to Creation</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Our streamlined process ensures your vision becomes a premium reality
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12 lg:gap-20">
            <div className="text-center space-y-3">
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                <span className="text-xl font-bold text-accent">1</span>
              </div>
              <h3 className="text-lg font-semibold text-foreground">Connect</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Reach out via WhatsApp or Instagram to discuss your project requirements and vision
              </p>
            </div>

            <div className="text-center space-y-3">
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                <span className="text-xl font-bold text-accent">2</span>
              </div>
              <h3 className="text-lg font-semibold text-foreground">Design</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                We create custom 3D designs tailored to your specifications and brand identity
              </p>
            </div>

            <div className="text-center space-y-3">
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                <span className="text-xl font-bold text-accent">3</span>
              </div>
              <h3 className="text-lg font-semibold text-foreground">Deliver</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Receive your premium 3D printed pieces with exceptional packaging and finishing
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Instagram Gallery CTA */}
      <section className="w-full py-24 bg-accent text-accent-foreground">
        <div className="px-6 md:px-12 lg:px-20">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <Instagram className="h-12 w-12 mx-auto" />
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-balance">
              Explore Our Portfolio on Instagram
            </h2>
            <p className="text-lg leading-relaxed text-accent-foreground/90 text-pretty">
              Get inspired by our latest creations, behind-the-scenes process, and client success stories. Follow us for
              exclusive limited edition drops and design insights.
            </p>
            <Button
              size="lg"
              variant="secondary"
              asChild
              className="bg-accent-foreground text-accent hover:bg-accent-foreground/90 h-12 px-8"
            >
              <a
                href="https://www.instagram.com/valli3dx/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2"
              >
                <Instagram className="h-5 w-5" />
                Follow @Valli3dx
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* WhatsApp CTA */}
      <section className="w-full py-20 md:py-32">
        <div className="px-6 md:px-12 lg:px-20">
          <div className="max-w-5xl mx-auto bg-card border border-border/60 rounded-xl p-8 md:p-16 lg:p-20 text-center space-y-8">
            <MessageCircle className="h-12 w-12 mx-auto text-accent" />
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-balance">
              Ready to Start Your Custom Project?
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed text-pretty max-w-2xl mx-auto">
              Connect with us on WhatsApp for instant consultation. Share your ideas, get expert advice, and receive a
              personalized quote within 24 hours.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button size="lg" asChild className="bg-accent hover:bg-accent/90 text-accent-foreground h-12 px-8">
                <a
                  href="https://wa.me/918712701185"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2"
                >
                  <MessageCircle className="h-5 w-5" />
                  Chat on WhatsApp
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild className="h-12 px-8 bg-transparent">
                <a href="mailto:valli3dx@gmail.com" className="inline-flex items-center gap-2">
                  Send Email Inquiry
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
