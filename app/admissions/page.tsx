import MultiStepAdmissionsForm from '../../components/ui/MultiStepAdmissionsForm';

export const metadata = { title: 'Admissions | Dselevura' };

export default function AdmissionsPage() {
  return (
    <div className="container-responsive py-20">
      <div className="max-w-2xl">
        <h1 className="text-4xl font-bold">Admissions</h1>
        <p className="mt-4 text-charcoal/70">Tell us about your goals. We review applications weekly and respond within 5 business days.</p>
      </div>
      <div className="mt-12">
        <MultiStepAdmissionsForm />
      </div>
    </div>
  );
}
