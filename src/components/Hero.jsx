import Spline from '@splinetool/react-spline';

export default function Hero({ onBook }) {
  return (
    <section className="relative min-h-[80vh] w-full overflow-hidden bg-slate-950 text-white">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/m8wpIQzXWhEh9Yek/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Gradient overlays for contrast */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-950/30 to-slate-950/90" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(17,24,39,0)_0%,rgba(17,24,39,0.6)_60%,rgba(17,24,39,0.95)_100%)]" />

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center justify-center px-6 py-24 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-widest text-white/80 backdrop-blur">
          Trusted. Safe. Louisiana Licensed.
        </div>
        <h1 className="mt-6 text-4xl font-bold leading-tight sm:text-6xl">
          Geaux Driving
          <span className="block text-lg font-medium text-amber-300 sm:text-2xl">Premium Driving Instruction in Louisiana</span>
        </h1>
        <p className="mt-4 max-w-2xl text-white/80">
          Learn with state-certified instructors who put safety first. Flexible scheduling, road-test prep, and modern vehicles.
        </p>
        <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row">
          <button onClick={onBook} className="rounded-lg bg-amber-400 px-6 py-3 font-semibold text-slate-900 shadow-lg shadow-amber-400/20 transition hover:translate-y-[-1px] hover:bg-amber-300">
            Book Your Driving Lesson
          </button>
          <a href="#zutobi" className="rounded-lg border border-white/20 bg-white/5 px-6 py-3 font-semibold text-white transition hover:bg-white/10">Access Zutobi Portal</a>
          <a href="#contact" className="rounded-lg border border-white/20 bg-white/5 px-6 py-3 font-semibold text-white transition hover:bg-white/10">Contact Us</a>
        </div>
      </div>
    </section>
  );
}
