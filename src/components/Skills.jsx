import { motion } from 'framer-motion'

const skills = [
  { name: 'React', level: 90 },
  { name: 'Tailwind CSS', level: 90 },
  { name: 'JavaScript', level: 85 },
  { name: 'TypeScript', level: 70 },
  { name: 'Node.js', level: 65 },
  { name: 'MongoDB', level: 60 },
]

export default function Skills() {
  return (
    <section id="skills" className="py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-10">Skills</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {skills.map((s, i) => (
            <div key={s.name} className="rounded-xl border border-white/10 bg-white/[0.02] p-5">
              <div className="flex items-center justify-between">
                <p className="text-slate-200">{s.name}</p>
                <p className="text-slate-400 text-sm">{s.level}%</p>
              </div>
              <div className="mt-3 h-2 rounded-full bg-white/10 overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${s.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: i * 0.05 }}
                  className="h-full bg-gradient-to-r from-sky-400 to-cyan-300"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
