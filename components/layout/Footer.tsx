import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-slate-200 bg-white py-12 text-sm">
      <div className="container-responsive grid gap-8 md:grid-cols-4">
        <div>
          <h3 className="font-heading text-base font-semibold">Dselevura</h3>
          <p className="mt-2 text-xs text-charcoal/70">African tech mentorship & career acceleration.</p>
        </div>
        <div>
          <h4 className="mb-2 font-semibold">Programs</h4>
          <ul className="space-y-1">
            <li><Link href="/programs" className="hover:text-primary">Training Bootcamp</Link></li>
            <li><Link href="/programs" className="hover:text-primary">Mentorship Bootcamp</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="mb-2 font-semibold">Company</h4>
          <ul className="space-y-1">
            <li><Link href="/about" className="hover:text-primary">About</Link></li>
            <li><Link href="/blog" className="hover:text-primary">Blog</Link></li>
            <li><Link href="/contact" className="hover:text-primary">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="mb-2 font-semibold">Connect</h4>
          <ul className="space-y-1">
            <li><a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-primary">LinkedIn</a></li>
            <li><a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-primary">Twitter</a></li>
            <li><a href="https://discord.com" target="_blank" rel="noreferrer" className="hover:text-primary">Discord</a></li>
          </ul>
        </div>
      </div>
      <div className="container-responsive mt-10 flex flex-col items-center justify-between gap-4 border-t border-slate-200 pt-6 text-xs md:flex-row">
        <p>&copy; {new Date().getFullYear()} Dselevura. All rights reserved.</p>
        <p className="text-charcoal/60">Built for impact in African tech.</p>
      </div>
    </footer>
  );
}
