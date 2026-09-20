import { useEffect, useState } from 'react'

const roles = ['Full Stack Developer', 'React Developer', 'Node.js Engineer', 'API Architect']

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [typing, setTyping] = useState(true)

  useEffect(() => {
    const current = roles[roleIndex]
    let timeout

    if (typing) {
      if (displayed.length < current.length) {
        timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80)
      } else {
        timeout = setTimeout(() => setTyping(false), 2000)
      }
    } else {
      if (displayed.length > 0) {
        timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40)
      } else {
        setRoleIndex(i => (i + 1) % roles.length)
        setTyping(true)
      }
    }

    return () => clearTimeout(timeout)
  }, [displayed, typing, roleIndex])

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0 bg-dark-900" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(32,169,161,0.12)_0%,_transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(20,30,54,0.8)_0%,_transparent_60%)]" />

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Floating orbs */}
      <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-primary-500/10 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-1/4 left-1/3 w-48 h-48 bg-teal-500/8 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1.5s' }} />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="animate-slide-up">
            <div className="inline-flex items-center gap-2 bg-primary-500/10 border border-primary-500/30 rounded-full px-4 py-1.5 mb-6">
              <span className="w-2 h-2 rounded-full bg-primary-400 animate-pulse" />
              <span className="text-primary-400 text-sm font-mono">Available for work</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-4">
              Hi, I'm Ahmad {' '}
              <br />
              <span className="gradient-text">A Full Stack</span>
              <br />
              Developer
            </h1>

            <div className="flex items-center gap-2 h-10 mb-6">
              <span className="text-gray-400 text-lg font-mono">{'>'}</span>
              <span className="text-primary-300 text-lg font-mono font-medium">
                {displayed}
                <span className="animate-pulse">|</span>
              </span>
            </div>

            <p className="text-gray-400 text-lg leading-relaxed mb-8 max-w-lg">
              I build modern, performant web applications from front to back — crafting seamless user experiences and robust APIs that scale.
            </p>

            <div className="flex flex-wrap gap-4">
              <a href="#projects" className="btn-primary">
                View Projects
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
              <a href="#contact" className="btn-outline">
                Get In Touch
              </a>
            </div>

            {/* Stats */}
            <div className="flex gap-8 mt-12 pt-8 border-t border-dark-600">
              {[
                { value: '3+', label: 'Years Experience' },
                { value: '30+', label: 'Projects Built' },
                { value: '10+', label: 'Technologies' },
              ].map(stat => (
                <div key={stat.label}>
                  <div className="text-2xl font-bold text-white">{stat.value}</div>
                  <div className="text-gray-500 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — code card */}
          <div className="hidden lg:block animate-fade-in">
            <div className="relative animate-float">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary-500/20 to-teal-500/10 rounded-2xl blur-xl" />
              <div className="relative bg-dark-800 border border-dark-500 rounded-2xl overflow-hidden shadow-2xl">
                {/* Window chrome */}
                <div className="flex items-center gap-1.5 px-4 py-3 bg-dark-700 border-b border-dark-500">
                  <span className="w-3 h-3 rounded-full bg-red-500/80" />
                  <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <span className="w-3 h-3 rounded-full bg-green-500/80" />
                  <span className="ml-3 text-gray-500 font-mono text-xs">developer.js</span>
                </div>
                <pre className="p-6 font-mono text-sm leading-relaxed text-left overflow-auto">
<code><span className="text-blue-400">const</span> <span className="text-primary-300">developer</span> <span className="text-white">= </span><span className="text-yellow-300">{'{'}</span>{'\n'}
<span className="text-gray-500">  </span><span className="text-teal-300">name</span><span className="text-white">: </span><span className="text-green-400">"Full Stack Dev"</span><span className="text-white">,</span>{'\n'}
<span className="text-gray-500">  </span><span className="text-teal-300">stack</span><span className="text-white">: [</span>{'\n'}
<span className="text-gray-500">    </span><span className="text-green-400">"React"</span><span className="text-white">, </span><span className="text-green-400">"Next.js"</span><span className="text-white">,</span>{'\n'}
<span className="text-gray-500">    </span><span className="text-green-400">"Node.js"</span><span className="text-white">, </span><span className="text-green-400">"FastAPI"</span><span className="text-white">,</span>{'\n'}
<span className="text-gray-500">    </span><span className="text-green-400">"MongoDB"</span><span className="text-white">, </span><span className="text-green-400">"SQL"</span>{'\n'}
<span className="text-gray-500">  </span><span className="text-white">],</span>{'\n'}
<span className="text-gray-500">  </span><span className="text-teal-300">status</span><span className="text-white">: </span><span className="text-green-400">"available"</span><span className="text-white">,</span>{'\n'}
<span className="text-gray-500">  </span><span className="text-teal-300">coffee</span><span className="text-white">: </span><span className="text-orange-400">Infinity</span>{'\n'}
<span className="text-yellow-300">{'}'}</span><span className="text-white">;</span></code>
                </pre>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-600 animate-bounce">
          <span className="text-xs font-mono">scroll</span>
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>
    </section>
  )
}
