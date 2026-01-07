import Link from "next/link"
import { Instagram } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-6 md:px-12">
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-xl font-semibold tracking-tight text-foreground">Valli 3DX</span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          <Link
            href="#corporate"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Corporate Gifting
          </Link>
          <Link
            href="#limited"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Limited Editions
          </Link>
          <Link
            href="#events"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Event Agencies
          </Link>
        </nav>

        <div className="flex items-center gap-3">
          <Button variant="ghost" size="icon" asChild className="hidden sm:inline-flex">
            <a
              href="https://instagram.com/valli3dx/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow us on Instagram"
            >
              <Instagram className="h-5 w-5" />
            </a>
          </Button>
          <Button asChild size="sm" className="bg-accent hover:bg-accent/90 text-accent-foreground">
            <a href="https://wa.me/918712701185" target="_blank" rel="noopener noreferrer">
              Get in Touch
            </a>
          </Button>
        </div>
      </div>
    </header>
  )
}
