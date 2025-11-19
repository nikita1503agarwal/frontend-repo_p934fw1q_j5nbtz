import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-slate-900 text-slate-100">
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <Skills />
        <section id="about" className="py-24 sm:py-32">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">About</h2>
            <p className="text-slate-300 leading-relaxed">
              I\'m a frontend developer who loves building interactive, accessible and visually polished interfaces.
              I enjoy working with React, Tailwind and modern tooling to craft fast, delightful web apps.
            </p>
          </div>
        </section>
        <Contact />
      </main>
      <footer className="border-t border-white/10 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-sm text-slate-400 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p>© {new Date().getFullYear()} Dharshan S P. All rights reserved.</p>
          <a href="/test" className="hover:text-white">System status</a>
        </div>
      </footer>
    </div>
  )
}

export default App
