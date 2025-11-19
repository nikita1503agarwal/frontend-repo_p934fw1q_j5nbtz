import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-8 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="py-24 sm:py-32"
        >
          <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-cyan-300/80 bg-cyan-400/10 ring-1 ring-cyan-400/20 rounded-full px-3 py-1">
            Available for opportunities
          </p>
          <h1 className="mt-6 text-4xl sm:text-6xl font-bold tracking-tight text-white">
            Hi, I'm Dharshan — I build modern web experiences.
          </h1>
          <p className="mt-6 text-lg text-slate-300 max-w-xl">
            Frontend-focused developer crafting interactive, performant and accessible interfaces with React, Tailwind and modern tooling.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#projects" className="px-5 py-2.5 rounded-lg bg-white text-slate-900 font-medium hover:bg-slate-100 transition">View Projects</a>
            <a href="#contact" className="px-5 py-2.5 rounded-lg bg-sky-500/20 text-sky-300 ring-1 ring-sky-400/30 hover:bg-sky-500/30 transition">Get in touch</a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
