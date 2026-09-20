import { useState, useEffect } from 'react'
import { useInView } from '../hooks/useInView'

// Placeholder data — replace this with a real API call when your backend is ready.
// Example: const res = await fetch('https://your-api.com/projects')
const FALLBACK_PROJECTS = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'Full-stack e-commerce app with cart, payment integration, and admin dashboard. Built with React, Node.js, Express, and MongoDB.',
    tags: ['React', 'Node.js', 'Express', 'MongoDB'],
    image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&h=400&w=700',
    liveUrl: '#',
    githubUrl: '#',
    featured: true,
  },
  {
    id: 2,
    title: 'Blog CMS',
    description: 'Headless WordPress CMS with a custom Next.js frontend. Dynamic routing, SSR, and REST API integration.',
    tags: ['Next.js', 'WordPress', 'REST API', 'Tailwind'],
    image: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&h=400&w=700',
    liveUrl: '#',
    githubUrl: '#',
    featured: true,
  },
  {
    id: 3,
    title: 'Task Management API',
    description: 'RESTful API built with FastAPI and PostgreSQL. JWT auth, role-based access control, and full CRUD operations.',
    tags: ['FastAPI', 'PostgreSQL', 'Python', 'JWT'],
    image: 'https://images.pexels.com/photos/6424583/pexels-photo-6424583.jpeg?auto=compress&cs=tinysrgb&h=400&w=700',
    liveUrl: '#',
    githubUrl: '#',
    featured: false,
  },
  {
    id: 4,
    title: 'Real-time Chat App',
    description: 'WebSocket-based chat application with rooms, online presence, and message history stored in MongoDB.',
    tags: ['React', 'Node.js', 'Socket.io', 'MongoDB'],
    image: 'https://images.pexels.com/photos/1591062/pexels-photo-1591062.jpeg?auto=compress&cs=tinysrgb&h=400&w=700',
    liveUrl: '#',
    githubUrl: '#',
    featured: false,
  },
  {
    id: 5,
    title: 'Portfolio Dashboard',
    description: 'Analytics dashboard with charts, data tables, and REST API integration. Responsive layout with dark mode.',
    tags: ['React', 'Tailwind', 'REST API', 'Charts'],
    image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&h=400&w=700',
    liveUrl: '#',
    githubUrl: '#',
    featured: false,
  },
  {
    id: 6,
    title: 'Restaurant Booking System',
    description: 'Online reservation platform with table management, confirmation emails, and SQL database backend.',
    tags: ['Next.js', 'Node.js', 'MySQL', 'Express'],
    image: 'https://images.pexels.com/photos/696218/pexels-photo-696218.jpeg?auto=compress&cs=tinysrgb&h=400&w=700',
    liveUrl: '#',
    githubUrl: '#',
    featured: false,
  },
]

const allTags = ['All', 'React', 'Next.js', 'Node.js', 'FastAPI', 'MongoDB', 'MySQL', 'WordPress']

function ProjectCard({ project, index, inView }) {
  return (
    <div
      className={`group bg-dark-700 border border-dark-500 rounded-2xl overflow-hidden hover:border-primary-500/40 transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary-500/10 ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="relative overflow-hidden h-48">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark-700 via-dark-700/20 to-transparent" />
        {project.featured && (
          <div className="absolute top-3 right-3 bg-primary-500 text-white text-xs font-semibold px-2 py-1 rounded-full">
            Featured
          </div>
        )}
      </div>

      <div className="p-6">
        <h3 className="text-white font-bold text-lg mb-2 group-hover:text-primary-300 transition-colors">
          {project.title}
        </h3>
        <p className="text-gray-400 text-sm leading-relaxed mb-4">{project.description}</p>

        <div className="flex flex-wrap gap-2 mb-5">
          {project.tags.map(tag => (
            <span key={tag} className="text-xs bg-dark-600 border border-dark-400 text-gray-400 px-2 py-1 rounded-md font-mono">
              {tag}
            </span>
          ))}
        </div>

        <div className="flex gap-3">
          <a
            href={project.liveUrl}
            className="flex-1 text-center text-sm py-2 bg-primary-500/10 border border-primary-500/30 text-primary-400 rounded-lg hover:bg-primary-500/20 transition-colors font-medium"
          >
            Live Demo
          </a>
          <a
            href={project.githubUrl}
            className="flex-1 text-center text-sm py-2 bg-dark-600 border border-dark-400 text-gray-400 rounded-lg hover:text-white hover:border-gray-400 transition-colors font-medium"
          >
            GitHub
          </a>
        </div>
      </div>
    </div>
  )
}

export default function Projects() {
  const [ref, inView] = useInView()
  const [projects, setProjects] = useState([])
  const [loading, setLoading] = useState(true)
  const [activeTag, setActiveTag] = useState('All')

  useEffect(() => {
    // When your REST API is ready, replace this with:
    // fetch('https://your-api.com/projects')
    //   .then(res => res.json())
    //   .then(data => setProjects(data))
    //   .catch(() => setProjects(FALLBACK_PROJECTS))
    //   .finally(() => setLoading(false))
    const timer = setTimeout(() => {
      setProjects(FALLBACK_PROJECTS)
      setLoading(false)
    }, 600)
    return () => clearTimeout(timer)
  }, [])

  const filtered = activeTag === 'All'
    ? projects
    : projects.filter(p => p.tags.some(t => t.toLowerCase().includes(activeTag.toLowerCase())))

  return (
    <section id="projects" className="py-24 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_rgba(32,169,161,0.06)_0%,_transparent_60%)]" />

      <div ref={ref} className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <p className="section-subheading">What I've Built</p>
          <h2 className="section-heading">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            A selection of projects I've worked on — each one a chance to solve real problems with clean, maintainable code.
          </p>
        </div>

        {/* Filter tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {allTags.map(tag => (
            <button
              key={tag}
              onClick={() => setActiveTag(tag)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                activeTag === tag
                  ? 'bg-primary-500 text-white'
                  : 'bg-dark-700 border border-dark-500 text-gray-400 hover:border-primary-500/40 hover:text-primary-400'
              }`}
            >
              {tag}
            </button>
          ))}
        </div>

        {loading ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="bg-dark-700 border border-dark-500 rounded-2xl overflow-hidden animate-pulse">
                <div className="h-48 bg-dark-600" />
                <div className="p-6 space-y-3">
                  <div className="h-5 bg-dark-600 rounded w-3/4" />
                  <div className="h-3 bg-dark-600 rounded" />
                  <div className="h-3 bg-dark-600 rounded w-5/6" />
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} inView={inView} />
            ))}
          </div>
        )}

        {!loading && filtered.length === 0 && (
          <div className="text-center py-16 text-gray-500">
            No projects found for this filter.
          </div>
        )}
      </div>
    </section>
  )
}
