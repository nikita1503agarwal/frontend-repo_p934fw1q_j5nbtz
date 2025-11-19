import { motion } from 'framer-motion'
import { Github, ExternalLink } from 'lucide-react'

const items = [
  {
    title: 'Portfolio',
    desc: 'The website you\'re viewing — interactive hero, modern UI and responsive design.',
    tech: ['React', 'Tailwind', 'Spline'],
    links: {
      github: 'https://github.com/dharshan-sp/Portfolio',
      live: 'https://dharshan-sp.github.io/Portfolio/',
    },
  },
  {
    title: 'Project Two',
    desc: 'Example project slot — replace with a real one you\'d like to feature.',
    tech: ['React', 'Express', 'MongoDB'],
    links: {
      github: 'https://github.com/dharshan-sp',
      live: '#',
    },
  },
  {
    title: 'Project Three',
    desc: 'Another highlight — quick summary, what makes it interesting, and tech used.',
    tech: ['Next.js', 'Tailwind'],
    links: {
      github: 'https://github.com/dharshan-sp',
      live: '#',
    },
  },
]

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 sm:py-32">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(56,189,248,0.08),transparent_60%)]" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Featured projects</h2>
          <a href="https://github.com/dharshan-sp" target="_blank" rel="noreferrer" className="text-sky-300 hover:text-white transition">View all</a>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="group rounded-xl border border-white/10 bg-white/[0.02] p-5 hover:bg-white/[0.04] transition"
            >
              <div className="aspect-video rounded-lg bg-gradient-to-br from-slate-700 to-slate-800 mb-4" />
              <h3 className="text-lg font-semibold text-white">{p.title}</h3>
              <p className="mt-1 text-sm text-slate-300">{p.desc}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {p.tech.map(t => (
                  <span key={t} className="text-xs text-sky-300/80 bg-sky-400/10 ring-1 ring-sky-400/20 px-2 py-0.5 rounded-full">{t}</span>
                ))}
              </div>
              <div className="mt-4 flex items-center gap-3">
                <a href={p.links.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-slate-300 hover:text-white"><Github size={16}/>Code</a>
                <a href={p.links.live} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-slate-300 hover:text-white"><ExternalLink size={16}/>Live</a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
