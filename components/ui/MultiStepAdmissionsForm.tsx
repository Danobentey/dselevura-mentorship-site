'use client';
import { useState } from 'react';

interface FormState {
  name: string;
  email: string;
  phone: string;
  program: string;
  course: string;
  motivation: string;
  skill: string;
  referral: string;
  receipt: File | null;
}

const initialState: FormState = {
  name: '',
  email: '',
  phone: '',
  program: '',
  course: '',
  motivation: '',
  skill: '',
  referral: '',
  receipt: null
};

interface FieldError {
  [key: string]: string | undefined;
}

type PaymentIntent = 'later' | 'now';

export default function MultiStepAdmissionsForm() {
  const totalSteps = 4;
  const [step, setStep] = useState(1);
  const [data, setData] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<FieldError>({});
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [completed, setCompleted] = useState<PaymentIntent | null>(null);
  const [submitted, setSubmitted] = useState<FormState | null>(null);

  const displayStep = Math.min(step, totalSteps);

  function resetForm() {
    setStep(1);
    setData(initialState);
    setErrors({});
    setStatus('idle');
    setCompleted(null);
    setSubmitted(null);
  }

  function validate(partial?: Partial<FormState>, intent: PaymentIntent = 'later') {
    const d = { ...data, ...partial };
    const e: FieldError = {};
    if (!d.name?.trim()) e.name = 'Name is required';
    if (!d.email?.trim()) e.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(d.email)) e.email = 'Enter a valid email';
    if (!d.program?.trim()) e.program = 'Select a program';
    if (!d.course?.trim()) e.course = 'Select a course';
    if (d.phone && !/^\+?\d{7,15}$/.test(d.phone)) e.phone = 'Enter a valid phone number';
    if ((d.motivation ?? '').length > 500) e.motivation = 'Max 500 characters';
    if (intent === 'now' && !d.receipt) e.receipt = 'Upload your payment receipt';
    return e;
  }

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setData(prev => ({ ...prev, [key]: value }));
    setErrors(prev => ({ ...prev, [key]: undefined }));
  }

  function handleReceiptChange(file: File | null) {
    setData(prev => ({ ...prev, receipt: file }));
    setErrors(prev => ({ ...prev, receipt: undefined }));
  }

  function next() {
    const validation = validate(undefined, 'later');
    if (step === 1 && (validation.name || validation.email || validation.program || validation.course)) {
      setErrors(validation);
      return;
    }
    if (step === 2 && (validation.phone || validation.motivation)) {
      setErrors(validation);
      return;
    }
    setStep(prev => Math.min(totalSteps, prev + 1));
  }

  function prev() {
    setStep(prev => Math.max(1, prev - 1));
  }

  async function submit(e?: React.FormEvent, intent: PaymentIntent = 'now') {
    e?.preventDefault();
    const validation = validate(undefined, intent);
    if (Object.keys(validation).length) {
      setErrors(validation);
      return;
    }

    setStatus('submitting');
    try {
      const formData = new FormData();
      const payload = { ...data, paymentIntent: intent } as Record<string, unknown>;
      Object.entries(payload).forEach(([key, value]) => {
        if (key === 'receipt') {
          if (value instanceof File) formData.append(key, value);
        } else if (typeof value === 'string') {
          formData.append(key, value);
        } else if (value == null) {
          formData.append(key, '');
        }
      });

      const res = await fetch('https://formspree.io/f/your-placeholder', {
        method: 'POST',
        body: formData
      });
      if (!res.ok) throw new Error('Failed');
      setStatus('success');
      setCompleted(intent);
      setSubmitted({ ...data });
      setStep(totalSteps + 1);
    } catch {
      setStatus('error');
    }
  }

  function goToPayNow() {
    setErrors(prev => ({ ...prev, receipt: undefined }));
    setStep(4);
  }

  if (status === 'success' && submitted) {
    return (
      <div className="mx-auto max-w-2xl space-y-8 rounded-lg border border-slate-200 bg-white p-10 shadow-sm">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-primary">Registration Complete</p>
          <h2 className="mt-2 text-3xl font-bold text-charcoal">Thank you for joining Dselevura</h2>
        </div>
        <p className="text-sm text-charcoal/70">
          We have received your application
          {completed === 'now'
            ? ' along with your certificate payment details.'
            : '. Your course access is confirmed. Remember to settle the 15,000 NGN certificate fee within two weeks to unlock your credential.'}
        </p>
        <div className="rounded-md border border-slate-200 bg-offwhite p-6 text-sm text-charcoal/80">
          <p className="font-semibold">Application Summary</p>
          <ul className="mt-3 space-y-1">
            <li><strong>Name:</strong> {submitted.name}</li>
            <li><strong>Email:</strong> {submitted.email}</li>
            <li><strong>Program:</strong> {submitted.program || ''}</li>
            <li><strong>Course:</strong> {submitted.course || ''}</li>
            <li><strong>Referral Source:</strong> {submitted.referral || ''}</li>
            <li><strong>Payment Path:</strong> {completed === 'now' ? 'Paid now' : 'Pay later'}</li>
          </ul>
        </div>
        <div className="space-y-4 text-sm text-charcoal/80">
          <p>
            Our admissions team will reach out shortly with onboarding steps. If you selected <strong>Pay Now</strong>, keep your receipt handy in case we need further verification.
          </p>
          <p>
            Need immediate assistance? Email <a className="text-primary hover:underline" href="mailto:info@dselevura.example">info@dselevura.example</a> or message our WhatsApp channel.
          </p>
        </div>
        <button
          type="button"
          onClick={resetForm}
          className="rounded border border-primary px-6 py-2 text-sm font-semibold text-primary hover:bg-primary/5 focus-ring"
        >
          Start a new application
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={(event) => submit(event, 'now')}
      className="mx-auto max-w-2xl space-y-8"
      aria-describedby={status === 'error' ? 'form-error' : undefined}
    >
      <div>
        <p className="text-xs font-semibold tracking-wide text-primary">Admissions Form</p>
        <h2 className="mt-1 text-2xl font-bold">Apply to Dselevura</h2>
        <p className="mt-2 text-sm text-charcoal/70">Step {displayStep} of {totalSteps}</p>
      </div>

      {status === 'error' && (
        <div
          id="form-error"
          role="alert"
          className="rounded border border-red-300 bg-red-50 p-4 text-sm text-red-700"
        >
          Submission failed. Please retry.
        </div>
      )}

      {step === 1 && (
        <fieldset className="grid gap-6 md:grid-cols-2" aria-label="Basic Information">
          <div className="flex flex-col gap-1">
            <label htmlFor="name" className="text-sm font-medium">Full Name *</label>
            <input
              id="name"
              name="name"
              value={data.name}
              onChange={(event) => update('name', event.target.value)}
              className="rounded border border-slate-300 bg-white px-3 py-2 text-sm shadow-sm focus-ring"
              aria-invalid={!!errors.name}
              aria-describedby={errors.name ? 'error-name' : undefined}
            />
            {errors.name && <p id="error-name" className="text-xs text-red-600">{errors.name}</p>}
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="email" className="text-sm font-medium">Email *</label>
            <input
              id="email"
              name="email"
              type="email"
              value={data.email}
              onChange={(event) => update('email', event.target.value)}
              className="rounded border border-slate-300 bg-white px-3 py-2 text-sm shadow-sm focus-ring"
              aria-invalid={!!errors.email}
              aria-describedby={errors.email ? 'error-email' : undefined}
            />
            {errors.email && <p id="error-email" className="text-xs text-red-600">{errors.email}</p>}
          </div>
          <div className="flex flex-col gap-1 md:col-span-2">
            <label htmlFor="program" className="text-sm font-medium">Program Interest *</label>
            <select
              id="program"
              name="program"
              value={data.program}
              onChange={(event) => update('program', event.target.value)}
              className="rounded border border-slate-300 bg-white px-3 py-2 text-sm shadow-sm focus-ring"
              aria-invalid={!!errors.program}
              aria-describedby={errors.program ? 'error-program' : undefined}
            >
              <option value="">Select a program</option>
              <option value="training">Training Bootcamp (Beginner)</option>
              <option value="mentorship">Mentorship Bootcamp (Advanced)</option>
            </select>
            {errors.program && <p id="error-program" className="text-xs text-red-600">{errors.program}</p>}
          </div>
          <div className="flex flex-col gap-1 md:col-span-2">
            <label htmlFor="course" className="text-sm font-medium">Course Selection *</label>
            <select
              id="course"
              name="course"
              value={data.course}
              onChange={(event) => update('course', event.target.value)}
              className="rounded border border-slate-300 bg-white px-3 py-2 text-sm shadow-sm focus-ring"
              aria-invalid={!!errors.course}
              aria-describedby={errors.course ? 'error-course' : undefined}
            >
              <option value="">Select a course</option>
              <option value="Product Design (UI/UX)">Product Design (UI/UX)</option>
              <option value="Digital Marketing">Digital Marketing</option>
              <option value="Web Development 1 (Coming Soon)">Web Development (Coming Soon)</option>
            </select>
            {errors.course && <p id="error-course" className="text-xs text-red-600">{errors.course}</p>}
          </div>
        </fieldset>
      )}

      {step === 2 && (
        <fieldset className="grid gap-6 md:grid-cols-2" aria-label="Additional Information">
          <div className="flex flex-col gap-1">
            <label htmlFor="phone" className="text-sm font-medium">Phone (WhatsApp) *</label>
            <input
              id="phone"
              name="phone"
              value={data.phone}
              onChange={(event) => update('phone', event.target.value)}
              className="rounded border border-slate-300 bg-white px-3 py-2 text-sm shadow-sm focus-ring"
              aria-invalid={!!errors.phone}
              aria-describedby={errors.phone ? 'error-phone' : undefined}
              placeholder="+234..."
            />
            {errors.phone && <p id="error-phone" className="text-xs text-red-600">{errors.phone}</p>}
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="skill" className="text-sm font-medium">Skill Level</label>
            <select
              id="skill"
              name="skill"
              value={data.skill}
              onChange={(event) => update('skill', event.target.value)}
              className="rounded border border-slate-300 bg-white px-3 py-2 text-sm shadow-sm focus-ring"
            >
              <option value="">Select</option>
              <option value="beginner">Beginner</option>
              <option value="intermediate">Intermediate</option>
              <option value="advanced">Advanced</option>
            </select>
          </div>
          <div className="flex flex-col gap-1 md:col-span-2">
            <label htmlFor="motivation" className="text-sm font-medium">Motivation (max 500 chars)</label>
            <textarea
              id="motivation"
              name="motivation"
              value={data.motivation}
              onChange={(event) => update('motivation', event.target.value)}
              maxLength={500}
              rows={5}
              className="rounded border border-slate-300 bg-white px-3 py-2 text-sm shadow-sm focus-ring"
              aria-invalid={!!errors.motivation}
              aria-describedby={errors.motivation ? 'error-motivation' : undefined}
            />
            <div className="flex justify-between text-xs text-charcoal/50">
              <span>{data.motivation.length}/500</span>
              {errors.motivation && <p id="error-motivation" className="text-red-600">{errors.motivation}</p>}
            </div>
          </div>
          <div className="flex flex-col gap-1 md:col-span-2">
            <label htmlFor="referral" className="text-sm font-medium">How did you hear about Dselevura?</label>
            <select
              id="referral"
              name="referral"
              value={data.referral}
              onChange={(event) => update('referral', event.target.value)}
              className="rounded border border-slate-300 bg-white px-3 py-2 text-sm shadow-sm focus-ring"
            >
              <option value="">Select an option</option>
              <option value="Social media">Social media</option>
              <option value="Friend or colleague">Friend or colleague</option>
              <option value="Event or workshop">Event or workshop</option>
              <option value="Mentor recommendation">Mentor recommendation</option>
              <option value="Search engine">Search engine</option>
              <option value="Other">Other</option>
            </select>
          </div>
        </fieldset>
      )}

      {step === 3 && (
        <div className="space-y-6" aria-live="polite">
          <div className="rounded-md border border-primary/20 bg-white p-6 text-sm text-charcoal/80 shadow-sm">
            <p className="text-base font-semibold text-primary">Secure Your Certificate and Confirm Your Enrollment</p>
            <div className="mt-3 space-y-3">
              <p>Congratulations! Your course access is completely tuition-free, and you&apos;re already on your way to an exceptional learning experience.</p>
              <p>To ensure a smooth completion process, we encourage you to pay the <strong>₦15,000</strong> certificate fee now. You&apos;re not just paying for a certificate; you&apos;re investing in your achievement, your credibility, and your next big opportunity.</p>
              <p>Early payment guarantees that your official certificate will be ready immediately upon graduation and provides you with priority onboarding support from our academic team.</p>
              <p>Most students choose <strong>Pay Now</strong> because they want zero delays when it&apos;s time to celebrate their success, and you deserve that too.</p>
              <p>Kindly make your payment today and send your proof of payment to confirm your certificate and secure early verification.</p>
              <p className="text-xs text-charcoal/70">(If you prefer to complete this later, please ensure payment is made within two weeks of starting your course.)</p>
            </div>
          </div>
          <div className="rounded-md border border-slate-200 bg-offwhite p-4 text-xs text-charcoal/70">
            <p className="font-semibold text-charcoal">Review your details</p>
            <ul className="mt-2 space-y-1">
              <li><strong>Name:</strong> {data.name || ''}</li>
              <li><strong>Email:</strong> {data.email || ''}</li>
              <li><strong>Program:</strong> {data.program || ''}</li>
              <li><strong>Course:</strong> {data.course || ''}</li>
              <li><strong>Skill:</strong> {data.skill || ''}</li>
              <li><strong>Referral:</strong> {data.referral || ''}</li>
            </ul>
          </div>
        </div>
      )}

      {step === 4 && (
        <div className="space-y-6" aria-label="Certificate payment details">
          <div className="rounded-md border border-slate-200 bg-white p-6 text-sm text-charcoal/80 shadow-sm">
            <p className="text-base font-semibold text-primary">Pay 15,000 NGN for your certificate</p>
            <p className="mt-2">
              Transfer the amount to the account below. Include your <strong>full name</strong> in the payment narration so we can match it quickly.
            </p>
            <div className="mt-4 grid gap-3 rounded-md border border-slate-200 bg-offwhite p-4 text-sm font-medium">
              <p><span className="text-charcoal/60">Account Name:</span> Dselevura Mentorship</p>
              <p><span className="text-charcoal/60">Bank:</span> Example Bank PLC</p>
              <p><span className="text-charcoal/60">Account Number:</span> 0123456789</p>
              <p><span className="text-charcoal/60">Amount:</span> 15,000 NGN</p>
            </div>
            <p className="mt-3 text-xs text-charcoal/60">We activate certificates within 24 hours of verifying receipts.</p>
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="receipt" className="text-sm font-medium">Upload payment receipt *</label>
            <input
              id="receipt"
              name="receipt"
              type="file"
              accept="image/*,application/pdf"
              onChange={(event) => handleReceiptChange(event.target.files?.[0] ?? null)}
              className="rounded border border-slate-300 bg-white px-3 py-2 text-sm shadow-sm focus-ring"
              aria-invalid={!!errors.receipt}
              aria-describedby={errors.receipt ? 'error-receipt' : undefined}
            />
            {errors.receipt && <p id="error-receipt" className="text-xs text-red-600">{errors.receipt}</p>}
          </div>
          <div className="rounded-md border border-slate-200 bg-offwhite p-4 text-xs text-charcoal/70">
            <p className="font-semibold text-charcoal">Before you finish</p>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>Ensure the receipt image or PDF is clear and legible.</li>
              <li>Confirm your full name appears in the payment narration.</li>
              <li>Keep the original proof of payment for your records.</li>
            </ul>
          </div>
        </div>
      )}

      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex gap-2">
          {step > 1 && step <= totalSteps && (
            <button
              type="button"
              onClick={prev}
              className="rounded border border-slate-300 bg-white px-4 py-2 text-sm font-medium shadow-sm hover:bg-slate-50 focus-ring"
            >
              Back
            </button>
          )}
          {step < 3 && (
            <button
              type="button"
              onClick={next}
              className="rounded bg-primary px-6 py-2 text-sm font-semibold text-white shadow hover:bg-primary/90 focus-ring"
            >
              Next
            </button>
          )}
        </div>

        {step === 3 && (
          <div className="flex flex-wrap gap-3">
            <button
              type="button"
              onClick={() => submit(undefined, 'later')}
              disabled={status === 'submitting'}
              className="rounded border border-slate-300 bg-transparent px-6 py-2 text-sm font-semibold text-charcoal hover:bg-slate-100 focus-ring disabled:opacity-60"
            >
              Proceed
            </button>
            <button
              type="button"
              onClick={goToPayNow}
              className="rounded bg-cta px-6 py-2 text-sm font-semibold text-white shadow hover:bg-cta/90 focus-ring"
            >
              Pay Now
            </button>
          </div>
        )}

        {step === 4 && (
          <button
            type="submit"
            disabled={status === 'submitting'}
            className="rounded bg-cta px-8 py-2 text-sm font-semibold text-white shadow hover:bg-cta/90 focus-ring disabled:opacity-60"
          >
            {status === 'submitting' ? 'Submitting...' : 'Complete Registration'}
          </button>
        )}
      </div>
    </form>
  );
}
