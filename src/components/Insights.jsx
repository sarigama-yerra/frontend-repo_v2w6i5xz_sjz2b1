import { LineChart, Sparkles, Brain, Shield } from "lucide-react";

export default function Insights() {
  return (
    <section id="insights" className="relative py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl sm:text-4xl font-semibold text-white">Designed for clarity. Built for speed.</h2>
            <p className="text-white/70">A modular, floating workspace that organizes macro, markets, and news into distraction-free panels. Subtle depth, crisp typography, and real-time motion make complex information effortless to scan.</p>
            <ul className="grid sm:grid-cols-2 gap-4 text-white/80">
              <li className="flex items-start gap-3">
                <div className="h-9 w-9 rounded-lg bg-white/5 ring-1 ring-white/10 grid place-items-center text-emerald-300"><LineChart className="h-5 w-5" /></div>
                <div>
                  <p className="font-medium">Pro-grade charts</p>
                  <p className="text-sm text-white/60">Smooth, readable visuals designed for fast decision-making.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="h-9 w-9 rounded-lg bg-white/5 ring-1 ring-white/10 grid place-items-center text-emerald-300"><Brain className="h-5 w-5" /></div>
                <div>
                  <p className="font-medium">Macro intelligence</p>
                  <p className="text-sm text-white/60">Signals, trends, and drivers surfaced with context.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="h-9 w-9 rounded-lg bg-white/5 ring-1 ring-white/10 grid place-items-center text-emerald-300"><Shield className="h-5 w-5" /></div>
                <div>
                  <p className="font-medium">Privacy-first</p>
                  <p className="text-sm text-white/60">No clutter, no noise — your focus stays on insights.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="h-9 w-9 rounded-lg bg-white/5 ring-1 ring-white/10 grid place-items-center text-emerald-300"><Sparkles className="h-5 w-5" /></div>
                <div>
                  <p className="font-medium">Glass aesthetic</p>
                  <p className="text-sm text-white/60">Floating panels with soft reflections and depth.</p>
                </div>
              </li>
            </ul>
          </div>
          <div className="relative">
            <div className="absolute -inset-10 bg-[radial-gradient(400px_200px_at_90%_10%,rgba(16,185,129,0.15),transparent_60%)]" />
            <div className="relative rounded-3xl p-6 bg-white/5 ring-1 ring-white/10 backdrop-blur-2xl shadow-[0_0_80px_rgba(16,185,129,0.15)]">
              <div className="grid grid-cols-3 gap-4">
                {Array.from({ length: 9 }).map((_, i) => (
                  <div key={i} className="aspect-[4/3] rounded-xl bg-gradient-to-b from-white/10 to-white/0 ring-1 ring-white/10" />
                ))}
              </div>
              <div className="mt-4 h-24 rounded-xl bg-gradient-to-br from-emerald-400/10 to-emerald-500/5 ring-1 ring-emerald-300/20" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
