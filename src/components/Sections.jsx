import { CheckCircle, SteeringWheel, Shield, Clock, Car, MapPin, GraduationCap, MessageSquare } from 'lucide-react';

export function Features() {
  const items = [
    { icon: Shield, title: 'Safety First', desc: 'State-certified instructors with dual-control vehicles.' },
    { icon: Clock, title: 'Flexible Scheduling', desc: 'Evening and weekend lessons across Louisiana.' },
    { icon: Car, title: 'Road-Test Prep', desc: 'Targeted practice to pass your test with confidence.' },
    { icon: MapPin, title: 'Pickup Options', desc: 'Convenient pickup/drop-off in select areas.' },
  ];
  return (
    <section id="services" className="bg-white py-20 text-slate-900">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Why Choose Geaux Driving</h2>
          <p className="mt-2 text-slate-600">Professional, patient, and committed to your success on Louisiana roads.</p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((i) => (
            <div key={i.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <i.icon className="h-8 w-8 text-amber-500" />
              <h3 className="mt-4 text-lg font-semibold">{i.title}</h3>
              <p className="mt-1 text-sm text-slate-600">{i.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Pricing() {
  const tiers = [
    { name: 'Starter', price: '$149', features: ['2-hour lesson', 'Vehicle basics', 'Instructor feedback'] },
    { name: 'Standard', price: '$399', features: ['6 hours behind-the-wheel', 'Zutobi study plan', 'Road test checklist'] },
    { name: 'Premium', price: '$749', features: ['12 hours + road-test prep', 'Pickup & drop-off', 'Priority scheduling'] },
  ];
  return (
    <section id="pricing" className="bg-slate-50 py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Transparent Pricing</h2>
          <p className="mt-2 text-slate-600">Choose the plan that fits your goals and timeline.</p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {tiers.map((t) => (
            <div key={t.name} className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
              <div className="text-sm uppercase tracking-widest text-slate-500">{t.name}</div>
              <div className="mt-2 text-4xl font-bold">{t.price}</div>
              <ul className="mt-6 space-y-2 text-sm text-slate-600">
                {t.features.map((f) => (
                  <li key={f} className="flex items-center gap-2"><CheckCircle className="h-5 w-5 text-amber-500" /> {f}</li>
                ))}
              </ul>
              <button className="mt-6 w-full rounded-lg bg-slate-900 px-4 py-2 font-semibold text-white hover:bg-slate-800">Select</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Instructors() {
  const people = [
    { name: 'Lisa Guillen', role: 'Chief Visionary Officer', bio: 'Committed to safe, confident drivers across Louisiana.' },
    { name: 'Alex Martin', role: 'Lead Instructor', bio: 'Patient and thorough — specializes in first-time drivers.' },
    { name: 'Jordan Lee', role: 'Instructor', bio: 'Expert in road-test prep and highway confidence.' },
  ];
  return (
    <section id="instructors" className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Meet Our Instructors</h2>
          <p className="mt-2 text-slate-600">Certified, friendly, and focused on your success.</p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {people.map((p) => (
            <div key={p.name} className="rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm">
              <div className="mx-auto h-24 w-24 rounded-full bg-slate-100" />
              <h3 className="mt-4 text-lg font-semibold">{p.name}</h3>
              <div className="text-sm text-amber-600">{p.role}</div>
              <p className="mt-2 text-sm text-slate-600">{p.bio}</p>
              <a href="#" className="mt-3 inline-block text-sm font-semibold text-slate-900 underline">View Profile</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function FAQ() {
  const qas = [
    { q: 'Do you pick up students?', a: 'Yes, we offer pickup in select areas. Add your address during booking.' },
    { q: 'Do you help with the road test?', a: 'Absolutely. We offer targeted prep sessions and checklists.' },
    { q: 'How do I access Zutobi?', a: 'Use the portal button on our site or the link included in your emails.' },
    { q: 'What payments do you accept?', a: 'QuickBooks-powered checkout accepts cards, Apple Pay, and Google Pay.' },
  ];
  return (
    <section id="faq" className="bg-slate-50 py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Frequently Asked Questions</h2>
          <p className="mt-2 text-slate-600">Clear answers for a smooth start.</p>
        </div>
        <div className="mx-auto max-w-3xl divide-y divide-slate-200 rounded-2xl border border-slate-200 bg-white">
          {qas.map((i, idx) => (
            <details key={i.q} className="group p-6 open:bg-slate-50">
              <summary className="flex cursor-pointer list-none items-center justify-between text-left font-medium text-slate-900">
                <span>{i.q}</span>
                <span className="text-amber-600">{idx % 2 ? '−' : '+'}</span>
              </summary>
              <p className="mt-3 text-sm text-slate-600">{i.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Contact() {
  return (
    <section id="contact" className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Let’s Talk</h2>
          <p className="mt-2 text-slate-600">Questions about lessons, scheduling, or packages? Send a message.</p>
        </div>
        <form id="contact-form" className="mx-auto grid max-w-3xl gap-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <input className="rounded-lg border border-slate-300 px-4 py-3" placeholder="Full Name" required />
            <input type="email" className="rounded-lg border border-slate-300 px-4 py-3" placeholder="Email" required />
          </div>
          <input className="rounded-lg border border-slate-300 px-4 py-3" placeholder="Subject" />
          <textarea rows={5} className="rounded-lg border border-slate-300 px-4 py-3" placeholder="How can we help?" />
          <button className="mt-2 rounded-lg bg-slate-900 px-6 py-3 font-semibold text-white hover:bg-slate-800">Send Message</button>
        </form>
      </div>
    </section>
  );
}
