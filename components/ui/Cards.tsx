import Image from 'next/image';
import Link from 'next/link';
import { ReactNode } from 'react';

export function StatCard({ title, value, children }: { title: string; value?: string; children?: ReactNode }) {
  return (
    <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md">
      <h3 className="text-sm font-semibold uppercase tracking-wide text-primary">{title}</h3>
      {value && <p className="mt-2 text-2xl font-bold text-charcoal">{value}</p>}
      {children && <div className="mt-3 text-sm text-charcoal/80">{children}</div>}
    </div>
  );
}

export function TestimonialCard({ name, role, quote, image }: { name: string; role: string; quote: string; image?: string }) {
  return (
    <figure className="flex flex-col rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
      <blockquote className="text-sm text-charcoal/80">“{quote}”</blockquote>
      <figcaption className="mt-4 flex items-center gap-3">
        <div className="relative h-10 w-10 overflow-hidden rounded-full bg-slate-200">
          {image && <Image src={image} alt={name} fill className="object-cover" />}
        </div>
        <div>
          <p className="text-sm font-semibold text-charcoal">{name}</p>
            <p className="text-xs text-charcoal/60">{role}</p>
        </div>
      </figcaption>
    </figure>
  );
}

export function MentorCard({ name, expertise, image, linkedin }: { name: string; expertise: string; image?: string; linkedin?: string }) {
  const src = image || '/images/mentor-placeholder.svg';
  return (
    <div className="group relative flex flex-col overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm">
      <div className="relative h-40 w-full bg-slate-100">
        <Image src={src} alt={image ? name : `${name} placeholder avatar`} fill className="object-cover transition duration-300 group-hover:scale-105" />
      </div>
      <div className="flex flex-1 flex-col p-4">
        <h3 className="font-semibold text-charcoal">{name}</h3>
        <p className="mt-1 text-sm text-charcoal/70">{expertise}</p>
        {linkedin && <Link href={linkedin} target="_blank" rel="noreferrer" className="mt-3 inline-flex text-xs font-semibold text-primary hover:underline">LinkedIn →</Link>}
      </div>
    </div>
  );
}
