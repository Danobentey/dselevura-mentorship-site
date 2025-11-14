import Link from 'next/link';
import { notFound } from 'next/navigation';

import { getPostBySlug, getPostParams } from '../../../lib/blog';

type BlogParams = {
  params: { slug: string };
};

export function generateStaticParams() {
  return getPostParams();
}

export function generateMetadata({ params }: BlogParams) {
  const post = getPostBySlug(params.slug);
  if (!post) return { title: 'Blog Post | Dselevura' };
  return {
    title: `${post.title} | Dselevura`,
    description: post.excerpt
  };
}

export default function BlogPostPage({ params }: BlogParams) {
  const post = getPostBySlug(params.slug);
  if (!post) return notFound();

  const formattedDate = new Intl.DateTimeFormat('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  }).format(new Date(post.date));

  return (
    <article className="container-responsive py-20">
      <div className="mx-auto max-w-3xl space-y-12">
        <Link href="/blog" className="text-xs font-semibold text-primary no-underline focus-ring">
          ← Back
        </Link>
        <header className="space-y-6">
          <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-wide text-charcoal/60">
            <time dateTime={post.date}>{formattedDate}</time>
            <span className="hidden h-1 w-1 rounded-full bg-charcoal/40 sm:inline" aria-hidden="true" />
            <span>{post.readTime}</span>
            <span className="hidden h-1 w-1 rounded-full bg-charcoal/40 sm:inline" aria-hidden="true" />
            <span>{post.author}</span>
          </div>
          <h1 className="text-4xl font-heading font-semibold text-charcoal">{post.title}</h1>
          <p className="text-lg text-charcoal/80">{post.intro}</p>
          <div className="flex flex-wrap gap-2">
            {post.tags.map(tag => (
              <span key={tag} className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium uppercase tracking-wide text-primary">
                {tag}
              </span>
            ))}
          </div>
        </header>

        <div className="space-y-12 text-charcoal/80">
          {post.sections.map(section => (
            <section key={section.heading} className="space-y-5">
              <h2 className="text-2xl font-heading font-semibold text-charcoal">{section.heading}</h2>
              {section.body.map((paragraph, index) => (
                <p key={`${section.heading}-body-${index}`}>{paragraph}</p>
              ))}

              {section.highlights && (
                <div className="rounded-2xl bg-primary/5 px-5 py-4">
                  <p className="text-xs font-semibold uppercase tracking-wide text-primary">Key takeaways</p>
                  <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-charcoal">
                    {section.highlights.map((highlight, index) => (
                      <li key={`${section.heading}-highlight-${index}`}>{highlight}</li>
                    ))}
                  </ul>
                </div>
              )}

              {section.callout && (
                <div className="rounded-2xl border border-primary/30 bg-white px-5 py-4 shadow-sm">
                  <p className="text-xs font-semibold uppercase tracking-wide text-primary">{section.callout.title}</p>
                  <p className="mt-2 text-sm text-charcoal">{section.callout.body}</p>
                </div>
              )}
            </section>
          ))}
        </div>

        <footer className="space-y-6 rounded-2xl bg-white px-6 py-8 shadow-sm">
          <p className="text-base text-charcoal/80">{post.outro}</p>
          <Link
            href="/admissions"
            className="inline-flex items-center justify-center rounded-full bg-cta px-6 py-3 text-sm font-semibold text-white transition duration-200 hover:bg-cta/90 focus-ring"
          >
            Apply to the program
          </Link>
        </footer>
      </div>
    </article>
  );
}
