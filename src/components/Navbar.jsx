import { Menu } from 'lucide-react';

export default function Navbar({ onBook }) {
  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-slate-950/70 backdrop-blur border-b border-white/10">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3">
          <div className="grid h-10 w-10 place-items-center rounded-md bg-gradient-to-br from-slate-800 to-slate-700 border border-white/10">
            <div className="h-3 w-6 rounded-b-full bg-amber-400" />
          </div>
          <div className="text-left">
            <div className="text-sm uppercase tracking-widest text-white/80">Geaux</div>
            <div className="-mt-1 text-xl font-extrabold text-white">Driving</div>
          </div>
        </a>

        {/* Nav */}
        <nav className="hidden items-center gap-6 text-sm text-white/80 md:flex">
          <a href="#services" className="hover:text-white">Services</a>
          <a href="#pricing" className="hover:text-white">Pricing</a>
          <a href="#packages" className="hover:text-white">Packages</a>
          <a href="#instructors" className="hover:text-white">Instructors</a>
          <a href="#faq" className="hover:text-white">FAQ</a>
          <a href="#blog" className="hover:text-white">Blog</a>
          <a href="#contact" className="hover:text-white">Contact</a>
        </nav>

        <div className="flex items-center gap-3">
          <button onClick={onBook} className="hidden rounded-lg bg-amber-400 px-4 py-2 text-sm font-semibold text-slate-900 shadow md:inline-flex hover:bg-amber-300">Book Lesson</button>
          <button className="inline-flex items-center gap-2 rounded-lg border border-white/15 px-3 py-2 text-white/80 md:hidden">
            <Menu size={18} /> Menu
          </button>
        </div>
      </div>
    </header>
  );
}
