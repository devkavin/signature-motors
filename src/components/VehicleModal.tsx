'use client';

import Image from 'next/image';
import { FormEvent, useMemo, useState } from 'react';
import { Vehicle } from '@/types';
import { Modal } from '@/components/ui/Modal';
import { Input } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';

interface Errors {
  name?: string;
  email?: string;
  phone?: string;
  date?: string;
}

export function VehicleModal({ vehicle, onClose }: { vehicle: Vehicle | null; onClose: () => void }) {
  const [index, setIndex] = useState(0);
  const [success, setSuccess] = useState(false);
  const [errors, setErrors] = useState<Errors>({});

  const currentImage = useMemo(() => vehicle?.gallery[index % (vehicle?.gallery.length || 1)], [vehicle, index]);

  const validate = (formData: FormData) => {
    const nextErrors: Errors = {};
    const email = String(formData.get('email') ?? '');
    const phone = String(formData.get('phone') ?? '');
    const date = String(formData.get('date') ?? '');
    if (!String(formData.get('name') ?? '').trim()) nextErrors.name = 'Name is required.';
    if (!/^\S+@\S+\.\S+$/.test(email)) nextErrors.email = 'Enter a valid email address.';
    if (!/^\+?[0-9\s-]{9,15}$/.test(phone)) nextErrors.phone = 'Enter a valid phone number.';
    if (!date || Number.isNaN(new Date(date).getTime())) nextErrors.date = 'Select a valid test drive date.';
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    if (!validate(formData)) return;
    setSuccess(true);
    event.currentTarget.reset();
  };

  return (
    <Modal open={Boolean(vehicle)} title={vehicle ? `${vehicle.year} ${vehicle.make} ${vehicle.model}` : 'Vehicle'} onClose={onClose}>
      {vehicle && (
        <div className="space-y-5">
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              {currentImage && <Image src={currentImage} alt={`${vehicle.make} gallery image`} width={1200} height={700} className="h-56 w-full rounded-lg object-cover" />}
              <div className="flex gap-2">
                <Button variant="secondary" onClick={() => setIndex((value) => (value - 1 + vehicle.gallery.length) % vehicle.gallery.length)}>
                  Previous
                </Button>
                <Button variant="secondary" onClick={() => setIndex((value) => (value + 1) % vehicle.gallery.length)}>
                  Next
                </Button>
              </div>
            </div>
            <div className="space-y-2 text-sm text-slate-700">
              <p>{vehicle.description}</p>
              <ul className="grid grid-cols-2 gap-2">
                <li>Engine: {vehicle.specs.engine}</li>
                <li>Horsepower: {vehicle.specs.horsepower} hp</li>
                <li>Torque: {vehicle.specs.torqueNm} Nm</li>
                <li>0-100: {vehicle.specs.zeroToHundred}</li>
                <li>Seating: {vehicle.specs.seating}</li>
                <li>Color: {vehicle.specs.color}</li>
              </ul>
            </div>
          </div>

          <form className="space-y-3 rounded-lg border border-slate-200 p-4" onSubmit={handleSubmit} noValidate>
            <h4 className="text-base font-semibold text-slate-900">Reserve Test Drive</h4>
            {success && <p className="rounded bg-emerald-50 p-2 text-sm text-emerald-700">Request submitted successfully. We will contact you shortly.</p>}
            <label className="block text-sm font-medium text-slate-700">
              Full Name
              <Input name="name" error={errors.name} aria-describedby={errors.name ? 'error-name' : undefined} />
              {errors.name && <span id="error-name" className="text-xs text-red-600">{errors.name}</span>}
            </label>
            <label className="block text-sm font-medium text-slate-700">
              Email
              <Input name="email" type="email" error={errors.email} aria-describedby={errors.email ? 'error-email' : undefined} />
              {errors.email && <span id="error-email" className="text-xs text-red-600">{errors.email}</span>}
            </label>
            <label className="block text-sm font-medium text-slate-700">
              Phone
              <Input name="phone" error={errors.phone} aria-describedby={errors.phone ? 'error-phone' : undefined} />
              {errors.phone && <span id="error-phone" className="text-xs text-red-600">{errors.phone}</span>}
            </label>
            <label className="block text-sm font-medium text-slate-700">
              Preferred Date
              <Input name="date" type="date" error={errors.date} aria-describedby={errors.date ? 'error-date' : undefined} />
              {errors.date && <span id="error-date" className="text-xs text-red-600">{errors.date}</span>}
            </label>
            <Button type="submit">Submit Request</Button>
          </form>
        </div>
      )}
    </Modal>
  );
}
