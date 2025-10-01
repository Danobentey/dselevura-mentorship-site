export const metadata = { title: 'Contact | Dselevura' };

export default function ContactPage() {
  return (
    <div className="container-responsive py-20">
      <h1 className="text-4xl font-bold">Contact</h1>
      <p className="mt-4 max-w-prose text-charcoal/70">Reach out for partnerships, press, or program questions.</p>
      <div className="mt-12 grid gap-12 lg:grid-cols-2">
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
        <div className="space-y-6 text-sm">
          <div>
            <p className="font-semibold">WhatsApp</p>
            <a href="https://wa.me/123456789" className="text-primary hover:underline">Chat with us →</a>
          </div>
          <div>
            <p className="font-semibold">Email</p>
            <a href="mailto:info@dselevura.example" className="text-primary hover:underline">info@dselevura.example</a>
          </div>
          <div>
            <p className="font-semibold">Office</p>
            <p className="text-charcoal/70">Lagos, Nigeria (Remote-first)</p>
          </div>
        </div>
      </div>
    </div>
  );
}
