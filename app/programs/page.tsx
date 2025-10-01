export const metadata = { title: 'Programs | Dselevura' };

export default function ProgramsPage() {
  return (
    <div className="container-responsive py-20">
      <h1 className="text-4xl font-bold">Programs</h1>
      <p className="mt-4 max-w-prose text-charcoal/70">Two tracks designed to meet you where you are and push you toward professional outcomes.</p>

      <div className="mt-12 grid gap-12 lg:grid-cols-2">
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Training Bootcamp (Beginner)</h2>
          <p className="text-sm text-charcoal/80">Foundational skills + 2 guided projects + certificate of completion.</p>
          <ul className="space-y-2 text-sm text-charcoal/80 list-disc list-inside">
            <li>Core web & version control</li>
            <li>Project 1: Static Marketing Site</li>
            <li>Project 2: Interactive App MVP</li>
            <li>Foundations assessments & feedback</li>
          </ul>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-primary">Timeline</p>
            <ol className="mt-2 space-y-2 border-l border-slate-300 pl-4 text-xs">
              <li><strong>Weeks 1–2:</strong> Fundamentals + tooling</li>
              <li><strong>Weeks 3–4:</strong> Project 1 build & review</li>
              <li><strong>Weeks 5–6:</strong> Project 2 build & iteration</li>
              <li><strong>Week 7:</strong> Portfolio & certificate</li>
            </ol>
          </div>
        </section>
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Mentorship Bootcamp (Advanced)</h2>
          <p className="text-sm text-charcoal/80">Advanced delivery + 3 portfolio projects + internship pathway.</p>
          <ul className="space-y-2 text-sm text-charcoal/80 list-disc list-inside">
            <li>Architecture & code quality</li>
            <li>Project 1: Real-world feature build</li>
            <li>Project 2: Cross-functional group project</li>
            <li>Project 3: Internship challenge simulation</li>
            <li>Career readiness workshops</li>
          </ul>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-primary">Timeline</p>
            <ol className="mt-2 space-y-2 border-l border-slate-300 pl-4 text-xs">
              <li><strong>Weeks 1–2:</strong> Advanced codebase immersion</li>
              <li><strong>Weeks 3–5:</strong> Feature & group sprint</li>
              <li><strong>Weeks 6–8:</strong> Internship simulation + feedback</li>
              <li><strong>Week 9:</strong> Career & placement prep</li>
            </ol>
          </div>
        </section>
      </div>
      <div className="mt-16">
        <a href="/admissions" className="rounded bg-cta px-6 py-3 text-sm font-semibold text-white shadow hover:bg-cta/90 focus-ring">Apply Now</a>
      </div>
    </div>
  );
}
