import { useState } from 'react';

const API_BASE = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000';

export default function BookingModal({ open, onClose }) {
  const [form, setForm] = useState({
    student_name: '',
    email: '',
    phone: '',
    service: 'Behind-the-Wheel',
    instructor: '',
    date: '',
    time: '',
    pickup_location: '',
    notes: ''
  });
  const [status, setStatus] = useState(null);

  const update = (k, v) => setForm((s) => ({ ...s, [k]: v }));

  const submit = async (e) => {
    e.preventDefault();
    setStatus('Submitting...');
    try {
      const res = await fetch(`${API_BASE}/api/bookings`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.detail || 'Error');
      setStatus('Booked! Check your email for confirmation.');
    } catch (err) {
      setStatus('Something went wrong. Please try again.');
    }
  };

  if (!open) return null;
  return (
    <div className="fixed inset-0 z-[60] grid place-items-center bg-black/60 p-4">
      <div className="w-full max-w-2xl rounded-2xl border border-white/10 bg-slate-900 p-6 text-white shadow-xl">
        <div className="mb-4 flex items-center justify-between">
          <h3 className="text-xl font-semibold">Book Your Driving Lesson</h3>
          <button onClick={onClose} className="rounded-md border border-white/10 px-3 py-1 text-sm text-white/80 hover:bg-white/5">Close</button>
        </div>
        <form onSubmit={submit} className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          <input className="rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/50" placeholder="Student Name" value={form.student_name} onChange={(e)=>update('student_name', e.target.value)} required />
          <input type="email" className="rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/50" placeholder="Email" value={form.email} onChange={(e)=>update('email', e.target.value)} required />
          <input className="rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/50" placeholder="Phone" value={form.phone} onChange={(e)=>update('phone', e.target.value)} required />
          <select className="rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white" value={form.service} onChange={(e)=>update('service', e.target.value)}>
            <option>Behind-the-Wheel</option>
            <option>Road Test Prep</option>
            <option>Teen Driver Package</option>
            <option>Adult Refresher</option>
          </select>
          <input className="rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/50" placeholder="Preferred Instructor (optional)" value={form.instructor} onChange={(e)=>update('instructor', e.target.value)} />
          <input type="date" className="rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white" value={form.date} onChange={(e)=>update('date', e.target.value)} required />
          <input type="time" className="rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white" value={form.time} onChange={(e)=>update('time', e.target.value)} required />
          <input className="rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/50" placeholder="Pickup Location (optional)" value={form.pickup_location} onChange={(e)=>update('pickup_location', e.target.value)} />
          <textarea className="rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/50 sm:col-span-2" placeholder="Notes (optional)" value={form.notes} onChange={(e)=>update('notes', e.target.value)} />
          <button className="sm:col-span-2 mt-2 rounded-lg bg-amber-400 px-6 py-3 font-semibold text-slate-900 hover:bg-amber-300">Submit Booking</button>
        </form>
        {status && <p className="mt-3 text-sm text-amber-200">{status}</p>}
      </div>
    </div>
  );
}
