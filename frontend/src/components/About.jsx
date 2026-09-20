import { useInView } from '../hooks/useInView'

const highlights = [
  { icon: '🚀', title: 'Fast Delivery', desc: 'Clean, production-ready code shipped on time.' },
  { icon: '🔗', title: 'REST API Expert', desc: 'Designing and consuming RESTful APIs with precision.' },
  { icon: '📱', title: 'Responsive UI', desc: 'Beautiful interfaces that work on every device.' },
  { icon: '🗄️', title: 'Database Design', desc: 'Structured schemas with MongoDB, MySQL, and PostgreSQL.' },
]

export default function About() {
  const [ref, inView] = useInView()

  return (
    <section id="about" className="py-24 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(32,169,161,0.05)_0%,_transparent_70%)]" />

      <div ref={ref} className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left — image side */}
          <div className={`transition-all duration-700 ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
            <div className="relative">
              <div className="absolute -inset-3 bg-gradient-to-br from-primary-500/20 to-transparent rounded-2xl" />
              <img
                src="https://images.pexels.com/photos/5473299/pexels-photo-5473299.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                alt="Developer at work"
                className="relative rounded-2xl object-cover w-full h-80 lg:h-[420px] shadow-2xl border border-dark-500"
              />
              {/* Floating badge */}
              <div className="absolute -bottom-4 -right-4 bg-dark-700 border border-primary-500/50 rounded-xl px-4 py-3 shadow-xl">
                <div className="text-2xl font-bold text-white">3+</div>
                <div className="text-primary-400 text-xs font-mono">Years Coding</div>
              </div>
            </div>
          </div>

          {/* Right — text */}
          <div className={`transition-all duration-700 delay-200 ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
            <p className="section-subheading">Who I Am</p>
            <h2 className="section-heading">
              Passionate about building <span className="gradient-text">great software</span>
            </h2>
            <p className="text-gray-400 leading-relaxed mb-4">
              I'm a full stack web developer who loves turning ideas into real, working products. From designing database schemas to crafting pixel-perfect UIs, I handle the entire development lifecycle.
            </p>
            <p className="text-gray-400 leading-relaxed mb-8">
              My experience spans building REST APIs with Node.js, Express, and FastAPI, creating dynamic frontends with React and Next.js, and managing both SQL and NoSQL databases. I also work with WordPress for content-driven projects.
            </p>

            <div className="grid grid-cols-2 gap-4">
              {highlights.map(h => (
                <div key={h.title} className="flex gap-3 p-4 bg-dark-700/50 border border-dark-500 rounded-xl hover:border-primary-500/40 transition-colors">
                  <span className="text-2xl">{h.icon}</span>
                  <div>
                    <div className="text-white font-semibold text-sm">{h.title}</div>
                    <div className="text-gray-500 text-xs mt-0.5">{h.desc}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 flex gap-4">
              <a href="#contact" className="btn-primary">Let's Work Together</a>
              <a
                href="#projects"
                className="btn-outline"
              >
                See My Work
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
