"use client";

import { useState } from "react";
import Image from "next/image";
import { Car } from "@/types/car";
import { currencyLKR, numberFormat } from "@/utils/format";

export default function CarModal({ car, onClose }: { car: Car | null; onClose: () => void }) {
  const [selectedImage, setSelectedImage] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<{name?:string;email?:string;date?:string}>({});

  if (!car) return null;

  const handleSubmit = (formData: FormData) => {
    const name = String(formData.get("name") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const date = String(formData.get("date") || "").trim();
    const nextErrors: typeof errors = {};

    if (name.length < 2) nextErrors.name = "Please enter your full name.";
    if (!/^\S+@\S+\.\S+$/.test(email)) nextErrors.email = "Enter a valid email address.";
    if (!date) nextErrors.date = "Please choose a preferred date.";

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length === 0) setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 grid place-items-center bg-slate-900/75 p-4">
      <div className="max-h-[95vh] w-full max-w-5xl overflow-auto rounded-2xl bg-white p-5 md:p-6">
        <div className="mb-4 flex items-start justify-between">
          <h3 className="text-2xl font-bold">{car.year} {car.make} {car.model}</h3>
          <button onClick={onClose} className="rounded-md border border-slate-300 px-3 py-1">Close</button>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <div className="relative h-64 w-full overflow-hidden rounded-xl">
              <Image src={car.gallery[selectedImage]} alt={`${car.make} ${car.model} image ${selectedImage + 1}`} fill className="object-cover" />
            </div>
            <div className="mt-3 grid grid-cols-4 gap-2">
              {car.gallery.map((img, idx) => (
                <button key={img} className="relative h-16 overflow-hidden rounded-lg border" onClick={() => setSelectedImage(idx)}>
                  <Image src={img} alt={`${car.make} gallery ${idx + 1}`} fill className="object-cover" />
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-3">
            <p className="text-xl font-bold text-brand-700">{currencyLKR(car.price)}</p>
            <p className="text-slate-700">{car.description}</p>
            <ul className="grid grid-cols-2 gap-2 text-sm text-slate-700">
              <li>Mileage: {numberFormat(car.mileage)} km</li>
              <li>Drive: {car.drivetrain}</li>
              <li>Engine: {car.specs.engine}</li>
              <li>Power: {car.specs.power}</li>
              <li>Seats: {car.specs.seats}</li>
              <li>Color: {car.specs.color}</li>
            </ul>

            <div className="rounded-xl border border-slate-200 p-4">
              <h4 className="text-lg font-semibold">Reserve Test Drive</h4>
              {submitted ? (
                <p className="mt-2 rounded-md bg-emerald-50 p-3 text-sm text-emerald-700">Thanks! Our team will confirm your test drive shortly.</p>
              ) : (
                <form action={handleSubmit} className="mt-3 space-y-3">
                  <div>
                    <input name="name" placeholder="Full name" className="w-full rounded-md border border-slate-300 px-3 py-2" />
                    {errors.name && <p className="mt-1 text-xs text-rose-600">{errors.name}</p>}
                  </div>
                  <div>
                    <input name="email" type="email" placeholder="Email" className="w-full rounded-md border border-slate-300 px-3 py-2" />
                    {errors.email && <p className="mt-1 text-xs text-rose-600">{errors.email}</p>}
                  </div>
                  <div>
                    <input name="date" type="date" className="w-full rounded-md border border-slate-300 px-3 py-2" />
                    {errors.date && <p className="mt-1 text-xs text-rose-600">{errors.date}</p>}
                  </div>
                  <button className="w-full rounded-md bg-brand-700 px-4 py-2 font-semibold text-white">Reserve</button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
