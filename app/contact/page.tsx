import ContactForm from '../../components/ui/ContactForm';

export const metadata = { title: 'Contact | Dselevura' };

export default function ContactPage() {
  return (
    <div className="container-responsive py-20">
      <h1 className="text-4xl font-bold">Contact</h1>
      <p className="mt-4 max-w-prose text-charcoal/70">Reach out for partnerships, press, or program questions.</p>
      <div className="mt-12 grid gap-12 lg:grid-cols-2">
        <ContactForm />
        <div className="space-y-6 text-sm">
          <div>
            <p className="font-semibold">WhatsApp</p>
            <a href="https://wa.me/+234705251242" className="text-primary hover:underline">Chat with us →</a>
          </div>
          <div>
            <p className="font-semibold">Email</p>
            <a href="mailto:admin@dselevura.com" className="text-primary hover:underline">info@dselevura.example</a>
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
