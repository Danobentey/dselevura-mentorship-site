export const metadata = { title: 'About | Dselevura' };

const values = [
  {
    label: 'Mission',
    copy:
      'To empower and equip African youth with the technical skills, mentorship, and confidence needed to thrive in the digital economy. We bridge the technology skills gap by offering accessible training and hands-on guidance that turn learners into professional builders.'
  },
  {
    label: 'Vision',
    copy:
      'A continent where African innovators lead digital transformation - confident, connected, and creating opportunities for the next generation. We imagine a future in which ambitious young people across Africa can access world-class mentorship, build portfolio-grade work, and launch high-impact careers without barriers.'
  }
];

const tracks = [
  {
    title: 'Training Bootcamp',
    duration: '3 months',
    description:
      'Designed for beginners and intermediate learners, this track builds foundations in UI/UX, web development, and data analytics through live weekend classes and weekly practice. Learners complete two hands-on projects and earn a certificate. Top performers receive free entry into the advanced program.'
  },
  {
    title: 'Mentorship Bootcamp',
    duration: '3 months',
    description:
      'For those ready to deepen their skills, our advanced track focuses on portfolio-ready projects, career coaching, interview preparation, and soft-skills development. Participants build three major projects with mentor feedback and may access internship opportunities.'
  }
];

export default function AboutPage() {
  return (
    <div className="container-responsive space-y-20 py-24">
      <section className="grid gap-12 lg:grid-cols-[1.1fr_1fr]">
        <div className="space-y-6">
          <p className="text-xs font-semibold uppercase tracking-wide text-primary">Our Story</p>
          <h1 className="text-4xl font-bold text-charcoal md:text-5xl">
            About Dselevura Mentorship Program
          </h1>
          <p className="text-sm text-charcoal/70 md:text-base">
            Dselevura was founded to close the gap between self-study and employability. We combine structured learning, mentorship, and a support system that ensures learners do more than understand the theory—they ship production-ready work.
          </p>
        </div>
        <div className="rounded-2xl border border-primary/20 bg-primary/5 p-8 text-sm text-charcoal/80 shadow-sm">
          <h2 className="text-lg font-semibold text-charcoal">Why we exist</h2>
          <p className="mt-4">
            Throughout the six-month journey we deliver structured sprints, real-project shipping, guided feedback, and a supportive community. Mentors with industry experience host live classes and office hours, while program staff coordinate scheduling and support.
          </p>
          <p className="mt-4">
            Our mission goes beyond teaching; we mentor, guide, and stay with learners through their growth so they launch careers with confidence.
          </p>
        </div>
      </section>

      <section className="grid gap-6 md:grid-cols-2">
        {values.map(value => (
          <article key={value.label} className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
            <p className="text-xs font-semibold uppercase tracking-wide text-primary">{value.label}</p>
            <p className="mt-4 text-sm text-charcoal/80 md:text-base">{value.copy}</p>
          </article>
        ))}
      </section>

      <section className="space-y-10">
        <div className="space-y-3">
          <p className="text-xs font-semibold uppercase tracking-wide text-primary">Bootcamp Pathways</p>
          <h2 className="text-3xl font-bold text-charcoal">What we do</h2>
          <p className="max-w-2xl text-sm text-charcoal/70 md:text-base">
            Our dual-track bootcamp model meets learners where they are and accelerates them into professional contributors. Each pathway blends live instruction, weekly practice, and mentor feedback so participants build portfolio-grade work.
          </p>
        </div>
        <div className="grid gap-8 lg:grid-cols-2">
          {tracks.map(track => (
            <article key={track.title} className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-offwhite/80 p-8 shadow-sm">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-primary">{track.duration}</span>
                  <h3 className="text-xl font-semibold text-charcoal">{track.title}</h3>
                </div>
                <p className="text-sm text-charcoal/80 md:text-base">{track.description}</p>
              </div>
              <div className="mt-6 rounded-lg border border-primary/10 bg-white/80 p-4 text-xs text-charcoal/60">
                {track.title === 'Training Bootcamp' ? (
                  <p>Includes two hands-on projects, certificate eligibility, and advancement opportunities for top performers.</p>
                ) : (
                  <p>Focuses on three major builds, interview prep, and access to internships within our partner network.</p>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="rounded-3xl border border-cta/20 bg-cta/5 p-10 text-sm text-charcoal/80 shadow-sm">
        <h2 className="text-2xl font-semibold text-charcoal">Why it matters</h2>
        <p className="mt-4">
          African youth deserve a clear pathway from curiosity to career. By pairing accessible training with personalized mentorship and community, Dselevura helps young people build portfolios, gain confidence, and access jobs and internships.
        </p>
        <p className="mt-4">
          Our inclusive, mentor-driven approach is designed for learners juggling studies or work - a weekend-friendly model that focuses on outcomes rather than theory alone.
        </p>
      </section>
    </div>
  );
}
