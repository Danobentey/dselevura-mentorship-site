export const metadata = { title: 'Community & Alumni | Dselevura' };

export default function CommunityPage() {
  return (
    <div className="container-responsive py-20">
      <h1 className="text-4xl font-bold">Community & Alumni</h1>
      <p className="mt-4 max-w-prose text-charcoal/70">Support, events, networking, and alumni success enable long-term growth beyond program completion.</p>
      <div className="mt-12 grid gap-8 md:grid-cols-3">
        <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-lg font-semibold">Slack / Discord</h2>
          <p className="mt-2 text-sm text-charcoal/70">Channels for builds, feedback, wins, and opportunities.</p>
          <a href="#" className="mt-4 inline-block rounded bg-primary px-4 py-2 text-xs font-semibold text-white hover:bg-primary/90 focus-ring">Join Community</a>
        </div>
        <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-lg font-semibold">Events & Workshops</h2>
          <p className="mt-2 text-sm text-charcoal/70">Weekly mentor AMAs, career sessions, and build nights.</p>
          <a href="#" className="mt-4 inline-block rounded border border-primary px-4 py-2 text-xs font-semibold text-primary hover:bg-primary/5 focus-ring">View Calendar</a>
        </div>
        <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-lg font-semibold">Alumni Support</h2>
          <p className="mt-2 text-sm text-charcoal/70">Placement intros, interview prep, and continuous growth.</p>
          <a href="/admissions" className="mt-4 inline-block rounded bg-cta px-4 py-2 text-xs font-semibold text-white hover:bg-cta/90 focus-ring">Apply Now</a>
        </div>
      </div>
    </div>
  );
}
