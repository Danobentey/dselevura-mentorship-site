'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/programs', label: 'Programs' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/community', label: 'Community' },
  { href: '/mentors', label: 'Mentors' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' }
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-200 bg-offwhite/80 backdrop-blur">
      <nav className="container-responsive flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center rounded focus-ring">
          <Image src="/images/dselevura-logo.png" alt="Dselevura Mentorship Program" width={40} height={40} priority />
          <span className="sr-only">Dselevura Mentorship Program</span>
        </Link>
        <button aria-label="Toggle menu" onClick={() => setOpen(o => !o)} className="md:hidden focus-ring rounded p-2">
          <span className="mb-1 block h-0.5 w-6 bg-charcoal" />
          <span className="mb-1 block h-0.5 w-6 bg-charcoal" />
          <span className="block h-0.5 w-6 bg-charcoal" />
        </button>
        <ul className="hidden gap-6 md:flex">
          {navItems.map(item => (
            <li key={item.href}>
              <Link href={item.href} className="text-sm font-medium text-charcoal/80 hover:text-charcoal focus-ring rounded px-2 py-1">
                {item.label}
              </Link>
            </li>
          ))}
          <li>
            <Link href="/admissions" className="rounded bg-cta px-4 py-2 text-sm font-semibold text-white shadow hover:bg-cta/90 focus-ring">Apply</Link>
          </li>
        </ul>
      </nav>
      {open && (
        <div className="md:hidden">
          <ul className="space-y-2 border-t border-slate-200 bg-offwhite p-4">
            {navItems.map(item => (
              <li key={item.href}>
                <Link onClick={() => setOpen(false)} href={item.href} className="block rounded px-2 py-2 text-sm font-medium text-charcoal/80 hover:bg-primary/5 hover:text-charcoal focus-ring">
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link onClick={() => setOpen(false)} href="/admissions" className="block rounded bg-cta px-4 py-2 text-sm font-semibold text-white shadow hover:bg-cta/90 focus-ring">Apply Now</Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
