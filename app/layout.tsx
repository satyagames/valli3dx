import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { CookieConsent } from '@/components/cookie-consent'
import { generateSchemaMarkup } from '@/lib/schema'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Premium 3D Printed Gifts | Corporate & Event Gifting | Valli 3DX',
  description: 'Exclusive 3D printed gifts for corporate gifting, limited editions, and event agencies. Premium customized solutions with 50+ projects delivered. WhatsApp +91 8712701185.',
  keywords: ['3D printed gifts', 'corporate gifting', 'limited editions', 'event gifts', '3D printing', 'custom gifts', 'branded gifts', 'corporate gifts India'],
  authors: [{ name: 'Valli 3DX', url: 'https://valli3dx.vercel.app' }],
  creator: 'Valli 3DX',
  publisher: 'Valli 3DX',
  robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
  viewport: 'width=device-width, initial-scale=1, maximum-scale=5',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://valli3dx.vercel.app',
    siteName: 'Valli 3DX',
    title: 'Premium 3D Printed Gifts | Valli 3DX',
    description: 'Exclusive 3D printed gifts for corporate gifting, limited editions, and event agencies.',
    images: [
      {
        url: 'https://valli3dx.vercel.app/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Valli 3DX - Premium 3D Printed Gifts',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Premium 3D Printed Gifts | Valli 3DX',
    description: 'Exclusive 3D printed gifts for corporate gifting, limited editions, and event agencies.',
    images: ['https://valli3dx.vercel.app/og-image.jpg'],
    creator: '@valli3dx',
  },
  alternates: {
    canonical: 'https://valli3dx.vercel.app',
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
  verification: {
    google: 'your-google-verification-code-here',
  },
  manifest: '/manifest.json',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const schemaMarkup = generateSchemaMarkup()

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: schemaMarkup }}
        />
        <meta name="theme-color" content="#ffffff" media="(prefers-color-scheme: light)" />
        <meta name="theme-color" content="#000000" media="(prefers-color-scheme: dark)" />
      </head>
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
        <CookieConsent />
      </body>
    </html>
  )
}
