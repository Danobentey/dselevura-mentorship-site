export const metadata = { title: 'Programs | Dselevura' };

const tracks = [
  {
    name: 'Training Bootcamp',
    level: 'Beginner / Intermediate',
    overview:
      'A 3-month foundation program for beginners and intermediates. You will build core tech skills through live weekend classes, weekly practice, and two guided projects. Top performers earn free entry into the Mentorship Bootcamp.',
    learn: [
      'UI/UX Design - user research, wireframing, and interaction design.',
      'Web Development - HTML, CSS, JavaScript, and Git version control.',
      'Data Analytics - Excel, SQL, and introductory data visualization with Tableau or Power BI.'
    ],
    projects: [
      'Project 1: Build and launch a static marketing site.',
      'Project 2: Develop an interactive app MVP.',
      'Continuous assessments and feedback ensure you are mastering each concept.',
      'Earn a certificate of completion and prepare a portfolio piece for prospective employers.'
    ],
    schedule: 'Weekend classes (Saturdays & Sundays, 5 – 8 PM) and weekly practice sessions.',
    cta: {
      label: 'Apply for the Training Bootcamp',
      href: 'admissions'
    }
  },
  {
    name: 'Mentorship Bootcamp',
    level: 'Advanced & Career-Focused',
    overview:
      'A 3-month advanced program designed to take your skills to the next level. You will work on complex projects, refine your craft, and prepare for job interviews. Graduates receive a professional certificate and access to internship opportunities.',
    learn: [
      'Advanced Software Engineering & Architecture - codebase architecture, design patterns, and code quality.',
      'UX Design Systems & Accessibility - design systems, inclusive design, and design thinking.',
      'Career & Leadership Skills - interview preparation, CV/LinkedIn optimization, communication, and teamwork workshops.',
      'Industry Insights - guest lectures and talks from experts covering current trends and best practices.'
    ],
    projects: [
      'Project 1: Build a real-world feature for a live codebase.',
      'Project 2: Collaborate on a cross-functional group project.',
      'Project 3: Complete an internship challenge simulation.',
      'Portfolio reviews and regular feedback sessions ensure your projects are portfolio-ready.',
      'Access internship pathways and job placement support upon graduation.'
    ],
    schedule: 'Weekend immersion sessions and live workshops over three months.',
    cta: {
      label: 'Apply for the Mentorship Bootcamp',
      href: 'admissions'
    }
  }
];

export default function ProgramsPage() {
  return (
    <div className="container-responsive space-y-20 py-24">
      <header className="max-w-3xl space-y-6">
        <p className="text-xs font-semibold uppercase tracking-wide text-primary">Programs</p>
        <h1 className="text-4xl font-bold text-charcoal md:text-5xl">Find the right path for you</h1>
        <p className="text-sm text-charcoal/70 md:text-base">
          Dselevura offers two tracks designed to meet you where you are and help you become a professional contributor. Start with the fundamentals, then level up through hands-on mentorship and portfolio projects.
        </p>
      </header>

      <div className="grid gap-12 lg:grid-cols-2">
        {tracks.map(track => (
          <section key={track.name} className="flex h-full flex-col justify-between rounded-3xl border border-slate-200 bg-white p-10 shadow-sm">
            <div className="space-y-8">
              <div className="space-y-2">
                <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-primary">{track.level}</span>
                <h2 className="text-2xl font-semibold text-charcoal md:text-3xl">{track.name}</h2>
                <p className="text-sm text-charcoal/70 md:text-base">{track.overview}</p>
              </div>

              <div className="space-y-4">
                <h3 className="text-sm font-semibold uppercase tracking-wide text-primary">What you will learn</h3>
                <ul className="space-y-2 text-sm text-charcoal/80">
                  {track.learn.map(item => (
                    <li key={item} className="flex gap-2">
                      <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-4 rounded-2xl border border-slate-200 bg-offwhite/80 p-6">
                <h3 className="text-sm font-semibold uppercase tracking-wide text-primary">Projects & outcomes</h3>
                <ul className="space-y-2 text-sm text-charcoal/80">
                  {track.projects.map(project => (
                    <li key={project} className="flex gap-2">
                      <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-cta" />
                      <span>{project}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-2">
                <h3 className="text-sm font-semibold uppercase tracking-wide text-primary">Schedule</h3>
                <p className="text-sm text-charcoal/70 md:text-base">{track.schedule}</p>
              </div>
            </div>

            <div className="mt-10">
              <a href={track.cta.href} className="inline-flex items-center rounded bg-cta px-5 py-3 text-sm font-semibold text-white shadow hover:bg-cta/90 focus-ring">
                {track.cta.label}
              </a>
            </div>
          </section>
        ))}
      </div>

      <section className="rounded-3xl border border-primary/20 bg-primary/5 p-10 text-sm text-charcoal/80 shadow-sm">
        <h2 className="text-2xl font-semibold text-charcoal">Choosing your track</h2>
        <p className="mt-4">
          If you are just starting out, join the Training Bootcamp to build your foundation. Already have some experience? Go straight to the Mentorship Bootcamp to sharpen your skills and prepare for career opportunities.
        </p>
      </section>
    </div>
  );
}
