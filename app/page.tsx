import Hero from '../components/ui/Hero';
import { StatCard, TestimonialCard } from '../components/ui/Cards';
import Link from 'next/link';

export default function HomePage() {
  return (
    <>
      <Hero title="Build the skills. Ship real projects. Land the job." subtitle="African tech mentorship & bootcamps guiding you from learning to employment with real-world projects, expert mentors, and a career launch pathway." />
      <section className="container-responsive py-20" id="differentiators">
        <h2 className="text-3xl font-bold">Why Dselevura</h2>
        <p className="mt-3 max-w-prose text-charcoal/70">Focused, mentor-driven, outcomes-based learning for African talent. Practical sprints. Portfolio proof. Career network.</p>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          <StatCard title="Learner to Builder" value="Project-first">Real products, no endless tutorials.</StatCard>
          <StatCard title="Mentor Access" value="1:1 + Group">Guided feedback & growth.</StatCard>
          <StatCard title="Career Outcomes" value="Internships">Pathways into real roles.</StatCard>
        </div>
      </section>
      <section className="bg-white py-20" id="highlights">
        <div className="container-responsive">
          <h2 className="text-3xl font-bold">Program Highlights</h2>
          <ul className="mt-6 grid gap-4 text-sm text-charcoal/80 md:grid-cols-2 lg:grid-cols-3">
            <li className="rounded border border-slate-200 bg-offwhite p-4">Structured sprints & deliverables</li>
            <li className="rounded border border-slate-200 bg-offwhite p-4">Real collaboration & code reviews</li>
            <li className="rounded border border-slate-200 bg-offwhite p-4">Portfolio-ready project builds</li>
            <li className="rounded border border-slate-200 bg-offwhite p-4">Career readiness workshops</li>
            <li className="rounded border border-slate-200 bg-offwhite p-4">Mentorship & peer community</li>
            <li className="rounded border border-slate-200 bg-offwhite p-4">Internship & hiring pathways</li>
          </ul>
        </div>
      </section>
      <section className="container-responsive py-20" id="testimonials">
        <h2 className="text-3xl font-bold">Student Voices</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          <TestimonialCard name="Amara" role="Frontend Dev Intern" quote="This mentorship accelerated my confidence and portfolio in months." />
          <TestimonialCard name="Kwame" role="Junior Backend Engineer" quote="Real project delivery replaced tutorial fatigue. I shipped, learned, and grew." />
          <TestimonialCard name="Zuri" role="Product Designer" quote="Feedback and iteration helped me build a portfolio recruiters actually cared about." />
        </div>
      </section>
      <section className="bg-white py-20" id="partners">
        <div className="container-responsive">
          <h2 className="text-3xl font-bold">Partners</h2>
          <p className="mt-3 max-w-prose text-charcoal/70">We collaborate with companies and communities advancing African technical talent.</p>
          <div className="mt-8 grid grid-cols-2 gap-8 md:grid-cols-4">
            <div className="h-12 rounded bg-offwhite shadow-inner" />
            <div className="h-12 rounded bg-offwhite shadow-inner" />
            <div className="h-12 rounded bg-offwhite shadow-inner" />
            <div className="h-12 rounded bg-offwhite shadow-inner" />
          </div>
          <div className="mt-10">
            <Link href="/admissions" className="rounded bg-cta px-6 py-3 text-sm font-semibold text-white shadow hover:bg-cta/90 focus-ring">Apply Now</Link>
          </div>
        </div>
      </section>
    </>
  );
}
