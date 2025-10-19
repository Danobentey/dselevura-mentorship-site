import { notFound } from 'next/navigation';
import Link from 'next/link';

const posts = [
  { slug: 'launching-dselevura', title: 'Launching Dselevura', date: '2025-10-01', content: 'We are focused on outcomes: projects, mentorship, career pathways.' },
  { slug: 'project-based-learning', title: 'Why Project-Based Learning Wins', date: '2025-09-20', content: 'Building real things compounds faster than passive tutorials.' },
  { slug: 'mentorship-matters', title: 'Mentorship That Compounds', date: '2025-09-10', content: 'Feedback loops accelerate confidence and decision-making speed.' }
];

export function generateStaticParams() {
  return posts.map(p => ({ slug: p.slug }));
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = posts.find(p => p.slug === slug);
  if (!post) return notFound();
  return (
    <div className="container-responsive prose prose-slate py-20">
      <Link href="/blog" className="text-xs font-semibold text-primary no-underline">← Back</Link>
      <h1>{post.title}</h1>
      <p className="text-xs text-charcoal/60">{new Date(post.date).toLocaleDateString()}</p>
      <p>{post.content}</p>
      <hr />
      <p><strong>CTA:</strong> Ready to build? <Link href="/admissions">Apply to the program</Link>.</p>
    </div>
  );
}
