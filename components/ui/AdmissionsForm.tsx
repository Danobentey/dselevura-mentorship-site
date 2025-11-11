'use client';
import { useState, FormEvent } from 'react';

interface FormData {
  name: string;
  email: string;
  track: string;
  message: string;
}

const initialFormData: FormData = {
  name: '',
  email: '',
  track: '',
  message: ''
};

const tracks = [
  'Software Development',
  'UI/UX Design',
  'Data Analytics',
  'Digital Marketing'
];

export default function AdmissionsForm() {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState<string>('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (status === 'error') {
      setStatus('idle');
      setErrorMessage('');
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Client-side validation
    if (!formData.name || !formData.email || !formData.track || !formData.message) {
      setStatus('error');
      setErrorMessage('All fields are required. Please fill out the complete form.');
      return;
    }

    setStatus('loading');
    setErrorMessage('');

    try {
      const response = await fetch('/api/apply', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to submit application');
      }

      if (data.ok) {
        setStatus('success');
        setFormData(initialFormData);
      } else {
        throw new Error('Unexpected response from server');
      }
    } catch (error) {
      setStatus('error');
      setErrorMessage(error instanceof Error ? error.message : 'Failed to submit application. Please try again.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl space-y-6">
      {status === 'success' && (
        <div role="status" className="rounded border border-green-300 bg-green-50 p-4 text-sm text-green-800">
          Application submitted successfully! We'll review your application and get back to you within 5 business days.
        </div>
      )}

      {status === 'error' && errorMessage && (
        <div role="alert" className="rounded border border-red-300 bg-red-50 p-4 text-sm text-red-700">
          {errorMessage}
        </div>
      )}

      <div className="grid gap-6 md:grid-cols-2">
        <div className="flex flex-col gap-2">
          <label htmlFor="name" className="text-sm font-medium text-charcoal">
            Full Name <span className="text-red-600">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="rounded border border-slate-300 bg-white px-4 py-2 text-sm shadow-sm focus-ring"
            placeholder="Enter your full name"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="text-sm font-medium text-charcoal">
            Email Address <span className="text-red-600">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="rounded border border-slate-300 bg-white px-4 py-2 text-sm shadow-sm focus-ring"
            placeholder="your.email@example.com"
          />
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="track" className="text-sm font-medium text-charcoal">
          Track Selection <span className="text-red-600">*</span>
        </label>
        <select
          id="track"
          name="track"
          value={formData.track}
          onChange={handleChange}
          required
          className="rounded border border-slate-300 bg-white px-4 py-2 text-sm shadow-sm focus-ring"
        >
          <option value="">Select a track</option>
          {tracks.map(track => (
            <option key={track} value={track}>
              {track}
            </option>
          ))}
        </select>
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="message" className="text-sm font-medium text-charcoal">
          Motivation & Background <span className="text-red-600">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={6}
          className="rounded border border-slate-300 bg-white px-4 py-2 text-sm shadow-sm focus-ring"
          placeholder="Tell us about your motivation for joining this track and your relevant background..."
        />
      </div>

      <div className="flex items-center gap-4">
        <button
          type="submit"
          disabled={status === 'loading'}
          className="rounded bg-cta px-8 py-3 text-sm font-semibold text-white shadow hover:bg-cta/90 focus-ring disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {status === 'loading' ? 'Submitting...' : 'Submit Application'}
        </button>
        {status === 'loading' && (
          <span className="text-sm text-charcoal/70">Please wait...</span>
        )}
      </div>
    </form>
  );
}
