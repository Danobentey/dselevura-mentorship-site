'use client';
import { useState } from 'react';

interface FormState {
  name: string;
  email: string;
  phone: string;
  program: string;
  motivation: string;
  skill: string;
  payment: string;
}

const initialState: FormState = {
  name: '',
  email: '',
  phone: '',
  program: '',
  motivation: '',
  skill: '',
  payment: ''
};

interface FieldError { [k: string]: string | undefined }

export default function MultiStepAdmissionsForm() {
  const [step, setStep] = useState(1);
  const [data, setData] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<FieldError>({});
  const [status, setStatus] = useState<'idle'|'submitting'|'success'|'error'>('idle');

  function validate(partial?: Partial<FormState>) {
    const d = { ...data, ...partial };
    const e: FieldError = {};
    if (!d.name.trim()) e.name = 'Name is required';
    if (!d.email.trim()) e.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(d.email)) e.email = 'Enter a valid email';
    if (!d.program.trim()) e.program = 'Select a program';
    if (d.phone && !/^\+?\d{7,15}$/.test(d.phone)) e.phone = 'Enter a valid phone';
    if (d.motivation.length > 500) e.motivation = 'Max 500 characters';
    return e;
  }

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setData(prev => ({ ...prev, [key]: value }));
    setErrors(prev => ({ ...prev, [key]: undefined }));
  }

  function next() {
    const e = validate();
    if (step === 1 && (e.name || e.email || e.program)) {
      setErrors(e); return;
    }
    if (step === 2 && (e.phone || e.motivation)) { setErrors(e); return; }
    setStep(s => Math.min(3, s + 1));
  }

  function prev() { setStep(s => Math.max(1, s - 1)); }

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    const e2 = validate();
    if (Object.keys(e2).length) { setErrors(e2); return; }
    setStatus('submitting');
    try {
      const res = await fetch('https://formspree.io/f/your-placeholder', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify(data)
      });
      if (!res.ok) throw new Error('Failed');
      setStatus('success');
      setData(initialState);
      setStep(1);
    } catch (err) {
      setStatus('error');
    }
  }

  return (
    <form onSubmit={submit} className="mx-auto max-w-2xl space-y-8" aria-describedby={status === 'error' ? 'form-error' : undefined}>
      <div>
        <p className="text-xs font-semibold tracking-wide text-primary">Admissions Form</p>
        <h2 className="mt-1 text-2xl font-bold">Apply to Dselevura</h2>
        <p className="mt-2 text-sm text-charcoal/70">Step {step} of 3</p>
      </div>

      {status === 'success' && (
        <div role="status" className="rounded border border-green-300 bg-green-50 p-4 text-sm text-green-800">Application submitted successfully. We'll reach out soon.</div>
      )}
      {status === 'error' && (
        <div id="form-error" role="alert" className="rounded border border-red-300 bg-red-50 p-4 text-sm text-red-700">Submission failed. Please retry.</div>
      )}

      {step === 1 && (
        <fieldset className="grid gap-6 md:grid-cols-2" aria-label="Basic Information">
          <div className="flex flex-col gap-1">
            <label htmlFor="name" className="text-sm font-medium">Full Name *</label>
            <input id="name" name="name" value={data.name} onChange={e => update('name', e.target.value)} className="rounded border border-slate-300 bg-white px-3 py-2 text-sm shadow-sm focus-ring" aria-invalid={!!errors.name} aria-describedby={errors.name ? 'error-name' : undefined} />
            {errors.name && <p id="error-name" className="text-xs text-red-600">{errors.name}</p>}
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="email" className="text-sm font-medium">Email *</label>
            <input id="email" name="email" type="email" value={data.email} onChange={e => update('email', e.target.value)} className="rounded border border-slate-300 bg-white px-3 py-2 text-sm shadow-sm focus-ring" aria-invalid={!!errors.email} aria-describedby={errors.email ? 'error-email' : undefined} />
            {errors.email && <p id="error-email" className="text-xs text-red-600">{errors.email}</p>}
          </div>
          <div className="flex flex-col gap-1 md:col-span-2">
            <label htmlFor="program" className="text-sm font-medium">Program Interest *</label>
            <select id="program" name="program" value={data.program} onChange={e => update('program', e.target.value)} className="rounded border border-slate-300 bg-white px-3 py-2 text-sm shadow-sm focus-ring" aria-invalid={!!errors.program} aria-describedby={errors.program ? 'error-program' : undefined}>
              <option value="">Select a program</option>
              <option value="training">Training Bootcamp (Beginner)</option>
              <option value="mentorship">Mentorship Bootcamp (Advanced)</option>
            </select>
            {errors.program && <p id="error-program" className="text-xs text-red-600">{errors.program}</p>}
          </div>
        </fieldset>
      )}

      {step === 2 && (
        <fieldset className="grid gap-6 md:grid-cols-2" aria-label="Additional Information">
          <div className="flex flex-col gap-1">
            <label htmlFor="phone" className="text-sm font-medium">Phone (optional)</label>
            <input id="phone" name="phone" value={data.phone} onChange={e => update('phone', e.target.value)} className="rounded border border-slate-300 bg-white px-3 py-2 text-sm shadow-sm focus-ring" aria-invalid={!!errors.phone} aria-describedby={errors.phone ? 'error-phone' : undefined} placeholder="+234..." />
            {errors.phone && <p id="error-phone" className="text-xs text-red-600">{errors.phone}</p>}
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="skill" className="text-sm font-medium">Skill Level</label>
            <select id="skill" name="skill" value={data.skill} onChange={e => update('skill', e.target.value)} className="rounded border border-slate-300 bg-white px-3 py-2 text-sm shadow-sm focus-ring">
              <option value="">Select</option>
              <option value="beginner">Beginner</option>
              <option value="intermediate">Intermediate</option>
              <option value="advanced">Advanced</option>
            </select>
          </div>
          <div className="flex flex-col gap-1 md:col-span-2">
            <label htmlFor="motivation" className="text-sm font-medium">Motivation (max 500 chars)</label>
            <textarea id="motivation" name="motivation" value={data.motivation} onChange={e => update('motivation', e.target.value)} maxLength={500} rows={5} className="rounded border border-slate-300 bg-white px-3 py-2 text-sm shadow-sm focus-ring" aria-invalid={!!errors.motivation} aria-describedby={errors.motivation ? 'error-motivation' : undefined} />
            <div className="flex justify-between text-xs text-charcoal/50"><span>{data.motivation.length}/500</span>{errors.motivation && <p id="error-motivation" className="text-red-600">{errors.motivation}</p>}</div>
          </div>
        </fieldset>
      )}

      {step === 3 && (
        <fieldset className="grid gap-6" aria-label="Payment and Review">
          <div className="flex flex-col gap-1">
            <label htmlFor="payment" className="text-sm font-medium">Preferred Payment Option</label>
            <select id="payment" name="payment" value={data.payment} onChange={e => update('payment', e.target.value)} className="rounded border border-slate-300 bg-white px-3 py-2 text-sm shadow-sm focus-ring">
              <option value="">Select</option>
              <option value="full">Full Payment</option>
              <option value="installments">Installments</option>
              <option value="scholarship">Scholarship Consideration</option>
            </select>
          </div>
          <div className="rounded-md border border-slate-200 bg-slate-50 p-4 text-xs text-charcoal/70">
            <p className="font-semibold text-charcoal">Review</p>
            <ul className="mt-2 space-y-1">
              <li><strong>Name:</strong> {data.name || '—'}</li>
              <li><strong>Email:</strong> {data.email || '—'}</li>
              <li><strong>Program:</strong> {data.program || '—'}</li>
              <li><strong>Skill:</strong> {data.skill || '—'}</li>
              <li><strong>Payment:</strong> {data.payment || '—'}</li>
            </ul>
          </div>
        </fieldset>
      )}

      <div className="flex items-center justify-between gap-4">
        <div className="flex gap-2">
          {step > 1 && <button type="button" onClick={prev} className="rounded border border-slate-300 bg-white px-4 py-2 text-sm font-medium shadow-sm hover:bg-slate-50 focus-ring">Back</button>}
          {step < 3 && <button type="button" onClick={next} className="rounded bg-primary px-6 py-2 text-sm font-semibold text-white shadow hover:bg-primary/90 focus-ring">Next</button>}
        </div>
        {step === 3 && (
          <button disabled={status === 'submitting'} type="submit" className="rounded bg-cta px-8 py-2 text-sm font-semibold text-white shadow hover:bg-cta/90 focus-ring disabled:opacity-60">
            {status === 'submitting' ? 'Submitting...' : 'Submit Application'}
          </button>
        )}
      </div>
    </form>
  );
}
