import type { Metadata } from 'next';

const siteName = 'Dselevura Mentorship Program';
const baseUrl = 'https://www.dselevura.example';

export function defaultMetadata(overrides: Partial<Metadata> = {}): Metadata {
  return {
    metadataBase: new URL(baseUrl),
    title: {
      default: siteName,
      template: `%s | ${siteName}`
    },
    description: 'African tech mentorship & bootcamps: build skills, ship real projects, land roles.',
    alternates: { canonical: baseUrl },
    openGraph: {
      title: siteName,
      description: 'Build the skills. Ship real projects. Land the job.',
      siteName,
      url: baseUrl,
      type: 'website'
    },
    twitter: {
      card: 'summary_large_image',
      title: siteName,
      description: 'Build the skills. Ship real projects. Land the job.'
    },
    ...overrides
  };
}

export function courseJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Course',
    name: 'Dselevura Mentorship Bootcamps',
    description: 'Project-based African tech mentorship programs: beginner training & advanced mentorship.',
    provider: {
      '@type': 'Organization',
      name: siteName,
      sameAs: baseUrl
    }
  };
}

export function organizationJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: siteName,
    url: baseUrl,
    logo: `${baseUrl}/favicon.ico`,
    sameAs: [
      'https://linkedin.com',
      'https://twitter.com'
    ]
  };
}
