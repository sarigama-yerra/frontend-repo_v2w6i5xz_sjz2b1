import { Menu, Search, Globe2 } from "lucide-react";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-30">
      <div className="mx-auto max-w-7xl px-6 py-4">
        <div className="flex items-center justify-between rounded-2xl bg-white/5 backdrop-blur-xl ring-1 ring-white/10 shadow-[0_0_40px_rgba(16,185,129,0.1)]">
          <div className="flex items-center gap-3 pl-4 py-3">
            <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-emerald-400/80 to-teal-500/80 ring-2 ring-emerald-300/40 shadow-lg shadow-emerald-500/20 grid place-items-center">
              <Globe2 className="h-5 w-5 text-slate-900" />
            </div>
            <span className="text-white/90 font-semibold tracking-tight">AetherEconomy</span>
          </div>
          <div className="hidden md:flex items-center gap-6 text-sm text-white/70">
            <a href="#analytics" className="hover:text-white transition">Analytics</a>
            <a href="#markets" className="hover:text-white transition">Markets</a>
            <a href="#news" className="hover:text-white transition">News</a>
            <a href="#insights" className="hover:text-white transition">Insights</a>
          </div>
          <div className="flex items-center gap-2 pr-4">
            <div className="hidden sm:flex items-center gap-2 rounded-xl bg-white/5 px-3 py-2 ring-1 ring-white/10">
              <Search className="h-4 w-4 text-white/60" />
              <input className="bg-transparent outline-none placeholder:text-white/40 text-white text-sm w-48" placeholder="Search economies, tickers" />
            </div>
            <button className="md:hidden p-2 text-white/70 hover:text-white">
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
