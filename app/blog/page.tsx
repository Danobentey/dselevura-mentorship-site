import Link from 'next/link';

export const metadata = { title: 'Blog | Dselevura' };

const posts = [
  { slug: 'launching-dselevura', title: 'Launching Dselevura', excerpt: 'Our purpose: accelerate African tech talent via mentorship & real project shipping.', date: '2025-10-01' },
  { slug: 'project-based-learning', title: 'Why Project-Based Learning Wins', excerpt: 'Moving beyond passive tutorials into active portfolio creation.', date: '2025-09-20' },
  { slug: 'mentorship-matters', title: 'Mentorship That Compounds', excerpt: 'Guided feedback loops accelerate decision-making and confidence.', date: '2025-09-10' }
];

export default function BlogIndexPage() {
  return (
    <div className="container-responsive py-20">
      <h1 className="text-4xl font-bold">Blog</h1>
      <p className="mt-4 max-w-prose text-charcoal/70">Insights, program updates, and strategies for building a tech career in Africa.</p>
      <div className="mt-10 space-y-8">
        {posts.map(p => (
          <article key={p.slug} className="border-b border-slate-200 pb-6 last:border-none">
            <p className="text-xs font-semibold uppercase tracking-wide text-primary">{new Date(p.date).toLocaleDateString()}</p>
            <h2 className="mt-2 text-xl font-semibold"><Link href={`/blog/${p.slug}`} className="hover:text-primary focus-ring">{p.title}</Link></h2>
            <p className="mt-2 text-sm text-charcoal/70">{p.excerpt}</p>
            <Link href={`/blog/${p.slug}`} className="mt-3 inline-block text-xs font-semibold text-primary hover:underline">Read more →</Link>
          </article>
        ))}
      </div>
    </div>
  );
}
