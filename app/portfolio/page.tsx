export const metadata = { title: 'Portfolio & Outcomes | Dselevura' };

export default function PortfolioPage() {
  return (
    <div className="container-responsive py-20">
      <h1 className="text-4xl font-bold">Portfolio & Outcomes</h1>
      <p className="mt-4 max-w-prose text-charcoal/70">Sample of project categories and alumni success indicators. Replace placeholders with real student work and stories.</p>
      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="relative aspect-video overflow-hidden rounded-lg border border-slate-200 bg-slate-100">
            <img src="/images/project-placeholder.svg" alt={`Placeholder project ${i + 1}`} className="h-full w-full object-cover" loading="lazy" />
          </div>
        ))}
      </div>
      <div className="mt-16 grid gap-6 md:grid-cols-3">
        {[
          { name: 'Ada', role: 'Fullstack Engineer', story: 'Joined as a self-taught learner; shipped 3 projects and landed a fintech internship.' },
          { name: 'Jon', role: 'Frontend Developer', story: 'Transitioned from non-tech background with structured sprints + mentor feedback.' },
          { name: 'Lina', role: 'Product Designer', story: 'Built UX case studies & prototypes leading to her first design role.' }
        ].map(a => (
          <div key={a.name} className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-sm font-semibold text-charcoal">{a.name}</p>
            <p className="text-xs text-charcoal/60">{a.role}</p>
            <p className="mt-3 text-sm text-charcoal/80">{a.story}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
