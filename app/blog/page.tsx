import Link from 'next/link';

import { getAllPosts } from '../../lib/blog';

export const metadata = {
  title: 'Blog | Dselevura',
  description:
    'Stories and insights from the Dselevura mentorship team on building African tech careers through projects, mentorship, and community.'
};

export default function BlogIndexPage() {
  const posts = getAllPosts();
  const dateFormatter = new Intl.DateTimeFormat('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  });

  return (
    <div className="container-responsive py-20">
      <h1 className="text-4xl font-bold">Blog</h1>
      <p className="mt-4 max-w-prose text-charcoal/70">Insights, program updates, and strategies for building a tech career in Africa.</p>
      <div className="mt-12 grid gap-8 md:grid-cols-2">
        {posts.map(post => (
          <article
            key={post.slug}
            className="flex h-full flex-col justify-between rounded-2xl border border-slate-200 bg-white/80 p-6 shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-lg"
          >
            <div className="space-y-4">
              <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-wide text-charcoal/60">
                <span>{dateFormatter.format(new Date(post.date))}</span>
                <span className="hidden h-1 w-1 rounded-full bg-charcoal/40 sm:inline" aria-hidden="true" />
                <span>{post.readTime}</span>
              </div>
              <h2 className="text-xl font-semibold">
                <Link href={`/blog/${post.slug}`} className="hover:text-primary focus-ring">
                  {post.title}
                </Link>
              </h2>
              <p className="text-xs font-semibold uppercase tracking-wide text-primary">{post.author}</p>
              <p className="text-sm text-charcoal/70">{post.excerpt}</p>
            </div>
            <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
              <div className="flex flex-wrap gap-2">
                {post.tags.map(tag => (
                  <span key={tag} className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                    {tag}
                  </span>
                ))}
              </div>
              <Link
                href={`/blog/${post.slug}`}
                className="text-xs font-semibold text-primary hover:underline focus-ring"
              >
                Read story →
              </Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
