'use client';

import { FormEvent, useState } from 'react';
import { dealershipContact } from '@/data/inventory';
import { Input } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';

export function ContactSection() {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = String(formData.get('name') ?? '').trim();
    const email = String(formData.get('email') ?? '').trim();
    const message = String(formData.get('message') ?? '').trim();
    if (!name || !/^\S+@\S+\.\S+$/.test(email) || message.length < 20) {
      setError('Please provide a valid name, email, and message of at least 20 characters.');
      return;
    }
    setError('');
    setSuccess(true);
    event.currentTarget.reset();
  };

  return (
    <section id="contact" className="space-y-4">
      <h2 className="text-2xl font-bold text-slate-900">Contact Signature Motors</h2>
      <div className="grid gap-4 md:grid-cols-2">
        <article className="rounded-xl border border-slate-200 bg-white p-4 text-sm text-slate-700">
          <h3 className="text-base font-semibold text-slate-900">Dealership details</h3>
          <p>{dealershipContact.name}</p>
          <p>{dealershipContact.address}, {dealershipContact.city}, {dealershipContact.country}</p>
          <p>Phone: {dealershipContact.phone}</p>
          <p>Email: {dealershipContact.email}</p>
          <ul className="mt-2 list-disc pl-5">{dealershipContact.hours.map((hour) => <li key={hour}>{hour}</li>)}</ul>
          <iframe
            title="Signature Motors Location"
            src="https://www.google.com/maps?q=Galle+Road+Bambalapitiya+Colombo&output=embed"
            className="mt-3 h-52 w-full rounded-lg border"
            loading="lazy"
          />
        </article>
        <form onSubmit={onSubmit} className="space-y-3 rounded-xl border border-slate-200 bg-white p-4" noValidate>
          {success && <p className="rounded bg-emerald-50 p-2 text-sm text-emerald-700">Thank you. Our sales team will contact you soon.</p>}
          {error && <p className="rounded bg-red-50 p-2 text-sm text-red-700">{error}</p>}
          <label className="block text-sm font-medium">Name<Input name="name" required /></label>
          <label className="block text-sm font-medium">Email<Input name="email" type="email" required /></label>
          <label className="block text-sm font-medium">Message
            <textarea name="message" required className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 text-sm" rows={4} />
          </label>
          <Button type="submit">Send Message</Button>
        </form>
      </div>
    </section>
  );
}
