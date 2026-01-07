export function generateSchemaMarkup() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Valli 3DX',
    description: 'Premium 3D printed gifts for corporate gifting, limited editions, and event agencies',
    url: 'https://valli3dx.vercel.app',
    image: 'https://valli3dx.vercel.app/og-image.jpg',
    telephone: '+91-8712701185',
    email: 'valli3dx@gmail.com',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'IN',
      addressRegion: 'Telangana',
      addressLocality: 'Hyderabad',
    },
    sameAs: [
      'https://www.instagram.com/valli3dx/',
      'https://wa.me/918712701185',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Customer Service',
      telephone: '+91-8712701185',
      email: 'valli3dx@gmail.com',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5.0',
      reviewCount: '20',
    },
    offers: [
      {
        '@type': 'Offer',
        name: 'Corporate Gifting',
        description: 'Custom 3D printed gifts for corporate clients',
        image: 'https://valli3dx.vercel.app/images/corporate-gift.jpg',
        priceCurrency: 'INR',
        availability: 'https://schema.org/InStock',
      },
      {
        '@type': 'Offer',
        name: 'Limited Editions',
        description: 'Exclusive limited edition 3D printed collectibles',
        image: 'https://valli3dx.vercel.app/images/limited-edition.jpg',
        priceCurrency: 'INR',
        availability: 'https://schema.org/InStock',
      },
      {
        '@type': 'Offer',
        name: 'Event Agency Gifts',
        description: 'Custom 3D printed gifts for event agencies',
        image: 'https://valli3dx.vercel.app/images/event-gift.jpg',
        priceCurrency: 'INR',
        availability: 'https://schema.org/InStock',
      },
    ],
  }

  return JSON.stringify(schema)
}
