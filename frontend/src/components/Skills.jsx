import { useInView } from '../hooks/useInView'

const skillCategories = [
  {
    label: 'Frontend',
    color: 'from-blue-500/20 to-blue-600/5',
    border: 'border-blue-500/30',
    icon: '🎨',
    skills: [
      { name: 'React.js', level: 92 },
      { name: 'Next.js', level: 88 },
      { name: 'Tailwind CSS', level: 95 },
      { name: 'HTML / CSS', level: 97 },
    ],
  },
  {
    label: 'Backend',
    color: 'from-primary-500/20 to-primary-600/5',
    border: 'border-primary-500/30',
    icon: '⚙️',
    skills: [
      { name: 'Node.js', level: 90 },
      { name: 'Express.js', level: 88 },
      { name: 'FastAPI', level: 80 },
      { name: 'REST APIs', level: 93 },
    ],
  },
  {
    label: 'Database',
    color: 'from-orange-500/20 to-orange-600/5',
    border: 'border-orange-500/30',
    icon: '🗄️',
    skills: [
      { name: 'MongoDB', level: 87 },
      { name: 'MySQL', level: 83 },
      { name: 'PostgreSQL', level: 80 },
      { name: 'SQL Design', level: 85 },
    ],
  },
  {
    label: 'Other Tools',
    color: 'from-purple-500/20 to-purple-600/5',
    border: 'border-purple-500/30',
    icon: '🛠️',
    skills: [
      { name: 'WordPress', level: 85 },
      { name: 'Git & GitHub', level: 92 },
      { name: 'REST API Design', level: 90 },
      { name: 'Linux / CLI', level: 78 },
    ],
  },
]

const techBadges = [
  'React', 'Next.js', 'Tailwind CSS', 'Node.js', 'Express.js',
  'FastAPI', 'MongoDB', 'MySQL', 'PostgreSQL', 'WordPress',
  'Python', 'JavaScript', 'HTML5', 'CSS3', 'Git',
]

function SkillBar({ name, level, delay, inView }) {
  return (
    <div className="mb-4">
      <div className="flex justify-between items-center mb-1.5">
        <span className="text-gray-300 text-sm font-medium">{name}</span>
        <span className="text-primary-400 text-xs font-mono">{level}%</span>
      </div>
      <div className="h-1.5 bg-dark-600 rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-primary-500 to-teal-400 rounded-full transition-all ease-out"
          style={{
            width: inView ? `${level}%` : '0%',
            transitionDuration: '1s',
            transitionDelay: `${delay}ms`,
          }}
        />
      </div>
    </div>
  )
}

export default function Skills() {
  const [ref, inView] = useInView()

  return (
    <section id="skills" className="py-24 bg-dark-800/40 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_rgba(32,169,161,0.06)_0%,_transparent_60%)]" />

      <div ref={ref} className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <p className="section-subheading">What I Work With</p>
          <h2 className="section-heading">
            My <span className="gradient-text">Skills</span> & Technologies
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            A curated set of tools and technologies I use to build reliable, modern web applications end to end.
          </p>
        </div>

        {/* Skill categories */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {skillCategories.map((cat, ci) => (
            <div
              key={cat.label}
              className={`bg-gradient-to-br ${cat.color} border ${cat.border} rounded-2xl p-6 transition-all duration-700 ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${ci * 120}ms` }}
            >
              <div className="flex items-center gap-3 mb-5">
                <span className="text-2xl">{cat.icon}</span>
                <h3 className="text-white font-semibold">{cat.label}</h3>
              </div>
              {cat.skills.map((skill, si) => (
                <SkillBar
                  key={skill.name}
                  name={skill.name}
                  level={skill.level}
                  delay={ci * 120 + si * 100}
                  inView={inView}
                />
              ))}
            </div>
          ))}
        </div>

        {/* Tech badge cloud */}
        <div className="text-center">
          <p className="text-gray-500 text-sm font-mono mb-6">// tech stack at a glance</p>
          <div className="flex flex-wrap justify-center gap-3">
            {techBadges.map((tech, i) => (
              <span
                key={tech}
                className={`px-4 py-2 bg-dark-700 border border-dark-500 hover:border-primary-500/50 hover:text-primary-400 text-gray-400 text-sm rounded-full transition-all duration-300 cursor-default ${
                  inView ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
                }`}
                style={{ transitionDelay: `${400 + i * 50}ms`, transitionDuration: '0.5s' }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
