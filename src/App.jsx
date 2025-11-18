import Navbar from './components/Navbar'
import Hero from './components/Hero'
import GlassPanels from './components/GlassPanels'
import Insights from './components/Insights'

function App() {
  return (
    <div className="min-h-screen bg-[#05080b] text-white">
      <Navbar />
      <Hero />
      <GlassPanels />
      <Insights />
      <footer className="relative py-12">
        <div className="mx-auto max-w-7xl px-6 flex flex-col sm:flex-row items-center justify-between gap-6">
          <p className="text-white/50 text-sm">© {new Date().getFullYear()} AetherEconomy — crafted for clarity.</p>
          <div className="flex items-center gap-4 text-white/60 text-sm">
            <a className="hover:text-white" href="#">Privacy</a>
            <a className="hover:text-white" href="#">Terms</a>
            <a className="hover:text-white" href="#">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
