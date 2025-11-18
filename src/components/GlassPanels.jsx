import { TrendingUp, Newspaper, BarChart3, ArrowRight, Clock } from "lucide-react";
import { motion } from "framer-motion";

function Panel({ title, icon: Icon, children, href }) {
  return (
    <motion.a
      href={href || "#"}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
      className="group relative flex flex-col rounded-2xl bg-white/5 backdrop-blur-2xl ring-1 ring-white/10 shadow-[0_0_60px_rgba(0,0,0,0.35)] hover:shadow-[0_0_80px_rgba(16,185,129,0.2)] overflow-hidden"
    >
      <div className="pointer-events-none absolute -inset-20 bg-[radial-gradient(400px_200px_at_0%_0%,rgba(16,185,129,0.15),transparent_60%)] opacity-0 group-hover:opacity-100 transition-opacity" />
      <div className="flex items-center gap-3 px-5 pt-5">
        <div className="h-10 w-10 rounded-xl bg-emerald-400/20 ring-1 ring-emerald-300/30 grid place-items-center">
          <Icon className="h-5 w-5 text-emerald-300" />
        </div>
        <h3 className="text-white/90 font-semibold tracking-tight">{title}</h3>
        <ArrowRight className="ml-auto h-4 w-4 text-white/40 group-hover:text-white/60 transition" />
      </div>
      <div className="px-5 pb-5 pt-3 text-sm text-white/70">
        {children}
      </div>
    </motion.a>
  );
}

export default function GlassPanels() {
  return (
    <section className="relative bg-gradient-to-b from-transparent to-[#070b10]">
      <div className="mx-auto max-w-7xl px-6 -mt-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Panel title="Market Pulse" icon={TrendingUp} href="#markets">
            <div className="flex items-center justify-between text-white/70">
              <span>S&P 500</span>
              <span className="text-emerald-300 font-medium">+0.84%</span>
            </div>
            <div className="mt-2 h-16 rounded-lg bg-gradient-to-b from-emerald-400/20 to-emerald-500/5 ring-1 ring-emerald-300/20" />
            <p className="mt-3 text-xs text-white/50">Updated <span className="inline-flex items-center gap-1"><Clock className="h-3 w-3" /> 2m ago</span></p>
          </Panel>

          <Panel title="Macro Signals" icon={BarChart3} href="#analytics">
            <ul className="space-y-2">
              <li className="flex items-center justify-between"><span>Inflation YoY</span><span className="text-emerald-300">3.2%</span></li>
              <li className="flex items-center justify-between"><span>Unemployment</span><span className="text-white/70">4.0%</span></li>
              <li className="flex items-center justify-between"><span>GDP Nowcast</span><span className="text-emerald-300">2.1%</span></li>
            </ul>
          </Panel>

          <Panel title="Curated News" icon={Newspaper} href="#news">
            <div className="space-y-3">
              <div className="rounded-lg bg-white/5 ring-1 ring-white/10 px-3 py-2 hover:bg-white/7 transition">
                <p className="text-white/80 text-sm">Central banks signal cautious stance amid slowing growth</p>
              </div>
              <div className="rounded-lg bg-white/5 ring-1 ring-white/10 px-3 py-2 hover:bg-white/7 transition">
                <p className="text-white/80 text-sm">Energy prices ease as supply concerns fade</p>
              </div>
              <div className="rounded-lg bg-white/5 ring-1 ring-white/10 px-3 py-2 hover:bg-white/7 transition">
                <p className="text-white/80 text-sm">Tech earnings beat estimates, lifting risk sentiment</p>
              </div>
            </div>
          </Panel>
        </div>
      </div>
    </section>
  );
}
