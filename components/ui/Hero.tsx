import Link from 'next/link';
import Image from 'next/image';

interface HeroProps {
  title: string;
  subtitle?: string;
  ctaLabel?: string;
  ctaHref?: string;
}

export default function Hero({ title, subtitle, ctaLabel = 'Apply Now', ctaHref = '/admissions' }: HeroProps) {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="container-responsive grid gap-10 py-24 md:grid-cols-2">
        <div className="flex flex-col justify-center">
          <h1 className="text-4xl font-bold leading-tight md:text-5xl xl:text-6xl">
            {title}
          </h1>
          {subtitle && <p className="mt-6 max-w-prose text-base text-charcoal/80 md:text-lg">{subtitle}</p>}
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href={ctaHref} className="rounded bg-cta px-6 py-3 text-sm font-semibold text-white shadow hover:bg-cta/90 focus-ring">{ctaLabel}</Link>
            <Link href="/programs" className="rounded border border-primary px-6 py-3 text-sm font-semibold text-primary hover:bg-primary/5 focus-ring">Explore Programs</Link>
          </div>
        </div>
        <div className="relative aspect-video w-full md:aspect-auto md:h-full">
          <Image src="/images/hero.svg" alt="Group of people learning and collaborating in tech education" fill className="object-cover rounded-lg shadow" />
        </div>
      </div>
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br from-primary/5 via-accent/5 to-cta/5" />
    </section>
  );
}
