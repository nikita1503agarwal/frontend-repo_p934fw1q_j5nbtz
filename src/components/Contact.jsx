import { useState } from 'react'

export default function Contact() {
  const [status, setStatus] = useState(null)

  const onSubmit = async (e) => {
    e.preventDefault()
    setStatus('Sending...')

    try {
      const base = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
      const res = await fetch(`${base}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(Object.fromEntries(new FormData(e.currentTarget)))
      })

      if (res.ok) setStatus('Thanks! I will get back to you soon.')
      else setStatus('Something went wrong. Please try again later.')
    } catch (err) {
      setStatus('Unable to send right now.')
    }
  }

  return (
    <section id="contact" className="py-24 sm:py-32">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8">Contact</h2>
        <form onSubmit={onSubmit} className="rounded-xl border border-white/10 bg-white/[0.02] p-6">
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm text-slate-300 mb-1">Name</label>
              <input name="name" required className="w-full px-3 py-2 rounded bg-white/5 border border-white/10 text-white outline-none focus:ring-2 focus:ring-sky-400" />
            </div>
            <div>
              <label className="block text-sm text-slate-300 mb-1">Email</label>
              <input name="email" type="email" required className="w-full px-3 py-2 rounded bg-white/5 border border-white/10 text-white outline-none focus:ring-2 focus:ring-sky-400" />
            </div>
          </div>
          <div className="mt-4">
            <label className="block text-sm text-slate-300 mb-1">Message</label>
            <textarea name="message" rows={4} required className="w-full px-3 py-2 rounded bg-white/5 border border-white/10 text-white outline-none focus:ring-2 focus:ring-sky-400" />
          </div>
          <div className="mt-6 flex items-center gap-4">
            <button className="px-5 py-2.5 rounded-lg bg-white text-slate-900 font-medium hover:bg-slate-100 transition" type="submit">Send</button>
            {status && <p className="text-slate-300 text-sm">{status}</p>}
          </div>
        </form>
      </div>
    </section>
  )
}
