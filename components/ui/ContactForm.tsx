'use client';

export default function ContactForm() {
  return (
    <form className="space-y-6" onSubmit={e => { e.preventDefault(); alert('Contact form placeholder'); }}>
      <div className="flex flex-col gap-1">
        <label htmlFor="c-name" className="text-sm font-medium">Name</label>
        <input id="c-name" required className="rounded border border-slate-300 bg-white px-3 py-2 text-sm shadow-sm focus-ring" />
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="c-email" className="text-sm font-medium">Email</label>
        <input id="c-email" type="email" required className="rounded border border-slate-300 bg-white px-3 py-2 text-sm shadow-sm focus-ring" />
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="c-message" className="text-sm font-medium">Message</label>
        <textarea id="c-message" required rows={5} className="rounded border border-slate-300 bg-white px-3 py-2 text-sm shadow-sm focus-ring" />
      </div>
      <button type="submit" className="rounded bg-primary px-6 py-2 text-sm font-semibold text-white shadow hover:bg-primary/90 focus-ring">Send</button>
    </form>
  );
}
