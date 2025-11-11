import './globals.css';
import type { Metadata } from 'next';
import { ReactNode } from 'react';
import { Montserrat, Inter } from 'next/font/google';
import { Providers } from '../components/Providers';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { courseJsonLd, organizationJsonLd } from '../lib/seo';

const montserrat = Montserrat({ subsets: ['latin'], variable: '--font-montserrat', display: 'swap' });
const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' });

export const metadata: Metadata = {
  title: 'Dselevura Academy - African Tech Mentorship',
  description: 'Dselevura Academy offers four specialized tracks: Software Development, UI/UX Design, Data Analytics, and Digital Marketing. Build skills, ship real projects, and launch your tech career in Africa.',
  openGraph: {
    title: 'Dselevura Academy - African Tech Mentorship',
    description: 'Four specialized tracks: Software Development, UI/UX Design, Data Analytics, Digital Marketing. Build the skills. Ship real projects. Land the job.',
    url: 'https://www.dselevura.example',
    siteName: 'Dselevura Academy',
    images: [
      { url: '/images/og-default.svg', width: 1200, height: 630, alt: 'Dselevura Academy' }
    ],
    locale: 'en_US',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dselevura Academy - African Tech Mentorship',
    description: 'Four specialized tracks: Software Development, UI/UX, Data Analytics, Digital Marketing.',
  images: ['/images/og-default.svg']
  },
  icons: { icon: '/favicon.ico' }
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${montserrat.variable} ${inter.variable}`}>
      <body>
        <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-50 focus:rounded bg-charcoal px-4 py-2 text-xs font-semibold text-white">Skip to content</a>
        <Providers>
          <Navbar />
          <main id="main" className="min-h-screen pt-16">{children}</main>
          <Footer />
        </Providers>
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify([organizationJsonLd(), courseJsonLd()]) }}
        />
      </body>
    </html>
  );
}
