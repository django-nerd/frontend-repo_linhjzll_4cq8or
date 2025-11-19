import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import { Features, Pricing, Instructors, FAQ, Contact } from './components/Sections';
import BookingModal from './components/BookingModal';

function App() {
  const [open, setOpen] = useState(false);
  return (
    <div className="min-h-screen bg-slate-900">
      <Navbar onBook={() => setOpen(true)} />
      <main className="pt-16">
        <Hero onBook={() => setOpen(true)} />
        <Features />
        <Pricing />
        <Instructors />
        <FAQ />
        <Contact />
      </main>
      <footer className="border-t border-white/10 bg-slate-950 text-white">
        <div className="mx-auto max-w-6xl px-6 py-10">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-sm text-white/60">© {new Date().getFullYear()} Geaux Driving — All Rights Reserved</p>
            <div className="flex items-center gap-4 text-sm text-white/80">
              <a href="#" className="hover:text-white">Refund Policy</a>
              <a href="#" className="hover:text-white">Cancellation Policy</a>
              <a href="#" className="hover:text-white">Privacy Policy</a>
            </div>
          </div>
        </div>
      </footer>
      <BookingModal open={open} onClose={() => setOpen(false)} />
    </div>
  );
}

export default App
