import { useState } from 'react'
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-slate-900/60 bg-slate-900/70 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#home" className="text-lg sm:text-xl font-semibold tracking-tight text-white">
            Dharshan S P
          </a>

          <nav className="hidden md:flex items-center gap-8 text-sm text-slate-200">
            <a href="#projects" className="hover:text-white transition-colors">Projects</a>
            <a href="#skills" className="hover:text-white transition-colors">Skills</a>
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
            <div className="ml-4 flex items-center gap-3">
              <a href="https://github.com/dharshan-sp" target="_blank" rel="noreferrer" className="p-2 rounded-lg hover:bg-white/10"><Github size={18} /></a>
              <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" className="p-2 rounded-lg hover:bg-white/10"><Linkedin size={18} /></a>
              <a href="#contact" className="p-2 rounded-lg hover:bg-white/10"><Mail size={18} /></a>
            </div>
          </nav>

          <button onClick={() => setOpen(!open)} className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-slate-200 hover:bg-white/10">
            {open ? <X /> : <Menu />}
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col gap-2 text-slate-200">
              <a href="#projects" onClick={() => setOpen(false)} className="px-3 py-2 rounded hover:bg-white/10">Projects</a>
              <a href="#skills" onClick={() => setOpen(false)} className="px-3 py-2 rounded hover:bg-white/10">Skills</a>
              <a href="#about" onClick={() => setOpen(false)} className="px-3 py-2 rounded hover:bg-white/10">About</a>
              <a href="#contact" onClick={() => setOpen(false)} className="px-3 py-2 rounded hover:bg-white/10">Contact</a>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
