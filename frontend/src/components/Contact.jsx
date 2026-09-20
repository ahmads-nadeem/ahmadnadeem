import { useState } from 'react'
import { useInView } from '../hooks/useInView'

const contactInfo = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    label: 'Email',
    value: 'ahmadnadeembutt19@gmail.com',
    href: 'https://mail.google.com/mail/?view=cm&fs=1&to=ahmadnadeembutt19@gmail.com&su=Project%20Inquiry&body=Hello%20Ahmad,%0A%0AI%20would%20like%20to...',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057c.002.022.015.043.03.056a19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03z" />
      </svg>
    ),
    label: 'Discord',
    value: 'yourhandle#0000',
    href: '#',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
    label: 'LinkedIn',
    value: 'https://www.linkedin.com/in/muhammad-ahmad-nadeem-9501b9386',
    href: 'https://www.linkedin.com/in/muhammad-ahmad-nadeem-9501b9386',
  },
]

export default function Contact() {
  const [ref, inView] = useInView()
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [status, setStatus] = useState('idle') // idle | sending | success | error

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = async e => {
    e.preventDefault()
    setStatus('sending')

    // When your REST API is ready, replace this with:
    // await fetch('https://your-api.com/contact', { method: 'POST', body: JSON.stringify(form), ... })
    await new Promise(r => setTimeout(r, 1200))
    setStatus('success')
    setForm({ name: '', email: '', subject: '', message: '' })
    setTimeout(() => setStatus('idle'), 5000)
  }

  return (
    <section id="contact" className="py-24 bg-dark-800/40 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(32,169,161,0.07)_0%,_transparent_60%)]" />

      <div ref={ref} className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <p className="section-subheading">Let's Talk</p>
          <h2 className="section-heading">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            Have a project in mind or just want to say hi? Drop me a message and I'll get back to you as soon as possible.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact info */}
          <div
            className={`lg:col-span-2 transition-all duration-700 ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}
          >
            <h3 className="text-white font-bold text-xl mb-2">Let's build something together</h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-8">
              I'm currently open to new opportunities. Whether you have a project, a question, or just want to connect — my inbox is always open.
            </p>

            <div className="space-y-5">
              {contactInfo.map(info => (
                <a
                  key={info.label}
                  href={info.href}
                  target="_blank"
                  className="flex items-center gap-4 p-4 bg-dark-700/50 border border-dark-500 rounded-xl hover:border-primary-500/40 hover:bg-dark-700 transition-all group"
                >
                  <div className="w-10 h-10 flex items-center justify-center bg-primary-500/10 border border-primary-500/30 rounded-lg text-primary-400 group-hover:bg-primary-500/20 transition-colors flex-shrink-0">
                    {info.icon}
                  </div>
                  <div>
                    <div className="text-gray-500 text-xs font-mono">{info.label}</div>
                    <div className="text-gray-300 text-sm font-medium">{info.value}</div>
                  </div>
                </a>
              ))}
            </div>

            {/* Social links */}
            <div className="flex gap-3 mt-8">
              {[
                { label: 'GitHub', href: 'https://github.com/ahmads-nadeem/', icon: <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" /> },
                { label: 'LinkedIn', href: 'www.linkedin.com/in/muhammad-ahmad-nadeem-9501b9386', icon: <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /> },
              ].map(s => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="w-10 h-10 flex items-center justify-center bg-dark-700 border border-dark-500 rounded-lg text-gray-400 hover:text-primary-400 hover:border-primary-500/50 transition-all"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    {s.icon}
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Form */}
          <div
            className={`lg:col-span-3 transition-all duration-700 delay-200 ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}
          >
            {status === 'success' ? (
              <div className="h-full flex flex-col items-center justify-center text-center p-12 bg-dark-700 border border-primary-500/30 rounded-2xl">
                <div className="w-16 h-16 bg-primary-500/10 border border-primary-500/30 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-primary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-white font-bold text-xl mb-2">Message Sent!</h3>
                <p className="text-gray-400">Thanks for reaching out. I'll get back to you soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-dark-700 border border-dark-500 rounded-2xl p-8 space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-gray-400 text-sm mb-1.5 font-medium">Name</label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      className="w-full bg-dark-800 border border-dark-500 rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-primary-500/60 transition-colors text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-400 text-sm mb-1.5 font-medium">Email</label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      className="w-full bg-dark-800 border border-dark-500 rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-primary-500/60 transition-colors text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-gray-400 text-sm mb-1.5 font-medium">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    required
                    value={form.subject}
                    onChange={handleChange}
                    placeholder="Project Inquiry"
                    className="w-full bg-dark-800 border border-dark-500 rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-primary-500/60 transition-colors text-sm"
                  />
                </div>

                <div>
                  <label className="block text-gray-400 text-sm mb-1.5 font-medium">Message</label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project..."
                    className="w-full bg-dark-800 border border-dark-500 rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-primary-500/60 transition-colors text-sm resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="w-full btn-primary justify-center py-3 disabled:opacity-60 disabled:cursor-not-allowed disabled:transform-none"
                >
                  {status === 'sending' ? (
                    <>
                      <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                      </svg>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
