import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative h-[85vh] w-full overflow-hidden" aria-label="Hero">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/Gt5HUob8aGDxOUep/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Gradient overlays for depth without blocking interactions */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(600px_300px_at_10%_10%,rgba(16,185,129,0.25),transparent_60%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(800px_400px_at_90%_20%,rgba(59,130,246,0.15),transparent_60%)]" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/20 via-black/30 to-[#0a0f14]" />

      <div className="relative z-10 h-full flex items-center">
        <div className="mx-auto max-w-7xl px-6 w-full">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl sm:text-6xl md:text-7xl font-semibold tracking-tight text-white drop-shadow-[0_0_30px_rgba(16,185,129,0.15)]"
          >
            Economic Intelligence, Reimagined
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="mt-6 max-w-2xl text-base sm:text-lg text-white/70"
          >
            A floating, glass-like workspace for live markets, macro signals, and curated news — designed for clarity in a complex world.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="mt-10 flex flex-wrap gap-3"
          >
            <button className="rounded-xl bg-emerald-400/90 hover:bg-emerald-400 text-slate-900 font-medium px-5 py-3 shadow-lg shadow-emerald-500/20 ring-1 ring-emerald-300/50">
              Explore Dashboard
            </button>
            <button className="rounded-xl bg-white/10 hover:bg-white/15 text-white font-medium px-5 py-3 backdrop-blur-xl ring-1 ring-white/15">
              Live Macro Feed
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
