"use client";

import { useState } from "react";

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<{name?:string;email?:string;message?:string}>({});

  const submit = (formData: FormData) => {
    const name = String(formData.get("name") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const message = String(formData.get("message") || "").trim();

    const nextErrors: typeof errors = {};
    if (name.length < 2) nextErrors.name = "Name is required.";
    if (!/^\S+@\S+\.\S+$/.test(email)) nextErrors.email = "Valid email required.";
    if (message.length < 12) nextErrors.message = "Please provide at least 12 characters.";

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length === 0) setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 md:grid-cols-2 md:px-6">
        <div>
          <h2 className="section-title">Let’s plan your next signature drive.</h2>
          <p className="section-subtitle">Visit our Colombo showroom or message us for stock, financing, and booking assistance.</p>
          <div className="mt-6 space-y-2 text-sm text-slate-300">
            <p><strong>Address:</strong> 145 Galle Road, Colombo 03, Sri Lanka</p>
            <p><strong>Phone:</strong> +94 11 258 7450</p>
            <p><strong>Hours:</strong> Mon–Sat 9:00 AM – 7:00 PM | Sun 10:00 AM – 4:00 PM</p>
          </div>
          <iframe
            title="Signature Motors Colombo Location"
            className="mt-6 h-72 w-full rounded-xl border-0"
            loading="lazy"
            src="https://www.google.com/maps?q=Galle+Road+Colombo+03&output=embed"
          />
        </div>

        <div className="rounded-2xl border border-white/15 bg-white/5 p-6 shadow-card backdrop-blur">
          <h3 className="text-xl font-semibold">Send us a message</h3>
          {submitted ? (
            <p className="mt-4 rounded-md bg-emerald-400/20 p-4 text-emerald-200">Thank you for contacting Signature Motors. A sales advisor will respond within one business hour.</p>
          ) : (
            <form action={submit} className="mt-4 space-y-4">
              <div>
                <input name="name" placeholder="Your name" className="w-full rounded-md border border-white/20 bg-slate-900/60 px-3 py-2" />
                {errors.name && <p className="mt-1 text-xs text-rose-600">{errors.name}</p>}
              </div>
              <div>
                <input name="email" type="email" placeholder="Email address" className="w-full rounded-md border border-white/20 bg-slate-900/60 px-3 py-2" />
                {errors.email && <p className="mt-1 text-xs text-rose-600">{errors.email}</p>}
              </div>
              <div>
                <textarea name="message" rows={4} placeholder="Tell us what vehicle you're interested in" className="w-full rounded-md border border-white/20 bg-slate-900/60 px-3 py-2" />
                {errors.message && <p className="mt-1 text-xs text-rose-600">{errors.message}</p>}
              </div>
              <button className="rounded-md bg-amber-500 px-4 py-2 font-semibold text-[#1f1709] transition hover:bg-amber-400">Submit inquiry</button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
